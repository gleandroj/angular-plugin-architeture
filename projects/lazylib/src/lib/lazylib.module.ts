import { NgModule } from '@angular/core';
import { LazylibComponent } from './lazylib.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    component: LazylibComponent,
    path: ''
  }
];

@NgModule({
  declarations: [LazylibComponent],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [LazylibComponent],
  providers: [

  ]
})
export class LazylibModule {

}
