import {Injectable} from "@angular/core";
import {IMyDateModel, IMySingleDateModel, IMyDateRangeModel, IMyDate, IMyDateRange, IMyMonth, IMyMonthLabels, IMyMarkedDates, IMyMarkedDate, IMyDateFormat, IMyOptions} from "../interfaces";
import {KeyCode, KeyName} from "../enums";
import {D, DD, M, MM, MMM, YYYY, SU, MO, TU, WE, TH, FR, SA, ZERO_STR, EMPTY_STR} from "../constants";

@Injectable()
export class UtilService {
  weekDays: Array<string> = [SU, MO, TU, WE, TH, FR, SA];

  isDateValid(dateStr: string, options: IMyOptions): IMyDate {
    let {dateFormat, minYear, maxYear, monthLabels} = options;

    let returnDate: IMyDate = this.resetDate();
    let daysInMonth: Array<number> = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let isMonthStr: boolean = dateFormat.indexOf(MMM) !== -1;
    let delimeters: Array<string> = dateFormat.match(/[^(dmy)]{1,}/g);

    let dateValue: Array<IMyDateFormat> = this.getDateValue(dateStr, dateFormat, delimeters);
    let year: number = this.getNumberByValue(dateValue[0]);
    let month: number = isMonthStr ? this.getMonthNumberByMonthName(dateValue[1], monthLabels) : this.getNumberByValue(dateValue[1]);
    let day: number = this.getNumberByValue(dateValue[2]);

    if (month !== -1 && day !== -1 && year !== -1) {
      if (year < minYear || year > maxYear || month < 1 || month > 12) {
        return returnDate;
      }

      let date: IMyDate = {year: year, month: month, day: day};

      if (this.isDisabledDate(date, options)) {
        return returnDate;
      }

      if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
        daysInMonth[1] = 29;
      }

      if (day < 1 || day > daysInMonth[month - 1]) {
        return returnDate;
      }

      // Valid date
      return date;
    }
    return returnDate;
  }

  isDateValidDateRange(dateRangeStr: string, options: IMyOptions): IMyDateRange {
    let dateRange: IMyDateRange = {begin: this.resetDate(), end: this.resetDate()};
    if (dateRangeStr && dateRangeStr.length) {
      let dates: Array<string> = dateRangeStr.split(options.dateRangeDatesDelimiter);
      if(dates && dates.length === 2) {
        let [beginDate, endDate] = dates;
        let begin: IMyDate = this.isDateValid(beginDate, options);

        if (this.isInitializedDate(begin)) {
          let end: IMyDate = this.isDateValid(endDate, options);

          if (this.isInitializedDate(end) && this.isDateSameOrEarlier(begin, end)) {
            dateRange = {begin, end};
          }
        }
      }
    }
    return dateRange;
  }

  getDateValue(dateStr: string, dateFormat: string, delimeters: Array<string>): Array<IMyDateFormat> {
    let del: string = delimeters[0];
    if (delimeters[0] !== delimeters[1]) {
      del = delimeters[0] + delimeters[1];
    }

    let re: any = new RegExp("[" + del + "]");
    let ds: Array<string> = dateStr.split(re);
    let df: Array<string> = dateFormat.split(re);
    let da: Array<IMyDateFormat> = [];

    for (let i = 0; i < df.length; i++) {
      if (df[i].indexOf(YYYY) !== -1) {
        da[0] = {value: ds[i], format: df[i]};
      }
      if (df[i].indexOf(M) !== -1) {
        da[1] = {value: ds[i], format: df[i]};
      }
      if (df[i].indexOf(D) !== -1) {
        da[2] = {value: ds[i], format: df[i]};
      }
    }
    return da;
  }

  getMonthNumberByMonthName(df: IMyDateFormat, monthLabels: IMyMonthLabels): number {
    if (df.value) {
      for (let key = 1; key <= 12; key++) {
        if (df.value.toLowerCase() === monthLabels[key].toLowerCase()) {
          return key;
        }
      }
    }
    return -1;
  }

  getNumberByValue(df: IMyDateFormat): number {
    if (!/^\d+$/.test(df.value)) {
      return -1;
    }

    let nbr: number = Number(df.value);
    if (df.format.length === 1 && df.value.length !== 1 && nbr < 10 || df.format.length === 1 && df.value.length !== 2 && nbr >= 10) {
      nbr = -1;
    }
    else if (df.format.length === 2 && df.value.length > 2) {
      nbr = -1;
    }
    return nbr;
  }

  parseDefaultMonth(monthString: string): IMyMonth {
    let month: IMyMonth = {monthTxt: EMPTY_STR, monthNbr: 0, year: 0};
    if (monthString !== EMPTY_STR) {
      let split = monthString.split(monthString.match(/[^0-9]/)[0]);
      month.monthNbr = split[0].length === 2 ? parseInt(split[0]) : parseInt(split[1]);
      month.year = split[0].length === 2 ? parseInt(split[1]) : parseInt(split[0]);
    }
    return month;
  }

  isDisabledDate(date: IMyDate, options: IMyOptions): boolean {
    let {minYear, maxYear, disableUntil, disableSince, disableWeekends, disableDates, disableDateRanges, disableWeekdays, enableDates} = options;

    for (let d of enableDates) {
      if ((d.year === 0 || d.year === date.year) && (d.month === 0 || d.month === date.month) && d.day === date.day) {
        return false;
      }
    }

    if (date.year < minYear && date.month === 12 || date.year > maxYear && date.month === 1) {
      return true;
    }

    let dateMs: number = this.getTimeInMilliseconds(date);
    if (this.isInitializedDate(disableUntil) && dateMs <= this.getTimeInMilliseconds(disableUntil)) {
      return true;
    }

    if (this.isInitializedDate(disableSince) && dateMs >= this.getTimeInMilliseconds(disableSince)) {
      return true;
    }

    if (disableWeekends) {
      let dayNbr = this.getDayNumber(date);
      if (dayNbr === 0 || dayNbr === 6) {
        return true;
      }
    }

    let dn = this.getDayNumber(date);
    if (disableWeekdays.length > 0) {
      for (let wd of disableWeekdays) {
        if (dn === this.getWeekdayIndex(wd)) {
          return true;
        }
      }
    }

    for (let d of disableDates) {
      if ((d.year === 0 || d.year === date.year) && (d.month === 0 || d.month === date.month) && d.day === date.day) {
        return true;
      }
    }

    for (let d of disableDateRanges) {
      if (this.isInitializedDate(d.begin) && this.isInitializedDate(d.end) && dateMs >= this.getTimeInMilliseconds(d.begin) && dateMs <= this.getTimeInMilliseconds(d.end)) {
        return true;
      }
    }
    return false;
  }

  isMarkedDate(date: IMyDate, markedDates: Array<IMyMarkedDates>, markWeekends: IMyMarkedDate): IMyMarkedDate {
    for (let md of markedDates) {
      for (let d of md.dates) {
        if (d.year === date.year && d.month === date.month && d.day === date.day) {
          return {marked: true, color: md.color};
        }
      }
    }
    if (markWeekends && markWeekends.marked) {
      let dayNbr = this.getDayNumber(date);
      if (dayNbr === 0 || dayNbr === 6) {
        return {marked: true, color: markWeekends.color};
      }
    }
    return {marked: false, color: EMPTY_STR};
  }

  isHighlightedDate(date: IMyDate, sunHighlight: boolean, satHighlight: boolean, highlightDates: Array<IMyDate>): boolean {
    let dayNbr: number = this.getDayNumber(date);
    if (sunHighlight && dayNbr === 0 || satHighlight && dayNbr === 6) {
      return true;
    }
    for (let d of highlightDates) {
      if (d.year === date.year && d.month === date.month && d.day === date.day) {
        return true;
      }
    }
    return false;
  }

  getWeekNumber(date: IMyDate): number {
    let d: Date = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
    d.setDate(d.getDate() + (d.getDay() === 0 ? -3 : 4 - d.getDay()));
    return Math.round(((d.getTime() - new Date(d.getFullYear(), 0, 4).getTime()) / 86400000) / 7) + 1;
  }

  isMonthDisabledByDisableUntil(date: IMyDate, disableUntil: IMyDate): boolean {
    return this.isInitializedDate(disableUntil) && this.getTimeInMilliseconds(date) <= this.getTimeInMilliseconds(disableUntil);
  }

  isMonthDisabledByDisableSince(date: IMyDate, disableSince: IMyDate): boolean {
    return this.isInitializedDate(disableSince) && this.getTimeInMilliseconds(date) >= this.getTimeInMilliseconds(disableSince);
  }

  getDateModel(date: IMyDate, dateRange: IMyDateRange, dateFormat: string, monthLabels: IMyMonthLabels, rangeDelimiter: string, dateStr: string = EMPTY_STR): IMyDateModel {
    let singleDateModel: IMySingleDateModel = null;
    let dateRangeModel: IMyDateRangeModel = null;

    if (date) {
      singleDateModel = {
        date: date,
        jsDate: this.getDate(date),
        formatted: dateStr.length ? dateStr : this.formatDate(date, dateFormat, monthLabels),
        epoc: this.getEpocTime(date)
      };
    }
    else {
      dateRangeModel = {
        beginDate: dateRange.begin,
        beginJsDate: this.getDate(dateRange.begin),
        beginEpoc: this.getEpocTime(dateRange.begin),
        endDate: dateRange.end,
        endJsDate: this.getDate(dateRange.end),
        endEpoc: this.getEpocTime(dateRange.end),
        formatted: this.formatDate(dateRange.begin, dateFormat, monthLabels) + rangeDelimiter + this.formatDate(dateRange.end, dateFormat, monthLabels)
      };
    }

    return {
      isRange: date === null,
      singleDate: singleDateModel,
      dateRange: dateRangeModel
    };
  }

  formatDate(date: IMyDate, dateFormat: string, monthLabels: IMyMonthLabels): string {
    let formatted: string = dateFormat.replace(YYYY, String(date.year));

    if (dateFormat.indexOf(MMM) !== -1) {
      formatted = formatted.replace(MMM, monthLabels[date.month]);
    }
    else if (dateFormat.indexOf(MM) !== -1) {
      formatted = formatted.replace(MM, this.preZero(date.month));
    }
    else {
      formatted = formatted.replace(M, String(date.month));
    }

    if (dateFormat.indexOf(DD) !== -1) {
      formatted = formatted.replace(DD, this.preZero(date.day));
    }
    else {
      formatted = formatted.replace(D, String(date.day));
    }
    return formatted;
  }

  getFormattedDate(model: IMyDateModel): string {
    return !model.isRange ? model.singleDate.formatted : model.dateRange.formatted;
  }

  preZero(val: number): string {
    return val < 10 ? ZERO_STR + val : String(val);
  }

  isInitializedDate(date: IMyDate): boolean {
    return date.year !== 0 && date.month !== 0 && date.day !== 0;
  }

  isDateEarlier(firstDate: IMyDate, secondDate: IMyDate): boolean {
    return this.getTimeInMilliseconds(firstDate) < this.getTimeInMilliseconds(secondDate);
  }

  isDateSameOrEarlier(firstDate: IMyDate, secondDate: IMyDate): boolean {
    return this.getTimeInMilliseconds(firstDate) <= this.getTimeInMilliseconds(secondDate);
  }

  isDateSame(firstDate: IMyDate, secondDate: IMyDate): boolean {
    return this.getTimeInMilliseconds(firstDate) === this.getTimeInMilliseconds(secondDate);
  }

  isDateRangeBeginOrEndSame(dateRange: IMyDateRange, date: IMyDate): boolean {
    let dateMs: number = this.getTimeInMilliseconds(date);
    return this.getTimeInMilliseconds(dateRange.begin) === dateMs || this.getTimeInMilliseconds(dateRange.end) === dateMs;
  }

  isDateInRange(date: IMyDate, dateRange: IMyDateRange): boolean {
    if (!this.isInitializedDate(dateRange.begin) || !this.isInitializedDate(dateRange.end)) {
      return false;
    }
    return this.isDateSameOrEarlier(dateRange.begin, date) && this.isDateSameOrEarlier(date, dateRange.end);
  }

  resetDate(): IMyDate {
    return {year: 0, month: 0, day: 0};
  }

  getTimeInMilliseconds(date: IMyDate): number {
    return this.getDate(date).getTime();
  }

  getDate(date: IMyDate): Date {
    return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
  }

  getDayNumber(date: IMyDate): number {
    return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0).getDay();
  }

  getWeekdayIndex(wd: string) {
    return this.weekDays.indexOf(wd);
  }

  getEpocTime(date: IMyDate): number {
    return Math.round(this.getTimeInMilliseconds(date) / 1000.0);
  }

  getKeyCodeFromEvent(event: any): number {
    let key: any = event.key || event.keyCode;

    if (key === KeyName.enter || key === KeyCode.enter) {
      return KeyCode.enter;
    }
    else if (key === KeyName.esc || key === KeyCode.esc) {
      return KeyCode.esc;
    }
    else if (key === KeyName.space || key === KeyCode.space) {
      return KeyCode.space;
    }
    else if (key === KeyName.leftArrow || key === KeyCode.leftArrow) {
      return KeyCode.leftArrow;
    }
    else if (key === KeyName.upArrow || key === KeyCode.upArrow) {
      return KeyCode.upArrow;
    }
    else if (key === KeyName.rightArrow || key === KeyCode.rightArrow) {
      return KeyCode.rightArrow;
    }
    else if (key === KeyName.downArrow || key === KeyCode.downArrow) {
      return KeyCode.downArrow;
    }
    else if (key === KeyName.tab || key === KeyCode.tab) {
      return KeyCode.tab;
    }
    else if (key === KeyName.shift || key === KeyCode.shift) {
      return KeyCode.shift;
    }
    else {
      return null;
    }
  }
}
