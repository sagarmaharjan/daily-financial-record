import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'daily financial record';
  monthlySetup: boolean= true;
  dailySetup: boolean = false;

  toggleMonthlySetup() {
    this.monthlySetup = !this.monthlySetup;
  }

  onCanceled(e) {
    this.monthlySetup = e.monthly;
    this.dailySetup = e.daily;
  }
}
