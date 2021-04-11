import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-mat-error',
  templateUrl: './mat-error.component.html',
  styleUrls: ['./mat-error.component.scss'],
})
export class MatErrorComponent implements OnInit, OnChanges, OnDestroy {
  subscription: Subscription[] = [];
  textValue;
  @Input() set finalValue(value: string) {
    if (value) {
      setTimeout(() => {
        this.textValue = value;
      })
    }
  };
  fieldName: string;
  formControl: FormControl;
  @Input() set customControl(control: FormControl) {
    setTimeout(() => {
      // this.clearSubscription();
      this.formControl = control;
      this.detectChanges();
    });
  }
  constructor() { }
  ngOnInit(): void {
    // console.log(this.formControl,'formchotr m')
  }

  doAlert() {
    console.log(this.textValue, 'text asjasjndas')
  }

  detectChanges() {
    this.subscription.push(
      this.formControl.valueChanges
        .subscribe(data => {
          if (data && data.length < 3 && this.formControl.hasError('minLength')) {
            this.formControl.setErrors({ 'minLength': true });
            return;
          }
          if (data && data.length > 20) {
            this.formControl.setErrors({ 'maxLength': true });
            return;
          }
          // if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(data)) {
          //   this.formControl.setErrors({ 'pattern': true });
          //   return;
          // }
          console.log(data, 'value changes');
        })
    )
  }
  getStatus() {
    this.formControl.status;
  }

  ngOnChanges() {
    console.log(this.textValue, 'text value')
  }
  clearSubscription() {
    this.subscription.forEach(subs => subs.unsubscribe());
  }

  ngOnDestroy(): void {
    this.clearSubscription();
  }
}
