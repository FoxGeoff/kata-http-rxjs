import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { CountriesComponent } from './country/countries/countries.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
