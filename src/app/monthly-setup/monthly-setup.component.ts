import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { MonthlyService } from './monthly.service';

@Component({
  selector: 'app-monthly-setup',
  templateUrl: './monthly-setup.component.html',
  styleUrls: ['./monthly-setup.component.css']
})
export class MonthlySetupComponent implements OnInit {
  @Output() setSetup = new EventEmitter<{monthly: boolean, daily: boolean}>();
  @ViewChild('monthlyBudget', {static: false}) monthlyBudget: ElementRef;
  // @ViewChild('dailyBudget', {static: false}) dailyBudget: ElementRef;

  setupValue: boolean = true;
  monthlyBudgetValue: number;

  constructor(private monthlyService: MonthlyService) { }

  ngOnInit() {
  }

  addMonthlySetup(e) {
    e.preventDefault();
    this.monthlyBudgetValue = this.monthlyBudget.nativeElement.value;
    if(this.monthlyBudgetValue) {
      this.setSetup.emit({monthly: false, daily: true});
      this.monthlyService.setMonthlyBudget(this.monthlyBudgetValue);
    } else {
      debugger;
    }
  }

  onCancel() {
    return this.setSetup.emit({monthly: true, daily: false});
  }

}
