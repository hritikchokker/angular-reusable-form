import { CommonModule } from '@angular/common';
import { CompleteFormComponent } from './complete-form.component';
import { FormHandlerModule } from '../form-handler/form-handler.module';
import { InputFieldModule } from '../input-field/input-field.module';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CompleteFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CompleteFormComponent }]),
    InputFieldModule,
    MatButtonModule,
    FormHandlerModule,
    MatSelectModule
  ]
})
export class CompleteFormModule { }
