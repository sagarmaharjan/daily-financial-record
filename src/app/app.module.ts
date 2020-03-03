import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthlySetupComponent } from './monthly-setup/monthly-setup.component';
import { DailySetupComponent } from './daily-setup/daily-setup.component';
import { MonthlyService } from './monthly-setup/monthly.service';

@NgModule({
  declarations: [
    AppComponent,
    MonthlySetupComponent,
    DailySetupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MonthlyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
