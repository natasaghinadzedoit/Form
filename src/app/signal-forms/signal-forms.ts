import { Component, effect, signal } from '@angular/core';
import { ISignalForms } from '../model/interface';
import { form, FormField, required, email, minLength, validate, pattern } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-forms',
  imports: [FormField],
  templateUrl: './signal-forms.html',
  styleUrl: './signal-forms.scss',
})
export class SignalForms {
  public signalModel = signal<ISignalForms>({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    phoneNumber: '',
    website: '',
    confirm: false,
  });

  public signalForm = form(this.signalModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, {
      message: 'Please enter a valid email'
    });
    required(schemaPath.password, { message: 'Password is required' });
    minLength(schemaPath.password, 8, { message: 'Password must be at least 8 characters long' });
    required(schemaPath.confirmPassword, { message: 'Confirm password is required' });
    minLength(schemaPath.confirmPassword, 8)
    validate(schemaPath.confirmPassword, ({ value, valueOf }) => {
      const confirmPassword = value();
      const password = valueOf(schemaPath.password);
      if (confirmPassword && confirmPassword !== password) {
        return {
          kind: 'passwordMismatch',
          message: 'Passwords do not match'
        };
      }

      return null;
    });
    pattern(schemaPath.phoneNumber, /^\d{3}-\d{3}-\d{3}$/, { message: 'Phone number must be in the format XXX-XXX-XXX' });
    required(schemaPath.phoneNumber, {
      message: 'Phone number is required'
    });
  })

  constructor() {
    effect(() => {
      console.log(this.signalModel())
    })
  }

  public register(event: PointerEvent): void {
    console.log(this.signalModel())
    console.log(this.signalForm())
  }
}
