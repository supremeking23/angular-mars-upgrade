import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PrototypeLinksComponent } from './prototype-links/prototype-links.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'prototype-links', component: PrototypeLinksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
