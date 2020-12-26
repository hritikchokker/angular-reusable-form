import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild
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
  @Input() formGroup: FormGroup;
  errorComponentRef: ComponentRef<MatErrorComponent>;
  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _componentResolver: ComponentFactoryResolver,
    private _cdk: ChangeDetectorRef,
    private _renderer: Renderer2
  ) { }

  @ViewChild('testone') testone: ElementRef<MatFormField>;
  ngOnInit(): void {
  }
  @Output() submittedForm: EventEmitter<any> = new EventEmitter();

  @ContentChild('contentForm') contentForm: ElementRef<HTMLDivElement>;


  ngAfterContentInit() {
    const collection: HTMLCollection = this.contentForm.nativeElement.getElementsByTagName('mat-form-field')
    const matErrorComponent = this._componentResolver.resolveComponentFactory(MatErrorComponent);
    for (let i = 0; i < collection.length; i++) {
      this.errorComponentRef = this._viewContainerRef.createComponent(matErrorComponent);
      const inputCollection: HTMLCollection = collection[i].getElementsByTagName('input');
      collection[i].after(this.errorComponentRef.location.nativeElement)
      for (let j = 0; j < inputCollection.length; j++) {
        const formControlName = inputCollection[j].getAttribute('formcontrolname')
        console.log(formControlName, 'my control bname')
        this.errorComponentRef.instance.formControl = this.formGroup.controls[formControlName] as FormControl;
        this.errorComponentRef.instance.finalValue = formControlName;
      }
      this._cdk.detectChanges();
    }
  }

  ngAfterViewInit() {
    // console.log(this.testone,'my custom mat form ')
  }


}
