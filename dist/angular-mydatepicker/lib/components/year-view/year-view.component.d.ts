import { EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { IMyCalendarYear } from "../../interfaces/my-calendar-year.interface";
import { IMyOptions } from "../../interfaces/my-options.interface";
import { UtilService } from "../../services/angular-mydatepicker.util.service";
export declare class YearViewComponent implements OnChanges {
    private utilService;
    opts: IMyOptions;
    years: Array<Array<IMyCalendarYear>>;
    yearCellClicked: EventEmitter<IMyCalendarYear>;
    yearCellKeyDown: EventEmitter<any>;
    constructor(utilService: UtilService);
    ngOnChanges(changes: SimpleChanges): void;
    onYearCellClicked(event: any, cell: IMyCalendarYear): void;
    onYearCellKeyDown(event: any, cell: IMyCalendarYear): void;
}
