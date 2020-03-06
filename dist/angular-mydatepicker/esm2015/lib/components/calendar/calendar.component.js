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
export class CalendarComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1teWRhdGVwaWNrZXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQTRCLFdBQVcsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQWN2SixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDN0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQzVELE9BQU8sRUFBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUNoSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBU3BMLE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7SUFpQzVCLFlBQW9CLElBQWdCLEVBQVUsUUFBbUIsRUFBVSxHQUFzQixFQUFVLFdBQXdCO1FB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QkFBZ0IsR0FBRyxFQUFFLElBQUksT0FBTyxJQUFJLEdBQUcsQ0FBQztRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxJQUFJLE9BQU8sSUFBSSxHQUFHLENBQUM7SUFDL0MsQ0FBQzs7O1lBbHRCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0MsMmdFQUF3QztnQkFFeEMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUN4QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7WUE1QmtCLFVBQVU7WUFBZ0MsU0FBUztZQUFFLGlCQUFpQjtZQWNqRixXQUFXOzs7eUJBZ0JoQixTQUFTLFNBQUMsWUFBWTtzQkFDdEIsU0FBUyxTQUFDLFNBQVM7dUJBRW5CLFdBQVcsU0FBQyxnQkFBZ0I7Ozs7SUFIN0IsdUNBQWdEOztJQUNoRCxvQ0FBMEM7O0lBRTFDLHFDQUFtRDs7SUFFbkQsaUNBQWlCOztJQUNqQix5Q0FBcUU7O0lBQ3JFLDBDQUFpRDs7SUFDakQseUNBQW9EOztJQUNwRCw4Q0FBeUc7O0lBQ3pHLHFDQUE2Qjs7SUFDN0Isa0NBQTJCOztJQUMzQixtQ0FBNEM7O0lBQzVDLGtDQUEwQzs7SUFDMUMsMENBQTJCOztJQUMzQixtQ0FBbUI7O0lBQ25CLHdDQUEwRDs7SUFFMUQsd0NBQTZCOztJQUM3Qix1Q0FBNEI7O0lBRTVCLHdDQUF3RDs7SUFDeEQsZ0RBQTJEOztJQUMzRCwrQ0FBeUQ7O0lBQ3pELHdDQUF3Qjs7SUFDeEIsd0NBQXdDOztJQUV4Qyw2Q0FBa0M7O0lBQ2xDLDZDQUFrQzs7SUFFbEMsMENBQTBCOzs7OztJQUVkLGlDQUF3Qjs7Ozs7SUFBRSxxQ0FBMkI7Ozs7O0lBQUUsZ0NBQThCOzs7OztJQUFFLHdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgVmlld0NoaWxkLCBSZW5kZXJlcjIsIENoYW5nZURldGVjdG9yUmVmLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIEhvc3RCaW5kaW5nfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtJTXlEYXRlfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9teS1kYXRlLmludGVyZmFjZVwiO1xuaW1wb3J0IHtJTXlEYXRlUmFuZ2V9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL215LWRhdGUtcmFuZ2UuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeU1vbnRofSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9teS1tb250aC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15Q2FsZW5kYXJEYXl9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL215LWNhbGVuZGFyLWRheS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15Q2FsZW5kYXJNb250aH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvbXktY2FsZW5kYXItbW9udGguaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeUNhbGVuZGFyWWVhcn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvbXktY2FsZW5kYXIteWVhci5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15V2Vla30gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvbXktd2Vlay5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15T3B0aW9uc30gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvbXktb3B0aW9ucy5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15U2VsZWN0b3JQb3NpdGlvbn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvbXktc2VsZWN0b3ItcG9zLmludGVyZmFjZVwiO1xuaW1wb3J0IHtJTXlDYWxlbmRhclZpZXdDaGFuZ2VkfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9teS1jYWxlbmRhci12aWV3LWNoYW5nZWQuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeURhdGVNb2RlbH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvbXktZGF0ZS1tb2RlbC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15UmFuZ2VEYXRlU2VsZWN0aW9ufSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9teS1yYW5nZS1kYXRlLXNlbGVjdGlvbi5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15Q2FsZW5kYXJBbmltYXRpb259IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL215LWNhbGVuZGFyLWFuaW1hdGlvbi5pbnRlcmZhY2VcIjtcbmltcG9ydCB7VXRpbFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hbmd1bGFyLW15ZGF0ZXBpY2tlci51dGlsLnNlcnZpY2VcIjtcbmltcG9ydCB7S2V5Q29kZX0gZnJvbSBcIi4uLy4uL2VudW1zL2tleS1jb2RlLmVudW1cIjtcbmltcG9ydCB7TW9udGhJZH0gZnJvbSBcIi4uLy4uL2VudW1zL21vbnRoLWlkLmVudW1cIjtcbmltcG9ydCB7RGVmYXVsdFZpZXd9IGZyb20gXCIuLi8uLi9lbnVtcy9kZWZhdWx0LXZpZXcuZW51bVwiO1xuaW1wb3J0IHtDYWxBbmltYXRpb259IGZyb20gXCIuLi8uLi9lbnVtcy9jYWwtYW5pbWF0aW9uLmVudW1cIjtcbmltcG9ydCB7RE9ULCBVTkRFUl9MSU5FLCBELCBNLCBZLCBEQVRFX1JPV19DT1VOVCwgREFURV9DT0xfQ09VTlQsIE1PTlRIX1JPV19DT1VOVCwgTU9OVEhfQ09MX0NPVU5ULCBZRUFSX1JPV19DT1VOVCwgWUVBUl9DT0xfQ09VTlQsIFxuICBTVSwgTU8sIFRVLCBXRSwgVEgsIEZSLCBTQSwgRU1QVFlfU1RSLCBDTElDSywgU1RZTEUsIE1ZX0RQX0FOSU1BVElPTiwgQU5JTUFUSU9OX05BTUVTLCBJTiwgT1VULCBUQUJJTkRFWCwgVERfU0VMRUNUT1IsIFpFUk9fU1RSLCBZRUFSX1NFUEFSQVRPUn0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpYi1hbmd1bGFyLW15ZGF0ZXBpY2tlci1jYWxlbmRhclwiLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi4vLi4vY3NzL2FuZ3VsYXItbXlkYXRlcGlja2VyLnN0eWxlLmNzcyddLFxuICBwcm92aWRlcnM6IFtVdGlsU2VydmljZV0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKFwic2VsZWN0b3JFbFwiKSBzZWxlY3RvckVsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwic3R5bGVFbFwiKSBzdHlsZUVsOiBFbGVtZW50UmVmO1xuICBcbiAgQEhvc3RCaW5kaW5nKFwic3R5bGUucG9zaXRpb25cIikgcG9zaXRpb24gPSBcInN0YXRpY1wiO1xuXG4gIG9wdHM6IElNeU9wdGlvbnM7XG4gIHZpc2libGVNb250aDogSU15TW9udGggPSB7bW9udGhUeHQ6IEVNUFRZX1NUUiwgbW9udGhOYnI6IDAsIHllYXI6IDB9O1xuICBzZWxlY3RlZE1vbnRoOiBJTXlNb250aCA9IHttb250aE5icjogMCwgeWVhcjogMH07XG4gIHNlbGVjdGVkRGF0ZTogSU15RGF0ZSA9IHt5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwfTtcbiAgc2VsZWN0ZWREYXRlUmFuZ2U6IElNeURhdGVSYW5nZSA9IHtiZWdpbjoge3llYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDB9LCBlbmQ6IHt5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwfX07XG4gIHdlZWtEYXlzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gIGRhdGVzOiBBcnJheTxJTXlXZWVrPiA9IFtdO1xuICBtb250aHM6IEFycmF5PEFycmF5PElNeUNhbGVuZGFyTW9udGg+PiA9IFtdO1xuICB5ZWFyczogQXJyYXk8QXJyYXk8SU15Q2FsZW5kYXJZZWFyPj4gPSBbXTtcbiAgeWVhcnNEdXJhdGlvbjogc3RyaW5nID0gXCJcIjtcbiAgZGF5SWR4OiBudW1iZXIgPSAwO1xuICB3ZWVrRGF5T3B0czogQXJyYXk8c3RyaW5nPiA9IFtTVSwgTU8sIFRVLCBXRSwgVEgsIEZSLCBTQV07XG5cbiAgc2VsZWN0TW9udGg6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2VsZWN0WWVhcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGRhdGVDaGFuZ2VkOiAoZG06IElNeURhdGVNb2RlbCwgY2xvc2U6IGJvb2xlYW4pID0+IHZvaWQ7XG4gIGNhbGVuZGFyVmlld0NoYW5nZWQ6IChjdmM6IElNeUNhbGVuZGFyVmlld0NoYW5nZWQpID0+IHZvaWQ7XG4gIHJhbmdlRGF0ZVNlbGVjdGlvbjogKHJkczogSU15UmFuZ2VEYXRlU2VsZWN0aW9uKSA9PiB2b2lkO1xuICBjbG9zZWRCeUVzYzogKCkgPT4gdm9pZDtcbiAgc2VsZWN0b3JQb3M6IElNeVNlbGVjdG9yUG9zaXRpb24gPSBudWxsO1xuXG4gIHByZXZWaWV3RGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbmV4dFZpZXdEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNsaWNrTGlzdGVuZXI6ICgpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSB1dGlsU2VydmljZTogVXRpbFNlcnZpY2UpIHtcbiAgICB0aGlzLmNsaWNrTGlzdGVuZXIgPSByZW5kZXJlci5saXN0ZW4oZWxlbS5uYXRpdmVFbGVtZW50LCBDTElDSywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIGlmICgodGhpcy5vcHRzLm1vbnRoU2VsZWN0b3IgfHwgdGhpcy5vcHRzLnllYXJTZWxlY3RvcikgJiYgZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgIHRoaXMucmVzZXRNb250aFllYXJTZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7c3R5bGVzRGF0YSwgY2FsZW5kYXJBbmltYXRpb24sIGlubGluZX0gPSB0aGlzLm9wdHM7XG5cbiAgICBpZiAoc3R5bGVzRGF0YS5zdHlsZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzdHlsZUVsVGVtcDogYW55ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KFNUWUxFKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3R5bGVFbFRlbXAsIHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dChzdHlsZXNEYXRhLnN0eWxlcykpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLnN0eWxlRWwubmF0aXZlRWxlbWVudCwgc3R5bGVFbFRlbXApO1xuICAgIH1cblxuICAgIGlmIChjYWxlbmRhckFuaW1hdGlvbi5pbiAhPT0gQ2FsQW5pbWF0aW9uLk5vbmUpIHtcbiAgICAgIHRoaXMuc2V0Q2FsZW5kYXJBbmltYXRpb24oY2FsZW5kYXJBbmltYXRpb24sIHRydWUpO1xuICAgIH1cblxuICAgIGlmICghaW5saW5lKSB7XG4gICAgICB0aGlzLmZvY3VzVG9TZWxlY3RvcigpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xpY2tMaXN0ZW5lcigpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUNvbXBvbmVudChvcHRzOiBJTXlPcHRpb25zLCBkZWZhdWx0TW9udGg6IHN0cmluZywgc2VsZWN0b3JQb3M6IElNeVNlbGVjdG9yUG9zaXRpb24sIGlucHV0VmFsdWU6IHN0cmluZywgZGM6IChkbTogSU15RGF0ZU1vZGVsLCBjbG9zZTogYm9vbGVhbikgPT4gdm9pZCwgY3ZjOiAoY3ZjOiBJTXlDYWxlbmRhclZpZXdDaGFuZ2VkKSA9PiB2b2lkLCByZHM6IChyZHM6IElNeVJhbmdlRGF0ZVNlbGVjdGlvbikgPT4gdm9pZCwgY2JlOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vcHRzID0gb3B0cztcbiAgICB0aGlzLnNlbGVjdG9yUG9zID0gc2VsZWN0b3JQb3M7XG4gICAgXG4gICAgdGhpcy5kYXRlQ2hhbmdlZCA9IGRjO1xuICAgIHRoaXMuY2FsZW5kYXJWaWV3Q2hhbmdlZCA9IGN2YztcbiAgICB0aGlzLnJhbmdlRGF0ZVNlbGVjdGlvbiA9IHJkcztcbiAgICB0aGlzLmNsb3NlZEJ5RXNjID0gY2JlO1xuXG4gICAgY29uc3Qge2RlZmF1bHRWaWV3LCBkYXRlUmFuZ2UsIGZpcnN0RGF5T2ZXZWVrLCBkYXlMYWJlbHN9ID0gdGhpcy5vcHRzO1xuXG4gICAgdGhpcy53ZWVrRGF5cy5sZW5ndGggPSAwO1xuICAgIHRoaXMuZGF5SWR4ID0gdGhpcy53ZWVrRGF5T3B0cy5pbmRleE9mKGZpcnN0RGF5T2ZXZWVrKTtcbiAgICBpZiAodGhpcy5kYXlJZHggIT09IC0xKSB7XG4gICAgICBsZXQgaWR4OiBudW1iZXIgPSB0aGlzLmRheUlkeDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53ZWVrRGF5T3B0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLndlZWtEYXlzLnB1c2goZGF5TGFiZWxzW3RoaXMud2Vla0RheU9wdHNbaWR4XV0pO1xuICAgICAgICBpZHggPSB0aGlzLndlZWtEYXlPcHRzW2lkeF0gPT09IFNBID8gMCA6IGlkeCArIDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdG9kYXk6IElNeURhdGUgPSB0aGlzLmdldFRvZGF5KCk7XG4gICAgdGhpcy5zZWxlY3RlZE1vbnRoID0ge21vbnRoTmJyOiB0b2RheS5tb250aCwgeWVhcjogdG9kYXkueWVhcn07XG5cbiAgICBpZiAoZGVmYXVsdE1vbnRoICYmIGRlZmF1bHRNb250aC5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRNb250aCA9IHRoaXMudXRpbFNlcnZpY2UucGFyc2VEZWZhdWx0TW9udGgoZGVmYXVsdE1vbnRoKTtcbiAgICB9XG5cbiAgICBpZiAoIWRhdGVSYW5nZSkge1xuICAgICAgLy8gU2luZ2xlIGRhdGUgbW9kZVxuICAgICAgY29uc3QgZGF0ZTogSU15RGF0ZSA9IHRoaXMudXRpbFNlcnZpY2UuaXNEYXRlVmFsaWQoaW5wdXRWYWx1ZSwgdGhpcy5vcHRzKTtcblxuICAgICAgaWYgKHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoZGF0ZSkpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTW9udGggPSB7bW9udGhOYnI6IGRhdGUubW9udGgsIHllYXI6IGRhdGUueWVhcn07XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gRGF0ZSByYW5nZSBtb2RlXG4gICAgICBjb25zdCB7YmVnaW4sIGVuZH0gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGF0ZVZhbGlkRGF0ZVJhbmdlKGlucHV0VmFsdWUsIHRoaXMub3B0cyk7XG5cbiAgICAgIGlmICh0aGlzLnV0aWxTZXJ2aWNlLmlzSW5pdGlhbGl6ZWREYXRlKGJlZ2luKSAmJiB0aGlzLnV0aWxTZXJ2aWNlLmlzSW5pdGlhbGl6ZWREYXRlKGVuZCkpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGVSYW5nZSA9IHtiZWdpbiwgZW5kfTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1vbnRoID0ge21vbnRoTmJyOiBiZWdpbi5tb250aCwgeWVhcjogYmVnaW4ueWVhcn07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRDYWxlbmRhclZpc2libGVNb250aCgpO1xuXG4gICAgaWYgKGRlZmF1bHRWaWV3ID09PSBEZWZhdWx0Vmlldy5Nb250aCkge1xuICAgICAgdGhpcy5vbk1vbnRoVmlld0J0bkNsaWNrZWQoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVmYXVsdFZpZXcgPT09IERlZmF1bHRWaWV3LlllYXIpIHtcbiAgICAgIHRoaXMub25ZZWFyVmlld0J0bkNsaWNrZWQoKTtcbiAgICB9XG4gIH1cblxuICByZWZyZXNoQ29tcG9uZW50KG9wdHM6IElNeU9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuXG4gICAgY29uc3Qge3NlbGVjdE1vbnRoLCBzZWxlY3RZZWFyLCB5ZWFyc30gPSB0aGlzO1xuICAgIGlmICghc2VsZWN0TW9udGggJiYgIXNlbGVjdFllYXIpIHtcbiAgICAgIGNvbnN0IHttb250aE5iciwgeWVhcn0gPSB0aGlzLnZpc2libGVNb250aDtcbiAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcihtb250aE5iciwgeWVhciwgZmFsc2UpO1xuICAgIH1cbiAgICBlbHNlIGlmIChzZWxlY3RNb250aCkge1xuICAgICAgdGhpcy5nZW5lcmF0ZU1vbnRocygpO1xuICAgIH1cbiAgICBlbHNlIGlmIChzZWxlY3RZZWFyKSB7XG4gICAgICB0aGlzLmdlbmVyYXRlWWVhcnModGhpcy5nZXRZZWFyVmFsdWVCeVJvd0FuZENvbCgyLCAyKSk7IFxuICAgIH1cbiAgfVxuXG4gIHNldENhbGVuZGFyQW5pbWF0aW9uKGNhbEFuaW1hdGlvbjogSU15Q2FsZW5kYXJBbmltYXRpb24sIGlzT3BlbjogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IHtuYXRpdmVFbGVtZW50fSA9IHRoaXMuc2VsZWN0b3JFbDtcbiAgICBjb25zdCB7cmVuZGVyZXJ9ID0gdGhpcztcblxuICAgIGNvbnN0IGNsYXNzSW4gPSBNWV9EUF9BTklNQVRJT04gKyBBTklNQVRJT05fTkFNRVNbY2FsQW5pbWF0aW9uLmluIC0gMV07XG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgcmVuZGVyZXIuYWRkQ2xhc3MobmF0aXZlRWxlbWVudCwgY2xhc3NJbiArIElOKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBjbGFzc091dCA9IE1ZX0RQX0FOSU1BVElPTiArIEFOSU1BVElPTl9OQU1FU1tjYWxBbmltYXRpb24ub3V0IC0gMV07XG4gICAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhuYXRpdmVFbGVtZW50LCBjbGFzc0luICsgSU4pO1xuICAgICAgcmVuZGVyZXIuYWRkQ2xhc3MobmF0aXZlRWxlbWVudCwgY2xhc3NPdXQgKyBPVVQpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0RGF0ZVZhbHVlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5vcHRzLmRhdGVSYW5nZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSB0aGlzLnV0aWxTZXJ2aWNlLnJlc2V0RGF0ZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlUmFuZ2UuYmVnaW4gPSB0aGlzLnV0aWxTZXJ2aWNlLnJlc2V0RGF0ZSgpO1xuICAgICAgdGhpcy5zZWxlY3RlZERhdGVSYW5nZS5lbmQgPSB0aGlzLnV0aWxTZXJ2aWNlLnJlc2V0RGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNldERhdGVWYWx1ZShkYXRlOiBJTXlEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xuICB9XG5cbiAgc2V0RGF0ZVJhbmdlVmFsdWUoYmVnaW46IElNeURhdGUsIGVuZDogSU15RGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWREYXRlUmFuZ2UuYmVnaW4gPSBiZWdpbjtcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZVJhbmdlLmVuZCA9IGVuZDtcbiAgfVxuXG4gIHJlc2V0TW9udGhZZWFyU2VsZWN0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0TW9udGggPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdFllYXIgPSBmYWxzZTtcbiAgfVxuXG4gIG9uTW9udGhWaWV3QnRuQ2xpY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdE1vbnRoID0gIXRoaXMuc2VsZWN0TW9udGg7XG4gICAgdGhpcy5zZWxlY3RZZWFyID0gZmFsc2U7XG4gICAgXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIGlmICh0aGlzLnNlbGVjdE1vbnRoKSB7XG4gICAgICB0aGlzLmdlbmVyYXRlTW9udGhzKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc3Qge3llYXIsIG1vbnRoTmJyfSA9IHRoaXMuc2VsZWN0ZWRNb250aDtcbiAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0ge21vbnRoVHh0OiB0aGlzLm9wdHMubW9udGhMYWJlbHNbbW9udGhOYnJdLCBtb250aE5iciwgeWVhcn07XG4gICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIobW9udGhOYnIsIHllYXIsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW9udGhDZWxsQ2xpY2tlZChjZWxsOiBJTXlDYWxlbmRhck1vbnRoKTogdm9pZCB7XG4gICAgY29uc3Qge3llYXIsIG1vbnRoTmJyfSA9IHRoaXMudmlzaWJsZU1vbnRoO1xuXG4gICAgY29uc3QgbWM6IGJvb2xlYW4gPSBjZWxsLm5iciAhPT0gbW9udGhOYnI7XG4gICAgdGhpcy52aXNpYmxlTW9udGggPSB7bW9udGhUeHQ6IHRoaXMub3B0cy5tb250aExhYmVsc1tjZWxsLm5icl0sIG1vbnRoTmJyOiBjZWxsLm5iciwgeWVhcjogeWVhcn07XG4gICAgdGhpcy5zZWxlY3RlZE1vbnRoLnllYXIgPSB0aGlzLnZpc2libGVNb250aC55ZWFyO1xuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcihjZWxsLm5iciwgeWVhciwgbWMpO1xuICAgIHRoaXMuc2VsZWN0TW9udGggPSBmYWxzZTtcbiAgICB0aGlzLmZvY3VzVG9TZWxlY3RvcigpO1xuICB9XG5cbiAgb25Nb250aENlbGxLZXlEb3duKGV2ZW50OiBhbnkpIHtcbiAgICAvLyBNb3ZlIGZvY3VzIGJ5IGFycm93IGtleXNcbiAgICBjb25zdCB7c291cmNlUm93LCBzb3VyY2VDb2x9ID0gdGhpcy5nZXRTb3VyY2VSb3dBbmRDb2x1bW5Gcm9tRXZlbnQoZXZlbnQpO1xuICAgIGNvbnN0IHttb3ZlRm9jdXMsIHRhcmdldFJvdywgdGFyZ2V0Q29sLCBkaXJlY3Rpb259ID0gdGhpcy5nZXRUYXJnZXRGb2N1c1Jvd0FuZENvbHVtbihldmVudCwgc291cmNlUm93LCBzb3VyY2VDb2wsIE1PTlRIX1JPV19DT1VOVCwgTU9OVEhfQ09MX0NPVU5UKTtcblxuICAgIGlmIChtb3ZlRm9jdXMpIHtcbiAgICAgIHRoaXMuZm9jdXNDZWxsRWxlbWVudChNLCB0YXJnZXRSb3csIHRhcmdldENvbCwgZGlyZWN0aW9uLCBNT05USF9DT0xfQ09VTlQpO1xuICAgIH1cbiAgfVxuXG4gIG9uWWVhclZpZXdCdG5DbGlja2VkKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0WWVhciA9ICF0aGlzLnNlbGVjdFllYXI7XG4gICAgdGhpcy5zZWxlY3RNb250aCA9IGZhbHNlO1xuXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIGlmICh0aGlzLnNlbGVjdFllYXIpIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVZZWFycyh0aGlzLnZpc2libGVNb250aC55ZWFyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCB7eWVhciwgbW9udGhOYnJ9ID0gdGhpcy5zZWxlY3RlZE1vbnRoO1xuICAgICAgdGhpcy52aXNpYmxlTW9udGggPSB7bW9udGhUeHQ6IHRoaXMub3B0cy5tb250aExhYmVsc1ttb250aE5icl0sIG1vbnRoTmJyLCB5ZWFyfTtcbiAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcihtb250aE5iciwgeWVhciwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25ZZWFyQ2VsbENsaWNrZWQoY2VsbDogSU15Q2FsZW5kYXJZZWFyKTogdm9pZCB7XG4gICAgY29uc3Qge3llYXIsIG1vbnRoTmJyLCBtb250aFR4dH0gPSB0aGlzLnZpc2libGVNb250aDtcblxuICAgIGNvbnN0IHljOiBib29sZWFuID0gY2VsbC55ZWFyICE9PSB5ZWFyO1xuICAgIHRoaXMudmlzaWJsZU1vbnRoID0ge21vbnRoVHh0OiBtb250aFR4dCwgbW9udGhOYnI6IG1vbnRoTmJyLCB5ZWFyOiBjZWxsLnllYXJ9O1xuICAgIHRoaXMuc2VsZWN0ZWRNb250aC55ZWFyID0gdGhpcy52aXNpYmxlTW9udGgueWVhcjtcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIobW9udGhOYnIsIGNlbGwueWVhciwgeWMpO1xuICAgIHRoaXMuc2VsZWN0WWVhciA9IGZhbHNlO1xuICAgIHRoaXMuZm9jdXNUb1NlbGVjdG9yKCk7XG4gIH1cblxuICBvblllYXJDZWxsS2V5RG93bihldmVudDogYW55KSB7XG4gICAgLy8gTW92ZSBmb2N1cyBieSBhcnJvdyBrZXlzXG4gICAgY29uc3Qge3NvdXJjZVJvdywgc291cmNlQ29sfSA9IHRoaXMuZ2V0U291cmNlUm93QW5kQ29sdW1uRnJvbUV2ZW50KGV2ZW50KTtcbiAgICBjb25zdCB7bW92ZUZvY3VzLCB0YXJnZXRSb3csIHRhcmdldENvbCwgZGlyZWN0aW9ufSA9IHRoaXMuZ2V0VGFyZ2V0Rm9jdXNSb3dBbmRDb2x1bW4oZXZlbnQsIHNvdXJjZVJvdywgc291cmNlQ29sLCBZRUFSX1JPV19DT1VOVCwgWUVBUl9DT0xfQ09VTlQpO1xuXG4gICAgaWYgKG1vdmVGb2N1cykge1xuICAgICAgdGhpcy5mb2N1c0NlbGxFbGVtZW50KFksIHRhcmdldFJvdywgdGFyZ2V0Q29sLCBkaXJlY3Rpb24sIFlFQVJfQ09MX0NPVU5UKTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZU1vbnRocygpOiB2b2lkIHtcbiAgICBjb25zdCB0b2RheTogSU15RGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcbiAgICB0aGlzLm1vbnRocy5sZW5ndGggPSAwO1xuXG4gICAgY29uc3Qge3llYXIsIG1vbnRoTmJyfSA9IHRoaXMudmlzaWJsZU1vbnRoO1xuICAgIGNvbnN0IHtydGwsIG1vbnRoTGFiZWxzfSA9IHRoaXMub3B0cztcblxuICAgIGxldCByb3c6IG51bWJlciA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTI7IGkgKz0gMykge1xuICAgICAgY29uc3Qgcm93RGF0YTogQXJyYXk8SU15Q2FsZW5kYXJNb250aD4gPSBbXTtcbiAgICAgIGxldCBjb2wgPSBydGwgPyAyIDogMDtcblxuICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCBpICsgMzsgaisrKSB7XG4gICAgICAgIGNvbnN0IGRpc2FibGVkOiBib29sZWFuID0gdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkTW9udGgoeWVhciwgaiwgdGhpcy5kYXlzSW5Nb250aChqLCB5ZWFyKSwgdGhpcy5vcHRzKTtcbiAgICAgICAgcm93RGF0YS5wdXNoKHtcbiAgICAgICAgICBuYnI6IGosIFxuICAgICAgICAgIG5hbWU6IG1vbnRoTGFiZWxzW2pdLCBcbiAgICAgICAgICBjdXJyTW9udGg6IGogPT09IHRvZGF5Lm1vbnRoICYmIHllYXIgPT09IHRvZGF5LnllYXIsIFxuICAgICAgICAgIHNlbGVjdGVkOiBqID09PSBtb250aE5iciAmJiB5ZWFyID09PSB0aGlzLnNlbGVjdGVkTW9udGgueWVhciwgXG4gICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgcm93LFxuICAgICAgICAgIGNvbDogcnRsID8gY29sLS0gOiBjb2wrK1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJvdysrO1xuICAgICAgdGhpcy5tb250aHMucHVzaChyb3dEYXRhKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldE1vbnRoVmlld0hlYWRlckJ0bkRpc2FibGVkU3RhdGUoeWVhcik7XG4gIH1cblxuICBnZW5lcmF0ZVllYXJzKGlucHV0WWVhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qge21pblllYXIsIG1heFllYXIsIHJ0bH0gPSB0aGlzLm9wdHM7XG5cbiAgICBsZXQgeTogbnVtYmVyID0gaW5wdXRZZWFyIC0gMTI7XG4gICAgaWYgKGlucHV0WWVhciA8IG1pblllYXIpIHtcbiAgICAgIHkgPSBtaW5ZZWFyO1xuICAgIH1cblxuICAgIGlmIChpbnB1dFllYXIgKyAyNSA+IG1heFllYXIpIHtcbiAgICAgIHkgPSBtYXhZZWFyIC0gMjQ7XG4gICAgfVxuXG4gICAgY29uc3Qge3llYXJ9ID0gdGhpcy52aXNpYmxlTW9udGg7XG5cbiAgICB0aGlzLnllYXJzLmxlbmd0aCA9IDA7XG4gICAgY29uc3QgdG9kYXk6IElNeURhdGUgPSB0aGlzLmdldFRvZGF5KCk7XG5cbiAgICBsZXQgcm93OiBudW1iZXIgPSAwO1xuICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIDI1OyBpICs9IDUpIHtcbiAgICAgIGNvbnN0IHJvd0RhdGE6IEFycmF5PElNeUNhbGVuZGFyWWVhcj4gPSBbXTtcbiAgICAgIGxldCBjb2w6IG51bWJlciA9IHJ0bCA/IDQgOiAwO1xuXG4gICAgICBmb3IgKGxldCBqID0gaTsgaiA8IGkgKyA1OyBqKyspIHtcbiAgICAgICAgY29uc3QgZGlzYWJsZWQ6IGJvb2xlYW4gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWRZZWFyKGosIHRoaXMub3B0cyk7XG4gICAgICAgIHJvd0RhdGEucHVzaCh7XG4gICAgICAgICAgeWVhcjogaiwgXG4gICAgICAgICAgY3VyclllYXI6IGogPT09IHRvZGF5LnllYXIsIFxuICAgICAgICAgIHNlbGVjdGVkOiBqID09PSB5ZWFyLCBcbiAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICByb3csXG4gICAgICAgICAgY29sOiBydGwgPyBjb2wtLSA6IGNvbCsrXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcm93Kys7XG4gICAgICB0aGlzLnllYXJzLnB1c2gocm93RGF0YSk7XG4gICAgfVxuXG4gICAgY29uc3QgYmVnaW5ZZWFyOiBudW1iZXIgPSB0aGlzLmdldFllYXJWYWx1ZUJ5Um93QW5kQ29sKDAsIDApO1xuICAgIGNvbnN0IGVuZFllYXI6IG51bWJlciA9IGJlZ2luWWVhciArIDI0O1xuICAgIHRoaXMueWVhcnNEdXJhdGlvbiA9ICghcnRsID8gYmVnaW5ZZWFyIDogZW5kWWVhcikgKyBZRUFSX1NFUEFSQVRPUiArICghcnRsID8gZW5kWWVhciA6IGJlZ2luWWVhcik7XG5cbiAgICB0aGlzLnNldFllYXJWaWV3SGVhZGVyQnRuRGlzYWJsZWRTdGF0ZShiZWdpblllYXIsIGVuZFllYXIpO1xuICB9XG5cbiAgZ2V0WWVhclZhbHVlQnlSb3dBbmRDb2wocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy55ZWFyc1tyb3ddW2NvbF0ueWVhcjtcbiAgfVxuXG4gIHNldENhbGVuZGFyVmlzaWJsZU1vbnRoKCk6IHZvaWQge1xuICAgIC8vIFNldHMgdmlzaWJsZSBtb250aCBvZiBjYWxlbmRhclxuICAgIGNvbnN0IHt5ZWFyLCBtb250aE5icn0gPSB0aGlzLnNlbGVjdGVkTW9udGg7XG4gICAgdGhpcy52aXNpYmxlTW9udGggPSB7bW9udGhUeHQ6IHRoaXMub3B0cy5tb250aExhYmVsc1ttb250aE5icl0sIG1vbnRoTmJyOiBtb250aE5iciwgeWVhcjogeWVhcn07XG5cbiAgICAvLyBDcmVhdGUgY3VycmVudCBtb250aFxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcihtb250aE5iciwgeWVhciwgdHJ1ZSk7XG4gIH1cblxuICBvblByZXZOYXZpZ2F0ZUJ0bkNsaWNrZWQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdE1vbnRoICYmICF0aGlzLnNlbGVjdFllYXIpIHtcbiAgICAgIHRoaXMuc2V0RGF0ZVZpZXdNb250aChmYWxzZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0TW9udGgpIHtcbiAgICAgIHRoaXMudmlzaWJsZU1vbnRoLnllYXItLTtcbiAgICAgIHRoaXMuZ2VuZXJhdGVNb250aHMoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5zZWxlY3RZZWFyKSB7XG4gICAgICB0aGlzLmdlbmVyYXRlWWVhcnModGhpcy5nZXRZZWFyVmFsdWVCeVJvd0FuZENvbCgyLCAyKSAtIDI1KTtcbiAgICB9XG4gIH1cblxuICBvbk5leHROYXZpZ2F0ZUJ0bkNsaWNrZWQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdE1vbnRoICYmICF0aGlzLnNlbGVjdFllYXIpIHtcbiAgICAgIHRoaXMuc2V0RGF0ZVZpZXdNb250aCh0cnVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5zZWxlY3RNb250aCkge1xuICAgICAgdGhpcy52aXNpYmxlTW9udGgueWVhcisrO1xuICAgICAgdGhpcy5nZW5lcmF0ZU1vbnRocygpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnNlbGVjdFllYXIpIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVZZWFycyh0aGlzLmdldFllYXJWYWx1ZUJ5Um93QW5kQ29sKDIsIDIpICsgMjUpO1xuICAgIH1cbiAgfVxuXG4gIHNldERhdGVWaWV3TW9udGgoaXNOZXh0OiBib29sZWFuKTogdm9pZCB7XG4gICAgbGV0IGNoYW5nZTogbnVtYmVyID0gaXNOZXh0ID8gMSA6IC0xO1xuXG4gICAgY29uc3Qge3llYXIsIG1vbnRoTmJyfSA9IHRoaXMudmlzaWJsZU1vbnRoO1xuXG4gICAgY29uc3QgZDogRGF0ZSA9IHRoaXMuZ2V0RGF0ZSh5ZWFyLCBtb250aE5iciwgMSk7XG4gICAgZC5zZXRNb250aChkLmdldE1vbnRoKCkgKyBjaGFuZ2UpO1xuXG4gICAgY29uc3QgeTogbnVtYmVyID0gZC5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IG06IG51bWJlciA9IGQuZ2V0TW9udGgoKSArIDE7XG5cbiAgICB0aGlzLnZpc2libGVNb250aCA9IHttb250aFR4dDogdGhpcy5vcHRzLm1vbnRoTGFiZWxzW21dLCBtb250aE5icjogbSwgeWVhcjogeX07XG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKG0sIHksIHRydWUpO1xuICB9XG5cbiAgb25DbG9zZVNlbGVjdG9yKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBrZXlDb2RlOiBudW1iZXIgPSB0aGlzLnV0aWxTZXJ2aWNlLmdldEtleUNvZGVGcm9tRXZlbnQoZXZlbnQpO1xuICAgIGlmIChrZXlDb2RlID09PSBLZXlDb2RlLmVzYykge1xuICAgICAgdGhpcy5jbG9zZWRCeUVzYygpO1xuICAgIH1cbiAgfVxuXG4gIG9uRGF5Q2VsbENsaWNrZWQoY2VsbDogSU15Q2FsZW5kYXJEYXkpOiB2b2lkIHtcbiAgICAvLyBDZWxsIGNsaWNrZWQgb24gdGhlIGNhbGVuZGFyXG4gICAgdGhpcy5zZWxlY3REYXRlKGNlbGwuZGF0ZU9iaik7XG4gICAgdGhpcy5yZXNldE1vbnRoWWVhclNlbGVjdCgpO1xuICB9XG5cbiAgb25EYXlDZWxsS2V5RG93bihldmVudDogYW55KSB7XG4gICAgLy8gTW92ZSBmb2N1cyBieSBhcnJvdyBrZXlzXG4gICAgY29uc3Qge3NvdXJjZVJvdywgc291cmNlQ29sfSA9IHRoaXMuZ2V0U291cmNlUm93QW5kQ29sdW1uRnJvbUV2ZW50KGV2ZW50KTtcbiAgICBjb25zdCB7bW92ZUZvY3VzLCB0YXJnZXRSb3csIHRhcmdldENvbCwgZGlyZWN0aW9ufSA9IHRoaXMuZ2V0VGFyZ2V0Rm9jdXNSb3dBbmRDb2x1bW4oZXZlbnQsIHNvdXJjZVJvdywgc291cmNlQ29sLCBEQVRFX1JPV19DT1VOVCwgREFURV9DT0xfQ09VTlQpO1xuICAgIGlmIChtb3ZlRm9jdXMpIHtcbiAgICAgIHRoaXMuZm9jdXNDZWxsRWxlbWVudChELCB0YXJnZXRSb3csIHRhcmdldENvbCwgZGlyZWN0aW9uLCBEQVRFX0NPTF9DT1VOVCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U291cmNlUm93QW5kQ29sdW1uRnJvbUV2ZW50KGV2ZW50OiBhbnkpOiBhbnkge1xuICAgIGxldCBzb3VyY2VSb3c6IG51bWJlciA9IDA7XG4gICAgbGV0IHNvdXJjZUNvbDogbnVtYmVyID0gMDtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5pZCkge1xuICAgICAgLy8gdmFsdWUgb2YgaWQgaXMgZm9yIGV4YW1wbGU6IG1fMF8xIChmaXJzdCBudW1iZXIgPSByb3csIHNlY29uZCBudW1iZXIgPSBjb2x1bW4pXG4gICAgICBjb25zdCBhcnI6IEFycmF5PHN0cmluZz4gPSBldmVudC50YXJnZXQuaWQuc3BsaXQoVU5ERVJfTElORSk7XG4gICAgICBzb3VyY2VSb3cgPSBOdW1iZXIoYXJyWzFdKTtcbiAgICAgIHNvdXJjZUNvbCA9IE51bWJlcihhcnJbMl0pO1xuICAgIH1cbiAgICByZXR1cm4ge3NvdXJjZVJvdywgc291cmNlQ29sfTtcbiAgfVxuXG4gIGdldFRhcmdldEZvY3VzUm93QW5kQ29sdW1uKGV2ZW50OiBhbnksIHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgcm93Q291bnQ6IG51bWJlciwgY29sQ291bnQ6IG51bWJlcik6IGFueSB7XG4gICAgbGV0IG1vdmVGb2N1czogYm9vbGVhbiA9IHRydWU7XG4gICAgbGV0IHRhcmdldFJvdzogbnVtYmVyID0gcm93O1xuICAgIGxldCB0YXJnZXRDb2w6IG51bWJlciA9IGNvbDtcbiAgICBsZXQgZGlyZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdCBrZXlDb2RlOiBudW1iZXIgPSB0aGlzLnV0aWxTZXJ2aWNlLmdldEtleUNvZGVGcm9tRXZlbnQoZXZlbnQpO1xuICAgIGlmIChrZXlDb2RlID09PSBLZXlDb2RlLnVwQXJyb3cgJiYgcm93ID4gMCkge1xuICAgICAgdGFyZ2V0Um93LS07XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleUNvZGUgPT09IEtleUNvZGUuZG93bkFycm93ICYmIHJvdyA8IHJvd0NvdW50KSB7XG4gICAgICB0YXJnZXRSb3crKztcbiAgICAgIGRpcmVjdGlvbiA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleUNvZGUgPT09IEtleUNvZGUubGVmdEFycm93ICYmIGNvbCA+IDApIHtcbiAgICAgIHRhcmdldENvbC0tO1xuICAgIH1cbiAgICBlbHNlIGlmIChrZXlDb2RlID09PSBLZXlDb2RlLnJpZ2h0QXJyb3cgJiYgY29sIDwgY29sQ291bnQpIHtcbiAgICAgIHRhcmdldENvbCsrO1xuICAgICAgZGlyZWN0aW9uID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBtb3ZlRm9jdXMgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHttb3ZlRm9jdXMsIHRhcmdldFJvdywgdGFyZ2V0Q29sLCBkaXJlY3Rpb259O1xuICB9XG5cbiAgZm9jdXNDZWxsRWxlbWVudCh0eXBlOiBzdHJpbmcsIHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgZGlyZWN0aW9uOiBib29sZWFuLCBjb2xDb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NOYW1lOiBzdHJpbmcgPSB0eXBlICsgVU5ERVJfTElORSArIHJvdyArIFVOREVSX0xJTkUgKyBjb2w7XG4gICAgbGV0IGVsZW06IGFueSA9IHRoaXMuc2VsZWN0b3JFbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoRE9UICsgY2xhc3NOYW1lKTtcblxuICAgIGlmIChlbGVtLmdldEF0dHJpYnV0ZShUQUJJTkRFWCkgIT09IFpFUk9fU1RSKSB7XG4gICAgICAvLyBpZiB0aGUgc2VsZWN0ZWQgZWxlbWVudCBpcyBkaXNhYmxlZCBtb3ZlIGEgZm9jdXMgdG8gbmV4dC9wcmV2aW91cyBlbmFibGVkIGVsZW1lbnRcbiAgICAgIGxldCB0ZExpc3Q6IGFueSA9IHRoaXMuZ2V0Q2FsZW5kYXJFbGVtZW50cygpO1xuICAgICAgY29uc3QgaWR4OiBudW1iZXIgPSByb3cgKiAoY29sQ291bnQgKyAxKSArIGNvbDtcblxuICAgICAgbGV0IGVuYWJsZWRFbGVtOiBhbnkgPSBudWxsO1xuICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAvLyBmaW5kIG5leHQgZW5hYmxlZFxuICAgICAgICBlbmFibGVkRWxlbSA9IHRkTGlzdC5zbGljZShpZHgpLmZpbmQoKHRkOiBhbnkpID0+IHRkLmdldEF0dHJpYnV0ZShUQUJJTkRFWCkgPT09IFpFUk9fU1RSKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBmaW5kIHByZXZpb3VzIGVuYWJsZWRcbiAgICAgICAgZW5hYmxlZEVsZW0gPSB0ZExpc3Quc2xpY2UoMCwgaWR4KS5yZXZlcnNlKCkuZmluZCgodGQ6IGFueSkgPT4gdGQuZ2V0QXR0cmlidXRlKFRBQklOREVYKSA9PT0gWkVST19TVFIpO1xuICAgICAgfVxuXG4gICAgICBlbGVtID0gZW5hYmxlZEVsZW0gPyBlbmFibGVkRWxlbSA6IHRoaXMuc2VsZWN0b3JFbC5uYXRpdmVFbGVtZW50O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVsZW0uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBmb2N1c1RvU2VsZWN0b3IoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RvckVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGdldENhbGVuZGFyRWxlbWVudHMoKTogYW55IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnNlbGVjdG9yRWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFREX1NFTEVDVE9SKSk7XG4gIH1cblxuICBzZWxlY3REYXRlKGRhdGU6IElNeURhdGUpOiB2b2lkIHtcbiAgICBjb25zdCB7ZGF0ZVJhbmdlLCBkYXRlRm9ybWF0LCBtb250aExhYmVscywgZGF0ZVJhbmdlRGF0ZXNEZWxpbWl0ZXIsIGNsb3NlU2VsZWN0b3JPbkRhdGVTZWxlY3R9ID0gdGhpcy5vcHRzO1xuXG4gICAgaWYgKGRhdGVSYW5nZSkge1xuICAgICAgLy8gRGF0ZSByYW5nZVxuICAgICAgY29uc3QgaXNCZWdpbkRhdGVJbml0aWFsaXplZDogYm9vbGVhbiA9IHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUodGhpcy5zZWxlY3RlZERhdGVSYW5nZS5iZWdpbik7XG4gICAgICBjb25zdCBpc0VuZERhdGVJbml0aWFsaXplZDogYm9vbGVhbiA9IHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUodGhpcy5zZWxlY3RlZERhdGVSYW5nZS5lbmQpO1xuICAgICAgaWYgKGlzQmVnaW5EYXRlSW5pdGlhbGl6ZWQgJiYgaXNFbmREYXRlSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgLy8gYm90aCBhbHJlYWR5IHNlbGVjdGVkIC0gc2V0IGJlZ2luIGRhdGUgYW5kIHJlc2V0IGVuZCBkYXRlXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlUmFuZ2UuYmVnaW4gPSBkYXRlO1xuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZVJhbmdlLmVuZCA9IHRoaXMudXRpbFNlcnZpY2UucmVzZXREYXRlKCk7XG4gICAgICAgIHRoaXMucmFuZ2VEYXRlU2VsZWN0aW9uKHtcbiAgICAgICAgICBpc0JlZ2luOiB0cnVlLFxuICAgICAgICAgIGRhdGUsXG4gICAgICAgICAganNEYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLmdldERhdGUoZGF0ZSksXG4gICAgICAgICAgZGF0ZUZvcm1hdDogZGF0ZUZvcm1hdCxcbiAgICAgICAgICBmb3JtYXR0ZWQ6IHRoaXMudXRpbFNlcnZpY2UuZm9ybWF0RGF0ZShkYXRlLCBkYXRlRm9ybWF0LCBtb250aExhYmVscyksXG4gICAgICAgICAgZXBvYzogdGhpcy51dGlsU2VydmljZS5nZXRFcG9jVGltZShkYXRlKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFpc0JlZ2luRGF0ZUluaXRpYWxpemVkKSB7XG4gICAgICAgIC8vIGJlZ2luIGRhdGVcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGVSYW5nZS5iZWdpbiA9IGRhdGU7XG4gICAgICAgIHRoaXMucmFuZ2VEYXRlU2VsZWN0aW9uKHtcbiAgICAgICAgICBpc0JlZ2luOiB0cnVlLFxuICAgICAgICAgIGRhdGUsXG4gICAgICAgICAganNEYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLmdldERhdGUoZGF0ZSksXG4gICAgICAgICAgZGF0ZUZvcm1hdDogZGF0ZUZvcm1hdCxcbiAgICAgICAgICBmb3JtYXR0ZWQ6IHRoaXMudXRpbFNlcnZpY2UuZm9ybWF0RGF0ZShkYXRlLCBkYXRlRm9ybWF0LCBtb250aExhYmVscyksXG4gICAgICAgICAgZXBvYzogdGhpcy51dGlsU2VydmljZS5nZXRFcG9jVGltZShkYXRlKVxuICAgICAgICB9KTtcblxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIHNlY29uZCBzZWxlY3Rpb25cbiAgICAgICAgY29uc3QgZmlyc3REYXRlRWFybGllcjogYm9vbGVhbiA9IHRoaXMudXRpbFNlcnZpY2UuaXNEYXRlRWFybGllcihkYXRlLCB0aGlzLnNlbGVjdGVkRGF0ZVJhbmdlLmJlZ2luKTtcbiAgICAgICAgaWYgKGZpcnN0RGF0ZUVhcmxpZXIpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZVJhbmdlLmJlZ2luID0gZGF0ZTtcbiAgICAgICAgICB0aGlzLnJhbmdlRGF0ZVNlbGVjdGlvbih7XG4gICAgICAgICAgICBpc0JlZ2luOiB0cnVlLFxuICAgICAgICAgICAgZGF0ZSxcbiAgICAgICAgICAgIGpzRGF0ZTogdGhpcy51dGlsU2VydmljZS5nZXREYXRlKGRhdGUpLFxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogZGF0ZUZvcm1hdCxcbiAgICAgICAgICAgIGZvcm1hdHRlZDogdGhpcy51dGlsU2VydmljZS5mb3JtYXREYXRlKGRhdGUsIGRhdGVGb3JtYXQsIG1vbnRoTGFiZWxzKSxcbiAgICAgICAgICAgIGVwb2M6IHRoaXMudXRpbFNlcnZpY2UuZ2V0RXBvY1RpbWUoZGF0ZSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZVJhbmdlLmVuZCA9IGRhdGU7XG4gICAgICAgICAgdGhpcy5yYW5nZURhdGVTZWxlY3Rpb24oe1xuICAgICAgICAgICAgaXNCZWdpbjogZmFsc2UsXG4gICAgICAgICAgICBkYXRlLFxuICAgICAgICAgICAganNEYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLmdldERhdGUoZGF0ZSksXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBkYXRlRm9ybWF0LFxuICAgICAgICAgICAgZm9ybWF0dGVkOiB0aGlzLnV0aWxTZXJ2aWNlLmZvcm1hdERhdGUoZGF0ZSwgZGF0ZUZvcm1hdCwgbW9udGhMYWJlbHMpLFxuICAgICAgICAgICAgZXBvYzogdGhpcy51dGlsU2VydmljZS5nZXRFcG9jVGltZShkYXRlKVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy5kYXRlQ2hhbmdlZCh0aGlzLnV0aWxTZXJ2aWNlLmdldERhdGVNb2RlbChudWxsLCB0aGlzLnNlbGVjdGVkRGF0ZVJhbmdlLCBkYXRlRm9ybWF0LCBtb250aExhYmVscywgZGF0ZVJhbmdlRGF0ZXNEZWxpbWl0ZXIpLCBjbG9zZVNlbGVjdG9yT25EYXRlU2VsZWN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIFNpbmdsZSBkYXRlXG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGRhdGU7XG4gICAgICB0aGlzLmRhdGVDaGFuZ2VkKHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF0ZU1vZGVsKHRoaXMuc2VsZWN0ZWREYXRlLCBudWxsLCBkYXRlRm9ybWF0LCBtb250aExhYmVscywgZGF0ZVJhbmdlRGF0ZXNEZWxpbWl0ZXIpLCBjbG9zZVNlbGVjdG9yT25EYXRlU2VsZWN0KTtcbiAgICB9XG4gIH1cblxuICBtb250aFN0YXJ0SWR4KHk6IG51bWJlciwgbTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAvLyBNb250aCBzdGFydCBpbmRleFxuICAgIGNvbnN0IGQ6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGQuc2V0RGF0ZSgxKTtcbiAgICBkLnNldE1vbnRoKG0gLSAxKTtcbiAgICBkLnNldEZ1bGxZZWFyKHkpO1xuICAgIGNvbnN0IGlkeCA9IGQuZ2V0RGF5KCkgKyB0aGlzLnN1bmRheUlkeCgpO1xuICAgIHJldHVybiBpZHggPj0gNyA/IGlkeCAtIDcgOiBpZHg7XG4gIH1cblxuICBkYXlzSW5Nb250aChtOiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgLy8gUmV0dXJuIG51bWJlciBvZiBkYXlzIG9mIGN1cnJlbnQgbW9udGhcbiAgICByZXR1cm4gbmV3IERhdGUoeSwgbSwgMCkuZ2V0RGF0ZSgpO1xuICB9XG5cbiAgZGF5c0luUHJldk1vbnRoKG06IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAvLyBSZXR1cm4gbnVtYmVyIG9mIGRheXMgb2YgdGhlIHByZXZpb3VzIG1vbnRoXG4gICAgY29uc3QgZDogRGF0ZSA9IHRoaXMuZ2V0RGF0ZSh5LCBtLCAxKTtcbiAgICBkLnNldE1vbnRoKGQuZ2V0TW9udGgoKSAtIDEpO1xuICAgIHJldHVybiB0aGlzLmRheXNJbk1vbnRoKGQuZ2V0TW9udGgoKSArIDEsIGQuZ2V0RnVsbFllYXIoKSk7XG4gIH1cblxuICBpc0N1cnJEYXkoZDogbnVtYmVyLCBtOiBudW1iZXIsIHk6IG51bWJlciwgdG9kYXk6IElNeURhdGUpOiBib29sZWFuIHtcbiAgICAvLyBDaGVjayBpcyBhIGdpdmVuIGRhdGUgdGhlIHRvZGF5XG4gICAgcmV0dXJuIGQgPT09IHRvZGF5LmRheSAmJiBtID09PSB0b2RheS5tb250aCAmJiB5ID09PSB0b2RheS55ZWFyO1xuICB9XG5cbiAgZ2V0VG9kYXkoKTogSU15RGF0ZSB7XG4gICAgY29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIHt5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoOiBkYXRlLmdldE1vbnRoKCkgKyAxLCBkYXk6IGRhdGUuZ2V0RGF0ZSgpfTtcbiAgfVxuXG4gIGdldERheU51bWJlcihkYXRlOiBJTXlEYXRlKTogbnVtYmVyIHtcbiAgICAvLyBHZXQgZGF5IG51bWJlcjogc3U9MCwgbW89MSwgdHU9Miwgd2U9MyAuLi5cbiAgICBjb25zdCBkOiBEYXRlID0gdGhpcy5nZXREYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXkpO1xuICAgIHJldHVybiBkLmdldERheSgpO1xuICB9XG5cbiAgZ2V0V2Vla2RheShkYXRlOiBJTXlEYXRlKTogc3RyaW5nIHtcbiAgICAvLyBHZXQgd2Vla2RheTogc3UsIG1vLCB0dSwgd2UgLi4uXG4gICAgcmV0dXJuIHRoaXMud2Vla0RheU9wdHNbdGhpcy5nZXREYXlOdW1iZXIoZGF0ZSldO1xuICB9XG5cbiAgZ2V0RGF0ZSh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRheTogbnVtYmVyKTogRGF0ZSB7XG4gICAgLy8gQ3JlYXRlcyBhIGRhdGUgb2JqZWN0IGZyb20gZ2l2ZW4geWVhciwgbW9udGggYW5kIGRheVxuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSwgMCwgMCwgMCwgMCk7XG4gIH1cblxuICBzdW5kYXlJZHgoKTogbnVtYmVyIHtcbiAgICAvLyBJbmRleCBvZiBTdW5kYXkgZGF5XG4gICAgcmV0dXJuIHRoaXMuZGF5SWR4ID4gMCA/IDcgLSB0aGlzLmRheUlkeCA6IDA7XG4gIH1cblxuICBnZW5lcmF0ZUNhbGVuZGFyKG06IG51bWJlciwgeTogbnVtYmVyLCBub3RpZnlDaGFuZ2U6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRhdGVzLmxlbmd0aCA9IDA7XG4gICAgY29uc3QgdG9kYXk6IElNeURhdGUgPSB0aGlzLmdldFRvZGF5KCk7XG4gICAgY29uc3QgbW9udGhTdGFydDogbnVtYmVyID0gdGhpcy5tb250aFN0YXJ0SWR4KHksIG0pO1xuICAgIGNvbnN0IGRJblRoaXNNOiBudW1iZXIgPSB0aGlzLmRheXNJbk1vbnRoKG0sIHkpO1xuICAgIGNvbnN0IGRJblByZXZNOiBudW1iZXIgPSB0aGlzLmRheXNJblByZXZNb250aChtLCB5KTtcblxuICAgIGxldCBkYXlOYnI6IG51bWJlciA9IDE7XG4gICAgbGV0IG1vbnRoOiBudW1iZXIgPSBtO1xuICAgIGxldCBjbW86IG51bWJlciA9IE1vbnRoSWQucHJldjtcbiAgICBjb25zdCB7cnRsLCBzaG93V2Vla051bWJlcnMsIGZpcnN0RGF5T2ZXZWVrLCBtYXJrRGF0ZXMsIG1hcmtXZWVrZW5kcywgc3VuSGlnaGxpZ2h0LCBzYXRIaWdobGlnaHQsIGhpZ2hsaWdodERhdGVzfSA9IHRoaXMub3B0cztcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDc7IGkrKykge1xuICAgICAgbGV0IGNvbDogbnVtYmVyID0gcnRsID8gNiA6IDA7XG4gICAgICBjb25zdCB3ZWVrOiBBcnJheTxJTXlDYWxlbmRhckRheT4gPSBbXTtcbiAgICAgIGlmIChpID09PSAxKSB7XG4gICAgICAgIC8vIEZpcnN0IHdlZWtcbiAgICAgICAgY29uc3QgcG0gPSBkSW5QcmV2TSAtIG1vbnRoU3RhcnQgKyAxO1xuICAgICAgICAvLyBQcmV2aW91cyBtb250aFxuICAgICAgICBmb3IgKGxldCBqID0gcG07IGogPD0gZEluUHJldk07IGorKykge1xuICAgICAgICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB7eWVhcjogbSA9PT0gMSA/IHkgLSAxIDogeSwgbW9udGg6IG0gPT09IDEgPyAxMiA6IG0gLSAxLCBkYXk6IGp9O1xuICAgICAgICAgIHdlZWsucHVzaCh7ZGF0ZU9iajogZGF0ZSxcbiAgICAgICAgICAgIGNtbyxcbiAgICAgICAgICAgIGN1cnJEYXk6IHRoaXMuaXNDdXJyRGF5KGosIG1vbnRoIC0gMSwgeSwgdG9kYXkpLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMudXRpbFNlcnZpY2UuaXNEaXNhYmxlZERhdGUoZGF0ZSwgdGhpcy5vcHRzKSxcbiAgICAgICAgICAgIG1hcmtlZERhdGU6IHRoaXMudXRpbFNlcnZpY2UuaXNNYXJrZWREYXRlKGRhdGUsIG1hcmtEYXRlcywgbWFya1dlZWtlbmRzKSxcbiAgICAgICAgICAgIGhpZ2hsaWdodDogdGhpcy51dGlsU2VydmljZS5pc0hpZ2hsaWdodGVkRGF0ZShkYXRlLCBzdW5IaWdobGlnaHQsIHNhdEhpZ2hsaWdodCwgaGlnaGxpZ2h0RGF0ZXMpLFxuICAgICAgICAgICAgcm93OiBpIC0gMSxcbiAgICAgICAgICAgIGNvbDogcnRsID8gY29sLS0gOiBjb2wrK1xuICAgICAgICAgIH0pOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGNtbyA9IE1vbnRoSWQuY3VycjtcbiAgICAgICAgLy8gQ3VycmVudCBtb250aFxuICAgICAgICBjb25zdCBkYXlzTGVmdDogbnVtYmVyID0gNyAtIHdlZWsubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRheXNMZWZ0OyBqKyspIHtcbiAgICAgICAgICBjb25zdCBkYXRlOiBJTXlEYXRlID0ge3llYXI6IHksIG1vbnRoOiBtLCBkYXk6IGRheU5icn07XG4gICAgICAgICAgd2Vlay5wdXNoKHtkYXRlT2JqOiBkYXRlLFxuICAgICAgICAgICAgY21vLFxuICAgICAgICAgICAgY3VyckRheTogdGhpcy5pc0N1cnJEYXkoZGF5TmJyLCBtLCB5LCB0b2RheSksXG4gICAgICAgICAgICBkaXNhYmxlZDogdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF0ZShkYXRlLCB0aGlzLm9wdHMpLFxuICAgICAgICAgICAgbWFya2VkRGF0ZTogdGhpcy51dGlsU2VydmljZS5pc01hcmtlZERhdGUoZGF0ZSwgbWFya0RhdGVzLCBtYXJrV2Vla2VuZHMpLFxuICAgICAgICAgICAgaGlnaGxpZ2h0OiB0aGlzLnV0aWxTZXJ2aWNlLmlzSGlnaGxpZ2h0ZWREYXRlKGRhdGUsIHN1bkhpZ2hsaWdodCwgc2F0SGlnaGxpZ2h0LCBoaWdobGlnaHREYXRlcyksXG4gICAgICAgICAgICByb3c6IGkgLSAxLFxuICAgICAgICAgICAgY29sOiBydGwgPyBjb2wtLSA6IGNvbCsrXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZGF5TmJyKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBSZXN0IG9mIHRoZSB3ZWVrc1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDg7IGorKykge1xuICAgICAgICAgIGlmIChkYXlOYnIgPiBkSW5UaGlzTSkge1xuICAgICAgICAgICAgLy8gTmV4dCBtb250aFxuICAgICAgICAgICAgZGF5TmJyID0gMTtcbiAgICAgICAgICAgIGNtbyA9IE1vbnRoSWQubmV4dDtcbiAgICAgICAgICAgIG1vbnRoID0gbSArIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB7eWVhcjogY21vID09PSBNb250aElkLm5leHQgJiYgbSA9PT0gMTIgPyB5ICsgMSA6IHksIG1vbnRoOiBjbW8gPT09IE1vbnRoSWQuY3VyciA/IG0gOiBjbW8gPT09IE1vbnRoSWQubmV4dCAmJiBtIDwgMTIgPyBtICsgMSA6IDEsIGRheTogZGF5TmJyfTtcbiAgICAgICAgICB3ZWVrLnB1c2goe2RhdGVPYmo6IGRhdGUsXG4gICAgICAgICAgICBjbW8sXG4gICAgICAgICAgICBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShkYXlOYnIsIG1vbnRoLCB5LCB0b2RheSksXG4gICAgICAgICAgICBkaXNhYmxlZDogdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF0ZShkYXRlLCB0aGlzLm9wdHMpLFxuICAgICAgICAgICAgbWFya2VkRGF0ZTogdGhpcy51dGlsU2VydmljZS5pc01hcmtlZERhdGUoZGF0ZSwgbWFya0RhdGVzLCBtYXJrV2Vla2VuZHMpLFxuICAgICAgICAgICAgaGlnaGxpZ2h0OiB0aGlzLnV0aWxTZXJ2aWNlLmlzSGlnaGxpZ2h0ZWREYXRlKGRhdGUsIHN1bkhpZ2hsaWdodCwgc2F0SGlnaGxpZ2h0LCBoaWdobGlnaHREYXRlcyksXG4gICAgICAgICAgICByb3c6IGkgLSAxLFxuICAgICAgICAgICAgY29sOiBydGwgPyBjb2wtLSA6IGNvbCsrXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZGF5TmJyKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHdlZWtOYnI6IG51bWJlciA9IHNob3dXZWVrTnVtYmVycyAgJiYgZmlyc3REYXlPZldlZWsgPT09IE1PID8gdGhpcy51dGlsU2VydmljZS5nZXRXZWVrTnVtYmVyKHdlZWtbMF0uZGF0ZU9iaikgOiAwO1xuICAgICAgdGhpcy5kYXRlcy5wdXNoKHt3ZWVrLCB3ZWVrTmJyfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXREYXRlVmlld0hlYWRlckJ0bkRpc2FibGVkU3RhdGUobSwgeSk7XG5cbiAgICBpZiAobm90aWZ5Q2hhbmdlKSB7XG4gICAgICAvLyBOb3RpZnkgcGFyZW50XG4gICAgICB0aGlzLmNhbGVuZGFyVmlld0NoYW5nZWQoe3llYXI6IHksIG1vbnRoOiBtLCBmaXJzdDoge251bWJlcjogMSwgd2Vla2RheTogdGhpcy5nZXRXZWVrZGF5KHt5ZWFyOiB5LCBtb250aDogbSwgZGF5OiAxfSl9LCBsYXN0OiB7bnVtYmVyOiBkSW5UaGlzTSwgd2Vla2RheTogdGhpcy5nZXRXZWVrZGF5KHt5ZWFyOiB5LCBtb250aDogbSwgZGF5OiBkSW5UaGlzTX0pfX0pO1xuICAgIH1cbiAgfVxuXG4gIHNldERhdGVWaWV3SGVhZGVyQnRuRGlzYWJsZWRTdGF0ZShtOiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgIGxldCBkcG06IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsZXQgZG5tOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdCB7ZGlzYWJsZUhlYWRlckJ1dHRvbnMsIGRpc2FibGVVbnRpbCwgZGlzYWJsZVNpbmNlLCBtaW5ZZWFyLCBtYXhZZWFyfSA9IHRoaXMub3B0cztcblxuICAgIGlmIChkaXNhYmxlSGVhZGVyQnV0dG9ucykge1xuICAgICAgZHBtID0gdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkQnlEaXNhYmxlVW50aWwoe3llYXI6IG0gPT09IDEgPyB5IC0gMSA6IHksIG1vbnRoOiBtID09PSAxID8gMTIgOiBtIC0gMSwgZGF5OiB0aGlzLmRheXNJbk1vbnRoKG0gPT09IDEgPyAxMiA6IG0gLSAxLCBtID09PSAxID8geSAtIDEgOiB5KX0sIGRpc2FibGVVbnRpbCk7XG4gICAgICBkbm0gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWRCeURpc2FibGVTaW5jZSh7eWVhcjogbSA9PT0gMTIgPyB5ICsgMSA6IHksIG1vbnRoOiBtID09PSAxMiA/IDEgOiBtICsgMSwgZGF5OiAxfSwgZGlzYWJsZVNpbmNlKTtcbiAgICB9XG4gICAgdGhpcy5wcmV2Vmlld0Rpc2FibGVkID0gbSA9PT0gMSAmJiB5ID09PSBtaW5ZZWFyIHx8IGRwbTtcbiAgICB0aGlzLm5leHRWaWV3RGlzYWJsZWQgPSBtID09PSAxMiAmJiB5ID09PSBtYXhZZWFyIHx8IGRubTtcbiAgfVxuXG4gIHNldE1vbnRoVmlld0hlYWRlckJ0bkRpc2FibGVkU3RhdGUoeTogbnVtYmVyKTogdm9pZCB7XG4gICAgbGV0IGRwbTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxldCBkbm06IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0IHtkaXNhYmxlSGVhZGVyQnV0dG9ucywgZGlzYWJsZVVudGlsLCBkaXNhYmxlU2luY2UsIG1pblllYXIsIG1heFllYXJ9ID0gdGhpcy5vcHRzO1xuXG4gICAgaWYgKGRpc2FibGVIZWFkZXJCdXR0b25zKSB7XG4gICAgICBkcG0gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWRCeURpc2FibGVVbnRpbCh7eWVhcjogeSAtIDEsIG1vbnRoOiAxMiwgZGF5OiAzMX0sIGRpc2FibGVVbnRpbCk7XG4gICAgICBkbm0gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWRCeURpc2FibGVTaW5jZSh7eWVhcjogeSArIDEsIG1vbnRoOiAxLCBkYXk6IDF9LCBkaXNhYmxlU2luY2UpO1xuICAgIH1cbiAgICB0aGlzLnByZXZWaWV3RGlzYWJsZWQgPSB5ID09PSBtaW5ZZWFyIHx8IGRwbTtcbiAgICB0aGlzLm5leHRWaWV3RGlzYWJsZWQgPSB5ID09PSBtYXhZZWFyIHx8IGRubTtcbiAgfVxuXG4gIHNldFllYXJWaWV3SGVhZGVyQnRuRGlzYWJsZWRTdGF0ZSh5cDogbnVtYmVyLCB5bjogbnVtYmVyKTogdm9pZCB7XG4gICAgbGV0IGRweTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxldCBkbnk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0IHtkaXNhYmxlSGVhZGVyQnV0dG9ucywgZGlzYWJsZVVudGlsLCBkaXNhYmxlU2luY2UsIG1pblllYXIsIG1heFllYXJ9ID0gdGhpcy5vcHRzO1xuXG4gICAgaWYgKGRpc2FibGVIZWFkZXJCdXR0b25zKSB7XG4gICAgICBkcHkgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWRCeURpc2FibGVVbnRpbCh7eWVhcjogeXAgLSAxLCBtb250aDogMTIsIGRheTogMzF9LCBkaXNhYmxlVW50aWwpO1xuICAgICAgZG55ID0gdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkQnlEaXNhYmxlU2luY2Uoe3llYXI6IHluICsgMSwgbW9udGg6IDEsIGRheTogMX0sIGRpc2FibGVTaW5jZSk7XG4gICAgfVxuICAgIHRoaXMucHJldlZpZXdEaXNhYmxlZCA9IHlwIDw9IG1pblllYXIgfHwgZHB5O1xuICAgIHRoaXMubmV4dFZpZXdEaXNhYmxlZCA9IHluID49IG1heFllYXIgfHwgZG55O1xuICB9XG59XG4iXX0=