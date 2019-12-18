import { AfterViewInit, Compiler, Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleService } from './services/module.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent implements AfterViewInit {

  public menus = [
    {
      path: '/home',
      title: 'Home'
    }
  ];

  constructor(private moduleService: ModuleService) {
    this.menus.push(...moduleService.registeredMenus());
  }

  async ngAfterViewInit() {

    // const moduleInfo = await fetch('http://localhost:3000/modules').then(r => r.json()).then(r => r[0]);
    // const script = document.createElement('script');
    // script.type = 'module';
    // script.src = moduleInfo.url;
    // script.onload = () => {
    //   console.log(moduleInfo);
    // };
    // document.body.appendChild(script);
    // System.register('@angular/core', AngularCore);
    // System.register('@angular/common', AngularCommon);
    // System.register('@angular/router', AngularRouter);
    // System.register('@angular/platform-browser/animations', BrowserAnimations);

    // const source = await fetch(moduleInfo.url).then(r => r.text());
    // const exports = {}; // this will hold module exports
    // const modules = {   // this is the list of modules accessible by plugins
    //   '@angular/core': AngularCore,
    //   '@angular/common': AngularCommon,
    //   '@angular/router': AngularRouter,
    //   '@angular/platform-browser/animations': BrowserAnimations
    // };
    // const require: any = (module) => modules[module];
    // eval(source);

    // console.log(modules);
    // console.log(source);
    // console.log(exports);

    //Need to check if there is another solution for eval as this is described as 'Evil'
    // const compiled = await this.compiler.compileModuleAndAllComponentsSync(exports[`${moduleInfo.name}`]);
    // const _m = compiled.ngModuleFactory.create(this.injector);
    // console.log(_m);

    // const loadedModule = exports[`${moduleInfo.name}`];
    // console.log(loadedModule);

    // const prefix = loadedModule.prefix;
    // const menus = loadedModule.menus.map(m => ({
    //   title: m.title,
    //   path: `${prefix}${m.path}`
    // }));

    // this.menus = [
    //   ...this.menus,
    //   ...menus
    // ];

    // this.router.resetConfig([
    //   ...this.router.config,
    //   {
    //     path: prefix,
    //     loadChildren: () => {
    //       console.log(loadedModule);
    //       return loadedModule;
    //     }
    //   }
    // ]);

    // return exports;
  }


}