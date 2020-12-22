import {
  AfterViewInit,
  ChangeDetectorRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { MatErrorComponent } from "./mat-error/mat-error.component";

@Directive({
  selector: '[reusableFormDir]'
})
export class ReusableFormDirective {
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter();
  errorComponentRef: ComponentRef<MatErrorComponent>;
  hasView: boolean = false;
  localForm:FormGroup;
  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _componentResolver: ComponentFactoryResolver,
    private _cdk: ChangeDetectorRef,
    private _renderer: Renderer2,
    private _elementRef: ElementRef<HTMLFormElement>
  ) {
    // console.log(this._templateRef.elementRef.nativeElement.);
  }


  @Input() set formGroup(group: FormGroup) {
    this.localForm = group;
  }
  ngAfterViewInit(): void {
    this.generateDynamicComponent();
  }

  generateDynamicComponent() {
    const inputCollection: HTMLCollection = this._elementRef.nativeElement.getElementsByTagName('input')
    for (let i = 0; i < inputCollection.length; i++) {
      const parentDiv = inputCollection[i].parentElement.parentElement.parentElement;
      const matErrorComponent = this._componentResolver.resolveComponentFactory(MatErrorComponent);
      this.errorComponentRef = this._viewContainerRef.createComponent(matErrorComponent);
      parentDiv.after(this.errorComponentRef.location.nativeElement)
      const controlName = inputCollection[i].getAttribute('formcontrolname');
      this.errorComponentRef.instance.formControl = this.localForm.controls[controlName] as FormControl;
      this.errorComponentRef.instance.fieldName = controlName;
      this._cdk.detectChanges();
    }
  }
}
