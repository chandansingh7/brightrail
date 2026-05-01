import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaclWelcomeComponent } from '@facl/ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FaclWelcomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
