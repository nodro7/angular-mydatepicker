/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";
import { KeyCode } from "../../enums/key-code.enum";
import { UtilService } from "../../services/angular-mydatepicker.util.service";
import { YEARS, OPTS } from "../../constants/constants";
var YearViewComponent = /** @class */ (function () {
    function YearViewComponent(utilService) {
        this.utilService = utilService;
        this.yearCellClicked = new EventEmitter();
        this.yearCellKeyDown = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    YearViewComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty(OPTS)) {
            this.opts = changes[OPTS].currentValue;
        }
        if (changes.hasOwnProperty(YEARS)) {
            this.years = changes[YEARS].currentValue;
        }
    };
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    YearViewComponent.prototype.onYearCellClicked = /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    function (event, cell) {
        event.stopPropagation();
        if (cell.disabled) {
            return;
        }
        this.yearCellClicked.emit(cell);
    };
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    YearViewComponent.prototype.onYearCellKeyDown = /**
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
                this.onYearCellClicked(event, cell);
            }
            else if (this.opts.moveFocusByArrowKeys) {
                this.yearCellKeyDown.emit(event);
            }
        }
    };
    YearViewComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-year-view",
                    template: "<table class=\"myDpYearTable\" [ngClass]=\"{'ng-myrtl': opts.rtl}\">\n  <tbody>\n    <tr *ngFor=\"let yr of years\">\n      <td id=\"y_{{y.row}}_{{y.col}}\" class=\"y_{{y.row}}_{{y.col}} myDpYearcell\"\n          [ngClass]=\"{'myDpSelectedYear': y.selected, 'myDpDisabled': y.disabled, 'myDpTableSingleYear': !y.disabled}\"\n          *ngFor=\"let y of yr\" (click)=\"onYearCellClicked($event, y)\" (keydown)=\"onYearCellKeyDown($event, y)\" [attr.tabindex]=\"!y.disabled ? 0 : -1\">\n        <span class=\"myDpYearValue\" [ngClass]=\"{'myDpMarkCurrYear': y.currYear && opts.markCurrentYear}\">{{y.year}}</span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n",
                    providers: [UtilService],
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    YearViewComponent.ctorParameters = function () { return [
        { type: UtilService }
    ]; };
    YearViewComponent.propDecorators = {
        opts: [{ type: Input }],
        years: [{ type: Input }],
        yearCellClicked: [{ type: Output }],
        yearCellKeyDown: [{ type: Output }]
    };
    return YearViewComponent;
}());
export { YearViewComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbXlkYXRlcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMveWVhci12aWV3L3llYXItdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQWlCLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR2xILE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDN0UsT0FBTyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUV0RDtJQVlFLDJCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUhsQyxvQkFBZSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUNyRixvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRXZCLENBQUM7Ozs7O0lBRWpELHVDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQztTQUMxQztJQUNILENBQUM7Ozs7OztJQUVELDZDQUFpQjs7Ozs7SUFBakIsVUFBa0IsS0FBVSxFQUFFLElBQXFCO1FBQ2pELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O0lBRUQsNkNBQWlCOzs7OztJQUFqQixVQUFrQixLQUFVLEVBQUUsSUFBcUI7O1lBQzNDLE9BQU8sR0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQztRQUNuRSxJQUFJLE9BQU8sS0FBSyxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQzNCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUV2QixJQUFJLE9BQU8sS0FBSyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sS0FBSyxPQUFPLENBQUMsS0FBSyxFQUFFO2dCQUMxRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3JDO2lCQUNJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDakM7U0FDRjtJQUNILENBQUM7O2dCQTdDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLCtwQkFBeUM7b0JBQ3pDLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQztvQkFDeEIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQVJPLFdBQVc7Ozt1QkFVaEIsS0FBSzt3QkFDTCxLQUFLO2tDQUNMLE1BQU07a0NBQ04sTUFBTTs7SUFvQ1Qsd0JBQUM7Q0FBQSxBQTlDRCxJQThDQztTQXhDWSxpQkFBaUI7OztJQUM1QixpQ0FBMEI7O0lBQzFCLGtDQUE4Qzs7SUFDOUMsNENBQStGOztJQUMvRiw0Q0FBdUU7Ozs7O0lBRTNELHdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0lNeUNhbGVuZGFyWWVhcn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvbXktY2FsZW5kYXIteWVhci5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15T3B0aW9uc30gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvbXktb3B0aW9ucy5pbnRlcmZhY2VcIjtcbmltcG9ydCB7S2V5Q29kZX0gZnJvbSBcIi4uLy4uL2VudW1zL2tleS1jb2RlLmVudW1cIjtcbmltcG9ydCB7VXRpbFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hbmd1bGFyLW15ZGF0ZXBpY2tlci51dGlsLnNlcnZpY2VcIjtcbmltcG9ydCB7WUVBUlMsIE9QVFN9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaWIteWVhci12aWV3XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4veWVhci12aWV3LmNvbXBvbmVudC5odG1sXCIsXG4gIHByb3ZpZGVyczogW1V0aWxTZXJ2aWNlXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBZZWFyVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG9wdHM6IElNeU9wdGlvbnM7XG4gIEBJbnB1dCgpIHllYXJzOiBBcnJheTxBcnJheTxJTXlDYWxlbmRhclllYXI+PjtcbiAgQE91dHB1dCgpIHllYXJDZWxsQ2xpY2tlZDogRXZlbnRFbWl0dGVyPElNeUNhbGVuZGFyWWVhcj4gPSBuZXcgRXZlbnRFbWl0dGVyPElNeUNhbGVuZGFyWWVhcj4oKTtcbiAgQE91dHB1dCgpIHllYXJDZWxsS2V5RG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHV0aWxTZXJ2aWNlOiBVdGlsU2VydmljZSkgeyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KE9QVFMpKSB7XG4gICAgICB0aGlzLm9wdHMgPSBjaGFuZ2VzW09QVFNdLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoWUVBUlMpKSB7XG4gICAgICB0aGlzLnllYXJzID0gY2hhbmdlc1tZRUFSU10uY3VycmVudFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIG9uWWVhckNlbGxDbGlja2VkKGV2ZW50OiBhbnksIGNlbGw6IElNeUNhbGVuZGFyWWVhcik6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKGNlbGwuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnllYXJDZWxsQ2xpY2tlZC5lbWl0KGNlbGwpO1xuICB9XG5cbiAgb25ZZWFyQ2VsbEtleURvd24oZXZlbnQ6IGFueSwgY2VsbDogSU15Q2FsZW5kYXJZZWFyKSB7XG4gICAgY29uc3Qga2V5Q29kZTogbnVtYmVyID0gdGhpcy51dGlsU2VydmljZS5nZXRLZXlDb2RlRnJvbUV2ZW50KGV2ZW50KTtcbiAgICBpZiAoa2V5Q29kZSAhPT0gS2V5Q29kZS50YWIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmIChrZXlDb2RlID09PSBLZXlDb2RlLmVudGVyIHx8IGtleUNvZGUgPT09IEtleUNvZGUuc3BhY2UpIHtcbiAgICAgICAgdGhpcy5vblllYXJDZWxsQ2xpY2tlZChldmVudCwgY2VsbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLm9wdHMubW92ZUZvY3VzQnlBcnJvd0tleXMpIHtcbiAgICAgICAgdGhpcy55ZWFyQ2VsbEtleURvd24uZW1pdChldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==