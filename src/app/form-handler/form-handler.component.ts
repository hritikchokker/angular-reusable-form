import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  FormControl,
  FormGroup
} from '@angular/forms';

import { MatErrorComponent } from '../reusable-form-directive/mat-error/mat-error.component';
import { MatFormField } from '@angular/material/form-field';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-form-handler',
  templateUrl: './form-handler.component.html',
  styleUrls: ['./form-handler.component.scss']
})
export class FormHandlerComponent implements OnInit, AfterContentInit {

  testControl = new FormControl();
  formControlNames: string[] = [];
  @Input() formGroup: FormGroup;
  errorComponentRef: ComponentRef<MatErrorComponent>;
  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _componentResolver: ComponentFactoryResolver,
    private _cdk: ChangeDetectorRef
  ) { }
  ngOnInit(): void {
  }
  @Output() submittedForm: EventEmitter<any> = new EventEmitter();

  @ContentChild('contentForm') contentForm: ElementRef<HTMLDivElement>;
  @ViewChildren(MatErrorComponent) MatErrorComponent: QueryList<MatErrorComponent>;
  ngAfterContentInit() {
    // this.handleDynamicError();
  }
  handleDynamicError() {
    const collection: HTMLCollection = this.contentForm.nativeElement.getElementsByTagName('mat-form-field');
    const matErrorComponent = this._componentResolver.resolveComponentFactory(MatErrorComponent);
    for (let i = 0; i < collection.length; i++) {
      const name = collection[i].getElementsByClassName('formElement');
      this.errorComponentRef = this._viewContainerRef.createComponent(matErrorComponent);
      for (let j = 0; j < name.length; j++) {
        collection[i].after(this.errorComponentRef.location.nativeElement)
        this.errorComponentRef.instance.finalValue = name[j].getAttribute('formcontrolname');
        this.errorComponentRef.instance.customControl = this.formGroup.controls[name[j].getAttribute('formcontrolname')] as FormControl;
        this.formControlNames.push(name[j].getAttribute('formcontrolname'));
        // this._cdk.detectChanges();
      }
    }
    this._cdk.detectChanges();
    // this.checkValidations();
  }

  get controls() { return this.formGroup.controls };


  handleSubmit() {
    this.checkValidations();
    if (this.formGroup.valid) {
      this.submittedForm.emit({ ...this.formGroup.value })
    }
  }

  checkValidations() {
    this.formControlNames.forEach((item, index) => {
      if (!this.controls[item].dirty && this.controls[item].hasError('required')) {
        this.controls[item].markAsDirty();
        this.controls[item].setErrors({
          'required': true
        })
      }
    })
  }

  ngAfterViewInit() {
    this.formGroup.valueChanges.subscribe(data => {
      // console.log(this.MatErrorComponent, 'errors')
    })
    // console.log(this.testone,'my custom mat form ')
  }


}
