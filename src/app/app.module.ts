import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { FormsModule } from "@angular/forms";

// Import NgRedux for Angular
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
// Import all reducers
import {campaigns} from "./_reducers/index";

// Import all routes
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { RouterLinkActive } from '@angular/router';

// Import Material
import { MaterialModule } from './material.module';

// Import main app components
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';

// Import all services
import { LanguagesService, ReadingsService, SaintsService } from "./_services/publication.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    LoadingBarHttpClientModule,
    StoreModule.forRoot({
      //place for future reducers
      campaigns
    }),
    StoreDevtoolsModule.instrument()
  ],
  declarations: [
    AppComponent,
    routingComponents,
    SideNavComponent
  ],
  providers: [LanguagesService, ReadingsService, SaintsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
