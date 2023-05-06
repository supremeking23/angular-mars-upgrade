import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule, BsModalRef  } from 'ngx-bootstrap/modal';

import { LoginComponent } from './login/login.component';
import { PrototypeLinksComponent } from './prototype-links/prototype-links.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { SearchCustomerModalComponent } from './search-customer-modal/search-customer-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrototypeLinksComponent,
    NavigationComponent,
    CustomerDashboardComponent,
    SearchCustomerModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule,
    BsDatepickerModule,
    FormsModule,
    AlertModule,
    ModalModule.forRoot()
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
