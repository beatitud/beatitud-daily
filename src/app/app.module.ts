import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MaterialModule} from "./material.module";

// Import all routes
import { AppRoutingModule, routingComponents } from './app.routing';
import { RouterLinkActive } from '@angular/router';

// Import App Settings
import { AppSettings } from "./app.settings";

// Import main app components
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/topBar/top.bar.component';
import { SideNavComponent } from "./scenes/data/components/sideNav/side.nav.component";

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
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ...routingComponents,
    SideNavComponent,
  ],
  providers: [
    AppSettings,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
