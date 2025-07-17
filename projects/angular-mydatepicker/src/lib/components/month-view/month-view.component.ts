import {Component, EventEmitter, Input, OnChanges, AfterViewInit, Output, SimpleChanges, ViewEncapsulation} from "@angular/core";
import {IMyCalendarMonth} from "../../interfaces/my-calendar-month.interface";
import {IMyOptions} from "../../interfaces/my-options.interface";
import {KeyCode} from "../../enums/key-code.enum";
import {ActiveView} from "../../enums/active-view.enum";
import {UtilService} from "../../services/angular-mydatepicker.util.service";
import {OPTS, MONTHS} from "../../constants/constants";

@Component({
    selector: "lib-month-view",
    templateUrl: "./month-view.component.html",
    providers: [UtilService],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class MonthViewComponent implements OnChanges, AfterViewInit {
  @Input() opts: IMyOptions;
  @Input() months: Array<Array<IMyCalendarMonth>>;
  @Input() viewChanged: boolean;

  @Output() monthCellClicked: EventEmitter<IMyCalendarMonth> = new EventEmitter<IMyCalendarMonth>();
  @Output() monthCellKeyDown: EventEmitter<any> = new EventEmitter<any>();
  @Output() viewActivated: EventEmitter<ActiveView> = new EventEmitter<ActiveView>();

  constructor(private utilService: UtilService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty(OPTS)) {
      this.opts = changes[OPTS].currentValue;
    }
    if (changes.hasOwnProperty(MONTHS)) {
      this.months = changes[MONTHS].currentValue;
    }
  }

  ngAfterViewInit(): void {
    this.viewActivated.emit(ActiveView.Month);
  }

  onMonthCellClicked(event: any, cell: IMyCalendarMonth): void {
    event.stopPropagation();

    if (cell.disabled) {
      return;
    }

    this.monthCellClicked.emit(cell);
  }

  onMonthCellKeyDown(event: any, cell: IMyCalendarMonth) {
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
