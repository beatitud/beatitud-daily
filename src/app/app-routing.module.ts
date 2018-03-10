import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReadingsComponent } from './readings/readings.component';

const appRoutes: Routes = [
  /*
  * Paths
  * */
  { path: 'test', component: ReadingsComponent, },
  { path: 'readings', component: ReadingsComponent, },
  /*
  * Redirection
  * */
  { path: '', redirectTo: 'test', pathMatch: 'full' },
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
