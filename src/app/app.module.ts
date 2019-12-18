import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ModuleService } from './services/module.service';

//import { JitCompilerFactory } from '@angular/platform-browser-dynamic'; Compiler, COMPILER_OPTIONS, CompilerFactory, 
// export function createCompiler(compilerFactory: CompilerFactory) {
//   return compilerFactory.createCompiler();
// }

const moduleFactory = (moduleService: ModuleService) => {
  return () => {
    return moduleService.init();
  };
};

const routes = [
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent, HomeComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: moduleFactory,
      deps: [ModuleService],
      multi: true
    }
    // { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
    // { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS] },
    // { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] }
  ]
})
export class AppModule { }