import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DatePickerNgmodel } from './date-picker-ngmodel';
import { DatePickerReactiveForms } from './date-picker-reactive-forms';
import { DatePickerInline} from './date-picker-inline';
import { AngularMyDatePickerModule } from '../../projects/angular-mydatepicker/src/public-api';

@NgModule({
  declarations: [
    AppComponent, DatePickerNgmodel, DatePickerReactiveForms, DatePickerInline
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, AngularMyDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
