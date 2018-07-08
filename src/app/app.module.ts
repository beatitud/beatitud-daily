import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';
import { EvzoLanguagesService } from "./services/publication.service";
import { SettingsService } from "./services/settings.service";

import { MaterialModule } from "./material.module";
import { NgxImageGalleryModule } from 'ngx-image-gallery';

// Import all routes
import { AppRoutingModule, routingComponents } from './app.routing';
import { RouterLinkActive } from '@angular/router';

// Import App Settings
import { AppSettings } from "./app.settings";

// Import main app components
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    LoadingBarHttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAifn4ZNd7vesbFfqAez39YX3h4tCyEJWM'
    }),
    NgxImageGalleryModule,
  ],
  declarations: [
    AppComponent,
    ...routingComponents,
  ],
  providers: [
    AppSettings,
    EvzoLanguagesService,
    SettingsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
