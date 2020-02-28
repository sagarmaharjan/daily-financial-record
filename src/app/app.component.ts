import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'daily financial record';
  monthlySetup: boolean= true;

  toggleMonthlySetup() {
    this.monthlySetup = !this.monthlySetup;
  }

  onCanceled(e) {
    this.monthlySetup = e;
  }
}
