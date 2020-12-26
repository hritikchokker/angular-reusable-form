import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complete-form',
  templateUrl: './complete-form.component.html',
  styleUrls: ['./complete-form.component.scss']
})
export class CompleteFormComponent implements OnInit {


  optionTypes = [
    {
      value:1,text:'angular'
    },
    {
      value:2,text:'react'
    },
    {
      value:3,text:'vue'
    }
  ]
  formGroup: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.formGroup = this._fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]],
      type:['',[Validators.required]]
    });
  }
  ngOnInit(): void {
  }

  onSubmit(json:any){

  }

}
