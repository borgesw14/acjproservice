import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavComponent } from './nav/nav.component';
import { ServiceCatalogComponent } from './service-catalog/service-catalog.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavComponent,
    ServiceCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
