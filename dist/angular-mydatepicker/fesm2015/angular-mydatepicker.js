import { CommonModule } from '@angular/common';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { Injectable, Component, ElementRef, ViewEncapsulation, ViewChild, Renderer2, ChangeDetectorRef, HostBinding, EventEmitter, Input, Output, Directive, ViewContainerRef, ComponentFactoryResolver, forwardRef, HostListener, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const KeyCode = {
    enter: 13,
    esc: 27,
    space: 32,
    leftArrow: 37,
    upArrow: 38,
    rightArrow: 39,
    downArrow: 40,
    tab: 9,
    shift: 16,
};
KeyCode[KeyCode.enter] = 'enter';
KeyCode[KeyCode.esc] = 'esc';
KeyCode[KeyCode.space] = 'space';
KeyCode[KeyCode.leftArrow] = 'leftArrow';
KeyCode[KeyCode.upArrow] = 'upArrow';
KeyCode[KeyCode.rightArrow] = 'rightArrow';
KeyCode[KeyCode.downArrow] = 'downArrow';
KeyCode[KeyCode.tab] = 'tab';
KeyCode[KeyCode.shift] = 'shift';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const KeyName = {
    enter: "Enter",
    esc: "Escape|Esc",
    space: " |Spacebar",
    leftArrow: "ArrowLeft|Left",
    upArrow: "ArrowUp|Up",
    rightArrow: "ArrowRight|Right",
    downArrow: "ArrowDown|Down",
    tab: "Tab",
    shift: "Shift",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Constants
 * @type {?}
 */
const D = "d";
/** @type {?} */
const DD = "dd";
/** @type {?} */
const M = "m";
/** @type {?} */
const MM = "mm";
/** @type {?} */
const MMM = "mmm";
/** @type {?} */
const Y = "y";
/** @type {?} */
const YYYY = "yyyy";
/** @type {?} */
const DATE_ROW_COUNT = 5;
/** @type {?} */
const DATE_COL_COUNT = 6;
/** @type {?} */
const MONTH_ROW_COUNT = 3;
/** @type {?} */
const MONTH_COL_COUNT = 2;
/** @type {?} */
const YEAR_ROW_COUNT = 4;
/** @type {?} */
const YEAR_COL_COUNT = 4;
/** @type {?} */
const DOT = ".";
/** @type {?} */
const UNDER_LINE = "_";
/** @type {?} */
const PIPE = "|";
/** @type {?} */
const YEAR_SEPARATOR = " - ";
/** @type {?} */
const SU = "su";
/** @type {?} */
const MO = "mo";
/** @type {?} */
const TU = "tu";
/** @type {?} */
const WE = "we";
/** @type {?} */
const TH = "th";
/** @type {?} */
const FR = "fr";
/** @type {?} */
const SA = "sa";
/** @type {?} */
const DEFAULT_LOCALE = "en";
/** @type {?} */
const ZERO_STR = "0";
/** @type {?} */
const EMPTY_STR = "";
/** @type {?} */
const CLICK = "click";
/** @type {?} */
const KEYUP = "keyup";
/** @type {?} */
const BLUR = "blur";
/** @type {?} */
const DISABLED = "disabled";
/** @type {?} */
const BODY = "body";
/** @type {?} */
const VALUE = "value";
/** @type {?} */
const OPTIONS = "options";
/** @type {?} */
const DEFAULT_MONTH = "defaultMonth";
/** @type {?} */
const LOCALE = "locale";
/** @type {?} */
const OBJECT = "object";
/** @type {?} */
const PX = "px";
/** @type {?} */
const STYLE = "style";
/** @type {?} */
const INNER_HTML = "innerHTML";
/** @type {?} */
const OPTS = "opts";
/** @type {?} */
const YEARS_DURATION = "yearsDuration";
/** @type {?} */
const YEARS = "years";
/** @type {?} */
const VISIBLE_MONTH = "visibleMonth";
/** @type {?} */
const SELECT_MONTH = "selectMonth";
/** @type {?} */
const SELECT_YEAR = "selectYear";
/** @type {?} */
const PREV_VIEW_DISABLED = "prevViewDisabled";
/** @type {?} */
const NEXT_VIEW_DISABLED = "nextViewDisabled";
/** @type {?} */
const DATES = "dates";
/** @type {?} */
const WEEK_DAYS = "weekDays";
/** @type {?} */
const SELECTED_DATE = "selectedDate";
/** @type {?} */
const SELECTED_DATE_RANGE = "selectedDateRange";
/** @type {?} */
const MONTHS = "months";
/** @type {?} */
const ANIMATION_END = "animationend";
/** @type {?} */
const ANIMATION_TIMEOUT = 550;
/** @type {?} */
const MY_DP_ANIMATION = "myDpAnimation";
/** @type {?} */
const ANIMATION_NAMES = ["Fade", "ScaleTop", "ScaleCenter", "Rotate", "FlipDiagonal", "Own"];
/** @type {?} */
const IN = "In";
/** @type {?} */
const OUT = "Out";
/** @type {?} */
const TABINDEX = "tabindex";
/** @type {?} */
const TD_SELECTOR = "table tbody tr td:not(.myDpDaycellWeekNbr)";
/** @type {?} */
const PREVENT_CLOSE_TIMEOUT = 50;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UtilService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const MonthId = {
    prev: 1,
    curr: 2,
    next: 3,
};
MonthId[MonthId.prev] = 'prev';
MonthId[MonthId.curr] = 'curr';
MonthId[MonthId.next] = 'next';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const DefaultView = {
    Date: 1,
    Month: 2,
    Year: 3,
};
DefaultView[DefaultView.Date] = 'Date';
DefaultView[DefaultView.Month] = 'Month';
DefaultView[DefaultView.Year] = 'Year';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const CalAnimation = {
    None: 0,
    Fade: 1,
    ScaleTop: 2,
    ScaleCenter: 3,
    Rotate: 4,
    FlipDiagonal: 5,
    Own: 6,
};
CalAnimation[CalAnimation.None] = 'None';
CalAnimation[CalAnimation.Fade] = 'Fade';
CalAnimation[CalAnimation.ScaleTop] = 'ScaleTop';
CalAnimation[CalAnimation.ScaleCenter] = 'ScaleCenter';
CalAnimation[CalAnimation.Rotate] = 'Rotate';
CalAnimation[CalAnimation.FlipDiagonal] = 'FlipDiagonal';
CalAnimation[CalAnimation.Own] = 'Own';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarComponent {
    /**
     * @param {?} elem
     * @param {?} renderer
     * @param {?} cdr
     * @param {?} utilService
     */
    constructor(elem, renderer, cdr, utilService) {
        this.elem = elem;
        this.renderer = renderer;
        this.cdr = cdr;
        this.utilService = utilService;
        this.position = "static";
        this.visibleMonth = { monthTxt: EMPTY_STR, monthNbr: 0, year: 0 };
        this.selectedMonth = { monthNbr: 0, year: 0 };
        this.selectedDate = { year: 0, month: 0, day: 0 };
        this.selectedDateRange = { begin: { year: 0, month: 0, day: 0 }, end: { year: 0, month: 0, day: 0 } };
        this.weekDays = [];
        this.dates = [];
        this.months = [];
        this.years = [];
        this.yearsDuration = "";
        this.dayIdx = 0;
        this.weekDayOpts = [SU, MO, TU, WE, TH, FR, SA];
        this.selectMonth = false;
        this.selectYear = false;
        this.selectorPos = null;
        this.prevViewDisabled = false;
        this.nextViewDisabled = false;
        this.clickListener = renderer.listen(elem.nativeElement, CLICK, (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if ((this.opts.monthSelector || this.opts.yearSelector) && event.target) {
                this.resetMonthYearSelect();
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const { stylesData, calendarAnimation, inline } = this.opts;
        if (stylesData.styles.length) {
            /** @type {?} */
            const styleElTemp = this.renderer.createElement(STYLE);
            this.renderer.appendChild(styleElTemp, this.renderer.createText(stylesData.styles));
            this.renderer.appendChild(this.styleEl.nativeElement, styleElTemp);
        }
        if (calendarAnimation.in !== CalAnimation.None) {
            this.setCalendarAnimation(calendarAnimation, true);
        }
        if (!inline) {
            this.focusToSelector();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clickListener();
    }
    /**
     * @param {?} opts
     * @param {?} defaultMonth
     * @param {?} selectorPos
     * @param {?} inputValue
     * @param {?} dc
     * @param {?} cvc
     * @param {?} rds
     * @param {?} cbe
     * @return {?}
     */
    initializeComponent(opts, defaultMonth, selectorPos, inputValue, dc, cvc, rds, cbe) {
        this.opts = opts;
        this.selectorPos = selectorPos;
        this.dateChanged = dc;
        this.calendarViewChanged = cvc;
        this.rangeDateSelection = rds;
        this.closedByEsc = cbe;
        const { defaultView, dateRange, firstDayOfWeek, dayLabels } = this.opts;
        this.weekDays.length = 0;
        this.dayIdx = this.weekDayOpts.indexOf(firstDayOfWeek);
        if (this.dayIdx !== -1) {
            /** @type {?} */
            let idx = this.dayIdx;
            for (let i = 0; i < this.weekDayOpts.length; i++) {
                this.weekDays.push(dayLabels[this.weekDayOpts[idx]]);
                idx = this.weekDayOpts[idx] === SA ? 0 : idx + 1;
            }
        }
        /** @type {?} */
        const today = this.getToday();
        this.selectedMonth = { monthNbr: today.month, year: today.year };
        if (defaultMonth && defaultMonth.length) {
            this.selectedMonth = this.utilService.parseDefaultMonth(defaultMonth);
        }
        if (!dateRange) {
            // Single date mode
            /** @type {?} */
            const date = this.utilService.isDateValid(inputValue, this.opts);
            if (this.utilService.isInitializedDate(date)) {
                this.selectedDate = date;
                this.selectedMonth = { monthNbr: date.month, year: date.year };
            }
        }
        else {
            // Date range mode
            const { begin, end } = this.utilService.isDateValidDateRange(inputValue, this.opts);
            if (this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end)) {
                this.selectedDateRange = { begin, end };
                this.selectedMonth = { monthNbr: begin.month, year: begin.year };
            }
        }
        this.setCalendarVisibleMonth();
        if (defaultView === DefaultView.Month) {
            this.onMonthViewBtnClicked();
        }
        else if (defaultView === DefaultView.Year) {
            this.onYearViewBtnClicked();
        }
    }
    /**
     * @param {?} opts
     * @return {?}
     */
    refreshComponent(opts) {
        this.opts = opts;
        const { selectMonth, selectYear, years } = this;
        if (!selectMonth && !selectYear) {
            const { monthNbr, year } = this.visibleMonth;
            this.generateCalendar(monthNbr, year, false);
        }
        else if (selectMonth) {
            this.generateMonths();
        }
        else if (selectYear) {
            this.generateYears(this.getYearValueByRowAndCol(2, 2));
        }
    }
    /**
     * @param {?} calAnimation
     * @param {?} isOpen
     * @return {?}
     */
    setCalendarAnimation(calAnimation, isOpen) {
        const { nativeElement } = this.selectorEl;
        const { renderer } = this;
        /** @type {?} */
        const classIn = MY_DP_ANIMATION + ANIMATION_NAMES[calAnimation.in - 1];
        if (isOpen) {
            renderer.addClass(nativeElement, classIn + IN);
        }
        else {
            /** @type {?} */
            const classOut = MY_DP_ANIMATION + ANIMATION_NAMES[calAnimation.out - 1];
            renderer.removeClass(nativeElement, classIn + IN);
            renderer.addClass(nativeElement, classOut + OUT);
        }
    }
    /**
     * @return {?}
     */
    resetDateValue() {
        if (!this.opts.dateRange) {
            this.selectedDate = this.utilService.resetDate();
        }
        else {
            this.selectedDateRange.begin = this.utilService.resetDate();
            this.selectedDateRange.end = this.utilService.resetDate();
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    setDateValue(date) {
        this.selectedDate = date;
    }
    /**
     * @param {?} begin
     * @param {?} end
     * @return {?}
     */
    setDateRangeValue(begin, end) {
        this.selectedDateRange.begin = begin;
        this.selectedDateRange.end = end;
    }
    /**
     * @return {?}
     */
    resetMonthYearSelect() {
        this.selectMonth = false;
        this.selectYear = false;
    }
    /**
     * @return {?}
     */
    onMonthViewBtnClicked() {
        this.selectMonth = !this.selectMonth;
        this.selectYear = false;
        this.cdr.detectChanges();
        if (this.selectMonth) {
            this.generateMonths();
        }
        else {
            const { year, monthNbr } = this.selectedMonth;
            this.visibleMonth = { monthTxt: this.opts.monthLabels[monthNbr], monthNbr, year };
            this.generateCalendar(monthNbr, year, true);
        }
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    onMonthCellClicked(cell) {
        const { year, monthNbr } = this.visibleMonth;
        /** @type {?} */
        const mc = cell.nbr !== monthNbr;
        this.visibleMonth = { monthTxt: this.opts.monthLabels[cell.nbr], monthNbr: cell.nbr, year: year };
        this.selectedMonth.year = this.visibleMonth.year;
        this.generateCalendar(cell.nbr, year, mc);
        this.selectMonth = false;
        this.focusToSelector();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMonthCellKeyDown(event) {
        // Move focus by arrow keys
        const { sourceRow, sourceCol } = this.getSourceRowAndColumnFromEvent(event);
        const { moveFocus, targetRow, targetCol, direction } = this.getTargetFocusRowAndColumn(event, sourceRow, sourceCol, MONTH_ROW_COUNT, MONTH_COL_COUNT);
        if (moveFocus) {
            this.focusCellElement(M, targetRow, targetCol, direction, MONTH_COL_COUNT);
        }
    }
    /**
     * @return {?}
     */
    onYearViewBtnClicked() {
        this.selectYear = !this.selectYear;
        this.selectMonth = false;
        this.cdr.detectChanges();
        if (this.selectYear) {
            this.generateYears(this.visibleMonth.year);
        }
        else {
            const { year, monthNbr } = this.selectedMonth;
            this.visibleMonth = { monthTxt: this.opts.monthLabels[monthNbr], monthNbr, year };
            this.generateCalendar(monthNbr, year, true);
        }
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    onYearCellClicked(cell) {
        const { year, monthNbr, monthTxt } = this.visibleMonth;
        /** @type {?} */
        const yc = cell.year !== year;
        this.visibleMonth = { monthTxt: monthTxt, monthNbr: monthNbr, year: cell.year };
        this.selectedMonth.year = this.visibleMonth.year;
        this.generateCalendar(monthNbr, cell.year, yc);
        this.selectYear = false;
        this.focusToSelector();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onYearCellKeyDown(event) {
        // Move focus by arrow keys
        const { sourceRow, sourceCol } = this.getSourceRowAndColumnFromEvent(event);
        const { moveFocus, targetRow, targetCol, direction } = this.getTargetFocusRowAndColumn(event, sourceRow, sourceCol, YEAR_ROW_COUNT, YEAR_COL_COUNT);
        if (moveFocus) {
            this.focusCellElement(Y, targetRow, targetCol, direction, YEAR_COL_COUNT);
        }
    }
    /**
     * @return {?}
     */
    generateMonths() {
        /** @type {?} */
        const today = this.getToday();
        this.months.length = 0;
        const { year, monthNbr } = this.visibleMonth;
        const { rtl, monthLabels } = this.opts;
        /** @type {?} */
        let row = 0;
        for (let i = 1; i <= 12; i += 3) {
            /** @type {?} */
            const rowData = [];
            /** @type {?} */
            let col = rtl ? 2 : 0;
            for (let j = i; j < i + 3; j++) {
                /** @type {?} */
                const disabled = this.utilService.isDisabledMonth(year, j, this.daysInMonth(j, year), this.opts);
                rowData.push({
                    nbr: j,
                    name: monthLabels[j],
                    currMonth: j === today.month && year === today.year,
                    selected: j === monthNbr && year === this.selectedMonth.year,
                    disabled,
                    row,
                    col: rtl ? col-- : col++
                });
            }
            row++;
            this.months.push(rowData);
        }
        this.setMonthViewHeaderBtnDisabledState(year);
    }
    /**
     * @param {?} inputYear
     * @return {?}
     */
    generateYears(inputYear) {
        const { minYear, maxYear, rtl } = this.opts;
        /** @type {?} */
        let y = inputYear - 12;
        if (inputYear < minYear) {
            y = minYear;
        }
        if (inputYear + 25 > maxYear) {
            y = maxYear - 24;
        }
        const { year } = this.visibleMonth;
        this.years.length = 0;
        /** @type {?} */
        const today = this.getToday();
        /** @type {?} */
        let row = 0;
        for (let i = y; i < y + 25; i += 5) {
            /** @type {?} */
            const rowData = [];
            /** @type {?} */
            let col = rtl ? 4 : 0;
            for (let j = i; j < i + 5; j++) {
                /** @type {?} */
                const disabled = this.utilService.isDisabledYear(j, this.opts);
                rowData.push({
                    year: j,
                    currYear: j === today.year,
                    selected: j === year,
                    disabled,
                    row,
                    col: rtl ? col-- : col++
                });
            }
            row++;
            this.years.push(rowData);
        }
        /** @type {?} */
        const beginYear = this.getYearValueByRowAndCol(0, 0);
        /** @type {?} */
        const endYear = beginYear + 24;
        this.yearsDuration = (!rtl ? beginYear : endYear) + YEAR_SEPARATOR + (!rtl ? endYear : beginYear);
        this.setYearViewHeaderBtnDisabledState(beginYear, endYear);
    }
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    getYearValueByRowAndCol(row, col) {
        return this.years[row][col].year;
    }
    /**
     * @return {?}
     */
    setCalendarVisibleMonth() {
        // Sets visible month of calendar
        const { year, monthNbr } = this.selectedMonth;
        this.visibleMonth = { monthTxt: this.opts.monthLabels[monthNbr], monthNbr: monthNbr, year: year };
        // Create current month
        this.generateCalendar(monthNbr, year, true);
    }
    /**
     * @return {?}
     */
    onPrevNavigateBtnClicked() {
        if (!this.selectMonth && !this.selectYear) {
            this.setDateViewMonth(false);
        }
        else if (this.selectMonth) {
            this.visibleMonth.year--;
            this.generateMonths();
        }
        else if (this.selectYear) {
            this.generateYears(this.getYearValueByRowAndCol(2, 2) - 25);
        }
    }
    /**
     * @return {?}
     */
    onNextNavigateBtnClicked() {
        if (!this.selectMonth && !this.selectYear) {
            this.setDateViewMonth(true);
        }
        else if (this.selectMonth) {
            this.visibleMonth.year++;
            this.generateMonths();
        }
        else if (this.selectYear) {
            this.generateYears(this.getYearValueByRowAndCol(2, 2) + 25);
        }
    }
    /**
     * @param {?} isNext
     * @return {?}
     */
    setDateViewMonth(isNext) {
        /** @type {?} */
        let change = isNext ? 1 : -1;
        const { year, monthNbr } = this.visibleMonth;
        /** @type {?} */
        const d = this.getDate(year, monthNbr, 1);
        d.setMonth(d.getMonth() + change);
        /** @type {?} */
        const y = d.getFullYear();
        /** @type {?} */
        const m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.opts.monthLabels[m], monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onCloseSelector(event) {
        /** @type {?} */
        const keyCode = this.utilService.getKeyCodeFromEvent(event);
        if (keyCode === KeyCode.esc) {
            this.closedByEsc();
        }
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    onDayCellClicked(cell) {
        // Cell clicked on the calendar
        this.selectDate(cell.dateObj);
        this.resetMonthYearSelect();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDayCellKeyDown(event) {
        // Move focus by arrow keys
        const { sourceRow, sourceCol } = this.getSourceRowAndColumnFromEvent(event);
        const { moveFocus, targetRow, targetCol, direction } = this.getTargetFocusRowAndColumn(event, sourceRow, sourceCol, DATE_ROW_COUNT, DATE_COL_COUNT);
        if (moveFocus) {
            this.focusCellElement(D, targetRow, targetCol, direction, DATE_COL_COUNT);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getSourceRowAndColumnFromEvent(event) {
        /** @type {?} */
        let sourceRow = 0;
        /** @type {?} */
        let sourceCol = 0;
        if (event.target && event.target.id) {
            // value of id is for example: m_0_1 (first number = row, second number = column)
            /** @type {?} */
            const arr = event.target.id.split(UNDER_LINE);
            sourceRow = Number(arr[1]);
            sourceCol = Number(arr[2]);
        }
        return { sourceRow, sourceCol };
    }
    /**
     * @param {?} event
     * @param {?} row
     * @param {?} col
     * @param {?} rowCount
     * @param {?} colCount
     * @return {?}
     */
    getTargetFocusRowAndColumn(event, row, col, rowCount, colCount) {
        /** @type {?} */
        let moveFocus = true;
        /** @type {?} */
        let targetRow = row;
        /** @type {?} */
        let targetCol = col;
        /** @type {?} */
        let direction = false;
        /** @type {?} */
        const keyCode = this.utilService.getKeyCodeFromEvent(event);
        if (keyCode === KeyCode.upArrow && row > 0) {
            targetRow--;
        }
        else if (keyCode === KeyCode.downArrow && row < rowCount) {
            targetRow++;
            direction = true;
        }
        else if (keyCode === KeyCode.leftArrow && col > 0) {
            targetCol--;
        }
        else if (keyCode === KeyCode.rightArrow && col < colCount) {
            targetCol++;
            direction = true;
        }
        else {
            moveFocus = false;
        }
        return { moveFocus, targetRow, targetCol, direction };
    }
    /**
     * @param {?} type
     * @param {?} row
     * @param {?} col
     * @param {?} direction
     * @param {?} colCount
     * @return {?}
     */
    focusCellElement(type, row, col, direction, colCount) {
        /** @type {?} */
        const className = type + UNDER_LINE + row + UNDER_LINE + col;
        /** @type {?} */
        let elem = this.selectorEl.nativeElement.querySelector(DOT + className);
        if (elem.getAttribute(TABINDEX) !== ZERO_STR) {
            // if the selected element is disabled move a focus to next/previous enabled element
            /** @type {?} */
            let tdList = this.getCalendarElements();
            /** @type {?} */
            const idx = row * (colCount + 1) + col;
            /** @type {?} */
            let enabledElem = null;
            if (direction) {
                // find next enabled
                enabledElem = tdList.slice(idx).find((/**
                 * @param {?} td
                 * @return {?}
                 */
                (td) => td.getAttribute(TABINDEX) === ZERO_STR));
            }
            else {
                // find previous enabled
                enabledElem = tdList.slice(0, idx).reverse().find((/**
                 * @param {?} td
                 * @return {?}
                 */
                (td) => td.getAttribute(TABINDEX) === ZERO_STR));
            }
            elem = enabledElem ? enabledElem : this.selectorEl.nativeElement;
        }
        else {
            elem.focus();
        }
    }
    /**
     * @return {?}
     */
    focusToSelector() {
        this.selectorEl.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    getCalendarElements() {
        return Array.from(this.selectorEl.nativeElement.querySelectorAll(TD_SELECTOR));
    }
    /**
     * @param {?} date
     * @return {?}
     */
    selectDate(date) {
        const { dateRange, dateFormat, monthLabels, dateRangeDatesDelimiter, closeSelectorOnDateSelect } = this.opts;
        if (dateRange) {
            // Date range
            /** @type {?} */
            const isBeginDateInitialized = this.utilService.isInitializedDate(this.selectedDateRange.begin);
            /** @type {?} */
            const isEndDateInitialized = this.utilService.isInitializedDate(this.selectedDateRange.end);
            if (isBeginDateInitialized && isEndDateInitialized) {
                // both already selected - set begin date and reset end date
                this.selectedDateRange.begin = date;
                this.selectedDateRange.end = this.utilService.resetDate();
                this.rangeDateSelection({
                    isBegin: true,
                    date,
                    jsDate: this.utilService.getDate(date),
                    dateFormat: dateFormat,
                    formatted: this.utilService.formatDate(date, dateFormat, monthLabels),
                    epoc: this.utilService.getEpocTime(date)
                });
            }
            else if (!isBeginDateInitialized) {
                // begin date
                this.selectedDateRange.begin = date;
                this.rangeDateSelection({
                    isBegin: true,
                    date,
                    jsDate: this.utilService.getDate(date),
                    dateFormat: dateFormat,
                    formatted: this.utilService.formatDate(date, dateFormat, monthLabels),
                    epoc: this.utilService.getEpocTime(date)
                });
            }
            else {
                // second selection
                /** @type {?} */
                const firstDateEarlier = this.utilService.isDateEarlier(date, this.selectedDateRange.begin);
                if (firstDateEarlier) {
                    this.selectedDateRange.begin = date;
                    this.rangeDateSelection({
                        isBegin: true,
                        date,
                        jsDate: this.utilService.getDate(date),
                        dateFormat: dateFormat,
                        formatted: this.utilService.formatDate(date, dateFormat, monthLabels),
                        epoc: this.utilService.getEpocTime(date)
                    });
                }
                else {
                    this.selectedDateRange.end = date;
                    this.rangeDateSelection({
                        isBegin: false,
                        date,
                        jsDate: this.utilService.getDate(date),
                        dateFormat: dateFormat,
                        formatted: this.utilService.formatDate(date, dateFormat, monthLabels),
                        epoc: this.utilService.getEpocTime(date)
                    });
                    this.dateChanged(this.utilService.getDateModel(null, this.selectedDateRange, dateFormat, monthLabels, dateRangeDatesDelimiter), closeSelectorOnDateSelect);
                }
            }
        }
        else {
            // Single date
            this.selectedDate = date;
            this.dateChanged(this.utilService.getDateModel(this.selectedDate, null, dateFormat, monthLabels, dateRangeDatesDelimiter), closeSelectorOnDateSelect);
        }
    }
    /**
     * @param {?} y
     * @param {?} m
     * @return {?}
     */
    monthStartIdx(y, m) {
        // Month start index
        /** @type {?} */
        const d = new Date();
        d.setDate(1);
        d.setMonth(m - 1);
        d.setFullYear(y);
        /** @type {?} */
        const idx = d.getDay() + this.sundayIdx();
        return idx >= 7 ? idx - 7 : idx;
    }
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    daysInMonth(m, y) {
        // Return number of days of current month
        return new Date(y, m, 0).getDate();
    }
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    daysInPrevMonth(m, y) {
        // Return number of days of the previous month
        /** @type {?} */
        const d = this.getDate(y, m, 1);
        d.setMonth(d.getMonth() - 1);
        return this.daysInMonth(d.getMonth() + 1, d.getFullYear());
    }
    /**
     * @param {?} d
     * @param {?} m
     * @param {?} y
     * @param {?} today
     * @return {?}
     */
    isCurrDay(d, m, y, today) {
        // Check is a given date the today
        return d === today.day && m === today.month && y === today.year;
    }
    /**
     * @return {?}
     */
    getToday() {
        /** @type {?} */
        const date = new Date();
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDayNumber(date) {
        // Get day number: su=0, mo=1, tu=2, we=3 ...
        /** @type {?} */
        const d = this.getDate(date.year, date.month, date.day);
        return d.getDay();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getWeekday(date) {
        // Get weekday: su, mo, tu, we ...
        return this.weekDayOpts[this.getDayNumber(date)];
    }
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} day
     * @return {?}
     */
    getDate(year, month, day) {
        // Creates a date object from given year, month and day
        return new Date(year, month - 1, day, 0, 0, 0, 0);
    }
    /**
     * @return {?}
     */
    sundayIdx() {
        // Index of Sunday day
        return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
    }
    /**
     * @param {?} m
     * @param {?} y
     * @param {?} notifyChange
     * @return {?}
     */
    generateCalendar(m, y, notifyChange) {
        this.dates.length = 0;
        /** @type {?} */
        const today = this.getToday();
        /** @type {?} */
        const monthStart = this.monthStartIdx(y, m);
        /** @type {?} */
        const dInThisM = this.daysInMonth(m, y);
        /** @type {?} */
        const dInPrevM = this.daysInPrevMonth(m, y);
        /** @type {?} */
        let dayNbr = 1;
        /** @type {?} */
        let month = m;
        /** @type {?} */
        let cmo = MonthId.prev;
        const { rtl, showWeekNumbers, firstDayOfWeek, markDates, markWeekends, sunHighlight, satHighlight, highlightDates } = this.opts;
        for (let i = 1; i < 7; i++) {
            /** @type {?} */
            let col = rtl ? 6 : 0;
            /** @type {?} */
            const week = [];
            if (i === 1) {
                // First week
                /** @type {?} */
                const pm = dInPrevM - monthStart + 1;
                // Previous month
                for (let j = pm; j <= dInPrevM; j++) {
                    /** @type {?} */
                    const date = { year: m === 1 ? y - 1 : y, month: m === 1 ? 12 : m - 1, day: j };
                    week.push({ dateObj: date,
                        cmo,
                        currDay: this.isCurrDay(j, month - 1, y, today),
                        disabled: this.utilService.isDisabledDate(date, this.opts),
                        markedDate: this.utilService.isMarkedDate(date, markDates, markWeekends),
                        highlight: this.utilService.isHighlightedDate(date, sunHighlight, satHighlight, highlightDates),
                        row: i - 1,
                        col: rtl ? col-- : col++
                    });
                }
                cmo = MonthId.curr;
                // Current month
                /** @type {?} */
                const daysLeft = 7 - week.length;
                for (let j = 0; j < daysLeft; j++) {
                    /** @type {?} */
                    const date = { year: y, month: m, day: dayNbr };
                    week.push({ dateObj: date,
                        cmo,
                        currDay: this.isCurrDay(dayNbr, m, y, today),
                        disabled: this.utilService.isDisabledDate(date, this.opts),
                        markedDate: this.utilService.isMarkedDate(date, markDates, markWeekends),
                        highlight: this.utilService.isHighlightedDate(date, sunHighlight, satHighlight, highlightDates),
                        row: i - 1,
                        col: rtl ? col-- : col++
                    });
                    dayNbr++;
                }
            }
            else {
                // Rest of the weeks
                for (let j = 1; j < 8; j++) {
                    if (dayNbr > dInThisM) {
                        // Next month
                        dayNbr = 1;
                        cmo = MonthId.next;
                        month = m + 1;
                    }
                    /** @type {?} */
                    const date = { year: cmo === MonthId.next && m === 12 ? y + 1 : y, month: cmo === MonthId.curr ? m : cmo === MonthId.next && m < 12 ? m + 1 : 1, day: dayNbr };
                    week.push({ dateObj: date,
                        cmo,
                        currDay: this.isCurrDay(dayNbr, month, y, today),
                        disabled: this.utilService.isDisabledDate(date, this.opts),
                        markedDate: this.utilService.isMarkedDate(date, markDates, markWeekends),
                        highlight: this.utilService.isHighlightedDate(date, sunHighlight, satHighlight, highlightDates),
                        row: i - 1,
                        col: rtl ? col-- : col++
                    });
                    dayNbr++;
                }
            }
            /** @type {?} */
            const weekNbr = showWeekNumbers && firstDayOfWeek === MO ? this.utilService.getWeekNumber(week[0].dateObj) : 0;
            this.dates.push({ week, weekNbr });
        }
        this.setDateViewHeaderBtnDisabledState(m, y);
        if (notifyChange) {
            // Notify parent
            this.calendarViewChanged({ year: y, month: m, first: { number: 1, weekday: this.getWeekday({ year: y, month: m, day: 1 }) }, last: { number: dInThisM, weekday: this.getWeekday({ year: y, month: m, day: dInThisM }) } });
        }
    }
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    setDateViewHeaderBtnDisabledState(m, y) {
        /** @type {?} */
        let dpm = false;
        /** @type {?} */
        let dnm = false;
        const { disableHeaderButtons, disableUntil, disableSince, minYear, maxYear } = this.opts;
        if (disableHeaderButtons) {
            dpm = this.utilService.isDisabledByDisableUntil({ year: m === 1 ? y - 1 : y, month: m === 1 ? 12 : m - 1, day: this.daysInMonth(m === 1 ? 12 : m - 1, m === 1 ? y - 1 : y) }, disableUntil);
            dnm = this.utilService.isDisabledByDisableSince({ year: m === 12 ? y + 1 : y, month: m === 12 ? 1 : m + 1, day: 1 }, disableSince);
        }
        this.prevViewDisabled = m === 1 && y === minYear || dpm;
        this.nextViewDisabled = m === 12 && y === maxYear || dnm;
    }
    /**
     * @param {?} y
     * @return {?}
     */
    setMonthViewHeaderBtnDisabledState(y) {
        /** @type {?} */
        let dpm = false;
        /** @type {?} */
        let dnm = false;
        const { disableHeaderButtons, disableUntil, disableSince, minYear, maxYear } = this.opts;
        if (disableHeaderButtons) {
            dpm = this.utilService.isDisabledByDisableUntil({ year: y - 1, month: 12, day: 31 }, disableUntil);
            dnm = this.utilService.isDisabledByDisableSince({ year: y + 1, month: 1, day: 1 }, disableSince);
        }
        this.prevViewDisabled = y === minYear || dpm;
        this.nextViewDisabled = y === maxYear || dnm;
    }
    /**
     * @param {?} yp
     * @param {?} yn
     * @return {?}
     */
    setYearViewHeaderBtnDisabledState(yp, yn) {
        /** @type {?} */
        let dpy = false;
        /** @type {?} */
        let dny = false;
        const { disableHeaderButtons, disableUntil, disableSince, minYear, maxYear } = this.opts;
        if (disableHeaderButtons) {
            dpy = this.utilService.isDisabledByDisableUntil({ year: yp - 1, month: 12, day: 31 }, disableUntil);
            dny = this.utilService.isDisabledByDisableSince({ year: yn + 1, month: 1, day: 1 }, disableSince);
        }
        this.prevViewDisabled = yp <= minYear || dpy;
        this.nextViewDisabled = yn >= maxYear || dny;
    }
}
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-angular-mydatepicker-calendar",
                template: "<span #styleEl></span>\n<div class=\"ng-mydp {{opts.stylesData?.selector || ''}}\">\n  <div class=\"myDpSelector\" #selectorEl \n    [libAngularMyDatePickerCalendar]=\"{inline: opts.inline, selectorWidth: opts.selectorWidth, selectorHeight: opts.selectorHeight, selectorPos: selectorPos}\" \n    [ngClass]=\"{'myDpSelectorArrow': opts.showSelectorArrow, 'myDpSelectorArrowLeft': opts.showSelectorArrow && !opts.alignSelectorRight, \n      'myDpSelectorArrowRight': opts.showSelectorArrow&&opts.alignSelectorRight, 'myDpSelectorAbsolute': !opts.inline, 'myDpSelectorPosInitial': opts.inline}\" \n    (keyup)=\"onCloseSelector($event)\" tabindex=\"0\">\n\n    <lib-selection-bar [opts]=\"opts\" [yearsDuration]=\"yearsDuration\" [visibleMonth]=\"visibleMonth\" [selectMonth]=\"selectMonth\" [selectYear]=\"selectYear\"\n                    [prevViewDisabled]=\"prevViewDisabled\" [nextViewDisabled]=\"nextViewDisabled\"\n                    (prevNavigateBtnClicked)=\"onPrevNavigateBtnClicked()\" (nextNavigateBtnClicked)=\"onNextNavigateBtnClicked()\"\n                    (monthViewBtnClicked)=\"onMonthViewBtnClicked()\" (yearViewBtnClicked)=\"onYearViewBtnClicked()\"></lib-selection-bar>\n\n    <lib-day-view *ngIf=\"!selectMonth && !selectYear\" [opts]=\"opts\" [dates]=\"dates\" [weekDays]=\"weekDays\"\n                    [selectedDate]=\"selectedDate\" [selectedDateRange]=\"selectedDateRange\"\n                    (dayCellClicked)=\"onDayCellClicked($event)\"\n                    (dayCellKeyDown)=\"onDayCellKeyDown($event)\"></lib-day-view>\n\n    <lib-month-view *ngIf=\"selectMonth\" [opts]=\"opts\" [months]=\"months\"\n                    (monthCellClicked)=\"onMonthCellClicked($event)\"\n                    (monthCellKeyDown)=\"onMonthCellKeyDown($event)\"></lib-month-view>\n\n    <lib-year-view *ngIf=\"selectYear\" [opts]=\"opts\" [years]=\"years\"\n                    (yearCellClicked)=\"onYearCellClicked($event)\"\n                    (yearCellKeyDown)=\"onYearCellKeyDown($event)\"></lib-year-view>\n\n  </div>\n</div>\n",
                providers: [UtilService],
                encapsulation: ViewEncapsulation.None,
                styles: [".ng-mydp{position:static}.ng-myrtl{direction:rtl}.ng-mydp *{box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;padding:0;margin:0}.ng-mydp table{display:table;border-spacing:0}.ng-mydp table td,.ng-mydp table th{padding:0;margin:0;vertical-align:middle;border:none}.myDpSelector{padding:0;border:1px solid #ccc;border-radius:4px;z-index:100000}.myDpAnimationFadeIn{-webkit-animation:.5s linear myDpAnimationFadeIn;animation:.5s linear myDpAnimationFadeIn}@-webkit-keyframes myDpAnimationFadeIn{0%{transform:translateY(-50px);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes myDpAnimationFadeIn{0%{transform:translateY(-50px);opacity:0}100%{transform:translateY(0);opacity:1}}.myDpAnimationFadeOut{-webkit-animation:.3s linear forwards myDpAnimationFadeOut;animation:.3s linear forwards myDpAnimationFadeOut}@-webkit-keyframes myDpAnimationFadeOut{0%{transform:translateY(0);opacity:1}100%{transform:translateY(-50px);opacity:0}}@keyframes myDpAnimationFadeOut{0%{transform:translateY(0);opacity:1}100%{transform:translateY(-50px);opacity:0}}.myDpAnimationScaleTopIn{-webkit-animation:.3s linear myDpAnimationScaleTopIn;animation:.3s linear myDpAnimationScaleTopIn}@-webkit-keyframes myDpAnimationScaleTopIn{0%{transform:scaleY(0);transform-origin:100% 0}100%{transform:scaleY(1);transform-origin:100% 0}}@keyframes myDpAnimationScaleTopIn{0%{transform:scaleY(0);transform-origin:100% 0}100%{transform:scaleY(1);transform-origin:100% 0}}.myDpAnimationScaleTopOut{-webkit-animation:.3s linear forwards myDpAnimationScaleTopOut;animation:.3s linear forwards myDpAnimationScaleTopOut}@-webkit-keyframes myDpAnimationScaleTopOut{0%{transform:scaleY(1);transform-origin:100% 0;opacity:1}100%{transform:scaleY(0);transform-origin:100% 0;opacity:0}}@keyframes myDpAnimationScaleTopOut{0%{transform:scaleY(1);transform-origin:100% 0;opacity:1}100%{transform:scaleY(0);transform-origin:100% 0;opacity:0}}.myDpAnimationScaleCenterIn{-webkit-animation:.3s linear myDpAnimationScaleCenterIn;animation:.3s linear myDpAnimationScaleCenterIn}@-webkit-keyframes myDpAnimationScaleCenterIn{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes myDpAnimationScaleCenterIn{0%{transform:scale(0)}100%{transform:scale(1)}}.myDpAnimationScaleCenterOut{-webkit-animation:.3s linear forwards myDpAnimationScaleCenterOut;animation:.3s linear forwards myDpAnimationScaleCenterOut}@-webkit-keyframes myDpAnimationScaleCenterOut{0%{transform:scale(1);opacity:1}100%{transform:scale(0);opacity:0}}@keyframes myDpAnimationScaleCenterOut{0%{transform:scale(1);opacity:1}100%{transform:scale(0);opacity:0}}.myDpAnimationRotateIn{-webkit-animation:.3s linear myDpAnimationRotateIn;animation:.3s linear myDpAnimationRotateIn}@-webkit-keyframes myDpAnimationRotateIn{0%{transform:scale(.3) rotate(-45deg);opacity:0}100%{transform:scale(1) rotate(0);opacity:1}}@keyframes myDpAnimationRotateIn{0%{transform:scale(.3) rotate(-45deg);opacity:0}100%{transform:scale(1) rotate(0);opacity:1}}.myDpAnimationRotateOut{-webkit-animation:.3s linear forwards myDpAnimationRotateOut;animation:.3s linear forwards myDpAnimationRotateOut}@-webkit-keyframes myDpAnimationRotateOut{0%{transform:scale(1) rotate(0);opacity:1}100%{transform:scale(.3) rotate(-45deg);opacity:0}}@keyframes myDpAnimationRotateOut{0%{transform:scale(1) rotate(0);opacity:1}100%{transform:scale(.3) rotate(-45deg);opacity:0}}.myDpAnimationFlipDiagonalIn{-webkit-animation:.3s linear myDpAnimationFlipDiagonalIn;animation:.3s linear myDpAnimationFlipDiagonalIn}@-webkit-keyframes myDpAnimationFlipDiagonalIn{0%{transform:rotate3d(1,1,0,-78deg)}100%{transform:rotate3d(1,1,0,0deg)}}@keyframes myDpAnimationFlipDiagonalIn{0%{transform:rotate3d(1,1,0,-78deg)}100%{transform:rotate3d(1,1,0,0deg)}}.myDpAnimationFlipDiagonalOut{-webkit-animation:.3s linear forwards myDpAnimationFlipDiagonalOut;animation:.3s linear forwards myDpAnimationFlipDiagonalOut}@-webkit-keyframes myDpAnimationFlipDiagonalOut{0%{transform:rotate3d(1,1,0,0deg);opacity:1}100%{transform:rotate3d(1,1,0,78deg);opacity:0}}@keyframes myDpAnimationFlipDiagonalOut{0%{transform:rotate3d(1,1,0,0deg);opacity:1}100%{transform:rotate3d(1,1,0,78deg);opacity:0}}.myDpSelectorAbsolute{position:absolute}.myDpSelectorPosInitial{position:initial}.myDpSelector:focus{box-shadow:-1px 1px 6px 0 #add8e6;outline:0}.myDpSelectorArrow{background:#fafafa;padding:0}.myDpSelectorArrow:after,.myDpSelectorArrow:before{bottom:100%;border:solid transparent;content:\" \";height:0;width:0;position:absolute}.myDpSelectorArrow:after{border-color:rgba(250,250,250,0);border-bottom-color:#fafafa;border-width:10px;margin-left:-10px}.myDpSelectorArrow:before{border-color:rgba(204,204,204,0);border-bottom-color:#ccc;border-width:11px;margin-left:-11px}.myDpSelectorArrow:focus:before{border-bottom-color:#add8e6}.myDpSelectorArrowLeft:after,.myDpSelectorArrowLeft:before{left:24px}.myDpSelectorArrowRight:after,.myDpSelectorArrowRight:before{left:86%}::-ms-clear{display:none}.myDpCalTable,.myDpMonthTable,.myDpYearTable{border-radius:0 0 4px 4px;table-layout:fixed;width:100%;height:calc(100% - 30px);background-color:#fff;font-size:14px}.myDpCalTable tbody tr:nth-child(6) td:first-child,.myDpMonthTable tbody tr:nth-child(4) td:first-child,.myDpYearTable tbody tr:nth-child(5) td:first-child{border-bottom-left-radius:4px}.myDpCalTable tbody tr:nth-child(6) td:last-child,.myDpMonthTable tbody tr:nth-child(4) td:last-child,.myDpYearTable tbody tr:nth-child(5) td:last-child{border-bottom-right-radius:4px}.myDpCalTable,.myDpDaycell,.myDpMonthTable,.myDpMonthcell,.myDpWeekDayTitle,.myDpYearTable,.myDpYearcell{border-collapse:collapse;color:#036;line-height:1.1}.myDpDaycell,.myDpMonthcell,.myDpYearcell{padding:4px;text-align:center}.myDpDaycell{background-color:#fff;position:relative}.myDpWeekDayTitle{background-color:transparent;color:#333;font-size:13px;font-weight:400;vertical-align:middle;max-width:36px;overflow:hidden;white-space:nowrap;height:23px;text-align:center}.myDpWeekDayTitleWeekNbr{width:20px}.myDpMonthcell{background-color:#fff;overflow:hidden;white-space:nowrap}.myDpYearcell{background-color:#fff;width:20%}.myDpMonthNbr{font-size:10px;display:block}.myDpDaycellWeekNbr{font-size:9px;cursor:default;text-align:center;color:#333}.myDpNextMonth,.myDpPrevMonth{color:#999}.monthYearSelBar{display:flex;height:30px;background-color:#fff;border-top-left-radius:4px;border-top-right-radius:4px}.myDpPrevBtn{margin-left:10px}.myDpNextBtn{margin-left:auto;margin-right:10px}.myDpMonthYearText{width:100%;line-height:30px;text-align:center}.myDpHeaderBtn{background:0 0;padding:0;border:none;line-height:30px;height:28px;margin-top:1px;color:#000;outline:0;cursor:default}.myDpMonthBtn,.myDpYearBtn{font-size:16px}.myDpMonthBtn{margin-right:6px}.myDpHighlight{color:#c30000}.myDpDimDay{opacity:.5}.myDpCurrMonth{background-color:#fff;font-weight:400}.myDpMarkDate{position:absolute;top:2px;left:2px;border-right:8px solid transparent}.myDpMarkCurrDay,.myDpMarkCurrMonth,.myDpMarkCurrYear{border-bottom:2px solid #036}.myDpRangeColor{background-color:#dbeaff}.myDpSelectedDay,.myDpSelectedMonth,.myDpSelectedYear{border:none;background-color:#8ebfff;border-radius:2px}.myDpHeaderLabelBtnNotEdit{cursor:default}.myDpHeaderBtn::-moz-focus-inner,.myDpNextBtn::-moz-focus-inner,.myDpPrevBtn::-moz-focus-inner{border:0}.myDpHeaderBtn:focus,.myDpMonthLabel:focus,.myDpYearLabel:focus{color:#66afe9;outline:0}.myDpDaycell:focus,.myDpMonthcell:focus,.myDpYearcell:focus{box-shadow:inset 0 0 0 1px #66afe9}.myDpTableSingleDay:hover,.myDpTableSingleMonth:hover,.myDpTableSingleYear:hover{background-color:#ddd}.myDpDaycell,.myDpMonthLabel,.myDpMonthcell,.myDpYearLabel,.myDpYearcell{cursor:pointer}.myDpHeaderBtnEnabled:hover,.myDpMonthLabel:hover,.myDpYearLabel:hover{color:#777}.myDpHeaderBtnEnabled{cursor:pointer}.myDpHeaderBtnDisabled{cursor:not-allowed;opacity:.65}.myDpDisabled{cursor:default;color:#999;background:#fbefef}@font-face{font-family:angular-mydatepicker;src:url(data:application/octet-stream;base64,d09GRgABAAAAAAs4AA8AAAAAE+gAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABWAAAADsAAABUIIslek9TLzIAAAGUAAAAQwAAAFY+IEi5Y21hcAAAAdgAAABQAAABfohD7KljdnQgAAACKAAAABMAAAAgBtX/BGZwZ20AAAI8AAAFkAAAC3CKkZBZZ2FzcAAAB8wAAAAIAAAACAAAABBnbHlmAAAH1AAAAL8AAAEAS//bfWhlYWQAAAiUAAAAMQAAADYW6nhraGhlYQAACMgAAAAbAAAAJAc8A1ZobXR4AAAI5AAAAAwAAAAMCXwAAGxvY2EAAAjwAAAACAAAAAgAQACAbWF4cAAACPgAAAAgAAAAIACmC5tuYW1lAAAJGAAAAXcAAALNzJ0fIXBvc3QAAAqQAAAAKwAAAEAj+eC8cHJlcAAACrwAAAB6AAAAhuVBK7x4nGNgZGBg4GIwYLBjYHJx8wlh4MtJLMljkGJgYYAAkDwymzEnMz2RgQPGA8qxgGkOIGaDiAIAJjsFSAB4nGNgZNZknMDAysDAVMW0h4GBoQdCMz5gMGRkAooysDIzYAUBaa4pDA4vGF4wMgf9z2KIYg5imAYUZgTJAQDMhAtXAHic7ZCxDYAwDATPiaFAjEFBwTBU7F+yRfK2GYOX7qR/uTKwAF1cwsEejMit1XLvbLk7R9547K+NIRNW93STVv7s6fNrLf5U1OcK2gTMuAtdeJxjYEADEhDIHPQ/C4QBEmwD3QB4nK1WaXfTRhQdeUmchCwlCy1qYcTEabBGJmzBgAlBsmMgXZytlaCLFDvpvvGJ3+Bf82Tac+g3flrvGy8kkLTncJqTo3fnzdXM22USWpLYC+uRlJsvxdTWJo3sPAnphk3LUXwoO3shZYrJ3wVREK2W2rcdh0REIlC1rrBEEPseWZpkfOhRRsu2pFdNyi096S5b40G9Vd9+GjrKsTuhpGYzdGg9siVVGFWiSKY9UtKmZaj6K0krvL/CzFfNUMKITiJpvBnG0EjeG2e0ymg1tuMoimyy3ChSJJrhQRR5lNUS5+SKCQzKB82Q8sqnEeXD/Iis2KOcVrBLttP8vi95p3c5P7Ffb1G25EAfyI7s4Ox0JV+EW1th3LST7ShUEXbXd0Js2exU/2aP8ppGA7crMr3QjGCpfIUQKz+hzP4hWS2cT/mSR6NaspETQetlTuxLPoHW44gpcc0YWdDd0QkR1P2SMwz2mD4e/PHeKZYLEwJ4HMt6RyWcCBMpYXM0SdowcmAlZYsqqfWumDjldVrEW8J+7drRl85o41B3YjxbDx1bOVHJ8WhSp5lMndpJzaMpDaKUdCZ4zK8DKD+iSV5tYzWJlUfTOGbGhEQiAi3cS1NBLDuxpCkEzaMZvbkbprl2LVqkyQP13KP39OZWuLnTU9oO9LNGf1anYjrYC9PpaeQv8Wna5SJF6frpGX5M4kHWAjKRLTbDlIMHb/0O0svXlhyF1wbY7u3zK6h91kTwpAH7G9AeT9UpCUyFmFWIVkBirWtZlsnVrBapyNR3Q5pWvqzTBIpyHBfHvoxx/V8zM5aYEr7fidOzIy49c+1LCNMcfJt1PZrXqcVyAXFmeU6nWZbv6zTH8gOd5lme1+kIS1unoyw/1GmB5Uc6HWN5QQuadN/BkIsw5AIOkDCEpQNDWF6CISwVDGG5CENYFmEIyyUYwvJjGMJyGYawvKxl1dRTSePamVgGbEJgYo4eucxF5WoquVRCu2hUakOeEm6VVBTPqn9loF488oY5sBZIl8iaXzHOlY9G5fjWFS1vGjtXwLHqbx+O9jnxUtaLhT8F/9XWVCW9Ys3Dk6vwG4aebCeqNql4dE2Xz1U9uv5fVFRYC/QbSIVYKMqybHBnIoSPOp2GaqCVQ8xszDy063XLmp/D/TcxQhZQ/fg3FBoL3INOWUlZ7eCs1dfbstw7g3I4EyxJMTfz+lb4IiOz0n6RWcqej3wecAWMSmXYagOtFbzZJzEPmd4kzwRxW1E2SNrYzgSJDRzzgHnznQQmYeqqDeRO4YYN+AVhbsF5J1yieqMsh+5F7PMopPxbp+JE9qhojMCz2Rthr+9Cym9xDCQ0+aV+DFQVoakYNRXQNFJuqAZfxtm6bULGDvQjKnbDsqziw8cW95WSbRmEfKSI1aOjn9Zeok6q3H5mFJfvnb4FwSA1MX9733RxkMq7WskyR20DU7calVPXmkPjVYfq5lH1vePsEzlrmm66Jx56X9Oq28HFXCyw9m0O0lImF9T1YYUNosvFpVDqZTRJ77gHGBYY0O9Qio3/q/rYfJ4rVYXRcSTfTtS30edgDPwP2H9H9QPQ92Pocg0uz/eaE59u9OFsma6iF+un6Dcwa625WboG3NB0A+IhR62OuMoNfKcGcXqkuRzpIeBj3RXiAcAmgMXgE921jOZTAKP5jDk+wOfMYdBkDoMt5jDYZs4awA5zGOwyh8Eecxh8wZx1gC+ZwyBkDoOIOQyeMCcAeMocBl8xh8HXzGHwDXPuA3zLHAYxcxgkzGGwr+nWMMwtXtBdoLZBVaADU09Y3MPiUFNlyP6OF4b9vUHM/sEgpv6o6faQ+hMvDPVng5j6i0FM/VXTnSH1N14Y6u8GMfUPg5j6TL8Yy2UGv4x8lwoHlF1sPufvifcP28VAuQABAAH//wAPeJxjYGRg+H+AaQazC4MIg+5WRkYGRkZ37w0qAREO3AwMjAwFQD4Po6e0AyeQw5jPwMCQFrlFXJyJVUybk0lMhJ+RTUmdUc3EnNHMSJ5RTISp7991Rk0urlhuGe5/SdzcjPO45LhiuZhW/bvx7zqYycU4H0gzzuPmjuWSYwBZAbK/BGo/J1H2ywiB7QfarQ+ymxNI2AMdIA5yQBbQWhnuWKDVGv9ugC0BWsbFmPkvEeIqRk1GDYgCkEIGAB9cLoQAeJxjYGRgYABic9F3f+P5bb4ycDO/AIow3Pw4yxFB/z/A/ILZBcjlYGACiQIAcjgNFAAAAHicY2BkYGAO+p8FJF8wMIBJRgZUwAwAXPcDmgAD6AAAAsoAAALKAAAAAAAAAEAAgAABAAAAAwAVAAEAAAAAAAIABAAUAHMAAAAqC3AAAAAAeJx1kMtOwkAUhv+RiwqJGk3cOisDMZZL4gISEhIMbHRDDFtTSmlLSodMBxJew3fwYXwJn8WfdjAGYpvpfOebM2dOB8A1viGQP08cOQucMcr5BKfoWS7QP1sukl8sl1DFm+Uy/bvlCh4QWK7iBh+sIIrnjBb4tCxwJS4tn+BC3Fku0D9aLpJ7lku4Fa+Wy/Se5QomIrVcxb34GqjVVkdBaGRtUJftZqsjp1upqKLEjaW7NqHSqezLuUqMH8fK8dRyz2M/WMeu3of7eeLrNFKJbDnNvRr5ia9d48921dNN0DZmLudaLeXQZsiVVgvfM05ozKrbaPw9DwMorLCFRsSrCmEgUaOtc26jiRY6pCkzJDPzrAgJXMQ0LtbcEWYrKeM+x5xRQuszIyY78PhdHvkxKeD+mFX00ephPCHtzogyL9mXw+4Os0akJMt0Mzv77T3Fhqe1aQ137brUWVcSw4MakvexW1vQePROdiuGtosG33/+7wfseIRVAHicY2BigAAuBuyAmZGJkZmRhYEzJzWtRDe/IDWPqygzPQPCZGAAAGN+B7YAeJxj8N7BcCIoYiMjY1/kBsadHAwcDMkFGxlYnTYxMDJogRibuZgYOSAsPgYwi81pF9MBoDQnkM3utIvBAcJmZnDZqMLYERixwaEjYiNzistGNRBvF0cDAyOLQ0dySARISSQQbOZhYuTR2sH4v3UDS+9GJgYXAAx2I/QAAA==) format('woff');font-weight:400;font-style:normal}.myDpIcon{font-family:angular-mydatepicker;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#222;font-size:20px}.myDpIconLeftArrow:before{content:\"\\e800\"}.myDpIconRightArrow:before{content:\"\\e801\"}"]
            }] }
];
/** @nocollapse */
CalendarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: UtilService }
];
CalendarComponent.propDecorators = {
    selectorEl: [{ type: ViewChild, args: ["selectorEl",] }],
    styleEl: [{ type: ViewChild, args: ["styleEl",] }],
    position: [{ type: HostBinding, args: ["style.position",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectionBarComponent {
    constructor() {
        this.prevNavigateBtnClicked = new EventEmitter();
        this.nextNavigateBtnClicked = new EventEmitter();
        this.monthViewBtnClicked = new EventEmitter();
        this.yearViewBtnClicked = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty(OPTS)) {
            this.opts = changes[OPTS].currentValue;
        }
        if (changes.hasOwnProperty(YEARS_DURATION)) {
            this.yearsDuration = changes[YEARS_DURATION].currentValue;
        }
        if (changes.hasOwnProperty(VISIBLE_MONTH)) {
            this.visibleMonth = changes[VISIBLE_MONTH].currentValue;
        }
        if (changes.hasOwnProperty(SELECT_MONTH)) {
            this.selectMonth = changes[SELECT_MONTH].currentValue;
        }
        if (changes.hasOwnProperty(SELECT_YEAR)) {
            this.selectYear = changes[SELECT_YEAR].currentValue;
        }
        if (changes.hasOwnProperty(PREV_VIEW_DISABLED)) {
            this.prevViewDisabled = changes[PREV_VIEW_DISABLED].currentValue;
        }
        if (changes.hasOwnProperty(NEXT_VIEW_DISABLED)) {
            this.nextViewDisabled = changes[NEXT_VIEW_DISABLED].currentValue;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPrevNavigateBtnClicked(event) {
        event.stopPropagation();
        this.opts.rtl ? this.nextNavigateBtnClicked.emit() : this.prevNavigateBtnClicked.emit();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onNextNavigateBtnClicked(event) {
        event.stopPropagation();
        this.opts.rtl ? this.prevNavigateBtnClicked.emit() : this.nextNavigateBtnClicked.emit();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMonthViewBtnClicked(event) {
        event.stopPropagation();
        this.monthViewBtnClicked.emit();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onYearViewBtnClicked(event) {
        event.stopPropagation();
        this.yearViewBtnClicked.emit();
    }
}
SelectionBarComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-selection-bar",
                template: "<div class=\"monthYearSelBar\">\n  <div class=\"myDpPrevBtn\">\n    <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelPrevMonth\" class=\"myDpHeaderBtn myDpIcon myDpIconLeftArrow myDpHeaderBtnEnabled\" (click)=\"onPrevNavigateBtnClicked($event)\" tabindex=\"{{!prevViewDisabled ? '0':'-1'}}\"  [disabled]=\"prevViewDisabled\" [ngClass]=\"{'myDpHeaderBtnDisabled': prevViewDisabled}\"></button>\n  </div>\n  <div class=\"myDpMonthYearText\">\n    <button type=\"button\" class=\"myDpHeaderBtn myDpMonthBtn\" *ngIf=\"!selectYear\" (click)=\"opts.monthSelector && onMonthViewBtnClicked($event)\" tabindex=\"{{opts.monthSelector ? '0':'-1'}}\" [ngClass]=\"{'myDpMonthLabel': opts.monthSelector, 'myDpHeaderLabelBtnNotEdit': !opts.monthSelector}\">{{visibleMonth.monthTxt}}</button>\n    <button type=\"button\" class=\"myDpHeaderBtn myDpYearBtn\" (click)=\"opts.yearSelector && onYearViewBtnClicked($event)\" tabindex=\"{{opts.yearSelector ? '0':'-1'}}\" [ngClass]=\"{'myDpYearLabel': opts.yearSelector, 'myDpHeaderLabelBtnNotEdit': !opts.yearSelector}\">{{!selectYear ? visibleMonth.year : yearsDuration}}</button>\n  </div>\n  <div class=\"myDpNextBtn\">\n    <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelNextMonth\" class=\"myDpHeaderBtn myDpIcon myDpIconRightArrow myDpHeaderBtnEnabled\" (click)=\"onNextNavigateBtnClicked($event)\" tabindex=\"{{!nextViewDisabled ? '0':'-1'}}\" [disabled]=\"nextViewDisabled\" [ngClass]=\"{'myDpHeaderBtnDisabled': nextViewDisabled}\"></button>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
SelectionBarComponent.ctorParameters = () => [];
SelectionBarComponent.propDecorators = {
    opts: [{ type: Input }],
    yearsDuration: [{ type: Input }],
    visibleMonth: [{ type: Input }],
    selectMonth: [{ type: Input }],
    selectYear: [{ type: Input }],
    prevViewDisabled: [{ type: Input }],
    nextViewDisabled: [{ type: Input }],
    prevNavigateBtnClicked: [{ type: Output }],
    nextNavigateBtnClicked: [{ type: Output }],
    monthViewBtnClicked: [{ type: Output }],
    yearViewBtnClicked: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DayViewComponent {
    /**
     * @param {?} utilService
     */
    constructor(utilService) {
        this.utilService = utilService;
        this.dayCellClicked = new EventEmitter();
        this.dayCellKeyDown = new EventEmitter();
        this.prevMonthId = MonthId.prev;
        this.currMonthId = MonthId.curr;
        this.nextMonthId = MonthId.next;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty(OPTS)) {
            this.opts = changes[OPTS].currentValue;
        }
        if (changes.hasOwnProperty(DATES)) {
            this.dates = changes[DATES].currentValue;
        }
        if (changes.hasOwnProperty(WEEK_DAYS)) {
            this.weekDays = changes[WEEK_DAYS].currentValue;
        }
        if (changes.hasOwnProperty(SELECTED_DATE)) {
            this.selectedDate = changes[SELECTED_DATE].currentValue;
        }
        if (changes.hasOwnProperty(SELECTED_DATE_RANGE)) {
            this.selectedDateRange = changes[SELECTED_DATE_RANGE].currentValue;
        }
    }
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    onDayCellClicked(event, cell) {
        event.stopPropagation();
        if (cell.disabled) {
            return;
        }
        this.dayCellClicked.emit(cell);
    }
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    onDayCellKeyDown(event, cell) {
        /** @type {?} */
        const keyCode = this.utilService.getKeyCodeFromEvent(event);
        if (keyCode !== KeyCode.tab) {
            event.preventDefault();
            if (keyCode === KeyCode.enter || keyCode === KeyCode.space) {
                this.onDayCellClicked(event, cell);
            }
            else if (this.opts.moveFocusByArrowKeys) {
                this.dayCellKeyDown.emit(event);
            }
        }
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    onDayCellMouseEnter(cell) {
        if (this.utilService.isInitializedDate(this.selectedDateRange.begin) && !this.utilService.isInitializedDate(this.selectedDateRange.end)) {
            for (const w of this.dates) {
                for (const day of w.week) {
                    day.range = this.utilService.isDateSameOrEarlier(this.selectedDateRange.begin, day.dateObj) && this.utilService.isDateSameOrEarlier(day.dateObj, cell.dateObj);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    onDayCellMouseLeave() {
        for (const w of this.dates) {
            for (const day of w.week) {
                day.range = false;
            }
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isDateInRange(date) {
        return this.utilService.isDateInRange(date, this.selectedDateRange);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isDateSame(date) {
        return this.utilService.isDateSame(this.selectedDate, date);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isDateRangeBeginOrEndSame(date) {
        return this.utilService.isDateRangeBeginOrEndSame(this.selectedDateRange, date);
    }
}
DayViewComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-day-view",
                template: "<table class=\"myDpCalTable\" [ngClass]=\"{'ng-myrtl': opts.rtl}\">\n  <thead>\n    <tr>\n      <th class=\"myDpWeekDayTitle myDpWeekDayTitleWeekNbr\" *ngIf=\"opts.showWeekNumbers && opts.firstDayOfWeek==='mo'\">#</th>\n      <th class=\"myDpWeekDayTitle\" scope=\"col\" *ngFor=\"let d of weekDays\">{{d}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let w of dates\">\n      <td class=\"myDpDaycellWeekNbr\" *ngIf=\"opts.showWeekNumbers && opts.firstDayOfWeek==='mo'\">{{w.weekNbr}}</td>\n      <td id=\"d_{{d.row}}_{{d.col}}\" class=\"d_{{d.row}}_{{d.col}} myDpDaycell\" *ngFor=\"let d of w.week\"\n          [ngClass]=\"{'myDpRangeColor': isDateInRange(d.dateObj) || d.range,\n                'myDpPrevMonth': d.cmo === prevMonthId,\n                'myDpCurrMonth':d.cmo === currMonthId && !d.disabled,\n                'myDpNextMonth': d.cmo === nextMonthId,\n                'myDpSelectedDay':!this.opts.dateRange && isDateSame(d.dateObj) || this.opts.dateRange && isDateRangeBeginOrEndSame(d.dateObj),\n                'myDpDisabled': d.disabled,\n                'myDpTableSingleDay': !d.disabled}\"\n          (click)=\"onDayCellClicked($event, d)\" (keydown)=\"onDayCellKeyDown($event, d)\"\n          (mouseenter)=\"onDayCellMouseEnter(d)\" (mouseleave)=\"onDayCellMouseLeave()\" [attr.tabindex]=\"!d.disabled ? 0 : -1\">\n        <span *ngIf=\"d.markedDate.marked\" class=\"myDpMarkDate\" [ngStyle]=\"{'border-top': '8px solid ' + d.markedDate.color}\"></span>\n        <span  class=\"myDpDayValue\" [ngClass]=\"{'myDpMarkCurrDay': d.currDay && opts.markCurrentDay, 'myDpDimDay': d.highlight && (d.cmo===prevMonthId || d.cmo===nextMonthId || d.disabled), 'myDpHighlight': d.highlight}\">{{d.dateObj.day}}</span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n",
                providers: [UtilService],
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
DayViewComponent.ctorParameters = () => [
    { type: UtilService }
];
DayViewComponent.propDecorators = {
    opts: [{ type: Input }],
    dates: [{ type: Input }],
    weekDays: [{ type: Input }],
    selectedDate: [{ type: Input }],
    selectedDateRange: [{ type: Input }],
    dayCellClicked: [{ type: Output }],
    dayCellKeyDown: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MonthViewComponent {
    /**
     * @param {?} utilService
     */
    constructor(utilService) {
        this.utilService = utilService;
        this.monthCellClicked = new EventEmitter();
        this.monthCellKeyDown = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty(OPTS)) {
            this.opts = changes[OPTS].currentValue;
        }
        if (changes.hasOwnProperty(MONTHS)) {
            this.months = changes[MONTHS].currentValue;
        }
    }
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    onMonthCellClicked(event, cell) {
        event.stopPropagation();
        if (cell.disabled) {
            return;
        }
        this.monthCellClicked.emit(cell);
    }
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    onMonthCellKeyDown(event, cell) {
        /** @type {?} */
        const keyCode = this.utilService.getKeyCodeFromEvent(event);
        if (keyCode !== KeyCode.tab) {
            event.preventDefault();
            if (keyCode === KeyCode.enter || keyCode === KeyCode.space) {
                this.onMonthCellClicked(event, cell);
            }
            else if (this.opts.moveFocusByArrowKeys) {
                this.monthCellKeyDown.emit(event);
            }
        }
    }
}
MonthViewComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-month-view",
                template: "<table class=\"myDpMonthTable\" [ngClass]=\"{'ng-myrtl': opts.rtl}\">\n  <tbody>\n    <tr *ngFor=\"let mr of months\">\n      <td id=\"m_{{m.row}}_{{m.col}}\" class=\"m_{{m.row}}_{{m.col}} myDpMonthcell\"\n          [ngClass]=\"{'myDpSelectedMonth': m.selected, 'myDpDisabled': m.disabled, 'myDpTableSingleMonth': !m.disabled}\"\n          *ngFor=\"let m of mr\" (click)=\"onMonthCellClicked($event, m)\" (keydown)=\"onMonthCellKeyDown($event, m)\" [attr.tabindex]=\"!m.disabled ? 0 : -1\">\n        <span class=\"myDpMonthNbr\" *ngIf=\"opts.showMonthNumber\">{{m.nbr}}</span>\n        <span class=\"myDpMonthValue\" [ngClass]=\"{'myDpMarkCurrMonth': m.currMonth && opts.markCurrentMonth}\">{{m.name}}</span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n",
                providers: [UtilService],
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
MonthViewComponent.ctorParameters = () => [
    { type: UtilService }
];
MonthViewComponent.propDecorators = {
    opts: [{ type: Input }],
    months: [{ type: Input }],
    monthCellClicked: [{ type: Output }],
    monthCellKeyDown: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class YearViewComponent {
    /**
     * @param {?} utilService
     */
    constructor(utilService) {
        this.utilService = utilService;
        this.yearCellClicked = new EventEmitter();
        this.yearCellKeyDown = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty(OPTS)) {
            this.opts = changes[OPTS].currentValue;
        }
        if (changes.hasOwnProperty(YEARS)) {
            this.years = changes[YEARS].currentValue;
        }
    }
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    onYearCellClicked(event, cell) {
        event.stopPropagation();
        if (cell.disabled) {
            return;
        }
        this.yearCellClicked.emit(cell);
    }
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    onYearCellKeyDown(event, cell) {
        /** @type {?} */
        const keyCode = this.utilService.getKeyCodeFromEvent(event);
        if (keyCode !== KeyCode.tab) {
            event.preventDefault();
            if (keyCode === KeyCode.enter || keyCode === KeyCode.space) {
                this.onYearCellClicked(event, cell);
            }
            else if (this.opts.moveFocusByArrowKeys) {
                this.yearCellKeyDown.emit(event);
            }
        }
    }
}
YearViewComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-year-view",
                template: "<table class=\"myDpYearTable\" [ngClass]=\"{'ng-myrtl': opts.rtl}\">\n  <tbody>\n    <tr *ngFor=\"let yr of years\">\n      <td id=\"y_{{y.row}}_{{y.col}}\" class=\"y_{{y.row}}_{{y.col}} myDpYearcell\"\n          [ngClass]=\"{'myDpSelectedYear': y.selected, 'myDpDisabled': y.disabled, 'myDpTableSingleYear': !y.disabled}\"\n          *ngFor=\"let y of yr\" (click)=\"onYearCellClicked($event, y)\" (keydown)=\"onYearCellKeyDown($event, y)\" [attr.tabindex]=\"!y.disabled ? 0 : -1\">\n        <span class=\"myDpYearValue\" [ngClass]=\"{'myDpMarkCurrYear': y.currYear && opts.markCurrentYear}\">{{y.year}}</span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n",
                providers: [UtilService],
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
YearViewComponent.ctorParameters = () => [
    { type: UtilService }
];
YearViewComponent.propDecorators = {
    opts: [{ type: Input }],
    years: [{ type: Input }],
    yearCellClicked: [{ type: Output }],
    yearCellKeyDown: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocaleService {
    constructor() {
        this.locales = {
            "en": {
                dayLabels: { su: "Sun", mo: "Mon", tu: "Tue", we: "Wed", th: "Thu", fr: "Fri", sa: "Sat" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec" },
                dateFormat: "mm/dd/yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "he": {
                dayLabels: { su: "רא", mo: "שנ", tu: "של", we: "רב", th: "חמ", fr: "שי", sa: "שב" },
                monthLabels: { 1: "ינו", 2: "פבר", 3: "מרץ", 4: "אפר", 5: "מאי", 6: "יונ", 7: "יול", 8: "אוג", 9: "ספט", 10: "אוק", 11: "נוב", 12: "דצמ" },
                dateFormat: "dd/mm/yyyy",
                firstDayOfWeek: "su",
                sunHighlight: false
            },
            "ja": {
                dayLabels: { su: "日", mo: "月", tu: "火", we: "水", th: "木", fr: "金", sa: "土" },
                monthLabels: { 1: "１月", 2: "２月", 3: "３月", 4: "４月", 5: "５月", 6: "６月", 7: "７月", 8: "８月", 9: "９月", 10: "１０月", 11: "１１月", 12: "１２月" },
                dateFormat: "yyyy.mm.dd",
                sunHighlight: false
            },
            "fr": {
                dayLabels: { su: "Dim", mo: "Lun", tu: "Mar", we: "Mer", th: "Jeu", fr: "Ven", sa: "Sam" },
                monthLabels: { 1: "Jan", 2: "Fév", 3: "Mar", 4: "Avr", 5: "Mai", 6: "Juin", 7: "Juil", 8: "Aoû", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Déc" },
                dateFormat: "dd/mm/yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "fr-ch": {
                dayLabels: { su: "Dim", mo: "Lun", tu: "Mar", we: "Mer", th: "Jeu", fr: "Ven", sa: "Sam" },
                monthLabels: { 1: "Jan", 2: "Fév", 3: "Mar", 4: "Avr", 5: "Mai", 6: "Juin", 7: "Juil", 8: "Aoû", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Déc" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "fi": {
                dayLabels: { su: "Su", mo: "Ma", tu: "Ti", we: "Ke", th: "To", fr: "Pe", sa: "La" },
                monthLabels: { 1: "Tam", 2: "Hel", 3: "Maa", 4: "Huh", 5: "Tou", 6: "Kes", 7: "Hei", 8: "Elo", 9: "Syy", 10: "Lok", 11: "Mar", 12: "Jou" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "es": {
                dayLabels: { su: "Do", mo: "Lu", tu: "Ma", we: "Mi", th: "Ju", fr: "Vi", sa: "Sa" },
                monthLabels: { 1: "Ene", 2: "Feb", 3: "Mar", 4: "Abr", 5: "May", 6: "Jun", 7: "Jul", 8: "Ago", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dic" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "hu": {
                dayLabels: { su: "Vas", mo: "Hét", tu: "Kedd", we: "Sze", th: "Csü", fr: "Pén", sa: "Szo" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Már", 4: "Ápr", 5: "Máj", 6: "Jún", 7: "Júl", 8: "Aug", 9: "Szep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "yyyy-mm-dd",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "sv": {
                dayLabels: { su: "Sön", mo: "Mån", tu: "Tis", we: "Ons", th: "Tor", fr: "Fre", sa: "Lör" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Maj", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "yyyy-mm-dd",
                firstDayOfWeek: "mo",
                sunHighlight: false
            },
            "nl": {
                dayLabels: { su: "Zon", mo: "Maa", tu: "Din", we: "Woe", th: "Don", fr: "Vri", sa: "Zat" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Mei", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "dd-mm-yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: false
            },
            "ru": {
                dayLabels: { su: "Вс", mo: "Пн", tu: "Вт", we: "Ср", th: "Чт", fr: "Пт", sa: "Сб" },
                monthLabels: { 1: "Янв", 2: "Фев", 3: "Март", 4: "Апр", 5: "Май", 6: "Июнь", 7: "Июль", 8: "Авг", 9: "Сент", 10: "Окт", 11: "Ноя", 12: "Дек" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "uk": {
                dayLabels: { su: "Нд", mo: "Пн", tu: "Вт", we: "Ср", th: "Чт", fr: "Пт", sa: "Сб" },
                monthLabels: { 1: "Січ", 2: "Лют", 3: "Бер", 4: "Кві", 5: "Тра", 6: "Чер", 7: "Лип", 8: "Сер", 9: "Вер", 10: "Жов", 11: "Лис", 12: "Гру" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "no": {
                dayLabels: { su: "Søn", mo: "Man", tu: "Tir", we: "Ons", th: "Tor", fr: "Fre", sa: "Lør" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Mai", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Des" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: false
            },
            "tr": {
                dayLabels: { su: "Paz", mo: "Pzt", tu: "Sal", we: "Çar", th: "Per", fr: "Cum", sa: "Cmt" },
                monthLabels: { 1: "Oca", 2: "Şub", 3: "Mar", 4: "Nis", 5: "May", 6: "Haz", 7: "Tem", 8: "Ağu", 9: "Eyl", 10: "Eki", 11: "Kas", 12: "Ara" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: false
            },
            "pt-br": {
                dayLabels: { su: "Dom", mo: "Seg", tu: "Ter", we: "Qua", th: "Qui", fr: "Sex", sa: "Sab" },
                monthLabels: { 1: "Jan", 2: "Fev", 3: "Mar", 4: "Abr", 5: "Mai", 6: "Jun", 7: "Jul", 8: "Ago", 9: "Set", 10: "Out", 11: "Nov", 12: "Dez" },
                dateFormat: "dd/mm/yyyy",
                firstDayOfWeek: "su",
                sunHighlight: true
            },
            "de": {
                dayLabels: { su: "So", mo: "Mo", tu: "Di", we: "Mi", th: "Do", fr: "Fr", sa: "Sa" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mär", 4: "Apr", 5: "Mai", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dez" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "de-ch": {
                dayLabels: { su: "So", mo: "Mo", tu: "Di", we: "Mi", th: "Do", fr: "Fr", sa: "Sa" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mär", 4: "Apr", 5: "Mai", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dez" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "it": {
                dayLabels: { su: "Dom", mo: "Lun", tu: "Mar", we: "Mer", th: "Gio", fr: "Ven", sa: "Sab" },
                monthLabels: { 1: "Gen", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Mag", 6: "Giu", 7: "Lug", 8: "Ago", 9: "Set", 10: "Ott", 11: "Nov", 12: "Dic" },
                dateFormat: "dd/mm/yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "it-ch": {
                dayLabels: { su: "Dom", mo: "Lun", tu: "Mar", we: "Mer", th: "Gio", fr: "Ven", sa: "Sab" },
                monthLabels: { 1: "Gen", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Mag", 6: "Giu", 7: "Lug", 8: "Ago", 9: "Set", 10: "Ott", 11: "Nov", 12: "Dic" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "pl": {
                dayLabels: { su: "Nie", mo: "Pon", tu: "Wto", we: "Śro", th: "Czw", fr: "Pią", sa: "Sob" },
                monthLabels: { 1: "Sty", 2: "Lut", 3: "Mar", 4: "Kwi", 5: "Maj", 6: "Cze", 7: "Lip", 8: "Sie", 9: "Wrz", 10: "Paź", 11: "Lis", 12: "Gru" },
                dateFormat: "yyyy-mm-dd",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "my": {
                dayLabels: { su: "တနင်္ဂနွေ", mo: "တနင်္လာ", tu: "အင်္ဂါ", we: "ဗုဒ္ဓဟူး", th: "ကြသပတေး", fr: "သောကြာ", sa: "စနေ" },
                monthLabels: { 1: "ဇန်နဝါရီ", 2: "ဖေဖော်ဝါရီ", 3: "မတ်", 4: "ဧပြီ", 5: "မေ", 6: "ဇွန်", 7: "ဇူလိုင်", 8: "ဩဂုတ်", 9: "စက်တင်ဘာ", 10: "အောက်တိုဘာ", 11: "နိုဝင်ဘာ", 12: "ဒီဇင်ဘာ" },
                dateFormat: "yyyy-mm-dd",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "sk": {
                dayLabels: { su: "Ne", mo: "Po", tu: "Ut", we: "St", th: "Št", fr: "Pi", sa: "So" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Máj", 6: "Jún", 7: "Júl", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "sl": {
                dayLabels: { su: "Ned", mo: "Pon", tu: "Tor", we: "Sre", th: "Čet", fr: "Pet", sa: "Sob" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Maj", 6: "Jun", 7: "Jul", 8: "Avg", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "dd. mm. yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "zh-cn": {
                dayLabels: { su: "日", mo: "一", tu: "二", we: "三", th: "四", fr: "五", sa: "六" },
                monthLabels: { 1: "1月", 2: "2月", 3: "3月", 4: "4月", 5: "5月", 6: "6月", 7: "7月", 8: "8月", 9: "9月", 10: "10月", 11: "11月", 12: "12月" },
                dateFormat: "yyyy-mm-dd",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "ro": {
                dayLabels: { su: "du", mo: "lu", tu: "ma", we: "mi", th: "jo", fr: "vi", sa: "sa" },
                monthLabels: { 1: "ian", 2: "feb", 3: "mart", 4: "apr", 5: "mai", 6: "iun", 7: "iul", 8: "aug", 9: "sept", 10: "oct", 11: "nov", 12: "dec" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "ca": {
                dayLabels: { su: "dg", mo: "dl", tu: "dt", we: "dc", th: "dj", fr: "dv", sa: "ds" },
                monthLabels: { 1: "Gen", 2: "Febr", 3: "Març", 4: "Abr", 5: "Maig", 6: "Juny", 7: "Jul", 8: "Ag", 9: "Set", 10: "Oct", 11: "Nov", 12: "Des" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "id": {
                dayLabels: { su: "Min", mo: "Sen", tu: "Sel", we: "Rab", th: "Kam", fr: "Jum", sa: "Sab" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Mei", 6: "Jun", 7: "Jul", 8: "Ags", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Des" },
                dateFormat: "dd-mm-yyyy",
                firstDayOfWeek: "su",
                sunHighlight: true
            },
            "en-au": {
                dayLabels: { su: "Sun", mo: "Mon", tu: "Tue", we: "Wed", th: "Thu", fr: "Fri", sa: "Sat" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec" },
                dateFormat: "dd/mm/yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "am-et": {
                dayLabels: { su: "እሑድ", mo: "ሰኞ", tu: "ማክሰኞ", we: "ረቡዕ", th: "ሐሙስ", fr: "ዓርብ", sa: "ቅዳሜ" },
                monthLabels: { 1: "ጃንዩ", 2: "ፌብሩ", 3: "ማርች", 4: "ኤፕረ", 5: "ሜይ", 6: "ጁን", 7: "ጁላይ", 8: "ኦገስ", 9: "ሴፕቴ", 10: "ኦክተ", 11: "ኖቬም", 12: "ዲሴም" },
                dateFormat: "yyyy-mm-dd",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "cs": {
                dayLabels: { su: "Ne", mo: "Po", tu: "Út", we: "St", th: "Čt", fr: "Pá", sa: "So" },
                monthLabels: { 1: "Led", 2: "Úno", 3: "Bře", 4: "Dub", 5: "Kvě", 6: "Čvn", 7: "Čvc", 8: "Srp", 9: "Zář", 10: "Říj", 11: "Lis", 12: "Pro" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "el": {
                dayLabels: { su: "Κυρ", mo: "Δευ", tu: "Τρι", we: "Τετ", th: "Πεμ", fr: "Παρ", sa: "Σαβ" },
                monthLabels: { 1: "Ιαν", 2: "Φεβ", 3: "Μαρ", 4: "Απρ", 5: "Μαι", 6: "Ιουν", 7: "Ιουλ", 8: "Αυγ", 9: "Σεπ", 10: "Οκτ", 11: "Νοε", 12: "Δεκ" },
                dateFormat: "dd/mm/yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "kk": {
                dayLabels: { su: "Жк", mo: "Дс", tu: "Сс", we: "Ср", th: "Бс", fr: "Жм", sa: "Сб" },
                monthLabels: { 1: "Қаң", 2: "Ақп", 3: "Нау", 4: "Сәу", 5: "Мам", 6: "Мау", 7: "Шіл", 8: "Там", 9: "Қырк", 10: "Қаз", 11: "Қар", 12: "Желт" },
                dateFormat: "dd-mmm-yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "th": {
                dayLabels: { su: "อา", mo: "จ", tu: "อ", we: "พ", th: "พฤ", fr: "ศ", sa: "ส" },
                monthLabels: { 1: "ม.ค", 2: "ก.พ.", 3: "มี.ค.", 4: "เม.ย.", 5: "พ.ค.", 6: "มิ.ย.", 7: "ก.ค.", 8: "ส.ค.", 9: "ก.ย.", 10: "ต.ค.", 11: "พ.ย.", 12: "ธ.ค." },
                dateFormat: "dd-mm-yyyy",
                firstDayOfWeek: "su",
                sunHighlight: true
            },
            "ko-kr": {
                dayLabels: { su: "일", mo: "월", tu: "화", we: "수", th: "목", fr: "금", sa: "토" },
                monthLabels: { 1: "1월", 2: "2월", 3: "3월", 4: "4월", 5: "5월", 6: "6월", 7: "7월", 8: "8월", 9: "9월", 10: "10월", 11: "11월", 12: "12월" },
                dateFormat: "yyyy mm dd",
                firstDayOfWeek: "su",
                sunHighlight: true
            },
            "da": {
                dayLabels: { su: "Søn", mo: "Man", tu: "Tir", we: "Ons", th: "Tor", fr: "Fre", sa: "Lør" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Maj", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "dd-mm-yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "lt": {
                dayLabels: { su: "Sk", mo: "Pr", tu: "An", we: "Tr", th: "Kt", fr: "Pn", sa: "Št" },
                monthLabels: { 1: "Saus.", 2: "Vas.", 3: "Kov.", 4: "Bal.", 5: "Geg.", 6: "Birž.", 7: "Liep.", 8: "Rugp.", 9: "Rugs.", 10: "Sapl.", 11: "Lapkr.", 12: "Gruod." },
                dateFormat: "yyyy-mm-dd",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "vi": {
                dayLabels: { su: "CN", mo: "T2", tu: "T3", we: "T4", th: "T5", fr: "T6", sa: "T7" },
                monthLabels: { 1: "THG 1", 2: "THG 2", 3: "THG 3", 4: "THG 4", 5: "THG 5", 6: "THG 6", 7: "THG 7", 8: "THG 8", 9: "THG 9", 10: "THG 10", 11: "THG 11", 12: "THG 12" },
                dateFormat: "dd/mm/yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "bn": {
                dayLabels: { su: "রবি", mo: "সোম", tu: "মঙ্গল", we: "বুধ", th: "বৃহঃ", fr: "শুক্র", sa: "শনি" },
                monthLabels: { 1: "জানু", 2: "ফেব্রু", 3: "মার্চ", 4: "এপ্রিল", 5: "মে", 6: "জুন", 7: "জুলাই", 8: "আগস্ট", 9: "সেপ্টে", 10: "অক্টো", 11: "নভে", 12: "ডিসে" },
                dateFormat: "dd-mm-yyyy",
                firstDayOfWeek: "su",
                sunHighlight: true
            },
            "bg": {
                dayLabels: { su: "нд", mo: "пн", tu: "вт", we: "ср", th: "чт", fr: "пт", sa: "сб" },
                monthLabels: { 1: "яну.", 2: "фев.", 3: "март", 4: "апр.", 5: "май", 6: "юни", 7: "юли", 8: "авг.", 9: "сеп.", 10: "окт.", 11: "ное.", 12: "дек." },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "hr": {
                dayLabels: { su: "Ne", mo: "Po", tu: "Ul", we: "Sr", th: "Če", fr: "Pe", sa: "Su" },
                monthLabels: { 1: "Sij", 2: "Vel", 3: "Ožu", 4: "Tra", 5: "Svi", 6: "Lip", 7: "Srp", 8: "Kol", 9: "Ruj", 10: "Lis", 11: "Stu", 12: "Pro" },
                dateFormat: "dd.mm.yyyy.",
                firstDayOfWeek: "su",
                sunHighlight: true
            },
            "ar": {
                dayLabels: { su: "الأحد", mo: "الاثنين", tu: "الثلاثاء", we: "الاربعاء", th: "الخميس", fr: "الجمعة", sa: "السبت" },
                monthLabels: { 1: "يناير", 2: "فبراير", 3: "مارس", 4: "ابريل", 5: "مايو", 6: "يونيو", 7: "يوليو", 8: "أغسطس", 9: "سبتمبر", 10: "أكتوبر", 11: "نوفمبر", 12: "ديسمبر" },
                dateFormat: "yyyy-mm-dd",
                firstDayOfWeek: "sa",
                sunHighlight: true
            },
            "is": {
                dayLabels: { su: "sun", mo: "mán", tu: "þri", we: "mið", th: "fim", fr: "fös", sa: "lau" },
                monthLabels: { 1: "jan", 2: "feb", 3: "mar", 4: "apr", 5: "maí", 6: "jún", 7: "júl", 8: "ágú", 9: "sep", 10: "okt", 11: "nóv", 12: "des" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "su",
                sunHighlight: true
            },
            "tw": {
                dayLabels: { su: "週日", mo: "週一", tu: "週二", we: "週三", th: "週四", fr: "週五", sa: "週六" },
                monthLabels: { 1: "一月", 2: "二月", 3: "三月", 4: "四月", 5: "五月", 6: "六月", 7: "七月", 8: "八月", 9: "九月", 10: "十月", 11: "十一月", 12: "十二月" },
                dateFormat: "yyyy-mm-dd",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "lv": {
                dayLabels: { su: "S", mo: "P", tu: "O", we: "T", th: "C", fr: "P", sa: "S" },
                monthLabels: { 1: "Janv", 2: "Febr", 3: "Marts", 4: "Apr", 5: "Maijs", 6: "Jūn", 7: "Jūl", 8: "Aug", 9: "Sept", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "et": {
                dayLabels: { su: "P", mo: "E", tu: "T", we: "K", th: "N", fr: "R", sa: "L" },
                monthLabels: { 1: "Jaan", 2: "Veebr", 3: "Märts", 4: "Apr", 5: "Mai", 6: "Juuni", 7: "Juuli", 8: "Aug", 9: "Sept", 10: "Okt", 11: "Nov", 12: "Dets" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true
            }
        };
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    getLocaleOptions(locale) {
        if (locale && this.locales.hasOwnProperty(locale)) {
            // User given locale
            return this.locales[locale];
        }
        // Default: en
        return this.locales[DEFAULT_LOCALE];
    }
}
LocaleService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const Year = {
    min: 1000,
    max: 9999,
};
Year[Year.min] = 'min';
Year[Year.max] = 'max';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DefaultConfigService {
    constructor() {
        this.defaultConfig = {
            dateRange: false,
            inline: false,
            dayLabels: { su: "Sun", mo: "Mon", tu: "Tue", we: "Wed", th: "Thu", fr: "Fri", sa: "Sat" },
            monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec" },
            dateFormat: "yyyy-mm-dd",
            defaultView: DefaultView.Date,
            firstDayOfWeek: "mo",
            satHighlight: false,
            sunHighlight: true,
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
            disableUntil: { year: 0, month: 0, day: 0 },
            disableSince: { year: 0, month: 0, day: 0 },
            disableDates: [],
            disableDateRanges: [],
            disableWeekends: false,
            disableWeekdays: [],
            enableDates: [],
            markDates: [],
            markWeekends: { marked: false, color: "" },
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
            calendarAnimation: { in: CalAnimation.None, out: CalAnimation.None },
            rtl: false,
            stylesData: { selector: "", styles: "" },
            divHostElement: { enabled: false, placeholder: "" },
            ariaLabelPrevMonth: "Previous Month",
            ariaLabelNextMonth: "Next Month"
        };
    }
    /**
     * @return {?}
     */
    getDefaultConfig() {
        return this.defaultConfig;
    }
}
DefaultConfigService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const CalToggle = {
    Open: 1,
    CloseByDateSel: 2,
    CloseByCalBtn: 3,
    CloseByOutClick: 4,
    CloseByEsc: 5,
};
CalToggle[CalToggle.Open] = 'Open';
CalToggle[CalToggle.CloseByDateSel] = 'CloseByDateSel';
CalToggle[CalToggle.CloseByCalBtn] = 'CloseByCalBtn';
CalToggle[CalToggle.CloseByOutClick] = 'CloseByOutClick';
CalToggle[CalToggle.CloseByEsc] = 'CloseByEsc';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NGX_DP_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => AngularMyDatePickerDirective)),
    multi: true
};
/** @type {?} */
const NGX_DP_VALIDATORS = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => AngularMyDatePickerDirective)),
    multi: true
};
class AngularMyDatePickerDirective {
    /**
     * @param {?} localeService
     * @param {?} utilService
     * @param {?} vcRef
     * @param {?} cfr
     * @param {?} renderer
     * @param {?} cdr
     * @param {?} elem
     * @param {?} config
     */
    constructor(localeService, utilService, vcRef, cfr, renderer, cdr, elem, config) {
        this.localeService = localeService;
        this.utilService = utilService;
        this.vcRef = vcRef;
        this.cfr = cfr;
        this.renderer = renderer;
        this.cdr = cdr;
        this.elem = elem;
        this.config = config;
        this.dateChanged = new EventEmitter();
        this.inputFieldChanged = new EventEmitter();
        this.calendarViewChanged = new EventEmitter();
        this.calendarToggle = new EventEmitter();
        this.rangeDateSelection = new EventEmitter();
        this.cRef = null;
        this.hostText = "";
        this.preventClose = false;
        this.disabled = false;
        this.onChangeCb = (/**
         * @return {?}
         */
        () => { });
        this.onTouchedCb = (/**
         * @return {?}
         */
        () => { });
        this.onClickWrapper = (/**
         * @param {?} evt
         * @return {?}
         */
        (evt) => this.onClick(evt));
        this.onAnimateWrapper = (/**
         * @param {?} reason
         * @return {?}
         */
        (reason) => this.animationEnd(reason));
        this.opts = this.config.getDefaultConfig();
        this.parseOptions(this.opts);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyUp(event) {
        /** @type {?} */
        const keyCode = this.utilService.getKeyCodeFromEvent(event);
        if (this.ignoreKeyPress(keyCode)) {
            return;
        }
        if (keyCode === KeyCode.esc) {
            this.closeSelector(CalToggle.CloseByEsc);
        }
        else {
            const { dateRange, dateFormat, monthLabels, dateRangeDatesDelimiter } = this.opts;
            /** @type {?} */
            const value = this.getHostValue();
            /** @type {?} */
            let dateModel = null;
            /** @type {?} */
            let valid = false;
            if (!dateRange) {
                /** @type {?} */
                const date = this.utilService.isDateValid(value, this.opts);
                valid = this.utilService.isInitializedDate(date);
                if (valid) {
                    dateModel = this.utilService.getDateModel(date, null, dateFormat, monthLabels, dateRangeDatesDelimiter);
                }
            }
            else {
                /** @type {?} */
                const range = this.utilService.isDateValidDateRange(value, this.opts);
                const { begin, end } = range;
                valid = this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end);
                if (valid) {
                    dateModel = this.utilService.getDateModel(null, range, dateFormat, monthLabels, dateRangeDatesDelimiter);
                }
            }
            this.onChangeCb(dateModel);
            this.onTouchedCb();
            this.emitInputFieldChanged(value, valid);
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        const { inputFieldValidation, dateRange, dateFormat, monthLabels, dateRangeDatesDelimiter, closeSelectorOnDateSelect } = this.opts;
        if (inputFieldValidation) {
            /** @type {?} */
            const value = this.getHostValue();
            /** @type {?} */
            let valid = false;
            if (!dateRange) {
                /** @type {?} */
                const date = this.utilService.isDateValid(value, this.opts);
                valid = this.utilService.isInitializedDate(date);
                if (valid && this.hostText !== value) {
                    // Valid date
                    /** @type {?} */
                    const dateModel = this.utilService.getDateModel(date, null, dateFormat, monthLabels, dateRangeDatesDelimiter);
                    this.emitDateChanged(dateModel);
                    this.updateModel(dateModel);
                    if (closeSelectorOnDateSelect) {
                        this.closeSelector(CalToggle.CloseByDateSel);
                    }
                }
            }
            else {
                /** @type {?} */
                const dateRange = this.utilService.isDateValidDateRange(value, this.opts);
                const { begin, end } = dateRange;
                valid = this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end);
                if (valid && this.hostText !== value) {
                    // Valid date range
                    /** @type {?} */
                    const dateModel = this.utilService.getDateModel(null, dateRange, dateFormat, monthLabels, dateRangeDatesDelimiter);
                    this.emitDateChanged(dateModel);
                    this.updateModel(dateModel);
                    if (closeSelectorOnDateSelect) {
                        this.closeSelector(CalToggle.CloseByDateSel);
                    }
                }
            }
            if (!valid && this.hostText !== value) {
                if (value === EMPTY_STR) {
                    this.clearDate();
                }
                else {
                    this.onChangeCb(null);
                }
            }
            this.hostText = value;
        }
        this.onTouchedCb();
    }
    /**
     * @private
     * @param {?} evt
     * @return {?}
     */
    onClick(evt) {
        if (this.opts.closeSelectorOnDocumentClick && !this.preventClose && evt.target && this.cRef !== null && this.elem.nativeElement !== evt.target && !this.cRef.location.nativeElement.contains(evt.target) && !this.disabled) {
            this.closeSelector(CalToggle.CloseByOutClick);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty(LOCALE)) {
            this.setLocaleOptions();
        }
        if (changes.hasOwnProperty(DEFAULT_MONTH)) {
            /** @type {?} */
            let dm = changes[DEFAULT_MONTH].currentValue;
            if (typeof dm === OBJECT) {
                dm = dm.defMonth;
            }
            this.defaultMonth = dm;
        }
        if (changes.hasOwnProperty(OPTIONS)) {
            this.parseOptions(changes[OPTIONS].currentValue);
        }
        if (this.cRef !== null) {
            this.cRef.instance.refreshComponent(this.opts);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.closeCalendar();
    }
    /**
     * @return {?}
     */
    setLocaleOptions() {
        /** @type {?} */
        const opts = this.localeService.getLocaleOptions(this.locale);
        Object.keys(opts).forEach((/**
         * @param {?} k
         * @return {?}
         */
        (k) => {
            ((/** @type {?} */ (this.opts)))[k] = opts[k];
        }));
    }
    /**
     * @param {?} opts
     * @return {?}
     */
    parseOptions(opts) {
        if (opts !== undefined) {
            Object.keys(opts).forEach((/**
             * @param {?} k
             * @return {?}
             */
            (k) => {
                ((/** @type {?} */ (this.opts)))[k] = opts[k];
            }));
        }
        if (this.opts.minYear < Year.min) {
            this.opts.minYear = Year.min;
        }
        if (this.opts.maxYear > Year.max) {
            this.opts.maxYear = Year.max;
        }
        if (this.opts.openSelectorTopOfInput || this.opts.inline) {
            this.opts.showSelectorArrow = false;
        }
        if (this.opts.inline) {
            this.openCalendar();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this.disabled) {
            return;
        }
        const { dateFormat, monthLabels, dateRangeDatesDelimiter } = this.opts;
        if (!value) {
            this.setHostValue(EMPTY_STR);
            this.emitInputFieldChanged(EMPTY_STR, false);
            if (this.cRef !== null) {
                this.cRef.instance.resetDateValue();
            }
        }
        else if (!value.isRange && value.singleDate) {
            // single date
            let { date, jsDate } = value.singleDate;
            if (!date) {
                date = this.jsDateToMyDate(jsDate);
            }
            /** @type {?} */
            const formatted = this.utilService.formatDate(date, dateFormat, monthLabels);
            /** @type {?} */
            const valid = this.utilService.isInitializedDate(this.utilService.isDateValid(formatted, this.opts));
            if (valid) {
                this.setHostValue(formatted);
                this.emitInputFieldChanged(formatted, valid);
                if (this.cRef !== null) {
                    this.cRef.instance.setDateValue(date);
                }
            }
        }
        else if (value.isRange && value.dateRange) {
            // date range
            let { beginDate, beginJsDate, endDate, endJsDate } = value.dateRange;
            if (!beginDate || !endDate) {
                beginDate = this.jsDateToMyDate(beginJsDate);
                endDate = this.jsDateToMyDate(endJsDate);
            }
            /** @type {?} */
            const formatted = this.utilService.formatDate(beginDate, dateFormat, monthLabels) + dateRangeDatesDelimiter +
                this.utilService.formatDate(endDate, dateFormat, monthLabels);
            const { begin, end } = this.utilService.isDateValidDateRange(formatted, this.opts);
            /** @type {?} */
            const valid = this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end);
            if (valid) {
                this.setHostValue(formatted);
                this.emitInputFieldChanged(formatted, valid);
                if (this.cRef !== null) {
                    this.cRef.instance.setDateRangeValue(beginDate, endDate);
                }
            }
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCb = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCb = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.renderer.setProperty(this.elem.nativeElement, DISABLED, isDisabled);
        if (isDisabled) {
            this.closeCalendar();
        }
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        /** @type {?} */
        const value = this.getHostValue();
        if (value === null || value === EMPTY_STR) {
            return null;
        }
        if (!this.opts.dateRange) {
            /** @type {?} */
            const date = this.utilService.isDateValid(value, this.opts);
            if (!this.utilService.isInitializedDate(date)) {
                return { invalidDateFormat: true };
            }
        }
        else {
            const { begin, end } = this.utilService.isDateValidDateRange(value, this.opts);
            if (!this.utilService.isInitializedDate(begin) || !this.utilService.isInitializedDate(end)) {
                return { invalidDateFormat: true };
            }
        }
        return null;
    }
    /**
     * @return {?}
     */
    openCalendar() {
        if (this.disabled) {
            return;
        }
        this.preventClose = true;
        this.cdr.detectChanges();
        if (this.cRef === null) {
            this.cRef = this.vcRef.createComponent(this.cfr.resolveComponentFactory(CalendarComponent));
            this.appendSelector(this.cRef.location.nativeElement);
            this.cRef.instance.initializeComponent(this.opts, this.defaultMonth, this.getSelectorPosition(this.elem.nativeElement), this.getHostValue(), (/**
             * @param {?} dm
             * @param {?} close
             * @return {?}
             */
            (dm, close) => {
                this.focusToInput();
                this.emitDateChanged(dm);
                this.emitInputFieldChanged(this.utilService.getFormattedDate(dm), true);
                this.updateModel(dm);
                if (close) {
                    this.closeSelector(CalToggle.CloseByDateSel);
                }
            }), (/**
             * @param {?} cvc
             * @return {?}
             */
            (cvc) => {
                this.emitCalendarChanged(cvc);
            }), (/**
             * @param {?} rds
             * @return {?}
             */
            (rds) => {
                this.emitRangeDateSelection(rds);
            }), (/**
             * @return {?}
             */
            () => {
                this.closeSelector(CalToggle.CloseByEsc);
            }));
            this.emitCalendarToggle(CalToggle.Open);
            if (!this.opts.inline) {
                document.addEventListener(CLICK, this.onClickWrapper);
            }
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.preventClose = false;
        }), PREVENT_CLOSE_TIMEOUT);
    }
    /**
     * @return {?}
     */
    closeCalendar() {
        this.closeSelector(CalToggle.CloseByCalBtn);
    }
    /**
     * @return {?}
     */
    toggleCalendar() {
        if (this.disabled) {
            return;
        }
        /** @type {?} */
        const isOpen = this.cRef === null;
        if (isOpen) {
            this.openCalendar();
        }
        else {
            this.closeSelector(CalToggle.CloseByCalBtn);
        }
        return isOpen;
    }
    /**
     * @return {?}
     */
    clearDate() {
        if (this.disabled) {
            return;
        }
        this.setHostValue(EMPTY_STR);
        this.emitDateChanged({
            isRange: this.opts.dateRange,
            singleDate: {
                date: this.utilService.resetDate(),
                jsDate: null,
                formatted: EMPTY_STR,
                epoc: 0
            },
            dateRange: {
                beginDate: this.utilService.resetDate(),
                beginJsDate: null,
                beginEpoc: 0,
                endDate: this.utilService.resetDate(),
                endJsDate: null,
                endEpoc: 0,
                formatted: EMPTY_STR
            }
        });
        this.onChangeCb(null);
        this.onTouchedCb();
        this.closeSelector(CalToggle.CloseByCalBtn);
    }
    /**
     * @return {?}
     */
    isDateValid() {
        /** @type {?} */
        const value = this.getHostValue();
        if (value === null || value === EMPTY_STR) {
            return false;
        }
        if (!this.opts.dateRange) {
            /** @type {?} */
            const date = this.utilService.isDateValid(value, this.opts);
            if (this.utilService.isInitializedDate(date)) {
                this.emitInputFieldChanged(value, true);
                return true;
            }
        }
        else {
            const { begin, end } = this.utilService.isDateValidDateRange(value, this.opts);
            if (this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end)) {
                this.emitInputFieldChanged(value, true);
                return true;
            }
        }
        this.emitInputFieldChanged(value, false);
        return false;
    }
    /**
     * @private
     * @param {?} keyCode
     * @return {?}
     */
    ignoreKeyPress(keyCode) {
        return keyCode === KeyCode.leftArrow || keyCode === KeyCode.rightArrow || keyCode === KeyCode.upArrow || keyCode === KeyCode.downArrow || keyCode === KeyCode.tab || keyCode === KeyCode.shift;
    }
    /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    animationEnd(reason) {
        if (this.cRef !== null) {
            this.cRef.instance.selectorEl.nativeElement.removeEventListener(ANIMATION_END, this.onAnimateWrapper);
            this.removeComponent();
            this.emitCalendarToggle(reason);
        }
    }
    /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    closeSelector(reason) {
        const { inline, calendarAnimation } = this.opts;
        if (this.cRef !== null && !inline) {
            if (calendarAnimation.out !== CalAnimation.None) {
                const { instance } = this.cRef;
                instance.selectorEl.nativeElement.addEventListener(ANIMATION_END, this.onAnimateWrapper.bind(this, reason));
                instance.setCalendarAnimation(calendarAnimation, false);
                // In case the animationend event is not fired
                setTimeout(this.onAnimateWrapper.bind(this, reason), ANIMATION_TIMEOUT);
            }
            else {
                this.removeComponent();
                this.emitCalendarToggle(reason);
            }
            document.removeEventListener(CLICK, this.onClickWrapper);
        }
    }
    /**
     * @private
     * @return {?}
     */
    removeComponent() {
        if (this.vcRef !== null) {
            this.vcRef.remove(this.vcRef.indexOf(this.cRef.hostView));
            this.cRef = null;
        }
    }
    /**
     * @private
     * @param {?} model
     * @return {?}
     */
    updateModel(model) {
        this.setHostValue(this.utilService.getFormattedDate(model));
        this.onChangeCb(model);
        this.onTouchedCb();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    setHostValue(value) {
        const { divHostElement } = this.opts;
        this.hostText = value;
        /** @type {?} */
        const valueType = !divHostElement.enabled ? VALUE : INNER_HTML;
        value = valueType === INNER_HTML && value === EMPTY_STR ? divHostElement.placeholder : value;
        this.renderer.setProperty(this.elem.nativeElement, valueType, value);
    }
    /**
     * @private
     * @return {?}
     */
    getHostValue() {
        const { value, innerHTML } = this.elem.nativeElement;
        return !this.opts.divHostElement.enabled ? value : innerHTML;
    }
    /**
     * @private
     * @return {?}
     */
    focusToInput() {
        const { focusInputOnDateSelect, divHostElement } = this.opts;
        if (focusInputOnDateSelect && !divHostElement.enabled) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.elem.nativeElement.focus();
            }));
        }
    }
    /**
     * @private
     * @param {?} dateModel
     * @return {?}
     */
    emitDateChanged(dateModel) {
        this.dateChanged.emit(dateModel);
    }
    /**
     * @private
     * @param {?} value
     * @param {?} valid
     * @return {?}
     */
    emitInputFieldChanged(value, valid) {
        this.inputFieldChanged.emit({ value, dateFormat: this.opts.dateFormat, valid });
    }
    /**
     * @private
     * @param {?} cvc
     * @return {?}
     */
    emitCalendarChanged(cvc) {
        this.calendarViewChanged.emit(cvc);
    }
    /**
     * @private
     * @param {?} rds
     * @return {?}
     */
    emitRangeDateSelection(rds) {
        this.rangeDateSelection.emit(rds);
    }
    /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    emitCalendarToggle(reason) {
        this.calendarToggle.emit(reason);
    }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    jsDateToMyDate(date) {
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    }
    /**
     * @private
     * @param {?} elem
     * @return {?}
     */
    appendSelector(elem) {
        if (this.opts.appendSelectorToBody) {
            document.querySelector(BODY).appendChild(elem);
        }
    }
    /**
     * @private
     * @param {?} elem
     * @return {?}
     */
    getSelectorPosition(elem) {
        /** @type {?} */
        let top = 0;
        /** @type {?} */
        let left = 0;
        const { appendSelectorToBody, openSelectorTopOfInput, selectorHeight, selectorWidth, showSelectorArrow, alignSelectorRight } = this.opts;
        if (appendSelectorToBody) {
            /** @type {?} */
            const b = document.body.getBoundingClientRect();
            /** @type {?} */
            const e = elem.getBoundingClientRect();
            top = e.top - b.top;
            left = e.left - b.left;
        }
        if (openSelectorTopOfInput) {
            top = top - this.getSelectorDimension(selectorHeight) - 2;
        }
        else {
            top = top + elem.offsetHeight + (showSelectorArrow ? 12 : 2);
        }
        if (alignSelectorRight) {
            left = left + elem.offsetWidth - this.getSelectorDimension(selectorWidth);
        }
        return { top: top + PX, left: left + PX };
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    getSelectorDimension(value) {
        return Number(value.replace(PX, EMPTY_STR));
    }
}
AngularMyDatePickerDirective.decorators = [
    { type: Directive, args: [{
                selector: "[angular-mydatepicker]",
                exportAs: "angular-mydatepicker",
                providers: [UtilService, LocaleService, DefaultConfigService, NGX_DP_VALUE_ACCESSOR, NGX_DP_VALIDATORS]
            },] }
];
/** @nocollapse */
AngularMyDatePickerDirective.ctorParameters = () => [
    { type: LocaleService },
    { type: UtilService },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: DefaultConfigService }
];
AngularMyDatePickerDirective.propDecorators = {
    options: [{ type: Input }],
    locale: [{ type: Input }],
    defaultMonth: [{ type: Input }],
    dateChanged: [{ type: Output }],
    inputFieldChanged: [{ type: Output }],
    calendarViewChanged: [{ type: Output }],
    calendarToggle: [{ type: Output }],
    rangeDateSelection: [{ type: Output }],
    onKeyUp: [{ type: HostListener, args: [KEYUP, ["$event"],] }],
    onBlur: [{ type: HostListener, args: [BLUR,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularMyDatePickerCalendarDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const { inline, selectorHeight, selectorWidth, selectorPos } = this.libAngularMyDatePickerCalendar;
        const { style } = this.el.nativeElement;
        style.height = selectorHeight;
        style.width = selectorWidth;
        style.top = !inline ? selectorPos.top : "0";
        style.left = !inline ? selectorPos.left : "0";
    }
}
AngularMyDatePickerCalendarDirective.decorators = [
    { type: Directive, args: [{
                selector: "[libAngularMyDatePickerCalendar]"
            },] }
];
/** @nocollapse */
AngularMyDatePickerCalendarDirective.ctorParameters = () => [
    { type: ElementRef }
];
AngularMyDatePickerCalendarDirective.propDecorators = {
    libAngularMyDatePickerCalendar: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularMyDatePickerModule {
}
AngularMyDatePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                declarations: [
                    CalendarComponent,
                    SelectionBarComponent,
                    DayViewComponent,
                    MonthViewComponent,
                    YearViewComponent,
                    AngularMyDatePickerDirective,
                    AngularMyDatePickerCalendarDirective
                ],
                entryComponents: [CalendarComponent],
                exports: [
                    CalendarComponent,
                    SelectionBarComponent,
                    DayViewComponent,
                    MonthViewComponent,
                    YearViewComponent,
                    AngularMyDatePickerDirective,
                    AngularMyDatePickerCalendarDirective
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularMyDatePickerModule, AngularMyDatePickerDirective, CalendarComponent, DayViewComponent, MonthViewComponent, YearViewComponent, SelectionBarComponent, UtilService, DefaultConfigService, LocaleService, AngularMyDatePickerCalendarDirective, CalToggle, KeyCode, KeyName, MonthId, Year, DefaultView, CalAnimation, D, DD, M, MM, MMM, Y, YYYY, DATE_ROW_COUNT, DATE_COL_COUNT, MONTH_ROW_COUNT, MONTH_COL_COUNT, YEAR_ROW_COUNT, YEAR_COL_COUNT, DOT, UNDER_LINE, PIPE, YEAR_SEPARATOR, SU, MO, TU, WE, TH, FR, SA, DEFAULT_LOCALE, ZERO_STR, EMPTY_STR, CLICK, KEYUP, BLUR, DISABLED, BODY, VALUE, OPTIONS, DEFAULT_MONTH, LOCALE, OBJECT, PX, STYLE, INNER_HTML, OPTS, YEARS_DURATION, YEARS, VISIBLE_MONTH, SELECT_MONTH, SELECT_YEAR, PREV_VIEW_DISABLED, NEXT_VIEW_DISABLED, DATES, WEEK_DAYS, SELECTED_DATE, SELECTED_DATE_RANGE, MONTHS, ANIMATION_END, ANIMATION_TIMEOUT, MY_DP_ANIMATION, ANIMATION_NAMES, IN, OUT, TABINDEX, TD_SELECTOR, PREVENT_CLOSE_TIMEOUT };

//# sourceMappingURL=angular-mydatepicker.js.map