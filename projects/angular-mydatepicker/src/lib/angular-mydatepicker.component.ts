import {Component, ElementRef, ViewEncapsulation, ViewChild, Renderer2, ChangeDetectorRef, OnDestroy} from "@angular/core";
import {IMyDate, IMyDateRange, IMyMonth, IMyCalendarDay, IMyCalendarMonth, IMyCalendarYear, IMyWeek, IMyOptions, IMySelectorPosition} from "./interfaces";
import {UtilService} from "./services";
import {KeyCode, MonthId} from "./enums";
import {DOT, UNDER_LINE, D, M, Y, DATE_ROW_COUNT, DATE_COL_COUNT, MONTH_ROW_COUNT, MONTH_COL_COUNT, YEAR_ROW_COUNT, YEAR_COL_COUNT, SU, MO, TU, WE, TH, FR, SA, EMPTY_STR, CLICK} from "./constants";

@Component({
  selector: "angular-mydatepicker-component",
  templateUrl: './template/angular-mydatepicker.component.html',
  styleUrls: ['./css/angular-mydatepicker.component.css'],
  providers: [UtilService],
  encapsulation: ViewEncapsulation.None
})
export class AngularMyDatePicker implements OnDestroy {
  @ViewChild("selectorEl") selectorEl: any;
  opts: IMyOptions;
  visibleMonth: IMyMonth = {monthTxt: EMPTY_STR, monthNbr: 0, year: 0};
  selectedMonth: IMyMonth = {monthTxt: EMPTY_STR, monthNbr: 0, year: 0};
  selectedDate: IMyDate = {year: 0, month: 0, day: 0};
  selectedDateRange: IMyDateRange = {begin: {year: 0, month: 0, day: 0}, end: {year: 0, month: 0, day: 0}};
  weekDays: Array<string> = [];
  dates: Array<IMyWeek> = [];
  months: Array<Array<IMyCalendarMonth>> = [];
  years: Array<Array<IMyCalendarYear>> = [];
  dayIdx: number = 0;
  weekDayOpts: Array<string> = [SU, MO, TU, WE, TH, FR, SA];

  selectMonth: boolean = false;
  selectYear: boolean = false;

  dateChanged: Function;
  calendarViewChanged: Function;
  rangeDateSelection: Function;
  closedByEsc: Function;
  selectorPos: IMySelectorPosition = null;

  prevMonthDisabled: boolean = false;
  nextMonthDisabled: boolean = false;
  prevYearsDisabled: boolean = false;
  nextYearsDisabled: boolean = false;

  prevMonthId: number = MonthId.prev;
  currMonthId: number = MonthId.curr;
  nextMonthId: number = MonthId.next;

  clickListener: Function;

  constructor(public elem: ElementRef, private renderer: Renderer2, private cdr: ChangeDetectorRef, private utilService: UtilService) {
    this.clickListener = renderer.listen(elem.nativeElement, CLICK, (event: MouseEvent) => {
      if ((this.opts.monthSelector || this.opts.yearSelector) && event.target) {
        this.resetMonthYearSelect();
      }
    });
  }

  ngOnDestroy(): void {
    this.clickListener();
  }

  initialize(opts: IMyOptions, defaultMonth: string, selectorPos: IMySelectorPosition, inputValue: string, dc: Function, cvc: Function, rds: Function, cbe: Function): void {
    this.opts = opts;
    this.selectorPos = selectorPos;
    this.weekDays.length = 0;

    this.dayIdx = this.weekDayOpts.indexOf(this.opts.firstDayOfWeek);
    if (this.dayIdx !== -1) {
      let idx: number = this.dayIdx;
      for (let i = 0; i < this.weekDayOpts.length; i++) {
        this.weekDays.push(this.opts.dayLabels[this.weekDayOpts[idx]]);
        idx = this.weekDayOpts[idx] === SA ? 0 : idx + 1;
      }
    }

    if (!this.opts.dateRange) {
      // Single date mode
      let date: IMyDate = this.utilService.isDateValid(inputValue, this.opts);

      if (this.utilService.isInitializedDate(date)) {
        this.selectedDate = date;
      }
      else {
        if (defaultMonth && defaultMonth.length) {
          this.selectedMonth = this.utilService.parseDefaultMonth(defaultMonth);
        }
      }
    }
    else if (inputValue && inputValue.length) {
      // Date range mode
      let {begin, end} = this.utilService.isDateValidDateRange(inputValue, this.opts);

      if (this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end)) {
        this.selectedDateRange = {begin, end};
        this.selectedMonth = {monthTxt: EMPTY_STR, monthNbr: begin.month, year: begin.year};
      }
    }

    this.dateChanged = dc;
    this.calendarViewChanged = cvc;
    this.rangeDateSelection = rds;
    this.closedByEsc = cbe;

    this.setVisibleMonth();
  }

  setCalendarView(date: IMyDate): void {
    this.selectedDate = date;
    this.setVisibleMonth();
  }

  resetMonthYearSelect(): void {
    this.selectMonth = false;
    this.selectYear = false;
  }

  onSelectMonthClicked(event: any): void {
    event.stopPropagation();
    this.selectMonth = !this.selectMonth;
    this.selectYear = false;
    this.cdr.detectChanges();
    if (this.selectMonth) {
      let today: IMyDate = this.getToday();
      this.months.length = 0;
      for (let i = 1; i <= 12; i += 3) {
        let row: Array<IMyCalendarMonth> = [];
        for (let j = i; j < i + 3; j++) {
          let disabled: boolean = this.utilService.isMonthDisabledByDisableUntil({year: this.visibleMonth.year, month: j, day: this.daysInMonth(j, this.visibleMonth.year)}, this.opts.disableUntil)
            || this.utilService.isMonthDisabledByDisableSince({year: this.visibleMonth.year, month: j, day: 1}, this.opts.disableSince);
          row.push({nbr: j, name: this.opts.monthLabels[j], currMonth: j === today.month && this.visibleMonth.year === today.year, selected: j === this.visibleMonth.monthNbr, disabled: disabled});
        }
        this.months.push(row);
      }
    }
  }

  onMonthCellClicked(event: any, cell: IMyCalendarMonth): void {
    event.stopPropagation();
    if (cell.disabled) {
      return;
    }

    let mc: boolean = cell.nbr !== this.visibleMonth.monthNbr;
    this.visibleMonth = {monthTxt: this.opts.monthLabels[cell.nbr], monthNbr: cell.nbr, year: this.visibleMonth.year};
    this.generateCalendar(cell.nbr, this.visibleMonth.year, mc);
    this.selectMonth = false;
    this.selectorEl.nativeElement.focus();
  }

  onMonthCellKeyDown(event: KeyboardEvent, cell: IMyCalendarMonth) {
    event.preventDefault();
    let keyCode: number = this.utilService.getKeyCodeFromEvent(event);
    if (keyCode === KeyCode.enter || keyCode === KeyCode.space) {
      this.onMonthCellClicked(event, cell);
    }

    if (this.opts.moveFocusByArrowKeys) {
      // Make possible to move focus by arrow keys
      let {sourceRow, sourceCol} = this.getSourceRowAndColumnFromEvent(event);
      let {moveFocus, targetRow, targetCol} = this.getTargetFocusRowAndColumn(event, sourceRow, sourceCol, MONTH_ROW_COUNT, MONTH_COL_COUNT);

      if (moveFocus) {
        this.focusCellElement(M, targetRow, targetCol);
      }
    }
  }

  onSelectYearClicked(event: any): void {
    event.stopPropagation();

    this.cdr.detectChanges();
    if (!this.selectYear) {
      this.generateYears(this.visibleMonth.year);
    }
    this.selectYear = !this.selectYear;
    this.selectMonth = false;
  }

  onYearCellClicked(event: any, cell: IMyCalendarYear): void {
    event.stopPropagation();
    if (cell.disabled) {
      return;
    }

    let yc: boolean = cell.year !== this.visibleMonth.year;
    this.visibleMonth = {monthTxt: this.visibleMonth.monthTxt, monthNbr: this.visibleMonth.monthNbr, year: cell.year};
    this.generateCalendar(this.visibleMonth.monthNbr, cell.year, yc);
    this.selectYear = false;
    this.selectorEl.nativeElement.focus();
  }

  onYearCellKeyDown(event: KeyboardEvent, cell: IMyCalendarYear) {
    event.preventDefault();
    let keyCode: number = this.utilService.getKeyCodeFromEvent(event);
    if (keyCode === KeyCode.enter || keyCode === KeyCode.space) {
      this.onYearCellClicked(event, cell);
    }

    if (this.opts.moveFocusByArrowKeys) {
      // Make possible to move focus by arrow keys
      let {sourceRow, sourceCol} = this.getSourceRowAndColumnFromEvent(event);
      let {moveFocus, targetRow, targetCol} = this.getTargetFocusRowAndColumn(event, sourceRow, sourceCol, YEAR_ROW_COUNT, YEAR_COL_COUNT);

      if (moveFocus) {
        this.focusCellElement(Y, targetRow, targetCol);
      }
    }
  }

  onPrevYears(event: any, year: number): void {
    event.stopPropagation();
    this.generateYears(year - 25);
  }

  onNextYears(event: any, year: number): void {
    event.stopPropagation();
    this.generateYears(year + 25);
  }

  generateYears(year: number): void {
    let y: number = year - 12;
    if (year < this.opts.minYear) {
      y = this.opts.minYear;
    }

    if (year + 25 > this.opts.maxYear) {
      y = this.opts.maxYear - 24;
    }

    this.years.length = 0;
    let today: IMyDate = this.getToday();

    for(let i = y; i < y + 25; i += 5) {
      let row: Array<IMyCalendarYear> = [];
      for(let j = i; j < i + 5; j++) {
        let disabled: boolean = this.utilService.isMonthDisabledByDisableUntil({
            year: j,
            month: this.visibleMonth.monthNbr,
            day: this.daysInMonth(this.visibleMonth.monthNbr, j)
          },
          this.opts.disableUntil) || this.utilService.isMonthDisabledByDisableSince({year: j, month: this.visibleMonth.monthNbr, day: 1}, this.opts.disableSince);

        let minMax: boolean = j < this.opts.minYear || j > this.opts.maxYear;
        row.push({year: j, currYear: j === today.year, selected: j === this.visibleMonth.year, disabled: disabled || minMax});
      }
      this.years.push(row);
    }
    this.prevYearsDisabled = this.years[0][0].year <= this.opts.minYear || this.utilService.isMonthDisabledByDisableUntil({year: this.years[0][0].year - 1, month: this.visibleMonth.monthNbr, day: this.daysInMonth(this.visibleMonth.monthNbr, this.years[0][0].year - 1)}, this.opts.disableUntil);
    this.nextYearsDisabled = this.years[4][4].year >= this.opts.maxYear || this.utilService.isMonthDisabledByDisableSince({year: this.years[4][4].year + 1, month: this.visibleMonth.monthNbr, day: 1}, this.opts.disableSince);
  }

  setVisibleMonth(): void {
    // Sets visible month of calendar
    let y: number = 0, m: number = 0;
    if (this.selectedDate.year === 0 && this.selectedDate.month === 0 && this.selectedDate.day === 0) {
      if (this.selectedMonth.year === 0 && this.selectedMonth.monthNbr === 0) {
        let today: IMyDate = this.getToday();
        y = today.year;
        m = today.month;
      } else {
        y = this.selectedMonth.year;
        m = this.selectedMonth.monthNbr;
      }
    }
    else {
      y = this.selectedDate.year;
      m = this.selectedDate.month;
    }
    this.visibleMonth = {monthTxt: this.opts.monthLabels[m], monthNbr: m, year: y};

    // Create current month
    this.generateCalendar(m, y, true);
  }

  onPrevMonth(): void {
    // Previous month from calendar
    let d: Date = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
    d.setMonth(d.getMonth() - 1);

    let y: number = d.getFullYear();
    let m: number = d.getMonth() + 1;

    this.visibleMonth = {monthTxt: this.opts.monthLabels[m], monthNbr: m, year: y};
    this.generateCalendar(m, y, true);
  }

  onNextMonth(): void {
    // Next month from calendar
    let d: Date = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
    d.setMonth(d.getMonth() + 1);

    let y: number = d.getFullYear();
    let m: number = d.getMonth() + 1;

    this.visibleMonth = {monthTxt: this.opts.monthLabels[m], monthNbr: m, year: y};
    this.generateCalendar(m, y, true);
  }

  onCloseSelector(event: any): void {
    let keyCode: number = this.utilService.getKeyCodeFromEvent(event);
    if (keyCode === KeyCode.esc) {
      this.closedByEsc();
    }
  }

  onDateCellClicked(event: any, cell: any): void {
    event.stopPropagation();
    if (cell.disabled) {
      return;
    }

    // Cell clicked on the calendar
    this.selectDate(cell.dateObj);
    this.resetMonthYearSelect();
  }

  onDateCellKeyDown(event: KeyboardEvent, cell: any) {
    // Cell keyboard handling
    event.preventDefault();
    let keyCode: number = this.utilService.getKeyCodeFromEvent(event);
    if (keyCode === KeyCode.enter || keyCode === KeyCode.space) {
      this.onDateCellClicked(event, cell);
    }

    if (this.opts.moveFocusByArrowKeys) {
      // Make possible to move focus by arrow keys
      let {sourceRow, sourceCol} = this.getSourceRowAndColumnFromEvent(event);
      let {moveFocus, targetRow, targetCol} = this.getTargetFocusRowAndColumn(event, sourceRow, sourceCol, DATE_ROW_COUNT, DATE_COL_COUNT);

      if (moveFocus) {
        this.focusCellElement(D, targetRow, targetCol);
      }
    }
  }

  onDateCellMouseEnter(cell: any): void {
    if (this.utilService.isInitializedDate(this.selectedDateRange.begin) && !this.utilService.isInitializedDate(this.selectedDateRange.end)) {
      for (let w of this.dates) {
        for (let day of w.week) {
          day.range = this.utilService.isDateSameOrEarlier(this.selectedDateRange.begin, day.dateObj) && this.utilService.isDateSameOrEarlier(day.dateObj, cell.dateObj);
        }
      }
    }
  }

  onDateCellMouseLeave(): void {
    for (let w of this.dates) {
      for (let day of w.week) {
        day.range = false;
      }
    }
  }

  getSourceRowAndColumnFromEvent(event: any): any {
    let sourceRow: number = 0;
    let sourceCol: number = 0;
    if(event.target && event.target.id) {
      // value of id is for example: m_0_1 (first number = row, second number = column)
      let arr: Array<string> = event.target.id.split(UNDER_LINE);
      sourceRow = Number(arr[1]);
      sourceCol = Number(arr[2]);
    }
    return {sourceRow, sourceCol};
  }

  getTargetFocusRowAndColumn(event: any, row: number, col: number, rowCount: number, colCount: number): any {
    let moveFocus: boolean = false;
    let targetRow: number = row;
    let targetCol: number = col;

    let keyCode: number = this.utilService.getKeyCodeFromEvent(event);
    if (keyCode === KeyCode.upArrow && row > 0) {
      moveFocus = true;
      targetRow--;
    }
    else if (keyCode === KeyCode.downArrow && row < rowCount) {
      moveFocus = true;
      targetRow++;
    }
    else if (keyCode === KeyCode.leftArrow && col > 0) {
      moveFocus = true;
      targetCol--;
    }
    else if (keyCode === KeyCode.rightArrow && col < colCount) {
      moveFocus = true;
      targetCol++;
    }
    return {moveFocus, targetRow, targetCol};
  }

  focusCellElement(type: string, row: number, col: number): void {
    let elem: any = this.selectorEl.nativeElement.querySelector(DOT + type + UNDER_LINE + row + UNDER_LINE + col);
    if (elem) {
      elem.focus();
    }
  }

  selectDate(date: IMyDate): void {
    if (this.opts.dateRange) {
      // Date range
      let isBeginDateInitialized: boolean = this.utilService.isInitializedDate(this.selectedDateRange.begin);
      let isEndDateInitialized: boolean = this.utilService.isInitializedDate(this.selectedDateRange.end);
      if (isBeginDateInitialized && isEndDateInitialized) {
        // both already selected - set begin date and reset end date
        this.selectedDateRange.begin = date;
        this.selectedDateRange.end = this.utilService.resetDate();
        this.rangeDateSelection({
          isBegin: true,
          date: date,
          jsDate: this.utilService.getDate(date),
          dateFormat: this.opts.dateFormat,
          formatted: this.utilService.formatDate(date, this.opts.dateFormat, this.opts.monthLabels),
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
          dateFormat: this.opts.dateFormat,
          formatted: this.utilService.formatDate(date, this.opts.dateFormat, this.opts.monthLabels),
          epoc: this.utilService.getEpocTime(date)
        });

      }
      else {
        // second selection
        let firstDateEarlier: boolean = this.utilService.isDateEarlier(date, this.selectedDateRange.begin);
        if (firstDateEarlier) {
          this.selectedDateRange.begin = date;
          this.rangeDateSelection({
            isBegin: true,
            date: date,
            jsDate: this.utilService.getDate(date),
            dateFormat: this.opts.dateFormat,
            formatted: this.utilService.formatDate(date, this.opts.dateFormat, this.opts.monthLabels),
            epoc: this.utilService.getEpocTime(date)
          });
        }
        else {
          this.selectedDateRange.end = date;
          this.rangeDateSelection({
            isBegin: false,
            date: date,
            jsDate: this.utilService.getDate(date),
            dateFormat: this.opts.dateFormat,
            formatted: this.utilService.formatDate(date, this.opts.dateFormat, this.opts.monthLabels),
            epoc: this.utilService.getEpocTime(date)
          });

          this.dateChanged(this.utilService.getDateModel(null, this.selectedDateRange, this.opts.dateFormat, this.opts.monthLabels, this.opts.dateRangeDatesDelimiter), this.opts.closeSelectorOnDateSelect);
        }
      }
    }
    else {
      // Single date
      this.selectedDate = date;
      this.dateChanged(this.utilService.getDateModel(this.selectedDate, null, this.opts.dateFormat, this.opts.monthLabels, this.opts.dateRangeDatesDelimiter), this.opts.closeSelectorOnDateSelect);
    }
  }

  isDateInRange(date: IMyDate, dateRange: IMyDateRange): boolean {
    return this.utilService.isDateInRange(date,dateRange);
  }

  isDateSame(firstDate: IMyDate, secondDate: IMyDate): boolean {
    return this.utilService.isDateSame(firstDate, secondDate);
  }

  isDateRangeBeginOrEndSame(dateRange: IMyDateRange, date: IMyDate): boolean {
    return this.utilService.isDateRangeBeginOrEndSame(dateRange, date);
  }

  monthStartIdx(y: number, m: number): number {
    // Month start index
    let d: Date = new Date();
    d.setDate(1);
    d.setMonth(m - 1);
    d.setFullYear(y);
    let idx = d.getDay() + this.sundayIdx();
    return idx >= 7 ? idx - 7 : idx;
  }

  daysInMonth(m: number, y: number): number {
    // Return number of days of current month
    return new Date(y, m, 0).getDate();
  }

  daysInPrevMonth(m: number, y: number): number {
    // Return number of days of the previous month
    let d: Date = this.getDate(y, m, 1);
    d.setMonth(d.getMonth() - 1);
    return this.daysInMonth(d.getMonth() + 1, d.getFullYear());
  }

  isCurrDay(d: number, m: number, y: number, cmo: number, today: IMyDate): boolean {
    // Check is a given date the today
    return d === today.day && m === today.month && y === today.year && cmo === this.currMonthId;
  }

  getToday(): IMyDate {
    let date: Date = new Date();
    return {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()};
  }

  getDayNumber(date: IMyDate): number {
    // Get day number: su=0, mo=1, tu=2, we=3 ...
    let d: Date = this.getDate(date.year, date.month, date.day);
    return d.getDay();
  }

  getWeekday(date: IMyDate): string {
    // Get weekday: su, mo, tu, we ...
    return this.weekDayOpts[this.getDayNumber(date)];
  }

  getDate(year: number, month: number, day: number): Date {
    // Creates a date object from given year, month and day
    return new Date(year, month - 1, day, 0, 0, 0, 0);
  }

  sundayIdx(): number {
    // Index of Sunday day
    return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
  }

  generateCalendar(m: number, y: number, notifyChange: boolean): void {
    this.dates.length = 0;
    let today: IMyDate = this.getToday();
    let monthStart: number = this.monthStartIdx(y, m);
    let dInThisM: number = this.daysInMonth(m, y);
    let dInPrevM: number = this.daysInPrevMonth(m, y);

    let dayNbr: number = 1;
    let cmo: number = this.prevMonthId;
    for (let i = 1; i < 7; i++) {
      let week: Array<IMyCalendarDay> = [];
      if (i === 1) {
        // First week
        let pm = dInPrevM - monthStart + 1;
        // Previous month
        for (let j = pm; j <= dInPrevM; j++) {
          let date: IMyDate = {year: m === 1 ? y - 1 : y, month: m === 1 ? 12 : m - 1, day: j};
          week.push({dateObj: date,
            cmo: cmo,
            currDay: this.isCurrDay(j, m, y, cmo, today),
            disabled: this.utilService.isDisabledDate(date, this.opts),
            markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends),
            highlight: this.utilService.isHighlightedDate(date, this.opts.sunHighlight, this.opts.satHighlight, this.opts.highlightDates)});
        }

        cmo = this.currMonthId;
        // Current month
        let daysLeft: number = 7 - week.length;
        for (let j = 0; j < daysLeft; j++) {
          let date: IMyDate = {year: y, month: m, day: dayNbr};
          week.push({dateObj: date,
            cmo: cmo,
            currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
            disabled: this.utilService.isDisabledDate(date, this.opts),
            markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends),
            highlight: this.utilService.isHighlightedDate(date, this.opts.sunHighlight, this.opts.satHighlight, this.opts.highlightDates)});
          dayNbr++;
        }
      }
      else {
        // Rest of the weeks
        for (let j = 1; j < 8; j++) {
          if (dayNbr > dInThisM) {
            // Next month
            dayNbr = 1;
            cmo = this.nextMonthId;
          }
          let date: IMyDate = {year: cmo === this.nextMonthId && m === 12 ? y + 1 : y, month: cmo === this.currMonthId ? m : cmo === this.nextMonthId && m < 12 ? m + 1 : 1, day: dayNbr};
          week.push({dateObj: date,
            cmo: cmo,
            currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
            disabled: this.utilService.isDisabledDate(date, this.opts),
            markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends),
            highlight: this.utilService.isHighlightedDate(date, this.opts.sunHighlight, this.opts.satHighlight, this.opts.highlightDates)});
          dayNbr++;
        }
      }
      let weekNbr: number = this.opts.showWeekNumbers  && this.opts.firstDayOfWeek === MO ? this.utilService.getWeekNumber(week[0].dateObj) : 0;
      this.dates.push({week: week, weekNbr: weekNbr});
    }

    this.setHeaderBtnDisabledState(m, y);

    if (notifyChange) {
      // Notify parent
      this.calendarViewChanged({year: y, month: m, first: {number: 1, weekday: this.getWeekday({year: y, month: m, day: 1})}, last: {number: dInThisM, weekday: this.getWeekday({year: y, month: m, day: dInThisM})}});
    }
  }

  setHeaderBtnDisabledState(m: number, y: number): void {
    let dpm: boolean = false;
    let dpy: boolean = false;
    let dnm: boolean = false;
    let dny: boolean = false;
    if (this.opts.disableHeaderButtons) {
      dpm = this.utilService.isMonthDisabledByDisableUntil({year: m === 1 ? y - 1 : y, month: m === 1 ? 12 : m - 1, day: this.daysInMonth(m === 1 ? 12 : m - 1, m === 1 ? y - 1 : y)}, this.opts.disableUntil);
      dpy = this.utilService.isMonthDisabledByDisableUntil({year: y - 1, month: m, day: this.daysInMonth(m, y - 1)}, this.opts.disableUntil);
      dnm = this.utilService.isMonthDisabledByDisableSince({year: m === 12 ? y + 1 : y, month: m === 12 ? 1 : m + 1, day: 1}, this.opts.disableSince);
      dny = this.utilService.isMonthDisabledByDisableSince({year: y + 1, month: m, day: 1}, this.opts.disableSince);
    }
    this.prevMonthDisabled = m === 1 && y === this.opts.minYear || dpm;
    this.nextMonthDisabled = m === 12 && y === this.opts.maxYear || dnm;
  }
}

