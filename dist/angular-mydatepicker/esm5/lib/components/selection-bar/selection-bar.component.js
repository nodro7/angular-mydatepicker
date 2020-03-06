/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";
import { OPTS, YEARS_DURATION, VISIBLE_MONTH, SELECT_MONTH, SELECT_YEAR, PREV_VIEW_DISABLED, NEXT_VIEW_DISABLED } from "../../constants/constants";
var SelectionBarComponent = /** @class */ (function () {
    function SelectionBarComponent() {
        this.prevNavigateBtnClicked = new EventEmitter();
        this.nextNavigateBtnClicked = new EventEmitter();
        this.monthViewBtnClicked = new EventEmitter();
        this.yearViewBtnClicked = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectionBarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty(OPTS)) {
            this.opts = changes[OPTS].currentValue;
        }
        if (changes.hasOwnProperty(YEARS_DURATION)) {
            this.yearsDuration = changes[YEARS_DURATION].currentValue;
        }
        if (changes.hasOwnProperty(VISIBLE_MONTH)) {
            this.visibleMonth = changes[VISIBLE_MONTH].currentValue;
        }
        if (changes.hasOwnProperty(SELECT_MONTH)) {
            this.selectMonth = changes[SELECT_MONTH].currentValue;
        }
        if (changes.hasOwnProperty(SELECT_YEAR)) {
            this.selectYear = changes[SELECT_YEAR].currentValue;
        }
        if (changes.hasOwnProperty(PREV_VIEW_DISABLED)) {
            this.prevViewDisabled = changes[PREV_VIEW_DISABLED].currentValue;
        }
        if (changes.hasOwnProperty(NEXT_VIEW_DISABLED)) {
            this.nextViewDisabled = changes[NEXT_VIEW_DISABLED].currentValue;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectionBarComponent.prototype.onPrevNavigateBtnClicked = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.opts.rtl ? this.nextNavigateBtnClicked.emit() : this.prevNavigateBtnClicked.emit();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectionBarComponent.prototype.onNextNavigateBtnClicked = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.opts.rtl ? this.prevNavigateBtnClicked.emit() : this.nextNavigateBtnClicked.emit();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectionBarComponent.prototype.onMonthViewBtnClicked = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.monthViewBtnClicked.emit();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectionBarComponent.prototype.onYearViewBtnClicked = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.yearViewBtnClicked.emit();
    };
    SelectionBarComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-selection-bar",
                    template: "<div class=\"monthYearSelBar\">\n  <div class=\"myDpPrevBtn\">\n    <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelPrevMonth\" class=\"myDpHeaderBtn myDpIcon myDpIconLeftArrow myDpHeaderBtnEnabled\" (click)=\"onPrevNavigateBtnClicked($event)\" tabindex=\"{{!prevViewDisabled ? '0':'-1'}}\"  [disabled]=\"prevViewDisabled\" [ngClass]=\"{'myDpHeaderBtnDisabled': prevViewDisabled}\"></button>\n  </div>\n  <div class=\"myDpMonthYearText\">\n    <button type=\"button\" class=\"myDpHeaderBtn myDpMonthBtn\" *ngIf=\"!selectYear\" (click)=\"opts.monthSelector && onMonthViewBtnClicked($event)\" tabindex=\"{{opts.monthSelector ? '0':'-1'}}\" [ngClass]=\"{'myDpMonthLabel': opts.monthSelector, 'myDpHeaderLabelBtnNotEdit': !opts.monthSelector}\">{{visibleMonth.monthTxt}}</button>\n    <button type=\"button\" class=\"myDpHeaderBtn myDpYearBtn\" (click)=\"opts.yearSelector && onYearViewBtnClicked($event)\" tabindex=\"{{opts.yearSelector ? '0':'-1'}}\" [ngClass]=\"{'myDpYearLabel': opts.yearSelector, 'myDpHeaderLabelBtnNotEdit': !opts.yearSelector}\">{{!selectYear ? visibleMonth.year : yearsDuration}}</button>\n  </div>\n  <div class=\"myDpNextBtn\">\n    <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelNextMonth\" class=\"myDpHeaderBtn myDpIcon myDpIconRightArrow myDpHeaderBtnEnabled\" (click)=\"onNextNavigateBtnClicked($event)\" tabindex=\"{{!nextViewDisabled ? '0':'-1'}}\" [disabled]=\"nextViewDisabled\" [ngClass]=\"{'myDpHeaderBtnDisabled': nextViewDisabled}\"></button>\n  </div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    SelectionBarComponent.ctorParameters = function () { return []; };
    SelectionBarComponent.propDecorators = {
        opts: [{ type: Input }],
        yearsDuration: [{ type: Input }],
        visibleMonth: [{ type: Input }],
        selectMonth: [{ type: Input }],
        selectYear: [{ type: Input }],
        prevViewDisabled: [{ type: Input }],
        nextViewDisabled: [{ type: Input }],
        prevNavigateBtnClicked: [{ type: Output }],
        nextNavigateBtnClicked: [{ type: Output }],
        monthViewBtnClicked: [{ type: Output }],
        yearViewBtnClicked: [{ type: Output }]
    };
    return SelectionBarComponent;
}());
export { SelectionBarComponent };
if (false) {
    /** @type {?} */
    SelectionBarComponent.prototype.opts;
    /** @type {?} */
    SelectionBarComponent.prototype.yearsDuration;
    /** @type {?} */
    SelectionBarComponent.prototype.visibleMonth;
    /** @type {?} */
    SelectionBarComponent.prototype.selectMonth;
    /** @type {?} */
    SelectionBarComponent.prototype.selectYear;
    /** @type {?} */
    SelectionBarComponent.prototype.prevViewDisabled;
    /** @type {?} */
    SelectionBarComponent.prototype.nextViewDisabled;
    /** @type {?} */
    SelectionBarComponent.prototype.prevNavigateBtnClicked;
    /** @type {?} */
    SelectionBarComponent.prototype.nextNavigateBtnClicked;
    /** @type {?} */
    SelectionBarComponent.prototype.monthViewBtnClicked;
    /** @type {?} */
    SelectionBarComponent.prototype.yearViewBtnClicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW15ZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NlbGVjdGlvbi1iYXIvc2VsZWN0aW9uLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsaUJBQWlCLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBR2xILE9BQU8sRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFDLE1BQU0sMkJBQTJCLENBQUE7QUFFaEo7SUFtQkU7UUFMVSwyQkFBc0IsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN0RSwyQkFBc0IsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN0RSx3QkFBbUIsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNuRSx1QkFBa0IsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUU1RCxDQUFDOzs7OztJQUVqQiwyQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQztTQUN4QztRQUNELElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUM7U0FDM0Q7UUFDRCxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQztTQUN2RDtRQUNELElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUM7U0FDckQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsWUFBWSxDQUFDO1NBQ2xFO1FBQ0QsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFlBQVksQ0FBQztTQUNsRTtJQUNILENBQUM7Ozs7O0lBRUQsd0RBQXdCOzs7O0lBQXhCLFVBQXlCLEtBQVU7UUFDakMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxRixDQUFDOzs7OztJQUVELHdEQUF3Qjs7OztJQUF4QixVQUF5QixLQUFVO1FBQ2pDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUYsQ0FBQzs7Ozs7SUFFRCxxREFBcUI7Ozs7SUFBckIsVUFBc0IsS0FBVTtRQUM5QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsb0RBQW9COzs7O0lBQXBCLFVBQXFCLEtBQVU7UUFDN0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDOztnQkEvREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLDIvQ0FBNkM7b0JBQzdDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7Ozs7dUJBRUUsS0FBSztnQ0FDTCxLQUFLOytCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLO21DQUNMLEtBQUs7bUNBQ0wsS0FBSzt5Q0FFTCxNQUFNO3lDQUNOLE1BQU07c0NBQ04sTUFBTTtxQ0FDTixNQUFNOztJQStDVCw0QkFBQztDQUFBLEFBaEVELElBZ0VDO1NBM0RZLHFCQUFxQjs7O0lBQ2hDLHFDQUEwQjs7SUFDMUIsOENBQStCOztJQUMvQiw2Q0FBZ0M7O0lBQ2hDLDRDQUE4Qjs7SUFDOUIsMkNBQTZCOztJQUM3QixpREFBbUM7O0lBQ25DLGlEQUFtQzs7SUFFbkMsdURBQWdGOztJQUNoRix1REFBZ0Y7O0lBQ2hGLG9EQUE2RTs7SUFDN0UsbURBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgU2ltcGxlQ2hhbmdlc30gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SU15TW9udGh9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL215LW1vbnRoLmludGVyZmFjZVwiO1xuaW1wb3J0IHtJTXlPcHRpb25zfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9teS1vcHRpb25zLmludGVyZmFjZVwiO1xuaW1wb3J0IHtPUFRTLCBZRUFSU19EVVJBVElPTiwgVklTSUJMRV9NT05USCwgU0VMRUNUX01PTlRILCBTRUxFQ1RfWUVBUiwgUFJFVl9WSUVXX0RJU0FCTEVELCBORVhUX1ZJRVdfRElTQUJMRUR9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzXCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpYi1zZWxlY3Rpb24tYmFyXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vc2VsZWN0aW9uLWJhci5jb21wb25lbnQuaHRtbFwiLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbkJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG9wdHM6IElNeU9wdGlvbnM7XG4gIEBJbnB1dCgpIHllYXJzRHVyYXRpb246IHN0cmluZztcbiAgQElucHV0KCkgdmlzaWJsZU1vbnRoOiBJTXlNb250aDtcbiAgQElucHV0KCkgc2VsZWN0TW9udGg6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlbGVjdFllYXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHByZXZWaWV3RGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5leHRWaWV3RGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHByZXZOYXZpZ2F0ZUJ0bkNsaWNrZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIG5leHROYXZpZ2F0ZUJ0bkNsaWNrZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIG1vbnRoVmlld0J0bkNsaWNrZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHllYXJWaWV3QnRuQ2xpY2tlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KE9QVFMpKSB7XG4gICAgICB0aGlzLm9wdHMgPSBjaGFuZ2VzW09QVFNdLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoWUVBUlNfRFVSQVRJT04pKSB7XG4gICAgICB0aGlzLnllYXJzRHVyYXRpb24gPSBjaGFuZ2VzW1lFQVJTX0RVUkFUSU9OXS5jdXJyZW50VmFsdWU7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KFZJU0lCTEVfTU9OVEgpKSB7XG4gICAgICB0aGlzLnZpc2libGVNb250aCA9IGNoYW5nZXNbVklTSUJMRV9NT05USF0uY3VycmVudFZhbHVlO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShTRUxFQ1RfTU9OVEgpKSB7XG4gICAgICB0aGlzLnNlbGVjdE1vbnRoID0gY2hhbmdlc1tTRUxFQ1RfTU9OVEhdLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoU0VMRUNUX1lFQVIpKSB7XG4gICAgICB0aGlzLnNlbGVjdFllYXIgPSBjaGFuZ2VzW1NFTEVDVF9ZRUFSXS5jdXJyZW50VmFsdWU7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KFBSRVZfVklFV19ESVNBQkxFRCkpIHtcbiAgICAgIHRoaXMucHJldlZpZXdEaXNhYmxlZCA9IGNoYW5nZXNbUFJFVl9WSUVXX0RJU0FCTEVEXS5jdXJyZW50VmFsdWU7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KE5FWFRfVklFV19ESVNBQkxFRCkpIHtcbiAgICAgIHRoaXMubmV4dFZpZXdEaXNhYmxlZCA9IGNoYW5nZXNbTkVYVF9WSUVXX0RJU0FCTEVEXS5jdXJyZW50VmFsdWU7XG4gICAgfVxuICB9XG5cbiAgb25QcmV2TmF2aWdhdGVCdG5DbGlja2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm9wdHMucnRsID8gdGhpcy5uZXh0TmF2aWdhdGVCdG5DbGlja2VkLmVtaXQoKSA6IHRoaXMucHJldk5hdmlnYXRlQnRuQ2xpY2tlZC5lbWl0KCk7XG4gIH1cblxuICBvbk5leHROYXZpZ2F0ZUJ0bkNsaWNrZWQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMub3B0cy5ydGwgPyB0aGlzLnByZXZOYXZpZ2F0ZUJ0bkNsaWNrZWQuZW1pdCgpIDogdGhpcy5uZXh0TmF2aWdhdGVCdG5DbGlja2VkLmVtaXQoKTtcbiAgfVxuXG4gIG9uTW9udGhWaWV3QnRuQ2xpY2tlZChldmVudDogYW55KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5tb250aFZpZXdCdG5DbGlja2VkLmVtaXQoKTtcbiAgfVxuXG4gIG9uWWVhclZpZXdCdG5DbGlja2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnllYXJWaWV3QnRuQ2xpY2tlZC5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==