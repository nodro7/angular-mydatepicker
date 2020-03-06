import { IMyDate } from "./my-date.interface";
export interface IMyRangeDateSelection {
    isBegin: boolean;
    date: IMyDate;
    jsDate: Date;
    dateFormat: string;
    formatted: string;
    epoc: number;
}
