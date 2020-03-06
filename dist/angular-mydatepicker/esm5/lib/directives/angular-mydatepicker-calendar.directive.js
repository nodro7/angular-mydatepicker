/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from "@angular/core";
var AngularMyDatePickerCalendarDirective = /** @class */ (function () {
    function AngularMyDatePickerCalendarDirective(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    AngularMyDatePickerCalendarDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _a = this.libAngularMyDatePickerCalendar, inline = _a.inline, selectorHeight = _a.selectorHeight, selectorWidth = _a.selectorWidth, selectorPos = _a.selectorPos;
        var style = this.el.nativeElement.style;
        style.height = selectorHeight;
        style.width = selectorWidth;
        style.top = !inline ? selectorPos.top : "0";
        style.left = !inline ? selectorPos.left : "0";
    };
    AngularMyDatePickerCalendarDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[libAngularMyDatePickerCalendar]"
                },] }
    ];
    /** @nocollapse */
    AngularMyDatePickerCalendarDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    AngularMyDatePickerCalendarDirective.propDecorators = {
        libAngularMyDatePickerCalendar: [{ type: Input }]
    };
    return AngularMyDatePickerCalendarDirective;
}());
export { AngularMyDatePickerCalendarDirective };
if (false) {
    /** @type {?} */
    AngularMyDatePickerCalendarDirective.prototype.libAngularMyDatePickerCalendar;
    /**
     * @type {?}
     * @private
     */
    AngularMyDatePickerCalendarDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1teWRhdGVwaWNrZXItY2FsZW5kYXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1teWRhdGVwaWNrZXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9hbmd1bGFyLW15ZGF0ZXBpY2tlci1jYWxlbmRhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFpQixLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFMUU7SUFNRSw4Q0FBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBSSxDQUFDOzs7O0lBRXZDLDhEQUFlOzs7SUFBZjtRQUNRLElBQUEsd0NBQTBGLEVBQXpGLGtCQUFNLEVBQUUsa0NBQWMsRUFBRSxnQ0FBYSxFQUFFLDRCQUFrRDtRQUN6RixJQUFBLG1DQUFLO1FBRVosS0FBSyxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUM7UUFDOUIsS0FBSyxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7UUFDNUIsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzVDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNoRCxDQUFDOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQ0FBa0M7aUJBQzdDOzs7O2dCQUprQixVQUFVOzs7aURBTTFCLEtBQUs7O0lBYVIsMkNBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWRZLG9DQUFvQzs7O0lBQy9DLDhFQUE2Qzs7Ozs7SUFFakMsa0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiW2xpYkFuZ3VsYXJNeURhdGVQaWNrZXJDYWxlbmRhcl1cIlxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyTXlEYXRlUGlja2VyQ2FsZW5kYXJEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgbGliQW5ndWxhck15RGF0ZVBpY2tlckNhbGVuZGFyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHtpbmxpbmUsIHNlbGVjdG9ySGVpZ2h0LCBzZWxlY3RvcldpZHRoLCBzZWxlY3RvclBvc30gPSB0aGlzLmxpYkFuZ3VsYXJNeURhdGVQaWNrZXJDYWxlbmRhcjtcbiAgICBjb25zdCB7c3R5bGV9ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIFxuICAgIHN0eWxlLmhlaWdodCA9IHNlbGVjdG9ySGVpZ2h0O1xuICAgIHN0eWxlLndpZHRoID0gc2VsZWN0b3JXaWR0aDtcbiAgICBzdHlsZS50b3AgPSAhaW5saW5lID8gc2VsZWN0b3JQb3MudG9wIDogXCIwXCI7XG4gICAgc3R5bGUubGVmdCA9ICFpbmxpbmUgPyBzZWxlY3RvclBvcy5sZWZ0IDogXCIwXCI7XG4gIH1cbn1cbiJdfQ==