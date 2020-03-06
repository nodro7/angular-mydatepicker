/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";
import { KeyCode } from "../../enums/key-code.enum";
import { UtilService } from "../../services/angular-mydatepicker.util.service";
import { YEARS, OPTS } from "../../constants/constants";
export class YearViewComponent {
    /**
     * @param {?} utilService
     */
    constructor(utilService) {
        this.utilService = utilService;
        this.yearCellClicked = new EventEmitter();
        this.yearCellKeyDown = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty(OPTS)) {
            this.opts = changes[OPTS].currentValue;
        }
        if (changes.hasOwnProperty(YEARS)) {
            this.years = changes[YEARS].currentValue;
        }
    }
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    onYearCellClicked(event, cell) {
        event.stopPropagation();
        if (cell.disabled) {
            return;
        }
        this.yearCellClicked.emit(cell);
    }
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    onYearCellKeyDown(event, cell) {
        /** @type {?} */
        const keyCode = this.utilService.getKeyCodeFromEvent(event);
        if (keyCode !== KeyCode.tab) {
            event.preventDefault();
            if (keyCode === KeyCode.enter || keyCode === KeyCode.space) {
                this.onYearCellClicked(event, cell);
            }
            else if (this.opts.moveFocusByArrowKeys) {
                this.yearCellKeyDown.emit(event);
            }
        }
    }
}
YearViewComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-year-view",
                template: "<table class=\"myDpYearTable\" [ngClass]=\"{'ng-myrtl': opts.rtl}\">\n  <tbody>\n    <tr *ngFor=\"let yr of years\">\n      <td id=\"y_{{y.row}}_{{y.col}}\" class=\"y_{{y.row}}_{{y.col}} myDpYearcell\"\n          [ngClass]=\"{'myDpSelectedYear': y.selected, 'myDpDisabled': y.disabled, 'myDpTableSingleYear': !y.disabled}\"\n          *ngFor=\"let y of yr\" (click)=\"onYearCellClicked($event, y)\" (keydown)=\"onYearCellKeyDown($event, y)\" [attr.tabindex]=\"!y.disabled ? 0 : -1\">\n        <span class=\"myDpYearValue\" [ngClass]=\"{'myDpMarkCurrYear': y.currYear && opts.markCurrentYear}\">{{y.year}}</span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n",
                providers: [UtilService],
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
YearViewComponent.ctorParameters = () => [
    { type: UtilService }
];
YearViewComponent.propDecorators = {
    opts: [{ type: Input }],
    years: [{ type: Input }],
    yearCellClicked: [{ type: Output }],
    yearCellKeyDown: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    YearViewComponent.prototype.opts;
    /** @type {?} */
    YearViewComponent.prototype.years;
    /** @type {?} */
    YearViewComponent.prototype.yearCellClicked;
    /** @type {?} */
    YearViewComponent.prototype.yearCellKeyDown;
    /**
     * @type {?}
     * @private
     */
    YearViewComponent.prototype.utilService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbXlkYXRlcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMveWVhci12aWV3L3llYXItdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQWlCLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR2xILE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDN0UsT0FBTyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQVF0RCxNQUFNLE9BQU8saUJBQWlCOzs7O0lBTTVCLFlBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSGxDLG9CQUFlLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ3JGLG9CQUFlLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFFdkIsQ0FBQzs7Ozs7SUFFakQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUM7U0FDeEM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsS0FBVSxFQUFFLElBQXFCO1FBQ2pELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsS0FBVSxFQUFFLElBQXFCOztjQUMzQyxPQUFPLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7UUFDbkUsSUFBSSxPQUFPLEtBQUssT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUMzQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFdkIsSUFBSSxPQUFPLEtBQUssT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLEtBQUssT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFDMUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNyQztpQkFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQ2pDO1NBQ0Y7SUFDSCxDQUFDOzs7WUE3Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QiwrcEJBQXlDO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ3hCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBUk8sV0FBVzs7O21CQVVoQixLQUFLO29CQUNMLEtBQUs7OEJBQ0wsTUFBTTs4QkFDTixNQUFNOzs7O0lBSFAsaUNBQTBCOztJQUMxQixrQ0FBOEM7O0lBQzlDLDRDQUErRjs7SUFDL0YsNENBQXVFOzs7OztJQUUzRCx3Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtJTXlDYWxlbmRhclllYXJ9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL215LWNhbGVuZGFyLXllYXIuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeU9wdGlvbnN9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL215LW9wdGlvbnMuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0tleUNvZGV9IGZyb20gXCIuLi8uLi9lbnVtcy9rZXktY29kZS5lbnVtXCI7XG5pbXBvcnQge1V0aWxTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYW5ndWxhci1teWRhdGVwaWNrZXIudXRpbC5zZXJ2aWNlXCI7XG5pbXBvcnQge1lFQVJTLCBPUFRTfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGliLXllYXItdmlld1wiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3llYXItdmlldy5jb21wb25lbnQuaHRtbFwiLFxuICBwcm92aWRlcnM6IFtVdGlsU2VydmljZV0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgWWVhclZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBvcHRzOiBJTXlPcHRpb25zO1xuICBASW5wdXQoKSB5ZWFyczogQXJyYXk8QXJyYXk8SU15Q2FsZW5kYXJZZWFyPj47XG4gIEBPdXRwdXQoKSB5ZWFyQ2VsbENsaWNrZWQ6IEV2ZW50RW1pdHRlcjxJTXlDYWxlbmRhclllYXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxJTXlDYWxlbmRhclllYXI+KCk7XG4gIEBPdXRwdXQoKSB5ZWFyQ2VsbEtleURvd246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1dGlsU2VydmljZTogVXRpbFNlcnZpY2UpIHsgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShPUFRTKSkge1xuICAgICAgdGhpcy5vcHRzID0gY2hhbmdlc1tPUFRTXS5jdXJyZW50VmFsdWU7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KFlFQVJTKSkge1xuICAgICAgdGhpcy55ZWFycyA9IGNoYW5nZXNbWUVBUlNdLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBvblllYXJDZWxsQ2xpY2tlZChldmVudDogYW55LCBjZWxsOiBJTXlDYWxlbmRhclllYXIpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmIChjZWxsLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy55ZWFyQ2VsbENsaWNrZWQuZW1pdChjZWxsKTtcbiAgfVxuXG4gIG9uWWVhckNlbGxLZXlEb3duKGV2ZW50OiBhbnksIGNlbGw6IElNeUNhbGVuZGFyWWVhcikge1xuICAgIGNvbnN0IGtleUNvZGU6IG51bWJlciA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0S2V5Q29kZUZyb21FdmVudChldmVudCk7XG4gICAgaWYgKGtleUNvZGUgIT09IEtleUNvZGUudGFiKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoa2V5Q29kZSA9PT0gS2V5Q29kZS5lbnRlciB8fCBrZXlDb2RlID09PSBLZXlDb2RlLnNwYWNlKSB7XG4gICAgICAgIHRoaXMub25ZZWFyQ2VsbENsaWNrZWQoZXZlbnQsIGNlbGwpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGhpcy5vcHRzLm1vdmVGb2N1c0J5QXJyb3dLZXlzKSB7XG4gICAgICAgIHRoaXMueWVhckNlbGxLZXlEb3duLmVtaXQoZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=