import { EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { IMyCalendarDay } from "../../interfaces/my-calendar-day.interface";
import { IMyDate } from "../../interfaces/my-date.interface";
import { IMyDateRange } from "../../interfaces/my-date-range.interface";
import { IMyOptions } from "../../interfaces/my-options.interface";
import { IMyWeek } from "../../interfaces/my-week.interface";
import { UtilService } from "../../services/angular-mydatepicker.util.service";
export declare class DayViewComponent implements OnChanges {
    private utilService;
    opts: IMyOptions;
    dates: Array<IMyWeek>;
    weekDays: Array<string>;
    selectedDate: IMyDate;
    selectedDateRange: IMyDateRange;
    dayCellClicked: EventEmitter<IMyCalendarDay>;
    dayCellKeyDown: EventEmitter<any>;
    prevMonthId: number;
    currMonthId: number;
    nextMonthId: number;
    constructor(utilService: UtilService);
    ngOnChanges(changes: SimpleChanges): void;
    onDayCellClicked(event: any, cell: IMyCalendarDay): void;
    onDayCellKeyDown(event: any, cell: IMyCalendarDay): void;
    onDayCellMouseEnter(cell: any): void;
    onDayCellMouseLeave(): void;
    isDateInRange(date: IMyDate): boolean;
    isDateSame(date: IMyDate): boolean;
    isDateRangeBeginOrEndSame(date: IMyDate): boolean;
}
