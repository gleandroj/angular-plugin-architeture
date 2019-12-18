import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

import * as AngularCore from '@angular/core';
import * as AngularCommon from '@angular/common';
import * as AngularRouter from '@angular/router';
import * as BrowserAnimations from '@angular/platform-browser/animations';
import * as hello from 'hello-world-js';
import { Subject } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

declare var window: any;

export const externals = {
    '@angular/core': AngularCore,
    '@angular/common': AngularCommon,
    '@angular/router': AngularRouter,
    '@angular/platform-browser/animations': BrowserAnimations,
    'hello-world-js': hello
};

interface Module {
    url: string;
    name: string;
    module: string;
    prefix: string;
    loaded?: boolean;
    loading?: boolean;
    error?: any;
    menus: { path: string; title: string }[]
};

@Injectable({
    providedIn: 'root'
})
export class ModuleService {

    private moduleLoaded$ = new Subject<Module>();

    private modules: Module[] = [
        {
            url: 'assets/lazylib/bundles/lazylib.umd.js',
            name: 'lazylib',
            module: 'LazylibModule',
            prefix: 'lazy-lib',
            menus: [
                {
                    path: '/',
                    title: 'Lazy Lib'
                }
            ]
        }
    ];

    private get router(): Router {
        return this.injector.get(Router);
    }

    public constructor(
        private injector: Injector
    ) {
        const define = this.define.bind(this);
        define.amd = true;
        window['define'] = define;
    }

    public registeredMenus(): { path: string; title: string; }[] {
        return this.modules.reduce((p, c, i, data) => {
            const menus = c.menus.map(m => ({
                ...m,
                path: `${c.prefix}${m.path}`
            }));
            return [...p, ...menus];
        }, []);
    }

    private loadModule(moduleInfo: Module): void {
        if (moduleInfo.loading) {
            console.log(`Module: ${moduleInfo.url} already loading.`);
            return;
        }

        console.log('Load: ', moduleInfo.url);
        moduleInfo.loading = true;
        const script = document.createElement('script');
        script.type = 'module';
        script.src = moduleInfo.url;
        script.onerror = () => {
            console.log(`Falha ao carregar o módulo: ${moduleInfo.name}, origim: script download.`);
            moduleInfo.loading = moduleInfo.loaded = false;
            this.moduleLoaded$.next(moduleInfo);
        };
        document.body.append(script);
    }

    private async asyncDefine(name: string, deeps: string[], moduleInfo: Module, factory: Function) {
        const factoryArgs = [];

        for (let i = 1; i < deeps.length; i++) {
            const deep = deeps[i];

            if (externals[deep] != null) {
                factoryArgs.push(externals[deep]);
            } else {
                const deepModuleInfo = this.modules.find(m => m.name === deep);

                if (deepModuleInfo != null) {

                    if (deepModuleInfo.loading) {
                        throw new Error(`Dependência ciclica detectada: ${name} -> ${deep} -> ${name}`);
                    }

                    this.loadModule(deepModuleInfo);

                    const m = await this.moduleLoaded$
                        .pipe(
                            filter(m => m.name === deep),
                            take(1)
                        ).toPromise();

                    if (m.loaded) {
                        factoryArgs.push(externals[m.name]);
                    } else {
                        throw new Error(`Falha ao carregar depêndencia: ${deep}`);
                    }
                } else {
                    throw new Error(`Dependencia de módulo não encontrada: ${deep}`);
                }
            }
        }

        const exp = {};
        factory.apply(this, [exp, ...factoryArgs]);
        if (exp == undefined || Object.keys(exp).length === 0) {
            throw new Error(`Falha ao carregar módulo: ${name}, nenhum valor exportado.`);
        }
        externals[name] = exp;
    }

    private async define() {
        const name = arguments[0];
        const deeps = arguments[1];
        const moduleInfo = this.modules.find(m => m.name === name);
        const factory = arguments[2];

        this.asyncDefine(name, deeps, moduleInfo, factory).then(() => {
            moduleInfo.loaded = true;
            moduleInfo.loading = false;
            this.moduleLoaded$.next(moduleInfo);
            console.log(`Modulo ${moduleInfo.name} carregado.`);
        }, (error) => {
            moduleInfo.loaded = false;
            moduleInfo.loading = false;
            moduleInfo.error = error;
            this.moduleLoaded$.next(moduleInfo);
        });
    }

    public init() {
        console.log("Module service initializing...");
        this.modules.forEach((m) => this.router.config.push({
            path: m.prefix,
            loadChildren: () => {
                if (m.loaded) {
                    return externals[m.name][m.module];
                } else if (m.error != null) {
                    alert(`Falha ao carregar o módulo: ${m.name}, ${m.error}`);
                    throw m.error;
                }
                this.loadModule(m);
                return this.moduleLoaded$.pipe(
                    filter(moduleInfo => moduleInfo.name === m.name),
                    map(() => {
                        if (m.loaded) {
                            return externals[m.name][m.module];
                        } else {
                            alert(`Falha ao carregar o módulo: ${m.name}, ${m.error}`);
                            throw m.error || new Error(`loadChildren: Falha ao carregar o módulo: ${m.name}`);
                        }
                    })
                );
            }
        }));
    }
}