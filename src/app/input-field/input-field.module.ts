import { InputFieldComponent, InputFormFieldDirective, ValidationPipe } from './input-field.component';

import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
const modules = [
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  MatRadioModule,
  MatIconModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  // MatMomentDateModule,
]

@NgModule({
  declarations: [InputFieldComponent, InputFormFieldDirective, ValidationPipe],
  imports: [
    CommonModule,
    ...modules
  ], exports: [...modules, InputFieldComponent, InputFormFieldDirective, ValidationPipe]
})
export class InputFieldModule { }
