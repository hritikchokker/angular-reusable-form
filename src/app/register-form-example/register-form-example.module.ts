import { CommonModule } from '@angular/common';
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
    ReusableFormDirectiveModule
  ]
})
export class RegisterFormExampleModule { }
