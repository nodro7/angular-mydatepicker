import {Component, ElementRef, ViewEncapsulation, ViewChild, Renderer2, ChangeDetectorRef, AfterViewInit, OnDestroy, HostBinding} from "@angular/core";
import {IMyDate} from "../../interfaces/my-date.interface";
import {IMyDateRange} from "../../interfaces/my-date-range.interface";
import {IMyMonth} from "../../interfaces/my-month.interface";
import {IMyCalendarDay} from "../../interfaces/my-calendar-day.interface";
import {IMyCalendarMonth} from "../../interfaces/my-calendar-month.interface";
import {IMyCalendarYear} from "../../interfaces/my-calendar-year.interface";
import {IMyWeek} from "../../interfaces/my-week.interface";
import {IMyOptions} from "../../interfaces/my-options.interface";
import {IMySelectorPosition} from "../../interfaces/my-selector-pos.interface";
import {IMyCalendarViewChanged} from "../../interfaces/my-calendar-view-changed.interface";
import {IMyDateModel} from "../../interfaces/my-date-model.interface";
import {IMyRangeDateSelection} from "../../interfaces/my-range-date-selection.interface";
import {IMyCalendarAnimation} from "../../interfaces/my-calendar-animation.interface";
import {IMyValidateOptions} from "../../interfaces/my-validate-options.interface";
import {UtilService} from "../../services/angular-mydatepicker.util.service";
import {KeyCode} from "../../enums/key-code.enum";
import {MonthId} from "../../enums/month-id.enum";
import {DefaultView} from "../../enums/default-view.enum";
import {CalAnimation} from "../../enums/cal-animation.enum";
import {HeaderAction} from "../../enums/header-action.enum";
import {ActiveView} from "../../enums/active-view.enum";
import {DOT, UNDER_LINE, D, M, Y, DATE_ROW_COUNT, DATE_COL_COUNT, MONTH_ROW_COUNT, MONTH_COL_COUNT, YEAR_ROW_COUNT, YEAR_COL_COUNT, 
  SU, MO, TU, WE, TH, FR, SA, EMPTY_STR, CLICK, STYLE, MY_DP_ANIMATION, ANIMATION_NAMES, IN, OUT, TABINDEX, TD_SELECTOR, ZERO_STR, YEAR_SEPARATOR} from "../../constants/constants";

@Component({
  selector: "lib-angular-mydatepicker-calendar",
  templateUrl: './calendar.component.html',
  styleUrls: ['../../css/angular-mydatepicker.style.css'],
  providers: [UtilService],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements AfterViewInit, OnDestroy {
  @ViewChild("selectorEl") selectorEl: ElementRef;
  @ViewChild("styleEl") styleEl: ElementRef;
  
  @HostBinding("style.position") position = "static";

  opts: IMyOptions;
  visibleMonth: IMyMonth = {monthTxt: EMPTY_STR, monthNbr: 0, year: 0};
  selectedMonth: IMyMonth = {monthNbr: 0, year: 0};
  selectedDate: IMyDate = {year: 0, month: 0, day: 0};
  selectedDateRange: IMyDateRange = {begin: {year: 0, month: 0, day: 0}, end: {year: 0, month: 0, day: 0}};
  weekDays: Array<string> = [];
  dates: Array<IMyWeek> = [];
  months: Array<Array<IMyCalendarMonth>> = [];
  years: Array<Array<IMyCalendarYear>> = [];
  yearsDuration: string = "";
  dayIdx: number = 0;
  weekDayOpts: Array<string> = [SU, MO, TU, WE, TH, FR, SA];

  selectMonth: boolean = false;
  selectYear: boolean = false;

  viewChanged: boolean = false;

  dateChanged: (dm: IMyDateModel, close: boolean) => void;
  calendarViewChanged: (cvc: IMyCalendarViewChanged) => void;
  rangeDateSelection: (rds: IMyRangeDateSelection) => void;
  viewActivated: (va: ActiveView) => void;
  closedByEsc: () => void;
  
  selectorPos: IMySelectorPosition = null;

  prevViewDisabled: boolean = false;
  nextViewDisabled: boolean = false;

  clickListener: () => void;

  constructor(private elem: ElementRef, private renderer: Renderer2, private cdr: ChangeDetectorRef, private utilService: UtilService) {
    this.clickListener = renderer.listen(elem.nativeElement, CLICK, (event: any) => {
      if ((this.opts.monthSelector || this.opts.yearSelector) && event.target) {
        this.resetMonthYearSelect();
      }
    });
  }

  ngAfterViewInit(): void {
    const {stylesData, calendarAnimation, inline} = this.opts;

    if (stylesData.styles.length) {
      const styleElTemp: any = this.renderer.createElement(STYLE);
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

  ngOnDestroy(): void {
    this.clickListener();
  }

  initializeComponent(opts: IMyOptions, defaultMonth: string, selectedValue: any, inputValue: string, selectorPos: IMySelectorPosition, dc: (dm: IMyDateModel, close: boolean) => void, cvc: (cvc: IMyCalendarViewChanged) => void, rds: (rds: IMyRangeDateSelection) => void, va: (va: ActiveView) => void, cbe: () => void): void {
    this.opts = opts;
    this.selectorPos = selectorPos;
    
    this.dateChanged = dc;
    this.calendarViewChanged = cvc;
    this.rangeDateSelection = rds;
    this.viewActivated = va;
    this.closedByEsc = cbe;

    const {defaultView, firstDayOfWeek, dayLabels} = opts;

    this.weekDays.length = 0;
    this.dayIdx = this.weekDayOpts.indexOf(firstDayOfWeek);
    if (this.dayIdx !== -1) {
      let idx: number = this.dayIdx;
      for (let i = 0; i < this.weekDayOpts.length; i++) {
        this.weekDays.push(dayLabels[this.weekDayOpts[idx]]);
        idx = this.weekDayOpts[idx] === SA ? 0 : idx + 1;
      }
    }

    this.initializeView(defaultMonth, selectedValue, inputValue);
    this.setCalendarVisibleMonth();
    this.setDefaultView(defaultView);
  }

  initializeView(defaultMonth: string, selectedValue: any, inputValue: string): void {
    const {dateRange} = this.opts;

    // use today as a selected month
    const today: IMyDate = this.utilService.getToday();
    this.selectedMonth = {monthNbr: today.month, year: today.year};

    // If default month attribute valur given use it as a selected month
    if (defaultMonth && defaultMonth.length) {
      this.selectedMonth = this.utilService.parseDefaultMonth(defaultMonth);
    }

    let validateOpts: IMyValidateOptions = null;
    if (!dateRange) {
      // Single date mode - If date selected use it as selected month
      validateOpts = {validateDisabledDates: false, selectedValue: this.utilService.getSelectedValue(selectedValue, dateRange)};
      const date: IMyDate = this.utilService.isDateValid(inputValue, this.opts, validateOpts);

      if (this.utilService.isInitializedDate(date)) {
        this.selectedDate = date;
        this.selectedMonth = {monthNbr: date.month, year: date.year};
      }
    }
    else {
      // Date range mode - If date range selected use begin date as selected month
      validateOpts = {validateDisabledDates: false, selectedValue: this.utilService.getSelectedValue(selectedValue, dateRange)};
      const {begin, end} = this.utilService.isDateValidDateRange(inputValue, this.opts, validateOpts);

      if (this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end)) {
        this.selectedDateRange = {begin, end};
        this.selectedMonth = {monthNbr: begin.month, year: begin.year};
      }
    }
  }

  refreshComponent(opts: IMyOptions, defaultMonth: string, selectedValue: any, inputValue: string): void {
    this.opts = opts;

    const {defaultView} = opts;

    this.initializeView(defaultMonth, selectedValue, inputValue);
    this.setCalendarVisibleMonth();
    this.setDefaultView(defaultView);
  }

  headerAction(headerAction: HeaderAction): void {
    const {monthSelector, yearSelector} = this.opts;

    if (headerAction === HeaderAction.PrevBtnClick) {
      if (!this.prevViewDisabled) {
        this.onPrevNavigateBtnClicked();
      }
    }
    else if (headerAction === HeaderAction.NextBtnClick) {
      if (!this.nextViewDisabled) {
        this.onNextNavigateBtnClicked();
      }
    }
    else if (headerAction === HeaderAction.MonthBtnClick) {
      if (monthSelector) {
        this.onMonthViewBtnClicked();
      }
    }
    else if (headerAction === HeaderAction.YearBtnClick) {
      if (yearSelector) {
        this.onYearViewBtnClicked();
      }
    }
  }

  setDefaultView(defaultView: DefaultView): void {
    if (defaultView === DefaultView.Month) {
      this.monthViewBtnClicked();
    }
    else if (defaultView === DefaultView.Year) {
      this.yearViewBtnClicked();
    }
  }

  setCalendarAnimation(calAnimation: IMyCalendarAnimation, isOpen: boolean): void {
    const {nativeElement} = this.selectorEl;
    const {renderer} = this;

    const classIn = MY_DP_ANIMATION + ANIMATION_NAMES[calAnimation.in - 1];
    if (isOpen) {
      renderer.addClass(nativeElement, classIn + IN);
    }
    else {
      const classOut = MY_DP_ANIMATION + ANIMATION_NAMES[calAnimation.out - 1];
      renderer.removeClass(nativeElement, classIn + IN);
      renderer.addClass(nativeElement, classOut + OUT);
    }
  }

  resetDateValue(): void {
    if (!this.opts.dateRange) {
      this.selectedDate = this.utilService.resetDate();
    }
    else {
      this.selectedDateRange.begin = this.utilService.resetDate();
      this.selectedDateRange.end = this.utilService.resetDate();
    }
  }

  clearDate(): void {
    const {month, year} = this.utilService.getToday();
    this.selectedMonth = {monthNbr: month, year: year};
    
    this.resetDateValue();
    this.setCalendarVisibleMonth();
    this.resetMonthYearSelect();
  }

  resetMonthYearSelect(): void {
    this.selectMonth = false;
    this.selectYear = false;
  }

  onMonthViewBtnClicked(): void {
    this.viewChanged = true;
    this.monthViewBtnClicked();
  }

  monthViewBtnClicked(): void {
    this.selectMonth = !this.selectMonth;
    this.selectYear = false;
    
    this.cdr.detectChanges();
    if (this.selectMonth) {
      this.generateMonths();
    }
    else {
      const {year, monthNbr} = this.selectedMonth;
      this.visibleMonth = {monthTxt: this.opts.monthLabels[monthNbr], monthNbr, year};
      this.generateCalendar(monthNbr, year, true);
    }
  }

  onMonthCellClicked(cell: IMyCalendarMonth): void {
    this.viewChanged = true;

    const {year, monthNbr} = this.visibleMonth;
    const monthChange: boolean = cell.nbr !== monthNbr;
    this.visibleMonth = {monthTxt: this.opts.monthLabels[cell.nbr], monthNbr: cell.nbr, year};
    this.selectedMonth.year = year;
    this.generateCalendar(cell.nbr, year, monthChange);
    this.selectMonth = false;
    this.focusToSelector();
  }

  onMonthCellKeyDown(event: any) {
    // Move focus by arrow keys
    const {sourceRow, sourceCol} = this.getSourceRowAndColumnFromEvent(event);
    const {moveFocus, targetRow, targetCol, direction} = this.getTargetFocusRowAndColumn(event, sourceRow, sourceCol, MONTH_ROW_COUNT, MONTH_COL_COUNT);

    if (moveFocus) {
      this.focusCellElement(M, targetRow, targetCol, direction, MONTH_COL_COUNT);
    }
  }

  onYearViewBtnClicked(): void {
    this.viewChanged = true;
    this.yearViewBtnClicked();
  }

  yearViewBtnClicked(): void {
    this.selectYear = !this.selectYear;
    this.selectMonth = false;

    this.cdr.detectChanges();
    if (this.selectYear) {
      this.generateYears(this.visibleMonth.year);
    }
    else {
      const {year, monthNbr} = this.selectedMonth;
      this.visibleMonth = {monthTxt: this.opts.monthLabels[monthNbr], monthNbr, year};
      this.generateCalendar(monthNbr, year, true);
    }
  }

  onYearCellClicked(cell: IMyCalendarYear): void {
    this.viewChanged = true;

    const {year, monthNbr, monthTxt} = this.visibleMonth;
    const yc: boolean = cell.year !== year;
    this.visibleMonth = {monthTxt, monthNbr, year: cell.year};
    this.selectedMonth.year = cell.year;
    this.generateCalendar(monthNbr, cell.year, yc);
    this.selectYear = false;
    this.focusToSelector();
  }

  onYearCellKeyDown(event: any) {
    // Move focus by arrow keys
    const {sourceRow, sourceCol} = this.getSourceRowAndColumnFromEvent(event);
    const {moveFocus, targetRow, targetCol, direction} = this.getTargetFocusRowAndColumn(event, sourceRow, sourceCol, YEAR_ROW_COUNT, YEAR_COL_COUNT);

    if (moveFocus) {
      this.focusCellElement(Y, targetRow, targetCol, direction, YEAR_COL_COUNT);
    }
  }

  generateMonths(): void {
    const today: IMyDate = this.utilService.getToday();
    this.months.length = 0;

    const {year, monthNbr} = this.visibleMonth;
    const {rtl, monthLabels} = this.opts;

    let row: number = 0;
    for (let i = 1; i <= 12; i += 3) {
      const rowData: Array<IMyCalendarMonth> = [];
      let col = rtl ? 2 : 0;

      for (let j = i; j < i + 3; j++) {
        const disabled: boolean = this.utilService.isDisabledMonth(year, j, this.opts);
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

  generateYears(inputYear: number): void {
    const {minYear, maxYear, rtl} = this.opts;

    let y: number = inputYear - 12;
    if (inputYear < minYear) {
      y = minYear;
    }

    if (inputYear + 25 > maxYear) {
      y = maxYear - 24;
    }

    const {year} = this.visibleMonth;

    this.years.length = 0;
    const today: IMyDate = this.utilService.getToday();

    let row: number = 0;
    for (let i = y; i < y + 25; i += 5) {
      const rowData: Array<IMyCalendarYear> = [];
      let col: number = rtl ? 4 : 0;

      for (let j = i; j < i + 5; j++) {
        const disabled: boolean = this.utilService.isDisabledYear(j, this.opts);
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

    const beginYear: number = this.getYearValueByRowAndCol(0, 0);
    const endYear: number = beginYear + 24;
    this.yearsDuration = (!rtl ? beginYear : endYear) + YEAR_SEPARATOR + (!rtl ? endYear : beginYear);

    this.setYearViewHeaderBtnDisabledState(beginYear, endYear);
  }

  onTodayFooterClicked(): void {
    const date = this.utilService.getToday();
    this.selectDate(date);
  }

  getYearValueByRowAndCol(row: number, col: number): number {
    const {years} = this;
    if (!years || years.length === 0) {
      const {year} = this.utilService.getToday();
      return year;
    }
    return years[row][col].year;
  }

  setCalendarVisibleMonth(): void {
    // Sets visible month of calendar
    const {year, monthNbr} = this.selectedMonth;
    this.visibleMonth = {monthTxt: this.opts.monthLabels[monthNbr], monthNbr, year};

    // Create current month
    this.generateCalendar(monthNbr, year, true);
  }

  onViewActivated(event: any): void {
    this.viewActivated(event);
  }

  onPrevNavigateBtnClicked(): void {
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

  onNextNavigateBtnClicked(): void {
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

  setDateViewMonth(isNext: boolean): void {
    let change: number = isNext ? 1 : -1;

    const {year, monthNbr} = this.visibleMonth;

    const d: Date = this.utilService.getJsDate(year, monthNbr, 1);
    d.setMonth(d.getMonth() + change);

    const y: number = d.getFullYear();
    const m: number = d.getMonth() + 1;

    this.visibleMonth = {monthTxt: this.opts.monthLabels[m], monthNbr: m, year: y};
    this.generateCalendar(m, y, true);
  }

  onCloseSelector(event: any): void {
    const keyCode: number = this.utilService.getKeyCodeFromEvent(event);
    if (keyCode === KeyCode.esc) {
      this.closedByEsc();
    }
  }

  onDayCellClicked(cell: IMyCalendarDay): void {
    // Cell clicked on the calendar
    this.selectDate(cell.dateObj);
    this.resetMonthYearSelect();
  }

  onDayCellKeyDown(event: any) {
    // Move focus by arrow keys
    const {sourceRow, sourceCol} = this.getSourceRowAndColumnFromEvent(event);
    const {moveFocus, targetRow, targetCol, direction} = this.getTargetFocusRowAndColumn(event, sourceRow, sourceCol, DATE_ROW_COUNT, DATE_COL_COUNT);
    if (moveFocus) {
      this.focusCellElement(D, targetRow, targetCol, direction, DATE_COL_COUNT);
    }
  }

  getSourceRowAndColumnFromEvent(event: any): any {
    let sourceRow: number = 0;
    let sourceCol: number = 0;
    if (event.target && event.target.id) {
      // value of id is for example: m_0_1 (first number = row, second number = column)
      const arr: Array<string> = event.target.id.split(UNDER_LINE);
      sourceRow = Number(arr[1]);
      sourceCol = Number(arr[2]);
    }
    return {sourceRow, sourceCol};
  }

  getTargetFocusRowAndColumn(event: any, row: number, col: number, rowCount: number, colCount: number): any {
    let moveFocus: boolean = true;
    let targetRow: number = row;
    let targetCol: number = col;
    let direction: boolean = false;

    const keyCode: number = this.utilService.getKeyCodeFromEvent(event);
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
    return {moveFocus, targetRow, targetCol, direction};
  }

  focusCellElement(type: string, row: number, col: number, direction: boolean, colCount: number): void {
    const className: string = type + UNDER_LINE + row + UNDER_LINE + col;
    let elem: any = this.selectorEl.nativeElement.querySelector(DOT + className);

    if (elem.getAttribute(TABINDEX) !== ZERO_STR) {
      // if the selected element is disabled move a focus to next/previous enabled element
      let tdList: any = this.getCalendarElements();
      const idx: number = row * (colCount + 1) + col;

      let enabledElem: any = null;
      if (direction) {
        // find next enabled
        enabledElem = tdList.slice(idx).find((td: any) => td.getAttribute(TABINDEX) === ZERO_STR);
      }
      else {
        // find previous enabled
        enabledElem = tdList.slice(0, idx).reverse().find((td: any) => td.getAttribute(TABINDEX) === ZERO_STR);
      }

      elem = enabledElem ? enabledElem : this.selectorEl.nativeElement;
    }
    else {
      elem.focus();
    }
  }

  focusToSelector(): void {
    this.selectorEl.nativeElement.focus();
  }

  getCalendarElements(): any {
    return Array.from(this.selectorEl.nativeElement.querySelectorAll(TD_SELECTOR));
  }

  selectDate(date: IMyDate): void {
    const {dateRange, dateFormat, monthLabels, dateRangeDatesDelimiter, closeSelectorOnDateSelect} = this.opts;

    if (dateRange) {
      // Date range
      const isBeginDateInitialized: boolean = this.utilService.isInitializedDate(this.selectedDateRange.begin);
      const isEndDateInitialized: boolean = this.utilService.isInitializedDate(this.selectedDateRange.end);
      if (isBeginDateInitialized && isEndDateInitialized) {
        // both already selected - set begin date and reset end date
        this.selectedDateRange.begin = date;
        this.selectedDateRange.end = this.utilService.resetDate();
        this.rangeDateSelection({
          isBegin: true,
          date,
          jsDate: this.utilService.myDateToJsDate(date),
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
          jsDate: this.utilService.myDateToJsDate(date),
          dateFormat: dateFormat,
          formatted: this.utilService.formatDate(date, dateFormat, monthLabels),
          epoc: this.utilService.getEpocTime(date)
        });

      }
      else {
        // second selection
        const firstDateEarlier: boolean = this.utilService.isDateEarlier(date, this.selectedDateRange.begin);
        if (firstDateEarlier) {
          this.selectedDateRange.begin = date;
          this.rangeDateSelection({
            isBegin: true,
            date,
            jsDate: this.utilService.myDateToJsDate(date),
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
            jsDate: this.utilService.myDateToJsDate(date),
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

  monthStartIdx(y: number, m: number): number {
    // Month start index
    const d: Date = new Date();
    d.setDate(1);
    d.setMonth(m - 1);
    d.setFullYear(y);
    const idx = d.getDay() + this.sundayIdx();
    return idx >= 7 ? idx - 7 : idx;
  }

  isCurrDay(d: number, m: number, y: number, today: IMyDate): boolean {
    // Check is a given date the today
    return d === today.day && m === today.month && y === today.year;
  }

  getDayNumber(date: IMyDate): number {
    // Get day number: su=0, mo=1, tu=2, we=3 ...
    const {year, month, day} = date;
    const d: Date = this.utilService.getJsDate(year, month, day);
    return d.getDay();
  }

  getWeekday(date: IMyDate): string {
    // Get weekday: su, mo, tu, we ...
    return this.weekDayOpts[this.getDayNumber(date)];
  }

  sundayIdx(): number {
    // Index of Sunday day
    return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
  }

  generateCalendar(m: number, y: number, notifyChange: boolean): void {
    this.dates.length = 0;
    const today: IMyDate = this.utilService.getToday();
    const monthStart: number = this.monthStartIdx(y, m);
    const dInThisM: number = this.utilService.datesInMonth(m, y);
    const dInPrevM: number = this.utilService.datesInPrevMonth(m, y);

    let dayNbr: number = 1;
    let month: number = m;
    let cmo: number = MonthId.prev;
    const {rtl, showWeekNumbers, firstDayOfWeek} = this.opts;
    for (let i = 1; i < 7; i++) {
      let col: number = rtl ? 6 : 0;
      const week: Array<IMyCalendarDay> = [];
      if (i === 1) {
        // First week
        const pm = dInPrevM - monthStart + 1;
        // Previous month
        for (let j = pm; j <= dInPrevM; j++) {
          const date: IMyDate = {year: m === 1 ? y - 1 : y, month: m === 1 ? 12 : m - 1, day: j};
          week.push({
            dateObj: date,
            cmo,
            currDay: this.isCurrDay(j, month - 1, y, today),
            disabledDate: this.utilService.isDisabledDate(date, this.opts),
            markedDate: this.utilService.isMarkedDate(date, this.opts),
            highlight: this.utilService.isHighlightedDate(date, this.opts),
            row: i - 1,
            col: rtl ? col-- : col++
          }); 
        }

        cmo = MonthId.curr;
        // Current month
        const daysLeft: number = 7 - week.length;
        for (let j = 0; j < daysLeft; j++) {
          const date: IMyDate = {year: y, month: m, day: dayNbr};
          week.push({
            dateObj: date,
            cmo,
            currDay: this.isCurrDay(dayNbr, m, y, today),
            disabledDate: this.utilService.isDisabledDate(date, this.opts),
            markedDate: this.utilService.isMarkedDate(date, this.opts),
            highlight: this.utilService.isHighlightedDate(date, this.opts),
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
          const date: IMyDate = {year: cmo === MonthId.next && m === 12 ? y + 1 : y, month: cmo === MonthId.curr ? m : cmo === MonthId.next && m < 12 ? m + 1 : 1, day: dayNbr};
          week.push({
            dateObj: date,
            cmo,
            currDay: this.isCurrDay(dayNbr, month, y, today),
            disabledDate: this.utilService.isDisabledDate(date, this.opts),
            markedDate: this.utilService.isMarkedDate(date, this.opts),
            highlight: this.utilService.isHighlightedDate(date, this.opts),
            row: i - 1,
            col: rtl ? col-- : col++
          });
          dayNbr++;
        }
      }
      const weekNbr: number = showWeekNumbers  && firstDayOfWeek === MO ? this.utilService.getWeekNumber(week[0].dateObj) : 0;
      this.dates.push({week, weekNbr});
    }

    this.setDateViewHeaderBtnDisabledState(m, y);

    if (notifyChange) {
      // Notify parent
      this.calendarViewChanged({year: y, month: m, first: {number: 1, weekday: this.getWeekday({year: y, month: m, day: 1})}, last: {number: dInThisM, weekday: this.getWeekday({year: y, month: m, day: dInThisM})}});
    }
  }

  setDateViewHeaderBtnDisabledState(m: number, y: number): void {
    let dpm: boolean = false;
    let dnm: boolean = false;

    const {disableHeaderButtons, disableUntil, disableSince, enableDates, minYear, maxYear, rtl} = this.opts;

    if (disableHeaderButtons) {
      const duDate: IMyDate = {year: m === 1 ? y - 1 : y, month: m === 1 ? 12 : m - 1, day: this.utilService.datesInMonth(m === 1 ? 12 : m - 1, m === 1 ? y - 1 : y)};
      const dsDate: IMyDate = {year: m === 12 ? y + 1 : y, month: m === 12 ? 1 : m + 1, day: 1};
      
      dpm = this.utilService.isDisabledByDisableUntil(duDate, disableUntil) 
        && !this.utilService.isPastDatesEnabled(duDate, enableDates);
      dnm = this.utilService.isDisabledByDisableSince(dsDate, disableSince)
        && !this.utilService.isFutureDatesEnabled(dsDate, enableDates);
    }

    this.prevViewDisabled = m === 1 && y === minYear || dpm;
    this.nextViewDisabled = m === 12 && y === maxYear || dnm;

    if (rtl) {
      this.swapHeaderBtnDisabled();
    }
  }

  setMonthViewHeaderBtnDisabledState(y: number): void {
    let dpm: boolean = false;
    let dnm: boolean = false;

    const {disableHeaderButtons, disableUntil, disableSince, enableDates, minYear, maxYear, rtl} = this.opts;

    if (disableHeaderButtons) {
      const duDate: IMyDate = {year: y - 1, month: 12, day: 31};
      const dsDate: IMyDate = {year: y + 1, month: 1, day: 1};

      dpm = this.utilService.isDisabledByDisableUntil(duDate, disableUntil)
        && !this.utilService.isPastDatesEnabled(duDate, enableDates);
      dnm = this.utilService.isDisabledByDisableSince(dsDate, disableSince)
        && !this.utilService.isFutureDatesEnabled(dsDate, enableDates);
    }

    this.prevViewDisabled = y === minYear || dpm;
    this.nextViewDisabled = y === maxYear || dnm;

    if (rtl) {
      this.swapHeaderBtnDisabled();
    }
  }

  setYearViewHeaderBtnDisabledState(yp: number, yn: number): void {
    let dpy: boolean = false;
    let dny: boolean = false;

    const {disableHeaderButtons, disableUntil, disableSince, enableDates, minYear, maxYear, rtl} = this.opts;

    if (disableHeaderButtons) {
      const duDate: IMyDate = {year: yp - 1, month: 12, day: 31};
      const dsDate: IMyDate = {year: yn + 1, month: 1, day: 1};

      dpy = this.utilService.isDisabledByDisableUntil(duDate, disableUntil)
        && !this.utilService.isPastDatesEnabled(duDate, enableDates);
      dny = this.utilService.isDisabledByDisableSince(dsDate, disableSince)
        && !this.utilService.isFutureDatesEnabled(dsDate, enableDates);
    }
    this.prevViewDisabled = yp <= minYear || dpy;
    this.nextViewDisabled = yn >= maxYear || dny;

    if (rtl) {
      this.swapHeaderBtnDisabled();
    }
  }

  swapHeaderBtnDisabled(): void {
    [this.prevViewDisabled, this.nextViewDisabled] = [this.nextViewDisabled, this.prevViewDisabled];
  }
}
