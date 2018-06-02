import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReadingsComponent } from "./scenes/readings/readings.component"
import { SaintsComponent } from "./scenes/saints/saints.component";
import { MassScheduleComponent } from "./scenes/massSchedule/mass.schedule.component";
import { PrayersComponent } from "./scenes/prayers/prayers.component";
import { CalendarComponent } from "./scenes/calendar/calendar.component";

export const dataRoutes: Routes = [
  /*
  * Paths
  * */
  { path: 'readings', component: ReadingsComponent, },
  { path: 'saints', component: SaintsComponent, },
  { path: 'mass-schedule', component: MassScheduleComponent, },
  { path: 'prayers', component: PrayersComponent, },
  { path: 'calendar', component: CalendarComponent, },
  /*
  * Redirection
  * */
  // { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      dataRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class DataRoutingModule { }

export const dataRoutingComponents = [ReadingsComponent, SaintsComponent, MassScheduleComponent, PrayersComponent, CalendarComponent,]
