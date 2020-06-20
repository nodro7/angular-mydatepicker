import { Component, OnInit } from '@angular/core';

import {IAngularMyDpOptions, IMyDateModel} from 'angular-mydatepicker';

@Component({
  selector: 'app-dp-inline',
  templateUrl: './dp-inline.component.html',
  styleUrls: ['./dp-inline.component.css']
})
export class DpInlineComponent implements OnInit {

  public myOptions: IAngularMyDpOptions = {
    dateRange: false,
    inline: true,
    dateFormat: 'dd.mm.yyyy',
    selectorWidth: '100%'
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
