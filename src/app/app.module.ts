import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {AuthModule} from "./authentication/auth.module";
import {AccommodationModule} from "./accommodation/accommodation.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MaterialModule } from './material.module';

import {ProfileModule} from "./profile/profile.module";
import {LayoutModule} from "./layout/layout.module";
import { MapsModule } from '@syncfusion/ej2-angular-maps';
import {ReservationsModule} from "./reservation/reservations.module";
import {Interceptor} from "./authentication/interceptor";
import {MatDialogModule} from "@angular/material/dialog";
import {CommonModule, DatePipe} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AccommodationModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProfileModule,
    LayoutModule,
    MapsModule,
    ReservationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true,
  },DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
