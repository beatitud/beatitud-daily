import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

// Import all routes
import { AppRoutingModule } from './app-routing.module';

// Import Material
import { MaterialModule } from './material.module';

// Import all components
import { AppComponent } from './app.component';
import { ReadingsComponent } from './readings/readings.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import {LanguagesService, ReadingsService, SaintsService} from "./publication.service";
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    LoadingBarHttpClientModule,
  ],
  declarations: [
    AppComponent,
    ReadingsComponent,
    SideNavComponent
  ],
  providers: [LanguagesService, ReadingsService, SaintsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
