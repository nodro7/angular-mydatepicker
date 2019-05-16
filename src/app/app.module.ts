import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DpBootstrapComponent } from './dp-bootstrap/dp-bootstrap.component';
import { DrpBootstrapComponent } from './drp-bootstrap/drp-bootstrap.component';
import { NoBootstrapComponent } from './no-bootstrap/no-bootstrap.component';
import { DpInlineComponent } from './dp-inline/dp-inline.component';

import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { DpOptionsComponent } from './dp-options/dp-options.component';

@NgModule({
  declarations: [
    AppComponent,
    DpBootstrapComponent,
    DrpBootstrapComponent,
    NoBootstrapComponent,
    DpOptionsComponent,
    DpInlineComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, AngularMyDatePickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
