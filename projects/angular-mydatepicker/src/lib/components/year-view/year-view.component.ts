import {Component, EventEmitter, Input, OnChanges, AfterViewInit, Output, SimpleChanges, ViewEncapsulation} from "@angular/core";
import {IMyCalendarYear} from "../../interfaces/my-calendar-year.interface";
import {IMyOptions} from "../../interfaces/my-options.interface";
import {KeyCode} from "../../enums/key-code.enum";
import {ActiveView} from "../../enums/active-view.enum";
import {UtilService} from "../../services/angular-mydatepicker.util.service";
import {YEARS, OPTS} from "../../constants/constants";

@Component({
    selector: "lib-year-view",
    templateUrl: "./year-view.component.html",
    providers: [UtilService],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class YearViewComponent implements OnChanges, AfterViewInit {
  @Input() opts: IMyOptions;
  @Input() years: Array<Array<IMyCalendarYear>>;
  @Input() viewChanged: boolean;

  @Output() yearCellClicked: EventEmitter<IMyCalendarYear> = new EventEmitter<IMyCalendarYear>();
  @Output() yearCellKeyDown: EventEmitter<any> = new EventEmitter<any>();
  @Output() viewActivated: EventEmitter<ActiveView> = new EventEmitter<ActiveView>();

  constructor(private utilService: UtilService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty(OPTS)) {
      this.opts = changes[OPTS].currentValue;
    }
    if (changes.hasOwnProperty(YEARS)) {
      this.years = changes[YEARS].currentValue;
    }
  }

  ngAfterViewInit(): void {
    this.viewActivated.emit(ActiveView.Year);
  }

  onYearCellClicked(event: any, cell: IMyCalendarYear): void {
    event.stopPropagation();

    if (cell.disabled) {
      return;
    }

    this.yearCellClicked.emit(cell);
  }

  onYearCellKeyDown(event: any, cell: IMyCalendarYear) {
    const keyCode: number = this.utilService.getKeyCodeFromEvent(event);
    if (keyCode !== KeyCode.tab) {
      event.preventDefault();

      if (keyCode === KeyCode.enter || keyCode === KeyCode.space) {
        this.onYearCellClicked(event, cell);
      }
      else if (this.opts.moveFocusByArrowKeys) {
        this.yearCellKeyDown.emit(event)
      }
    }
  }
}
