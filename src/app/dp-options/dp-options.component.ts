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

  public styleColor: Array<string> = new Array('Default', 'Blue', 'Green', 'Red', 'Yellow');

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
      .dp1 .myDpCurrMonth,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
          color: #3855c1;
      }
      .dp1 .myDpPrevMonth,
      .dp1 .myDpNextMonth {
          color: #6495ED;
      }
      .dp1 .myDpWeekDayTitle {
          background-color: #3855c1;
          color: #ffffff;
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
      .dp1 .myDpCurrMonth,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
          color: #228B22;
      }
      .dp1 .myDpPrevMonth,
      .dp1 .myDpNextMonth {
          color: #8FBC8F;
      }
      .dp1 .myDpWeekDayTitle {
          background-color: #228B22;
          color: #ffffff;
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
      }
      .dp1 .myDpRangeColor {
        background-color: #90EE90;
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
          color: #800000;
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
      .dp1 .myDpCurrMonth,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
          color: #800000;
      }
      .dp1 .myDpPrevMonth,
      .dp1 .myDpNextMonth {
          color: #DB7093;
      }
      .dp1 .myDpWeekDayTitle {
          background-color: #800000;
          color: #ffffff;
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
          color: #008000;
      }
      .dp1 .myDpTableSingleDay:hover, 
      .dp1 .myDpTableSingleMonth:hover, 
      .dp1 .myDpTableSingleYear:hover {
          background-color: #F08080;
      }
      .dp1 .myDpRangeColor {
        background-color: #FFB6C1;
      }
      .dp1 .myDpSelectedDay,
      .dp1 .myDpSelectedMonth,
      .dp1 .myDpSelectedYear {
        background-color: #CD5C5C;
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
      .dp1 .myDpCurrMonth,
      .dp1 .myDpMonthcell,
      .dp1 .myDpYearcell {
          color: #DAA520;
      }
      .dp1 .myDpPrevMonth,
      .dp1 .myDpNextMonth {
          color: #DEB887;
      }
      .dp1 .myDpWeekDayTitle {
          background-color: #DAA520;
          color: #444;
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
      }
      .dp1 .myDpRangeColor {
        background-color: #FFEBCD;
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
