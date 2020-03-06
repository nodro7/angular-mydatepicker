import { IMyDate } from "./my-date.interface";
export interface IMyDateRangeModel {
    beginDate?: IMyDate;
    beginJsDate?: Date;
    beginEpoc?: number;
    endDate?: IMyDate;
    endJsDate?: Date;
    endEpoc?: number;
    formatted?: string;
}
