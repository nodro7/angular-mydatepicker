import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DatePickerNgmodel } from './date-picker-ngmodel';
import { DatePickerReacticeForms } from './date-picker-reactive-forms';
import { AngularMyDatePickerModule } from '../../projects/angular-mydatepicker/src/lib';

@NgModule({
  declarations: [
    AppComponent, DatePickerNgmodel, DatePickerReacticeForms
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, AngularMyDatePickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
