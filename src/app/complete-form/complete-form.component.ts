import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-complete-form',
  templateUrl: './complete-form.component.html',
  styleUrls: ['./complete-form.component.scss']
})
export class CompleteFormComponent implements OnInit {

  controlSub = new Subject();
  optionTypes = [
    {
      value: 1, text: 'angular'
    },
    {
      value: 2, text: 'react'
    },
    {
      value: 3, text: 'vue'
    }
  ]
  formGroup: FormGroup;
  markFormDirty = false;
  get f() { return this.formGroup.controls };
  constructor(private _fb: FormBuilder) {
    this.formGroup = this._fb.group({
      userName: ['', [Validators.required, Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)]],
      email: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)]],
      age: ['', [Validators.required]],
      dob: ['', Validators.required],
      password: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]],
      type: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {
  }
  valueUpdate({ control, controlName }) {
    if (control && controlName) {
      this.f[controlName].setValue(control.value)
    }
  }

  onSubmit(event) {
    this.markFormDirty = true;

    console.log(this.formGroup.value, 'final value')
  }

}
