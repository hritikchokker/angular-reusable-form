import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormExampleComponent } from './register-form-example.component';
import { ReusableFormDirectiveModule } from '../reusable-form-directive/reusable-form-directive.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegisterFormExampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'',component:RegisterFormExampleComponent}]),
    ReactiveFormsModule,
    ReusableFormDirectiveModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class RegisterFormExampleModule { }
