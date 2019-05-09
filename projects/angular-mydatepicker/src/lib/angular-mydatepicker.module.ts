import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ModuleWithProviders, NgModule} from "@angular/core";
import {AngularMyDatePicker} from "./angular-mydatepicker.component";
import {AngularMyDatePickerDirective} from "./angular-mydatepicker.input";
import {AngularMyDatePickerFocusDirective} from "./directives";
import {AngularMyDatePickerConfig} from "./services";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [AngularMyDatePicker, AngularMyDatePickerDirective, AngularMyDatePickerFocusDirective],
  entryComponents: [AngularMyDatePicker],
  exports: [AngularMyDatePicker, AngularMyDatePickerDirective, AngularMyDatePickerFocusDirective]
})
export class AngularMyDatePickerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularMyDatePickerModule,
      providers: [AngularMyDatePickerConfig]
    };
  }
}
