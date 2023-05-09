import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,  
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
