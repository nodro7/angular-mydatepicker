import {Injectable} from "@angular/core";
import {IMyOptions} from "../interfaces/my-options.interface";
import {Year} from "../enums/year.enum";
import {DefaultView} from "../enums/default-view.enum";
import {CalAnimation} from "../enums/cal-animation.enum";

@Injectable()
export class DefaultConfigService {
  private defaultConfig: IMyOptions = {
    dateRange: false,
    inline: false,
    dayLabels: {su: "Sun", mo: "Mon", tu: "Tue", we: "Wed", th: "Thu", fr: "Fri", sa: "Sat"},
    monthLabels: {1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec"},
    dateFormat: "yyyy-mm-dd",
    defaultView: DefaultView.Date,
    firstDayOfWeek: "mo",
    satHighlight: false,
    sunHighlight:  true,
    highlightDates: [],
    markCurrentDay: true,
    markCurrentMonth: true,
    markCurrentYear: true,
    monthSelector: true,
    yearSelector: true,
    disableHeaderButtons: true,
    showWeekNumbers: false,
    selectorHeight: "232px",
    selectorWidth: "252px",
    disableUntil: {year: 0, month: 0, day: 0},
    disableSince: {year: 0, month: 0, day: 0},
    disableDates: [],
    disableDateRanges: [],
    disableWeekends: false,
    disableWeekdays: [],
    enableDates: [],
    markDates: [],
    markWeekends: {marked: false, color: ""},
    alignSelectorRight: false,
    openSelectorTopOfInput: false,
    closeSelectorOnDateSelect: true,
    closeSelectorOnDocumentClick: true,
    minYear: Year.min,
    maxYear: Year.max,
    showSelectorArrow: true,
    appendSelectorToBody: false,
    focusInputOnDateSelect: true,
    moveFocusByArrowKeys: true,
    dateRangeDatesDelimiter: " - ",
    inputFieldValidation: true,
    showMonthNumber: true,
    calendarAnimation: {in: CalAnimation.None, out: CalAnimation.None},
    stylesData: {selector: "", styles: ""},
    divHostElement: {enabled: false, placeholder: ""},
    ariaLabelPrevMonth: "Previous Month",
    ariaLabelNextMonth: "Next Month"
  };

  public getDefaultConfig() {
    return this.defaultConfig;
  }
}
