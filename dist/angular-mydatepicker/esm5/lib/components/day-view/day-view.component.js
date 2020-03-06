/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";
import { UtilService } from "../../services/angular-mydatepicker.util.service";
import { KeyCode } from "../../enums/key-code.enum";
import { MonthId } from "../../enums/month-id.enum";
import { OPTS, DATES, WEEK_DAYS, SELECTED_DATE, SELECTED_DATE_RANGE } from "../../constants/constants";
var DayViewComponent = /** @class */ (function () {
    function DayViewComponent(utilService) {
        this.utilService = utilService;
        this.dayCellClicked = new EventEmitter();
        this.dayCellKeyDown = new EventEmitter();
        this.prevMonthId = MonthId.prev;
        this.currMonthId = MonthId.curr;
        this.nextMonthId = MonthId.next;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    DayViewComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty(OPTS)) {
            this.opts = changes[OPTS].currentValue;
        }
        if (changes.hasOwnProperty(DATES)) {
            this.dates = changes[DATES].currentValue;
        }
        if (changes.hasOwnProperty(WEEK_DAYS)) {
            this.weekDays = changes[WEEK_DAYS].currentValue;
        }
        if (changes.hasOwnProperty(SELECTED_DATE)) {
            this.selectedDate = changes[SELECTED_DATE].currentValue;
        }
        if (changes.hasOwnProperty(SELECTED_DATE_RANGE)) {
            this.selectedDateRange = changes[SELECTED_DATE_RANGE].currentValue;
        }
    };
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    DayViewComponent.prototype.onDayCellClicked = /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    function (event, cell) {
        event.stopPropagation();
        if (cell.disabled) {
            return;
        }
        this.dayCellClicked.emit(cell);
    };
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    DayViewComponent.prototype.onDayCellKeyDown = /**
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
                this.onDayCellClicked(event, cell);
            }
            else if (this.opts.moveFocusByArrowKeys) {
                this.dayCellKeyDown.emit(event);
            }
        }
    };
    /**
     * @param {?} cell
     * @return {?}
     */
    DayViewComponent.prototype.onDayCellMouseEnter = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        var e_1, _a, e_2, _b;
        if (this.utilService.isInitializedDate(this.selectedDateRange.begin) && !this.utilService.isInitializedDate(this.selectedDateRange.end)) {
            try {
                for (var _c = tslib_1.__values(this.dates), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var w = _d.value;
                    try {
                        for (var _e = tslib_1.__values(w.week), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var day = _f.value;
                            day.range = this.utilService.isDateSameOrEarlier(this.selectedDateRange.begin, day.dateObj) && this.utilService.isDateSameOrEarlier(day.dateObj, cell.dateObj);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    /**
     * @return {?}
     */
    DayViewComponent.prototype.onDayCellMouseLeave = /**
     * @return {?}
     */
    function () {
        var e_3, _a, e_4, _b;
        try {
            for (var _c = tslib_1.__values(this.dates), _d = _c.next(); !_d.done; _d = _c.next()) {
                var w = _d.value;
                try {
                    for (var _e = tslib_1.__values(w.week), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var day = _f.value;
                        day.range = false;
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DayViewComponent.prototype.isDateInRange = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.utilService.isDateInRange(date, this.selectedDateRange);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DayViewComponent.prototype.isDateSame = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.utilService.isDateSame(this.selectedDate, date);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DayViewComponent.prototype.isDateRangeBeginOrEndSame = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.utilService.isDateRangeBeginOrEndSame(this.selectedDateRange, date);
    };
    DayViewComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-day-view",
                    template: "<table class=\"myDpCalTable\" [ngClass]=\"{'ng-myrtl': opts.rtl}\">\n  <thead>\n    <tr>\n      <th class=\"myDpWeekDayTitle myDpWeekDayTitleWeekNbr\" *ngIf=\"opts.showWeekNumbers && opts.firstDayOfWeek==='mo'\">#</th>\n      <th class=\"myDpWeekDayTitle\" scope=\"col\" *ngFor=\"let d of weekDays\">{{d}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let w of dates\">\n      <td class=\"myDpDaycellWeekNbr\" *ngIf=\"opts.showWeekNumbers && opts.firstDayOfWeek==='mo'\">{{w.weekNbr}}</td>\n      <td id=\"d_{{d.row}}_{{d.col}}\" class=\"d_{{d.row}}_{{d.col}} myDpDaycell\" *ngFor=\"let d of w.week\"\n          [ngClass]=\"{'myDpRangeColor': isDateInRange(d.dateObj) || d.range,\n                'myDpPrevMonth': d.cmo === prevMonthId,\n                'myDpCurrMonth':d.cmo === currMonthId && !d.disabled,\n                'myDpNextMonth': d.cmo === nextMonthId,\n                'myDpSelectedDay':!this.opts.dateRange && isDateSame(d.dateObj) || this.opts.dateRange && isDateRangeBeginOrEndSame(d.dateObj),\n                'myDpDisabled': d.disabled,\n                'myDpTableSingleDay': !d.disabled}\"\n          (click)=\"onDayCellClicked($event, d)\" (keydown)=\"onDayCellKeyDown($event, d)\"\n          (mouseenter)=\"onDayCellMouseEnter(d)\" (mouseleave)=\"onDayCellMouseLeave()\" [attr.tabindex]=\"!d.disabled ? 0 : -1\">\n        <span *ngIf=\"d.markedDate.marked\" class=\"myDpMarkDate\" [ngStyle]=\"{'border-top': '8px solid ' + d.markedDate.color}\"></span>\n        <span  class=\"myDpDayValue\" [ngClass]=\"{'myDpMarkCurrDay': d.currDay && opts.markCurrentDay, 'myDpDimDay': d.highlight && (d.cmo===prevMonthId || d.cmo===nextMonthId || d.disabled), 'myDpHighlight': d.highlight}\">{{d.dateObj.day}}</span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n",
                    providers: [UtilService],
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    DayViewComponent.ctorParameters = function () { return [
        { type: UtilService }
    ]; };
    DayViewComponent.propDecorators = {
        opts: [{ type: Input }],
        dates: [{ type: Input }],
        weekDays: [{ type: Input }],
        selectedDate: [{ type: Input }],
        selectedDateRange: [{ type: Input }],
        dayCellClicked: [{ type: Output }],
        dayCellKeyDown: [{ type: Output }]
    };
    return DayViewComponent;
}());
export { DayViewComponent };
if (false) {
    /** @type {?} */
    DayViewComponent.prototype.opts;
    /** @type {?} */
    DayViewComponent.prototype.dates;
    /** @type {?} */
    DayViewComponent.prototype.weekDays;
    /** @type {?} */
    DayViewComponent.prototype.selectedDate;
    /** @type {?} */
    DayViewComponent.prototype.selectedDateRange;
    /** @type {?} */
    DayViewComponent.prototype.dayCellClicked;
    /** @type {?} */
    DayViewComponent.prototype.dayCellKeyDown;
    /** @type {?} */
    DayViewComponent.prototype.prevMonthId;
    /** @type {?} */
    DayViewComponent.prototype.currMonthId;
    /** @type {?} */
    DayViewComponent.prototype.nextMonthId;
    /**
     * @type {?}
     * @private
     */
    DayViewComponent.prototype.utilService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1teWRhdGVwaWNrZXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kYXktdmlldy9kYXktdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLGlCQUFpQixFQUFnQixNQUFNLGVBQWUsQ0FBQztBQU1sSCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDN0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFFckc7SUFvQkUsMEJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBUGxDLG1CQUFjLEdBQWlDLElBQUksWUFBWSxFQUFrQixDQUFDO1FBQ2xGLG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFdEUsZ0JBQVcsR0FBVyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ25DLGdCQUFXLEdBQVcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNuQyxnQkFBVyxHQUFXLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFFYSxDQUFDOzs7OztJQUVqRCxzQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQztTQUN4QztRQUNELElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxL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dXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIFNpbXBsZUNoYW5nZXN9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0lNeUNhbGVuZGFyRGF5fSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9teS1jYWxlbmRhci1kYXkuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeURhdGV9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL215LWRhdGUuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeURhdGVSYW5nZX0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvbXktZGF0ZS1yYW5nZS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15T3B0aW9uc30gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvbXktb3B0aW9ucy5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15V2Vla30gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvbXktd2Vlay5pbnRlcmZhY2VcIjtcbmltcG9ydCB7VXRpbFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hbmd1bGFyLW15ZGF0ZXBpY2tlci51dGlsLnNlcnZpY2VcIjtcbmltcG9ydCB7S2V5Q29kZX0gZnJvbSBcIi4uLy4uL2VudW1zL2tleS1jb2RlLmVudW1cIjtcbmltcG9ydCB7TW9udGhJZH0gZnJvbSBcIi4uLy4uL2VudW1zL21vbnRoLWlkLmVudW1cIjtcbmltcG9ydCB7T1BUUywgREFURVMsIFdFRUtfREFZUywgU0VMRUNURURfREFURSwgU0VMRUNURURfREFURV9SQU5HRX0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpYi1kYXktdmlld1wiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2RheS12aWV3LmNvbXBvbmVudC5odG1sXCIsXG4gIHByb3ZpZGVyczogW1V0aWxTZXJ2aWNlXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEYXlWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgb3B0czogSU15T3B0aW9ucztcbiAgQElucHV0KCkgZGF0ZXM6IEFycmF5PElNeVdlZWs+O1xuICBASW5wdXQoKSB3ZWVrRGF5czogQXJyYXk8c3RyaW5nPjtcbiAgQElucHV0KCkgc2VsZWN0ZWREYXRlOiBJTXlEYXRlO1xuICBASW5wdXQoKSBzZWxlY3RlZERhdGVSYW5nZTogSU15RGF0ZVJhbmdlO1xuXG4gIEBPdXRwdXQoKSBkYXlDZWxsQ2xpY2tlZDogRXZlbnRFbWl0dGVyPElNeUNhbGVuZGFyRGF5PiA9IG5ldyBFdmVudEVtaXR0ZXI8SU15Q2FsZW5kYXJEYXk+KCk7XG4gIEBPdXRwdXQoKSBkYXlDZWxsS2V5RG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcmV2TW9udGhJZDogbnVtYmVyID0gTW9udGhJZC5wcmV2O1xuICBjdXJyTW9udGhJZDogbnVtYmVyID0gTW9udGhJZC5jdXJyO1xuICBuZXh0TW9udGhJZDogbnVtYmVyID0gTW9udGhJZC5uZXh0O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXRpbFNlcnZpY2U6IFV0aWxTZXJ2aWNlKSB7IH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoT1BUUykpIHtcbiAgICAgIHRoaXMub3B0cyA9IGNoYW5nZXNbT1BUU10uY3VycmVudFZhbHVlO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShEQVRFUykpIHtcbiAgICAgIHRoaXMuZGF0ZXMgPSBjaGFuZ2VzW0RBVEVTXS5jdXJyZW50VmFsdWU7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KFdFRUtfREFZUykpIHtcbiAgICAgIHRoaXMud2Vla0RheXMgPSBjaGFuZ2VzW1dFRUtfREFZU10uY3VycmVudFZhbHVlO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShTRUxFQ1RFRF9EQVRFKSkge1xuICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBjaGFuZ2VzW1NFTEVDVEVEX0RBVEVdLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoU0VMRUNURURfREFURV9SQU5HRSkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlUmFuZ2UgPSBjaGFuZ2VzW1NFTEVDVEVEX0RBVEVfUkFOR0VdLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBvbkRheUNlbGxDbGlja2VkKGV2ZW50OiBhbnksIGNlbGw6IElNeUNhbGVuZGFyRGF5KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAoY2VsbC5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGF5Q2VsbENsaWNrZWQuZW1pdChjZWxsKTtcbiAgfVxuXG4gIG9uRGF5Q2VsbEtleURvd24oZXZlbnQ6IGFueSwgY2VsbDogSU15Q2FsZW5kYXJEYXkpIHtcbiAgICBjb25zdCBrZXlDb2RlOiBudW1iZXIgPSB0aGlzLnV0aWxTZXJ2aWNlLmdldEtleUNvZGVGcm9tRXZlbnQoZXZlbnQpO1xuICAgIGlmIChrZXlDb2RlICE9PSBLZXlDb2RlLnRhYikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKGtleUNvZGUgPT09IEtleUNvZGUuZW50ZXIgfHwga2V5Q29kZSA9PT0gS2V5Q29kZS5zcGFjZSkge1xuICAgICAgICB0aGlzLm9uRGF5Q2VsbENsaWNrZWQoZXZlbnQsIGNlbGwpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGhpcy5vcHRzLm1vdmVGb2N1c0J5QXJyb3dLZXlzKSB7XG4gICAgICAgIHRoaXMuZGF5Q2VsbEtleURvd24uZW1pdChldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkRheUNlbGxNb3VzZUVudGVyKGNlbGw6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnV0aWxTZXJ2aWNlLmlzSW5pdGlhbGl6ZWREYXRlKHRoaXMuc2VsZWN0ZWREYXRlUmFuZ2UuYmVnaW4pICYmICF0aGlzLnV0aWxTZXJ2aWNlLmlzSW5pdGlhbGl6ZWREYXRlKHRoaXMuc2VsZWN0ZWREYXRlUmFuZ2UuZW5kKSkge1xuICAgICAgZm9yIChjb25zdCB3IG9mIHRoaXMuZGF0ZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBkYXkgb2Ygdy53ZWVrKSB7XG4gICAgICAgICAgZGF5LnJhbmdlID0gdGhpcy51dGlsU2VydmljZS5pc0RhdGVTYW1lT3JFYXJsaWVyKHRoaXMuc2VsZWN0ZWREYXRlUmFuZ2UuYmVnaW4sIGRheS5kYXRlT2JqKSAmJiB0aGlzLnV0aWxTZXJ2aWNlLmlzRGF0ZVNhbWVPckVhcmxpZXIoZGF5LmRhdGVPYmosIGNlbGwuZGF0ZU9iaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkRheUNlbGxNb3VzZUxlYXZlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgdyBvZiB0aGlzLmRhdGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGRheSBvZiB3LndlZWspIHtcbiAgICAgICAgZGF5LnJhbmdlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNEYXRlSW5SYW5nZShkYXRlOiBJTXlEYXRlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudXRpbFNlcnZpY2UuaXNEYXRlSW5SYW5nZShkYXRlLCB0aGlzLnNlbGVjdGVkRGF0ZVJhbmdlKTtcbiAgfVxuXG4gIGlzRGF0ZVNhbWUoZGF0ZTogSU15RGF0ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnV0aWxTZXJ2aWNlLmlzRGF0ZVNhbWUodGhpcy5zZWxlY3RlZERhdGUsIGRhdGUpO1xuICB9XG5cbiAgaXNEYXRlUmFuZ2VCZWdpbk9yRW5kU2FtZShkYXRlOiBJTXlEYXRlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudXRpbFNlcnZpY2UuaXNEYXRlUmFuZ2VCZWdpbk9yRW5kU2FtZSh0aGlzLnNlbGVjdGVkRGF0ZVJhbmdlLCBkYXRlKTtcbiAgfVxufVxuIl19