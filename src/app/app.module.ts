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

import {ReadingsService} from "./readings.service";

import {ngHttpProgress } from "bower_components/angular-http-progress"

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ngHttpProgress,
  ],
  declarations: [
    AppComponent,
    ReadingsComponent,
    SideNavComponent
  ],
  providers: [ReadingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
