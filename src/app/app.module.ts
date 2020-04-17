import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ProfileService} from "./home/profile.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AngularFireAnalyticsModule, CONFIG, ScreenTrackingService, UserTrackingService} from "@angular/fire/analytics";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp( environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [
    ProfileService,
    ScreenTrackingService,
    UserTrackingService,
    { provide: CONFIG, useValue: {
        send_page_view: false,
        allow_ad_personalization_signals: false,
        anonymize_ip: true
      } }
  ],
  bootstrap: [AppComponent],
  exports: [

  ]
})
export class AppModule { }
