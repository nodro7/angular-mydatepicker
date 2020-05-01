import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation} from "@angular/core";
import {IMyOptions} from "../../interfaces/my-options.interface";
import {UtilService} from "../../services/angular-mydatepicker.util.service";
import {OPTS, SPACE_STR, EMPTY_STR} from "../../constants/constants";

@Component({
  selector: "lib-footer-bar",
  templateUrl: "./footer-bar.component.html",
  providers: [UtilService],
  encapsulation: ViewEncapsulation.None
})
export class FooterBarComponent implements OnChanges {
  @Input() opts: IMyOptions;
  @Output() footerBarTxtClicked: EventEmitter<void> = new EventEmitter<void>();

  footerBarTxt: string = EMPTY_STR;

  constructor(private utilService: UtilService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty(OPTS)) {
      this.opts = changes[OPTS].currentValue;

      const {dateFormat, monthLabels, todayTxt} = this.opts;

      const today = this.utilService.getToday();
      this.footerBarTxt = todayTxt + (todayTxt.length > 0 ? SPACE_STR : EMPTY_STR) + 
        this.utilService.formatDate(today, dateFormat, monthLabels);
    }
  }

  onFooterBarTxtClicked(): void {
    this.footerBarTxtClicked.emit()
  }
}