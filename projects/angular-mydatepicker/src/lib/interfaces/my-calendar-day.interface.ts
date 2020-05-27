import {IMyDate} from "./my-date.interface";
import {IMyDisabledDate} from "./my-disabled-date.interface";
import {IMyMarkedDate} from "./my-marked-date.interface";

export interface IMyCalendarDay {
  dateObj: IMyDate;
  cmo: number;
  currDay: boolean;
  disabledDate: IMyDisabledDate;
  markedDate: IMyMarkedDate;
  highlight: boolean;
  range?: boolean;
  row?: number;
  col?: number
}
