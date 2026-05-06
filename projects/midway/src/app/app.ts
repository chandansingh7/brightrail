import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrightrailAlertComponent,
  BrightrailAlertMessageDirective,
  BrightrailAlertTitleDirective,
  BrightrailButtonComponent,
  BrightrailButtonGroupComponent,
  BrightrailCardActionsComponent,
  BrightrailCardComponent,
  BrightrailCardContentComponent,
  BrightrailCardHeaderComponent,
  BrightrailSplitButtonComponent,
  BrightrailTextFieldComponent,
  BrightrailWelcomeComponent,
} from 'brightrail';

@Component({
  selector: 'app-root',
  imports: [
    BrightrailWelcomeComponent,
    BrightrailAlertComponent,
    BrightrailAlertTitleDirective,
    BrightrailAlertMessageDirective,
    BrightrailButtonComponent,
    BrightrailSplitButtonComponent,
    BrightrailButtonGroupComponent,
    BrightrailTextFieldComponent,
    BrightrailCardComponent,
    BrightrailCardHeaderComponent,
    BrightrailCardContentComponent,
    BrightrailCardActionsComponent,
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
