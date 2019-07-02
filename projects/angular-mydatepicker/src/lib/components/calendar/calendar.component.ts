import {Component, ElementRef, ViewEncapsulation, ViewChild, Renderer2, ChangeDetectorRef, OnDestroy, HostBinding} from "@angular/core";
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
import {UtilService} from "../../services/angular-mydatepicker.util.service";
import {KeyCode} from "../../enums/key-code.enum";
import {MonthId} from "../../enums/month-id.enum";
import {ResetDateType} from "../../enums/reset-date-type.enum";
import {DefaultView} from "../../enums/default-view.enum";
import {DOT, UNDER_LINE, D, M, Y, DATE_ROW_COUNT, DATE_COL_COUNT, MONTH_ROW_COUNT, MONTH_COL_COUNT, YEAR_ROW_COUNT, YEAR_COL_COUNT, SU, MO, TU, WE, TH, FR, SA, EMPTY_STR, CLICK, STYLE} from "../../constants/constants";

@Component({
  selector: "lib-angular-mydatepicker-calendar",
  templateUrl: './calendar.component.html',
  styleUrls: ['../../css/angular-mydatepicker.style.css'],
  providers: [UtilService],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnDestroy {
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
  dayIdx: number = 0;
  weekDayOpts: Array<string> = [SU, MO, TU, WE, TH, FR, SA];

  selectMonth: boolean = false;
  selectYear: boolean = false;

  dateChanged: (dm: IMyDateModel, close: boolean) => void;
  calendarViewChanged: (cvc: IMyCalendarViewChanged) => void;
  rangeDateSelection: (rds: IMyRangeDateSelection) => void;
  closedByEsc: () => void;
  selectorPos: IMySelectorPosition = null;

  prevViewDisabled: boolean = false;
  nextViewDisabled: boolean = false;

  clickListener: () => void;

  constructor(private elem: ElementRef, private renderer: Renderer2, private cdr: ChangeDetectorRef, private utilService: UtilService) {
    this.clickListener = renderer.listen(elem.nativeElement, CLICK, (event: MouseEvent) => {
      if ((this.opts.monthSelector || this.opts.yearSelector) && event.target) {
        this.resetMonthYearSelect();
      }
    });
  }

  ngOnDestroy(): void {
    this.clickListener();
  }

  initialize(opts: IMyOptions, defaultMonth: string, selectorPos: IMySelectorPosition, inputValue: string, dc: (dm: IMyDateModel, close: boolean) => void, cvc: (cvc: IMyCalendarViewChanged) => void, rds: (rds: IMyRangeDateSelection) => void, cbe: () => void): void {
    this.opts = opts;
    this.selectorPos = selectorPos;
    this.weekDays.length = 0;

    const {defaultView, dateRange, firstDayOfWeek, dayLabels, stylesData} = this.opts;

    if (stylesData.styles.length) {
      const styleElTemp: any = this.renderer.createElement(STYLE);
      this.renderer.appendChild(styleElTemp, this.renderer.createText(stylesData.styles));
      this.renderer.appendChild(this.styleEl.nativeElement, styleElTemp);
    }

    this.dayIdx = this.weekDayOpts.indexOf(firstDayOfWeek);
    if (this.dayIdx !== -1) {
      let idx: number = this.dayIdx;
      for (let i = 0; i < this.weekDayOpts.length; i++) {
        this.weekDays.push(dayLabels[this.weekDayOpts[idx]]);
        idx = this.weekDayOpts[idx] === SA ? 0 : idx + 1;
      }
    }

    const today: IMyDate = this.getToday();
    this.selectedMonth = {monthNbr: today.month, year: today.year};

    if (defaultMonth && defaultMonth.length) {
      this.selectedMonth = this.utilService.parseDefaultMonth(defaultMonth);
    }

    if (!dateRange) {
      // Single date mode
      const date: IMyDate = this.utilService.isDateValid(inputValue, this.opts);

      if (this.utilService.isInitializedDate(date)) {
        this.selectedDate = date;
        this.selectedMonth = {monthNbr: date.month, year: date.year};
      }
    }
    else {
      // Date range mode
      const {begin, end} = this.utilService.isDateValidDateRange(inputValue, this.opts);

      if (this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end)) {
        this.selectedDateRange = {begin, end};
        this.selectedMonth = {monthNbr: begin.month, year: begin.year};
      }
    }

    this.dateChanged = dc;
    this.calendarViewChanged = cvc;
    this.rangeDateSelection = rds;
    this.closedByEsc = cbe;

    this.setCalendarVisibleMonth();

    if (defaultView === DefaultView.Month) {
      this.onMonthViewBtnClicked();
    }
    else if (defaultView === DefaultView.Year) {
      this.onYearViewBtnClicked();
    }
  }

  resetDateValue(value: ResetDateType): void {
    if (value === ResetDateType.singleDate || value === ResetDateType.both) {
      this.selectedDate = this.utilService.resetDate();
    }
    if (value === ResetDateType.dateRange || value === ResetDateType.both) {
      this.selectedDateRange.begin = this.utilService.resetDate();
      this.selectedDateRange.end = this.utilService.resetDate();
    }
  }

  resetMonthYearSelect(): void {
    this.selectMonth = false;
    this.selectYear = false;
  }

  onMonthViewBtnClicked(): void {
    this.selectMonth = !this.selectMonth;
    this.selectYear = false;
    this.cdr.detectChanges();
    if (this.selectMonth) {
      this.generateMonths();
    }
    else {
      this.visibleMonth.year = this.selectedMonth.year;
    }
  }

  onMonthCellClicked(cell: IMyCalendarMonth): void {
    const {year, monthNbr} = this.visibleMonth;

    const mc: boolean = cell.nbr !== monthNbr;
    this.visibleMonth = {monthTxt: this.opts.monthLabels[cell.nbr], monthNbr: cell.nbr, year: year};
    this.selectedMonth.year = this.visibleMonth.year;
    this.generateCalendar(cell.nbr, year, mc);
    this.selectMonth = false;
    this.selectorEl.nativeElement.focus();
  }

  onMonthCellKeyDown(cell: IMyCalendarMonth) {
    // Make possible to move focus by arrow keys
    const {sourceRow, sourceCol} = this.getSourceRowAndColumnFromEvent(event);
    const {moveFocus, targetRow, targetCol} = this.getTargetFocusRowAndColumn(event, sourceRow, sourceCol, MONTH_ROW_COUNT, MONTH_COL_COUNT);

    if (moveFocus) {
      this.focusCellElement(M, targetRow, targetCol);
    }
  }

  onYearViewBtnClicked(): void {
    this.visibleMonth.year = this.selectedMonth.year;

    this.cdr.detectChanges();
    if (!this.selectYear) {
      this.generateYears(this.visibleMonth.year);
    }
    this.selectYear = !this.selectYear;
    this.selectMonth = false;
  }

  onYearCellClicked(cell: IMyCalendarYear): void {
    const {year, monthNbr, monthTxt} = this.visibleMonth;

    const yc: boolean = cell.year !== year;
    this.visibleMonth = {monthTxt: monthTxt, monthNbr: monthNbr, year: cell.year};
    this.selectedMonth.year = this.visibleMonth.year;
    this.generateCalendar(monthNbr, cell.year, yc);
    this.selectYear = false;
    this.selectorEl.nativeElement.focus();
  }

  onYearCellKeyDown(cell: IMyCalendarYear) {
    // Make possible to move focus by arrow keys
    const {sourceRow, sourceCol} = this.getSourceRowAndColumnFromEvent(event);
    const {moveFocus, targetRow, targetCol} = this.getTargetFocusRowAndColumn(event, sourceRow, sourceCol, YEAR_ROW_COUNT, YEAR_COL_COUNT);

    if (moveFocus) {
      this.focusCellElement(Y, targetRow, targetCol);
    }
  }

  generateMonths(): void {
    const today: IMyDate = this.getToday();
    this.months.length = 0;

    const {year, monthNbr} = this.visibleMonth;
    const {disableUntil, disableSince} = this.opts;

    for (let i = 1; i <= 12; i += 3) {
      const row: Array<IMyCalendarMonth> = [];
      for (let j = i; j < i + 3; j++) {
        const disabled: boolean = this.utilService.isMonthDisabledByDisableUntil({year: year, month: j, day: this.daysInMonth(j, year)}, disableUntil)
          || this.utilService.isMonthDisabledByDisableSince({year: year, month: j, day: 1}, disableSince);
        row.push({nbr: j, name: this.opts.monthLabels[j], currMonth: j === today.month && year === today.year, selected: j === monthNbr && year === this.selectedMonth.year, disabled});
      }
      this.months.push(row);
    }

    this.setMonthViewHeaderBtnDisabledState(year);
  }

  generateYears(inputYear: number): void {
    const {minYear, maxYear, disableUntil, disableSince} = this.opts;

    let y: number = inputYear - 12;
    if (inputYear < minYear) {
      y = minYear;
    }

    if (inputYear + 25 > maxYear) {
      y = maxYear - 24;
    }

    const {year, monthNbr} = this.visibleMonth;

    this.years.length = 0;
    const today: IMyDate = this.getToday();

    for (let i = y; i < y + 25; i += 5) {
      const row: Array<IMyCalendarYear> = [];
      for (let j = i; j < i + 5; j++) {
        const disabled: boolean = this.utilService.isMonthDisabledByDisableUntil({
            year: j,
            month: monthNbr,
            day: this.daysInMonth(monthNbr, j)
          }, disableUntil) || this.utilService.isMonthDisabledByDisableSince({year: j, month: monthNbr, day: 1}, disableSince);

        const minMax: boolean = j < minYear || j > maxYear;
        row.push({year: j, currYear: j === today.year, selected: j === year, disabled: disabled || minMax});
      }
      this.years.push(row);
    }

    this.setYearViewHeaderBtnDisabledState(this.years[0][0].year, this.years[4][4].year);
  }

  setCalendarVisibleMonth(): void {
    // Sets visible month of calendar
    const {year, monthNbr} = this.selectedMonth;
    this.visibleMonth = {monthTxt: this.opts.monthLabels[monthNbr], monthNbr: monthNbr, year: year};

    // Create current month
    this.generateCalendar(monthNbr, year, true);
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
      this.generateYears(this.years[2][2].year - 25);
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
      this.generateYears(this.years[2][2].year + 25);
    }
  }

  setDateViewMonth(isNext: boolean): void {
    let change: number = isNext ? 1 : -1;

    const {year, monthNbr} = this.visibleMonth;

    const d: Date = this.getDate(year, monthNbr, 1);
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

  onDayCellKeyDown(cell: IMyCalendarDay) {
    // Make possible to move focus by arrow keys
    const {sourceRow, sourceCol} = this.getSourceRowAndColumnFromEvent(event);
    const {moveFocus, targetRow, targetCol} = this.getTargetFocusRowAndColumn(event, sourceRow, sourceCol, DATE_ROW_COUNT, DATE_COL_COUNT);

    if (moveFocus) {
      this.focusCellElement(D, targetRow, targetCol);
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
    let moveFocus: boolean = false;
    let targetRow: number = row;
    let targetCol: number = col;

    const keyCode: number = this.utilService.getKeyCodeFromEvent(event);
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
    const elem: any = this.selectorEl.nativeElement.querySelector(DOT + type + UNDER_LINE + row + UNDER_LINE + col);
    if (elem) {
      elem.focus();
    }
  }

  selectDate(date: IMyDate): void {
    const {dateFormat, monthLabels, dateRangeDatesDelimiter, closeSelectorOnDateSelect} = this.opts;

    if (this.opts.dateRange) {
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
        const firstDateEarlier: boolean = this.utilService.isDateEarlier(date, this.selectedDateRange.begin);
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

  monthStartIdx(y: number, m: number): number {
    // Month start index
    const d: Date = new Date();
    d.setDate(1);
    d.setMonth(m - 1);
    d.setFullYear(y);
    const idx = d.getDay() + this.sundayIdx();
    return idx >= 7 ? idx - 7 : idx;
  }

  daysInMonth(m: number, y: number): number {
    // Return number of days of current month
    return new Date(y, m, 0).getDate();
  }

  daysInPrevMonth(m: number, y: number): number {
    // Return number of days of the previous month
    const d: Date = this.getDate(y, m, 1);
    d.setMonth(d.getMonth() - 1);
    return this.daysInMonth(d.getMonth() + 1, d.getFullYear());
  }

  isCurrDay(d: number, m: number, y: number, cmo: number, today: IMyDate): boolean {
    // Check is a given date the today
    return d === today.day && m === today.month && y === today.year && cmo === MonthId.curr;
  }

  getToday(): IMyDate {
    const date: Date = new Date();
    return {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()};
  }

  getDayNumber(date: IMyDate): number {
    // Get day number: su=0, mo=1, tu=2, we=3 ...
    const d: Date = this.getDate(date.year, date.month, date.day);
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
    const today: IMyDate = this.getToday();
    const monthStart: number = this.monthStartIdx(y, m);
    const dInThisM: number = this.daysInMonth(m, y);
    const dInPrevM: number = this.daysInPrevMonth(m, y);

    let dayNbr: number = 1;
    let cmo: number = MonthId.prev;
    for (let i = 1; i < 7; i++) {
      const week: Array<IMyCalendarDay> = [];
      if (i === 1) {
        // First week
        const pm = dInPrevM - monthStart + 1;
        // Previous month
        for (let j = pm; j <= dInPrevM; j++) {
          const date: IMyDate = {year: m === 1 ? y - 1 : y, month: m === 1 ? 12 : m - 1, day: j};
          week.push({dateObj: date,
            cmo,
            currDay: this.isCurrDay(j, m, y, cmo, today),
            disabled: this.utilService.isDisabledDate(date, this.opts),
            markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends),
            highlight: this.utilService.isHighlightedDate(date, this.opts.sunHighlight, this.opts.satHighlight, this.opts.highlightDates)});
        }

        cmo = MonthId.curr;
        // Current month
        const daysLeft: number = 7 - week.length;
        for (let j = 0; j < daysLeft; j++) {
          const date: IMyDate = {year: y, month: m, day: dayNbr};
          week.push({dateObj: date,
            cmo,
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
            cmo = MonthId.next;
          }
          const date: IMyDate = {year: cmo === MonthId.next && m === 12 ? y + 1 : y, month: cmo === MonthId.curr ? m : cmo === MonthId.next && m < 12 ? m + 1 : 1, day: dayNbr};
          week.push({dateObj: date,
            cmo,
            currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
            disabled: this.utilService.isDisabledDate(date, this.opts),
            markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends),
            highlight: this.utilService.isHighlightedDate(date, this.opts.sunHighlight, this.opts.satHighlight, this.opts.highlightDates)});
          dayNbr++;
        }
      }
      const weekNbr: number = this.opts.showWeekNumbers  && this.opts.firstDayOfWeek === MO ? this.utilService.getWeekNumber(week[0].dateObj) : 0;
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

    const {disableHeaderButtons, disableUntil, disableSince, minYear, maxYear} = this.opts;

    if (disableHeaderButtons) {
      dpm = this.utilService.isMonthDisabledByDisableUntil({year: m === 1 ? y - 1 : y, month: m === 1 ? 12 : m - 1, day: this.daysInMonth(m === 1 ? 12 : m - 1, m === 1 ? y - 1 : y)}, disableUntil);
      dnm = this.utilService.isMonthDisabledByDisableSince({year: m === 12 ? y + 1 : y, month: m === 12 ? 1 : m + 1, day: 1}, disableSince);
    }
    this.prevViewDisabled = m === 1 && y === minYear || dpm;
    this.nextViewDisabled = m === 12 && y === maxYear || dnm;
  }

  setMonthViewHeaderBtnDisabledState(y: number): void {
    let dpm: boolean = false;
    let dnm: boolean = false;

    const {disableHeaderButtons, disableUntil, disableSince, minYear, maxYear} = this.opts;

    if (disableHeaderButtons) {
      dpm = this.utilService.isMonthDisabledByDisableUntil({year: y - 1, month: 12, day: 31}, disableUntil);
      dnm = this.utilService.isMonthDisabledByDisableSince({year: y + 1, month: 1, day: 1}, disableSince);
    }
    this.prevViewDisabled = y === minYear || dpm;
    this.nextViewDisabled = y === maxYear || dnm;
  }

  setYearViewHeaderBtnDisabledState(yp: number, yn: number): void {
    let dpy: boolean = false;
    let dny: boolean = false;

    const {disableHeaderButtons, disableUntil, disableSince, minYear, maxYear} = this.opts;

    if (disableHeaderButtons) {
      dpy = this.utilService.isMonthDisabledByDisableUntil({year: yp - 1, month: 12, day: 31}, disableUntil);
      dny = this.utilService.isMonthDisabledByDisableSince({year: yn + 1, month: 1, day: 1}, disableSince);
    }
    this.prevViewDisabled = yp <= minYear || dpy;
    this.nextViewDisabled = yn >= maxYear || dny;
  }
}
