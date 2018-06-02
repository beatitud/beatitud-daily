import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatFormFieldModule,
  MatDividerModule,
} from '@angular/material';


const materialModules = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatFormFieldModule,
  MatDividerModule,
]

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule {}
