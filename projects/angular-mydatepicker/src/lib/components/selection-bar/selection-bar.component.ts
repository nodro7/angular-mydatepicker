import {Component, EventEmitter, Input, OnChanges, Output, ViewEncapsulation, SimpleChanges} from "@angular/core";
import {IMyMonth} from "../../interfaces/my-month.interface";
import {IMyOptions} from "../../interfaces/my-options.interface";
import {OPTS, YEARS_DURATION, VISIBLE_MONTH, SELECT_MONTH, SELECT_YEAR, PREV_VIEW_DISABLED, NEXT_VIEW_DISABLED} from "../../constants/constants"

@Component({
  selector: "lib-selection-bar",
  templateUrl: "./selection-bar.component.html",
  encapsulation: ViewEncapsulation.None
})
export class SelectionBarComponent implements OnChanges {
  @Input() opts: IMyOptions;
  @Input() yearsDuration: string;
  @Input() visibleMonth: IMyMonth;
  @Input() selectMonth: boolean;
  @Input() selectYear: boolean;
  @Input() prevViewDisabled: boolean;
  @Input() nextViewDisabled: boolean;

  @Output() prevNavigateBtnClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() nextNavigateBtnClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() monthViewBtnClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() yearViewBtnClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty(OPTS)) {
      this.opts = changes[OPTS].currentValue;
    }
    if (changes.hasOwnProperty(YEARS_DURATION)) {
      this.yearsDuration = changes[YEARS_DURATION].currentValue;
    }
    if (changes.hasOwnProperty(VISIBLE_MONTH)) {
      this.visibleMonth = changes[VISIBLE_MONTH].currentValue;
    }
    if (changes.hasOwnProperty(SELECT_MONTH)) {
      this.selectMonth = changes[SELECT_MONTH].currentValue;
    }
    if (changes.hasOwnProperty(SELECT_YEAR)) {
      this.selectYear = changes[SELECT_YEAR].currentValue;
    }
    if (changes.hasOwnProperty(PREV_VIEW_DISABLED)) {
      this.prevViewDisabled = changes[PREV_VIEW_DISABLED].currentValue;
    }
    if (changes.hasOwnProperty(NEXT_VIEW_DISABLED)) {
      this.nextViewDisabled = changes[NEXT_VIEW_DISABLED].currentValue;
    }
  }

  onPrevNavigateBtnClicked(event: any): void {
    event.stopPropagation();
    this.prevNavigateBtnClicked.emit();
  }

  onNextNavigateBtnClicked(event: any): void {
    event.stopPropagation();
    this.nextNavigateBtnClicked.emit();
  }

  onMonthViewBtnClicked(event): void {
    event.stopPropagation();
    this.monthViewBtnClicked.emit();
  }

  onYearViewBtnClicked(event): void {
    event.stopPropagation();
    this.yearViewBtnClicked.emit();
  }
}
