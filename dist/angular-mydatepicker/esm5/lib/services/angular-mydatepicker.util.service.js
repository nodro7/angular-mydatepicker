/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { KeyCode } from "../enums/key-code.enum";
import { KeyName } from "../enums/key-name.enum";
import { D, DD, M, MM, MMM, YYYY, SU, MO, TU, WE, TH, FR, SA, ZERO_STR, EMPTY_STR, PIPE } from "../constants/constants";
var UtilService = /** @class */ (function () {
    function UtilService() {
        this.weekDays = [SU, MO, TU, WE, TH, FR, SA];
    }
    /**
     * @param {?} dateStr
     * @param {?} options
     * @return {?}
     */
    UtilService.prototype.isDateValid = /**
     * @param {?} dateStr
     * @param {?} options
     * @return {?}
     */
    function (dateStr, options) {
        var dateFormat = options.dateFormat, minYear = options.minYear, maxYear = options.maxYear, monthLabels = options.monthLabels;
        /** @type {?} */
        var returnDate = this.resetDate();
        /** @type {?} */
        var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        /** @type {?} */
        var isMonthStr = dateFormat.indexOf(MMM) !== -1;
        /** @type {?} */
        var delimeters = dateFormat.match(/[^(dmy)]{1,}/g);
        if (!dateStr || dateStr === EMPTY_STR) {
            return returnDate;
        }
        /** @type {?} */
        var dateValue = this.getDateValue(dateStr, dateFormat, delimeters);
        /** @type {?} */
        var year = this.getNumberByValue(dateValue[0]);
        /** @type {?} */
        var month = isMonthStr ? this.getMonthNumberByMonthName(dateValue[1], monthLabels) : this.getNumberByValue(dateValue[1]);
        /** @type {?} */
        var day = this.getNumberByValue(dateValue[2]);
        if (month !== -1 && day !== -1 && year !== -1) {
            if (year < minYear || year > maxYear || month < 1 || month > 12) {
                return returnDate;
            }
            /** @type {?} */
            var date = { year: year, month: month, day: day };
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
    };
    /**
     * @param {?} dateRangeStr
     * @param {?} options
     * @return {?}
     */
    UtilService.prototype.isDateValidDateRange = /**
     * @param {?} dateRangeStr
     * @param {?} options
     * @return {?}
     */
    function (dateRangeStr, options) {
        /** @type {?} */
        var dateRange = { begin: this.resetDate(), end: this.resetDate() };
        if (dateRangeStr && dateRangeStr.length) {
            /** @type {?} */
            var dates = dateRangeStr.split(options.dateRangeDatesDelimiter);
            if (dates && dates.length === 2) {
                var _a = tslib_1.__read(dates, 2), beginDate = _a[0], endDate = _a[1];
                /** @type {?} */
                var begin = this.isDateValid(beginDate, options);
                if (this.isInitializedDate(begin)) {
                    /** @type {?} */
                    var end = this.isDateValid(endDate, options);
                    if (this.isInitializedDate(end) && this.isDateSameOrEarlier(begin, end)) {
                        dateRange = { begin: begin, end: end };
                    }
                }
            }
        }
        return dateRange;
    };
    /**
     * @param {?} dateStr
     * @param {?} dateFormat
     * @param {?} delimeters
     * @return {?}
     */
    UtilService.prototype.getDateValue = /**
     * @param {?} dateStr
     * @param {?} dateFormat
     * @param {?} delimeters
     * @return {?}
     */
    function (dateStr, dateFormat, delimeters) {
        /** @type {?} */
        var del = delimeters[0];
        if (delimeters[0] !== delimeters[1]) {
            del = delimeters[0] + delimeters[1];
        }
        /** @type {?} */
        var re = new RegExp("[" + del + "]");
        /** @type {?} */
        var ds = dateStr.split(re);
        /** @type {?} */
        var df = dateFormat.split(re);
        /** @type {?} */
        var da = [];
        for (var i = 0; i < df.length; i++) {
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
    };
    /**
     * @param {?} df
     * @param {?} monthLabels
     * @return {?}
     */
    UtilService.prototype.getMonthNumberByMonthName = /**
     * @param {?} df
     * @param {?} monthLabels
     * @return {?}
     */
    function (df, monthLabels) {
        if (df.value) {
            for (var key = 1; key <= 12; key++) {
                if (df.value.toLowerCase() === monthLabels[key].toLowerCase()) {
                    return key;
                }
            }
        }
        return -1;
    };
    /**
     * @param {?} df
     * @return {?}
     */
    UtilService.prototype.getNumberByValue = /**
     * @param {?} df
     * @return {?}
     */
    function (df) {
        if (!/^\d+$/.test(df.value)) {
            return -1;
        }
        /** @type {?} */
        var nbr = Number(df.value);
        if (df.format.length === 1 && df.value.length !== 1 && nbr < 10 || df.format.length === 1 && df.value.length !== 2 && nbr >= 10) {
            nbr = -1;
        }
        else if (df.format.length === 2 && df.value.length > 2) {
            nbr = -1;
        }
        return nbr;
    };
    /**
     * @param {?} monthString
     * @return {?}
     */
    UtilService.prototype.parseDefaultMonth = /**
     * @param {?} monthString
     * @return {?}
     */
    function (monthString) {
        /** @type {?} */
        var month = { monthTxt: EMPTY_STR, monthNbr: 0, year: 0 };
        if (monthString !== EMPTY_STR) {
            /** @type {?} */
            var split = monthString.split(monthString.match(/[^0-9]/)[0]);
            month.monthNbr = split[0].length === 2 ? Number(split[0]) : Number(split[1]);
            month.year = split[0].length === 2 ? Number(split[1]) : Number(split[0]);
        }
        return month;
    };
    /**
     * @param {?} date
     * @param {?} options
     * @return {?}
     */
    UtilService.prototype.isDisabledDate = /**
     * @param {?} date
     * @param {?} options
     * @return {?}
     */
    function (date, options) {
        var e_1, _a, e_2, _b, e_3, _c;
        var minYear = options.minYear, maxYear = options.maxYear, disableUntil = options.disableUntil, disableSince = options.disableSince, disableWeekends = options.disableWeekends, disableDates = options.disableDates, disableDateRanges = options.disableDateRanges, disableWeekdays = options.disableWeekdays, enableDates = options.enableDates;
        try {
            for (var enableDates_1 = tslib_1.__values(enableDates), enableDates_1_1 = enableDates_1.next(); !enableDates_1_1.done; enableDates_1_1 = enableDates_1.next()) {
                var d = enableDates_1_1.value;
                if ((d.year === 0 || d.year === date.year) && (d.month === 0 || d.month === date.month) && d.day === date.day) {
                    return false;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (enableDates_1_1 && !enableDates_1_1.done && (_a = enableDates_1.return)) _a.call(enableDates_1);
            }
            finally { if (e_1) throw e_1.error; }
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
            var dayNbr = this.getDayNumber(date);
            if (dayNbr === 0 || dayNbr === 6) {
                return true;
            }
        }
        /** @type {?} */
        var dn = this.getDayNumber(date);
        if (disableWeekdays.length > 0) {
            try {
                for (var disableWeekdays_1 = tslib_1.__values(disableWeekdays), disableWeekdays_1_1 = disableWeekdays_1.next(); !disableWeekdays_1_1.done; disableWeekdays_1_1 = disableWeekdays_1.next()) {
                    var wd = disableWeekdays_1_1.value;
                    if (dn === this.getWeekdayIndex(wd)) {
                        return true;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (disableWeekdays_1_1 && !disableWeekdays_1_1.done && (_b = disableWeekdays_1.return)) _b.call(disableWeekdays_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        try {
            for (var disableDates_1 = tslib_1.__values(disableDates), disableDates_1_1 = disableDates_1.next(); !disableDates_1_1.done; disableDates_1_1 = disableDates_1.next()) {
                var d = disableDates_1_1.value;
                if ((d.year === 0 || d.year === date.year) && (d.month === 0 || d.month === date.month) && d.day === date.day) {
                    return true;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (disableDates_1_1 && !disableDates_1_1.done && (_c = disableDates_1.return)) _c.call(disableDates_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        if (this.isDisabledByDisableDateRange(date, date, disableDateRanges)) {
            return true;
        }
        return false;
    };
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} daysInMonth
     * @param {?} options
     * @return {?}
     */
    UtilService.prototype.isDisabledMonth = /**
     * @param {?} year
     * @param {?} month
     * @param {?} daysInMonth
     * @param {?} options
     * @return {?}
     */
    function (year, month, daysInMonth, options) {
        var disableUntil = options.disableUntil, disableSince = options.disableSince, disableDateRanges = options.disableDateRanges;
        /** @type {?} */
        var dateEnd = { year: year, month: month, day: daysInMonth };
        /** @type {?} */
        var dateBegin = { year: year, month: month, day: 1 };
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
    };
    /**
     * @param {?} year
     * @param {?} options
     * @return {?}
     */
    UtilService.prototype.isDisabledYear = /**
     * @param {?} year
     * @param {?} options
     * @return {?}
     */
    function (year, options) {
        var disableUntil = options.disableUntil, disableSince = options.disableSince, disableDateRanges = options.disableDateRanges, minYear = options.minYear, maxYear = options.maxYear;
        /** @type {?} */
        var dateEnd = { year: year, month: 12, day: 31 };
        /** @type {?} */
        var dateBegin = { year: year, month: 1, day: 1 };
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
    };
    /**
     * @param {?} date
     * @param {?} disableUntil
     * @return {?}
     */
    UtilService.prototype.isDisabledByDisableUntil = /**
     * @param {?} date
     * @param {?} disableUntil
     * @return {?}
     */
    function (date, disableUntil) {
        return this.isInitializedDate(disableUntil) && this.getTimeInMilliseconds(date) <= this.getTimeInMilliseconds(disableUntil);
    };
    /**
     * @param {?} date
     * @param {?} disableSince
     * @return {?}
     */
    UtilService.prototype.isDisabledByDisableSince = /**
     * @param {?} date
     * @param {?} disableSince
     * @return {?}
     */
    function (date, disableSince) {
        return this.isInitializedDate(disableSince) && this.getTimeInMilliseconds(date) >= this.getTimeInMilliseconds(disableSince);
    };
    /**
     * @param {?} dateBegin
     * @param {?} dateEnd
     * @param {?} disableDateRanges
     * @return {?}
     */
    UtilService.prototype.isDisabledByDisableDateRange = /**
     * @param {?} dateBegin
     * @param {?} dateEnd
     * @param {?} disableDateRanges
     * @return {?}
     */
    function (dateBegin, dateEnd, disableDateRanges) {
        var e_4, _a;
        /** @type {?} */
        var dateMsBegin = this.getTimeInMilliseconds(dateBegin);
        /** @type {?} */
        var dateMsEnd = this.getTimeInMilliseconds(dateEnd);
        try {
            for (var disableDateRanges_1 = tslib_1.__values(disableDateRanges), disableDateRanges_1_1 = disableDateRanges_1.next(); !disableDateRanges_1_1.done; disableDateRanges_1_1 = disableDateRanges_1.next()) {
                var d = disableDateRanges_1_1.value;
                if (this.isInitializedDate(d.begin) && this.isInitializedDate(d.end)
                    && dateMsBegin >= this.getTimeInMilliseconds(d.begin) && dateMsEnd <= this.getTimeInMilliseconds(d.end)) {
                    return true;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (disableDateRanges_1_1 && !disableDateRanges_1_1.done && (_a = disableDateRanges_1.return)) _a.call(disableDateRanges_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return false;
    };
    /**
     * @param {?} date
     * @param {?} markedDates
     * @param {?} markWeekends
     * @return {?}
     */
    UtilService.prototype.isMarkedDate = /**
     * @param {?} date
     * @param {?} markedDates
     * @param {?} markWeekends
     * @return {?}
     */
    function (date, markedDates, markWeekends) {
        var e_5, _a, e_6, _b;
        try {
            for (var markedDates_1 = tslib_1.__values(markedDates), markedDates_1_1 = markedDates_1.next(); !markedDates_1_1.done; markedDates_1_1 = markedDates_1.next()) {
                var md = markedDates_1_1.value;
                try {
                    for (var _c = tslib_1.__values(md.dates), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var d = _d.value;
                        if ((d.year === 0 || d.year === date.year) && (d.month === 0 || d.month === date.month) && d.day === date.day) {
                            return { marked: true, color: md.color };
                        }
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (markedDates_1_1 && !markedDates_1_1.done && (_a = markedDates_1.return)) _a.call(markedDates_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        if (markWeekends && markWeekends.marked) {
            /** @type {?} */
            var dayNbr = this.getDayNumber(date);
            if (dayNbr === 0 || dayNbr === 6) {
                return { marked: true, color: markWeekends.color };
            }
        }
        return { marked: false, color: EMPTY_STR };
    };
    /**
     * @param {?} date
     * @param {?} sunHighlight
     * @param {?} satHighlight
     * @param {?} highlightDates
     * @return {?}
     */
    UtilService.prototype.isHighlightedDate = /**
     * @param {?} date
     * @param {?} sunHighlight
     * @param {?} satHighlight
     * @param {?} highlightDates
     * @return {?}
     */
    function (date, sunHighlight, satHighlight, highlightDates) {
        var e_7, _a;
        /** @type {?} */
        var dayNbr = this.getDayNumber(date);
        if (sunHighlight && dayNbr === 0 || satHighlight && dayNbr === 6) {
            return true;
        }
        try {
            for (var highlightDates_1 = tslib_1.__values(highlightDates), highlightDates_1_1 = highlightDates_1.next(); !highlightDates_1_1.done; highlightDates_1_1 = highlightDates_1.next()) {
                var d = highlightDates_1_1.value;
                if ((d.year === 0 || d.year === date.year) && (d.month === 0 || d.month === date.month) && d.day === date.day) {
                    return true;
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (highlightDates_1_1 && !highlightDates_1_1.done && (_a = highlightDates_1.return)) _a.call(highlightDates_1);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return false;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.getWeekNumber = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        d.setDate(d.getDate() + (d.getDay() === 0 ? -3 : 4 - d.getDay()));
        return Math.round(((d.getTime() - new Date(d.getFullYear(), 0, 4).getTime()) / 86400000) / 7) + 1;
    };
    /**
     * @param {?} date
     * @param {?} dateRange
     * @param {?} dateFormat
     * @param {?} monthLabels
     * @param {?} rangeDelimiter
     * @param {?=} dateStr
     * @return {?}
     */
    UtilService.prototype.getDateModel = /**
     * @param {?} date
     * @param {?} dateRange
     * @param {?} dateFormat
     * @param {?} monthLabels
     * @param {?} rangeDelimiter
     * @param {?=} dateStr
     * @return {?}
     */
    function (date, dateRange, dateFormat, monthLabels, rangeDelimiter, dateStr) {
        if (dateStr === void 0) { dateStr = EMPTY_STR; }
        /** @type {?} */
        var singleDateModel = null;
        /** @type {?} */
        var dateRangeModel = null;
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
    };
    /**
     * @param {?} date
     * @param {?} dateFormat
     * @param {?} monthLabels
     * @return {?}
     */
    UtilService.prototype.formatDate = /**
     * @param {?} date
     * @param {?} dateFormat
     * @param {?} monthLabels
     * @return {?}
     */
    function (date, dateFormat, monthLabels) {
        /** @type {?} */
        var formatted = dateFormat.replace(YYYY, String(date.year));
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
    };
    /**
     * @param {?} model
     * @return {?}
     */
    UtilService.prototype.getFormattedDate = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        return !model.isRange ? model.singleDate.formatted : model.dateRange.formatted;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    UtilService.prototype.preZero = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return val < 10 ? ZERO_STR + val : String(val);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.isInitializedDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.year !== 0 && date.month !== 0 && date.day !== 0;
    };
    /**
     * @param {?} firstDate
     * @param {?} secondDate
     * @return {?}
     */
    UtilService.prototype.isDateEarlier = /**
     * @param {?} firstDate
     * @param {?} secondDate
     * @return {?}
     */
    function (firstDate, secondDate) {
        return this.getTimeInMilliseconds(firstDate) < this.getTimeInMilliseconds(secondDate);
    };
    /**
     * @param {?} firstDate
     * @param {?} secondDate
     * @return {?}
     */
    UtilService.prototype.isDateSameOrEarlier = /**
     * @param {?} firstDate
     * @param {?} secondDate
     * @return {?}
     */
    function (firstDate, secondDate) {
        return this.getTimeInMilliseconds(firstDate) <= this.getTimeInMilliseconds(secondDate);
    };
    /**
     * @param {?} firstDate
     * @param {?} secondDate
     * @return {?}
     */
    UtilService.prototype.isDateSame = /**
     * @param {?} firstDate
     * @param {?} secondDate
     * @return {?}
     */
    function (firstDate, secondDate) {
        return this.getTimeInMilliseconds(firstDate) === this.getTimeInMilliseconds(secondDate);
    };
    /**
     * @param {?} dateRange
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.isDateRangeBeginOrEndSame = /**
     * @param {?} dateRange
     * @param {?} date
     * @return {?}
     */
    function (dateRange, date) {
        /** @type {?} */
        var dateMs = this.getTimeInMilliseconds(date);
        return this.getTimeInMilliseconds(dateRange.begin) === dateMs || this.getTimeInMilliseconds(dateRange.end) === dateMs;
    };
    /**
     * @param {?} date
     * @param {?} dateRange
     * @return {?}
     */
    UtilService.prototype.isDateInRange = /**
     * @param {?} date
     * @param {?} dateRange
     * @return {?}
     */
    function (date, dateRange) {
        if (!this.isInitializedDate(dateRange.begin) || !this.isInitializedDate(dateRange.end)) {
            return false;
        }
        return this.isDateSameOrEarlier(dateRange.begin, date) && this.isDateSameOrEarlier(date, dateRange.end);
    };
    /**
     * @return {?}
     */
    UtilService.prototype.resetDate = /**
     * @return {?}
     */
    function () {
        return { year: 0, month: 0, day: 0 };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.getTimeInMilliseconds = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.getDate(date).getTime();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.getDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.getDayNumber = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0).getDay();
    };
    /**
     * @param {?} wd
     * @return {?}
     */
    UtilService.prototype.getWeekdayIndex = /**
     * @param {?} wd
     * @return {?}
     */
    function (wd) {
        return this.weekDays.indexOf(wd);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.getEpocTime = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return Math.round(this.getTimeInMilliseconds(date) / 1000.0);
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    UtilService.prototype.getKeyCodeFromEvent = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        /** @type {?} */
        var key = evt.key || evt.keyCode || evt.which;
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
    };
    /**
     * @param {?} key
     * @param {?} keyName
     * @return {?}
     */
    UtilService.prototype.checkKeyName = /**
     * @param {?} key
     * @param {?} keyName
     * @return {?}
     */
    function (key, keyName) {
        /** @type {?} */
        var arr = keyName.split(PIPE);
        return arr.indexOf(key) !== -1;
    };
    UtilService.decorators = [
        { type: Injectable }
    ];
    return UtilService;
}());
export { UtilService };
if (false) {
    /** @type {?} */
    UtilService.prototype.weekDays;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1teWRhdGVwaWNrZXIudXRpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1teWRhdGVwaWNrZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYW5ndWxhci1teWRhdGVwaWNrZXIudXRpbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVl6QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0MsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQy9DLE9BQU8sRUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUV0SDtJQUFBO1FBRUUsYUFBUSxHQUFrQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBOGF6RCxDQUFDOzs7Ozs7SUE1YUMsaUNBQVc7Ozs7O0lBQVgsVUFBWSxPQUFlLEVBQUUsT0FBbUI7UUFDdkMsSUFBQSwrQkFBVSxFQUFFLHlCQUFPLEVBQUUseUJBQU8sRUFBRSxpQ0FBVzs7WUFFMUMsVUFBVSxHQUFZLElBQUksQ0FBQyxTQUFTLEVBQUU7O1lBQ3RDLFdBQVcsR0FBa0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzs7WUFDN0UsVUFBVSxHQUFZLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOztZQUNwRCxVQUFVLEdBQWtCLFVBQVUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO1FBRW5FLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUNyQyxPQUFPLFVBQVUsQ0FBQztTQUNuQjs7WUFFSyxTQUFTLEdBQXlCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7O1lBQ3BGLElBQUksR0FBVyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUNsRCxLQUFLLEdBQVcsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUM1SCxHQUFHLEdBQVcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV2RCxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzdDLElBQUksSUFBSSxHQUFHLE9BQU8sSUFBSSxJQUFJLEdBQUcsT0FBTyxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTtnQkFDL0QsT0FBTyxVQUFVLENBQUM7YUFDbkI7O2dCQUVLLElBQUksR0FBWSxFQUFDLElBQUksTUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLEdBQUcsS0FBQSxFQUFDO1lBRXhDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUU7Z0JBQ3RDLE9BQU8sVUFBVSxDQUFDO2FBQ25CO1lBRUQsSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQzVELFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDckI7WUFFRCxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNDLE9BQU8sVUFBVSxDQUFDO2FBQ25CO1lBRUQsYUFBYTtZQUNiLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDOzs7Ozs7SUFFRCwwQ0FBb0I7Ozs7O0lBQXBCLFVBQXFCLFlBQW9CLEVBQUUsT0FBbUI7O1lBQ3hELFNBQVMsR0FBaUIsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUM7UUFDOUUsSUFBSSxZQUFZLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRTs7Z0JBQ2pDLEtBQUssR0FBa0IsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUM7WUFDaEYsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3pCLElBQUEsNkJBQTRCLEVBQTNCLGlCQUFTLEVBQUUsZUFBZ0I7O29CQUM1QixLQUFLLEdBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDO2dCQUUzRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsRUFBRTs7d0JBQzNCLEdBQUcsR0FBWSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7b0JBRXZELElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUU7d0JBQ3ZFLFNBQVMsR0FBRyxFQUFDLEtBQUssT0FBQSxFQUFFLEdBQUcsS0FBQSxFQUFDLENBQUM7cUJBQzFCO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7Ozs7SUFFRCxrQ0FBWTs7Ozs7O0lBQVosVUFBYSxPQUFlLEVBQUUsVUFBa0IsRUFBRSxVQUF5Qjs7WUFDckUsR0FBRyxHQUFXLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ25DLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JDOztZQUVLLEVBQUUsR0FBUSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQzs7WUFDckMsRUFBRSxHQUFrQixPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQzs7WUFDckMsRUFBRSxHQUFrQixVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQzs7WUFDeEMsRUFBRSxHQUF5QixFQUFFO1FBRW5DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDOUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7YUFDdkM7WUFDRCxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQzNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO2FBQ3ZDO1lBQ0QsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUMzQixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQzthQUN2QztTQUNGO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7Ozs7SUFFRCwrQ0FBeUI7Ozs7O0lBQXpCLFVBQTBCLEVBQWlCLEVBQUUsV0FBMkI7UUFDdEUsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFO1lBQ1osS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDbEMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtvQkFDN0QsT0FBTyxHQUFHLENBQUM7aUJBQ1o7YUFDRjtTQUNGO1FBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNaLENBQUM7Ozs7O0lBRUQsc0NBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQWlCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQixPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ1g7O1lBRUcsR0FBRyxHQUFXLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2xDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRTtZQUMvSCxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDVjthQUNJLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN0RCxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDVjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFRCx1Q0FBaUI7Ozs7SUFBakIsVUFBa0IsV0FBbUI7O1lBQzdCLEtBQUssR0FBYSxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDO1FBQ25FLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTs7Z0JBQ3ZCLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0QsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0UsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUU7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVELG9DQUFjOzs7OztJQUFkLFVBQWUsSUFBYSxFQUFFLE9BQW1COztRQUN4QyxJQUFBLHlCQUFPLEVBQUUseUJBQU8sRUFBRSxtQ0FBWSxFQUFFLG1DQUFZLEVBQUUseUNBQWUsRUFBRSxtQ0FBWSxFQUFFLDZDQUFpQixFQUFFLHlDQUFlLEVBQUUsaUNBQVc7O1lBRW5JLEtBQWdCLElBQUEsZ0JBQUEsaUJBQUEsV0FBVyxDQUFBLHdDQUFBLGlFQUFFO2dCQUF4QixJQUFNLENBQUMsd0JBQUE7Z0JBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUM3RyxPQUFPLEtBQUssQ0FBQztpQkFDZDthQUNGOzs7Ozs7Ozs7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3ZGLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLEVBQUU7WUFDckQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsRUFBRTtZQUNyRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBSSxlQUFlLEVBQUU7O2dCQUNiLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUN0QyxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDaEMsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGOztZQUVLLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztRQUNsQyxJQUFJLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztnQkFDOUIsS0FBaUIsSUFBQSxvQkFBQSxpQkFBQSxlQUFlLENBQUEsZ0RBQUEsNkVBQUU7b0JBQTdCLElBQU0sRUFBRSw0QkFBQTtvQkFDWCxJQUFJLEVBQUUsS0FBSyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFO3dCQUNuQyxPQUFPLElBQUksQ0FBQztxQkFDYjtpQkFDRjs7Ozs7Ozs7O1NBQ0Y7O1lBRUQsS0FBZ0IsSUFBQSxpQkFBQSxpQkFBQSxZQUFZLENBQUEsMENBQUEsb0VBQUU7Z0JBQXpCLElBQU0sQ0FBQyx5QkFBQTtnQkFDVixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQzdHLE9BQU8sSUFBSSxDQUFDO2lCQUNiO2FBQ0Y7Ozs7Ozs7OztRQUVELElBQUksSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsaUJBQWlCLENBQUMsRUFBRTtZQUNwRSxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7OztJQUVELHFDQUFlOzs7Ozs7O0lBQWYsVUFBZ0IsSUFBWSxFQUFFLEtBQWEsRUFBRSxXQUFtQixFQUFFLE9BQW1CO1FBQzVFLElBQUEsbUNBQVksRUFBRSxtQ0FBWSxFQUFFLDZDQUFpQjs7WUFFOUMsT0FBTyxHQUFZLEVBQUMsSUFBSSxNQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBQzs7WUFDbEQsU0FBUyxHQUFZLEVBQUMsSUFBSSxNQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQztRQUVoRCxJQUFJLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLEVBQUU7WUFDeEQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksSUFBSSxDQUFDLHdCQUF3QixDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsRUFBRTtZQUMxRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBSSxJQUFJLENBQUMsNEJBQTRCLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxFQUFFO1lBQzVFLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVELG9DQUFjOzs7OztJQUFkLFVBQWUsSUFBWSxFQUFFLE9BQW1CO1FBQ3ZDLElBQUEsbUNBQVksRUFBRSxtQ0FBWSxFQUFFLDZDQUFpQixFQUFFLHlCQUFPLEVBQUUseUJBQU87O1lBRWhFLE9BQU8sR0FBWSxFQUFDLElBQUksTUFBQSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBQzs7WUFDN0MsU0FBUyxHQUFZLEVBQUMsSUFBSSxNQUFBLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFDO1FBRW5ELElBQUksSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsRUFBRTtZQUN4RCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBSSxJQUFJLENBQUMsd0JBQXdCLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxFQUFFO1lBQzFELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixDQUFDLEVBQUU7WUFDNUUsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksSUFBSSxHQUFHLE9BQU8sSUFBSSxJQUFJLEdBQUcsT0FBTyxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVELDhDQUF3Qjs7Ozs7SUFBeEIsVUFBeUIsSUFBYSxFQUFFLFlBQXFCO1FBQzNELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUgsQ0FBQzs7Ozs7O0lBRUQsOENBQXdCOzs7OztJQUF4QixVQUF5QixJQUFhLEVBQUUsWUFBcUI7UUFDM0QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5SCxDQUFDOzs7Ozs7O0lBRUQsa0RBQTRCOzs7Ozs7SUFBNUIsVUFBNkIsU0FBa0IsRUFBRSxPQUFnQixFQUFFLGlCQUFzQzs7O1lBQ2pHLFdBQVcsR0FBVyxJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDOztZQUMzRCxTQUFTLEdBQVcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQzs7WUFFN0QsS0FBZ0IsSUFBQSxzQkFBQSxpQkFBQSxpQkFBaUIsQ0FBQSxvREFBQSxtRkFBRTtnQkFBOUIsSUFBTSxDQUFDLDhCQUFBO2dCQUNWLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzt1QkFDL0QsV0FBVyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3pHLE9BQU8sSUFBSSxDQUFDO2lCQUNiO2FBQ0Y7Ozs7Ozs7OztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7OztJQUVELGtDQUFZOzs7Ozs7SUFBWixVQUFhLElBQWEsRUFBRSxXQUFrQyxFQUFFLFlBQTJCOzs7WUFDekYsS0FBaUIsSUFBQSxnQkFBQSxpQkFBQSxXQUFXLENBQUEsd0NBQUEsaUVBQUU7Z0JBQXpCLElBQU0sRUFBRSx3QkFBQTs7b0JBQ1gsS0FBZ0IsSUFBQSxLQUFBLGlCQUFBLEVBQUUsQ0FBQyxLQUFLLENBQUEsZ0JBQUEsNEJBQUU7d0JBQXJCLElBQU0sQ0FBQyxXQUFBO3dCQUNWLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRTs0QkFDN0csT0FBTyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUMsQ0FBQzt5QkFDeEM7cUJBQ0Y7Ozs7Ozs7OzthQUNGOzs7Ozs7Ozs7UUFDRCxJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFOztnQkFDakMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3RDLElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNoQyxPQUFPLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLEtBQUssRUFBQyxDQUFDO2FBQ2xEO1NBQ0Y7UUFDRCxPQUFPLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7Ozs7SUFFRCx1Q0FBaUI7Ozs7Ozs7SUFBakIsVUFBa0IsSUFBYSxFQUFFLFlBQXFCLEVBQUUsWUFBcUIsRUFBRSxjQUE4Qjs7O1lBQ3JHLE1BQU0sR0FBVyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztRQUM5QyxJQUFJLFlBQVksSUFBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLFlBQVksSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2hFLE9BQU8sSUFBSSxDQUFDO1NBQ2I7O1lBQ0QsS0FBZ0IsSUFBQSxtQkFBQSxpQkFBQSxjQUFjLENBQUEsOENBQUEsMEVBQUU7Z0JBQTNCLElBQU0sQ0FBQywyQkFBQTtnQkFDVixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQzdHLE9BQU8sSUFBSSxDQUFDO2lCQUNiO2FBQ0Y7Ozs7Ozs7OztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCxtQ0FBYTs7OztJQUFiLFVBQWMsSUFBYTs7WUFDbkIsQ0FBQyxHQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRyxDQUFDOzs7Ozs7Ozs7O0lBRUQsa0NBQVk7Ozs7Ozs7OztJQUFaLFVBQWEsSUFBYSxFQUFFLFNBQXVCLEVBQUUsVUFBa0IsRUFBRSxXQUEyQixFQUFFLGNBQXNCLEVBQUUsT0FBMkI7UUFBM0Isd0JBQUEsRUFBQSxtQkFBMkI7O1lBQ25KLGVBQWUsR0FBdUIsSUFBSTs7WUFDMUMsY0FBYyxHQUFzQixJQUFJO1FBRTVDLElBQUksSUFBSSxFQUFFO1lBQ1IsZUFBZSxHQUFHO2dCQUNoQixJQUFJLE1BQUE7Z0JBQ0osTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUMxQixTQUFTLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDO2dCQUNwRixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7YUFDN0IsQ0FBQztTQUNIO2FBQ0k7WUFDSCxjQUFjLEdBQUc7Z0JBQ2YsU0FBUyxFQUFFLFNBQVMsQ0FBQyxLQUFLO2dCQUMxQixXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2dCQUMxQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2dCQUM1QyxPQUFPLEVBQUUsU0FBUyxDQUFDLEdBQUc7Z0JBQ3RCLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQzthQUNoSixDQUFDO1NBQ0g7UUFFRCxPQUFPO1lBQ0wsT0FBTyxFQUFFLElBQUksS0FBSyxJQUFJO1lBQ3RCLFVBQVUsRUFBRSxlQUFlO1lBQzNCLFNBQVMsRUFBRSxjQUFjO1NBQzFCLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRUQsZ0NBQVU7Ozs7OztJQUFWLFVBQVcsSUFBYSxFQUFFLFVBQWtCLEVBQUUsV0FBMkI7O1lBQ25FLFNBQVMsR0FBVyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5FLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNsQyxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzdEO2FBQ0ksSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3RDLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzdEO2FBQ0k7WUFDSCxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2pDLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzNEO2FBQ0k7WUFDSCxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxzQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsS0FBbUI7UUFDbEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztJQUNqRixDQUFDOzs7OztJQUVELDZCQUFPOzs7O0lBQVAsVUFBUSxHQUFXO1FBQ2pCLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsdUNBQWlCOzs7O0lBQWpCLFVBQWtCLElBQWE7UUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7Ozs7SUFFRCxtQ0FBYTs7Ozs7SUFBYixVQUFjLFNBQWtCLEVBQUUsVUFBbUI7UUFDbkQsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7Ozs7OztJQUVELHlDQUFtQjs7Ozs7SUFBbkIsVUFBb0IsU0FBa0IsRUFBRSxVQUFtQjtRQUN6RCxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7O0lBRUQsZ0NBQVU7Ozs7O0lBQVYsVUFBVyxTQUFrQixFQUFFLFVBQW1CO1FBQ2hELE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxRixDQUFDOzs7Ozs7SUFFRCwrQ0FBeUI7Ozs7O0lBQXpCLFVBQTBCLFNBQXVCLEVBQUUsSUFBYTs7WUFDeEQsTUFBTSxHQUFXLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7UUFDdkQsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLE1BQU0sQ0FBQztJQUN4SCxDQUFDOzs7Ozs7SUFFRCxtQ0FBYTs7Ozs7SUFBYixVQUFjLElBQWEsRUFBRSxTQUF1QjtRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEYsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUcsQ0FBQzs7OztJQUVELCtCQUFTOzs7SUFBVDtRQUNFLE9BQU8sRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsMkNBQXFCOzs7O0lBQXJCLFVBQXNCLElBQWE7UUFDakMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQsNkJBQU87Ozs7SUFBUCxVQUFRLElBQWE7UUFDbkIsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7SUFFRCxrQ0FBWTs7OztJQUFaLFVBQWEsSUFBYTtRQUN4QixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM1RSxDQUFDOzs7OztJQUVELHFDQUFlOzs7O0lBQWYsVUFBZ0IsRUFBVTtRQUN4QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsaUNBQVc7Ozs7SUFBWCxVQUFZLElBQWE7UUFDdkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7OztJQUVELHlDQUFtQjs7OztJQUFuQixVQUFvQixHQUFROztZQUN0QixHQUFHLEdBQVEsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxLQUFLO1FBRWxELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2xFLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQztTQUN0QjthQUNJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQ25FLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQztTQUNwQjthQUNJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ3ZFLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQztTQUN0QjthQUNJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQy9FLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQztTQUMxQjthQUNJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQzNFLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQztTQUN4QjthQUNJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ2pGLE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQztTQUMzQjthQUNJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFHLEdBQUcsS0FBSyxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQzlFLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQztTQUMxQjthQUNJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQ25FLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQztTQUNwQjthQUNJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ3ZFLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQztTQUN0QjthQUNJO1lBQ0gsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7Ozs7OztJQUVELGtDQUFZOzs7OztJQUFaLFVBQWEsR0FBVyxFQUFFLE9BQWU7O1lBQ2pDLEdBQUcsR0FBa0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDOUMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQS9hRixVQUFVOztJQWdiWCxrQkFBQztDQUFBLEFBaGJELElBZ2JDO1NBL2FZLFdBQVc7OztJQUN0QiwrQkFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0lNeURhdGVNb2RlbH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbXktZGF0ZS1tb2RlbC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15U2luZ2xlRGF0ZU1vZGVsfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9teS1zaW5nbGUtZGF0ZS1tb2RlbC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15RGF0ZVJhbmdlTW9kZWx9IGZyb20gXCIuLi9pbnRlcmZhY2VzL215LWRhdGUtcmFuZ2UtbW9kZWwuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeURhdGV9IGZyb20gXCIuLi9pbnRlcmZhY2VzL215LWRhdGUuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeURhdGVSYW5nZX0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbXktZGF0ZS1yYW5nZS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15TW9udGh9IGZyb20gXCIuLi9pbnRlcmZhY2VzL215LW1vbnRoLmludGVyZmFjZVwiO1xuaW1wb3J0IHtJTXlNb250aExhYmVsc30gZnJvbSBcIi4uL2ludGVyZmFjZXMvbXktbW9udGgtbGFiZWxzLmludGVyZmFjZVwiO1xuaW1wb3J0IHtJTXlNYXJrZWREYXRlc30gZnJvbSBcIi4uL2ludGVyZmFjZXMvbXktbWFya2VkLWRhdGVzLmludGVyZmFjZVwiO1xuaW1wb3J0IHtJTXlNYXJrZWREYXRlfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9teS1tYXJrZWQtZGF0ZS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15RGF0ZUZvcm1hdH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbXktZGF0ZS1mb3JtYXQuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeU9wdGlvbnN9IGZyb20gXCIuLi9pbnRlcmZhY2VzL215LW9wdGlvbnMuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0tleUNvZGV9IGZyb20gXCIuLi9lbnVtcy9rZXktY29kZS5lbnVtXCI7XG5pbXBvcnQge0tleU5hbWV9IGZyb20gXCIuLi9lbnVtcy9rZXktbmFtZS5lbnVtXCI7XG5pbXBvcnQge0QsIERELCBNLCBNTSwgTU1NLCBZWVlZLCBTVSwgTU8sIFRVLCBXRSwgVEgsIEZSLCBTQSwgWkVST19TVFIsIEVNUFRZX1NUUiwgUElQRX0gZnJvbSBcIi4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFV0aWxTZXJ2aWNlIHtcbiAgd2Vla0RheXM6IEFycmF5PHN0cmluZz4gPSBbU1UsIE1PLCBUVSwgV0UsIFRILCBGUiwgU0FdO1xuXG4gIGlzRGF0ZVZhbGlkKGRhdGVTdHI6IHN0cmluZywgb3B0aW9uczogSU15T3B0aW9ucyk6IElNeURhdGUge1xuICAgIGNvbnN0IHtkYXRlRm9ybWF0LCBtaW5ZZWFyLCBtYXhZZWFyLCBtb250aExhYmVsc30gPSBvcHRpb25zO1xuXG4gICAgY29uc3QgcmV0dXJuRGF0ZTogSU15RGF0ZSA9IHRoaXMucmVzZXREYXRlKCk7XG4gICAgY29uc3QgZGF5c0luTW9udGg6IEFycmF5PG51bWJlcj4gPSBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG4gICAgY29uc3QgaXNNb250aFN0cjogYm9vbGVhbiA9IGRhdGVGb3JtYXQuaW5kZXhPZihNTU0pICE9PSAtMTtcbiAgICBjb25zdCBkZWxpbWV0ZXJzOiBBcnJheTxzdHJpbmc+ID0gZGF0ZUZvcm1hdC5tYXRjaCgvW14oZG15KV17MSx9L2cpO1xuXG4gICAgaWYgKCFkYXRlU3RyIHx8IGRhdGVTdHIgPT09IEVNUFRZX1NUUikge1xuICAgICAgcmV0dXJuIHJldHVybkRhdGU7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0ZVZhbHVlOiBBcnJheTxJTXlEYXRlRm9ybWF0PiA9IHRoaXMuZ2V0RGF0ZVZhbHVlKGRhdGVTdHIsIGRhdGVGb3JtYXQsIGRlbGltZXRlcnMpO1xuICAgIGNvbnN0IHllYXI6IG51bWJlciA9IHRoaXMuZ2V0TnVtYmVyQnlWYWx1ZShkYXRlVmFsdWVbMF0pO1xuICAgIGNvbnN0IG1vbnRoOiBudW1iZXIgPSBpc01vbnRoU3RyID8gdGhpcy5nZXRNb250aE51bWJlckJ5TW9udGhOYW1lKGRhdGVWYWx1ZVsxXSwgbW9udGhMYWJlbHMpIDogdGhpcy5nZXROdW1iZXJCeVZhbHVlKGRhdGVWYWx1ZVsxXSk7XG4gICAgY29uc3QgZGF5OiBudW1iZXIgPSB0aGlzLmdldE51bWJlckJ5VmFsdWUoZGF0ZVZhbHVlWzJdKTtcblxuICAgIGlmIChtb250aCAhPT0gLTEgJiYgZGF5ICE9PSAtMSAmJiB5ZWFyICE9PSAtMSkge1xuICAgICAgaWYgKHllYXIgPCBtaW5ZZWFyIHx8IHllYXIgPiBtYXhZZWFyIHx8IG1vbnRoIDwgMSB8fCBtb250aCA+IDEyKSB7XG4gICAgICAgIHJldHVybiByZXR1cm5EYXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRlOiBJTXlEYXRlID0ge3llYXIsIG1vbnRoLCBkYXl9O1xuXG4gICAgICBpZiAodGhpcy5pc0Rpc2FibGVkRGF0ZShkYXRlLCBvcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gcmV0dXJuRGF0ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHllYXIgJSA0MDAgPT09IDAgfHwgKHllYXIgJSAxMDAgIT09IDAgJiYgeWVhciAlIDQgPT09IDApKSB7XG4gICAgICAgIGRheXNJbk1vbnRoWzFdID0gMjk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXkgPCAxIHx8IGRheSA+IGRheXNJbk1vbnRoW21vbnRoIC0gMV0pIHtcbiAgICAgICAgcmV0dXJuIHJldHVybkRhdGU7XG4gICAgICB9XG5cbiAgICAgIC8vIFZhbGlkIGRhdGVcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuRGF0ZTtcbiAgfVxuXG4gIGlzRGF0ZVZhbGlkRGF0ZVJhbmdlKGRhdGVSYW5nZVN0cjogc3RyaW5nLCBvcHRpb25zOiBJTXlPcHRpb25zKTogSU15RGF0ZVJhbmdlIHtcbiAgICBsZXQgZGF0ZVJhbmdlOiBJTXlEYXRlUmFuZ2UgPSB7YmVnaW46IHRoaXMucmVzZXREYXRlKCksIGVuZDogdGhpcy5yZXNldERhdGUoKX07XG4gICAgaWYgKGRhdGVSYW5nZVN0ciAmJiBkYXRlUmFuZ2VTdHIubGVuZ3RoKSB7XG4gICAgICBjb25zdCBkYXRlczogQXJyYXk8c3RyaW5nPiA9IGRhdGVSYW5nZVN0ci5zcGxpdChvcHRpb25zLmRhdGVSYW5nZURhdGVzRGVsaW1pdGVyKTtcbiAgICAgIGlmIChkYXRlcyAmJiBkYXRlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgY29uc3QgW2JlZ2luRGF0ZSwgZW5kRGF0ZV0gPSBkYXRlcztcbiAgICAgICAgY29uc3QgYmVnaW46IElNeURhdGUgPSB0aGlzLmlzRGF0ZVZhbGlkKGJlZ2luRGF0ZSwgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZERhdGUoYmVnaW4pKSB7XG4gICAgICAgICAgY29uc3QgZW5kOiBJTXlEYXRlID0gdGhpcy5pc0RhdGVWYWxpZChlbmREYXRlLCBvcHRpb25zKTtcblxuICAgICAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGVuZCkgJiYgdGhpcy5pc0RhdGVTYW1lT3JFYXJsaWVyKGJlZ2luLCBlbmQpKSB7XG4gICAgICAgICAgICBkYXRlUmFuZ2UgPSB7YmVnaW4sIGVuZH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRlUmFuZ2U7XG4gIH1cblxuICBnZXREYXRlVmFsdWUoZGF0ZVN0cjogc3RyaW5nLCBkYXRlRm9ybWF0OiBzdHJpbmcsIGRlbGltZXRlcnM6IEFycmF5PHN0cmluZz4pOiBBcnJheTxJTXlEYXRlRm9ybWF0PiB7XG4gICAgbGV0IGRlbDogc3RyaW5nID0gZGVsaW1ldGVyc1swXTtcbiAgICBpZiAoZGVsaW1ldGVyc1swXSAhPT0gZGVsaW1ldGVyc1sxXSkge1xuICAgICAgZGVsID0gZGVsaW1ldGVyc1swXSArIGRlbGltZXRlcnNbMV07XG4gICAgfVxuXG4gICAgY29uc3QgcmU6IGFueSA9IG5ldyBSZWdFeHAoXCJbXCIgKyBkZWwgKyBcIl1cIik7XG4gICAgY29uc3QgZHM6IEFycmF5PHN0cmluZz4gPSBkYXRlU3RyLnNwbGl0KHJlKTtcbiAgICBjb25zdCBkZjogQXJyYXk8c3RyaW5nPiA9IGRhdGVGb3JtYXQuc3BsaXQocmUpO1xuICAgIGNvbnN0IGRhOiBBcnJheTxJTXlEYXRlRm9ybWF0PiA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRmW2ldLmluZGV4T2YoWVlZWSkgIT09IC0xKSB7XG4gICAgICAgIGRhWzBdID0ge3ZhbHVlOiBkc1tpXSwgZm9ybWF0OiBkZltpXX07XG4gICAgICB9XG4gICAgICBpZiAoZGZbaV0uaW5kZXhPZihNKSAhPT0gLTEpIHtcbiAgICAgICAgZGFbMV0gPSB7dmFsdWU6IGRzW2ldLCBmb3JtYXQ6IGRmW2ldfTtcbiAgICAgIH1cbiAgICAgIGlmIChkZltpXS5pbmRleE9mKEQpICE9PSAtMSkge1xuICAgICAgICBkYVsyXSA9IHt2YWx1ZTogZHNbaV0sIGZvcm1hdDogZGZbaV19O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGE7XG4gIH1cblxuICBnZXRNb250aE51bWJlckJ5TW9udGhOYW1lKGRmOiBJTXlEYXRlRm9ybWF0LCBtb250aExhYmVsczogSU15TW9udGhMYWJlbHMpOiBudW1iZXIge1xuICAgIGlmIChkZi52YWx1ZSkge1xuICAgICAgZm9yIChsZXQga2V5ID0gMTsga2V5IDw9IDEyOyBrZXkrKykge1xuICAgICAgICBpZiAoZGYudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gbW9udGhMYWJlbHNba2V5XS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBnZXROdW1iZXJCeVZhbHVlKGRmOiBJTXlEYXRlRm9ybWF0KTogbnVtYmVyIHtcbiAgICBpZiAoIS9eXFxkKyQvLnRlc3QoZGYudmFsdWUpKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgbGV0IG5icjogbnVtYmVyID0gTnVtYmVyKGRmLnZhbHVlKTtcbiAgICBpZiAoZGYuZm9ybWF0Lmxlbmd0aCA9PT0gMSAmJiBkZi52YWx1ZS5sZW5ndGggIT09IDEgJiYgbmJyIDwgMTAgfHwgZGYuZm9ybWF0Lmxlbmd0aCA9PT0gMSAmJiBkZi52YWx1ZS5sZW5ndGggIT09IDIgJiYgbmJyID49IDEwKSB7XG4gICAgICBuYnIgPSAtMTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGYuZm9ybWF0Lmxlbmd0aCA9PT0gMiAmJiBkZi52YWx1ZS5sZW5ndGggPiAyKSB7XG4gICAgICBuYnIgPSAtMTtcbiAgICB9XG4gICAgcmV0dXJuIG5icjtcbiAgfVxuXG4gIHBhcnNlRGVmYXVsdE1vbnRoKG1vbnRoU3RyaW5nOiBzdHJpbmcpOiBJTXlNb250aCB7XG4gICAgY29uc3QgbW9udGg6IElNeU1vbnRoID0ge21vbnRoVHh0OiBFTVBUWV9TVFIsIG1vbnRoTmJyOiAwLCB5ZWFyOiAwfTtcbiAgICBpZiAobW9udGhTdHJpbmcgIT09IEVNUFRZX1NUUikge1xuICAgICAgY29uc3Qgc3BsaXQgPSBtb250aFN0cmluZy5zcGxpdChtb250aFN0cmluZy5tYXRjaCgvW14wLTldLylbMF0pO1xuICAgICAgbW9udGgubW9udGhOYnIgPSBzcGxpdFswXS5sZW5ndGggPT09IDIgPyBOdW1iZXIoc3BsaXRbMF0pIDogTnVtYmVyKHNwbGl0WzFdKTtcbiAgICAgIG1vbnRoLnllYXIgPSBzcGxpdFswXS5sZW5ndGggPT09IDIgPyBOdW1iZXIoc3BsaXRbMV0pIDogTnVtYmVyKHNwbGl0WzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIG1vbnRoO1xuICB9XG5cbiAgaXNEaXNhYmxlZERhdGUoZGF0ZTogSU15RGF0ZSwgb3B0aW9uczogSU15T3B0aW9ucyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHttaW5ZZWFyLCBtYXhZZWFyLCBkaXNhYmxlVW50aWwsIGRpc2FibGVTaW5jZSwgZGlzYWJsZVdlZWtlbmRzLCBkaXNhYmxlRGF0ZXMsIGRpc2FibGVEYXRlUmFuZ2VzLCBkaXNhYmxlV2Vla2RheXMsIGVuYWJsZURhdGVzfSA9IG9wdGlvbnM7XG5cbiAgICBmb3IgKGNvbnN0IGQgb2YgZW5hYmxlRGF0ZXMpIHtcbiAgICAgIGlmICgoZC55ZWFyID09PSAwIHx8IGQueWVhciA9PT0gZGF0ZS55ZWFyKSAmJiAoZC5tb250aCA9PT0gMCB8fCBkLm1vbnRoID09PSBkYXRlLm1vbnRoKSAmJiBkLmRheSA9PT0gZGF0ZS5kYXkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkYXRlLnllYXIgPCBtaW5ZZWFyICYmIGRhdGUubW9udGggPT09IDEyIHx8IGRhdGUueWVhciA+IG1heFllYXIgJiYgZGF0ZS5tb250aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZEJ5RGlzYWJsZVVudGlsKGRhdGUsIGRpc2FibGVVbnRpbCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzRGlzYWJsZWRCeURpc2FibGVTaW5jZShkYXRlLCBkaXNhYmxlU2luY2UpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZVdlZWtlbmRzKSB7XG4gICAgICBjb25zdCBkYXlOYnIgPSB0aGlzLmdldERheU51bWJlcihkYXRlKTtcbiAgICAgIGlmIChkYXlOYnIgPT09IDAgfHwgZGF5TmJyID09PSA2KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRuID0gdGhpcy5nZXREYXlOdW1iZXIoZGF0ZSk7XG4gICAgaWYgKGRpc2FibGVXZWVrZGF5cy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IHdkIG9mIGRpc2FibGVXZWVrZGF5cykge1xuICAgICAgICBpZiAoZG4gPT09IHRoaXMuZ2V0V2Vla2RheUluZGV4KHdkKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBkIG9mIGRpc2FibGVEYXRlcykge1xuICAgICAgaWYgKChkLnllYXIgPT09IDAgfHwgZC55ZWFyID09PSBkYXRlLnllYXIpICYmIChkLm1vbnRoID09PSAwIHx8IGQubW9udGggPT09IGRhdGUubW9udGgpICYmIGQuZGF5ID09PSBkYXRlLmRheSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkQnlEaXNhYmxlRGF0ZVJhbmdlKGRhdGUsIGRhdGUsIGRpc2FibGVEYXRlUmFuZ2VzKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNEaXNhYmxlZE1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF5c0luTW9udGg6IG51bWJlciwgb3B0aW9uczogSU15T3B0aW9ucyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHtkaXNhYmxlVW50aWwsIGRpc2FibGVTaW5jZSwgZGlzYWJsZURhdGVSYW5nZXN9ID0gb3B0aW9ucztcblxuICAgIGNvbnN0IGRhdGVFbmQ6IElNeURhdGUgPSB7eWVhciwgbW9udGgsIGRheTogZGF5c0luTW9udGh9O1xuICAgIGNvbnN0IGRhdGVCZWdpbjogSU15RGF0ZSA9IHt5ZWFyLCBtb250aCwgZGF5OiAxfTtcblxuICAgIGlmICh0aGlzLmlzRGlzYWJsZWRCeURpc2FibGVVbnRpbChkYXRlRW5kLCBkaXNhYmxlVW50aWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkQnlEaXNhYmxlU2luY2UoZGF0ZUJlZ2luLCBkaXNhYmxlU2luY2UpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkQnlEaXNhYmxlRGF0ZVJhbmdlKGRhdGVCZWdpbiwgZGF0ZUVuZCwgZGlzYWJsZURhdGVSYW5nZXMpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc0Rpc2FibGVkWWVhcih5ZWFyOiBudW1iZXIsIG9wdGlvbnM6IElNeU9wdGlvbnMpOiBib29sZWFuIHtcbiAgICBjb25zdCB7ZGlzYWJsZVVudGlsLCBkaXNhYmxlU2luY2UsIGRpc2FibGVEYXRlUmFuZ2VzLCBtaW5ZZWFyLCBtYXhZZWFyfSA9IG9wdGlvbnM7XG5cbiAgICBjb25zdCBkYXRlRW5kOiBJTXlEYXRlID0ge3llYXIsIG1vbnRoOiAxMiwgZGF5OiAzMX07XG4gICAgY29uc3QgZGF0ZUJlZ2luOiBJTXlEYXRlID0ge3llYXIsIG1vbnRoOiAxLCBkYXk6IDF9O1xuXG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZEJ5RGlzYWJsZVVudGlsKGRhdGVFbmQsIGRpc2FibGVVbnRpbCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzRGlzYWJsZWRCeURpc2FibGVTaW5jZShkYXRlQmVnaW4sIGRpc2FibGVTaW5jZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzRGlzYWJsZWRCeURpc2FibGVEYXRlUmFuZ2UoZGF0ZUJlZ2luLCBkYXRlRW5kLCBkaXNhYmxlRGF0ZVJhbmdlcykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh5ZWFyIDwgbWluWWVhciB8fCB5ZWFyID4gbWF4WWVhcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNEaXNhYmxlZEJ5RGlzYWJsZVVudGlsKGRhdGU6IElNeURhdGUsIGRpc2FibGVVbnRpbDogSU15RGF0ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGRpc2FibGVVbnRpbCkgJiYgdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZSkgPD0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGlzYWJsZVVudGlsKTtcbiAgfVxuXG4gIGlzRGlzYWJsZWRCeURpc2FibGVTaW5jZShkYXRlOiBJTXlEYXRlLCBkaXNhYmxlU2luY2U6IElNeURhdGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0luaXRpYWxpemVkRGF0ZShkaXNhYmxlU2luY2UpICYmIHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGUpID49IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRpc2FibGVTaW5jZSk7XG4gIH1cblxuICBpc0Rpc2FibGVkQnlEaXNhYmxlRGF0ZVJhbmdlKGRhdGVCZWdpbjogSU15RGF0ZSwgZGF0ZUVuZDogSU15RGF0ZSwgZGlzYWJsZURhdGVSYW5nZXM6IEFycmF5PElNeURhdGVSYW5nZT4pOiBib29sZWFuIHtcbiAgICBjb25zdCBkYXRlTXNCZWdpbjogbnVtYmVyID0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZUJlZ2luKTtcbiAgICBjb25zdCBkYXRlTXNFbmQ6IG51bWJlciA9IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGVFbmQpO1xuXG4gICAgZm9yIChjb25zdCBkIG9mIGRpc2FibGVEYXRlUmFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkRGF0ZShkLmJlZ2luKSAmJiB0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGQuZW5kKSBcbiAgICAgICAgJiYgZGF0ZU1zQmVnaW4gPj0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZC5iZWdpbikgJiYgZGF0ZU1zRW5kIDw9IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGQuZW5kKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNNYXJrZWREYXRlKGRhdGU6IElNeURhdGUsIG1hcmtlZERhdGVzOiBBcnJheTxJTXlNYXJrZWREYXRlcz4sIG1hcmtXZWVrZW5kczogSU15TWFya2VkRGF0ZSk6IElNeU1hcmtlZERhdGUge1xuICAgIGZvciAoY29uc3QgbWQgb2YgbWFya2VkRGF0ZXMpIHtcbiAgICAgIGZvciAoY29uc3QgZCBvZiBtZC5kYXRlcykge1xuICAgICAgICBpZiAoKGQueWVhciA9PT0gMCB8fCBkLnllYXIgPT09IGRhdGUueWVhcikgJiYgKGQubW9udGggPT09IDAgfHwgZC5tb250aCA9PT0gZGF0ZS5tb250aCkgJiYgZC5kYXkgPT09IGRhdGUuZGF5KSB7XG4gICAgICAgICAgcmV0dXJuIHttYXJrZWQ6IHRydWUsIGNvbG9yOiBtZC5jb2xvcn07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1hcmtXZWVrZW5kcyAmJiBtYXJrV2Vla2VuZHMubWFya2VkKSB7XG4gICAgICBjb25zdCBkYXlOYnIgPSB0aGlzLmdldERheU51bWJlcihkYXRlKTtcbiAgICAgIGlmIChkYXlOYnIgPT09IDAgfHwgZGF5TmJyID09PSA2KSB7XG4gICAgICAgIHJldHVybiB7bWFya2VkOiB0cnVlLCBjb2xvcjogbWFya1dlZWtlbmRzLmNvbG9yfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHttYXJrZWQ6IGZhbHNlLCBjb2xvcjogRU1QVFlfU1RSfTtcbiAgfVxuXG4gIGlzSGlnaGxpZ2h0ZWREYXRlKGRhdGU6IElNeURhdGUsIHN1bkhpZ2hsaWdodDogYm9vbGVhbiwgc2F0SGlnaGxpZ2h0OiBib29sZWFuLCBoaWdobGlnaHREYXRlczogQXJyYXk8SU15RGF0ZT4pOiBib29sZWFuIHtcbiAgICBjb25zdCBkYXlOYnI6IG51bWJlciA9IHRoaXMuZ2V0RGF5TnVtYmVyKGRhdGUpO1xuICAgIGlmIChzdW5IaWdobGlnaHQgJiYgZGF5TmJyID09PSAwIHx8IHNhdEhpZ2hsaWdodCAmJiBkYXlOYnIgPT09IDYpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGQgb2YgaGlnaGxpZ2h0RGF0ZXMpIHtcbiAgICAgIGlmICgoZC55ZWFyID09PSAwIHx8IGQueWVhciA9PT0gZGF0ZS55ZWFyKSAmJiAoZC5tb250aCA9PT0gMCB8fCBkLm1vbnRoID09PSBkYXRlLm1vbnRoKSAmJiBkLmRheSA9PT0gZGF0ZS5kYXkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldFdlZWtOdW1iZXIoZGF0ZTogSU15RGF0ZSk6IG51bWJlciB7XG4gICAgY29uc3QgZDogRGF0ZSA9IG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5LCAwLCAwLCAwLCAwKTtcbiAgICBkLnNldERhdGUoZC5nZXREYXRlKCkgKyAoZC5nZXREYXkoKSA9PT0gMCA/IC0zIDogNCAtIGQuZ2V0RGF5KCkpKTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgoKGQuZ2V0VGltZSgpIC0gbmV3IERhdGUoZC5nZXRGdWxsWWVhcigpLCAwLCA0KS5nZXRUaW1lKCkpIC8gODY0MDAwMDApIC8gNykgKyAxO1xuICB9XG5cbiAgZ2V0RGF0ZU1vZGVsKGRhdGU6IElNeURhdGUsIGRhdGVSYW5nZTogSU15RGF0ZVJhbmdlLCBkYXRlRm9ybWF0OiBzdHJpbmcsIG1vbnRoTGFiZWxzOiBJTXlNb250aExhYmVscywgcmFuZ2VEZWxpbWl0ZXI6IHN0cmluZywgZGF0ZVN0cjogc3RyaW5nID0gRU1QVFlfU1RSKTogSU15RGF0ZU1vZGVsIHtcbiAgICBsZXQgc2luZ2xlRGF0ZU1vZGVsOiBJTXlTaW5nbGVEYXRlTW9kZWwgPSBudWxsO1xuICAgIGxldCBkYXRlUmFuZ2VNb2RlbDogSU15RGF0ZVJhbmdlTW9kZWwgPSBudWxsO1xuXG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIHNpbmdsZURhdGVNb2RlbCA9IHtcbiAgICAgICAgZGF0ZSxcbiAgICAgICAganNEYXRlOiB0aGlzLmdldERhdGUoZGF0ZSksXG4gICAgICAgIGZvcm1hdHRlZDogZGF0ZVN0ci5sZW5ndGggPyBkYXRlU3RyIDogdGhpcy5mb3JtYXREYXRlKGRhdGUsIGRhdGVGb3JtYXQsIG1vbnRoTGFiZWxzKSxcbiAgICAgICAgZXBvYzogdGhpcy5nZXRFcG9jVGltZShkYXRlKVxuICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkYXRlUmFuZ2VNb2RlbCA9IHtcbiAgICAgICAgYmVnaW5EYXRlOiBkYXRlUmFuZ2UuYmVnaW4sXG4gICAgICAgIGJlZ2luSnNEYXRlOiB0aGlzLmdldERhdGUoZGF0ZVJhbmdlLmJlZ2luKSxcbiAgICAgICAgYmVnaW5FcG9jOiB0aGlzLmdldEVwb2NUaW1lKGRhdGVSYW5nZS5iZWdpbiksXG4gICAgICAgIGVuZERhdGU6IGRhdGVSYW5nZS5lbmQsXG4gICAgICAgIGVuZEpzRGF0ZTogdGhpcy5nZXREYXRlKGRhdGVSYW5nZS5lbmQpLFxuICAgICAgICBlbmRFcG9jOiB0aGlzLmdldEVwb2NUaW1lKGRhdGVSYW5nZS5lbmQpLFxuICAgICAgICBmb3JtYXR0ZWQ6IHRoaXMuZm9ybWF0RGF0ZShkYXRlUmFuZ2UuYmVnaW4sIGRhdGVGb3JtYXQsIG1vbnRoTGFiZWxzKSArIHJhbmdlRGVsaW1pdGVyICsgdGhpcy5mb3JtYXREYXRlKGRhdGVSYW5nZS5lbmQsIGRhdGVGb3JtYXQsIG1vbnRoTGFiZWxzKVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNSYW5nZTogZGF0ZSA9PT0gbnVsbCxcbiAgICAgIHNpbmdsZURhdGU6IHNpbmdsZURhdGVNb2RlbCxcbiAgICAgIGRhdGVSYW5nZTogZGF0ZVJhbmdlTW9kZWxcbiAgICB9O1xuICB9XG5cbiAgZm9ybWF0RGF0ZShkYXRlOiBJTXlEYXRlLCBkYXRlRm9ybWF0OiBzdHJpbmcsIG1vbnRoTGFiZWxzOiBJTXlNb250aExhYmVscyk6IHN0cmluZyB7XG4gICAgbGV0IGZvcm1hdHRlZDogc3RyaW5nID0gZGF0ZUZvcm1hdC5yZXBsYWNlKFlZWVksIFN0cmluZyhkYXRlLnllYXIpKTtcblxuICAgIGlmIChkYXRlRm9ybWF0LmluZGV4T2YoTU1NKSAhPT0gLTEpIHtcbiAgICAgIGZvcm1hdHRlZCA9IGZvcm1hdHRlZC5yZXBsYWNlKE1NTSwgbW9udGhMYWJlbHNbZGF0ZS5tb250aF0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChkYXRlRm9ybWF0LmluZGV4T2YoTU0pICE9PSAtMSkge1xuICAgICAgZm9ybWF0dGVkID0gZm9ybWF0dGVkLnJlcGxhY2UoTU0sIHRoaXMucHJlWmVybyhkYXRlLm1vbnRoKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZm9ybWF0dGVkID0gZm9ybWF0dGVkLnJlcGxhY2UoTSwgU3RyaW5nKGRhdGUubW9udGgpKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0ZUZvcm1hdC5pbmRleE9mKEREKSAhPT0gLTEpIHtcbiAgICAgIGZvcm1hdHRlZCA9IGZvcm1hdHRlZC5yZXBsYWNlKERELCB0aGlzLnByZVplcm8oZGF0ZS5kYXkpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmb3JtYXR0ZWQgPSBmb3JtYXR0ZWQucmVwbGFjZShELCBTdHJpbmcoZGF0ZS5kYXkpKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm1hdHRlZDtcbiAgfVxuXG4gIGdldEZvcm1hdHRlZERhdGUobW9kZWw6IElNeURhdGVNb2RlbCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICFtb2RlbC5pc1JhbmdlID8gbW9kZWwuc2luZ2xlRGF0ZS5mb3JtYXR0ZWQgOiBtb2RlbC5kYXRlUmFuZ2UuZm9ybWF0dGVkO1xuICB9XG5cbiAgcHJlWmVybyh2YWw6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZhbCA8IDEwID8gWkVST19TVFIgKyB2YWwgOiBTdHJpbmcodmFsKTtcbiAgfVxuXG4gIGlzSW5pdGlhbGl6ZWREYXRlKGRhdGU6IElNeURhdGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZGF0ZS55ZWFyICE9PSAwICYmIGRhdGUubW9udGggIT09IDAgJiYgZGF0ZS5kYXkgIT09IDA7XG4gIH1cblxuICBpc0RhdGVFYXJsaWVyKGZpcnN0RGF0ZTogSU15RGF0ZSwgc2Vjb25kRGF0ZTogSU15RGF0ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhmaXJzdERhdGUpIDwgdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoc2Vjb25kRGF0ZSk7XG4gIH1cblxuICBpc0RhdGVTYW1lT3JFYXJsaWVyKGZpcnN0RGF0ZTogSU15RGF0ZSwgc2Vjb25kRGF0ZTogSU15RGF0ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhmaXJzdERhdGUpIDw9IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKHNlY29uZERhdGUpO1xuICB9XG5cbiAgaXNEYXRlU2FtZShmaXJzdERhdGU6IElNeURhdGUsIHNlY29uZERhdGU6IElNeURhdGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZmlyc3REYXRlKSA9PT0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoc2Vjb25kRGF0ZSk7XG4gIH1cblxuICBpc0RhdGVSYW5nZUJlZ2luT3JFbmRTYW1lKGRhdGVSYW5nZTogSU15RGF0ZVJhbmdlLCBkYXRlOiBJTXlEYXRlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZGF0ZU1zOiBudW1iZXIgPSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkYXRlKTtcbiAgICByZXR1cm4gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZVJhbmdlLmJlZ2luKSA9PT0gZGF0ZU1zIHx8IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGVSYW5nZS5lbmQpID09PSBkYXRlTXM7XG4gIH1cblxuICBpc0RhdGVJblJhbmdlKGRhdGU6IElNeURhdGUsIGRhdGVSYW5nZTogSU15RGF0ZVJhbmdlKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGRhdGVSYW5nZS5iZWdpbikgfHwgIXRoaXMuaXNJbml0aWFsaXplZERhdGUoZGF0ZVJhbmdlLmVuZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaXNEYXRlU2FtZU9yRWFybGllcihkYXRlUmFuZ2UuYmVnaW4sIGRhdGUpICYmIHRoaXMuaXNEYXRlU2FtZU9yRWFybGllcihkYXRlLCBkYXRlUmFuZ2UuZW5kKTtcbiAgfVxuXG4gIHJlc2V0RGF0ZSgpOiBJTXlEYXRlIHtcbiAgICByZXR1cm4ge3llYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDB9O1xuICB9XG5cbiAgZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGU6IElNeURhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldERhdGUoZGF0ZSkuZ2V0VGltZSgpO1xuICB9XG5cbiAgZ2V0RGF0ZShkYXRlOiBJTXlEYXRlKTogRGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5LCAwLCAwLCAwLCAwKTtcbiAgfVxuXG4gIGdldERheU51bWJlcihkYXRlOiBJTXlEYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoIC0gMSwgZGF0ZS5kYXksIDAsIDAsIDAsIDApLmdldERheSgpO1xuICB9XG5cbiAgZ2V0V2Vla2RheUluZGV4KHdkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy53ZWVrRGF5cy5pbmRleE9mKHdkKTtcbiAgfVxuXG4gIGdldEVwb2NUaW1lKGRhdGU6IElNeURhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGUpIC8gMTAwMC4wKTtcbiAgfVxuXG4gIGdldEtleUNvZGVGcm9tRXZlbnQoZXZ0OiBhbnkpOiBudW1iZXIge1xuICAgIGxldCBrZXk6IGFueSA9IGV2dC5rZXkgfHwgZXZ0LmtleUNvZGUgfHwgZXZ0LndoaWNoO1xuXG4gICAgaWYgKHRoaXMuY2hlY2tLZXlOYW1lKGtleSwgS2V5TmFtZS5lbnRlcikgfHwga2V5ID09PSBLZXlDb2RlLmVudGVyKSB7XG4gICAgICByZXR1cm4gS2V5Q29kZS5lbnRlcjtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5jaGVja0tleU5hbWUoa2V5LCBLZXlOYW1lLmVzYykgfHwga2V5ID09PSBLZXlDb2RlLmVzYykge1xuICAgICAgcmV0dXJuIEtleUNvZGUuZXNjO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmNoZWNrS2V5TmFtZShrZXksIEtleU5hbWUuc3BhY2UpIHx8IGtleSA9PT0gS2V5Q29kZS5zcGFjZSkge1xuICAgICAgcmV0dXJuIEtleUNvZGUuc3BhY2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuY2hlY2tLZXlOYW1lKGtleSwgS2V5TmFtZS5sZWZ0QXJyb3cpIHx8IGtleSA9PT0gS2V5Q29kZS5sZWZ0QXJyb3cpIHtcbiAgICAgIHJldHVybiBLZXlDb2RlLmxlZnRBcnJvdztcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5jaGVja0tleU5hbWUoa2V5LCBLZXlOYW1lLnVwQXJyb3cpIHx8IGtleSA9PT0gS2V5Q29kZS51cEFycm93KSB7XG4gICAgICByZXR1cm4gS2V5Q29kZS51cEFycm93O1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmNoZWNrS2V5TmFtZShrZXksIEtleU5hbWUucmlnaHRBcnJvdykgfHwga2V5ID09PSBLZXlDb2RlLnJpZ2h0QXJyb3cpIHtcbiAgICAgIHJldHVybiBLZXlDb2RlLnJpZ2h0QXJyb3c7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuY2hlY2tLZXlOYW1lKGtleSwgS2V5TmFtZS5kb3duQXJyb3cpfHwga2V5ID09PSBLZXlDb2RlLmRvd25BcnJvdykge1xuICAgICAgcmV0dXJuIEtleUNvZGUuZG93bkFycm93O1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmNoZWNrS2V5TmFtZShrZXksIEtleU5hbWUudGFiKSB8fCBrZXkgPT09IEtleUNvZGUudGFiKSB7XG4gICAgICByZXR1cm4gS2V5Q29kZS50YWI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuY2hlY2tLZXlOYW1lKGtleSwgS2V5TmFtZS5zaGlmdCkgfHwga2V5ID09PSBLZXlDb2RlLnNoaWZ0KSB7XG4gICAgICByZXR1cm4gS2V5Q29kZS5zaGlmdDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBjaGVja0tleU5hbWUoa2V5OiBzdHJpbmcsIGtleU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGFycjogQXJyYXk8c3RyaW5nPiA9IGtleU5hbWUuc3BsaXQoUElQRSk7XG4gICAgcmV0dXJuIGFyci5pbmRleE9mKGtleSkgIT09IC0xO1xuICB9XG59XG4iXX0=