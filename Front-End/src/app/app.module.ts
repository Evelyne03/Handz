import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component} from "@angular/core";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatSidenavModule } from "@angular/material/sidenav";
import { LoginComponent } from './login/login.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { ClientComponent } from './client/client.component';
import { MesterComponent } from './mester/mester.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { MakeBookingComponent } from './make-booking/make-booking.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientComponent,
    MesterComponent,
    ClientInfoComponent,
    ClientProfileComponent,
    MakeBookingComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatCardModule,
        MatSidenavModule,
        IonicModule,
        CommonModule,
        FormsModule,
        MatDialogModule
    ],
  providers: [AuthService, MesterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
