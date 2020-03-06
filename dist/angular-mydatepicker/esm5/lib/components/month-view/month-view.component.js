/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";
import { KeyCode } from "../../enums/key-code.enum";
import { UtilService } from "../../services/angular-mydatepicker.util.service";
import { OPTS, MONTHS } from "../../constants/constants";
var MonthViewComponent = /** @class */ (function () {
    function MonthViewComponent(utilService) {
        this.utilService = utilService;
        this.monthCellClicked = new EventEmitter();
        this.monthCellKeyDown = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    MonthViewComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty(OPTS)) {
            this.opts = changes[OPTS].currentValue;
        }
        if (changes.hasOwnProperty(MONTHS)) {
            this.months = changes[MONTHS].currentValue;
        }
    };
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    MonthViewComponent.prototype.onMonthCellClicked = /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    function (event, cell) {
        event.stopPropagation();
        if (cell.disabled) {
            return;
        }
        this.monthCellClicked.emit(cell);
    };
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    MonthViewComponent.prototype.onMonthCellKeyDown = /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    function (event, cell) {
        /** @type {?} */
        var keyCode = this.utilService.getKeyCodeFromEvent(event);
        if (keyCode !== KeyCode.tab) {
            event.preventDefault();
            if (keyCode === KeyCode.enter || keyCode === KeyCode.space) {
                this.onMonthCellClicked(event, cell);
            }
            else if (this.opts.moveFocusByArrowKeys) {
                this.monthCellKeyDown.emit(event);
            }
        }
    };
    MonthViewComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-month-view",
                    template: "<table class=\"myDpMonthTable\" [ngClass]=\"{'ng-myrtl': opts.rtl}\">\n  <tbody>\n    <tr *ngFor=\"let mr of months\">\n      <td id=\"m_{{m.row}}_{{m.col}}\" class=\"m_{{m.row}}_{{m.col}} myDpMonthcell\"\n          [ngClass]=\"{'myDpSelectedMonth': m.selected, 'myDpDisabled': m.disabled, 'myDpTableSingleMonth': !m.disabled}\"\n          *ngFor=\"let m of mr\" (click)=\"onMonthCellClicked($event, m)\" (keydown)=\"onMonthCellKeyDown($event, m)\" [attr.tabindex]=\"!m.disabled ? 0 : -1\">\n        <span class=\"myDpMonthNbr\" *ngIf=\"opts.showMonthNumber\">{{m.nbr}}</span>\n        <span class=\"myDpMonthValue\" [ngClass]=\"{'myDpMarkCurrMonth': m.currMonth && opts.markCurrentMonth}\">{{m.name}}</span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n",
                    providers: [UtilService],
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    MonthViewComponent.ctorParameters = function () { return [
        { type: UtilService }
    ]; };
    MonthViewComponent.propDecorators = {
        opts: [{ type: Input }],
        months: [{ type: Input }],
        monthCellClicked: [{ type: Output }],
        monthCellKeyDown: [{ type: Output }]
    };
    return MonthViewComponent;
}());
export { MonthViewComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW15ZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL21vbnRoLXZpZXcvbW9udGgtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQWlCLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR2xILE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDN0UsT0FBTyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUV2RDtJQVlFLDRCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUhsQyxxQkFBZ0IsR0FBbUMsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFDeEYscUJBQWdCLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFFeEIsQ0FBQzs7Ozs7SUFFakQsd0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUM7U0FDeEM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDO1NBQzVDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsK0NBQWtCOzs7OztJQUFsQixVQUFtQixLQUFVLEVBQUUsSUFBc0I7UUFDbkQsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7OztJQUVELCtDQUFrQjs7Ozs7SUFBbEIsVUFBbUIsS0FBVSxFQUFFLElBQXNCOztZQUM3QyxPQUFPLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7UUFDbkUsSUFBSSxPQUFPLEtBQUssT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUMzQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFdkIsSUFBSSxPQUFPLEtBQUssT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLEtBQUssT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFDMUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQzthQUN0QztpQkFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDbEM7U0FDRjtJQUNILENBQUM7O2dCQTdDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsZ3dCQUEwQztvQkFDMUMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO29CQUN4QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7Ozs7Z0JBUk8sV0FBVzs7O3VCQVVoQixLQUFLO3lCQUNMLEtBQUs7bUNBQ0wsTUFBTTttQ0FDTixNQUFNOztJQW9DVCx5QkFBQztDQUFBLEFBOUNELElBOENDO1NBeENZLGtCQUFrQjs7O0lBQzdCLGtDQUEwQjs7SUFDMUIsb0NBQWdEOztJQUNoRCw4Q0FBa0c7O0lBQ2xHLDhDQUF3RTs7Ozs7SUFFNUQseUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SU15Q2FsZW5kYXJNb250aH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvbXktY2FsZW5kYXItbW9udGguaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeU9wdGlvbnN9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL215LW9wdGlvbnMuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0tleUNvZGV9IGZyb20gXCIuLi8uLi9lbnVtcy9rZXktY29kZS5lbnVtXCI7XG5pbXBvcnQge1V0aWxTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYW5ndWxhci1teWRhdGVwaWNrZXIudXRpbC5zZXJ2aWNlXCI7XG5pbXBvcnQge09QVFMsIE1PTlRIU30gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpYi1tb250aC12aWV3XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbW9udGgtdmlldy5jb21wb25lbnQuaHRtbFwiLFxuICBwcm92aWRlcnM6IFtVdGlsU2VydmljZV0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgb3B0czogSU15T3B0aW9ucztcbiAgQElucHV0KCkgbW9udGhzOiBBcnJheTxBcnJheTxJTXlDYWxlbmRhck1vbnRoPj47XG4gIEBPdXRwdXQoKSBtb250aENlbGxDbGlja2VkOiBFdmVudEVtaXR0ZXI8SU15Q2FsZW5kYXJNb250aD4gPSBuZXcgRXZlbnRFbWl0dGVyPElNeUNhbGVuZGFyTW9udGg+KCk7XG4gIEBPdXRwdXQoKSBtb250aENlbGxLZXlEb3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXRpbFNlcnZpY2U6IFV0aWxTZXJ2aWNlKSB7IH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoT1BUUykpIHtcbiAgICAgIHRoaXMub3B0cyA9IGNoYW5nZXNbT1BUU10uY3VycmVudFZhbHVlO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShNT05USFMpKSB7XG4gICAgICB0aGlzLm1vbnRocyA9IGNoYW5nZXNbTU9OVEhTXS5jdXJyZW50VmFsdWU7XG4gICAgfVxuICB9XG5cbiAgb25Nb250aENlbGxDbGlja2VkKGV2ZW50OiBhbnksIGNlbGw6IElNeUNhbGVuZGFyTW9udGgpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmIChjZWxsLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5tb250aENlbGxDbGlja2VkLmVtaXQoY2VsbCk7XG4gIH1cblxuICBvbk1vbnRoQ2VsbEtleURvd24oZXZlbnQ6IGFueSwgY2VsbDogSU15Q2FsZW5kYXJNb250aCkge1xuICAgIGNvbnN0IGtleUNvZGU6IG51bWJlciA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0S2V5Q29kZUZyb21FdmVudChldmVudCk7XG4gICAgaWYgKGtleUNvZGUgIT09IEtleUNvZGUudGFiKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoa2V5Q29kZSA9PT0gS2V5Q29kZS5lbnRlciB8fCBrZXlDb2RlID09PSBLZXlDb2RlLnNwYWNlKSB7XG4gICAgICAgIHRoaXMub25Nb250aENlbGxDbGlja2VkKGV2ZW50LCBjZWxsKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRoaXMub3B0cy5tb3ZlRm9jdXNCeUFycm93S2V5cykge1xuICAgICAgICB0aGlzLm1vbnRoQ2VsbEtleURvd24uZW1pdChldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==