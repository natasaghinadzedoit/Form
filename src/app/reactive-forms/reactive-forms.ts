import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.scss',
})
export class ReactiveForms {

  public registerForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),

    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),

    nickname: new FormControl('', [Validators.required, Validators.minLength(4)]),

    phone: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/^\d{3}-\d{3}-\d{3}$/)]),

    website: new FormControl(''),

    confirm: new FormControl(false)
  },
    {
      validators: passwordMatchValidator
    }
  );


  public get emailControl() {
    return this.registerForm.get('email') as FormControl;
  }

  public get passwordControl() {
    return this.registerForm.get('password') as FormControl;
  }

  public get confirmPasswordControl() {
    return this.registerForm.get('confirmPassword') as FormControl;
  }

  public get phoneControl() {
    return this.registerForm.get('phone') as FormControl;
  }


  public register(): void {
    console.log(this.registerForm.value);
  }
}

export function passwordMatchValidator(
  control: AbstractControl
): ValidationErrors | null {

  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  if (password !== confirmPassword) {
    return { passwordMismatch: true };
  }

  return null;
}
