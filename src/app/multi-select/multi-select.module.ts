import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MultiSelectComponent } from './multi-select.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    MultiSelectComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
  ], exports: [MultiSelectComponent,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule]
})
export class MultiSelectModule { }
