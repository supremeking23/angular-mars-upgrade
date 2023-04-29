import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LoginComponent } from './login/login.component';
import { PrototypeLinksComponent } from './prototype-links/prototype-links.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrototypeLinksComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule,
    BsDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
