import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home.module';
import { LoginModule } from './login.module';


@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    LoginModule,
    RouterModule.forRoot([], {
      useHash: true, initialNavigation: false
    })
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }