import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MonthlyService {
  constructor() { }
  private monthlyBudget: number;

  setMonthlyBudget(monthVal: number) {
    this.monthlyBudget = monthVal
  }

  getMonthlyBudget() {
    return this.monthlyBudget;
  }

  getDailyBudget() {
    return (this.monthlyBudget / 30);
  }
}
