import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SharedModule } from "./shared/shared.module";

//Configuración del locale de la app
import localeHN from "@angular/common/locales/es-HN";
import localeFrCAN from "@angular/common/locales/fr-CA";

import { registerLocaleData } from "@angular/common";


registerLocaleData( localeHN);
registerLocaleData( localeFrCAN);


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
      {
        provide: LOCALE_ID, useValue: 'es-HN'
      }
    ],
    bootstrap: [AppComponent],
    imports: [
      AppRoutingModule,
      BrowserModule,
      BrowserAnimationsModule,
      SharedModule,
    ],
  })
export class AppModule { }
