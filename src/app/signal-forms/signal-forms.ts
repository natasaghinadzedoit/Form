import { Component, signal } from '@angular/core';
import { ISignalForms } from '../model/interface';

@Component({
  selector: 'app-signal-forms',
  imports: [],
  templateUrl: './signal-forms.html',
  styleUrl: './signal-forms.scss',
})
export class SignalForms {
  public signalForms = signal<ISignalForms>({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    phoneNumber: '',
    website: '',
    confirm: false,
  });

  public registerForm = this.signalForms;
}
