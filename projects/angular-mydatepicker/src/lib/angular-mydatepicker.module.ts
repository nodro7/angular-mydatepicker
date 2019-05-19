import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {AngularMyDatePickerComponent} from "./angular-mydatepicker.component";
import {AngularMyDatePickerDirective} from "./angular-mydatepicker.input";
import {AngularMyDatePickerFocusDirective} from "./directives/angular-mydatepicker.focus.directive";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [AngularMyDatePickerComponent, AngularMyDatePickerDirective, AngularMyDatePickerFocusDirective],
  entryComponents: [AngularMyDatePickerComponent],
  exports: [AngularMyDatePickerComponent, AngularMyDatePickerDirective, AngularMyDatePickerFocusDirective]
})
export class AngularMyDatePickerModule { }
