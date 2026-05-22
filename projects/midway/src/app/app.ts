import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrightrailToastContainerComponent } from 'brightrail';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BrightrailToastContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
