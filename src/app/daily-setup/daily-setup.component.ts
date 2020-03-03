import { Component, OnInit, Output } from '@angular/core';
import { MonthlyService } from '../monthly-setup/monthly.service'
@Component({
  selector: 'app-daily-setup',
  templateUrl: './daily-setup.component.html',
  styleUrls: ['./daily-setup.component.css']
})
export class DailySetupComponent implements OnInit {
  // @Output() dailySetupVal = new EventEmitter<>();

  // dailySetup: boolean = true;
  monthlyBudget: number;
  dailyBudget: number;
  buttonText: string = 'Add';
  showForm: boolean = false;


  constructor(private monthlyService: MonthlyService) { }

  ngOnInit() {
    this.monthlyBudget = this.monthlyService.getMonthlyBudget();
    this.dailyBudget = this.monthlyService.getDailyBudget();
  }

  toggleListForm() {
    this.showForm = !this.showForm;
    if(this.showForm) {
      this.buttonText = 'Cancel'
    } else {
      this.buttonText = 'Add'
    }
  }

}
