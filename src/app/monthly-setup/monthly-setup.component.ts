import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-monthly-setup',
  templateUrl: './monthly-setup.component.html',
  styleUrls: ['./monthly-setup.component.css']
})
export class MonthlySetupComponent implements OnInit {
  @Output() setMonthlySetup = new EventEmitter<boolean>();
  @ViewChild('monthlyBudget', {static: false}) monthlyBudget: ElementRef;
  @ViewChild('dailyBudget', {static: false}) dailyBudget: ElementRef;

  setupValue: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  addMonthlySetup(e) {
    e.preventDefault();
    console.log(this.monthlyBudget.nativeElement.value, this.dailyBudget.nativeElement.value);
  }

  onCancel() {
    return this.setMonthlySetup.emit(this.setupValue);
  }

}
