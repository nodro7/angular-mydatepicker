import { Component, OnInit } from '@angular/core';

import {IAngularMyDpOptions, IMyDateModel, IMyMarkedDates, IMyCalendarAnimation, CalAnimation} from 'angular-mydatepicker';

@Component({
  selector: 'app-dp-options',
  templateUrl: './dp-options.component.html',
  styleUrls: ['./dp-options.component.css']
})
export class DpOptionsComponent implements OnInit {

  public myOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd.mm.yyyy',
    disableUntil: {year: 0, month: 0, day: 0},
    disableSince: {year: 0, month: 0, day: 0},
    disableDates: [],
    firstDayOfWeek: 'mo',
    highlightDates: [],
    markDates: [],
    showWeekNumbers: false,
    disableWeekdays: [],
    stylesData: {selector: '', styles: ''},
    calendarAnimation: {in: CalAnimation.None, out: CalAnimation.None},
    rtl: false
  };

  public model: IMyDateModel = null;

  public animations: Array<string> = [
    'None', 
    'Fade', 
    'ScaleTop-ScaleCenter', 
    'ScaleCenter-ScaleTop', 
    'Rotate', 
    'FlipDiagonal'
  ];

  public styleColor: Array<string> = new Array('Default', 'Grey', 'Blue', 'Green', 'Red', 'Yellow');

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

  ngOnInit() {
  }

  onDisableUntilYesterday(checked: boolean): void {
    let copy = this.getCopyOfOptions();
    if (checked) {
      let d: Date = new Date();
      d.setDate(d.getDate() - 1);
      copy.disableUntil = {year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()};
    }
    else {
      copy.disableUntil = {year: 0, month: 0, day: 0};
    }
    this.myOptions = copy;
  }

  onDisableSinceTomorrow(checked: boolean): void {
    let copy = this.getCopyOfOptions();
    if (checked) {
      let d: Date = new Date();
      d.setDate(d.getDate() + 1);
      copy.disableSince = {year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()};
    }
    else {
      copy.disableSince = {year: 0, month: 0, day: 0};
    }
    this.myOptions = copy;
  }

  onDisableThirdDay(checked: boolean): void {
    let copy = this.getCopyOfOptions();
    copy.disableDates = checked ? [{year: 0, month: 0, day: 3}] : [];
    this.myOptions = copy;
  }

  onSundayFirstDayOfWeek(checked: boolean): void {
    let copy = this.getCopyOfOptions();
    copy.firstDayOfWeek = checked ? 'su' : 'mo';
    this.myOptions = copy;
  }

  onHighlightToday(checked: boolean): void {
    let d: Date = new Date();
    let copy = this.getCopyOfOptions();
    copy.highlightDates = checked ? [{year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()}] : [];
    this.myOptions = copy;
  }

  onMarkToday(checked: boolean): void {
    let d: Date = new Date();
    let copy = this.getCopyOfOptions();
    copy.markDates = checked ? [{dates: [{year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()}], color: 'red'}] : [];
    this.myOptions = copy;
  }

  onShowWeekNumbers(checked: boolean): void {
    let copy = this.getCopyOfOptions();
    copy.showWeekNumbers = checked;
    this.myOptions = copy;
  }

  onDisableWednesday(checked: boolean): void {
    let copy = this.getCopyOfOptions();
    copy.disableWeekdays = checked ? ['we'] : [];
    this.myOptions = copy;
  }

  onDateRangePicker(checked: boolean): void {
    this.model = null;
    let copy = this.getCopyOfOptions();
    copy.dateRange = checked;
    this.myOptions = copy;
  }

  onRtl(checked: boolean): void {
    let copy = this.getCopyOfOptions();
    copy.rtl = checked;
    this.myOptions = copy;
  }

  onChangeCalendarAnimation(animation: string): void {
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

    this.myOptions = copy;
  }

  onOverrideStyles(color: string) {
    let copy = this.getCopyOfOptions();
    copy.stylesData.selector = 'dp1';
 
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
      }
      .dp1 .myDpCalTable th.myDpWeekDayTitle {
        border-bottom: 1px solid #ddd;
      }
      .dp1 .monthYearSelBar {
        border-bottom: 1px solid #ddd;
      }
      .dp1 .monthYearSelBar {
        border-bottom: 1px solid #ddd;
      }
      .dp1 .myDpHeaderBtnEnabled:hover,
      .dp1 .myDpMonthLabel:hover,
      .dp1 .myDpYearLabel:hover {
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
        border: 1px solid #ADD8E6;
      }
      .dp1 .myDpSelectorArrow:focus:before {
        border-bottom-color: #ADD8E6;
      }
      .dp1 .myDpCurrMonth,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
          color: #3855c1;
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
      }
      .dp1 .myDpCalTable th.myDpWeekDayTitle {
        border-bottom: 1px solid #a9d2f3;
      }
      .dp1 .monthYearSelBar {
        border-bottom: 1px solid #a9d2f3;
      }
      .dp1 .myDpHeaderBtnEnabled:hover,
      .dp1 .myDpMonthLabel:hover,
      .dp1 .myDpYearLabel:hover {
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
        border: 1px solid #B0D0B0;
      }
      .dp1 .myDpSelectorArrow:focus:before {
        border-bottom-color: #B0D0B0;
      }
      .dp1 .myDpCurrMonth,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
          color: #228B22;
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
      }
      .dp1 .myDpCalTable th.myDpWeekDayTitle {
        border-bottom: 1px solid #B0D0B0;
      }
      .dp1 .monthYearSelBar {
        border-bottom: 1px solid #B0D0B0;
      }
      .dp1 .myDpHeaderBtnEnabled:hover,
      .dp1 .myDpMonthLabel:hover,
      .dp1 .myDpYearLabel:hover {
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
        border: 1px solid #F9CCCC;
      }
      .dp1 .myDpSelectorArrow:focus:before {
        border-bottom-color: #F9CCCC;
      }
      .dp1 .myDpCurrMonth,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
          color: #B22222;
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
      }
      .dp1 .myDpCalTable th.myDpWeekDayTitle {
        border-bottom: 1px solid #fad8d8;
      }
      .dp1 .monthYearSelBar {
        border-bottom: 1px solid #fad8d8;
      }
      .dp1 .myDpHeaderBtnEnabled:hover,
      .dp1 .myDpMonthLabel:hover,
      .dp1 .myDpYearLabel:hover {
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
        border: 1px solid #FADABF;
      }
      .dp1 .myDpSelectorArrow:focus:before {
        border-bottom-color: #FADABF;
      }
      .dp1 .myDpCurrMonth,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
          color: #DAA520;
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
      }
      .dp1 .myDpCalTable th.myDpWeekDayTitle {
        border-bottom: 1px solid #FADABF;
      }
      .dp1 .monthYearSelBar {
        border-bottom: 1px solid #FADABF;
      }
      .dp1 .myDpHeaderBtnEnabled:hover,
      .dp1 .myDpMonthLabel:hover,
      .dp1 .myDpYearLabel:hover {
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

    this.myOptions = copy;
  }

  onChangeLocale(locale: string): void {
    this.model = null;
    this.locale = locale.split(' | ')[0];
  }

  // optional date changed callback
  onDateChanged(event: IMyDateModel): void {
    console.log('onDateChanged(): ', event);
  }

  getCopyOfOptions(): IAngularMyDpOptions {
    return JSON.parse(JSON.stringify(this.myOptions));
  }
}
