import {Component, OnInit, Renderer2,} from '@angular/core';
import {IAngularMyDpOptions, IMyDateModel, IMyCalendarViewChanged} from '../../../projects/angular-mydatepicker/src/public-api';

@Component({
  selector: 'date-picker-div-host-element',
  templateUrl: './date-picker-div-host-element.html',
  styleUrls: ['./date-picker-div-host-element.css']
})
export class DatePickerDivHostElement implements OnInit {
  public myDatePickerOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd.mm.yyyy',
    divHostElement: {enabled: true, placeholder: 'Click to select a date'}
  };

  model: IMyDateModel = null;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    console.log('onInit(): DatePickerDivHostElement');
  }

  setTodayDate(): void {
    let d: Date = new Date();
    this.model = {isRange: false, singleDate: {jsDate: d}, dateRange: null};
  }

  resetTomorrowDate(): void {
    let d: Date = new Date();
    d.setDate(d.getDate() + 1);
    this.model = {isRange: false, singleDate: {date: {year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()}}, dateRange: null};
  }

  onDateChanged(event: IMyDateModel): void {
    console.log('onDateChanged(): ', event);
  }
}
