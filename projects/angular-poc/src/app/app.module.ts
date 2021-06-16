import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MunicipaliteModule } from './modules/municipalite/municipalite.module';
import { CoreModule } from './modules/core/core.module';
import { EvenementModule } from './modules/evenement/evenement.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MunicipaliteModule,
    BrowserAnimationsModule,
    CoreModule,
    EvenementModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
