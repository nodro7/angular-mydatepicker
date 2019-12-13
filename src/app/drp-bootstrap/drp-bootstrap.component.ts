import { Component, OnInit } from '@angular/core';

import {IAngularMyDpOptions, IMyDateModel, CalAnimation} from 'angular-mydatepicker';

@Component({
  selector: 'app-drp-bootstrap',
  templateUrl: './drp-bootstrap.component.html',
  styleUrls: ['./drp-bootstrap.component.css']
})
export class DrpBootstrapComponent implements OnInit {

  public myOptions: IAngularMyDpOptions = {
    dateRange: true,
    dateFormat: 'dd.mm.yyyy',
    calendarAnimation: {in: CalAnimation.FlipDiagonal, out: CalAnimation.Rotate}
  };

  public model: IMyDateModel = null;

  constructor() { }

  // optional date changed callback
  onDateChanged(event: IMyDateModel): void {
    console.log('onDateChanged(): ', event);
  }

  ngOnInit() {
  }

}
