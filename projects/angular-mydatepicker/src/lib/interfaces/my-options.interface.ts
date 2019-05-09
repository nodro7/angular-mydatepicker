import {IMyDayLabels} from "./my-day-labels.interface";
import {IMyMonthLabels} from "./my-month-labels.interface";
import {IMyDate} from "./my-date.interface";
import {IMyDateRange} from "./my-date-range.interface";
import {IMyMarkedDates} from "./my-marked-dates.interface";
import {IMyMarkedDate} from "./my-marked-date.interface";

export interface IMyOptions {
  dateRange?: boolean;
  dayLabels?: IMyDayLabels;
  monthLabels?: IMyMonthLabels;
  dateFormat?: string;
  firstDayOfWeek?: string;
  satHighlight?: boolean;
  sunHighlight?: boolean;
  highlightDates?: Array<IMyDate>;
  markCurrentDay?: boolean;
  markCurrentMonth?: boolean;
  markCurrentYear?: boolean;
  monthSelector?: boolean;
  yearSelector?: boolean;
  disableHeaderButtons?: boolean;
  showWeekNumbers?: boolean;
  selectorHeight?: string;
  selectorWidth?: string;
  disableUntil?: IMyDate;
  disableSince?: IMyDate;
  disableDates?: Array<IMyDate>;
  disableDateRanges?: Array<IMyDateRange>;
  disableWeekends?: boolean;
  disableWeekdays?: Array<string>;
  enableDates?: Array<IMyDate>;
  markDates?: Array<IMyMarkedDates>;
  markWeekends?: IMyMarkedDate;
  alignSelectorRight?: boolean;
  openSelectorTopOfInput?: boolean;
  closeSelectorOnDateSelect?: boolean;
  closeSelectorOnDocumentClick?: boolean;
  minYear?: number;
  maxYear?: number;
  showSelectorArrow?: boolean;
  appendSelectorToBody?: boolean;
  focusInputOnDateSelect?: boolean;
  moveFocusByArrowKeys?: boolean;
  dateRangeDatesDelimiter?: string;
  inputFieldValidation?: boolean;
  ariaLabelPrevMonth?: string;
  ariaLabelNextMonth?: string;
}

export interface IAngularMyDpOptions extends IMyOptions { }
