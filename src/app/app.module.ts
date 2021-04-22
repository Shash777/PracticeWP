import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from '../components/test1/test1.component';
import { Test2Component } from 'src/components/test2/test2.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FcpComponent } from '../components/fcp/fcp.component';
import { LogPageComponent } from 'src/components/log-page/log-page.component';
import { DashPageComponent } from 'src/components/dash-page/dash-page.component';


const routes: Routes = [
 { path :'Login' , component: Test1Component },
 { path :'Register' , component: Test2Component },
 { path : "RegisterForm", component : FcpComponent },
 { path: "LoginPage", component: LogPageComponent},
 {path : "DashPage", component : DashPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    FcpComponent,
    LogPageComponent,
    DashPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
