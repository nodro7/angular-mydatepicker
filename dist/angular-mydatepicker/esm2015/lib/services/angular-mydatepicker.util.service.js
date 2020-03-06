/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { KeyCode } from "../enums/key-code.enum";
import { KeyName } from "../enums/key-name.enum";
import { D, DD, M, MM, MMM, YYYY, SU, MO, TU, WE, TH, FR, SA, ZERO_STR, EMPTY_STR, PIPE } from "../constants/constants";
export class UtilService {
    constructor() {
        this.weekDays = [SU, MO, TU, WE, TH, FR, SA];
    }
    /**
     * @param {?} dateStr
     * @param {?} options
     * @return {?}
     */
    isDateValid(dateStr, options) {
        const { dateFormat, minYear, maxYear, monthLabels } = options;
        /** @type {?} */
        const returnDate = this.resetDate();
        /** @type {?} */
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        /** @type {?} */
        const isMonthStr = dateFormat.indexOf(MMM) !== -1;
        /** @type {?} */
        const delimeters = dateFormat.match(/[^(dmy)]{1,}/g);
        if (!dateStr || dateStr === EMPTY_STR) {
            return returnDate;
        }
        /** @type {?} */
        const dateValue = this.getDateValue(dateStr, dateFormat, delimeters);
        /** @type {?} */
        const year = this.getNumberByValue(dateValue[0]);
        /** @type {?} */
        const month = isMonthStr ? this.getMonthNumberByMonthName(dateValue[1], monthLabels) : this.getNumberByValue(dateValue[1]);
        /** @type {?} */
        const day = this.getNumberByValue(dateValue[2]);
        if (month !== -1 && day !== -1 && year !== -1) {
            if (year < minYear || year > maxYear || month < 1 || month > 12) {
                return returnDate;
            }
            /** @type {?} */
            const date = { year, month, day };
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
    /**
     * @param {?} dateRangeStr
     * @param {?} options
     * @return {?}
     */
    isDateValidDateRange(dateRangeStr, options) {
        /** @type {?} */
        let dateRange = { begin: this.resetDate(), end: this.resetDate() };
        if (dateRangeStr && dateRangeStr.length) {
            /** @type {?} */
            const dates = dateRangeStr.split(options.dateRangeDatesDelimiter);
            if (dates && dates.length === 2) {
                const [beginDate, endDate] = dates;
                /** @type {?} */
                const begin = this.isDateValid(beginDate, options);
                if (this.isInitializedDate(begin)) {
                    /** @type {?} */
                    const end = this.isDateValid(endDate, options);
                    if (this.isInitializedDate(end) && this.isDateSameOrEarlier(begin, end)) {
                        dateRange = { begin, end };
                    }
                }
            }
        }
        return dateRange;
    }
    /**
     * @param {?} dateStr
     * @param {?} dateFormat
     * @param {?} delimeters
     * @return {?}
     */
    getDateValue(dateStr, dateFormat, delimeters) {
        /** @type {?} */
        let del = delimeters[0];
        if (delimeters[0] !== delimeters[1]) {
            del = delimeters[0] + delimeters[1];
        }
        /** @type {?} */
        const re = new RegExp("[" + del + "]");
        /** @type {?} */
        const ds = dateStr.split(re);
        /** @type {?} */
        const df = dateFormat.split(re);
        /** @type {?} */
        const da = [];
        for (let i = 0; i < df.length; i++) {
            if (df[i].indexOf(YYYY) !== -1) {
                da[0] = { value: ds[i], format: df[i] };
            }
            if (df[i].indexOf(M) !== -1) {
                da[1] = { value: ds[i], format: df[i] };
            }
            if (df[i].indexOf(D) !== -1) {
                da[2] = { value: ds[i], format: df[i] };
            }
        }
        return da;
    }
    /**
     * @param {?} df
     * @param {?} monthLabels
     * @return {?}
     */
    getMonthNumberByMonthName(df, monthLabels) {
        if (df.value) {
            for (let key = 1; key <= 12; key++) {
                if (df.value.toLowerCase() === monthLabels[key].toLowerCase()) {
                    return key;
                }
            }
        }
        return -1;
    }
    /**
     * @param {?} df
     * @return {?}
     */
    getNumberByValue(df) {
        if (!/^\d+$/.test(df.value)) {
            return -1;
        }
        /** @type {?} */
        let nbr = Number(df.value);
        if (df.format.length === 1 && df.value.length !== 1 && nbr < 10 || df.format.length === 1 && df.value.length !== 2 && nbr >= 10) {
            nbr = -1;
        }
        else if (df.format.length === 2 && df.value.length > 2) {
            nbr = -1;
        }
        return nbr;
    }
    /**
     * @param {?} monthString
     * @return {?}
     */
    parseDefaultMonth(monthString) {
        /** @type {?} */
        const month = { monthTxt: EMPTY_STR, monthNbr: 0, year: 0 };
        if (monthString !== EMPTY_STR) {
            /** @type {?} */
            const split = monthString.split(monthString.match(/[^0-9]/)[0]);
            month.monthNbr = split[0].length === 2 ? Number(split[0]) : Number(split[1]);
            month.year = split[0].length === 2 ? Number(split[1]) : Number(split[0]);
        }
        return month;
    }
    /**
     * @param {?} date
     * @param {?} options
     * @return {?}
     */
    isDisabledDate(date, options) {
        const { minYear, maxYear, disableUntil, disableSince, disableWeekends, disableDates, disableDateRanges, disableWeekdays, enableDates } = options;
        for (const d of enableDates) {
            if ((d.year === 0 || d.year === date.year) && (d.month === 0 || d.month === date.month) && d.day === date.day) {
                return false;
            }
        }
        if (date.year < minYear && date.month === 12 || date.year > maxYear && date.month === 1) {
            return true;
        }
        if (this.isDisabledByDisableUntil(date, disableUntil)) {
            return true;
        }
        if (this.isDisabledByDisableSince(date, disableSince)) {
            return true;
        }
        if (disableWeekends) {
            /** @type {?} */
            const dayNbr = this.getDayNumber(date);
            if (dayNbr === 0 || dayNbr === 6) {
                return true;
            }
        }
        /** @type {?} */
        const dn = this.getDayNumber(date);
        if (disableWeekdays.length > 0) {
            for (const wd of disableWeekdays) {
                if (dn === this.getWeekdayIndex(wd)) {
                    return true;
                }
            }
        }
        for (const d of disableDates) {
            if ((d.year === 0 || d.year === date.year) && (d.month === 0 || d.month === date.month) && d.day === date.day) {
                return true;
            }
        }
        if (this.isDisabledByDisableDateRange(date, date, disableDateRanges)) {
            return true;
        }
        return false;
    }
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} daysInMonth
     * @param {?} options
     * @return {?}
     */
    isDisabledMonth(year, month, daysInMonth, options) {
        const { disableUntil, disableSince, disableDateRanges } = options;
        /** @type {?} */
        const dateEnd = { year, month, day: daysInMonth };
        /** @type {?} */
        const dateBegin = { year, month, day: 1 };
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
    /**
     * @param {?} year
     * @param {?} options
     * @return {?}
     */
    isDisabledYear(year, options) {
        const { disableUntil, disableSince, disableDateRanges, minYear, maxYear } = options;
        /** @type {?} */
        const dateEnd = { year, month: 12, day: 31 };
        /** @type {?} */
        const dateBegin = { year, month: 1, day: 1 };
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
    /**
     * @param {?} date
     * @param {?} disableUntil
     * @return {?}
     */
    isDisabledByDisableUntil(date, disableUntil) {
        return this.isInitializedDate(disableUntil) && this.getTimeInMilliseconds(date) <= this.getTimeInMilliseconds(disableUntil);
    }
    /**
     * @param {?} date
     * @param {?} disableSince
     * @return {?}
     */
    isDisabledByDisableSince(date, disableSince) {
        return this.isInitializedDate(disableSince) && this.getTimeInMilliseconds(date) >= this.getTimeInMilliseconds(disableSince);
    }
    /**
     * @param {?} dateBegin
     * @param {?} dateEnd
     * @param {?} disableDateRanges
     * @return {?}
     */
    isDisabledByDisableDateRange(dateBegin, dateEnd, disableDateRanges) {
        /** @type {?} */
        const dateMsBegin = this.getTimeInMilliseconds(dateBegin);
        /** @type {?} */
        const dateMsEnd = this.getTimeInMilliseconds(dateEnd);
        for (const d of disableDateRanges) {
            if (this.isInitializedDate(d.begin) && this.isInitializedDate(d.end)
                && dateMsBegin >= this.getTimeInMilliseconds(d.begin) && dateMsEnd <= this.getTimeInMilliseconds(d.end)) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} date
     * @param {?} markedDates
     * @param {?} markWeekends
     * @return {?}
     */
    isMarkedDate(date, markedDates, markWeekends) {
        for (const md of markedDates) {
            for (const d of md.dates) {
                if ((d.year === 0 || d.year === date.year) && (d.month === 0 || d.month === date.month) && d.day === date.day) {
                    return { marked: true, color: md.color };
                }
            }
        }
        if (markWeekends && markWeekends.marked) {
            /** @type {?} */
            const dayNbr = this.getDayNumber(date);
            if (dayNbr === 0 || dayNbr === 6) {
                return { marked: true, color: markWeekends.color };
            }
        }
        return { marked: false, color: EMPTY_STR };
    }
    /**
     * @param {?} date
     * @param {?} sunHighlight
     * @param {?} satHighlight
     * @param {?} highlightDates
     * @return {?}
     */
    isHighlightedDate(date, sunHighlight, satHighlight, highlightDates) {
        /** @type {?} */
        const dayNbr = this.getDayNumber(date);
        if (sunHighlight && dayNbr === 0 || satHighlight && dayNbr === 6) {
            return true;
        }
        for (const d of highlightDates) {
            if ((d.year === 0 || d.year === date.year) && (d.month === 0 || d.month === date.month) && d.day === date.day) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getWeekNumber(date) {
        /** @type {?} */
        const d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        d.setDate(d.getDate() + (d.getDay() === 0 ? -3 : 4 - d.getDay()));
        return Math.round(((d.getTime() - new Date(d.getFullYear(), 0, 4).getTime()) / 86400000) / 7) + 1;
    }
    /**
     * @param {?} date
     * @param {?} dateRange
     * @param {?} dateFormat
     * @param {?} monthLabels
     * @param {?} rangeDelimiter
     * @param {?=} dateStr
     * @return {?}
     */
    getDateModel(date, dateRange, dateFormat, monthLabels, rangeDelimiter, dateStr = EMPTY_STR) {
        /** @type {?} */
        let singleDateModel = null;
        /** @type {?} */
        let dateRangeModel = null;
        if (date) {
            singleDateModel = {
                date,
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
    /**
     * @param {?} date
     * @param {?} dateFormat
     * @param {?} monthLabels
     * @return {?}
     */
    formatDate(date, dateFormat, monthLabels) {
        /** @type {?} */
        let formatted = dateFormat.replace(YYYY, String(date.year));
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
    /**
     * @param {?} model
     * @return {?}
     */
    getFormattedDate(model) {
        return !model.isRange ? model.singleDate.formatted : model.dateRange.formatted;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    preZero(val) {
        return val < 10 ? ZERO_STR + val : String(val);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isInitializedDate(date) {
        return date.year !== 0 && date.month !== 0 && date.day !== 0;
    }
    /**
     * @param {?} firstDate
     * @param {?} secondDate
     * @return {?}
     */
    isDateEarlier(firstDate, secondDate) {
        return this.getTimeInMilliseconds(firstDate) < this.getTimeInMilliseconds(secondDate);
    }
    /**
     * @param {?} firstDate
     * @param {?} secondDate
     * @return {?}
     */
    isDateSameOrEarlier(firstDate, secondDate) {
        return this.getTimeInMilliseconds(firstDate) <= this.getTimeInMilliseconds(secondDate);
    }
    /**
     * @param {?} firstDate
     * @param {?} secondDate
     * @return {?}
     */
    isDateSame(firstDate, secondDate) {
        return this.getTimeInMilliseconds(firstDate) === this.getTimeInMilliseconds(secondDate);
    }
    /**
     * @param {?} dateRange
     * @param {?} date
     * @return {?}
     */
    isDateRangeBeginOrEndSame(dateRange, date) {
        /** @type {?} */
        const dateMs = this.getTimeInMilliseconds(date);
        return this.getTimeInMilliseconds(dateRange.begin) === dateMs || this.getTimeInMilliseconds(dateRange.end) === dateMs;
    }
    /**
     * @param {?} date
     * @param {?} dateRange
     * @return {?}
     */
    isDateInRange(date, dateRange) {
        if (!this.isInitializedDate(dateRange.begin) || !this.isInitializedDate(dateRange.end)) {
            return false;
        }
        return this.isDateSameOrEarlier(dateRange.begin, date) && this.isDateSameOrEarlier(date, dateRange.end);
    }
    /**
     * @return {?}
     */
    resetDate() {
        return { year: 0, month: 0, day: 0 };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getTimeInMilliseconds(date) {
        return this.getDate(date).getTime();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDate(date) {
        return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDayNumber(date) {
        return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0).getDay();
    }
    /**
     * @param {?} wd
     * @return {?}
     */
    getWeekdayIndex(wd) {
        return this.weekDays.indexOf(wd);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getEpocTime(date) {
        return Math.round(this.getTimeInMilliseconds(date) / 1000.0);
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    getKeyCodeFromEvent(evt) {
        /** @type {?} */
        let key = evt.key || evt.keyCode || evt.which;
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
        else if (this.checkKeyName(key, KeyName.downArrow) || key === KeyCode.downArrow) {
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
    /**
     * @param {?} key
     * @param {?} keyName
     * @return {?}
     */
    checkKeyName(key, keyName) {
        /** @type {?} */
        const arr = keyName.split(PIPE);
        return arr.indexOf(key) !== -1;
    }
}
UtilService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    UtilService.prototype.weekDays;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1teWRhdGVwaWNrZXIudXRpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1teWRhdGVwaWNrZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYW5ndWxhci1teWRhdGVwaWNrZXIudXRpbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBWXpDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0MsT0FBTyxFQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBR3RILE1BQU0sT0FBTyxXQUFXO0lBRHhCO1FBRUUsYUFBUSxHQUFrQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBOGF6RCxDQUFDOzs7Ozs7SUE1YUMsV0FBVyxDQUFDLE9BQWUsRUFBRSxPQUFtQjtjQUN4QyxFQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBQyxHQUFHLE9BQU87O2NBRXJELFVBQVUsR0FBWSxJQUFJLENBQUMsU0FBUyxFQUFFOztjQUN0QyxXQUFXLEdBQWtCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxF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QUssT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUMzRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDeEI7YUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLEtBQUssT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUNqRixPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUM7U0FDM0I7YUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBRyxHQUFHLEtBQUssT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUM5RSxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUM7U0FDMUI7YUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNuRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUM7U0FDcEI7YUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssT0FBTyxDQUFDLEtBQUssRUFBRTtZQUN2RSxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUM7U0FDdEI7YUFDSTtZQUNILE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsR0FBVyxFQUFFLE9BQWU7O2NBQ2pDLEdBQUcsR0FBa0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDOUMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQS9hRixVQUFVOzs7O0lBRVQsK0JBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtJTXlEYXRlTW9kZWx9IGZyb20gXCIuLi9pbnRlcmZhY2VzL215LWRhdGUtbW9kZWwuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeVNpbmdsZURhdGVNb2RlbH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbXktc2luZ2xlLWRhdGUtbW9kZWwuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeURhdGVSYW5nZU1vZGVsfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9teS1kYXRlLXJhbmdlLW1vZGVsLmludGVyZmFjZVwiO1xuaW1wb3J0IHtJTXlEYXRlfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9teS1kYXRlLmludGVyZmFjZVwiO1xuaW1wb3J0IHtJTXlEYXRlUmFuZ2V9IGZyb20gXCIuLi9pbnRlcmZhY2VzL215LWRhdGUtcmFuZ2UuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeU1vbnRofSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9teS1tb250aC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15TW9udGhMYWJlbHN9IGZyb20gXCIuLi9pbnRlcmZhY2VzL215LW1vbnRoLWxhYmVscy5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15TWFya2VkRGF0ZXN9IGZyb20gXCIuLi9pbnRlcmZhY2VzL215LW1hcmtlZC1kYXRlcy5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15TWFya2VkRGF0ZX0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbXktbWFya2VkLWRhdGUuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeURhdGVGb3JtYXR9IGZyb20gXCIuLi9pbnRlcmZhY2VzL215LWRhdGUtZm9ybWF0LmludGVyZmFjZVwiO1xuaW1wb3J0IHtJTXlPcHRpb25zfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9teS1vcHRpb25zLmludGVyZmFjZVwiO1xuaW1wb3J0IHtLZXlDb2RlfSBmcm9tIFwiLi4vZW51bXMva2V5LWNvZGUuZW51bVwiO1xuaW1wb3J0IHtLZXlOYW1lfSBmcm9tIFwiLi4vZW51bXMva2V5LW5hbWUuZW51bVwiO1xuaW1wb3J0IHtELCBERCwgTSwgTU0sIE1NTSwgWVlZWSwgU1UsIE1PLCBUVSwgV0UsIFRILCBGUiwgU0EsIFpFUk9fU1RSLCBFTVBUWV9TVFIsIFBJUEV9IGZyb20gXCIuLi9jb25zdGFudHMvY29uc3RhbnRzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVdGlsU2VydmljZSB7XG4gIHdlZWtEYXlzOiBBcnJheTxzdHJpbmc+ID0gW1NVLCBNTywgVFUsIFdFLCBUSCwgRlIsIFNBXTtcblxuICBpc0RhdGVWYWxpZChkYXRlU3RyOiBzdHJpbmcsIG9wdGlvbnM6IElNeU9wdGlvbnMpOiBJTXlEYXRlIHtcbiAgICBjb25zdCB7ZGF0ZUZvcm1hdCwgbWluWWVhciwgbWF4WWVhciwgbW9udGhMYWJlbHN9ID0gb3B0aW9ucztcblxuICAgIGNvbnN0IHJldHVybkRhdGU6IElNeURhdGUgPSB0aGlzLnJlc2V0RGF0ZSgpO1xuICAgIGNvbnN0IGRheXNJbk1vbnRoOiBBcnJheTxudW1iZXI+ID0gWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuICAgIGNvbnN0IGlzTW9udGhTdHI6IGJvb2xlYW4gPSBkYXRlRm9ybWF0LmluZGV4T2YoTU1NKSAhPT0gLTE7XG4gICAgY29uc3QgZGVsaW1ldGVyczogQXJyYXk8c3RyaW5nPiA9IGRhdGVGb3JtYXQubWF0Y2goL1teKGRteSldezEsfS9nKTtcblxuICAgIGlmICghZGF0ZVN0ciB8fCBkYXRlU3RyID09PSBFTVBUWV9TVFIpIHtcbiAgICAgIHJldHVybiByZXR1cm5EYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGVWYWx1ZTogQXJyYXk8SU15RGF0ZUZvcm1hdD4gPSB0aGlzLmdldERhdGVWYWx1ZShkYXRlU3RyLCBkYXRlRm9ybWF0LCBkZWxpbWV0ZXJzKTtcbiAgICBjb25zdCB5ZWFyOiBudW1iZXIgPSB0aGlzLmdldE51bWJlckJ5VmFsdWUoZGF0ZVZhbHVlWzBdKTtcbiAgICBjb25zdCBtb250aDogbnVtYmVyID0gaXNNb250aFN0ciA/IHRoaXMuZ2V0TW9udGhOdW1iZXJCeU1vbnRoTmFtZShkYXRlVmFsdWVbMV0sIG1vbnRoTGFiZWxzKSA6IHRoaXMuZ2V0TnVtYmVyQnlWYWx1ZShkYXRlVmFsdWVbMV0pO1xuICAgIGNvbnN0IGRheTogbnVtYmVyID0gdGhpcy5nZXROdW1iZXJCeVZhbHVlKGRhdGVWYWx1ZVsyXSk7XG5cbiAgICBpZiAobW9udGggIT09IC0xICYmIGRheSAhPT0gLTEgJiYgeWVhciAhPT0gLTEpIHtcbiAgICAgIGlmICh5ZWFyIDwgbWluWWVhciB8fCB5ZWFyID4gbWF4WWVhciB8fCBtb250aCA8IDEgfHwgbW9udGggPiAxMikge1xuICAgICAgICByZXR1cm4gcmV0dXJuRGF0ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0ZTogSU15RGF0ZSA9IHt5ZWFyLCBtb250aCwgZGF5fTtcblxuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZERhdGUoZGF0ZSwgb3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIHJldHVybkRhdGU7XG4gICAgICB9XG5cbiAgICAgIGlmICh5ZWFyICUgNDAwID09PSAwIHx8ICh5ZWFyICUgMTAwICE9PSAwICYmIHllYXIgJSA0ID09PSAwKSkge1xuICAgICAgICBkYXlzSW5Nb250aFsxXSA9IDI5O1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF5IDwgMSB8fCBkYXkgPiBkYXlzSW5Nb250aFttb250aCAtIDFdKSB7XG4gICAgICAgIHJldHVybiByZXR1cm5EYXRlO1xuICAgICAgfVxuXG4gICAgICAvLyBWYWxpZCBkYXRlXG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJldHVybkRhdGU7XG4gIH1cblxuICBpc0RhdGVWYWxpZERhdGVSYW5nZShkYXRlUmFuZ2VTdHI6IHN0cmluZywgb3B0aW9uczogSU15T3B0aW9ucyk6IElNeURhdGVSYW5nZSB7XG4gICAgbGV0IGRhdGVSYW5nZTogSU15RGF0ZVJhbmdlID0ge2JlZ2luOiB0aGlzLnJlc2V0RGF0ZSgpLCBlbmQ6IHRoaXMucmVzZXREYXRlKCl9O1xuICAgIGlmIChkYXRlUmFuZ2VTdHIgJiYgZGF0ZVJhbmdlU3RyLmxlbmd0aCkge1xuICAgICAgY29uc3QgZGF0ZXM6IEFycmF5PHN0cmluZz4gPSBkYXRlUmFuZ2VTdHIuc3BsaXQob3B0aW9ucy5kYXRlUmFuZ2VEYXRlc0RlbGltaXRlcik7XG4gICAgICBpZiAoZGF0ZXMgJiYgZGF0ZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGNvbnN0IFtiZWdpbkRhdGUsIGVuZERhdGVdID0gZGF0ZXM7XG4gICAgICAgIGNvbnN0IGJlZ2luOiBJTXlEYXRlID0gdGhpcy5pc0RhdGVWYWxpZChiZWdpbkRhdGUsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGJlZ2luKSkge1xuICAgICAgICAgIGNvbnN0IGVuZDogSU15RGF0ZSA9IHRoaXMuaXNEYXRlVmFsaWQoZW5kRGF0ZSwgb3B0aW9ucyk7XG5cbiAgICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkRGF0ZShlbmQpICYmIHRoaXMuaXNEYXRlU2FtZU9yRWFybGllcihiZWdpbiwgZW5kKSkge1xuICAgICAgICAgICAgZGF0ZVJhbmdlID0ge2JlZ2luLCBlbmR9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0ZVJhbmdlO1xuICB9XG5cbiAgZ2V0RGF0ZVZhbHVlKGRhdGVTdHI6IHN0cmluZywgZGF0ZUZvcm1hdDogc3RyaW5nLCBkZWxpbWV0ZXJzOiBBcnJheTxzdHJpbmc+KTogQXJyYXk8SU15RGF0ZUZvcm1hdD4ge1xuICAgIGxldCBkZWw6IHN0cmluZyA9IGRlbGltZXRlcnNbMF07XG4gICAgaWYgKGRlbGltZXRlcnNbMF0gIT09IGRlbGltZXRlcnNbMV0pIHtcbiAgICAgIGRlbCA9IGRlbGltZXRlcnNbMF0gKyBkZWxpbWV0ZXJzWzFdO1xuICAgIH1cblxuICAgIGNvbnN0IHJlOiBhbnkgPSBuZXcgUmVnRXhwKFwiW1wiICsgZGVsICsgXCJdXCIpO1xuICAgIGNvbnN0IGRzOiBBcnJheTxzdHJpbmc+ID0gZGF0ZVN0ci5zcGxpdChyZSk7XG4gICAgY29uc3QgZGY6IEFycmF5PHN0cmluZz4gPSBkYXRlRm9ybWF0LnNwbGl0KHJlKTtcbiAgICBjb25zdCBkYTogQXJyYXk8SU15RGF0ZUZvcm1hdD4gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGYubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChkZltpXS5pbmRleE9mKFlZWVkpICE9PSAtMSkge1xuICAgICAgICBkYVswXSA9IHt2YWx1ZTogZHNbaV0sIGZvcm1hdDogZGZbaV19O1xuICAgICAgfVxuICAgICAgaWYgKGRmW2ldLmluZGV4T2YoTSkgIT09IC0xKSB7XG4gICAgICAgIGRhWzFdID0ge3ZhbHVlOiBkc1tpXSwgZm9ybWF0OiBkZltpXX07XG4gICAgICB9XG4gICAgICBpZiAoZGZbaV0uaW5kZXhPZihEKSAhPT0gLTEpIHtcbiAgICAgICAgZGFbMl0gPSB7dmFsdWU6IGRzW2ldLCBmb3JtYXQ6IGRmW2ldfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhO1xuICB9XG5cbiAgZ2V0TW9udGhOdW1iZXJCeU1vbnRoTmFtZShkZjogSU15RGF0ZUZvcm1hdCwgbW9udGhMYWJlbHM6IElNeU1vbnRoTGFiZWxzKTogbnVtYmVyIHtcbiAgICBpZiAoZGYudmFsdWUpIHtcbiAgICAgIGZvciAobGV0IGtleSA9IDE7IGtleSA8PSAxMjsga2V5KyspIHtcbiAgICAgICAgaWYgKGRmLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IG1vbnRoTGFiZWxzW2tleV0udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgZ2V0TnVtYmVyQnlWYWx1ZShkZjogSU15RGF0ZUZvcm1hdCk6IG51bWJlciB7XG4gICAgaWYgKCEvXlxcZCskLy50ZXN0KGRmLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGxldCBuYnI6IG51bWJlciA9IE51bWJlcihkZi52YWx1ZSk7XG4gICAgaWYgKGRmLmZvcm1hdC5sZW5ndGggPT09IDEgJiYgZGYudmFsdWUubGVuZ3RoICE9PSAxICYmIG5iciA8IDEwIHx8IGRmLmZvcm1hdC5sZW5ndGggPT09IDEgJiYgZGYudmFsdWUubGVuZ3RoICE9PSAyICYmIG5iciA+PSAxMCkge1xuICAgICAgbmJyID0gLTE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRmLmZvcm1hdC5sZW5ndGggPT09IDIgJiYgZGYudmFsdWUubGVuZ3RoID4gMikge1xuICAgICAgbmJyID0gLTE7XG4gICAgfVxuICAgIHJldHVybiBuYnI7XG4gIH1cblxuICBwYXJzZURlZmF1bHRNb250aChtb250aFN0cmluZzogc3RyaW5nKTogSU15TW9udGgge1xuICAgIGNvbnN0IG1vbnRoOiBJTXlNb250aCA9IHttb250aFR4dDogRU1QVFlfU1RSLCBtb250aE5icjogMCwgeWVhcjogMH07XG4gICAgaWYgKG1vbnRoU3RyaW5nICE9PSBFTVBUWV9TVFIpIHtcbiAgICAgIGNvbnN0IHNwbGl0ID0gbW9udGhTdHJpbmcuc3BsaXQobW9udGhTdHJpbmcubWF0Y2goL1teMC05XS8pWzBdKTtcbiAgICAgIG1vbnRoLm1vbnRoTmJyID0gc3BsaXRbMF0ubGVuZ3RoID09PSAyID8gTnVtYmVyKHNwbGl0WzBdKSA6IE51bWJlcihzcGxpdFsxXSk7XG4gICAgICBtb250aC55ZWFyID0gc3BsaXRbMF0ubGVuZ3RoID09PSAyID8gTnVtYmVyKHNwbGl0WzFdKSA6IE51bWJlcihzcGxpdFswXSk7XG4gICAgfVxuICAgIHJldHVybiBtb250aDtcbiAgfVxuXG4gIGlzRGlzYWJsZWREYXRlKGRhdGU6IElNeURhdGUsIG9wdGlvbnM6IElNeU9wdGlvbnMpOiBib29sZWFuIHtcbiAgICBjb25zdCB7bWluWWVhciwgbWF4WWVhciwgZGlzYWJsZVVudGlsLCBkaXNhYmxlU2luY2UsIGRpc2FibGVXZWVrZW5kcywgZGlzYWJsZURhdGVzLCBkaXNhYmxlRGF0ZVJhbmdlcywgZGlzYWJsZVdlZWtkYXlzLCBlbmFibGVEYXRlc30gPSBvcHRpb25zO1xuXG4gICAgZm9yIChjb25zdCBkIG9mIGVuYWJsZURhdGVzKSB7XG4gICAgICBpZiAoKGQueWVhciA9PT0gMCB8fCBkLnllYXIgPT09IGRhdGUueWVhcikgJiYgKGQubW9udGggPT09IDAgfHwgZC5tb250aCA9PT0gZGF0ZS5tb250aCkgJiYgZC5kYXkgPT09IGRhdGUuZGF5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGF0ZS55ZWFyIDwgbWluWWVhciAmJiBkYXRlLm1vbnRoID09PSAxMiB8fCBkYXRlLnllYXIgPiBtYXhZZWFyICYmIGRhdGUubW9udGggPT09IDEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzRGlzYWJsZWRCeURpc2FibGVVbnRpbChkYXRlLCBkaXNhYmxlVW50aWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkQnlEaXNhYmxlU2luY2UoZGF0ZSwgZGlzYWJsZVNpbmNlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVXZWVrZW5kcykge1xuICAgICAgY29uc3QgZGF5TmJyID0gdGhpcy5nZXREYXlOdW1iZXIoZGF0ZSk7XG4gICAgICBpZiAoZGF5TmJyID09PSAwIHx8IGRheU5iciA9PT0gNikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkbiA9IHRoaXMuZ2V0RGF5TnVtYmVyKGRhdGUpO1xuICAgIGlmIChkaXNhYmxlV2Vla2RheXMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChjb25zdCB3ZCBvZiBkaXNhYmxlV2Vla2RheXMpIHtcbiAgICAgICAgaWYgKGRuID09PSB0aGlzLmdldFdlZWtkYXlJbmRleCh3ZCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgZCBvZiBkaXNhYmxlRGF0ZXMpIHtcbiAgICAgIGlmICgoZC55ZWFyID09PSAwIHx8IGQueWVhciA9PT0gZGF0ZS55ZWFyKSAmJiAoZC5tb250aCA9PT0gMCB8fCBkLm1vbnRoID09PSBkYXRlLm1vbnRoKSAmJiBkLmRheSA9PT0gZGF0ZS5kYXkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZEJ5RGlzYWJsZURhdGVSYW5nZShkYXRlLCBkYXRlLCBkaXNhYmxlRGF0ZVJhbmdlcykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzRGlzYWJsZWRNb250aCh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRheXNJbk1vbnRoOiBudW1iZXIsIG9wdGlvbnM6IElNeU9wdGlvbnMpOiBib29sZWFuIHtcbiAgICBjb25zdCB7ZGlzYWJsZVVudGlsLCBkaXNhYmxlU2luY2UsIGRpc2FibGVEYXRlUmFuZ2VzfSA9IG9wdGlvbnM7XG5cbiAgICBjb25zdCBkYXRlRW5kOiBJTXlEYXRlID0ge3llYXIsIG1vbnRoLCBkYXk6IGRheXNJbk1vbnRofTtcbiAgICBjb25zdCBkYXRlQmVnaW46IElNeURhdGUgPSB7eWVhciwgbW9udGgsIGRheTogMX07XG5cbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkQnlEaXNhYmxlVW50aWwoZGF0ZUVuZCwgZGlzYWJsZVVudGlsKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZEJ5RGlzYWJsZVNpbmNlKGRhdGVCZWdpbiwgZGlzYWJsZVNpbmNlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZEJ5RGlzYWJsZURhdGVSYW5nZShkYXRlQmVnaW4sIGRhdGVFbmQsIGRpc2FibGVEYXRlUmFuZ2VzKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNEaXNhYmxlZFllYXIoeWVhcjogbnVtYmVyLCBvcHRpb25zOiBJTXlPcHRpb25zKTogYm9vbGVhbiB7XG4gICAgY29uc3Qge2Rpc2FibGVVbnRpbCwgZGlzYWJsZVNpbmNlLCBkaXNhYmxlRGF0ZVJhbmdlcywgbWluWWVhciwgbWF4WWVhcn0gPSBvcHRpb25zO1xuXG4gICAgY29uc3QgZGF0ZUVuZDogSU15RGF0ZSA9IHt5ZWFyLCBtb250aDogMTIsIGRheTogMzF9O1xuICAgIGNvbnN0IGRhdGVCZWdpbjogSU15RGF0ZSA9IHt5ZWFyLCBtb250aDogMSwgZGF5OiAxfTtcblxuICAgIGlmICh0aGlzLmlzRGlzYWJsZWRCeURpc2FibGVVbnRpbChkYXRlRW5kLCBkaXNhYmxlVW50aWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkQnlEaXNhYmxlU2luY2UoZGF0ZUJlZ2luLCBkaXNhYmxlU2luY2UpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkQnlEaXNhYmxlRGF0ZVJhbmdlKGRhdGVCZWdpbiwgZGF0ZUVuZCwgZGlzYWJsZURhdGVSYW5nZXMpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoeWVhciA8IG1pblllYXIgfHwgeWVhciA+IG1heFllYXIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzRGlzYWJsZWRCeURpc2FibGVVbnRpbChkYXRlOiBJTXlEYXRlLCBkaXNhYmxlVW50aWw6IElNeURhdGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0luaXRpYWxpemVkRGF0ZShkaXNhYmxlVW50aWwpICYmIHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGUpIDw9IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRpc2FibGVVbnRpbCk7XG4gIH1cblxuICBpc0Rpc2FibGVkQnlEaXNhYmxlU2luY2UoZGF0ZTogSU15RGF0ZSwgZGlzYWJsZVNpbmNlOiBJTXlEYXRlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNJbml0aWFsaXplZERhdGUoZGlzYWJsZVNpbmNlKSAmJiB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkYXRlKSA+PSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkaXNhYmxlU2luY2UpO1xuICB9XG5cbiAgaXNEaXNhYmxlZEJ5RGlzYWJsZURhdGVSYW5nZShkYXRlQmVnaW46IElNeURhdGUsIGRhdGVFbmQ6IElNeURhdGUsIGRpc2FibGVEYXRlUmFuZ2VzOiBBcnJheTxJTXlEYXRlUmFuZ2U+KTogYm9vbGVhbiB7XG4gICAgY29uc3QgZGF0ZU1zQmVnaW46IG51bWJlciA9IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGVCZWdpbik7XG4gICAgY29uc3QgZGF0ZU1zRW5kOiBudW1iZXIgPSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkYXRlRW5kKTtcblxuICAgIGZvciAoY29uc3QgZCBvZiBkaXNhYmxlRGF0ZVJhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZERhdGUoZC5iZWdpbikgJiYgdGhpcy5pc0luaXRpYWxpemVkRGF0ZShkLmVuZCkgXG4gICAgICAgICYmIGRhdGVNc0JlZ2luID49IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGQuYmVnaW4pICYmIGRhdGVNc0VuZCA8PSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkLmVuZCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzTWFya2VkRGF0ZShkYXRlOiBJTXlEYXRlLCBtYXJrZWREYXRlczogQXJyYXk8SU15TWFya2VkRGF0ZXM+LCBtYXJrV2Vla2VuZHM6IElNeU1hcmtlZERhdGUpOiBJTXlNYXJrZWREYXRlIHtcbiAgICBmb3IgKGNvbnN0IG1kIG9mIG1hcmtlZERhdGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGQgb2YgbWQuZGF0ZXMpIHtcbiAgICAgICAgaWYgKChkLnllYXIgPT09IDAgfHwgZC55ZWFyID09PSBkYXRlLnllYXIpICYmIChkLm1vbnRoID09PSAwIHx8IGQubW9udGggPT09IGRhdGUubW9udGgpICYmIGQuZGF5ID09PSBkYXRlLmRheSkge1xuICAgICAgICAgIHJldHVybiB7bWFya2VkOiB0cnVlLCBjb2xvcjogbWQuY29sb3J9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChtYXJrV2Vla2VuZHMgJiYgbWFya1dlZWtlbmRzLm1hcmtlZCkge1xuICAgICAgY29uc3QgZGF5TmJyID0gdGhpcy5nZXREYXlOdW1iZXIoZGF0ZSk7XG4gICAgICBpZiAoZGF5TmJyID09PSAwIHx8IGRheU5iciA9PT0gNikge1xuICAgICAgICByZXR1cm4ge21hcmtlZDogdHJ1ZSwgY29sb3I6IG1hcmtXZWVrZW5kcy5jb2xvcn07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7bWFya2VkOiBmYWxzZSwgY29sb3I6IEVNUFRZX1NUUn07XG4gIH1cblxuICBpc0hpZ2hsaWdodGVkRGF0ZShkYXRlOiBJTXlEYXRlLCBzdW5IaWdobGlnaHQ6IGJvb2xlYW4sIHNhdEhpZ2hsaWdodDogYm9vbGVhbiwgaGlnaGxpZ2h0RGF0ZXM6IEFycmF5PElNeURhdGU+KTogYm9vbGVhbiB7XG4gICAgY29uc3QgZGF5TmJyOiBudW1iZXIgPSB0aGlzLmdldERheU51bWJlcihkYXRlKTtcbiAgICBpZiAoc3VuSGlnaGxpZ2h0ICYmIGRheU5iciA9PT0gMCB8fCBzYXRIaWdobGlnaHQgJiYgZGF5TmJyID09PSA2KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBkIG9mIGhpZ2hsaWdodERhdGVzKSB7XG4gICAgICBpZiAoKGQueWVhciA9PT0gMCB8fCBkLnllYXIgPT09IGRhdGUueWVhcikgJiYgKGQubW9udGggPT09IDAgfHwgZC5tb250aCA9PT0gZGF0ZS5tb250aCkgJiYgZC5kYXkgPT09IGRhdGUuZGF5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRXZWVrTnVtYmVyKGRhdGU6IElNeURhdGUpOiBudW1iZXIge1xuICAgIGNvbnN0IGQ6IERhdGUgPSBuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGggLSAxLCBkYXRlLmRheSwgMCwgMCwgMCwgMCk7XG4gICAgZC5zZXREYXRlKGQuZ2V0RGF0ZSgpICsgKGQuZ2V0RGF5KCkgPT09IDAgPyAtMyA6IDQgLSBkLmdldERheSgpKSk7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoKChkLmdldFRpbWUoKSAtIG5ldyBEYXRlKGQuZ2V0RnVsbFllYXIoKSwgMCwgNCkuZ2V0VGltZSgpKSAvIDg2NDAwMDAwKSAvIDcpICsgMTtcbiAgfVxuXG4gIGdldERhdGVNb2RlbChkYXRlOiBJTXlEYXRlLCBkYXRlUmFuZ2U6IElNeURhdGVSYW5nZSwgZGF0ZUZvcm1hdDogc3RyaW5nLCBtb250aExhYmVsczogSU15TW9udGhMYWJlbHMsIHJhbmdlRGVsaW1pdGVyOiBzdHJpbmcsIGRhdGVTdHI6IHN0cmluZyA9IEVNUFRZX1NUUik6IElNeURhdGVNb2RlbCB7XG4gICAgbGV0IHNpbmdsZURhdGVNb2RlbDogSU15U2luZ2xlRGF0ZU1vZGVsID0gbnVsbDtcbiAgICBsZXQgZGF0ZVJhbmdlTW9kZWw6IElNeURhdGVSYW5nZU1vZGVsID0gbnVsbDtcblxuICAgIGlmIChkYXRlKSB7XG4gICAgICBzaW5nbGVEYXRlTW9kZWwgPSB7XG4gICAgICAgIGRhdGUsXG4gICAgICAgIGpzRGF0ZTogdGhpcy5nZXREYXRlKGRhdGUpLFxuICAgICAgICBmb3JtYXR0ZWQ6IGRhdGVTdHIubGVuZ3RoID8gZGF0ZVN0ciA6IHRoaXMuZm9ybWF0RGF0ZShkYXRlLCBkYXRlRm9ybWF0LCBtb250aExhYmVscyksXG4gICAgICAgIGVwb2M6IHRoaXMuZ2V0RXBvY1RpbWUoZGF0ZSlcbiAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZGF0ZVJhbmdlTW9kZWwgPSB7XG4gICAgICAgIGJlZ2luRGF0ZTogZGF0ZVJhbmdlLmJlZ2luLFxuICAgICAgICBiZWdpbkpzRGF0ZTogdGhpcy5nZXREYXRlKGRhdGVSYW5nZS5iZWdpbiksXG4gICAgICAgIGJlZ2luRXBvYzogdGhpcy5nZXRFcG9jVGltZShkYXRlUmFuZ2UuYmVnaW4pLFxuICAgICAgICBlbmREYXRlOiBkYXRlUmFuZ2UuZW5kLFxuICAgICAgICBlbmRKc0RhdGU6IHRoaXMuZ2V0RGF0ZShkYXRlUmFuZ2UuZW5kKSxcbiAgICAgICAgZW5kRXBvYzogdGhpcy5nZXRFcG9jVGltZShkYXRlUmFuZ2UuZW5kKSxcbiAgICAgICAgZm9ybWF0dGVkOiB0aGlzLmZvcm1hdERhdGUoZGF0ZVJhbmdlLmJlZ2luLCBkYXRlRm9ybWF0LCBtb250aExhYmVscykgKyByYW5nZURlbGltaXRlciArIHRoaXMuZm9ybWF0RGF0ZShkYXRlUmFuZ2UuZW5kLCBkYXRlRm9ybWF0LCBtb250aExhYmVscylcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzUmFuZ2U6IGRhdGUgPT09IG51bGwsXG4gICAgICBzaW5nbGVEYXRlOiBzaW5nbGVEYXRlTW9kZWwsXG4gICAgICBkYXRlUmFuZ2U6IGRhdGVSYW5nZU1vZGVsXG4gICAgfTtcbiAgfVxuXG4gIGZvcm1hdERhdGUoZGF0ZTogSU15RGF0ZSwgZGF0ZUZvcm1hdDogc3RyaW5nLCBtb250aExhYmVsczogSU15TW9udGhMYWJlbHMpOiBzdHJpbmcge1xuICAgIGxldCBmb3JtYXR0ZWQ6IHN0cmluZyA9IGRhdGVGb3JtYXQucmVwbGFjZShZWVlZLCBTdHJpbmcoZGF0ZS55ZWFyKSk7XG5cbiAgICBpZiAoZGF0ZUZvcm1hdC5pbmRleE9mKE1NTSkgIT09IC0xKSB7XG4gICAgICBmb3JtYXR0ZWQgPSBmb3JtYXR0ZWQucmVwbGFjZShNTU0sIG1vbnRoTGFiZWxzW2RhdGUubW9udGhdKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGF0ZUZvcm1hdC5pbmRleE9mKE1NKSAhPT0gLTEpIHtcbiAgICAgIGZvcm1hdHRlZCA9IGZvcm1hdHRlZC5yZXBsYWNlKE1NLCB0aGlzLnByZVplcm8oZGF0ZS5tb250aCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZvcm1hdHRlZCA9IGZvcm1hdHRlZC5yZXBsYWNlKE0sIFN0cmluZyhkYXRlLm1vbnRoKSk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGVGb3JtYXQuaW5kZXhPZihERCkgIT09IC0xKSB7XG4gICAgICBmb3JtYXR0ZWQgPSBmb3JtYXR0ZWQucmVwbGFjZShERCwgdGhpcy5wcmVaZXJvKGRhdGUuZGF5KSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZm9ybWF0dGVkID0gZm9ybWF0dGVkLnJlcGxhY2UoRCwgU3RyaW5nKGRhdGUuZGF5KSk7XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXR0ZWQ7XG4gIH1cblxuICBnZXRGb3JtYXR0ZWREYXRlKG1vZGVsOiBJTXlEYXRlTW9kZWwpOiBzdHJpbmcge1xuICAgIHJldHVybiAhbW9kZWwuaXNSYW5nZSA/IG1vZGVsLnNpbmdsZURhdGUuZm9ybWF0dGVkIDogbW9kZWwuZGF0ZVJhbmdlLmZvcm1hdHRlZDtcbiAgfVxuXG4gIHByZVplcm8odmFsOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB2YWwgPCAxMCA/IFpFUk9fU1RSICsgdmFsIDogU3RyaW5nKHZhbCk7XG4gIH1cblxuICBpc0luaXRpYWxpemVkRGF0ZShkYXRlOiBJTXlEYXRlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGRhdGUueWVhciAhPT0gMCAmJiBkYXRlLm1vbnRoICE9PSAwICYmIGRhdGUuZGF5ICE9PSAwO1xuICB9XG5cbiAgaXNEYXRlRWFybGllcihmaXJzdERhdGU6IElNeURhdGUsIHNlY29uZERhdGU6IElNeURhdGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZmlyc3REYXRlKSA8IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKHNlY29uZERhdGUpO1xuICB9XG5cbiAgaXNEYXRlU2FtZU9yRWFybGllcihmaXJzdERhdGU6IElNeURhdGUsIHNlY29uZERhdGU6IElNeURhdGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZmlyc3REYXRlKSA8PSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhzZWNvbmREYXRlKTtcbiAgfVxuXG4gIGlzRGF0ZVNhbWUoZmlyc3REYXRlOiBJTXlEYXRlLCBzZWNvbmREYXRlOiBJTXlEYXRlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGZpcnN0RGF0ZSkgPT09IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKHNlY29uZERhdGUpO1xuICB9XG5cbiAgaXNEYXRlUmFuZ2VCZWdpbk9yRW5kU2FtZShkYXRlUmFuZ2U6IElNeURhdGVSYW5nZSwgZGF0ZTogSU15RGF0ZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRhdGVNczogbnVtYmVyID0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZSk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGVSYW5nZS5iZWdpbikgPT09IGRhdGVNcyB8fCB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkYXRlUmFuZ2UuZW5kKSA9PT0gZGF0ZU1zO1xuICB9XG5cbiAgaXNEYXRlSW5SYW5nZShkYXRlOiBJTXlEYXRlLCBkYXRlUmFuZ2U6IElNeURhdGVSYW5nZSk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5pc0luaXRpYWxpemVkRGF0ZShkYXRlUmFuZ2UuYmVnaW4pIHx8ICF0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGRhdGVSYW5nZS5lbmQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmlzRGF0ZVNhbWVPckVhcmxpZXIoZGF0ZVJhbmdlLmJlZ2luLCBkYXRlKSAmJiB0aGlzLmlzRGF0ZVNhbWVPckVhcmxpZXIoZGF0ZSwgZGF0ZVJhbmdlLmVuZCk7XG4gIH1cblxuICByZXNldERhdGUoKTogSU15RGF0ZSB7XG4gICAgcmV0dXJuIHt5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwfTtcbiAgfVxuXG4gIGdldFRpbWVJbk1pbGxpc2Vjb25kcyhkYXRlOiBJTXlEYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXREYXRlKGRhdGUpLmdldFRpbWUoKTtcbiAgfVxuXG4gIGdldERhdGUoZGF0ZTogSU15RGF0ZSk6IERhdGUge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGggLSAxLCBkYXRlLmRheSwgMCwgMCwgMCwgMCk7XG4gIH1cblxuICBnZXREYXlOdW1iZXIoZGF0ZTogSU15RGF0ZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5LCAwLCAwLCAwLCAwKS5nZXREYXkoKTtcbiAgfVxuXG4gIGdldFdlZWtkYXlJbmRleCh3ZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMud2Vla0RheXMuaW5kZXhPZih3ZCk7XG4gIH1cblxuICBnZXRFcG9jVGltZShkYXRlOiBJTXlEYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkYXRlKSAvIDEwMDAuMCk7XG4gIH1cblxuICBnZXRLZXlDb2RlRnJvbUV2ZW50KGV2dDogYW55KTogbnVtYmVyIHtcbiAgICBsZXQga2V5OiBhbnkgPSBldnQua2V5IHx8IGV2dC5rZXlDb2RlIHx8IGV2dC53aGljaDtcblxuICAgIGlmICh0aGlzLmNoZWNrS2V5TmFtZShrZXksIEtleU5hbWUuZW50ZXIpIHx8IGtleSA9PT0gS2V5Q29kZS5lbnRlcikge1xuICAgICAgcmV0dXJuIEtleUNvZGUuZW50ZXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuY2hlY2tLZXlOYW1lKGtleSwgS2V5TmFtZS5lc2MpIHx8IGtleSA9PT0gS2V5Q29kZS5lc2MpIHtcbiAgICAgIHJldHVybiBLZXlDb2RlLmVzYztcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5jaGVja0tleU5hbWUoa2V5LCBLZXlOYW1lLnNwYWNlKSB8fCBrZXkgPT09IEtleUNvZGUuc3BhY2UpIHtcbiAgICAgIHJldHVybiBLZXlDb2RlLnNwYWNlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmNoZWNrS2V5TmFtZShrZXksIEtleU5hbWUubGVmdEFycm93KSB8fCBrZXkgPT09IEtleUNvZGUubGVmdEFycm93KSB7XG4gICAgICByZXR1cm4gS2V5Q29kZS5sZWZ0QXJyb3c7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuY2hlY2tLZXlOYW1lKGtleSwgS2V5TmFtZS51cEFycm93KSB8fCBrZXkgPT09IEtleUNvZGUudXBBcnJvdykge1xuICAgICAgcmV0dXJuIEtleUNvZGUudXBBcnJvdztcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5jaGVja0tleU5hbWUoa2V5LCBLZXlOYW1lLnJpZ2h0QXJyb3cpIHx8IGtleSA9PT0gS2V5Q29kZS5yaWdodEFycm93KSB7XG4gICAgICByZXR1cm4gS2V5Q29kZS5yaWdodEFycm93O1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmNoZWNrS2V5TmFtZShrZXksIEtleU5hbWUuZG93bkFycm93KXx8IGtleSA9PT0gS2V5Q29kZS5kb3duQXJyb3cpIHtcbiAgICAgIHJldHVybiBLZXlDb2RlLmRvd25BcnJvdztcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5jaGVja0tleU5hbWUoa2V5LCBLZXlOYW1lLnRhYikgfHwga2V5ID09PSBLZXlDb2RlLnRhYikge1xuICAgICAgcmV0dXJuIEtleUNvZGUudGFiO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmNoZWNrS2V5TmFtZShrZXksIEtleU5hbWUuc2hpZnQpIHx8IGtleSA9PT0gS2V5Q29kZS5zaGlmdCkge1xuICAgICAgcmV0dXJuIEtleUNvZGUuc2hpZnQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tLZXlOYW1lKGtleTogc3RyaW5nLCBrZXlOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBhcnI6IEFycmF5PHN0cmluZz4gPSBrZXlOYW1lLnNwbGl0KFBJUEUpO1xuICAgIHJldHVybiBhcnIuaW5kZXhPZihrZXkpICE9PSAtMTtcbiAgfVxufVxuIl19