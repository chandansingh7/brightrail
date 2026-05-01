import { Component } from '@angular/core';
import { BrightrailButtonComponent, BrightrailWelcomeComponent } from 'brightrail';

@Component({
  selector: 'app-root',
  imports: [BrightrailWelcomeComponent, BrightrailButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
