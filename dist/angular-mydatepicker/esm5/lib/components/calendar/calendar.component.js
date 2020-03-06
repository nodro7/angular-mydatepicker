/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewEncapsulation, ViewChild, Renderer2, ChangeDetectorRef, HostBinding } from "@angular/core";
import { UtilService } from "../../services/angular-mydatepicker.util.service";
import { KeyCode } from "../../enums/key-code.enum";
import { MonthId } from "../../enums/month-id.enum";
import { DefaultView } from "../../enums/default-view.enum";
import { CalAnimation } from "../../enums/cal-animation.enum";
import { DOT, UNDER_LINE, D, M, Y, DATE_ROW_COUNT, DATE_COL_COUNT, MONTH_ROW_COUNT, MONTH_COL_COUNT, YEAR_ROW_COUNT, YEAR_COL_COUNT, SU, MO, TU, WE, TH, FR, SA, EMPTY_STR, CLICK, STYLE, MY_DP_ANIMATION, ANIMATION_NAMES, IN, OUT, TABINDEX, TD_SELECTOR, ZERO_STR, YEAR_SEPARATOR } from "../../constants/constants";
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(elem, renderer, cdr, utilService) {
        var _this = this;
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
        function (event) {
            if ((_this.opts.monthSelector || _this.opts.yearSelector) && event.target) {
                _this.resetMonthYearSelect();
            }
        }));
    }
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _a = this.opts, stylesData = _a.stylesData, calendarAnimation = _a.calendarAnimation, inline = _a.inline;
        if (stylesData.styles.length) {
            /** @type {?} */
            var styleElTemp = this.renderer.createElement(STYLE);
            this.renderer.appendChild(styleElTemp, this.renderer.createText(stylesData.styles));
            this.renderer.appendChild(this.styleEl.nativeElement, styleElTemp);
        }
        if (calendarAnimation.in !== CalAnimation.None) {
            this.setCalendarAnimation(calendarAnimation, true);
        }
        if (!inline) {
            this.focusToSelector();
        }
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clickListener();
    };
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
    CalendarComponent.prototype.initializeComponent = /**
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
    function (opts, defaultMonth, selectorPos, inputValue, dc, cvc, rds, cbe) {
        this.opts = opts;
        this.selectorPos = selectorPos;
        this.dateChanged = dc;
        this.calendarViewChanged = cvc;
        this.rangeDateSelection = rds;
        this.closedByEsc = cbe;
        var _a = this.opts, defaultView = _a.defaultView, dateRange = _a.dateRange, firstDayOfWeek = _a.firstDayOfWeek, dayLabels = _a.dayLabels;
        this.weekDays.length = 0;
        this.dayIdx = this.weekDayOpts.indexOf(firstDayOfWeek);
        if (this.dayIdx !== -1) {
            /** @type {?} */
            var idx = this.dayIdx;
            for (var i = 0; i < this.weekDayOpts.length; i++) {
                this.weekDays.push(dayLabels[this.weekDayOpts[idx]]);
                idx = this.weekDayOpts[idx] === SA ? 0 : idx + 1;
            }
        }
        /** @type {?} */
        var today = this.getToday();
        this.selectedMonth = { monthNbr: today.month, year: today.year };
        if (defaultMonth && defaultMonth.length) {
            this.selectedMonth = this.utilService.parseDefaultMonth(defaultMonth);
        }
        if (!dateRange) {
            // Single date mode
            /** @type {?} */
            var date = this.utilService.isDateValid(inputValue, this.opts);
            if (this.utilService.isInitializedDate(date)) {
                this.selectedDate = date;
                this.selectedMonth = { monthNbr: date.month, year: date.year };
            }
        }
        else {
            // Date range mode
            var _b = this.utilService.isDateValidDateRange(inputValue, this.opts), begin = _b.begin, end = _b.end;
            if (this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end)) {
                this.selectedDateRange = { begin: begin, end: end };
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
    };
    /**
     * @param {?} opts
     * @return {?}
     */
    CalendarComponent.prototype.refreshComponent = /**
     * @param {?} opts
     * @return {?}
     */
    function (opts) {
        this.opts = opts;
        var _a = this, selectMonth = _a.selectMonth, selectYear = _a.selectYear, years = _a.years;
        if (!selectMonth && !selectYear) {
            var _b = this.visibleMonth, monthNbr = _b.monthNbr, year = _b.year;
            this.generateCalendar(monthNbr, year, false);
        }
        else if (selectMonth) {
            this.generateMonths();
        }
        else if (selectYear) {
            this.generateYears(this.getYearValueByRowAndCol(2, 2));
        }
    };
    /**
     * @param {?} calAnimation
     * @param {?} isOpen
     * @return {?}
     */
    CalendarComponent.prototype.setCalendarAnimation = /**
     * @param {?} calAnimation
     * @param {?} isOpen
     * @return {?}
     */
    function (calAnimation, isOpen) {
        var nativeElement = this.selectorEl.nativeElement;
        var renderer = this.renderer;
        /** @type {?} */
        var classIn = MY_DP_ANIMATION + ANIMATION_NAMES[calAnimation.in - 1];
        if (isOpen) {
            renderer.addClass(nativeElement, classIn + IN);
        }
        else {
            /** @type {?} */
            var classOut = MY_DP_ANIMATION + ANIMATION_NAMES[calAnimation.out - 1];
            renderer.removeClass(nativeElement, classIn + IN);
            renderer.addClass(nativeElement, classOut + OUT);
        }
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.resetDateValue = /**
     * @return {?}
     */
    function () {
        if (!this.opts.dateRange) {
            this.selectedDate = this.utilService.resetDate();
        }
        else {
            this.selectedDateRange.begin = this.utilService.resetDate();
            this.selectedDateRange.end = this.utilService.resetDate();
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarComponent.prototype.setDateValue = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.selectedDate = date;
    };
    /**
     * @param {?} begin
     * @param {?} end
     * @return {?}
     */
    CalendarComponent.prototype.setDateRangeValue = /**
     * @param {?} begin
     * @param {?} end
     * @return {?}
     */
    function (begin, end) {
        this.selectedDateRange.begin = begin;
        this.selectedDateRange.end = end;
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.resetMonthYearSelect = /**
     * @return {?}
     */
    function () {
        this.selectMonth = false;
        this.selectYear = false;
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.onMonthViewBtnClicked = /**
     * @return {?}
     */
    function () {
        this.selectMonth = !this.selectMonth;
        this.selectYear = false;
        this.cdr.detectChanges();
        if (this.selectMonth) {
            this.generateMonths();
        }
        else {
            var _a = this.selectedMonth, year = _a.year, monthNbr = _a.monthNbr;
            this.visibleMonth = { monthTxt: this.opts.monthLabels[monthNbr], monthNbr: monthNbr, year: year };
            this.generateCalendar(monthNbr, year, true);
        }
    };
    /**
     * @param {?} cell
     * @return {?}
     */
    CalendarComponent.prototype.onMonthCellClicked = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        var _a = this.visibleMonth, year = _a.year, monthNbr = _a.monthNbr;
        /** @type {?} */
        var mc = cell.nbr !== monthNbr;
        this.visibleMonth = { monthTxt: this.opts.monthLabels[cell.nbr], monthNbr: cell.nbr, year: year };
        this.selectedMonth.year = this.visibleMonth.year;
        this.generateCalendar(cell.nbr, year, mc);
        this.selectMonth = false;
        this.focusToSelector();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarComponent.prototype.onMonthCellKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Move focus by arrow keys
        var _a = this.getSourceRowAndColumnFromEvent(event), sourceRow = _a.sourceRow, sourceCol = _a.sourceCol;
        var _b = this.getTargetFocusRowAndColumn(event, sourceRow, sourceCol, MONTH_ROW_COUNT, MONTH_COL_COUNT), moveFocus = _b.moveFocus, targetRow = _b.targetRow, targetCol = _b.targetCol, direction = _b.direction;
        if (moveFocus) {
            this.focusCellElement(M, targetRow, targetCol, direction, MONTH_COL_COUNT);
        }
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.onYearViewBtnClicked = /**
     * @return {?}
     */
    function () {
        this.selectYear = !this.selectYear;
        this.selectMonth = false;
        this.cdr.detectChanges();
        if (this.selectYear) {
            this.generateYears(this.visibleMonth.year);
        }
        else {
            var _a = this.selectedMonth, year = _a.year, monthNbr = _a.monthNbr;
            this.visibleMonth = { monthTxt: this.opts.monthLabels[monthNbr], monthNbr: monthNbr, year: year };
            this.generateCalendar(monthNbr, year, true);
        }
    };
    /**
     * @param {?} cell
     * @return {?}
     */
    CalendarComponent.prototype.onYearCellClicked = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        var _a = this.visibleMonth, year = _a.year, monthNbr = _a.monthNbr, monthTxt = _a.monthTxt;
        /** @type {?} */
        var yc = cell.year !== year;
        this.visibleMonth = { monthTxt: monthTxt, monthNbr: monthNbr, year: cell.year };
        this.selectedMonth.year = this.visibleMonth.year;
        this.generateCalendar(monthNbr, cell.year, yc);
        this.selectYear = false;
        this.focusToSelector();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarComponent.prototype.onYearCellKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Move focus by arrow keys
        var _a = this.getSourceRowAndColumnFromEvent(event), sourceRow = _a.sourceRow, sourceCol = _a.sourceCol;
        var _b = this.getTargetFocusRowAndColumn(event, sourceRow, sourceCol, YEAR_ROW_COUNT, YEAR_COL_COUNT), moveFocus = _b.moveFocus, targetRow = _b.targetRow, targetCol = _b.targetCol, direction = _b.direction;
        if (moveFocus) {
            this.focusCellElement(Y, targetRow, targetCol, direction, YEAR_COL_COUNT);
        }
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.generateMonths = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var today = this.getToday();
        this.months.length = 0;
        var _a = this.visibleMonth, year = _a.year, monthNbr = _a.monthNbr;
        var _b = this.opts, rtl = _b.rtl, monthLabels = _b.monthLabels;
        /** @type {?} */
        var row = 0;
        for (var i = 1; i <= 12; i += 3) {
            /** @type {?} */
            var rowData = [];
            /** @type {?} */
            var col = rtl ? 2 : 0;
            for (var j = i; j < i + 3; j++) {
                /** @type {?} */
                var disabled = this.utilService.isDisabledMonth(year, j, this.daysInMonth(j, year), this.opts);
                rowData.push({
                    nbr: j,
                    name: monthLabels[j],
                    currMonth: j === today.month && year === today.year,
                    selected: j === monthNbr && year === this.selectedMonth.year,
                    disabled: disabled,
                    row: row,
                    col: rtl ? col-- : col++
                });
            }
            row++;
            this.months.push(rowData);
        }
        this.setMonthViewHeaderBtnDisabledState(year);
    };
    /**
     * @param {?} inputYear
     * @return {?}
     */
    CalendarComponent.prototype.generateYears = /**
     * @param {?} inputYear
     * @return {?}
     */
    function (inputYear) {
        var _a = this.opts, minYear = _a.minYear, maxYear = _a.maxYear, rtl = _a.rtl;
        /** @type {?} */
        var y = inputYear - 12;
        if (inputYear < minYear) {
            y = minYear;
        }
        if (inputYear + 25 > maxYear) {
            y = maxYear - 24;
        }
        var year = this.visibleMonth.year;
        this.years.length = 0;
        /** @type {?} */
        var today = this.getToday();
        /** @type {?} */
        var row = 0;
        for (var i = y; i < y + 25; i += 5) {
            /** @type {?} */
            var rowData = [];
            /** @type {?} */
            var col = rtl ? 4 : 0;
            for (var j = i; j < i + 5; j++) {
                /** @type {?} */
                var disabled = this.utilService.isDisabledYear(j, this.opts);
                rowData.push({
                    year: j,
                    currYear: j === today.year,
                    selected: j === year,
                    disabled: disabled,
                    row: row,
                    col: rtl ? col-- : col++
                });
            }
            row++;
            this.years.push(rowData);
        }
        /** @type {?} */
        var beginYear = this.getYearValueByRowAndCol(0, 0);
        /** @type {?} */
        var endYear = beginYear + 24;
        this.yearsDuration = (!rtl ? beginYear : endYear) + YEAR_SEPARATOR + (!rtl ? endYear : beginYear);
        this.setYearViewHeaderBtnDisabledState(beginYear, endYear);
    };
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    CalendarComponent.prototype.getYearValueByRowAndCol = /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    function (row, col) {
        return this.years[row][col].year;
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.setCalendarVisibleMonth = /**
     * @return {?}
     */
    function () {
        // Sets visible month of calendar
        var _a = this.selectedMonth, year = _a.year, monthNbr = _a.monthNbr;
        this.visibleMonth = { monthTxt: this.opts.monthLabels[monthNbr], monthNbr: monthNbr, year: year };
        // Create current month
        this.generateCalendar(monthNbr, year, true);
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.onPrevNavigateBtnClicked = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.onNextNavigateBtnClicked = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} isNext
     * @return {?}
     */
    CalendarComponent.prototype.setDateViewMonth = /**
     * @param {?} isNext
     * @return {?}
     */
    function (isNext) {
        /** @type {?} */
        var change = isNext ? 1 : -1;
        var _a = this.visibleMonth, year = _a.year, monthNbr = _a.monthNbr;
        /** @type {?} */
        var d = this.getDate(year, monthNbr, 1);
        d.setMonth(d.getMonth() + change);
        /** @type {?} */
        var y = d.getFullYear();
        /** @type {?} */
        var m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.opts.monthLabels[m], monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarComponent.prototype.onCloseSelector = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = this.utilService.getKeyCodeFromEvent(event);
        if (keyCode === KeyCode.esc) {
            this.closedByEsc();
        }
    };
    /**
     * @param {?} cell
     * @return {?}
     */
    CalendarComponent.prototype.onDayCellClicked = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        // Cell clicked on the calendar
        this.selectDate(cell.dateObj);
        this.resetMonthYearSelect();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarComponent.prototype.onDayCellKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Move focus by arrow keys
        var _a = this.getSourceRowAndColumnFromEvent(event), sourceRow = _a.sourceRow, sourceCol = _a.sourceCol;
        var _b = this.getTargetFocusRowAndColumn(event, sourceRow, sourceCol, DATE_ROW_COUNT, DATE_COL_COUNT), moveFocus = _b.moveFocus, targetRow = _b.targetRow, targetCol = _b.targetCol, direction = _b.direction;
        if (moveFocus) {
            this.focusCellElement(D, targetRow, targetCol, direction, DATE_COL_COUNT);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarComponent.prototype.getSourceRowAndColumnFromEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var sourceRow = 0;
        /** @type {?} */
        var sourceCol = 0;
        if (event.target && event.target.id) {
            // value of id is for example: m_0_1 (first number = row, second number = column)
            /** @type {?} */
            var arr = event.target.id.split(UNDER_LINE);
            sourceRow = Number(arr[1]);
            sourceCol = Number(arr[2]);
        }
        return { sourceRow: sourceRow, sourceCol: sourceCol };
    };
    /**
     * @param {?} event
     * @param {?} row
     * @param {?} col
     * @param {?} rowCount
     * @param {?} colCount
     * @return {?}
     */
    CalendarComponent.prototype.getTargetFocusRowAndColumn = /**
     * @param {?} event
     * @param {?} row
     * @param {?} col
     * @param {?} rowCount
     * @param {?} colCount
     * @return {?}
     */
    function (event, row, col, rowCount, colCount) {
        /** @type {?} */
        var moveFocus = true;
        /** @type {?} */
        var targetRow = row;
        /** @type {?} */
        var targetCol = col;
        /** @type {?} */
        var direction = false;
        /** @type {?} */
        var keyCode = this.utilService.getKeyCodeFromEvent(event);
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
        return { moveFocus: moveFocus, targetRow: targetRow, targetCol: targetCol, direction: direction };
    };
    /**
     * @param {?} type
     * @param {?} row
     * @param {?} col
     * @param {?} direction
     * @param {?} colCount
     * @return {?}
     */
    CalendarComponent.prototype.focusCellElement = /**
     * @param {?} type
     * @param {?} row
     * @param {?} col
     * @param {?} direction
     * @param {?} colCount
     * @return {?}
     */
    function (type, row, col, direction, colCount) {
        /** @type {?} */
        var className = type + UNDER_LINE + row + UNDER_LINE + col;
        /** @type {?} */
        var elem = this.selectorEl.nativeElement.querySelector(DOT + className);
        if (elem.getAttribute(TABINDEX) !== ZERO_STR) {
            // if the selected element is disabled move a focus to next/previous enabled element
            /** @type {?} */
            var tdList = this.getCalendarElements();
            /** @type {?} */
            var idx = row * (colCount + 1) + col;
            /** @type {?} */
            var enabledElem = null;
            if (direction) {
                // find next enabled
                enabledElem = tdList.slice(idx).find((/**
                 * @param {?} td
                 * @return {?}
                 */
                function (td) { return td.getAttribute(TABINDEX) === ZERO_STR; }));
            }
            else {
                // find previous enabled
                enabledElem = tdList.slice(0, idx).reverse().find((/**
                 * @param {?} td
                 * @return {?}
                 */
                function (td) { return td.getAttribute(TABINDEX) === ZERO_STR; }));
            }
            elem = enabledElem ? enabledElem : this.selectorEl.nativeElement;
        }
        else {
            elem.focus();
        }
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.focusToSelector = /**
     * @return {?}
     */
    function () {
        this.selectorEl.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.getCalendarElements = /**
     * @return {?}
     */
    function () {
        return Array.from(this.selectorEl.nativeElement.querySelectorAll(TD_SELECTOR));
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarComponent.prototype.selectDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var _a = this.opts, dateRange = _a.dateRange, dateFormat = _a.dateFormat, monthLabels = _a.monthLabels, dateRangeDatesDelimiter = _a.dateRangeDatesDelimiter, closeSelectorOnDateSelect = _a.closeSelectorOnDateSelect;
        if (dateRange) {
            // Date range
            /** @type {?} */
            var isBeginDateInitialized = this.utilService.isInitializedDate(this.selectedDateRange.begin);
            /** @type {?} */
            var isEndDateInitialized = this.utilService.isInitializedDate(this.selectedDateRange.end);
            if (isBeginDateInitialized && isEndDateInitialized) {
                // both already selected - set begin date and reset end date
                this.selectedDateRange.begin = date;
                this.selectedDateRange.end = this.utilService.resetDate();
                this.rangeDateSelection({
                    isBegin: true,
                    date: date,
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
                    date: date,
                    jsDate: this.utilService.getDate(date),
                    dateFormat: dateFormat,
                    formatted: this.utilService.formatDate(date, dateFormat, monthLabels),
                    epoc: this.utilService.getEpocTime(date)
                });
            }
            else {
                // second selection
                /** @type {?} */
                var firstDateEarlier = this.utilService.isDateEarlier(date, this.selectedDateRange.begin);
                if (firstDateEarlier) {
                    this.selectedDateRange.begin = date;
                    this.rangeDateSelection({
                        isBegin: true,
                        date: date,
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
                        date: date,
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
    };
    /**
     * @param {?} y
     * @param {?} m
     * @return {?}
     */
    CalendarComponent.prototype.monthStartIdx = /**
     * @param {?} y
     * @param {?} m
     * @return {?}
     */
    function (y, m) {
        // Month start index
        /** @type {?} */
        var d = new Date();
        d.setDate(1);
        d.setMonth(m - 1);
        d.setFullYear(y);
        /** @type {?} */
        var idx = d.getDay() + this.sundayIdx();
        return idx >= 7 ? idx - 7 : idx;
    };
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    CalendarComponent.prototype.daysInMonth = /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    function (m, y) {
        // Return number of days of current month
        return new Date(y, m, 0).getDate();
    };
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    CalendarComponent.prototype.daysInPrevMonth = /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    function (m, y) {
        // Return number of days of the previous month
        /** @type {?} */
        var d = this.getDate(y, m, 1);
        d.setMonth(d.getMonth() - 1);
        return this.daysInMonth(d.getMonth() + 1, d.getFullYear());
    };
    /**
     * @param {?} d
     * @param {?} m
     * @param {?} y
     * @param {?} today
     * @return {?}
     */
    CalendarComponent.prototype.isCurrDay = /**
     * @param {?} d
     * @param {?} m
     * @param {?} y
     * @param {?} today
     * @return {?}
     */
    function (d, m, y, today) {
        // Check is a given date the today
        return d === today.day && m === today.month && y === today.year;
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.getToday = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var date = new Date();
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarComponent.prototype.getDayNumber = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        // Get day number: su=0, mo=1, tu=2, we=3 ...
        /** @type {?} */
        var d = this.getDate(date.year, date.month, date.day);
        return d.getDay();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarComponent.prototype.getWeekday = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        // Get weekday: su, mo, tu, we ...
        return this.weekDayOpts[this.getDayNumber(date)];
    };
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} day
     * @return {?}
     */
    CalendarComponent.prototype.getDate = /**
     * @param {?} year
     * @param {?} month
     * @param {?} day
     * @return {?}
     */
    function (year, month, day) {
        // Creates a date object from given year, month and day
        return new Date(year, month - 1, day, 0, 0, 0, 0);
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.sundayIdx = /**
     * @return {?}
     */
    function () {
        // Index of Sunday day
        return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
    };
    /**
     * @param {?} m
     * @param {?} y
     * @param {?} notifyChange
     * @return {?}
     */
    CalendarComponent.prototype.generateCalendar = /**
     * @param {?} m
     * @param {?} y
     * @param {?} notifyChange
     * @return {?}
     */
    function (m, y, notifyChange) {
        this.dates.length = 0;
        /** @type {?} */
        var today = this.getToday();
        /** @type {?} */
        var monthStart = this.monthStartIdx(y, m);
        /** @type {?} */
        var dInThisM = this.daysInMonth(m, y);
        /** @type {?} */
        var dInPrevM = this.daysInPrevMonth(m, y);
        /** @type {?} */
        var dayNbr = 1;
        /** @type {?} */
        var month = m;
        /** @type {?} */
        var cmo = MonthId.prev;
        var _a = this.opts, rtl = _a.rtl, showWeekNumbers = _a.showWeekNumbers, firstDayOfWeek = _a.firstDayOfWeek, markDates = _a.markDates, markWeekends = _a.markWeekends, sunHighlight = _a.sunHighlight, satHighlight = _a.satHighlight, highlightDates = _a.highlightDates;
        for (var i = 1; i < 7; i++) {
            /** @type {?} */
            var col = rtl ? 6 : 0;
            /** @type {?} */
            var week = [];
            if (i === 1) {
                // First week
                /** @type {?} */
                var pm = dInPrevM - monthStart + 1;
                // Previous month
                for (var j = pm; j <= dInPrevM; j++) {
                    /** @type {?} */
                    var date = { year: m === 1 ? y - 1 : y, month: m === 1 ? 12 : m - 1, day: j };
                    week.push({ dateObj: date,
                        cmo: cmo,
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
                var daysLeft = 7 - week.length;
                for (var j = 0; j < daysLeft; j++) {
                    /** @type {?} */
                    var date = { year: y, month: m, day: dayNbr };
                    week.push({ dateObj: date,
                        cmo: cmo,
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
                for (var j = 1; j < 8; j++) {
                    if (dayNbr > dInThisM) {
                        // Next month
                        dayNbr = 1;
                        cmo = MonthId.next;
                        month = m + 1;
                    }
                    /** @type {?} */
                    var date = { year: cmo === MonthId.next && m === 12 ? y + 1 : y, month: cmo === MonthId.curr ? m : cmo === MonthId.next && m < 12 ? m + 1 : 1, day: dayNbr };
                    week.push({ dateObj: date,
                        cmo: cmo,
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
            var weekNbr = showWeekNumbers && firstDayOfWeek === MO ? this.utilService.getWeekNumber(week[0].dateObj) : 0;
            this.dates.push({ week: week, weekNbr: weekNbr });
        }
        this.setDateViewHeaderBtnDisabledState(m, y);
        if (notifyChange) {
            // Notify parent
            this.calendarViewChanged({ year: y, month: m, first: { number: 1, weekday: this.getWeekday({ year: y, month: m, day: 1 }) }, last: { number: dInThisM, weekday: this.getWeekday({ year: y, month: m, day: dInThisM }) } });
        }
    };
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    CalendarComponent.prototype.setDateViewHeaderBtnDisabledState = /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    function (m, y) {
        /** @type {?} */
        var dpm = false;
        /** @type {?} */
        var dnm = false;
        var _a = this.opts, disableHeaderButtons = _a.disableHeaderButtons, disableUntil = _a.disableUntil, disableSince = _a.disableSince, minYear = _a.minYear, maxYear = _a.maxYear;
        if (disableHeaderButtons) {
            dpm = this.utilService.isDisabledByDisableUntil({ year: m === 1 ? y - 1 : y, month: m === 1 ? 12 : m - 1, day: this.daysInMonth(m === 1 ? 12 : m - 1, m === 1 ? y - 1 : y) }, disableUntil);
            dnm = this.utilService.isDisabledByDisableSince({ year: m === 12 ? y + 1 : y, month: m === 12 ? 1 : m + 1, day: 1 }, disableSince);
        }
        this.prevViewDisabled = m === 1 && y === minYear || dpm;
        this.nextViewDisabled = m === 12 && y === maxYear || dnm;
    };
    /**
     * @param {?} y
     * @return {?}
     */
    CalendarComponent.prototype.setMonthViewHeaderBtnDisabledState = /**
     * @param {?} y
     * @return {?}
     */
    function (y) {
        /** @type {?} */
        var dpm = false;
        /** @type {?} */
        var dnm = false;
        var _a = this.opts, disableHeaderButtons = _a.disableHeaderButtons, disableUntil = _a.disableUntil, disableSince = _a.disableSince, minYear = _a.minYear, maxYear = _a.maxYear;
        if (disableHeaderButtons) {
            dpm = this.utilService.isDisabledByDisableUntil({ year: y - 1, month: 12, day: 31 }, disableUntil);
            dnm = this.utilService.isDisabledByDisableSince({ year: y + 1, month: 1, day: 1 }, disableSince);
        }
        this.prevViewDisabled = y === minYear || dpm;
        this.nextViewDisabled = y === maxYear || dnm;
    };
    /**
     * @param {?} yp
     * @param {?} yn
     * @return {?}
     */
    CalendarComponent.prototype.setYearViewHeaderBtnDisabledState = /**
     * @param {?} yp
     * @param {?} yn
     * @return {?}
     */
    function (yp, yn) {
        /** @type {?} */
        var dpy = false;
        /** @type {?} */
        var dny = false;
        var _a = this.opts, disableHeaderButtons = _a.disableHeaderButtons, disableUntil = _a.disableUntil, disableSince = _a.disableSince, minYear = _a.minYear, maxYear = _a.maxYear;
        if (disableHeaderButtons) {
            dpy = this.utilService.isDisabledByDisableUntil({ year: yp - 1, month: 12, day: 31 }, disableUntil);
            dny = this.utilService.isDisabledByDisableSince({ year: yn + 1, month: 1, day: 1 }, disableSince);
        }
        this.prevViewDisabled = yp <= minYear || dpy;
        this.nextViewDisabled = yn >= maxYear || dny;
    };
    CalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-angular-mydatepicker-calendar",
                    template: "<span #styleEl></span>\n<div class=\"ng-mydp {{opts.stylesData?.selector || ''}}\">\n  <div class=\"myDpSelector\" #selectorEl \n    [libAngularMyDatePickerCalendar]=\"{inline: opts.inline, selectorWidth: opts.selectorWidth, selectorHeight: opts.selectorHeight, selectorPos: selectorPos}\" \n    [ngClass]=\"{'myDpSelectorArrow': opts.showSelectorArrow, 'myDpSelectorArrowLeft': opts.showSelectorArrow && !opts.alignSelectorRight, \n      'myDpSelectorArrowRight': opts.showSelectorArrow&&opts.alignSelectorRight, 'myDpSelectorAbsolute': !opts.inline, 'myDpSelectorPosInitial': opts.inline}\" \n    (keyup)=\"onCloseSelector($event)\" tabindex=\"0\">\n\n    <lib-selection-bar [opts]=\"opts\" [yearsDuration]=\"yearsDuration\" [visibleMonth]=\"visibleMonth\" [selectMonth]=\"selectMonth\" [selectYear]=\"selectYear\"\n                    [prevViewDisabled]=\"prevViewDisabled\" [nextViewDisabled]=\"nextViewDisabled\"\n                    (prevNavigateBtnClicked)=\"onPrevNavigateBtnClicked()\" (nextNavigateBtnClicked)=\"onNextNavigateBtnClicked()\"\n                    (monthViewBtnClicked)=\"onMonthViewBtnClicked()\" (yearViewBtnClicked)=\"onYearViewBtnClicked()\"></lib-selection-bar>\n\n    <lib-day-view *ngIf=\"!selectMonth && !selectYear\" [opts]=\"opts\" [dates]=\"dates\" [weekDays]=\"weekDays\"\n                    [selectedDate]=\"selectedDate\" [selectedDateRange]=\"selectedDateRange\"\n                    (dayCellClicked)=\"onDayCellClicked($event)\"\n                    (dayCellKeyDown)=\"onDayCellKeyDown($event)\"></lib-day-view>\n\n    <lib-month-view *ngIf=\"selectMonth\" [opts]=\"opts\" [months]=\"months\"\n                    (monthCellClicked)=\"onMonthCellClicked($event)\"\n                    (monthCellKeyDown)=\"onMonthCellKeyDown($event)\"></lib-month-view>\n\n    <lib-year-view *ngIf=\"selectYear\" [opts]=\"opts\" [years]=\"years\"\n                    (yearCellClicked)=\"onYearCellClicked($event)\"\n                    (yearCellKeyDown)=\"onYearCellKeyDown($event)\"></lib-year-view>\n\n  </div>\n</div>\n",
                    providers: [UtilService],
                    encapsulation: ViewEncapsulation.None,
                    styles: [".ng-mydp{position:static}.ng-myrtl{direction:rtl}.ng-mydp *{box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;padding:0;margin:0}.ng-mydp table{display:table;border-spacing:0}.ng-mydp table td,.ng-mydp table th{padding:0;margin:0;vertical-align:middle;border:none}.myDpSelector{padding:0;border:1px solid #ccc;border-radius:4px;z-index:100000}.myDpAnimationFadeIn{-webkit-animation:.5s linear myDpAnimationFadeIn;animation:.5s linear myDpAnimationFadeIn}@-webkit-keyframes myDpAnimationFadeIn{0%{transform:translateY(-50px);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes myDpAnimationFadeIn{0%{transform:translateY(-50px);opacity:0}100%{transform:translateY(0);opacity:1}}.myDpAnimationFadeOut{-webkit-animation:.3s linear forwards myDpAnimationFadeOut;animation:.3s linear forwards myDpAnimationFadeOut}@-webkit-keyframes myDpAnimationFadeOut{0%{transform:translateY(0);opacity:1}100%{transform:translateY(-50px);opacity:0}}@keyframes myDpAnimationFadeOut{0%{transform:translateY(0);opacity:1}100%{transform:translateY(-50px);opacity:0}}.myDpAnimationScaleTopIn{-webkit-animation:.3s linear myDpAnimationScaleTopIn;animation:.3s linear myDpAnimationScaleTopIn}@-webkit-keyframes myDpAnimationScaleTopIn{0%{transform:scaleY(0);transform-origin:100% 0}100%{transform:scaleY(1);transform-origin:100% 0}}@keyframes myDpAnimationScaleTopIn{0%{transform:scaleY(0);transform-origin:100% 0}100%{transform:scaleY(1);transform-origin:100% 0}}.myDpAnimationScaleTopOut{-webkit-animation:.3s linear forwards myDpAnimationScaleTopOut;animation:.3s linear forwards myDpAnimationScaleTopOut}@-webkit-keyframes myDpAnimationScaleTopOut{0%{transform:scaleY(1);transform-origin:100% 0;opacity:1}100%{transform:scaleY(0);transform-origin:100% 0;opacity:0}}@keyframes myDpAnimationScaleTopOut{0%{transform:scaleY(1);transform-origin:100% 0;opacity:1}100%{transform:scaleY(0);transform-origin:100% 0;opacity:0}}.myDpAnimationScaleCenterIn{-webkit-animation:.3s linear myDpAnimationScaleCenterIn;animation:.3s linear myDpAnimationScaleCenterIn}@-webkit-keyframes myDpAnimationScaleCenterIn{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes myDpAnimationScaleCenterIn{0%{transform:scale(0)}100%{transform:scale(1)}}.myDpAnimationScaleCenterOut{-webkit-animation:.3s linear forwards myDpAnimationScaleCenterOut;animation:.3s linear forwards myDpAnimationScaleCenterOut}@-webkit-keyframes myDpAnimationScaleCenterOut{0%{transform:scale(1);opacity:1}100%{transform:scale(0);opacity:0}}@keyframes myDpAnimationScaleCenterOut{0%{transform:scale(1);opacity:1}100%{transform:scale(0);opacity:0}}.myDpAnimationRotateIn{-webkit-animation:.3s linear myDpAnimationRotateIn;animation:.3s linear myDpAnimationRotateIn}@-webkit-keyframes myDpAnimationRotateIn{0%{transform:scale(.3) rotate(-45deg);opacity:0}100%{transform:scale(1) rotate(0);opacity:1}}@keyframes myDpAnimationRotateIn{0%{transform:scale(.3) rotate(-45deg);opacity:0}100%{transform:scale(1) rotate(0);opacity:1}}.myDpAnimationRotateOut{-webkit-animation:.3s linear forwards myDpAnimationRotateOut;animation:.3s linear forwards myDpAnimationRotateOut}@-webkit-keyframes myDpAnimationRotateOut{0%{transform:scale(1) rotate(0);opacity:1}100%{transform:scale(.3) rotate(-45deg);opacity:0}}@keyframes myDpAnimationRotateOut{0%{transform:scale(1) rotate(0);opacity:1}100%{transform:scale(.3) rotate(-45deg);opacity:0}}.myDpAnimationFlipDiagonalIn{-webkit-animation:.3s linear myDpAnimationFlipDiagonalIn;animation:.3s linear myDpAnimationFlipDiagonalIn}@-webkit-keyframes myDpAnimationFlipDiagonalIn{0%{transform:rotate3d(1,1,0,-78deg)}100%{transform:rotate3d(1,1,0,0deg)}}@keyframes myDpAnimationFlipDiagonalIn{0%{transform:rotate3d(1,1,0,-78deg)}100%{transform:rotate3d(1,1,0,0deg)}}.myDpAnimationFlipDiagonalOut{-webkit-animation:.3s linear forwards myDpAnimationFlipDiagonalOut;animation:.3s linear forwards myDpAnimationFlipDiagonalOut}@-webkit-keyframes myDpAnimationFlipDiagonalOut{0%{transform:rotate3d(1,1,0,0deg);opacity:1}100%{transform:rotate3d(1,1,0,78deg);opacity:0}}@keyframes myDpAnimationFlipDiagonalOut{0%{transform:rotate3d(1,1,0,0deg);opacity:1}100%{transform:rotate3d(1,1,0,78deg);opacity:0}}.myDpSelectorAbsolute{position:absolute}.myDpSelectorPosInitial{position:initial}.myDpSelector:focus{box-shadow:-1px 1px 6px 0 #add8e6;outline:0}.myDpSelectorArrow{background:#fafafa;padding:0}.myDpSelectorArrow:after,.myDpSelectorArrow:before{bottom:100%;border:solid transparent;content:\" \";height:0;width:0;position:absolute}.myDpSelectorArrow:after{border-color:rgba(250,250,250,0);border-bottom-color:#fafafa;border-width:10px;margin-left:-10px}.myDpSelectorArrow:before{border-color:rgba(204,204,204,0);border-bottom-color:#ccc;border-width:11px;margin-left:-11px}.myDpSelectorArrow:focus:before{border-bottom-color:#add8e6}.myDpSelectorArrowLeft:after,.myDpSelectorArrowLeft:before{left:24px}.myDpSelectorArrowRight:after,.myDpSelectorArrowRight:before{left:86%}::-ms-clear{display:none}.myDpCalTable,.myDpMonthTable,.myDpYearTable{border-radius:0 0 4px 4px;table-layout:fixed;width:100%;height:calc(100% - 30px);background-color:#fff;font-size:14px}.myDpCalTable tbody tr:nth-child(6) td:first-child,.myDpMonthTable tbody tr:nth-child(4) td:first-child,.myDpYearTable tbody tr:nth-child(5) td:first-child{border-bottom-left-radius:4px}.myDpCalTable tbody tr:nth-child(6) td:last-child,.myDpMonthTable tbody tr:nth-child(4) td:last-child,.myDpYearTable tbody tr:nth-child(5) td:last-child{border-bottom-right-radius:4px}.myDpCalTable,.myDpDaycell,.myDpMonthTable,.myDpMonthcell,.myDpWeekDayTitle,.myDpYearTable,.myDpYearcell{border-collapse:collapse;color:#036;line-height:1.1}.myDpDaycell,.myDpMonthcell,.myDpYearcell{padding:4px;text-align:center}.myDpDaycell{background-color:#fff;position:relative}.myDpWeekDayTitle{background-color:transparent;color:#333;font-size:13px;font-weight:400;vertical-align:middle;max-width:36px;overflow:hidden;white-space:nowrap;height:23px;text-align:center}.myDpWeekDayTitleWeekNbr{width:20px}.myDpMonthcell{background-color:#fff;overflow:hidden;white-space:nowrap}.myDpYearcell{background-color:#fff;width:20%}.myDpMonthNbr{font-size:10px;display:block}.myDpDaycellWeekNbr{font-size:9px;cursor:default;text-align:center;color:#333}.myDpNextMonth,.myDpPrevMonth{color:#999}.monthYearSelBar{display:flex;height:30px;background-color:#fff;border-top-left-radius:4px;border-top-right-radius:4px}.myDpPrevBtn{margin-left:10px}.myDpNextBtn{margin-left:auto;margin-right:10px}.myDpMonthYearText{width:100%;line-height:30px;text-align:center}.myDpHeaderBtn{background:0 0;padding:0;border:none;line-height:30px;height:28px;margin-top:1px;color:#000;outline:0;cursor:default}.myDpMonthBtn,.myDpYearBtn{font-size:16px}.myDpMonthBtn{margin-right:6px}.myDpHighlight{color:#c30000}.myDpDimDay{opacity:.5}.myDpCurrMonth{background-color:#fff;font-weight:400}.myDpMarkDate{position:absolute;top:2px;left:2px;border-right:8px solid transparent}.myDpMarkCurrDay,.myDpMarkCurrMonth,.myDpMarkCurrYear{border-bottom:2px solid #036}.myDpRangeColor{background-color:#dbeaff}.myDpSelectedDay,.myDpSelectedMonth,.myDpSelectedYear{border:none;background-color:#8ebfff;border-radius:2px}.myDpHeaderLabelBtnNotEdit{cursor:default}.myDpHeaderBtn::-moz-focus-inner,.myDpNextBtn::-moz-focus-inner,.myDpPrevBtn::-moz-focus-inner{border:0}.myDpHeaderBtn:focus,.myDpMonthLabel:focus,.myDpYearLabel:focus{color:#66afe9;outline:0}.myDpDaycell:focus,.myDpMonthcell:focus,.myDpYearcell:focus{box-shadow:inset 0 0 0 1px #66afe9}.myDpTableSingleDay:hover,.myDpTableSingleMonth:hover,.myDpTableSingleYear:hover{background-color:#ddd}.myDpDaycell,.myDpMonthLabel,.myDpMonthcell,.myDpYearLabel,.myDpYearcell{cursor:pointer}.myDpHeaderBtnEnabled:hover,.myDpMonthLabel:hover,.myDpYearLabel:hover{color:#777}.myDpHeaderBtnEnabled{cursor:pointer}.myDpHeaderBtnDisabled{cursor:not-allowed;opacity:.65}.myDpDisabled{cursor:default;color:#999;background:#fbefef}@font-face{font-family:angular-mydatepicker;src:url(data:application/octet-stream;base64,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) format('woff');font-weight:400;font-style:normal}.myDpIcon{font-family:angular-mydatepicker;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#222;font-size:20px}.myDpIconLeftArrow:before{content:\"\\e800\"}.myDpIconRightArrow:before{content:\"\\e801\"}"]
                }] }
    ];
    /** @nocollapse */
    CalendarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: UtilService }
    ]; };
    CalendarComponent.propDecorators = {
        selectorEl: [{ type: ViewChild, args: ["selectorEl",] }],
        styleEl: [{ type: ViewChild, args: ["styleEl",] }],
        position: [{ type: HostBinding, args: ["style.position",] }]
    };
    return CalendarComponent;
}());
export { CalendarComponent };
if (false) {
    /** @type {?} */
    CalendarComponent.prototype.selectorEl;
    /** @type {?} */
    CalendarComponent.prototype.styleEl;
    /** @type {?} */
    CalendarComponent.prototype.position;
    /** @type {?} */
    CalendarComponent.prototype.opts;
    /** @type {?} */
    CalendarComponent.prototype.visibleMonth;
    /** @type {?} */
    CalendarComponent.prototype.selectedMonth;
    /** @type {?} */
    CalendarComponent.prototype.selectedDate;
    /** @type {?} */
    CalendarComponent.prototype.selectedDateRange;
    /** @type {?} */
    CalendarComponent.prototype.weekDays;
    /** @type {?} */
    CalendarComponent.prototype.dates;
    /** @type {?} */
    CalendarComponent.prototype.months;
    /** @type {?} */
    CalendarComponent.prototype.years;
    /** @type {?} */
    CalendarComponent.prototype.yearsDuration;
    /** @type {?} */
    CalendarComponent.prototype.dayIdx;
    /** @type {?} */
    CalendarComponent.prototype.weekDayOpts;
    /** @type {?} */
    CalendarComponent.prototype.selectMonth;
    /** @type {?} */
    CalendarComponent.prototype.selectYear;
    /** @type {?} */
    CalendarComponent.prototype.dateChanged;
    /** @type {?} */
    CalendarComponent.prototype.calendarViewChanged;
    /** @type {?} */
    CalendarComponent.prototype.rangeDateSelection;
    /** @type {?} */
    CalendarComponent.prototype.closedByEsc;
    /** @type {?} */
    CalendarComponent.prototype.selectorPos;
    /** @type {?} */
    CalendarComponent.prototype.prevViewDisabled;
    /** @type {?} */
    CalendarComponent.prototype.nextViewDisabled;
    /** @type {?} */
    CalendarComponent.prototype.clickListener;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.elem;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.utilService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1teWRhdGVwaWNrZXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQTRCLFdBQVcsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQWN2SixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDN0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQzVELE9BQU8sRUFBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUNoSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBRXBMO0lBd0NFLDJCQUFvQixJQUFnQixFQUFVLFFBQW1CLEVBQVUsR0FBc0IsRUFBVSxXQUF3QjtRQUFuSSxpQkFNQztRQU5tQixTQUFJLEdB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QUcsRUFBRSxJQUFJLE9BQU8sSUFBSSxHQUFHLENBQUM7UUFDN0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsSUFBSSxPQUFPLElBQUksR0FBRyxDQUFDO0lBQy9DLENBQUM7O2dCQWx0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQ0FBbUM7b0JBQzdDLDJnRUFBd0M7b0JBRXhDLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQztvQkFDeEIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkE1QmtCLFVBQVU7Z0JBQWdDLFNBQVM7Z0JBQUUsaUJBQWlCO2dCQWNqRixXQUFXOzs7NkJBZ0JoQixTQUFTLFNBQUMsWUFBWTswQkFDdEIsU0FBUyxTQUFDLFNBQVM7MkJBRW5CLFdBQVcsU0FBQyxnQkFBZ0I7O0lBd3NCL0Isd0JBQUM7Q0FBQSxBQW50QkQsSUFtdEJDO1NBNXNCWSxpQkFBaUI7OztJQUM1Qix1Q0FBZ0Q7O0lBQ2hELG9DQUEwQzs7SUFFMUMscUNBQW1EOztJQUVuRCxpQ0FBaUI7O0lBQ2pCLHlDQUFxRTs7SUFDckUsMENBQWlEOztJQUNqRCx5Q0FBb0Q7O0lBQ3BELDhDQUF5Rzs7SUFDekcscUNBQTZCOztJQUM3QixrQ0FBMkI7O0lBQzNCLG1DQUE0Qzs7SUFDNUMsa0NBQTBDOztJQUMxQywwQ0FBMkI7O0lBQzNCLG1DQUFtQjs7SUFDbkIsd0NBQTBEOztJQUUxRCx3Q0FBNkI7O0lBQzdCLHVDQUE0Qjs7SUFFNUIsd0NBQXdEOztJQUN4RCxnREFBMkQ7O0lBQzNELCtDQUF5RDs7SUFDekQsd0NBQXdCOztJQUN4Qix3Q0FBd0M7O0lBRXhDLDZDQUFrQzs7SUFDbEMsNkNBQWtDOztJQUVsQywwQ0FBMEI7Ozs7O0lBRWQsaUNBQXdCOzs7OztJQUFFLHFDQUEyQjs7Ozs7SUFBRSxnQ0FBOEI7Ozs7O0lBQUUsd0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uLCBWaWV3Q2hpbGQsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSG9zdEJpbmRpbmd9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0lNeURhdGV9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL215LWRhdGUuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeURhdGVSYW5nZX0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvbXktZGF0ZS1yYW5nZS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15TW9udGh9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL215LW1vbnRoLmludGVyZmFjZVwiO1xuaW1wb3J0IHtJTXlDYWxlbmRhckRheX0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvbXktY2FsZW5kYXItZGF5LmludGVyZmFjZVwiO1xuaW1wb3J0IHtJTXlDYWxlbmRhck1vbnRofSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9teS1jYWxlbmRhci1tb250aC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15Q2FsZW5kYXJZZWFyfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9teS1jYWxlbmRhci15ZWFyLmludGVyZmFjZVwiO1xuaW1wb3J0IHtJTXlXZWVrfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9teS13ZWVrLmludGVyZmFjZVwiO1xuaW1wb3J0IHtJTXlPcHRpb25zfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9teS1vcHRpb25zLmludGVyZmFjZVwiO1xuaW1wb3J0IHtJTXlTZWxlY3RvclBvc2l0aW9ufSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9teS1zZWxlY3Rvci1wb3MuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeUNhbGVuZGFyVmlld0NoYW5nZWR9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL215LWNhbGVuZGFyLXZpZXctY2hhbmdlZC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15RGF0ZU1vZGVsfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9teS1kYXRlLW1vZGVsLmludGVyZmFjZVwiO1xuaW1wb3J0IHtJTXlSYW5nZURhdGVTZWxlY3Rpb259IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL215LXJhbmdlLWRhdGUtc2VsZWN0aW9uLmludGVyZmFjZVwiO1xuaW1wb3J0IHtJTXlDYWxlbmRhckFuaW1hdGlvbn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvbXktY2FsZW5kYXItYW5pbWF0aW9uLmludGVyZmFjZVwiO1xuaW1wb3J0IHtVdGlsU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FuZ3VsYXItbXlkYXRlcGlja2VyLnV0aWwuc2VydmljZVwiO1xuaW1wb3J0IHtLZXlDb2RlfSBmcm9tIFwiLi4vLi4vZW51bXMva2V5LWNvZGUuZW51bVwiO1xuaW1wb3J0IHtNb250aElkfSBmcm9tIFwiLi4vLi4vZW51bXMvbW9udGgtaWQuZW51bVwiO1xuaW1wb3J0IHtEZWZhdWx0Vmlld30gZnJvbSBcIi4uLy4uL2VudW1zL2RlZmF1bHQtdmlldy5lbnVtXCI7XG5pbXBvcnQge0NhbEFuaW1hdGlvbn0gZnJvbSBcIi4uLy4uL2VudW1zL2NhbC1hbmltYXRpb24uZW51bVwiO1xuaW1wb3J0IHtET1QsIFVOREVSX0xJTkUsIEQsIE0sIFksIERBVEVfUk9XX0NPVU5ULCBEQVRFX0NPTF9DT1VOVCwgTU9OVEhfUk9XX0NPVU5ULCBNT05USF9DT0xfQ09VTlQsIFlFQVJfUk9XX0NPVU5ULCBZRUFSX0NPTF9DT1VOVCwgXG4gIFNVLCBNTywgVFUsIFdFLCBUSCwgRlIsIFNBLCBFTVBUWV9TVFIsIENMSUNLLCBTVFlMRSwgTVlfRFBfQU5JTUFUSU9OLCBBTklNQVRJT05fTkFNRVMsIElOLCBPVVQsIFRBQklOREVYLCBURF9TRUxFQ1RPUiwgWkVST19TVFIsIFlFQVJfU0VQQVJBVE9SfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGliLWFuZ3VsYXItbXlkYXRlcGlja2VyLWNhbGVuZGFyXCIsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuLi8uLi9jc3MvYW5ndWxhci1teWRhdGVwaWNrZXIuc3R5bGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW1V0aWxTZXJ2aWNlXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoXCJzZWxlY3RvckVsXCIpIHNlbGVjdG9yRWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJzdHlsZUVsXCIpIHN0eWxlRWw6IEVsZW1lbnRSZWY7XG4gIFxuICBASG9zdEJpbmRpbmcoXCJzdHlsZS5wb3NpdGlvblwiKSBwb3NpdGlvbiA9IFwic3RhdGljXCI7XG5cbiAgb3B0czogSU15T3B0aW9ucztcbiAgdmlzaWJsZU1vbnRoOiBJTXlNb250aCA9IHttb250aFR4dDogRU1QVFlfU1RSLCBtb250aE5icjogMCwgeWVhcjogMH07XG4gIHNlbGVjdGVkTW9udGg6IElNeU1vbnRoID0ge21vbnRoTmJyOiAwLCB5ZWFyOiAwfTtcbiAgc2VsZWN0ZWREYXRlOiBJTXlEYXRlID0ge3llYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDB9O1xuICBzZWxlY3RlZERhdGVSYW5nZTogSU15RGF0ZVJhbmdlID0ge2JlZ2luOiB7eWVhcjogMCwgbW9udGg6IDAsIGRheTogMH0sIGVuZDoge3llYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDB9fTtcbiAgd2Vla0RheXM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgZGF0ZXM6IEFycmF5PElNeVdlZWs+ID0gW107XG4gIG1vbnRoczogQXJyYXk8QXJyYXk8SU15Q2FsZW5kYXJNb250aD4+ID0gW107XG4gIHllYXJzOiBBcnJheTxBcnJheTxJTXlDYWxlbmRhclllYXI+PiA9IFtdO1xuICB5ZWFyc0R1cmF0aW9uOiBzdHJpbmcgPSBcIlwiO1xuICBkYXlJZHg6IG51bWJlciA9IDA7XG4gIHdlZWtEYXlPcHRzOiBBcnJheTxzdHJpbmc+ID0gW1NVLCBNTywgVFUsIFdFLCBUSCwgRlIsIFNBXTtcblxuICBzZWxlY3RNb250aDogYm9vbGVhbiA9IGZhbHNlO1xuICBzZWxlY3RZZWFyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgZGF0ZUNoYW5nZWQ6IChkbTogSU15RGF0ZU1vZGVsLCBjbG9zZTogYm9vbGVhbikgPT4gdm9pZDtcbiAgY2FsZW5kYXJWaWV3Q2hhbmdlZDogKGN2YzogSU15Q2FsZW5kYXJWaWV3Q2hhbmdlZCkgPT4gdm9pZDtcbiAgcmFuZ2VEYXRlU2VsZWN0aW9uOiAocmRzOiBJTXlSYW5nZURhdGVTZWxlY3Rpb24pID0+IHZvaWQ7XG4gIGNsb3NlZEJ5RXNjOiAoKSA9PiB2b2lkO1xuICBzZWxlY3RvclBvczogSU15U2VsZWN0b3JQb3NpdGlvbiA9IG51bGw7XG5cbiAgcHJldlZpZXdEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBuZXh0Vmlld0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY2xpY2tMaXN0ZW5lcjogKCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW06IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHV0aWxTZXJ2aWNlOiBVdGlsU2VydmljZSkge1xuICAgIHRoaXMuY2xpY2tMaXN0ZW5lciA9IHJlbmRlcmVyLmxpc3RlbihlbGVtLm5hdGl2ZUVsZW1lbnQsIENMSUNLLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgaWYgKCh0aGlzLm9wdHMubW9udGhTZWxlY3RvciB8fCB0aGlzLm9wdHMueWVhclNlbGVjdG9yKSAmJiBldmVudC50YXJnZXQpIHtcbiAgICAgICAgdGhpcy5yZXNldE1vbnRoWWVhclNlbGVjdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHtzdHlsZXNEYXRhLCBjYWxlbmRhckFuaW1hdGlvbiwgaW5saW5lfSA9IHRoaXMub3B0cztcblxuICAgIGlmIChzdHlsZXNEYXRhLnN0eWxlcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHN0eWxlRWxUZW1wOiBhbnkgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoU1RZTEUpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsVGVtcCwgdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KHN0eWxlc0RhdGEuc3R5bGVzKSk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuc3R5bGVFbC5uYXRpdmVFbGVtZW50LCBzdHlsZUVsVGVtcCk7XG4gICAgfVxuXG4gICAgaWYgKGNhbGVuZGFyQW5pbWF0aW9uLmluICE9PSBDYWxBbmltYXRpb24uTm9uZSkge1xuICAgICAgdGhpcy5zZXRDYWxlbmRhckFuaW1hdGlvbihjYWxlbmRhckFuaW1hdGlvbiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKCFpbmxpbmUpIHtcbiAgICAgIHRoaXMuZm9jdXNUb1NlbGVjdG9yKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGlja0xpc3RlbmVyKCk7XG4gIH1cblxuICBpbml0aWFsaXplQ29tcG9uZW50KG9wdHM6IElNeU9wdGlvbnMsIGRlZmF1bHRNb250aDogc3RyaW5nLCBzZWxlY3RvclBvczogSU15U2VsZWN0b3JQb3NpdGlvbiwgaW5wdXRWYWx1ZTogc3RyaW5nLCBkYzogKGRtOiBJTXlEYXRlTW9kZWwsIGNsb3NlOiBib29sZWFuKSA9PiB2b2lkLCBjdmM6IChjdmM6IElNeUNhbGVuZGFyVmlld0NoYW5nZWQpID0+IHZvaWQsIHJkczogKHJkczogSU15UmFuZ2VEYXRlU2VsZWN0aW9uKSA9PiB2b2lkLCBjYmU6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICAgIHRoaXMuc2VsZWN0b3JQb3MgPSBzZWxlY3RvclBvcztcbiAgICBcbiAgICB0aGlzLmRhdGVDaGFuZ2VkID0gZGM7XG4gICAgdGhpcy5jYWxlbmRhclZpZXdDaGFuZ2VkID0gY3ZjO1xuICAgIHRoaXMucmFuZ2VEYXRlU2VsZWN0aW9uID0gcmRzO1xuICAgIHRoaXMuY2xvc2VkQnlFc2MgPSBjYmU7XG5cbiAgICBjb25zdCB7ZGVmYXVsdFZpZXcsIGRhdGVSYW5nZSwgZmlyc3REYXlPZldlZWssIGRheUxhYmVsc30gPSB0aGlzLm9wdHM7XG5cbiAgICB0aGlzLndlZWtEYXlzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5kYXlJZHggPSB0aGlzLndlZWtEYXlPcHRzLmluZGV4T2YoZmlyc3REYXlPZldlZWspO1xuICAgIGlmICh0aGlzLmRheUlkeCAhPT0gLTEpIHtcbiAgICAgIGxldCBpZHg6IG51bWJlciA9IHRoaXMuZGF5SWR4O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndlZWtEYXlPcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMud2Vla0RheXMucHVzaChkYXlMYWJlbHNbdGhpcy53ZWVrRGF5T3B0c1tpZHhdXSk7XG4gICAgICAgIGlkeCA9IHRoaXMud2Vla0RheU9wdHNbaWR4XSA9PT0gU0EgPyAwIDogaWR4ICsgMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0b2RheTogSU15RGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcbiAgICB0aGlzLnNlbGVjdGVkTW9udGggPSB7bW9udGhOYnI6IHRvZGF5Lm1vbnRoLCB5ZWFyOiB0b2RheS55ZWFyfTtcblxuICAgIGlmIChkZWZhdWx0TW9udGggJiYgZGVmYXVsdE1vbnRoLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZWxlY3RlZE1vbnRoID0gdGhpcy51dGlsU2VydmljZS5wYXJzZURlZmF1bHRNb250aChkZWZhdWx0TW9udGgpO1xuICAgIH1cblxuICAgIGlmICghZGF0ZVJhbmdlKSB7XG4gICAgICAvLyBTaW5nbGUgZGF0ZSBtb2RlXG4gICAgICBjb25zdCBkYXRlOiBJTXlEYXRlID0gdGhpcy51dGlsU2VydmljZS5pc0RhdGVWYWxpZChpbnB1dFZhbHVlLCB0aGlzLm9wdHMpO1xuXG4gICAgICBpZiAodGhpcy51dGlsU2VydmljZS5pc0luaXRpYWxpemVkRGF0ZShkYXRlKSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNb250aCA9IHttb250aE5icjogZGF0ZS5tb250aCwgeWVhcjogZGF0ZS55ZWFyfTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBEYXRlIHJhbmdlIG1vZGVcbiAgICAgIGNvbnN0IHtiZWdpbiwgZW5kfSA9IHRoaXMudXRpbFNlcnZpY2UuaXNEYXRlVmFsaWREYXRlUmFuZ2UoaW5wdXRWYWx1ZSwgdGhpcy5vcHRzKTtcblxuICAgICAgaWYgKHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoYmVnaW4pICYmIHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoZW5kKSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZVJhbmdlID0ge2JlZ2luLCBlbmR9O1xuICAgICAgICB0aGlzLnNlbGVjdGVkTW9udGggPSB7bW9udGhOYnI6IGJlZ2luLm1vbnRoLCB5ZWFyOiBiZWdpbi55ZWFyfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldENhbGVuZGFyVmlzaWJsZU1vbnRoKCk7XG5cbiAgICBpZiAoZGVmYXVsdFZpZXcgPT09IERlZmF1bHRWaWV3Lk1vbnRoKSB7XG4gICAgICB0aGlzLm9uTW9udGhWaWV3QnRuQ2xpY2tlZCgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChkZWZhdWx0VmlldyA9PT0gRGVmYXVsdFZpZXcuWWVhcikge1xuICAgICAgdGhpcy5vblllYXJWaWV3QnRuQ2xpY2tlZCgpO1xuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hDb21wb25lbnQob3B0czogSU15T3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMub3B0cyA9IG9wdHM7XG5cbiAgICBjb25zdCB7c2VsZWN0TW9udGgsIHNlbGVjdFllYXIsIHllYXJzfSA9IHRoaXM7XG4gICAgaWYgKCFzZWxlY3RNb250aCAmJiAhc2VsZWN0WWVhcikge1xuICAgICAgY29uc3Qge21vbnRoTmJyLCB5ZWFyfSA9IHRoaXMudmlzaWJsZU1vbnRoO1xuICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKG1vbnRoTmJyLCB5ZWFyLCBmYWxzZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNlbGVjdE1vbnRoKSB7XG4gICAgICB0aGlzLmdlbmVyYXRlTW9udGhzKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNlbGVjdFllYXIpIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVZZWFycyh0aGlzLmdldFllYXJWYWx1ZUJ5Um93QW5kQ29sKDIsIDIpKTsgXG4gICAgfVxuICB9XG5cbiAgc2V0Q2FsZW5kYXJBbmltYXRpb24oY2FsQW5pbWF0aW9uOiBJTXlDYWxlbmRhckFuaW1hdGlvbiwgaXNPcGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3Qge25hdGl2ZUVsZW1lbnR9ID0gdGhpcy5zZWxlY3RvckVsO1xuICAgIGNvbnN0IHtyZW5kZXJlcn0gPSB0aGlzO1xuXG4gICAgY29uc3QgY2xhc3NJbiA9IE1ZX0RQX0FOSU1BVElPTiArIEFOSU1BVElPTl9OQU1FU1tjYWxBbmltYXRpb24uaW4gLSAxXTtcbiAgICBpZiAoaXNPcGVuKSB7XG4gICAgICByZW5kZXJlci5hZGRDbGFzcyhuYXRpdmVFbGVtZW50LCBjbGFzc0luICsgSU4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IGNsYXNzT3V0ID0gTVlfRFBfQU5JTUFUSU9OICsgQU5JTUFUSU9OX05BTUVTW2NhbEFuaW1hdGlvbi5vdXQgLSAxXTtcbiAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKG5hdGl2ZUVsZW1lbnQsIGNsYXNzSW4gKyBJTik7XG4gICAgICByZW5kZXJlci5hZGRDbGFzcyhuYXRpdmVFbGVtZW50LCBjbGFzc091dCArIE9VVCk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXREYXRlVmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm9wdHMuZGF0ZVJhbmdlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHRoaXMudXRpbFNlcnZpY2UucmVzZXREYXRlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZERhdGVSYW5nZS5iZWdpbiA9IHRoaXMudXRpbFNlcnZpY2UucmVzZXREYXRlKCk7XG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZVJhbmdlLmVuZCA9IHRoaXMudXRpbFNlcnZpY2UucmVzZXREYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0RGF0ZVZhbHVlKGRhdGU6IElNeURhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGRhdGU7XG4gIH1cblxuICBzZXREYXRlUmFuZ2VWYWx1ZShiZWdpbjogSU15RGF0ZSwgZW5kOiBJTXlEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZERhdGVSYW5nZS5iZWdpbiA9IGJlZ2luO1xuICAgIHRoaXMuc2VsZWN0ZWREYXRlUmFuZ2UuZW5kID0gZW5kO1xuICB9XG5cbiAgcmVzZXRNb250aFllYXJTZWxlY3QoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RNb250aCA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0WWVhciA9IGZhbHNlO1xuICB9XG5cbiAgb25Nb250aFZpZXdCdG5DbGlja2VkKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0TW9udGggPSAhdGhpcy5zZWxlY3RNb250aDtcbiAgICB0aGlzLnNlbGVjdFllYXIgPSBmYWxzZTtcbiAgICBcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgaWYgKHRoaXMuc2VsZWN0TW9udGgpIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVNb250aHMoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCB7eWVhciwgbW9udGhOYnJ9ID0gdGhpcy5zZWxlY3RlZE1vbnRoO1xuICAgICAgdGhpcy52aXNpYmxlTW9udGggPSB7bW9udGhUeHQ6IHRoaXMub3B0cy5tb250aExhYmVsc1ttb250aE5icl0sIG1vbnRoTmJyLCB5ZWFyfTtcbiAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcihtb250aE5iciwgeWVhciwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb250aENlbGxDbGlja2VkKGNlbGw6IElNeUNhbGVuZGFyTW9udGgpOiB2b2lkIHtcbiAgICBjb25zdCB7eWVhciwgbW9udGhOYnJ9ID0gdGhpcy52aXNpYmxlTW9udGg7XG5cbiAgICBjb25zdCBtYzogYm9vbGVhbiA9IGNlbGwubmJyICE9PSBtb250aE5icjtcbiAgICB0aGlzLnZpc2libGVNb250aCA9IHttb250aFR4dDogdGhpcy5vcHRzLm1vbnRoTGFiZWxzW2NlbGwubmJyXSwgbW9udGhOYnI6IGNlbGwubmJyLCB5ZWFyOiB5ZWFyfTtcbiAgICB0aGlzLnNlbGVjdGVkTW9udGgueWVhciA9IHRoaXMudmlzaWJsZU1vbnRoLnllYXI7XG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKGNlbGwubmJyLCB5ZWFyLCBtYyk7XG4gICAgdGhpcy5zZWxlY3RNb250aCA9IGZhbHNlO1xuICAgIHRoaXMuZm9jdXNUb1NlbGVjdG9yKCk7XG4gIH1cblxuICBvbk1vbnRoQ2VsbEtleURvd24oZXZlbnQ6IGFueSkge1xuICAgIC8vIE1vdmUgZm9jdXMgYnkgYXJyb3cga2V5c1xuICAgIGNvbnN0IHtzb3VyY2VSb3csIHNvdXJjZUNvbH0gPSB0aGlzLmdldFNvdXJjZVJvd0FuZENvbHVtbkZyb21FdmVudChldmVudCk7XG4gICAgY29uc3Qge21vdmVGb2N1cywgdGFyZ2V0Um93LCB0YXJnZXRDb2wsIGRpcmVjdGlvbn0gPSB0aGlzLmdldFRhcmdldEZvY3VzUm93QW5kQ29sdW1uKGV2ZW50LCBzb3VyY2VSb3csIHNvdXJjZUNvbCwgTU9OVEhfUk9XX0NPVU5ULCBNT05USF9DT0xfQ09VTlQpO1xuXG4gICAgaWYgKG1vdmVGb2N1cykge1xuICAgICAgdGhpcy5mb2N1c0NlbGxFbGVtZW50KE0sIHRhcmdldFJvdywgdGFyZ2V0Q29sLCBkaXJlY3Rpb24sIE1PTlRIX0NPTF9DT1VOVCk7XG4gICAgfVxuICB9XG5cbiAgb25ZZWFyVmlld0J0bkNsaWNrZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RZZWFyID0gIXRoaXMuc2VsZWN0WWVhcjtcbiAgICB0aGlzLnNlbGVjdE1vbnRoID0gZmFsc2U7XG5cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgaWYgKHRoaXMuc2VsZWN0WWVhcikge1xuICAgICAgdGhpcy5nZW5lcmF0ZVllYXJzKHRoaXMudmlzaWJsZU1vbnRoLnllYXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IHt5ZWFyLCBtb250aE5icn0gPSB0aGlzLnNlbGVjdGVkTW9udGg7XG4gICAgICB0aGlzLnZpc2libGVNb250aCA9IHttb250aFR4dDogdGhpcy5vcHRzLm1vbnRoTGFiZWxzW21vbnRoTmJyXSwgbW9udGhOYnIsIHllYXJ9O1xuICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKG1vbnRoTmJyLCB5ZWFyLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBvblllYXJDZWxsQ2xpY2tlZChjZWxsOiBJTXlDYWxlbmRhclllYXIpOiB2b2lkIHtcbiAgICBjb25zdCB7eWVhciwgbW9udGhOYnIsIG1vbnRoVHh0fSA9IHRoaXMudmlzaWJsZU1vbnRoO1xuXG4gICAgY29uc3QgeWM6IGJvb2xlYW4gPSBjZWxsLnllYXIgIT09IHllYXI7XG4gICAgdGhpcy52aXNpYmxlTW9udGggPSB7bW9udGhUeHQ6IG1vbnRoVHh0LCBtb250aE5icjogbW9udGhOYnIsIHllYXI6IGNlbGwueWVhcn07XG4gICAgdGhpcy5zZWxlY3RlZE1vbnRoLnllYXIgPSB0aGlzLnZpc2libGVNb250aC55ZWFyO1xuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcihtb250aE5iciwgY2VsbC55ZWFyLCB5Yyk7XG4gICAgdGhpcy5zZWxlY3RZZWFyID0gZmFsc2U7XG4gICAgdGhpcy5mb2N1c1RvU2VsZWN0b3IoKTtcbiAgfVxuXG4gIG9uWWVhckNlbGxLZXlEb3duKGV2ZW50OiBhbnkpIHtcbiAgICAvLyBNb3ZlIGZvY3VzIGJ5IGFycm93IGtleXNcbiAgICBjb25zdCB7c291cmNlUm93LCBzb3VyY2VDb2x9ID0gdGhpcy5nZXRTb3VyY2VSb3dBbmRDb2x1bW5Gcm9tRXZlbnQoZXZlbnQpO1xuICAgIGNvbnN0IHttb3ZlRm9jdXMsIHRhcmdldFJvdywgdGFyZ2V0Q29sLCBkaXJlY3Rpb259ID0gdGhpcy5nZXRUYXJnZXRGb2N1c1Jvd0FuZENvbHVtbihldmVudCwgc291cmNlUm93LCBzb3VyY2VDb2wsIFlFQVJfUk9XX0NPVU5ULCBZRUFSX0NPTF9DT1VOVCk7XG5cbiAgICBpZiAobW92ZUZvY3VzKSB7XG4gICAgICB0aGlzLmZvY3VzQ2VsbEVsZW1lbnQoWSwgdGFyZ2V0Um93LCB0YXJnZXRDb2wsIGRpcmVjdGlvbiwgWUVBUl9DT0xfQ09VTlQpO1xuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlTW9udGhzKCk6IHZvaWQge1xuICAgIGNvbnN0IHRvZGF5OiBJTXlEYXRlID0gdGhpcy5nZXRUb2RheSgpO1xuICAgIHRoaXMubW9udGhzLmxlbmd0aCA9IDA7XG5cbiAgICBjb25zdCB7eWVhciwgbW9udGhOYnJ9ID0gdGhpcy52aXNpYmxlTW9udGg7XG4gICAgY29uc3Qge3J0bCwgbW9udGhMYWJlbHN9ID0gdGhpcy5vcHRzO1xuXG4gICAgbGV0IHJvdzogbnVtYmVyID0gMDtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMjsgaSArPSAzKSB7XG4gICAgICBjb25zdCByb3dEYXRhOiBBcnJheTxJTXlDYWxlbmRhck1vbnRoPiA9IFtdO1xuICAgICAgbGV0IGNvbCA9IHJ0bCA/IDIgOiAwO1xuXG4gICAgICBmb3IgKGxldCBqID0gaTsgaiA8IGkgKyAzOyBqKyspIHtcbiAgICAgICAgY29uc3QgZGlzYWJsZWQ6IGJvb2xlYW4gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWRNb250aCh5ZWFyLCBqLCB0aGlzLmRheXNJbk1vbnRoKGosIHllYXIpLCB0aGlzLm9wdHMpO1xuICAgICAgICByb3dEYXRhLnB1c2goe1xuICAgICAgICAgIG5icjogaiwgXG4gICAgICAgICAgbmFtZTogbW9udGhMYWJlbHNbal0sIFxuICAgICAgICAgIGN1cnJNb250aDogaiA9PT0gdG9kYXkubW9udGggJiYgeWVhciA9PT0gdG9kYXkueWVhciwgXG4gICAgICAgICAgc2VsZWN0ZWQ6IGogPT09IG1vbnRoTmJyICYmIHllYXIgPT09IHRoaXMuc2VsZWN0ZWRNb250aC55ZWFyLCBcbiAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICByb3csXG4gICAgICAgICAgY29sOiBydGwgPyBjb2wtLSA6IGNvbCsrXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcm93Kys7XG4gICAgICB0aGlzLm1vbnRocy5wdXNoKHJvd0RhdGEpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0TW9udGhWaWV3SGVhZGVyQnRuRGlzYWJsZWRTdGF0ZSh5ZWFyKTtcbiAgfVxuXG4gIGdlbmVyYXRlWWVhcnMoaW5wdXRZZWFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB7bWluWWVhciwgbWF4WWVhciwgcnRsfSA9IHRoaXMub3B0cztcblxuICAgIGxldCB5OiBudW1iZXIgPSBpbnB1dFllYXIgLSAxMjtcbiAgICBpZiAoaW5wdXRZZWFyIDwgbWluWWVhcikge1xuICAgICAgeSA9IG1pblllYXI7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0WWVhciArIDI1ID4gbWF4WWVhcikge1xuICAgICAgeSA9IG1heFllYXIgLSAyNDtcbiAgICB9XG5cbiAgICBjb25zdCB7eWVhcn0gPSB0aGlzLnZpc2libGVNb250aDtcblxuICAgIHRoaXMueWVhcnMubGVuZ3RoID0gMDtcbiAgICBjb25zdCB0b2RheTogSU15RGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcblxuICAgIGxldCByb3c6IG51bWJlciA9IDA7XG4gICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgMjU7IGkgKz0gNSkge1xuICAgICAgY29uc3Qgcm93RGF0YTogQXJyYXk8SU15Q2FsZW5kYXJZZWFyPiA9IFtdO1xuICAgICAgbGV0IGNvbDogbnVtYmVyID0gcnRsID8gNCA6IDA7XG5cbiAgICAgIGZvciAobGV0IGogPSBpOyBqIDwgaSArIDU7IGorKykge1xuICAgICAgICBjb25zdCBkaXNhYmxlZDogYm9vbGVhbiA9IHRoaXMudXRpbFNlcnZpY2UuaXNEaXNhYmxlZFllYXIoaiwgdGhpcy5vcHRzKTtcbiAgICAgICAgcm93RGF0YS5wdXNoKHtcbiAgICAgICAgICB5ZWFyOiBqLCBcbiAgICAgICAgICBjdXJyWWVhcjogaiA9PT0gdG9kYXkueWVhciwgXG4gICAgICAgICAgc2VsZWN0ZWQ6IGogPT09IHllYXIsIFxuICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgIHJvdyxcbiAgICAgICAgICBjb2w6IHJ0bCA/IGNvbC0tIDogY29sKytcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByb3crKztcbiAgICAgIHRoaXMueWVhcnMucHVzaChyb3dEYXRhKTtcbiAgICB9XG5cbiAgICBjb25zdCBiZWdpblllYXI6IG51bWJlciA9IHRoaXMuZ2V0WWVhclZhbHVlQnlSb3dBbmRDb2woMCwgMCk7XG4gICAgY29uc3QgZW5kWWVhcjogbnVtYmVyID0gYmVnaW5ZZWFyICsgMjQ7XG4gICAgdGhpcy55ZWFyc0R1cmF0aW9uID0gKCFydGwgPyBiZWdpblllYXIgOiBlbmRZZWFyKSArIFlFQVJfU0VQQVJBVE9SICsgKCFydGwgPyBlbmRZZWFyIDogYmVnaW5ZZWFyKTtcblxuICAgIHRoaXMuc2V0WWVhclZpZXdIZWFkZXJCdG5EaXNhYmxlZFN0YXRlKGJlZ2luWWVhciwgZW5kWWVhcik7XG4gIH1cblxuICBnZXRZZWFyVmFsdWVCeVJvd0FuZENvbChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnllYXJzW3Jvd11bY29sXS55ZWFyO1xuICB9XG5cbiAgc2V0Q2FsZW5kYXJWaXNpYmxlTW9udGgoKTogdm9pZCB7XG4gICAgLy8gU2V0cyB2aXNpYmxlIG1vbnRoIG9mIGNhbGVuZGFyXG4gICAgY29uc3Qge3llYXIsIG1vbnRoTmJyfSA9IHRoaXMuc2VsZWN0ZWRNb250aDtcbiAgICB0aGlzLnZpc2libGVNb250aCA9IHttb250aFR4dDogdGhpcy5vcHRzLm1vbnRoTGFiZWxzW21vbnRoTmJyXSwgbW9udGhOYnI6IG1vbnRoTmJyLCB5ZWFyOiB5ZWFyfTtcblxuICAgIC8vIENyZWF0ZSBjdXJyZW50IG1vbnRoXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKG1vbnRoTmJyLCB5ZWFyLCB0cnVlKTtcbiAgfVxuXG4gIG9uUHJldk5hdmlnYXRlQnRuQ2xpY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0TW9udGggJiYgIXRoaXMuc2VsZWN0WWVhcikge1xuICAgICAgdGhpcy5zZXREYXRlVmlld01vbnRoKGZhbHNlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5zZWxlY3RNb250aCkge1xuICAgICAgdGhpcy52aXNpYmxlTW9udGgueWVhci0tO1xuICAgICAgdGhpcy5nZW5lcmF0ZU1vbnRocygpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnNlbGVjdFllYXIpIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVZZWFycyh0aGlzLmdldFllYXJWYWx1ZUJ5Um93QW5kQ29sKDIsIDIpIC0gMjUpO1xuICAgIH1cbiAgfVxuXG4gIG9uTmV4dE5hdmlnYXRlQnRuQ2xpY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0TW9udGggJiYgIXRoaXMuc2VsZWN0WWVhcikge1xuICAgICAgdGhpcy5zZXREYXRlVmlld01vbnRoKHRydWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnNlbGVjdE1vbnRoKSB7XG4gICAgICB0aGlzLnZpc2libGVNb250aC55ZWFyKys7XG4gICAgICB0aGlzLmdlbmVyYXRlTW9udGhzKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0WWVhcikge1xuICAgICAgdGhpcy5nZW5lcmF0ZVllYXJzKHRoaXMuZ2V0WWVhclZhbHVlQnlSb3dBbmRDb2woMiwgMikgKyAyNSk7XG4gICAgfVxuICB9XG5cbiAgc2V0RGF0ZVZpZXdNb250aChpc05leHQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBsZXQgY2hhbmdlOiBudW1iZXIgPSBpc05leHQgPyAxIDogLTE7XG5cbiAgICBjb25zdCB7eWVhciwgbW9udGhOYnJ9ID0gdGhpcy52aXNpYmxlTW9udGg7XG5cbiAgICBjb25zdCBkOiBEYXRlID0gdGhpcy5nZXREYXRlKHllYXIsIG1vbnRoTmJyLCAxKTtcbiAgICBkLnNldE1vbnRoKGQuZ2V0TW9udGgoKSArIGNoYW5nZSk7XG5cbiAgICBjb25zdCB5OiBudW1iZXIgPSBkLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbTogbnVtYmVyID0gZC5nZXRNb250aCgpICsgMTtcblxuICAgIHRoaXMudmlzaWJsZU1vbnRoID0ge21vbnRoVHh0OiB0aGlzLm9wdHMubW9udGhMYWJlbHNbbV0sIG1vbnRoTmJyOiBtLCB5ZWFyOiB5fTtcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIobSwgeSwgdHJ1ZSk7XG4gIH1cblxuICBvbkNsb3NlU2VsZWN0b3IoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGtleUNvZGU6IG51bWJlciA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0S2V5Q29kZUZyb21FdmVudChldmVudCk7XG4gICAgaWYgKGtleUNvZGUgPT09IEtleUNvZGUuZXNjKSB7XG4gICAgICB0aGlzLmNsb3NlZEJ5RXNjKCk7XG4gICAgfVxuICB9XG5cbiAgb25EYXlDZWxsQ2xpY2tlZChjZWxsOiBJTXlDYWxlbmRhckRheSk6IHZvaWQge1xuICAgIC8vIENlbGwgY2xpY2tlZCBvbiB0aGUgY2FsZW5kYXJcbiAgICB0aGlzLnNlbGVjdERhdGUoY2VsbC5kYXRlT2JqKTtcbiAgICB0aGlzLnJlc2V0TW9udGhZZWFyU2VsZWN0KCk7XG4gIH1cblxuICBvbkRheUNlbGxLZXlEb3duKGV2ZW50OiBhbnkpIHtcbiAgICAvLyBNb3ZlIGZvY3VzIGJ5IGFycm93IGtleXNcbiAgICBjb25zdCB7c291cmNlUm93LCBzb3VyY2VDb2x9ID0gdGhpcy5nZXRTb3VyY2VSb3dBbmRDb2x1bW5Gcm9tRXZlbnQoZXZlbnQpO1xuICAgIGNvbnN0IHttb3ZlRm9jdXMsIHRhcmdldFJvdywgdGFyZ2V0Q29sLCBkaXJlY3Rpb259ID0gdGhpcy5nZXRUYXJnZXRGb2N1c1Jvd0FuZENvbHVtbihldmVudCwgc291cmNlUm93LCBzb3VyY2VDb2wsIERBVEVfUk9XX0NPVU5ULCBEQVRFX0NPTF9DT1VOVCk7XG4gICAgaWYgKG1vdmVGb2N1cykge1xuICAgICAgdGhpcy5mb2N1c0NlbGxFbGVtZW50KEQsIHRhcmdldFJvdywgdGFyZ2V0Q29sLCBkaXJlY3Rpb24sIERBVEVfQ09MX0NPVU5UKTtcbiAgICB9XG4gIH1cblxuICBnZXRTb3VyY2VSb3dBbmRDb2x1bW5Gcm9tRXZlbnQoZXZlbnQ6IGFueSk6IGFueSB7XG4gICAgbGV0IHNvdXJjZVJvdzogbnVtYmVyID0gMDtcbiAgICBsZXQgc291cmNlQ29sOiBudW1iZXIgPSAwO1xuICAgIGlmIChldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LmlkKSB7XG4gICAgICAvLyB2YWx1ZSBvZiBpZCBpcyBmb3IgZXhhbXBsZTogbV8wXzEgKGZpcnN0IG51bWJlciA9IHJvdywgc2Vjb25kIG51bWJlciA9IGNvbHVtbilcbiAgICAgIGNvbnN0IGFycjogQXJyYXk8c3RyaW5nPiA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChVTkRFUl9MSU5FKTtcbiAgICAgIHNvdXJjZVJvdyA9IE51bWJlcihhcnJbMV0pO1xuICAgICAgc291cmNlQ29sID0gTnVtYmVyKGFyclsyXSk7XG4gICAgfVxuICAgIHJldHVybiB7c291cmNlUm93LCBzb3VyY2VDb2x9O1xuICB9XG5cbiAgZ2V0VGFyZ2V0Rm9jdXNSb3dBbmRDb2x1bW4oZXZlbnQ6IGFueSwgcm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCByb3dDb3VudDogbnVtYmVyLCBjb2xDb3VudDogbnVtYmVyKTogYW55IHtcbiAgICBsZXQgbW92ZUZvY3VzOiBib29sZWFuID0gdHJ1ZTtcbiAgICBsZXQgdGFyZ2V0Um93OiBudW1iZXIgPSByb3c7XG4gICAgbGV0IHRhcmdldENvbDogbnVtYmVyID0gY29sO1xuICAgIGxldCBkaXJlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0IGtleUNvZGU6IG51bWJlciA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0S2V5Q29kZUZyb21FdmVudChldmVudCk7XG4gICAgaWYgKGtleUNvZGUgPT09IEtleUNvZGUudXBBcnJvdyAmJiByb3cgPiAwKSB7XG4gICAgICB0YXJnZXRSb3ctLTtcbiAgICB9XG4gICAgZWxzZSBpZiAoa2V5Q29kZSA9PT0gS2V5Q29kZS5kb3duQXJyb3cgJiYgcm93IDwgcm93Q291bnQpIHtcbiAgICAgIHRhcmdldFJvdysrO1xuICAgICAgZGlyZWN0aW9uID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoa2V5Q29kZSA9PT0gS2V5Q29kZS5sZWZ0QXJyb3cgJiYgY29sID4gMCkge1xuICAgICAgdGFyZ2V0Q29sLS07XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleUNvZGUgPT09IEtleUNvZGUucmlnaHRBcnJvdyAmJiBjb2wgPCBjb2xDb3VudCkge1xuICAgICAgdGFyZ2V0Q29sKys7XG4gICAgICBkaXJlY3Rpb24gPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG1vdmVGb2N1cyA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4ge21vdmVGb2N1cywgdGFyZ2V0Um93LCB0YXJnZXRDb2wsIGRpcmVjdGlvbn07XG4gIH1cblxuICBmb2N1c0NlbGxFbGVtZW50KHR5cGU6IHN0cmluZywgcm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBkaXJlY3Rpb246IGJvb2xlYW4sIGNvbENvdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc05hbWU6IHN0cmluZyA9IHR5cGUgKyBVTkRFUl9MSU5FICsgcm93ICsgVU5ERVJfTElORSArIGNvbDtcbiAgICBsZXQgZWxlbTogYW55ID0gdGhpcy5zZWxlY3RvckVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihET1QgKyBjbGFzc05hbWUpO1xuXG4gICAgaWYgKGVsZW0uZ2V0QXR0cmlidXRlKFRBQklOREVYKSAhPT0gWkVST19TVFIpIHtcbiAgICAgIC8vIGlmIHRoZSBzZWxlY3RlZCBlbGVtZW50IGlzIGRpc2FibGVkIG1vdmUgYSBmb2N1cyB0byBuZXh0L3ByZXZpb3VzIGVuYWJsZWQgZWxlbWVudFxuICAgICAgbGV0IHRkTGlzdDogYW55ID0gdGhpcy5nZXRDYWxlbmRhckVsZW1lbnRzKCk7XG4gICAgICBjb25zdCBpZHg6IG51bWJlciA9IHJvdyAqIChjb2xDb3VudCArIDEpICsgY29sO1xuXG4gICAgICBsZXQgZW5hYmxlZEVsZW06IGFueSA9IG51bGw7XG4gICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgIC8vIGZpbmQgbmV4dCBlbmFibGVkXG4gICAgICAgIGVuYWJsZWRFbGVtID0gdGRMaXN0LnNsaWNlKGlkeCkuZmluZCgodGQ6IGFueSkgPT4gdGQuZ2V0QXR0cmlidXRlKFRBQklOREVYKSA9PT0gWkVST19TVFIpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIGZpbmQgcHJldmlvdXMgZW5hYmxlZFxuICAgICAgICBlbmFibGVkRWxlbSA9IHRkTGlzdC5zbGljZSgwLCBpZHgpLnJldmVyc2UoKS5maW5kKCh0ZDogYW55KSA9PiB0ZC5nZXRBdHRyaWJ1dGUoVEFCSU5ERVgpID09PSBaRVJPX1NUUik7XG4gICAgICB9XG5cbiAgICAgIGVsZW0gPSBlbmFibGVkRWxlbSA/IGVuYWJsZWRFbGVtIDogdGhpcy5zZWxlY3RvckVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZWxlbS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzVG9TZWxlY3RvcigpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdG9yRWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgZ2V0Q2FsZW5kYXJFbGVtZW50cygpOiBhbnkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuc2VsZWN0b3JFbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoVERfU0VMRUNUT1IpKTtcbiAgfVxuXG4gIHNlbGVjdERhdGUoZGF0ZTogSU15RGF0ZSk6IHZvaWQge1xuICAgIGNvbnN0IHtkYXRlUmFuZ2UsIGRhdGVGb3JtYXQsIG1vbnRoTGFiZWxzLCBkYXRlUmFuZ2VEYXRlc0RlbGltaXRlciwgY2xvc2VTZWxlY3Rvck9uRGF0ZVNlbGVjdH0gPSB0aGlzLm9wdHM7XG5cbiAgICBpZiAoZGF0ZVJhbmdlKSB7XG4gICAgICAvLyBEYXRlIHJhbmdlXG4gICAgICBjb25zdCBpc0JlZ2luRGF0ZUluaXRpYWxpemVkOiBib29sZWFuID0gdGhpcy51dGlsU2VydmljZS5pc0luaXRpYWxpemVkRGF0ZSh0aGlzLnNlbGVjdGVkRGF0ZVJhbmdlLmJlZ2luKTtcbiAgICAgIGNvbnN0IGlzRW5kRGF0ZUluaXRpYWxpemVkOiBib29sZWFuID0gdGhpcy51dGlsU2VydmljZS5pc0luaXRpYWxpemVkRGF0ZSh0aGlzLnNlbGVjdGVkRGF0ZVJhbmdlLmVuZCk7XG4gICAgICBpZiAoaXNCZWdpbkRhdGVJbml0aWFsaXplZCAmJiBpc0VuZERhdGVJbml0aWFsaXplZCkge1xuICAgICAgICAvLyBib3RoIGFscmVhZHkgc2VsZWN0ZWQgLSBzZXQgYmVnaW4gZGF0ZSBhbmQgcmVzZXQgZW5kIGRhdGVcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGVSYW5nZS5iZWdpbiA9IGRhdGU7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlUmFuZ2UuZW5kID0gdGhpcy51dGlsU2VydmljZS5yZXNldERhdGUoKTtcbiAgICAgICAgdGhpcy5yYW5nZURhdGVTZWxlY3Rpb24oe1xuICAgICAgICAgIGlzQmVnaW46IHRydWUsXG4gICAgICAgICAgZGF0ZSxcbiAgICAgICAgICBqc0RhdGU6IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF0ZShkYXRlKSxcbiAgICAgICAgICBkYXRlRm9ybWF0OiBkYXRlRm9ybWF0LFxuICAgICAgICAgIGZvcm1hdHRlZDogdGhpcy51dGlsU2VydmljZS5mb3JtYXREYXRlKGRhdGUsIGRhdGVGb3JtYXQsIG1vbnRoTGFiZWxzKSxcbiAgICAgICAgICBlcG9jOiB0aGlzLnV0aWxTZXJ2aWNlLmdldEVwb2NUaW1lKGRhdGUpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIWlzQmVnaW5EYXRlSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgLy8gYmVnaW4gZGF0ZVxuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZVJhbmdlLmJlZ2luID0gZGF0ZTtcbiAgICAgICAgdGhpcy5yYW5nZURhdGVTZWxlY3Rpb24oe1xuICAgICAgICAgIGlzQmVnaW46IHRydWUsXG4gICAgICAgICAgZGF0ZSxcbiAgICAgICAgICBqc0RhdGU6IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF0ZShkYXRlKSxcbiAgICAgICAgICBkYXRlRm9ybWF0OiBkYXRlRm9ybWF0LFxuICAgICAgICAgIGZvcm1hdHRlZDogdGhpcy51dGlsU2VydmljZS5mb3JtYXREYXRlKGRhdGUsIGRhdGVGb3JtYXQsIG1vbnRoTGFiZWxzKSxcbiAgICAgICAgICBlcG9jOiB0aGlzLnV0aWxTZXJ2aWNlLmdldEVwb2NUaW1lKGRhdGUpXG4gICAgICAgIH0pO1xuXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gc2Vjb25kIHNlbGVjdGlvblxuICAgICAgICBjb25zdCBmaXJzdERhdGVFYXJsaWVyOiBib29sZWFuID0gdGhpcy51dGlsU2VydmljZS5pc0RhdGVFYXJsaWVyKGRhdGUsIHRoaXMuc2VsZWN0ZWREYXRlUmFuZ2UuYmVnaW4pO1xuICAgICAgICBpZiAoZmlyc3REYXRlRWFybGllcikge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlUmFuZ2UuYmVnaW4gPSBkYXRlO1xuICAgICAgICAgIHRoaXMucmFuZ2VEYXRlU2VsZWN0aW9uKHtcbiAgICAgICAgICAgIGlzQmVnaW46IHRydWUsXG4gICAgICAgICAgICBkYXRlLFxuICAgICAgICAgICAganNEYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLmdldERhdGUoZGF0ZSksXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBkYXRlRm9ybWF0LFxuICAgICAgICAgICAgZm9ybWF0dGVkOiB0aGlzLnV0aWxTZXJ2aWNlLmZvcm1hdERhdGUoZGF0ZSwgZGF0ZUZvcm1hdCwgbW9udGhMYWJlbHMpLFxuICAgICAgICAgICAgZXBvYzogdGhpcy51dGlsU2VydmljZS5nZXRFcG9jVGltZShkYXRlKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlUmFuZ2UuZW5kID0gZGF0ZTtcbiAgICAgICAgICB0aGlzLnJhbmdlRGF0ZVNlbGVjdGlvbih7XG4gICAgICAgICAgICBpc0JlZ2luOiBmYWxzZSxcbiAgICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgICBqc0RhdGU6IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF0ZShkYXRlKSxcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IGRhdGVGb3JtYXQsXG4gICAgICAgICAgICBmb3JtYXR0ZWQ6IHRoaXMudXRpbFNlcnZpY2UuZm9ybWF0RGF0ZShkYXRlLCBkYXRlRm9ybWF0LCBtb250aExhYmVscyksXG4gICAgICAgICAgICBlcG9jOiB0aGlzLnV0aWxTZXJ2aWNlLmdldEVwb2NUaW1lKGRhdGUpXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzLmRhdGVDaGFuZ2VkKHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF0ZU1vZGVsKG51bGwsIHRoaXMuc2VsZWN0ZWREYXRlUmFuZ2UsIGRhdGVGb3JtYXQsIG1vbnRoTGFiZWxzLCBkYXRlUmFuZ2VEYXRlc0RlbGltaXRlciksIGNsb3NlU2VsZWN0b3JPbkRhdGVTZWxlY3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gU2luZ2xlIGRhdGVcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gZGF0ZTtcbiAgICAgIHRoaXMuZGF0ZUNoYW5nZWQodGhpcy51dGlsU2VydmljZS5nZXREYXRlTW9kZWwodGhpcy5zZWxlY3RlZERhdGUsIG51bGwsIGRhdGVGb3JtYXQsIG1vbnRoTGFiZWxzLCBkYXRlUmFuZ2VEYXRlc0RlbGltaXRlciksIGNsb3NlU2VsZWN0b3JPbkRhdGVTZWxlY3QpO1xuICAgIH1cbiAgfVxuXG4gIG1vbnRoU3RhcnRJZHgoeTogbnVtYmVyLCBtOiBudW1iZXIpOiBudW1iZXIge1xuICAgIC8vIE1vbnRoIHN0YXJ0IGluZGV4XG4gICAgY29uc3QgZDogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgZC5zZXREYXRlKDEpO1xuICAgIGQuc2V0TW9udGgobSAtIDEpO1xuICAgIGQuc2V0RnVsbFllYXIoeSk7XG4gICAgY29uc3QgaWR4ID0gZC5nZXREYXkoKSArIHRoaXMuc3VuZGF5SWR4KCk7XG4gICAgcmV0dXJuIGlkeCA+PSA3ID8gaWR4IC0gNyA6IGlkeDtcbiAgfVxuXG4gIGRheXNJbk1vbnRoKG06IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAvLyBSZXR1cm4gbnVtYmVyIG9mIGRheXMgb2YgY3VycmVudCBtb250aFxuICAgIHJldHVybiBuZXcgRGF0ZSh5LCBtLCAwKS5nZXREYXRlKCk7XG4gIH1cblxuICBkYXlzSW5QcmV2TW9udGgobTogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xuICAgIC8vIFJldHVybiBudW1iZXIgb2YgZGF5cyBvZiB0aGUgcHJldmlvdXMgbW9udGhcbiAgICBjb25zdCBkOiBEYXRlID0gdGhpcy5nZXREYXRlKHksIG0sIDEpO1xuICAgIGQuc2V0TW9udGgoZC5nZXRNb250aCgpIC0gMSk7XG4gICAgcmV0dXJuIHRoaXMuZGF5c0luTW9udGgoZC5nZXRNb250aCgpICsgMSwgZC5nZXRGdWxsWWVhcigpKTtcbiAgfVxuXG4gIGlzQ3VyckRheShkOiBudW1iZXIsIG06IG51bWJlciwgeTogbnVtYmVyLCB0b2RheTogSU15RGF0ZSk6IGJvb2xlYW4ge1xuICAgIC8vIENoZWNrIGlzIGEgZ2l2ZW4gZGF0ZSB0aGUgdG9kYXlcbiAgICByZXR1cm4gZCA9PT0gdG9kYXkuZGF5ICYmIG0gPT09IHRvZGF5Lm1vbnRoICYmIHkgPT09IHRvZGF5LnllYXI7XG4gIH1cblxuICBnZXRUb2RheSgpOiBJTXlEYXRlIHtcbiAgICBjb25zdCBkYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4ge3llYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGg6IGRhdGUuZ2V0TW9udGgoKSArIDEsIGRheTogZGF0ZS5nZXREYXRlKCl9O1xuICB9XG5cbiAgZ2V0RGF5TnVtYmVyKGRhdGU6IElNeURhdGUpOiBudW1iZXIge1xuICAgIC8vIEdldCBkYXkgbnVtYmVyOiBzdT0wLCBtbz0xLCB0dT0yLCB3ZT0zIC4uLlxuICAgIGNvbnN0IGQ6IERhdGUgPSB0aGlzLmdldERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSk7XG4gICAgcmV0dXJuIGQuZ2V0RGF5KCk7XG4gIH1cblxuICBnZXRXZWVrZGF5KGRhdGU6IElNeURhdGUpOiBzdHJpbmcge1xuICAgIC8vIEdldCB3ZWVrZGF5OiBzdSwgbW8sIHR1LCB3ZSAuLi5cbiAgICByZXR1cm4gdGhpcy53ZWVrRGF5T3B0c1t0aGlzLmdldERheU51bWJlcihkYXRlKV07XG4gIH1cblxuICBnZXREYXRlKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF5OiBudW1iZXIpOiBEYXRlIHtcbiAgICAvLyBDcmVhdGVzIGEgZGF0ZSBvYmplY3QgZnJvbSBnaXZlbiB5ZWFyLCBtb250aCBhbmQgZGF5XG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5LCAwLCAwLCAwLCAwKTtcbiAgfVxuXG4gIHN1bmRheUlkeCgpOiBudW1iZXIge1xuICAgIC8vIEluZGV4IG9mIFN1bmRheSBkYXlcbiAgICByZXR1cm4gdGhpcy5kYXlJZHggPiAwID8gNyAtIHRoaXMuZGF5SWR4IDogMDtcbiAgfVxuXG4gIGdlbmVyYXRlQ2FsZW5kYXIobTogbnVtYmVyLCB5OiBudW1iZXIsIG5vdGlmeUNoYW5nZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGF0ZXMubGVuZ3RoID0gMDtcbiAgICBjb25zdCB0b2RheTogSU15RGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcbiAgICBjb25zdCBtb250aFN0YXJ0OiBudW1iZXIgPSB0aGlzLm1vbnRoU3RhcnRJZHgoeSwgbSk7XG4gICAgY29uc3QgZEluVGhpc006IG51bWJlciA9IHRoaXMuZGF5c0luTW9udGgobSwgeSk7XG4gICAgY29uc3QgZEluUHJldk06IG51bWJlciA9IHRoaXMuZGF5c0luUHJldk1vbnRoKG0sIHkpO1xuXG4gICAgbGV0IGRheU5icjogbnVtYmVyID0gMTtcbiAgICBsZXQgbW9udGg6IG51bWJlciA9IG07XG4gICAgbGV0IGNtbzogbnVtYmVyID0gTW9udGhJZC5wcmV2O1xuICAgIGNvbnN0IHtydGwsIHNob3dXZWVrTnVtYmVycywgZmlyc3REYXlPZldlZWssIG1hcmtEYXRlcywgbWFya1dlZWtlbmRzLCBzdW5IaWdobGlnaHQsIHNhdEhpZ2hsaWdodCwgaGlnaGxpZ2h0RGF0ZXN9ID0gdGhpcy5vcHRzO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNzsgaSsrKSB7XG4gICAgICBsZXQgY29sOiBudW1iZXIgPSBydGwgPyA2IDogMDtcbiAgICAgIGNvbnN0IHdlZWs6IEFycmF5PElNeUNhbGVuZGFyRGF5PiA9IFtdO1xuICAgICAgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgLy8gRmlyc3Qgd2Vla1xuICAgICAgICBjb25zdCBwbSA9IGRJblByZXZNIC0gbW9udGhTdGFydCArIDE7XG4gICAgICAgIC8vIFByZXZpb3VzIG1vbnRoXG4gICAgICAgIGZvciAobGV0IGogPSBwbTsgaiA8PSBkSW5QcmV2TTsgaisrKSB7XG4gICAgICAgICAgY29uc3QgZGF0ZTogSU15RGF0ZSA9IHt5ZWFyOiBtID09PSAxID8geSAtIDEgOiB5LCBtb250aDogbSA9PT0gMSA/IDEyIDogbSAtIDEsIGRheTogan07XG4gICAgICAgICAgd2Vlay5wdXNoKHtkYXRlT2JqOiBkYXRlLFxuICAgICAgICAgICAgY21vLFxuICAgICAgICAgICAgY3VyckRheTogdGhpcy5pc0N1cnJEYXkoaiwgbW9udGggLSAxLCB5LCB0b2RheSksXG4gICAgICAgICAgICBkaXNhYmxlZDogdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF0ZShkYXRlLCB0aGlzLm9wdHMpLFxuICAgICAgICAgICAgbWFya2VkRGF0ZTogdGhpcy51dGlsU2VydmljZS5pc01hcmtlZERhdGUoZGF0ZSwgbWFya0RhdGVzLCBtYXJrV2Vla2VuZHMpLFxuICAgICAgICAgICAgaGlnaGxpZ2h0OiB0aGlzLnV0aWxTZXJ2aWNlLmlzSGlnaGxpZ2h0ZWREYXRlKGRhdGUsIHN1bkhpZ2hsaWdodCwgc2F0SGlnaGxpZ2h0LCBoaWdobGlnaHREYXRlcyksXG4gICAgICAgICAgICByb3c6IGkgLSAxLFxuICAgICAgICAgICAgY29sOiBydGwgPyBjb2wtLSA6IGNvbCsrXG4gICAgICAgICAgfSk7IFxuICAgICAgICB9XG5cbiAgICAgICAgY21vID0gTW9udGhJZC5jdXJyO1xuICAgICAgICAvLyBDdXJyZW50IG1vbnRoXG4gICAgICAgIGNvbnN0IGRheXNMZWZ0OiBudW1iZXIgPSA3IC0gd2Vlay5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF5c0xlZnQ7IGorKykge1xuICAgICAgICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB7eWVhcjogeSwgbW9udGg6IG0sIGRheTogZGF5TmJyfTtcbiAgICAgICAgICB3ZWVrLnB1c2goe2RhdGVPYmo6IGRhdGUsXG4gICAgICAgICAgICBjbW8sXG4gICAgICAgICAgICBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShkYXlOYnIsIG0sIHksIHRvZGF5KSxcbiAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWREYXRlKGRhdGUsIHRoaXMub3B0cyksXG4gICAgICAgICAgICBtYXJrZWREYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLmlzTWFya2VkRGF0ZShkYXRlLCBtYXJrRGF0ZXMsIG1hcmtXZWVrZW5kcyksXG4gICAgICAgICAgICBoaWdobGlnaHQ6IHRoaXMudXRpbFNlcnZpY2UuaXNIaWdobGlnaHRlZERhdGUoZGF0ZSwgc3VuSGlnaGxpZ2h0LCBzYXRIaWdobGlnaHQsIGhpZ2hsaWdodERhdGVzKSxcbiAgICAgICAgICAgIHJvdzogaSAtIDEsXG4gICAgICAgICAgICBjb2w6IHJ0bCA/IGNvbC0tIDogY29sKytcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkYXlOYnIrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIFJlc3Qgb2YgdGhlIHdlZWtzXG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgODsgaisrKSB7XG4gICAgICAgICAgaWYgKGRheU5iciA+IGRJblRoaXNNKSB7XG4gICAgICAgICAgICAvLyBOZXh0IG1vbnRoXG4gICAgICAgICAgICBkYXlOYnIgPSAxO1xuICAgICAgICAgICAgY21vID0gTW9udGhJZC5uZXh0O1xuICAgICAgICAgICAgbW9udGggPSBtICsgMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZGF0ZTogSU15RGF0ZSA9IHt5ZWFyOiBjbW8gPT09IE1vbnRoSWQubmV4dCAmJiBtID09PSAxMiA/IHkgKyAxIDogeSwgbW9udGg6IGNtbyA9PT0gTW9udGhJZC5jdXJyID8gbSA6IGNtbyA9PT0gTW9udGhJZC5uZXh0ICYmIG0gPCAxMiA/IG0gKyAxIDogMSwgZGF5OiBkYXlOYnJ9O1xuICAgICAgICAgIHdlZWsucHVzaCh7ZGF0ZU9iajogZGF0ZSxcbiAgICAgICAgICAgIGNtbyxcbiAgICAgICAgICAgIGN1cnJEYXk6IHRoaXMuaXNDdXJyRGF5KGRheU5iciwgbW9udGgsIHksIHRvZGF5KSxcbiAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWREYXRlKGRhdGUsIHRoaXMub3B0cyksXG4gICAgICAgICAgICBtYXJrZWREYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLmlzTWFya2VkRGF0ZShkYXRlLCBtYXJrRGF0ZXMsIG1hcmtXZWVrZW5kcyksXG4gICAgICAgICAgICBoaWdobGlnaHQ6IHRoaXMudXRpbFNlcnZpY2UuaXNIaWdobGlnaHRlZERhdGUoZGF0ZSwgc3VuSGlnaGxpZ2h0LCBzYXRIaWdobGlnaHQsIGhpZ2hsaWdodERhdGVzKSxcbiAgICAgICAgICAgIHJvdzogaSAtIDEsXG4gICAgICAgICAgICBjb2w6IHJ0bCA/IGNvbC0tIDogY29sKytcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkYXlOYnIrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3Qgd2Vla05icjogbnVtYmVyID0gc2hvd1dlZWtOdW1iZXJzICAmJiBmaXJzdERheU9mV2VlayA9PT0gTU8gPyB0aGlzLnV0aWxTZXJ2aWNlLmdldFdlZWtOdW1iZXIod2Vla1swXS5kYXRlT2JqKSA6IDA7XG4gICAgICB0aGlzLmRhdGVzLnB1c2goe3dlZWssIHdlZWtOYnJ9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldERhdGVWaWV3SGVhZGVyQnRuRGlzYWJsZWRTdGF0ZShtLCB5KTtcblxuICAgIGlmIChub3RpZnlDaGFuZ2UpIHtcbiAgICAgIC8vIE5vdGlmeSBwYXJlbnRcbiAgICAgIHRoaXMuY2FsZW5kYXJWaWV3Q2hhbmdlZCh7eWVhcjogeSwgbW9udGg6IG0sIGZpcnN0OiB7bnVtYmVyOiAxLCB3ZWVrZGF5OiB0aGlzLmdldFdlZWtkYXkoe3llYXI6IHksIG1vbnRoOiBtLCBkYXk6IDF9KX0sIGxhc3Q6IHtudW1iZXI6IGRJblRoaXNNLCB3ZWVrZGF5OiB0aGlzLmdldFdlZWtkYXkoe3llYXI6IHksIG1vbnRoOiBtLCBkYXk6IGRJblRoaXNNfSl9fSk7XG4gICAgfVxuICB9XG5cbiAgc2V0RGF0ZVZpZXdIZWFkZXJCdG5EaXNhYmxlZFN0YXRlKG06IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgbGV0IGRwbTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxldCBkbm06IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0IHtkaXNhYmxlSGVhZGVyQnV0dG9ucywgZGlzYWJsZVVudGlsLCBkaXNhYmxlU2luY2UsIG1pblllYXIsIG1heFllYXJ9ID0gdGhpcy5vcHRzO1xuXG4gICAgaWYgKGRpc2FibGVIZWFkZXJCdXR0b25zKSB7XG4gICAgICBkcG0gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWRCeURpc2FibGVVbnRpbCh7eWVhcjogbSA9PT0gMSA/IHkgLSAxIDogeSwgbW9udGg6IG0gPT09IDEgPyAxMiA6IG0gLSAxLCBkYXk6IHRoaXMuZGF5c0luTW9udGgobSA9PT0gMSA/IDEyIDogbSAtIDEsIG0gPT09IDEgPyB5IC0gMSA6IHkpfSwgZGlzYWJsZVVudGlsKTtcbiAgICAgIGRubSA9IHRoaXMudXRpbFNlcnZpY2UuaXNEaXNhYmxlZEJ5RGlzYWJsZVNpbmNlKHt5ZWFyOiBtID09PSAxMiA/IHkgKyAxIDogeSwgbW9udGg6IG0gPT09IDEyID8gMSA6IG0gKyAxLCBkYXk6IDF9LCBkaXNhYmxlU2luY2UpO1xuICAgIH1cbiAgICB0aGlzLnByZXZWaWV3RGlzYWJsZWQgPSBtID09PSAxICYmIHkgPT09IG1pblllYXIgfHwgZHBtO1xuICAgIHRoaXMubmV4dFZpZXdEaXNhYmxlZCA9IG0gPT09IDEyICYmIHkgPT09IG1heFllYXIgfHwgZG5tO1xuICB9XG5cbiAgc2V0TW9udGhWaWV3SGVhZGVyQnRuRGlzYWJsZWRTdGF0ZSh5OiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgZHBtOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IGRubTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qge2Rpc2FibGVIZWFkZXJCdXR0b25zLCBkaXNhYmxlVW50aWwsIGRpc2FibGVTaW5jZSwgbWluWWVhciwgbWF4WWVhcn0gPSB0aGlzLm9wdHM7XG5cbiAgICBpZiAoZGlzYWJsZUhlYWRlckJ1dHRvbnMpIHtcbiAgICAgIGRwbSA9IHRoaXMudXRpbFNlcnZpY2UuaXNEaXNhYmxlZEJ5RGlzYWJsZVVudGlsKHt5ZWFyOiB5IC0gMSwgbW9udGg6IDEyLCBkYXk6IDMxfSwgZGlzYWJsZVVudGlsKTtcbiAgICAgIGRubSA9IHRoaXMudXRpbFNlcnZpY2UuaXNEaXNhYmxlZEJ5RGlzYWJsZVNpbmNlKHt5ZWFyOiB5ICsgMSwgbW9udGg6IDEsIGRheTogMX0sIGRpc2FibGVTaW5jZSk7XG4gICAgfVxuICAgIHRoaXMucHJldlZpZXdEaXNhYmxlZCA9IHkgPT09IG1pblllYXIgfHwgZHBtO1xuICAgIHRoaXMubmV4dFZpZXdEaXNhYmxlZCA9IHkgPT09IG1heFllYXIgfHwgZG5tO1xuICB9XG5cbiAgc2V0WWVhclZpZXdIZWFkZXJCdG5EaXNhYmxlZFN0YXRlKHlwOiBudW1iZXIsIHluOiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgZHB5OiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IGRueTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qge2Rpc2FibGVIZWFkZXJCdXR0b25zLCBkaXNhYmxlVW50aWwsIGRpc2FibGVTaW5jZSwgbWluWWVhciwgbWF4WWVhcn0gPSB0aGlzLm9wdHM7XG5cbiAgICBpZiAoZGlzYWJsZUhlYWRlckJ1dHRvbnMpIHtcbiAgICAgIGRweSA9IHRoaXMudXRpbFNlcnZpY2UuaXNEaXNhYmxlZEJ5RGlzYWJsZVVudGlsKHt5ZWFyOiB5cCAtIDEsIG1vbnRoOiAxMiwgZGF5OiAzMX0sIGRpc2FibGVVbnRpbCk7XG4gICAgICBkbnkgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWRCeURpc2FibGVTaW5jZSh7eWVhcjogeW4gKyAxLCBtb250aDogMSwgZGF5OiAxfSwgZGlzYWJsZVNpbmNlKTtcbiAgICB9XG4gICAgdGhpcy5wcmV2Vmlld0Rpc2FibGVkID0geXAgPD0gbWluWWVhciB8fCBkcHk7XG4gICAgdGhpcy5uZXh0Vmlld0Rpc2FibGVkID0geW4gPj0gbWF4WWVhciB8fCBkbnk7XG4gIH1cbn1cbiJdfQ==