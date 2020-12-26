import { CommonModule } from '@angular/common';
import { CompleteFormComponent } from './complete-form.component';
import { FormHandlerModule } from '../form-handler/form-handler.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CompleteFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CompleteFormComponent }]),
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormHandlerModule,
    MatSelectModule
  ]
})
export class CompleteFormModule { }
