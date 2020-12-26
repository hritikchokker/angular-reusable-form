import { CommonModule } from '@angular/common';
import { FormHandlerComponent } from './form-handler.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormHandlerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ], exports: [FormHandlerComponent]
})
export class FormHandlerModule { }
