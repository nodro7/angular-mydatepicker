import { EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { IMyCalendarMonth } from "../../interfaces/my-calendar-month.interface";
import { IMyOptions } from "../../interfaces/my-options.interface";
import { UtilService } from "../../services/angular-mydatepicker.util.service";
export declare class MonthViewComponent implements OnChanges {
    private utilService;
    opts: IMyOptions;
    months: Array<Array<IMyCalendarMonth>>;
    monthCellClicked: EventEmitter<IMyCalendarMonth>;
    monthCellKeyDown: EventEmitter<any>;
    constructor(utilService: UtilService);
    ngOnChanges(changes: SimpleChanges): void;
    onMonthCellClicked(event: any, cell: IMyCalendarMonth): void;
    onMonthCellKeyDown(event: any, cell: IMyCalendarMonth): void;
}
