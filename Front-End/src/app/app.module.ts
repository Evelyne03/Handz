import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component} from "@angular/core";


import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxTimepickerModule } from "ngx-timepicker";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatSidenavModule } from "@angular/material/sidenav";
import { LoginComponent } from './login/login.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { ClientComponent } from './client/client.component';
import { MesterComponent } from './mester/mester.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { MakeBookingComponent } from './make-booking/make-booking.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

import { RouterModule } from "@angular/router";
import { HistoryComponent } from './history/history.component';
import { SettingsComponent } from './settings/settings.component';
import { HandymanProfileComponent } from './handyman-profile/handyman-profile.component';
import { ProfileComponent } from './handyman-profile/profile/profile.component';
import { RequestsComponent } from './handyman-profile/requests/requests.component';
import { HandymanHistoryComponent} from "./handyman-profile/history/history.component";
import { HandymanSettingsComponent } from './handyman-profile/settings/settings.component';
import { ReviewComponent } from './handyman-profile/review/review.component';
import { StarRatingPipe } from './star-rating.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientComponent,
    MesterComponent,
    ClientInfoComponent,
    ClientProfileComponent,
    MakeBookingComponent,
    ConfirmationDialogComponent,
    HistoryComponent,
    SettingsComponent,
    HandymanProfileComponent,
    ProfileComponent,
    RequestsComponent,
    HandymanHistoryComponent,
    HandymanSettingsComponent,
    ReviewComponent,
    StarRatingPipe,


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
        MatDialogModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        NgxTimepickerModule,
        HttpClientModule
    ],
  providers: [AuthService, MesterComponent, ReviewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
