import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from "./shared/pageNotFound/page.not.found.component";

// Import scenes components
import {ReadingsComponent} from "./views/readings/readings.component"
import {SaintsComponent} from "./views/saints/saints.component";
import {MassScheduleComponent} from "./views/massSchedule/mass.schedule.component";
import {PrayersComponent} from "./views/prayers/prayers.component";
import {CalendarComponent} from "./views/calendar/calendar.component";

// Import all the other components here
import {SideNavComponent} from "./shared/sideNav/side.nav.component";
import {ToolbarComponent} from "./shared/toolbar/toolbar.component";
import {SaintProfileComponent} from "./views/saintProfile/saint.profile.component";

export const appRoutes: Routes = [
  /*
  * Paths
  * */
  {path: 'readings', component: ReadingsComponent,},
  {path: 'saints', component: SaintsComponent,},
  {path: 'saint', component: SaintProfileComponent,},
  {path: 'mass-schedule', component: MassScheduleComponent,},
  {path: 'prayers', component: PrayersComponent,},
  {path: 'calendar', component: CalendarComponent,},
  {path: "**", component: PageNotFoundComponent,},
  /*
  * Redirection
  * */
  // { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }

export const routingComponents = [
  ReadingsComponent,
  SaintsComponent,
  MassScheduleComponent,
  PrayersComponent,
  CalendarComponent,
  SideNavComponent,
  ToolbarComponent,
  SaintProfileComponent,
  PageNotFoundComponent,
]
