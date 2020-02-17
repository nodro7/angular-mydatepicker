export interface IMyCalendarMonth {
  nbr: number;
  name: string;
  currMonth: boolean;
  selected: boolean;
  disabled: boolean;
  row?: number;
  col?: number
}
