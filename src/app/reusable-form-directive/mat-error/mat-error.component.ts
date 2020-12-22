import { Component, Input, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mat-error',
  templateUrl: './mat-error.component.html',
  styleUrls: ['./mat-error.component.scss'],
})
export class MatErrorComponent implements OnInit {

  textValue:string="test";
  @Input()set finalValue(value:string){
    if(value){
      setTimeout(()=>{
        this.textValue = value;
      })
    }
  };

  @Input() set formControl(control:FormControl){

  }
  constructor() { }
  ngOnInit(): void {
    // alert('ss')
  }

}
