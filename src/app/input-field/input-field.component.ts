import {
  AbstractControl,
  FormControl
} from '@angular/forms';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Pipe,
  PipeTransform
} from '@angular/core';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFieldComponent {
  @Input() set control(formControl: FormControl) {
    this.formControl = formControl;
    if (this.type) {
      if (this.type === 'date') {
        this.formControl.disable();
      }
    }
  };
  helperType: string;
  @Input() controlName: string;
  formControl: FormControl;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() type;
  @Input() appearance: string;
  @Input() fieldClass: string;
  @Input() isPassword = false;
  // @Input() showCrossIcon = true;
  markDirty = false;
  @Input() fieldStyle = {};
  @Input() errorMessage = '';
  @Input() autoComplete = 'off';
  hide = false;
  showCrossIcon: boolean;
  @Input() set markAsTouch(flag: boolean) {
    if (flag) {
      if (!this.formControl.value || !this.formControl.value.trim()) {
        this.formControl.setValue('');
        this.showCrossIcon = false;
      }
    }
  }
  @Output() emitControlValue: EventEmitter<{ control: FormControl, controlName: string }> = new EventEmitter();
  // clearIcon: boolean;
  constructor() {
    // if (this.showCrossIcon) {
    //   this.clearIcon = this.showCrossIcon;
    // }
  }
  emitValue(control: FormControl) {
    if (control) {
      this.emitControlValue.emit({ control, controlName: this.controlName });
    }
  }

  handleFieldHide() {
    this.hide = !this.hide;
  }

}


@Pipe({
  name: 'validationHandler',
  pure: false
})
export class ValidationPipe implements PipeTransform {

  transform(control: AbstractControl, placeHolder: string, message: string) {
    if (control.hasError('required')) {
      return `${placeHolder} is Required`;
    }
    if (control.hasError('minlength')) {
      const { requiredLength } = control.getError('minlength');
      return `${placeHolder}  ${typeof (control.value) === 'string' ? `must be of atleast ${requiredLength} characters` : `length should be greater than ${requiredLength}`}`;
    }
    if (control.hasError('maxlength')) {
      const { requiredLength } = control.getError('maxlength');
      return `${placeHolder}  ${typeof (control.value) === 'string' ? `must be of less than ${requiredLength} characters` : `length should be less than ${requiredLength}`}`;
    }
    if (control.hasError('pattern')) {
      return `${placeHolder} is not valid`;
    }
  }
}


@Directive({
  selector: '[formField]'
})
export class InputFormFieldDirective implements AfterViewInit {
  @Input() formControl: FormControl = new FormControl();
  constructor(private _el: ElementRef<HTMLInputElement>) { }/*  */
  @Output() onBlurEmit: EventEmitter<FormControl> = new EventEmitter();
  subscription = new Subscription();
  @Output() hideCross: EventEmitter<boolean> = new EventEmitter();
  ngAfterViewInit(): void {
    this.subscription.add(
      this.formControl.valueChanges
        .subscribe(data => {
          this.hideCross.emit(true);
        })
    )
    this._el.nativeElement.onblur = (event: FocusEvent) => {
      this.onBlurEmit.emit(this.formControl);
      this.hideCross.emit(false);
    }
    if (this._el.nativeElement.type === 'number') {
      this._el.nativeElement.onkeydown = (ev: KeyboardEvent) => {
        if (!/^[0-9]+$/.test(this.formControl.value)) {
          return;
        }
      }
    }
  }
}
