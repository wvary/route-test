import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';

const thisRoute: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(thisRoute, {
      useHash: true, initialNavigation: false
    })
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }