import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReadingsComponent } from './readings/readings.component';

const appRoutes: Routes = [
  /*
  * Paths
  * */
  { path: 'readings', component: ReadingsComponent, },
  { path: 'saints', component: ReadingsComponent, },
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
