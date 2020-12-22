import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReusableFormDirective } from './reusable-form.directive';

@NgModule({
  declarations: [ReusableFormDirective],
  imports: [
    CommonModule
  ], exports: [ReusableFormDirective]
})
export class ReusableFormDirectiveModule { }
