import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NehaCompComponent } from './neha-comp/neha-comp.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    NehaCompComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    NehaCompComponent
  ]
})
export class NehaModule { }
  