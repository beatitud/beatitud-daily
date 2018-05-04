import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReadingsComponent } from './modules/readings/readings.component';
import { SaintsComponent } from "./modules/saints/saints.component";
import { MassScheduleComponent} from "./modules/mass-schedule/mass-schedule.component";
import { PrayersComponent } from "./modules/prayers/prayers.component";

const appRoutes: Routes = [
  /*
  * Paths
  * */
  { path: 'readings', component: ReadingsComponent, },
  { path: 'saints', component: SaintsComponent, },
  { path: 'mass-schedule', component: MassScheduleComponent, },
  { path: 'prayers', component: PrayersComponent, },
  /*
  * Redirection
  * */
  { path: '', redirectTo: '', pathMatch: 'full' },
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

export const routingComponents = [ReadingsComponent, SaintsComponent, MassScheduleComponent, PrayersComponent]
