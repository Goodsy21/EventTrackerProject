import { AveragesPipe } from './averages-pipe';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  avgOfRounds = [];
  title = 'ngGolfTracker';
  constructor(private averages: AveragesPipe) {}
}
