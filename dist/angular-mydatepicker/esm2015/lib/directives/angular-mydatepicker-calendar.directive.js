/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from "@angular/core";
export class AngularMyDatePickerCalendarDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const { inline, selectorHeight, selectorWidth, selectorPos } = this.libAngularMyDatePickerCalendar;
        const { style } = this.el.nativeElement;
        style.height = selectorHeight;
        style.width = selectorWidth;
        style.top = !inline ? selectorPos.top : "0";
        style.left = !inline ? selectorPos.left : "0";
    }
}
AngularMyDatePickerCalendarDirective.decorators = [
    { type: Directive, args: [{
                selector: "[libAngularMyDatePickerCalendar]"
            },] }
];
/** @nocollapse */
AngularMyDatePickerCalendarDirective.ctorParameters = () => [
    { type: ElementRef }
];
AngularMyDatePickerCalendarDirective.propDecorators = {
    libAngularMyDatePickerCalendar: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AngularMyDatePickerCalendarDirective.prototype.libAngularMyDatePickerCalendar;
    /**
     * @type {?}
     * @private
     */
    AngularMyDatePickerCalendarDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1teWRhdGVwaWNrZXItY2FsZW5kYXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1teWRhdGVwaWNrZXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9hbmd1bGFyLW15ZGF0ZXBpY2tlci1jYWxlbmRhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFpQixLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFLMUUsTUFBTSxPQUFPLG9DQUFvQzs7OztJQUcvQyxZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFJLENBQUM7Ozs7SUFFdkMsZUFBZTtjQUNQLEVBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFDLEdBQUcsSUFBSSxDQUFDLDhCQUE4QjtjQUMxRixFQUFDLEtBQUssRUFBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTtRQUVyQyxLQUFLLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztRQUM5QixLQUFLLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztRQUM1QixLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDNUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ2hELENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtDQUFrQzthQUM3Qzs7OztZQUprQixVQUFVOzs7NkNBTTFCLEtBQUs7Ozs7SUFBTiw4RUFBNkM7Ozs7O0lBRWpDLGtEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcIltsaWJBbmd1bGFyTXlEYXRlUGlja2VyQ2FsZW5kYXJdXCJcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhck15RGF0ZVBpY2tlckNhbGVuZGFyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGxpYkFuZ3VsYXJNeURhdGVQaWNrZXJDYWxlbmRhcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7aW5saW5lLCBzZWxlY3RvckhlaWdodCwgc2VsZWN0b3JXaWR0aCwgc2VsZWN0b3JQb3N9ID0gdGhpcy5saWJBbmd1bGFyTXlEYXRlUGlja2VyQ2FsZW5kYXI7XG4gICAgY29uc3Qge3N0eWxlfSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBcbiAgICBzdHlsZS5oZWlnaHQgPSBzZWxlY3RvckhlaWdodDtcbiAgICBzdHlsZS53aWR0aCA9IHNlbGVjdG9yV2lkdGg7XG4gICAgc3R5bGUudG9wID0gIWlubGluZSA/IHNlbGVjdG9yUG9zLnRvcCA6IFwiMFwiO1xuICAgIHN0eWxlLmxlZnQgPSAhaW5saW5lID8gc2VsZWN0b3JQb3MubGVmdCA6IFwiMFwiO1xuICB9XG59XG4iXX0=