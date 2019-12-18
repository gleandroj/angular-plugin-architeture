import { NgModule } from '@angular/core';
import { Lazylib2Component } from './lazylib2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    component: Lazylib2Component,
    path: ''
  }
];

@NgModule({
  declarations: [Lazylib2Component],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [Lazylib2Component],
  providers: [

  ]
})
export class Lazylib2Module {
  static prefix = 'lazy-lib2';
  static menus = [
    {
      path: '/',
      title: 'Lazy Lib 2'
    }
  ];
}
