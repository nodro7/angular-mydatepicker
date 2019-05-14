import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularMyDatePickerDirective} from '../../../projects/angular-mydatepicker/src/lib';
import {IAngularMyDpOptions, IMyDateModel, IMyInputFieldChanged, IMyCalendarViewChanged, IMyMarkedDate, IMyDate, IMyRangeDateSelection, IMyDefaultMonth} from '../../../projects/angular-mydatepicker/src/lib';

@Component({
  selector: 'date-picker-ngmodel',
  templateUrl: './date-picker-ngmodel.html',
  styleUrls: ['./date-picker-ngmodel.css']
})
export class DatePickerNgmodel implements OnInit {

  public myDatePickerOptions: IAngularMyDpOptions = {
    dateRange: true,
    dateFormat: 'dd.mm.yyyy',
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    markCurrentDay: true,
    alignSelectorRight: false,
    openSelectorTopOfInput: false,
    minYear: 1870,
    maxYear: 2200,
    showSelectorArrow: true,
    monthSelector: true,
    yearSelector: true,
    satHighlight: false,
    highlightDates: [],
    disableDates: [],
    disableHeaderButtons: true,
    showWeekNumbers: false,
    disableDateRanges: [
      {begin: {year: 2016, month: 10, day: 5}, end: {year: 2016, month: 10, day: 7}},
      {begin: {year: 2016, month: 10, day: 10}, end: {year: 2016, month: 10, day: 12}}
    ],
    disableWeekdays: [],
    markDates: [],
    markWeekends: <IMyMarkedDate>{},
    selectorHeight: '232px',
    selectorWidth: '252px',
    closeSelectorOnDateSelect: true,
    closeSelectorOnDocumentClick: true,
    appendSelectorToBody: false,
    focusInputOnDateSelect: true
  };

  @ViewChild('dp') ngxdp: AngularMyDatePickerDirective;

  public selectedTextNormal: string = '';

  public disabled: boolean = false;
  public validDate: boolean = false;
  public inputText: string = "";

  public model: IMyDateModel = null;   // not initial date set

  public defMonth: IMyDefaultMonth = {
    defMonth: ''
  };

  public selectorSizes: Array<string> = new Array('232px x 252px', '200px x 220px', '260px x 290px');

  public locale: string = 'en';
  public locales: Array<string> = new Array('en', 'fr', 'ja', 'fi', 'es', 'hu', 'sv', 'nl', 'ru', 'uk', 'no', 'tr', 'pt-br', 'de', 'it', 'it-ch', 'pl', 'my', 'sk', 'sl', 'zh-cn', 'he', 'ro', 'ca', 'id', 'en-au', 'am-et', 'cs', 'el', 'kk', 'th', 'ko-kr', 'da', 'lt', 'vi', 'bn', 'bg', 'hr', 'ar', 'is', 'de-ch', 'fr-ch', 'tw', 'lv', 'et');


  constructor() {
  }

  clearDate(): void {
    this.ngxdp.clearDate();
  }

  setDate(): void {
    // Initialize single date (today)
    if (this.myDatePickerOptions.dateRange) {
      alert("Date range mode is enabled! Change mode to single date before set single date.");
      return;
    }

    this.model = {isRange: false, singleDate: {jsDate: new Date()}};
  }

  setDateRange(): void {
    // Initialize date range (begin: today, end: today + 2)
    if (!this.myDatePickerOptions.dateRange) {
      alert("Date range mode is not enabled! Change mode to date range before set date range date.");
      return;
    }

    let begin: Date = new Date();
    let end: Date = new Date();
    end.setDate(end.getDate() + 2);

    this.model = {isRange: true, dateRange: {beginJsDate: begin, endJsDate: end}};
  }

  onOpenSelectorTopOfInput(checked: boolean): void {
    let copy = this.getCopyOfOptions();
    copy.openSelectorTopOfInput = checked;
    this.myDatePickerOptions = copy;
  }

  onAlignSelectorRight(checked: boolean): void {
    let copy = this.getCopyOfOptions();
    copy.alignSelectorRight = checked;
    this.myDatePickerOptions = copy;
  }

  onShowSelectorArrow(checked: boolean): void {
    let copy = this.getCopyOfOptions();
    copy.showSelectorArrow = checked;
    this.myDatePickerOptions = copy;
  }

  onMonthSelector(checked: boolean) {
    let copy = this.getCopyOfOptions();
    copy.monthSelector = checked;
    this.myDatePickerOptions = copy;
  }

  onYearSelector(checked: boolean) {
    let copy = this.getCopyOfOptions();
    copy.yearSelector = checked;
    this.myDatePickerOptions = copy;
  }

  onDisableToday(checked: boolean): void {
    let d: Date = new Date();
    let copy = this.getCopyOfOptions();
    copy.disableDates = checked ? [{year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()}] : [];
    this.myDatePickerOptions = copy;
  }

  onMarkToday(checked: boolean): void {
    let d: Date = new Date();
    let copy = this.getCopyOfOptions();
    copy.markDates = checked ? [{
      dates: [{year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()}],
      color: '#C30000'
    }] : [];
    this.myDatePickerOptions = copy;
  }

  onMarkWeekends(checked: boolean): void {
    let copy = this.getCopyOfOptions();
    copy.markWeekends = checked ? {marked: true, color: 'blue'} : {marked: false, color: ''};
    this.myDatePickerOptions = copy;
  }

  onHighlighSaturday(checked: boolean): void {
    let copy = this.getCopyOfOptions();
    copy.satHighlight = checked;
    this.myDatePickerOptions = copy;
  }

  onHighlighSunday(checked: boolean): void {
    let copy = this.getCopyOfOptions();
    copy.sunHighlight = checked;
    this.myDatePickerOptions = copy;
  }

  onHighlightDates(checked: boolean): void {
    let d: Date = new Date();
    let copy = this.getCopyOfOptions();
    let dates: Array<IMyDate> = [];
    dates.push({year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()});

    d.setDate(d.getDate() + 1);
    dates.push({year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()});

    dates.push({year: 2017, month: 6, day: 1});

    copy.highlightDates = checked ? dates : [];
    this.myDatePickerOptions = copy;
  }

  onDisableWeekends(checked: boolean): void {
    let copy = this.getCopyOfOptions();
    copy.disableWeekends = checked;
    this.myDatePickerOptions = copy;
  }

  onDisableHeaderButtons(checked: boolean) {
    let copy = this.getCopyOfOptions();
    copy.disableHeaderButtons = checked;
    this.myDatePickerOptions = copy;
  }

  onShowWeekNumbers(checked: boolean) {
    let copy = this.getCopyOfOptions();
    copy.showWeekNumbers = checked;
    this.myDatePickerOptions = copy;
  }

  onCloseSelectorOnDateSelect(checked: boolean) {
    let copy = this.getCopyOfOptions();
    copy.closeSelectorOnDateSelect = checked;
    this.myDatePickerOptions = copy;
  }

  onCloseSelectorOnDocumentClick(checked: boolean) {
    let copy = this.getCopyOfOptions();
    copy.closeSelectorOnDocumentClick = checked;
    this.myDatePickerOptions = copy;
  }

  onDateRange(checked: boolean): void {
    let copy = this.getCopyOfOptions();
    copy.dateRange = checked;
    this.myDatePickerOptions = copy;
  }

  onAppendSelectorToBody(checked: boolean): void {
    let copy = this.getCopyOfOptions();
    copy.appendSelectorToBody = checked;
    this.myDatePickerOptions = copy;
  }

  onDisableWednesday(checked: boolean): void {
    let copy = this.getCopyOfOptions();
    copy.disableWeekdays = checked ? ['we'] : [];
    this.myDatePickerOptions = copy;
  }

  onDisable24Day(checked: boolean): void {
    let d: Date = new Date();
    let copy = this.getCopyOfOptions();
    copy.disableDates = checked ? [{year: 0, month: 0, day: 24}] : [];
    this.myDatePickerOptions = copy;
  }

  onFocusInputOnDateSelect(checked: boolean): void {
    let copy = this.getCopyOfOptions();
    copy.focusInputOnDateSelect = checked;
    this.myDatePickerOptions = copy;
  }

  onDisableInput(checked: boolean) {
    this.disabled = checked;
  }

  onSelectorSize(size: string) {
    let copy = this.getCopyOfOptions();

    if (size === '232px x 252px') {
      copy.selectorHeight = '232px';
      copy.selectorWidth = '252px';
      this.myDatePickerOptions = copy;
    }
    else if (size === '200px x 220px') {
      copy.selectorHeight = '200px';
      copy.selectorWidth = '220px';
      this.myDatePickerOptions = copy;
    }
    else {
      copy.selectorHeight = '260px';
      copy.selectorWidth = '290px';
      this.myDatePickerOptions = copy;
    }
  }

  onChangeLocale(locale: string) {
    this.locale = locale;
  }

  getCopyOfOptions(): IAngularMyDpOptions {
    return JSON.parse(JSON.stringify(this.myDatePickerOptions));
  }

  ngOnInit(): void {
    console.log('onInit(): SampleDatePickerNgModel');
  }

  // callbacks
  onDateChanged(event: IMyDateModel): void {
    console.log('onDateChanged(): ', event);
    if (!event.isRange) {
      let {date, jsDate, formatted, epoc} = event.singleDate;
      if (formatted !== '') {
        this.selectedTextNormal = 'Formatted: ' + formatted + ' - epoc timestamp: ' + epoc;
        this.validDate = true;
        this.inputText = formatted;
      }
      else {
        this.selectedTextNormal = '';
      }
    }
    else {
      let {formatted} = event.dateRange;
      if (formatted !== '') {
        this.selectedTextNormal = 'Formatted: ' + formatted;
        this.validDate = true;
        this.inputText = formatted;
      }
      else {
        this.selectedTextNormal = '';
      }
    }
  }

  onInputFieldChanged(event: IMyInputFieldChanged): void {
    console.log('onInputFieldChanged(): Value: ', event.value, ' - dateFormat: ', event.dateFormat, ' - valid: ', event.valid);
    this.validDate = event.valid;
    this.inputText = event.value;
  }

  onCalendarToggle(event: number): void {
    console.log('onCalendarToggle(): Reason: ', event);
  }

  onCalendarViewChanged(event: IMyCalendarViewChanged): void {
    console.log('onCalendarViewChanged(): Year: ', event.year, ' - month: ', event.month, ' - first: ', event.first, ' - last: ', event.last);
  }

  onDateRangeSelection(event: IMyRangeDateSelection): void {
    console.log('onDateRangeSelection(): event: ', event);
  }

}
