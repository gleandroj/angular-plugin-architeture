import { Injectable, Injector, Compiler, NgModuleFactory } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import * as AngularCore from '@angular/core';
import * as AngularCommon from '@angular/common';
import * as AngularRouter from '@angular/router';
import * as BrowserAnimations from '@angular/platform-browser/animations';
import * as hello from 'hello-world-js';
import { Subject, interval } from 'rxjs';
import { filter, map, catchError, take } from 'rxjs/operators';

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
        },
        {
            url: 'assets/lazylib2/bundles/lazylib2.umd.js',
            name: 'lazylib2',
            module: 'Lazylib2Module',
            prefix: 'lazy-lib2',
            menus: [
                {
                    path: '/',
                    title: 'Lazy Lib 2'
                }
            ]
        }
    ];

    private get router(): Router {
        return this.injector.get(Router);
    }

    private get http(): HttpClient {
        return this.injector.get(HttpClient);
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
                    this.loadModule(deepModuleInfo);

                    const m = await this.moduleLoaded$
                        .pipe(
                            filter(m => m.name === deep),
                            take(1)
                        ).toPromise();

                    if (m.loaded) {
                        factoryArgs.push(externals[m.name]);
                    } else {
                        delete externals[name];
                        throw new Error(`Falha ao carregar depêndencia: ${deep}`);
                    }

                } else {
                    delete externals[name];
                    throw new Error(`Dependencia de módulo não encontrada: ${deep}`);
                }
            }
        }

        externals[name] = {};
        factory.apply(this, [externals[name], ...factoryArgs]);

        if (externals[name] == undefined || Object.keys(externals[name]).length === 0) {
            throw new Error(`Falha ao carregar módulo: ${name}, nenhum valor exportado.`);
        }
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
            console.log(`asyncDefine: Falha ao carregar o módulo: ${name}`);
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
                } else {
                    this.loadModule(m);
                }
                return this.moduleLoaded$.pipe(
                    filter(moduleInfo => moduleInfo.name === m.name),
                    map(() => {
                        if (m.loaded) {
                            return externals[m.name][m.module];
                        } else {
                            throw new Error(`loadChildren: Falha ao carregar o módulo: ${m.name}`);
                        }
                    })
                );
            }
        }));
    }
}