import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation} from "@angular/core";
import {IMyCalendarMonth} from "../../interfaces/my-calendar-month.interface";
import {IMyOptions} from "../../interfaces/my-options.interface";
import {KeyCode} from "../../enums/key-code.enum";
import {UtilService} from "../../services/angular-mydatepicker.util.service";
import {OPTS, MONTHS} from "../../constants/constants";

@Component({
  selector: "lib-month-view",
  templateUrl: "./month-view.component.html",
  providers: [UtilService],
  encapsulation: ViewEncapsulation.None
})
export class MonthViewComponent implements OnChanges {
  @Input() opts: IMyOptions;
  @Input() months: Array<Array<IMyCalendarMonth>>;
  @Output() monthCellClicked: EventEmitter<IMyCalendarMonth> = new EventEmitter<IMyCalendarMonth>();
  @Output() monthCellKeyDown: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

  constructor(private utilService: UtilService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty(OPTS)) {
      this.opts = changes[OPTS].currentValue;
    }
    if (changes.hasOwnProperty(MONTHS)) {
      this.months = changes[MONTHS].currentValue;
    }
  }

  onMonthCellClicked(event: any, cell: IMyCalendarMonth): void {
    event.stopPropagation();

    if (cell.disabled) {
      return;
    }

    this.monthCellClicked.emit(cell);
  }

  onMonthCellKeyDown(event: KeyboardEvent, cell: IMyCalendarMonth) {
    const keyCode: number = this.utilService.getKeyCodeFromEvent(event);
    if (keyCode !== KeyCode.tab) {
      event.preventDefault();

      if (keyCode === KeyCode.enter || keyCode === KeyCode.space) {
        this.onMonthCellClicked(event, cell);
      }
      else if (this.opts.moveFocusByArrowKeys) {
        this.monthCellKeyDown.emit(event)
      }
    }
  }
}
