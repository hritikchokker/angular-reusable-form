import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mat-error',
  templateUrl: './mat-error.component.html',
  styleUrls: ['./mat-error.component.scss'],
})
export class MatErrorComponent implements OnInit,OnChanges{

  textValue;
  @Input()set finalValue(value:string){
    if(value){
      setTimeout(()=>{
        this.textValue = value;
      })
    }
  };
  fieldName:string;
  formControl:FormControl;
  @Input() set customControl(control:FormControl){
    setTimeout(() => {
        this.formControl = control;
    }, );
  }
  constructor() { }
  ngOnInit(): void {
    // console.log(this.formControl,'formchotr m')
  }

  doAlert(){
    console.log(this.textValue,'text asjasjndas')
  }

  getStatus(){
    this.formControl.status;
  }

  ngOnChanges(){
    console.log(this.textValue,'text value')
  }
}
