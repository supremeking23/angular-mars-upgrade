import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { PrototypeLinksComponent } from './prototype-links/prototype-links.component';




const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'prototype-links', component: PrototypeLinksComponent},
  {path: '', redirectTo: "/prototype-links", pathMatch:"full"},
  {path: 'customer-dashboard', component: CustomerDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
