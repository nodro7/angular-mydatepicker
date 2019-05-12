import {Injectable} from "@angular/core";
import {IMyOptions, IMyDayLabels, IMyMonthLabels, IMyDate, IMyMarkedDates, IMyDateRange, IMyMarkedDate} from "../interfaces";
import {Year} from "../enums";

/**
 * Configuration service for the AngularMyDatePicker component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepickers used in the application.
 */
@Injectable()
export class AngularMyDatePickerConfig implements IMyOptions {
  dateRange: boolean = false;
  inline: boolean = false;
  dayLabels: IMyDayLabels = {su: "Sun", mo: "Mon", tu: "Tue", we: "Wed", th: "Thu", fr: "Fri", sa: "Sat"};
  monthLabels: IMyMonthLabels = {1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec"};
  dateFormat: string = "yyyy-mm-dd";
  firstDayOfWeek: string = "mo";
  satHighlight: boolean = false;
  sunHighlight: boolean = true;
  highlightDates = <Array<IMyDate>>[];
  markCurrentDay: boolean = true;
  markCurrentMonth: boolean = true;
  markCurrentYear: boolean = true;
  monthSelector: boolean = true;
  yearSelector: boolean = true;
  disableHeaderButtons: boolean = true;
  showWeekNumbers: boolean = false;
  selectorHeight: string = "232px";
  selectorWidth: string = "252px";
  disableUntil = <IMyDate>{year: 0, month: 0, day: 0};
  disableSince = <IMyDate>{year: 0, month: 0, day: 0};
  disableDates = <Array<IMyDate>>[];
  disableDateRanges = <Array<IMyDateRange>>[];
  disableWeekends: boolean = false;
  disableWeekdays = <Array<string>>[];
  enableDates = <Array<IMyDate>>[];
  markDates = <Array<IMyMarkedDates>>[];
  markWeekends = <IMyMarkedDate>{};
  alignSelectorRight: boolean = false;
  openSelectorTopOfInput: boolean = false;
  closeSelectorOnDateSelect: boolean = true;
  closeSelectorOnDocumentClick: boolean = true;
  minYear = <number>Year.min;
  maxYear = <number>Year.max;
  showSelectorArrow: boolean = true;
  appendSelectorToBody: boolean = false;
  focusInputOnDateSelect: boolean = true;
  moveFocusByArrowKeys: boolean = true;
  dateRangeDatesDelimiter: string = " - ";
  inputFieldValidation: boolean = true;
  ariaLabelPrevMonth: string = "Previous Month";
  ariaLabelNextMonth: string = "Next Month";
}
