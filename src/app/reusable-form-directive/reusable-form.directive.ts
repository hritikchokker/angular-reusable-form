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

import { FormGroup } from "@angular/forms";
import { MatErrorComponent } from "./mat-error/mat-error.component";

@Directive({
  selector: '[reusableFormDir]'
})
export class ReusableFormDirective {
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter();
  errorComponentRef: ComponentRef<MatErrorComponent>;

  hasView: boolean = false;
  constructor(
    private _viewContainerRef:ViewContainerRef,
    private _componentResolver: ComponentFactoryResolver,
    private _cdk:ChangeDetectorRef,
    private _renderer:Renderer2,
    private _elementRef: ElementRef<HTMLFormElement>
  ) {
    // console.log(this._templateRef.elementRef.nativeElement.);
  }


  @Input() set formGroup(group: FormGroup) {
    // console.log(group,'muy group')

  }
  ngAfterViewInit(): void {
    const inputCollection:HTMLCollection =this._elementRef.nativeElement.getElementsByTagName('input')
    for(let i=0;i<inputCollection.length;i++){
      const matErrorComponent = this._componentResolver.resolveComponentFactory(MatErrorComponent);
      this.errorComponentRef = this._viewContainerRef.createComponent(matErrorComponent);
      inputCollection[i].insertAdjacentElement('afterend', this.errorComponentRef.location.nativeElement)
      this._cdk.detectChanges();
    }
  }
}
