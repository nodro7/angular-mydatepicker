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
    calendarAnimation: {in: CalAnimation.FlipDiagonal, out: CalAnimation.Rotate},
    monthLabels: { 
      1: 'January', 
      2: 'February', 
      3: 'March', 
      4: 'April', 
      5: 'May', 
      6: 'June', 
      7: 'July', 
      8: 'August', 
      9: 'September', 
      10: 'October', 
      11: 'November', 
      12: 'December' 
    }
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
