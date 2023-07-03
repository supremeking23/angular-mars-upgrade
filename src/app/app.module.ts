import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { FormsModule } from '@angular/forms';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule, BsModalRef  } from 'ngx-bootstrap/modal';

import { LoginComponent } from './login/login.component';
import { PrototypeLinksComponent } from './prototype-links/prototype-links.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { SearchCustomerModalComponent } from './search-customer-modal/search-customer-modal.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { ToastrModule } from 'ngx-toastr';

import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrototypeLinksComponent,
    NavigationComponent,
    CustomerDashboardComponent,
    SearchCustomerModalComponent,
    AdminDashboardComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    BsDatepickerModule,
    FormsModule,
    AlertModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot(), // ToastrModule added
    ReactiveFormsModule 
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
