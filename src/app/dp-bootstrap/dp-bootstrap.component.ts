import { Component, OnInit } from '@angular/core';

import {IAngularMyDpOptions, IMyDateModel} from 'angular-mydatepicker';

@Component({
  selector: 'app-dp-bootstrap',
  templateUrl: './dp-bootstrap.component.html',
  styleUrls: ['./dp-bootstrap.component.css']
})
export class DpBootstrapComponent implements OnInit {

  public myOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd.mm.yyyy',

    stylesData:
      {
        selector: 'dp1',
        styles: `
        .dp1 .myDpIconLeftArrow,
        .dp1 .myDpIconRightArrow {
          color: red;
        }  
      `
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
