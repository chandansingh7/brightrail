import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrightrailButtonComponent,
  BrightrailButtonGroupComponent,
  BrightrailSplitButtonComponent,
  BrightrailTextFieldComponent,
  BrightrailWelcomeComponent,
} from 'brightrail';

@Component({
  selector: 'app-root',
  imports: [
    BrightrailWelcomeComponent,
    BrightrailButtonComponent,
    BrightrailSplitButtonComponent,
    BrightrailButtonGroupComponent,
    BrightrailTextFieldComponent,
    FormsModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  statusDemoSuccess = 'Valid input';
  statusDemoWarning = 'Check this value';
  statusDemoError = 'Invalid input';
  statusDemoInfo = 'Helpful information';
}
