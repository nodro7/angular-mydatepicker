import { Component, OnInit } from '@angular/core';

import {IAngularMyDpOptions, IMyDateModel, IMyMarkedDates} from 'angular-mydatepicker';

@Component({
  selector: 'app-dp-options',
  templateUrl: './dp-options.component.html',
  styleUrls: ['./dp-options.component.css']
})
export class DpOptionsComponent implements OnInit {

  private myOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd.mm.yyyy',
    disableUntil: {year: 0, month: 0, day: 0},
    disableSince: {year: 0, month: 0, day: 0},
    disableDates: [],
    firstDayOfWeek: 'mo',
    highlightDates: [],
    markDates: [],
    showWeekNumbers: false,
    disableWeekdays: []
  };

  private model: IMyDateModel = null;

  private locale: string = 'en';
  private locales: Array<string> = new Array('en', 'fr', 'ja', 'fi', 'es', 'hu', 'sv', 'nl', 'ru', 'uk', 'no', 'tr', 'pt-br', 'de', 'it', 'it-ch', 'pl', 'my', 'sk', 'sl', 'zh-cn', 'he', 'ro', 'ca', 'id', 'en-au', 'am-et', 'cs', 'el', 'kk', 'th', 'ko-kr', 'da', 'lt', 'vi', 'bn', 'bg', 'hr', 'ar', 'is', 'de-ch', 'fr-ch', 'tw', 'lv', 'et');


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

  onChangeLocale(locale: string): void {
    this.model = null;
    this.locale = locale;
  }

  // optional date changed callback
  onDateChanged(event: IMyDateModel): void {
    console.log('onDateChanged(): ', event);
  }

  getCopyOfOptions(): IAngularMyDpOptions {
    return JSON.parse(JSON.stringify(this.myOptions));
  }
}
