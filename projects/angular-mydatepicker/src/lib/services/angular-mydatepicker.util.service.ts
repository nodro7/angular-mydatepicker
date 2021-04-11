import {Injectable} from "@angular/core";
import {IMyDateModel} from "../interfaces/my-date-model.interface";
import {IMySingleDateModel} from "../interfaces/my-single-date-model.interface";
import {IMyDateRangeModel} from "../interfaces/my-date-range-model.interface";
import {IMyDate} from "../interfaces/my-date.interface";
import {IMyDateRange} from "../interfaces/my-date-range.interface";
import {IMyMonth} from "../interfaces/my-month.interface";
import {IMyMonthLabels} from "../interfaces/my-month-labels.interface";
import {IMyMarkedDate} from "../interfaces/my-marked-date.interface";
import {IMyDisabledDate} from "../interfaces/my-disabled-date.interface";
import {IMyDateFormat} from "../interfaces/my-date-format.interface";
import {IMyValidateOptions} from "../interfaces/my-validate-options.interface";
import {IMyOptions} from "../interfaces/my-options.interface";
import {KeyCode} from "../enums/key-code.enum";
import {KeyName} from "../enums/key-name.enum";
import {D, DD, M, MM, MMM, YYYY, SU, MO, TU, WE, TH, FR, SA, ZERO_STR, EMPTY_STR, PIPE} from "../constants/constants";

@Injectable()
export class UtilService {
  weekDays: Array<string> = [SU, MO, TU, WE, TH, FR, SA];

  isDateValid(dateStr: string, options: IMyOptions, validateOpts: IMyValidateOptions): IMyDate {
    const {dateFormat, minYear, maxYear, monthLabels} = options;

    const returnDate: IMyDate = this.resetDate();
    const datesInMonth: Array<number> = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const isMonthStr: boolean = dateFormat.indexOf(MMM) !== -1;
    const delimeters: Array<string> = dateFormat.match(/[^(dmy)]{1,}/g);

    if (!dateStr || dateStr === EMPTY_STR) {
      return returnDate;
    }

    const dateValues: Array<IMyDateFormat> = this.getDateValue(dateStr, dateFormat, delimeters);

    let year: number = 0;
    let month: number = 0;
    let day: number = 0;

    for(const dv of dateValues) {
      const {value, format} = dv;

      if (value && /^\d+$/.test(value) && Number(value) === 0) {
        return returnDate;
      }
      
      if (format.indexOf(YYYY) !== -1) {
        year = this.getNumberByValue(dv);
      }
      else if (format.indexOf(M) !== -1) {
        month = isMonthStr ? this.getMonthNumberByMonthName(dv, monthLabels) : this.getNumberByValue(dv);
      }
      else if (format.indexOf(D) !== -1) {
        day = this.getNumberByValue(dv);
      }
    }

    const {validateDisabledDates, selectedValue} = validateOpts;

    year = year === 0 && selectedValue ? selectedValue.year : year;
    month = month === 0 && selectedValue ? selectedValue.month : month;
    day = day === 0 && selectedValue ? selectedValue.day : day;

    const today: IMyDate = this.getToday();
    if (year === 0 && (month !== 0 || day !== 0)) {
      year = today.year;
    }

    if (month === 0 && (year !== 0 || day !== 0)) {
      month = today.month;
    }

    if (day === 0 && (year !== 0 || month !== 0)) {
      day = today.day;
    }

    if (month !== -1 && day !== -1 && year !== -1) {
      if (year < minYear || year > maxYear || month < 1 || month > 12) {
        return returnDate;
      }

      const date: IMyDate = {year, month, day};

      if (validateDisabledDates && this.isDisabledDate(date, options).disabled) {
        return returnDate;
      }

      if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
        datesInMonth[1] = 29;
      }

      if (day < 1 || day > datesInMonth[month - 1]) {
        return returnDate;
      }

      // Valid date
      return date;
    }
    return returnDate;
  }

  isDateValidDateRange(dateRangeStr: string, options: IMyOptions, validateOpts: IMyValidateOptions): IMyDateRange {
    let dateRange: IMyDateRange = {begin: this.resetDate(), end: this.resetDate()};
    if (dateRangeStr && dateRangeStr.length) {
      const dates: Array<string> = dateRangeStr.split(options.dateRangeDatesDelimiter);
      if (dates && dates.length === 2) {
        const [beginDate, endDate] = dates;
        let {selectedValue} = validateOpts;

        if (selectedValue) {
          validateOpts.selectedValue = selectedValue.begin;
        }
        
        const begin: IMyDate = this.isDateValid(beginDate, options, validateOpts);

        if (this.isInitializedDate(begin)) {
          if (selectedValue) {
            validateOpts.selectedValue = selectedValue.end;
          }
          
          const end: IMyDate = this.isDateValid(endDate, options, validateOpts);

          if (this.isInitializedDate(end) && this.isDateSameOrEarlier(begin, end)) {
            dateRange = {begin, end};
          }
        }
      }
    }
    return dateRange;
  }

  getDateValue(dateStr: string, dateFormat: string, delimeters: Array<string>): Array<IMyDateFormat> {
    let del: string = EMPTY_STR;
    
    if (delimeters) {
      for(const d of delimeters) {
        if (del.indexOf(d) === -1) {
          del += d;
        }
      }
    }

    const re: any = new RegExp("[" + del + "]");
    const ds: Array<string> = dateStr.split(re);
    const df: Array<string> = dateFormat.split(re);
    const da: Array<IMyDateFormat> = [];

    for (let i = 0; i < df.length; i++) {
      if (df[i].indexOf(YYYY) !== -1) {
        da.push({value: ds[i], format: df[i]});
      }
      if (df[i].indexOf(M) !== -1) {
        da.push({value: ds[i], format: df[i]});
      }
      if (df[i].indexOf(D) !== -1) {
        da.push({value: ds[i], format: df[i]});
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
    const month: IMyMonth = {monthTxt: EMPTY_STR, monthNbr: 0, year: 0};
    if (monthString !== EMPTY_STR) {
      const split = monthString.split(monthString.match(/[^0-9]/)[0]);
      month.monthNbr = split[0].length === 2 ? Number(split[0]) : Number(split[1]);
      month.year = split[0].length === 2 ? Number(split[1]) : Number(split[0]);
    }
    return month;
  }

  isDisabledDate(date: IMyDate, options: IMyOptions): IMyDisabledDate {
    const {minYear, maxYear, disableUntil, disableSince, disableWeekends, disableDates, disableDateRanges, disableWeekdays, enableDates} = options;

    if (this.dateMatchToDates(date, enableDates)) {
      return this.getDisabledValue(false, EMPTY_STR);
    }

    if (date.year < minYear && date.month === 12 || date.year > maxYear && date.month === 1) {
      return this.getDisabledValue(true, EMPTY_STR);
    }

    const inputDates: any = disableDates as any;
    const result = inputDates.find((d) => {
      return d.dates;
    });

    if (!result) {
      if (this.dateMatchToDates(date, inputDates)) {
        return this.getDisabledValue(true, EMPTY_STR);
      }
    }
    else {
      for (const dd of inputDates) {
        if (this.dateMatchToDates(date, dd.dates)) {
          return this.getDisabledValue(true, dd.styleClass);
        }
      }
    }

    if (this.isDisabledByDisableUntil(date, disableUntil)) {
      return this.getDisabledValue(true, EMPTY_STR);
    }

    if (this.isDisabledByDisableSince(date, disableSince)) {
      return this.getDisabledValue(true, EMPTY_STR);
    }

    if (disableWeekends) {
      const dayNbr = this.getDayNumber(date);
      if (dayNbr === 0 || dayNbr === 6) {
        return this.getDisabledValue(true, EMPTY_STR);
      }
    }

    const dn = this.getDayNumber(date);
    if (disableWeekdays.length > 0) {
      for (const wd of disableWeekdays) {
        if (dn === this.getWeekdayIndex(wd)) {
          return this.getDisabledValue(true, EMPTY_STR);
        }
      }
    }

    if (this.isDisabledByDisableDateRange(date, date, disableDateRanges)) {
      return this.getDisabledValue(true, EMPTY_STR);
    }

    return this.getDisabledValue(false, EMPTY_STR);
  }

  getDisabledValue(disabled: boolean, styleClass: string): IMyDisabledDate {
    return {disabled, styleClass};
  }

  dateMatchToDates(date: IMyDate, dates: Array<IMyDate>): boolean {
    for (const d of dates) {
      if ((d.year === 0 || d.year === date.year) && (d.month === 0 || d.month === date.month) && d.day === date.day) {
        return true;
      }
    }
    return false;
  }

  isDisabledMonth(year: number, month: number, options: IMyOptions): boolean {
    const {disableUntil, disableSince, disableDateRanges, enableDates} = options;

    const dateEnd: IMyDate = {year, month, day: this.datesInMonth(month, year)};
    const dateBegin: IMyDate = {year, month, day: 1};

    if (this.isDatesEnabled(dateBegin, dateEnd, enableDates)) {
      return false;
    }

    if (this.isDisabledByDisableUntil(dateEnd, disableUntil)) {
      return true;
    }

    if (this.isDisabledByDisableSince(dateBegin, disableSince)) {
      return true;
    }

    if (this.isDisabledByDisableDateRange(dateBegin, dateEnd, disableDateRanges)) {
      return true;
    }

    return false;
  }

  isDisabledYear(year: number, options: IMyOptions): boolean {
    const {disableUntil, disableSince, disableDateRanges, enableDates, minYear, maxYear} = options;

    const dateEnd: IMyDate = {year, month: 12, day: 31};
    const dateBegin: IMyDate = {year, month: 1, day: 1};

    if (this.isDatesEnabled(dateBegin, dateEnd, enableDates)) {
      return false;
    }

    if (this.isDisabledByDisableUntil(dateEnd, disableUntil)) {
      return true;
    }

    if (this.isDisabledByDisableSince(dateBegin, disableSince)) {
      return true;
    }

    if (this.isDisabledByDisableDateRange(dateBegin, dateEnd, disableDateRanges)) {
      return true;
    }

    if (year < minYear || year > maxYear) {
      return true;
    }

    return false;
  }

  isDisabledByDisableUntil(date: IMyDate, disableUntil: IMyDate): boolean {
    return this.isInitializedDate(disableUntil) && this.getTimeInMilliseconds(date) <= this.getTimeInMilliseconds(disableUntil);
  }

  isDisabledByDisableSince(date: IMyDate, disableSince: IMyDate): boolean {
    return this.isInitializedDate(disableSince) && this.getTimeInMilliseconds(date) >= this.getTimeInMilliseconds(disableSince);
  }

  isPastDatesEnabled(date: IMyDate, enableDates: Array<IMyDate>): boolean {
    for(const d of enableDates) {
      if (this.getTimeInMilliseconds(d) <= this.getTimeInMilliseconds(date)) {
        return true;
      }
    }
    return false;
  }

  isFutureDatesEnabled(date: IMyDate, enableDates: Array<IMyDate>): boolean {
    for(const d of enableDates) {
      if (this.getTimeInMilliseconds(d) >= this.getTimeInMilliseconds(date)) {
        return true;
      }
    }
    return false;
  }

  isDatesEnabled(dateBegin: IMyDate, dateEnd: IMyDate, enableDates: Array<IMyDate>): boolean {
    for(const d of enableDates) {
      if (this.getTimeInMilliseconds(d) >= this.getTimeInMilliseconds(dateBegin) 
        && this.getTimeInMilliseconds(d) <= this.getTimeInMilliseconds(dateEnd)) {
          return true;
        }
    }
    return false;
  }

  isDisabledByDisableDateRange(dateBegin: IMyDate, dateEnd: IMyDate, disableDateRanges: Array<IMyDateRange>): boolean {
    const dateMsBegin: number = this.getTimeInMilliseconds(dateBegin);
    const dateMsEnd: number = this.getTimeInMilliseconds(dateEnd);

    for (const d of disableDateRanges) {
      if (this.isInitializedDate(d.begin) && this.isInitializedDate(d.end) 
        && dateMsBegin >= this.getTimeInMilliseconds(d.begin) && dateMsEnd <= this.getTimeInMilliseconds(d.end)) {
        return true;
      }
    }
    return false;
  }

  isMarkedDate(date: IMyDate, options: IMyOptions): IMyMarkedDate {
    const {markDates, markWeekends} = options;

    for (const md of markDates) {
      if (this.dateMatchToDates(date, md.dates)) {
        return this.getMarkedValue(true, md.color, md.styleClass);
      }
    }
    if (markWeekends && markWeekends.marked) {
      const dayNbr = this.getDayNumber(date);
      if (dayNbr === 0 || dayNbr === 6) {
        return this.getMarkedValue(true, markWeekends.color, EMPTY_STR);
      }
    }
    return this.getMarkedValue(false, EMPTY_STR, EMPTY_STR);
  }

  getMarkedValue(marked: boolean, color: string, styleClass: string): IMyMarkedDate {
    return {marked, color: color ? color : EMPTY_STR, styleClass: styleClass ? styleClass : EMPTY_STR};
  }

  isHighlightedDate(date: IMyDate, options: IMyOptions): boolean {
    const {sunHighlight, satHighlight, highlightDates} = options;

    const dayNbr: number = this.getDayNumber(date);
    if (sunHighlight && dayNbr === 0 || satHighlight && dayNbr === 6) {
      return true;
    }

    if (this.dateMatchToDates(date, highlightDates)) {
      return true;
    }

    return false;
  }

  getWeekNumber(date: IMyDate): number {
    const d: Date = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
    d.setDate(d.getDate() + (d.getDay() === 0 ? -3 : 4 - d.getDay()));
    return Math.round(((d.getTime() - new Date(d.getFullYear(), 0, 4).getTime()) / 86400000) / 7) + 1;
  }

  getDateModel(date: IMyDate, dateRange: IMyDateRange, dateFormat: string, monthLabels: IMyMonthLabels, rangeDelimiter: string, dateStr: string = EMPTY_STR): IMyDateModel {
    let singleDateModel: IMySingleDateModel = null;
    let dateRangeModel: IMyDateRangeModel = null;

    if (date) {
      singleDateModel = {
        date,
        jsDate: this.myDateToJsDate(date),
        formatted: dateStr.length ? dateStr : this.formatDate(date, dateFormat, monthLabels),
        epoc: this.getEpocTime(date)
      };
    }
    else {
      dateRangeModel = {
        beginDate: dateRange.begin,
        beginJsDate: this.myDateToJsDate(dateRange.begin),
        beginEpoc: this.getEpocTime(dateRange.begin),
        endDate: dateRange.end,
        endJsDate: this.myDateToJsDate(dateRange.end),
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
    const dateMs: number = this.getTimeInMilliseconds(date);
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
    return this.myDateToJsDate(date).getTime();
  }

  getToday(): IMyDate {
    const date: Date = new Date();
    return {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()};
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

  jsDateToMyDate(date: Date): IMyDate {
    return {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()};
  }

  myDateToJsDate(date: IMyDate): Date {
    const {year, month, day} = date;
    return new Date(year, month - 1, day, 0, 0, 0, 0);
  }

  datesInMonth(m: number, y: number): number {
    return new Date(y, m, 0).getDate();
  }

  datesInPrevMonth(m: number, y: number): number {
    const d: Date = this.getJsDate(y, m, 1);
    d.setMonth(d.getMonth() - 1);
    return this.datesInMonth(d.getMonth() + 1, d.getFullYear());
  }

  getJsDate(year: number, month: number, day: number): Date {
    return new Date(year, month - 1, day, 0, 0, 0, 0);
  }

  getSelectedValue(selectedValue: any, dateRange: boolean): any {
    if (!selectedValue) {
      return null;
    }

    if (!dateRange) {
      return selectedValue.date;
    }
    else {
      const {beginDate, endDate} = selectedValue;
      return {begin: beginDate, end: endDate};
    }
  }

  getKeyCodeFromEvent(event: any): number {
    let key: any = event.key || event.keyCode || event.which;

    if (this.checkKeyName(key, KeyName.enter) || key === KeyCode.enter) {
      return KeyCode.enter;
    }
    else if (this.checkKeyName(key, KeyName.esc) || key === KeyCode.esc) {
      return KeyCode.esc;
    }
    else if (this.checkKeyName(key, KeyName.space) || key === KeyCode.space) {
      return KeyCode.space;
    }
    else if (this.checkKeyName(key, KeyName.leftArrow) || key === KeyCode.leftArrow) {
      return KeyCode.leftArrow;
    }
    else if (this.checkKeyName(key, KeyName.upArrow) || key === KeyCode.upArrow) {
      return KeyCode.upArrow;
    }
    else if (this.checkKeyName(key, KeyName.rightArrow) || key === KeyCode.rightArrow) {
      return KeyCode.rightArrow;
    }
    else if (this.checkKeyName(key, KeyName.downArrow)|| key === KeyCode.downArrow) {
      return KeyCode.downArrow;
    }
    else if (this.checkKeyName(key, KeyName.tab) || key === KeyCode.tab) {
      return KeyCode.tab;
    }
    else if (this.checkKeyName(key, KeyName.shift) || key === KeyCode.shift) {
      return KeyCode.shift;
    }
    else {
      return null;
    }
  }

  checkKeyName(key: string, keyName: string): boolean {
    const arr: Array<string> = keyName.split(PIPE);
    return arr.indexOf(key) !== -1;
  }
}
