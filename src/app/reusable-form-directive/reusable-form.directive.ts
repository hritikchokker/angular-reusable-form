import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from "@angular/core";

import { FormGroup } from "@angular/forms";
@Directive({
  selector: '[reusableFormDir]'
})
export class ReusableFormDirective {
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter();
  // @ViewChild("formRef", { static: false }) formReference: ElementRef<
  //   HTMLFormElement
  // >;
  hasView: boolean = false;
  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) {
    // console.log(this._templateRef.elementRef.nativeElement.);
  }
  @Input() set formRef(values) {
    console.log(values, "valies here");
  }
  // @Input() set formGroup(group: FormGroup) {
  //   console.log(group, "value is ");
  // }
  @Input() set reusableFormDir(group: FormGroup) {
    // console.log(group, "hasdh", this.formReference.nativeElement);
    if (!this.hasView) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
      this.hasView = true;
    } else {
      this._viewContainerRef.clear();
      this.hasView = false;
    }
  }

  ngAfterViewInit(): void {
    // console.log(this.formReference.nativeElement, "form reference");
  }

  // constructor(private _templateRef: TemplateRef<HTMLDivElement>) {
  //   // console.log(this._elementRef.nativeElement, "my template Ref");
  //   // this._elementRef.nativeElement.children[1];
  //   console.log(this._templateRef.elementRef.nativeElement);
  // }
}
