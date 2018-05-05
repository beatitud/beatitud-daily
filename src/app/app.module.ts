import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';

// Import all routes
import { AppRoutingModule, routingComponents } from './app.routing';
import { RouterLinkActive } from '@angular/router';

// Import Material
import { MaterialModule } from './material.module';

// Import App Settings
import { AppSettings } from "./app.settings";

// Import main app components
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

// Import all services
import { EvzoLanguagesService, EvzoReadingsService, EvzoSaintsService } from "./services/publication.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    LoadingBarHttpClientModule,
  ],
  declarations: [
    AppComponent,
    routingComponents,
    SideNavComponent
  ],
  providers: [
    AppSettings,
    EvzoLanguagesService,
    EvzoReadingsService,
    EvzoSaintsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
