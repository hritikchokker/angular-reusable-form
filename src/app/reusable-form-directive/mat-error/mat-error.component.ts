import { Component, Input, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mat-error',
  templateUrl: './mat-error.component.html',
  styleUrls: ['./mat-error.component.scss'],
})
export class MatErrorComponent implements OnInit {

  textValue:string="test";

  customControl:any;
  @Input()set finalValue(value:string){
    if(value){
      setTimeout(()=>{
        this.textValue = value;
      })
    }
  };
  fieldName:string;
  formControl:FormControl;
  constructor() { }
  ngOnInit(): void {
  }

}
