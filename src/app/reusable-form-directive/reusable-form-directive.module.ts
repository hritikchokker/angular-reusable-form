import { CommonModule } from '@angular/common';
import { MatErrorComponent } from './mat-error/mat-error.component';
import { NgModule } from '@angular/core';
import { ReusableFormDirective } from './reusable-form.directive';

@NgModule({
  declarations: [ReusableFormDirective, MatErrorComponent],
  imports: [
    CommonModule
  ], exports: [ReusableFormDirective, MatErrorComponent]
})
export class ReusableFormDirectiveModule { }
