import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularMyDatePickerDirective, DefaultView, IAngularMyDpOptions, IMyCalendarViewChanged, IMyDate, IMyDateModel, IMyDefaultMonth, IMyInputFieldChanged, IMyMarkedDate, IMyRangeDateSelection, CalAnimation, ActiveView, Year} from '../../../projects/angular-mydatepicker/src/public-api';

@Component({
    selector: 'date-picker-ngmodel',
    templateUrl: './date-picker-ngmodel.html',
    styleUrls: ['./date-picker-ngmodel.css'],
    standalone: false
})
export class DatePickerNgmodel implements OnInit {

  public myDatePickerOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'd## of mmm yyyy',
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    markCurrentDay: true,
    alignSelectorRight: false,
    openSelectorTopOfInput: false,
    minYear: 1971 as Year,
    maxYear: 2200 as Year,
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
    disableUntil: {year: 0, month: 0, day: 0},
    disableSince: {year: 0, month: 0, day: 0},
    disableWeekdays: [],
    markDates: [],
    markWeekends: <IMyMarkedDate>{},
    selectorHeight: '266px',
    selectorWidth: '266px',
    closeSelectorOnDateSelect: true,
    closeSelectorOnDocumentClick: true,
    showMonthNumber: true,
    appendSelectorToBody: false,
    focusInputOnDateSelect: true,
    dateRangeDatesDelimiter: " - ",
    defaultView: DefaultView.Date,
    showFooterToday: false,
    calendarAnimation: {in: CalAnimation.None, out: CalAnimation.None},
    rtl: false,
    stylesData:
      {
        selector: '',
        styles: ''
      }
  };

  @ViewChild('dp', { static: true }) ngxdp: AngularMyDatePickerDirective;

  public selectedTextNormal: string = '';

  public disabled: boolean = false;
  public validDate: boolean = false;
  public inputText: string = "";

  public model: IMyDateModel = null;   // not initial date set

  public defMonth: IMyDefaultMonth = {
    defMonth: '',
    overrideSelection: false
  };
  
  public selectorSizes: Array<string> = new Array('266px x 266px', '200px x 220px', '260px x 290px');
  public defaultViews: Array<string> = new Array('date', 'month', 'year');
  public calAnimations: Array<string> = new Array('None', 'Fade', 'ScaleTop-ScaleCenter', 'ScaleCenter-ScaleTop', 'Rotate', 'FlipDiagonal');
  public styleColor: Array<string> = new Array('Default', 'Grey', 'Blue', 'Green', 'Red', 'Yellow', 'Dark', 'Bold');

  public locale: string = 'en';

  public locales: Array<string> = [
    'en | English',
    'fr | French',
    'fr-ch | French - Switzerland',
    'ja | Japanese',
    'fi | Finnish',
    'es | Spanish',
    'hu | Hungarian',
    'sv | Swedish',
    'nl | Dutch',
    'ru | Russian',
    'uk | Ukrainian',
    'no | Norwegian',
    'tr | Turkish',
    'pt-br | Portuguese - Brazil',
    'de | German',
    'de-ch | German - Switzerland',
    'it | Italian',
    'it-ch | Italian - Switzerland',
    'pl | Polish',
    'my | Burmese',
    'sk | Slovak',
    'sl | Slovenian',
    'zh-cn | Chinese - China',
    'he | Hebrew',
    'ro | Romanian - Romania',
    'ca | Catalan',
    'id | Indonesian',
    'en-au | English - Australia',
    'am-et | Amharic',
    'cs | Czech',
    'el | Greek',
    'kk | Kazakh',
    'th | Thai',
    'ko-kr | Korean',
    'da | Danish',
    'lt | Lithuanian',
    'vi | Vietnamese',
    'bn | Bengali',
    'bg | Bulgarian',
    'hr | Croatian',
    'ar | Arabic',
    'is | Icelandic',
    'tw | Chinese - Taiwan',
    'lv | Latvian',
    'et | Estonian'
  ];


  constructor() {}

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

  onDisableUntilYesterday(checked: boolean) {
    let copy = this.getCopyOfOptions();
    let d: Date = new Date();
    d.setDate(d.getDate() - 1);
    copy.disableUntil = checked ? {year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()} : {year: 0, month: 0, day: 0};
    this.myDatePickerOptions = copy;
  }

  onDisableSinceTomorrow(checked: boolean) {
    let copy = this.getCopyOfOptions();
    let d: Date = new Date();
    d.setDate(d.getDate() + 1);
    copy.disableSince = checked ? {year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()} : {year: 0, month: 0, day: 0};
    this.myDatePickerOptions = copy;
  }

  onShowMonthNumber(checked: boolean) {
    let copy = this.getCopyOfOptions();
    copy.showMonthNumber = checked;
    this.myDatePickerOptions = copy;
  }

  onShowFooterBar(checked: boolean) {
    let copy = this.getCopyOfOptions();
    copy.showFooterToday = checked;
    this.myDatePickerOptions = copy;
  }

  onDisableOwnStyle(checked: boolean) {
    let copy = this.getCopyOfOptions();

    let d: Date = new Date();
    d.setDate(d.getDate() - 1);
    let yesterday: IMyDate = {year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()};

    d.setDate(d.getDate() + 1);
    let today: IMyDate = {year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()};
    
    d.setDate(d.getDate() + 1);
    let tomorrow: IMyDate = {year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()};

    copy.disableDates = checked ? [{dates: [yesterday, today, tomorrow], styleClass: 'disabledDates'}] : [];
    copy.stylesData = 
    {
      selector: 'dp1',
      styles: this.disableAndMarkOwnStyles()
    }

    this.myDatePickerOptions = copy;
  }

  onMarkOwnStyle(checked: boolean) {
    let copy = this.getCopyOfOptions();

    let d: Date = new Date();
    d.setDate(d.getDate() + 2);
    let yesterday: IMyDate = {year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()};

    d.setDate(d.getDate() + 1);
    let today: IMyDate = {year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()};
    
    d.setDate(d.getDate() + 1);
    let tomorrow: IMyDate = {year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()};

    copy.markDates = checked ? [
      {dates: [yesterday], styleClass: 'pilatesDates'}, 
      {dates: [today], styleClass: 'boxingDates'},
      {dates: [tomorrow], color: 'red', styleClass: 'pilatesDatesAndBoxingDates'}
    ] : [];
    copy.stylesData = 
    {
      selector: 'dp1',
      styles: this.disableAndMarkOwnStyles()
    }
    this.myDatePickerOptions = copy;
  }

  disableAndMarkOwnStyles(): string {
    return `
      .dp1 .disabledDates {
        background: repeating-linear-gradient(-45deg, red 7px, #ccc 8px, transparent 7px, transparent 14px);
      }
      .dp1 .pilatesDates {
        background: repeating-linear-gradient(-45deg, green 7px, #ccc 8px, transparent 7px, transparent 14px);
      }
      .dp1 .boxingDates {
        background: repeating-linear-gradient(-45deg, yellow 7px, #ccc 8px, transparent 7px, transparent 14px);
      }
      .dp1 .pilatesDatesAndBoxingDates {
        background: repeating-linear-gradient(-45deg, blue 7px, #ccc 8px, transparent 7px, transparent 14px);
      }
    `;
  }

  onRtl(checked: boolean) {
    let copy = this.getCopyOfOptions();
    copy.rtl = checked;
    this.myDatePickerOptions = copy;
  }

  onDisableInput(checked: boolean) {
    this.disabled = checked;
  }

  onSelectorSize(size: string) {
    let copy = this.getCopyOfOptions();

    if (size === '266px x 266px') {
      copy.selectorHeight = '266px';
      copy.selectorWidth = '266px';
    }
    else if (size === '200px x 220px') {
      copy.selectorHeight = '200px';
      copy.selectorWidth = '220px';
    }
    else {
      copy.selectorHeight = '260px';
      copy.selectorWidth = '290px';
    }

    this.myDatePickerOptions = copy;
  }


  onCalendarAnimation(animation: string) {
    let copy = this.getCopyOfOptions();

    if (animation === 'None') {
      copy.calendarAnimation = {in: CalAnimation.None, out: CalAnimation.None};
    }
    else if (animation === 'Fade') {
      copy.calendarAnimation = {in: CalAnimation.Fade, out: CalAnimation.Fade};
    }
    else if (animation === 'ScaleTop-ScaleCenter') {
      copy.calendarAnimation = {in: CalAnimation.ScaleTop, out: CalAnimation.ScaleCenter};
    }
    else if (animation === 'ScaleCenter-ScaleTop') {
      copy.calendarAnimation = {in: CalAnimation.ScaleCenter, out: CalAnimation.ScaleTop};
    }
    else if (animation === 'Rotate') {
      copy.calendarAnimation = {in: CalAnimation.Rotate, out: CalAnimation.Rotate};
    }
    else if (animation === 'FlipDiagonal') {
      copy.calendarAnimation = {in: CalAnimation.FlipDiagonal, out: CalAnimation.FlipDiagonal};
    }

    this.myDatePickerOptions = copy;
  }

  onOverrideCalColor(color: string) {
    let copy = this.getCopyOfOptions();
    copy.stylesData.selector = 'dp1';
    copy.selectorHeight = '266px';
    copy.selectorWidth = '266px';
 
    if (color === 'Default') {
      copy.stylesData.styles = '';
    }
    else if (color === 'Grey') {
      copy.stylesData.styles = `
      .dp1 .myDpIconLeftArrow,
      .dp1 .myDpIconRightArrow,
      .dp1 .myDpHeaderBtn {
          color: #6c757d;
      }
      .dp1 .myDpHeaderBtn:focus,
      .dp1 .myDpMonthLabel:focus,
      .dp1 .myDpYearLabel:focus {
        color: #aaa;
      }
      .dp1 .myDpDaycell:focus,
      .dp1 .myDpMonthcell:focus,
      .dp1 .myDpYearcell:focus {
        box-shadow: inset 0 0 0 1px #ccc;
      }
      .dp1 .myDpSelector:focus {
        box-shadow: -1px 1px 6px 0px #bbb;
      }
      .dp1 .myDpSelectorArrow:focus:before {
        border-bottom-color: #bbb;
      }
      .dp1 .myDpCurrMonth,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
          color: #6c757d;
          font-weight: bold;
      }
      .dp1 .myDpDaycellWeekNbr {
        color: #6c757d;
      }
      .dp1 .myDpPrevMonth,
      .dp1 .myDpNextMonth {
          color: #aaa;
      }
      .dp1 .myDpWeekDayTitle {
        background-color: transparent;
        color: #6c757d;
        font-weight: bold;
      }
      .dp1 .myDpHeaderBtnEnabled:hover,
      .dp1 .myDpMonthLabel:hover,
      .dp1 .myDpYearLabel:hover,
      .dp1 .myDpFooterBtn:hover {
          color: #212529;
      }
      .dp1 .myDpMarkCurrDay, 
      .dp1 .myDpMarkCurrMonth, 
      .dp1 .myDpMarkCurrYear {
          border-bottom: 2px solid #6c757d;
      }
      .dp1 .myDpDisabled {
          color: #999;
      }
      .dp1 .myDpHighlight {
          color: #cd5c5c;
      }
      .dp1 .myDpTableSingleDay:hover, 
      .dp1 .myDpTableSingleMonth:hover, 
      .dp1 .myDpTableSingleYear:hover {
          background-color: #ccc;
          color: #222;
      }
      .dp1 .myDpRangeColor {
        background-color: #eee;
      }
      .dp1 .myDpSelectedDay,
      .dp1 .myDpSelectedMonth,
      .dp1 .myDpSelectedYear {
        background-color: #ccc;
        color: #222;
      }
    `
    }
    else if (color === 'Blue') {
      copy.stylesData.styles = `
      .dp1 .myDpIconLeftArrow,
      .dp1 .myDpIconRightArrow,
      .dp1 .myDpHeaderBtn {
          color: #3855c1;
      }
      .dp1 .myDpHeaderBtn:focus,
      .dp1 .myDpMonthLabel:focus,
      .dp1 .myDpYearLabel:focus {
        color: #66afe9;
      }
      .dp1 .myDpDaycell:focus,
      .dp1 .myDpMonthcell:focus,
      .dp1 .myDpYearcell:focus {
        box-shadow: inset 0 0 0 1px #66afe9;
      }
      .dp1 .myDpSelector:focus {
        box-shadow: -1px 1px 6px 0px #ADD8E6;
      }
      .dp1 .myDpSelectorArrow:focus:before {
        border-bottom-color: #ADD8E6;
      }
      .dp1 .myDpCurrMonth,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
          color: #3855c1;
          font-weight: bold;
      }
      .dp1 .myDpDaycellWeekNbr {
        color: #3855c1;
      }
      .dp1 .myDpPrevMonth,
      .dp1 .myDpNextMonth {
          color: #6495ED;
      }
      .dp1 .myDpWeekDayTitle {
          background-color: transparent;
          color: #3855c1;
          font-weight: bold;
      }
      .dp1 .myDpHeaderBtnEnabled:hover,
      .dp1 .myDpMonthLabel:hover,
      .dp1 .myDpYearLabel:hover,
      .dp1 .myDpFooterBtn:hover {
          color: #add8e6;
      }
      .dp1 .myDpMarkCurrDay, 
      .dp1 .myDpMarkCurrMonth, 
      .dp1 .myDpMarkCurrYear {
          border-bottom: 2px solid #3855c1;
      }
      .dp1 .myDpDisabled {
          color: #999;
      }
      .dp1 .myDpHighlight {
          color: #cd5c5c;
      }
      .dp1 .myDpTableSingleDay:hover, 
      .dp1 .myDpTableSingleMonth:hover, 
      .dp1 .myDpTableSingleYear:hover {
          background-color: #add8e6;
          color: #3855c1;
      }
      .dp1 .myDpRangeColor {
        background-color: #dbeaff;
      }
      .dp1 .myDpSelectedDay,
      .dp1 .myDpSelectedMonth,
      .dp1 .myDpSelectedYear {
        background-color: #8EBFFF;
      }
    `
    }
    else if (color === 'Green') {
      copy.stylesData.styles = `
      .dp1 .myDpIconLeftArrow,
      .dp1 .myDpIconRightArrow,
      .dp1 .myDpHeaderBtn {
          color: #228B22;
      }
      .dp1 .myDpHeaderBtn:focus,
      .dp1 .myDpMonthLabel:focus,
      .dp1 .myDpYearLabel:focus {
        color: #8FBC8F;
      }
      .dp1 .myDpDaycell:focus,
      .dp1 .myDpMonthcell:focus,
      .dp1 .myDpYearcell:focus {
        box-shadow: inset 0 0 0 1px #8FBC8F;
      }
      .dp1 .myDpSelector:focus {
        box-shadow: -1px 1px 6px 0px #B0D0B0;
      }
      .dp1 .myDpSelectorArrow:focus:before {
        border-bottom-color: #B0D0B0;
      }
      .dp1 .myDpCurrMonth,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
          color: #228B22;
          font-weight: bold;
      }
      .dp1 .myDpDaycellWeekNbr {
        color: #228B22;
      }
      .dp1 .myDpPrevMonth,
      .dp1 .myDpNextMonth {
          color: #8FBC8F;
      }
      .dp1 .myDpWeekDayTitle {
        background-color: transparent;
        color: #228B22;
        font-weight: bold;
      }
      .dp1 .myDpHeaderBtnEnabled:hover,
      .dp1 .myDpMonthLabel:hover,
      .dp1 .myDpYearLabel:hover,
      .dp1 .myDpFooterBtn:hover {
          color: #90EE90;
      }
      .dp1 .myDpMarkCurrDay, 
      .dp1 .myDpMarkCurrMonth, 
      .dp1 .myDpMarkCurrYear {
          border-bottom: 2px solid #228B22;
      }
      .dp1 .myDpDisabled {
          color: #999;
      }
      .dp1 .myDpHighlight {
          color: #cd5c5c;
      }
      .dp1 .myDpTableSingleDay:hover, 
      .dp1 .myDpTableSingleMonth:hover, 
      .dp1 .myDpTableSingleYear:hover {
          background-color: #90EE90;
          color: #228B22;
      }
      .dp1 .myDpRangeColor {
        background-color: #D1F8D1;
      }
      .dp1 .myDpSelectedDay,
      .dp1 .myDpSelectedMonth,
      .dp1 .myDpSelectedYear {
        background-color: #00FA9A;
      }
    `
    }
    else if (color === 'Red') {
      copy.stylesData.styles = `
      .dp1 .myDpIconLeftArrow,
      .dp1 .myDpIconRightArrow,
      .dp1 .myDpHeaderBtn {
          color: #B22222;
      }
      .dp1 .myDpHeaderBtn:focus,
      .dp1 .myDpMonthLabel:focus,
      .dp1 .myDpYearLabel:focus {
        color: #FF6347;
      }
      .dp1 .myDpDaycell:focus,
      .dp1 .myDpMonthcell:focus,
      .dp1 .myDpYearcell:focus {
        box-shadow: inset 0 0 0 1px #FF6347;
      }
      .dp1 .myDpSelector:focus {
        box-shadow: -1px 1px 6px 0px #F9CCCC;
      }
      .dp1 .myDpSelectorArrow:focus:before {
        border-bottom-color: #F9CCCC;
      }
      .dp1 .myDpCurrMonth,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
          color: #B22222;
          font-weight: bold;
      }
      .dp1 .myDpDaycellWeekNbr {
        color: #B22222;
      }
      .dp1 .myDpPrevMonth,
      .dp1 .myDpNextMonth {
          color: #F08080;
      }
      .dp1 .myDpWeekDayTitle {
        background-color: transparent;
        color: #B22222;
        font-weight: bold;
      }
      .dp1 .myDpHeaderBtnEnabled:hover,
      .dp1 .myDpMonthLabel:hover,
      .dp1 .myDpYearLabel:hover,
      .dp1 .myDpFooterBtn:hover {
          color: #F08080;
      }
      .dp1 .myDpMarkCurrDay, 
      .dp1 .myDpMarkCurrMonth, 
      .dp1 .myDpMarkCurrYear {
          border-bottom: 2px solid #800000;
      }
      .dp1 .myDpDisabled {
          color: #999;
      }
      .dp1 .myDpHighlight {
          color: #FF0000;
      }
      .dp1 .myDpTableSingleDay:hover, 
      .dp1 .myDpTableSingleMonth:hover, 
      .dp1 .myDpTableSingleYear:hover {
          background-color: #F6B2B2;
          color: #800000;
      }
      .dp1 .myDpRangeColor {
        background-color: #FFE1E6;
      }
      .dp1 .myDpSelectedDay,
      .dp1 .myDpSelectedMonth,
      .dp1 .myDpSelectedYear {
        background-color: #E6ADAD;
        color: #800000;
      }
    `
    }
    else if (color === 'Yellow') {
      copy.stylesData.styles = `
      .dp1 .myDpIconLeftArrow,
      .dp1 .myDpIconRightArrow,
      .dp1 .myDpHeaderBtn {
          color: #DAA520;
      }
      .dp1 .myDpHeaderBtn:focus,
      .dp1 .myDpMonthLabel:focus,
      .dp1 .myDpYearLabel:focus {
        color: #FFDAB9;
      }
      .dp1 .myDpDaycell:focus,
      .dp1 .myDpMonthcell:focus,
      .dp1 .myDpYearcell:focus {
        box-shadow: inset 0 0 0 1px #F4A460;
      }
      .dp1 .myDpSelector:focus {
        box-shadow: -1px 1px 6px 0px #FADABF;
      }
      .dp1 .myDpSelectorArrow:focus:before {
        border-bottom-color: #FADABF;
      }
      .dp1 .myDpCurrMonth,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
          color: #DAA520;
          font-weight: bold;
      }
      .dp1 .myDpDaycellWeekNbr {
        color: #DAA520;
      }
      .dp1 .myDpPrevMonth,
      .dp1 .myDpNextMonth {
          color: #DEB887;
      }
      .dp1 .myDpWeekDayTitle {
        background-color: transparent;
        color: #DAA520;
        font-weight: bold;
      }
      .dp1 .myDpHeaderBtnEnabled:hover,
      .dp1 .myDpMonthLabel:hover,
      .dp1 .myDpYearLabel:hover,
      .dp1 .myDpFooterBtn:hover {
          color: #F0E68C;
      }
      .dp1 .myDpMarkCurrDay, 
      .dp1 .myDpMarkCurrMonth, 
      .dp1 .myDpMarkCurrYear {
          border-bottom: 2px solid #DAA520;
      }
      .dp1 .myDpDisabled {
          color: #999;
      }
      .dp1 .myDpTableSingleDay:hover, 
      .dp1 .myDpTableSingleMonth:hover, 
      .dp1 .myDpTableSingleYear:hover {
          background-color: #F0E68C;
          color: #DAA520;
      }
      .dp1 .myDpRangeColor {
        background-color: #FFF1DC;
      }
      .dp1 .myDpSelectedDay,
      .dp1 .myDpSelectedMonth,
      .dp1 .myDpSelectedYear {
        background-color: #F0E68C;
        color: #B8860B;
      }
    `
    }
    else if (color === 'Dark') {
      copy.stylesData.styles = `
      .dp1 .myDpIconLeftArrow,
      .dp1 .myDpIconRightArrow,
      .dp1 .myDpHeaderBtn {
          color: #fff;
      }
      .dp1 .myDpHeaderBtn:focus,
      .dp1 .myDpMonthLabel:focus,
      .dp1 .myDpYearLabel:focus {
        color: #66afe9;
      }
      .dp1 .myDpDaycell:focus,
      .dp1 .myDpMonthcell:focus,
      .dp1 .myDpYearcell:focus {
        box-shadow: inset 0 0 0 1px #66afe9;
      }
      .dp1 .myDpSelector:focus {
        box-shadow: -1px 1px 6px 0px #ADD8E6;
      }
      .dp1 .myDpSelectorArrow:after {
        border-color: rgba(108, 117, 125, 0);
        border-bottom-color: #6c757d;
      }
      .dp1 .myDpSelectorArrow:focus:before {
        border-bottom-color: #ADD8E6;
      }
      .dp1 .myDpCurrMonth,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
          color: #fff;
          font-weight: bold;
      }
      .dp1 .myDpDaycellWeekNbr {
        color: #fff;
        background-color: #6c757d;
      }
      .dp1 .myDpPrevMonth,
      .dp1 .myDpNextMonth {
          color: #bbb;
      }
      .dp1 .myDpWeekDayTitle {
        background-color: #6c757d;
        color: #fff;
        font-weight: bold;
      }
      .dp1 .myDpHeaderBtnEnabled:hover,
      .dp1 .myDpMonthLabel:hover,
      .dp1 .myDpYearLabel:hover,
      .dp1 .myDpFooterBtn:hover {
          color: #ddd;
      }
      .dp1 .myDpMarkCurrDay, 
      .dp1 .myDpMarkCurrMonth, 
      .dp1 .myDpMarkCurrYear {
          border-bottom: 2px solid #fff;
      }
      .dp1 .myDpDisabled {
          color: #fff;
          background: repeating-linear-gradient(-45deg, #6c757d 7px, #d3d3d3 8px, transparent 7px, transparent 14px);
      }
      .dp1 .myDpHighlight {
        color: 	#960018;
      }
      .dp1 .myDpTableSingleDay:hover, 
      .dp1 .myDpTableSingleMonth:hover, 
      .dp1 .myDpTableSingleYear:hover {
          background-color: #ddd;
          color: #000;
          font-weight: bold;
      }
      .dp1 .myDpDaycell,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
        background-color: #6c757d;
      }
      .dp1 .myDpRangeColor {
        background-color: #aaa;
        color: #fff;
      }
      .dp1 .myDpSelectedDay,
      .dp1 .myDpSelectedMonth,
      .dp1 .myDpSelectedYear {
        background-color: #aaa;
        color: #fff;
        font-weight: bold;
        box-shadow: inset 0 0 0 1px #fff;
      }
      .dp1 .myDpSelector,
      .dp1 .myDpMonthYearSelBar,
      .dp1 .myDpFooterBar {
        background-color: #6c757d;
      }
    `
    }
    else if (color === 'Bold') {
      copy.stylesData.styles = `
      .dp1 .myDpHeaderBtn {
        font-size: 20px;
        font-weight: bold;
        color: #191aa5;
      }
      .dp1 .myDpWeekDayTitle {
        font-size: 16px;
        font-weight: bold;
        color: #191aa5;
      }
      .dp1 .myDpCurrMonth,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
        font-size: 18px;
        font-weight: bold;
        color: #191aa5;
      }
      .dp1 .myDpPrevMonth,
      .dp1 .myDpNextMonth {
        color: cornflowerblue;
        font-weight: bold;
      }
      .dp1 .myDpMonthNbr {
        font-size: 14px;
      }
      .dp1 .myDpMarkCurrDay,
      .dp1 .myDpMarkCurrMonth,
      .dp1 .myDpMarkCurrYear {
        border-bottom: 2px solid #191aa5;
      }
      .dp1 .myDpDisabled {
        color: #999;
      }

      .dp1 .myDpHeaderBtn:focus,
      .dp1 .myDpMonthLabel:focus,
      .dp1 .myDpYearLabel:focus {
        color: #FFDAB9;
      }
      .dp1 .myDpDaycell:focus,
      .dp1 .myDpMonthcell:focus,
      .dp1 .myDpYearcell:focus {
        box-shadow: inset 0 0 0 1px #F4A460;
      }
      .dp1 .myDpSelector:focus {
        box-shadow: -1px 1px 6px 0px #FADABF;
      }
      .dp1 .myDpSelectorArrow:focus:before {
        border-bottom-color: #FADABF;
      }
      .dp1 .myDpHeaderBtnEnabled:hover,
      .dp1 .myDpMonthLabel:hover,
      .dp1 .myDpYearLabel:hover,
      .dp1 .myDpFooterBtn:hover {
          color: #F0E68C;
      }
      .dp1 .myDpTableSingleDay:hover, 
      .dp1 .myDpTableSingleMonth:hover, 
      .dp1 .myDpTableSingleYear:hover {
          background-color: #F0E68C;
          color: #113B08;
      }
      `
      copy.selectorHeight = '300px';
      copy.selectorWidth = '300px';
    }

    this.myDatePickerOptions = copy;
  }

  onDefaultView(size: string) {
    let copy = this.getCopyOfOptions();

    if (size === 'date') {
      copy.defaultView = DefaultView.Date;
    }
    else if (size === 'month') {
      copy.defaultView = DefaultView.Month;
    }
    else {
      copy.defaultView = DefaultView.Year;
    }

    this.myDatePickerOptions = copy;
  }

  onChangeLocale(locale: any) {
    this.locale = locale.split(' | ')[0];
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

  onRangeDateSelection(event: IMyRangeDateSelection): void {
    console.log('onRangeDateSelection(): event: ', event);
/*
    let {isBegin, date, jsDate} = event;

    let options: IAngularMyDpOptions = this.getCopyOfOptions();
    if(isBegin) {
        // start date selection - set disable since (selected date + 7 days)
        this.ngxdp.writeValue({
          isRange: true, 
          singleDate: null, 
          dateRange: {
            beginDate: {year: 0, month: 0, day: 0},
            endDate: {year: 0, month: 0, day: 0}
          }
        });

        this.ngxdp.setHostValue("");

        let d = new Date(jsDate.getTime());
        d.setDate(d.getDate() + 7);
        
        options.disableSince = {year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()};
        this.myDatePickerOptions = options;

        this.defMonth = {
          defMonth: date.month + '.' + date.year,
          overrideSelection: true
        };
    }
    else {
        // end date selection - remove disableSince option
        options.disableSince = {year: 0, month: 0, day: 0};
        this.myDatePickerOptions = options;

        let d: Date = new Date();

        let month: any = d.getMonth() + 1;
        if (month < 10) {
          month = '0' + month;
        }

        this.defMonth = {
          defMonth: month + '.' + d.getFullYear(),
          overrideSelection: false
        };
    }
*/
  }

  onViewActivated(event: ActiveView): void {
    console.log('onViewActivated(): event: ', event);
  }
}
