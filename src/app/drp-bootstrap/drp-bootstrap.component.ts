import { Component, OnInit } from '@angular/core';

import {IAngularMyDpOptions, IMyDateModel} from 'angular-mydatepicker';

@Component({
  selector: 'app-drp-bootstrap',
  templateUrl: './drp-bootstrap.component.html',
  styleUrls: ['./drp-bootstrap.component.css']
})
export class DrpBootstrapComponent implements OnInit {

  private myOptions: IAngularMyDpOptions = {
    dateRange: true,
    dateFormat: 'dd.mm.yyyy'
  };

  private model: IMyDateModel = null;

  constructor() { }

  // optional date changed callback
  onDateChanged(event: IMyDateModel): void {
    console.log('onDateChanged(): ', event);
  }

  ngOnInit() {
  }

}
