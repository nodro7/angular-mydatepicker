/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";
import { KeyCode } from "../../enums/key-code.enum";
import { UtilService } from "../../services/angular-mydatepicker.util.service";
import { OPTS, MONTHS } from "../../constants/constants";
export class MonthViewComponent {
    /**
     * @param {?} utilService
     */
    constructor(utilService) {
        this.utilService = utilService;
        this.monthCellClicked = new EventEmitter();
        this.monthCellKeyDown = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty(OPTS)) {
            this.opts = changes[OPTS].currentValue;
        }
        if (changes.hasOwnProperty(MONTHS)) {
            this.months = changes[MONTHS].currentValue;
        }
    }
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    onMonthCellClicked(event, cell) {
        event.stopPropagation();
        if (cell.disabled) {
            return;
        }
        this.monthCellClicked.emit(cell);
    }
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    onMonthCellKeyDown(event, cell) {
        /** @type {?} */
        const keyCode = this.utilService.getKeyCodeFromEvent(event);
        if (keyCode !== KeyCode.tab) {
            event.preventDefault();
            if (keyCode === KeyCode.enter || keyCode === KeyCode.space) {
                this.onMonthCellClicked(event, cell);
            }
            else if (this.opts.moveFocusByArrowKeys) {
                this.monthCellKeyDown.emit(event);
            }
        }
    }
}
MonthViewComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-month-view",
                template: "<table class=\"myDpMonthTable\" [ngClass]=\"{'ng-myrtl': opts.rtl}\">\n  <tbody>\n    <tr *ngFor=\"let mr of months\">\n      <td id=\"m_{{m.row}}_{{m.col}}\" class=\"m_{{m.row}}_{{m.col}} myDpMonthcell\"\n          [ngClass]=\"{'myDpSelectedMonth': m.selected, 'myDpDisabled': m.disabled, 'myDpTableSingleMonth': !m.disabled}\"\n          *ngFor=\"let m of mr\" (click)=\"onMonthCellClicked($event, m)\" (keydown)=\"onMonthCellKeyDown($event, m)\" [attr.tabindex]=\"!m.disabled ? 0 : -1\">\n        <span class=\"myDpMonthNbr\" *ngIf=\"opts.showMonthNumber\">{{m.nbr}}</span>\n        <span class=\"myDpMonthValue\" [ngClass]=\"{'myDpMarkCurrMonth': m.currMonth && opts.markCurrentMonth}\">{{m.name}}</span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n",
                providers: [UtilService],
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
MonthViewComponent.ctorParameters = () => [
    { type: UtilService }
];
MonthViewComponent.propDecorators = {
    opts: [{ type: Input }],
    months: [{ type: Input }],
    monthCellClicked: [{ type: Output }],
    monthCellKeyDown: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    MonthViewComponent.prototype.opts;
    /** @type {?} */
    MonthViewComponent.prototype.months;
    /** @type {?} */
    MonthViewComponent.prototype.monthCellClicked;
    /** @type {?} */
    MonthViewComponent.prototype.monthCellKeyDown;
    /**
     * @type {?}
     * @private
     */
    MonthViewComponent.prototype.utilService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW15ZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL21vbnRoLXZpZXcvbW9udGgtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQWlCLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR2xILE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDN0UsT0FBTyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQVF2RCxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBTTdCLFlBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSGxDLHFCQUFnQixHQUFtQyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUN4RixxQkFBZ0IsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUV4QixDQUFDOzs7OztJQUVqRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQztTQUN4QztRQUNELElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUM7U0FDNUM7SUFDSCxDQUFDOzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxLQUFVLEVBQUUsSUFBc0I7UUFDbkQsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7OztJQUVELGtCQUFrQixDQUFDLEtBQVUsRUFBRSxJQUFzQjs7Y0FDN0MsT0FBTyxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO1FBQ25FLElBQUksT0FBTyxLQUFLLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDM0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRXZCLElBQUksT0FBTyxLQUFLLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxLQUFLLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0JBQzFELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDdEM7aUJBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO2dCQUN2QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQ2xDO1NBQ0Y7SUFDSCxDQUFDOzs7WUE3Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGd3QkFBMEM7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDeEIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUFSTyxXQUFXOzs7bUJBVWhCLEtBQUs7cUJBQ0wsS0FBSzsrQkFDTCxNQUFNOytCQUNOLE1BQU07Ozs7SUFIUCxrQ0FBMEI7O0lBQzFCLG9DQUFnRDs7SUFDaEQsOENBQWtHOztJQUNsRyw4Q0FBd0U7Ozs7O0lBRTVELHlDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0lNeUNhbGVuZGFyTW9udGh9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL215LWNhbGVuZGFyLW1vbnRoLmludGVyZmFjZVwiO1xuaW1wb3J0IHtJTXlPcHRpb25zfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9teS1vcHRpb25zLmludGVyZmFjZVwiO1xuaW1wb3J0IHtLZXlDb2RlfSBmcm9tIFwiLi4vLi4vZW51bXMva2V5LWNvZGUuZW51bVwiO1xuaW1wb3J0IHtVdGlsU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FuZ3VsYXItbXlkYXRlcGlja2VyLnV0aWwuc2VydmljZVwiO1xuaW1wb3J0IHtPUFRTLCBNT05USFN9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaWItbW9udGgtdmlld1wiLFxuICB0ZW1wbGF0ZVVybDogXCIuL21vbnRoLXZpZXcuY29tcG9uZW50Lmh0bWxcIixcbiAgcHJvdmlkZXJzOiBbVXRpbFNlcnZpY2VdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE1vbnRoVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG9wdHM6IElNeU9wdGlvbnM7XG4gIEBJbnB1dCgpIG1vbnRoczogQXJyYXk8QXJyYXk8SU15Q2FsZW5kYXJNb250aD4+O1xuICBAT3V0cHV0KCkgbW9udGhDZWxsQ2xpY2tlZDogRXZlbnRFbWl0dGVyPElNeUNhbGVuZGFyTW9udGg+ID0gbmV3IEV2ZW50RW1pdHRlcjxJTXlDYWxlbmRhck1vbnRoPigpO1xuICBAT3V0cHV0KCkgbW9udGhDZWxsS2V5RG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHV0aWxTZXJ2aWNlOiBVdGlsU2VydmljZSkgeyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KE9QVFMpKSB7XG4gICAgICB0aGlzLm9wdHMgPSBjaGFuZ2VzW09QVFNdLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoTU9OVEhTKSkge1xuICAgICAgdGhpcy5tb250aHMgPSBjaGFuZ2VzW01PTlRIU10uY3VycmVudFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIG9uTW9udGhDZWxsQ2xpY2tlZChldmVudDogYW55LCBjZWxsOiBJTXlDYWxlbmRhck1vbnRoKTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAoY2VsbC5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubW9udGhDZWxsQ2xpY2tlZC5lbWl0KGNlbGwpO1xuICB9XG5cbiAgb25Nb250aENlbGxLZXlEb3duKGV2ZW50OiBhbnksIGNlbGw6IElNeUNhbGVuZGFyTW9udGgpIHtcbiAgICBjb25zdCBrZXlDb2RlOiBudW1iZXIgPSB0aGlzLnV0aWxTZXJ2aWNlLmdldEtleUNvZGVGcm9tRXZlbnQoZXZlbnQpO1xuICAgIGlmIChrZXlDb2RlICE9PSBLZXlDb2RlLnRhYikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKGtleUNvZGUgPT09IEtleUNvZGUuZW50ZXIgfHwga2V5Q29kZSA9PT0gS2V5Q29kZS5zcGFjZSkge1xuICAgICAgICB0aGlzLm9uTW9udGhDZWxsQ2xpY2tlZChldmVudCwgY2VsbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLm9wdHMubW92ZUZvY3VzQnlBcnJvd0tleXMpIHtcbiAgICAgICAgdGhpcy5tb250aENlbGxLZXlEb3duLmVtaXQoZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=