import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormExampleComponent } from './register-form-example.component';

describe('RegisterFormExampleComponent', () => {
  let component: RegisterFormExampleComponent;
  let fixture: ComponentFixture<RegisterFormExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFormExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
