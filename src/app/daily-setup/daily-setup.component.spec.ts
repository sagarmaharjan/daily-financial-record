import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySetupComponent } from './daily-setup.component';

describe('DailySetupComponent', () => {
  let component: DailySetupComponent;
  let fixture: ComponentFixture<DailySetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailySetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailySetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
