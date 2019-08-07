import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { config } from 'src/config';
import { ThanksComponent } from './thanks/thanks.component';

@NgModule({
  declarations: [AppComponent, MapComponent, ThanksComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FontAwesomeModule, AgmCoreModule.forRoot({
    apiKey: config.APIkey
  })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
