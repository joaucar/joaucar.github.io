import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { config } from 'src/config';
import { ThanksComponent } from './thanks/thanks.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, MapComponent, ThanksComponent, FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: config.APIkey
    })
  ],
  providers: [],
  bootstrap: [AppComponent, FooterComponent]
})
export class AppModule {}
