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
    selectorWidth: '100%',

    stylesData:
      {
        selector: 'dp2',
        styles: `
        .dp2 .myDpIconLeftArrow,
        .dp2 .myDpIconRightArrow {
          color: blue;
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
