import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import { AppComponent } from './app.component';

//Cambiar el locale de la app
import localEsp from '@angular/common/locales/es-CU';
import localIt from '@angular/common/locales/it';
import localja from '@angular/common/locales/ja';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localEsp );
registerLocaleData( localIt );
registerLocaleData( localja );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CU' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
