import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

const thisRoute: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(thisRoute, {
      useHash: true, initialNavigation: false
    })
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }