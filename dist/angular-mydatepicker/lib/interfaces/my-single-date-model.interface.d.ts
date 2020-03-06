import { IMyDate } from "./my-date.interface";
export interface IMySingleDateModel {
    date?: IMyDate;
    jsDate?: Date;
    formatted?: string;
    epoc?: number;
}
