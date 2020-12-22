import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form-example',
  templateUrl: './register-form-example.component.html',
  styleUrls: ['./register-form-example.component.scss']
})
export class RegisterFormExampleComponent implements OnInit,AfterViewInit {
  booleanToggle: boolean = false;
  formGroup: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.formGroup = this._fb.group({
      userName: [],
      email: [],
      password: [],
      mobileNo: []
    });
  }

  onSubmit(values: Object) { }
  ngOnInit(): void { }

  toggleIt() {
    this.booleanToggle = !this.booleanToggle;
  }

  ngAfterViewInit(): void { }

  ngOnDestroy(): void { }

}
