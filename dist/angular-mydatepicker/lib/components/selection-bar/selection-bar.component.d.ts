import { EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { IMyMonth } from "../../interfaces/my-month.interface";
import { IMyOptions } from "../../interfaces/my-options.interface";
export declare class SelectionBarComponent implements OnChanges {
    opts: IMyOptions;
    yearsDuration: string;
    visibleMonth: IMyMonth;
    selectMonth: boolean;
    selectYear: boolean;
    prevViewDisabled: boolean;
    nextViewDisabled: boolean;
    prevNavigateBtnClicked: EventEmitter<void>;
    nextNavigateBtnClicked: EventEmitter<void>;
    monthViewBtnClicked: EventEmitter<void>;
    yearViewBtnClicked: EventEmitter<void>;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    onPrevNavigateBtnClicked(event: any): void;
    onNextNavigateBtnClicked(event: any): void;
    onMonthViewBtnClicked(event: any): void;
    onYearViewBtnClicked(event: any): void;
}
