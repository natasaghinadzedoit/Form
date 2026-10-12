import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalForms } from './signal-forms/signal-forms';

@Component({
  selector: 'app-root',
  imports: [SignalForms],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('form-app');
}
