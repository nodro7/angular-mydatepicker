/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";
import { OPTS, YEARS_DURATION, VISIBLE_MONTH, SELECT_MONTH, SELECT_YEAR, PREV_VIEW_DISABLED, NEXT_VIEW_DISABLED } from "../../constants/constants";
export class SelectionBarComponent {
    constructor() {
        this.prevNavigateBtnClicked = new EventEmitter();
        this.nextNavigateBtnClicked = new EventEmitter();
        this.monthViewBtnClicked = new EventEmitter();
        this.yearViewBtnClicked = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPrevNavigateBtnClicked(event) {
        event.stopPropagation();
        this.opts.rtl ? this.nextNavigateBtnClicked.emit() : this.prevNavigateBtnClicked.emit();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onNextNavigateBtnClicked(event) {
        event.stopPropagation();
        this.opts.rtl ? this.prevNavigateBtnClicked.emit() : this.nextNavigateBtnClicked.emit();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMonthViewBtnClicked(event) {
        event.stopPropagation();
        this.monthViewBtnClicked.emit();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onYearViewBtnClicked(event) {
        event.stopPropagation();
        this.yearViewBtnClicked.emit();
    }
}
SelectionBarComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-selection-bar",
                template: "<div class=\"monthYearSelBar\">\n  <div class=\"myDpPrevBtn\">\n    <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelPrevMonth\" class=\"myDpHeaderBtn myDpIcon myDpIconLeftArrow myDpHeaderBtnEnabled\" (click)=\"onPrevNavigateBtnClicked($event)\" tabindex=\"{{!prevViewDisabled ? '0':'-1'}}\"  [disabled]=\"prevViewDisabled\" [ngClass]=\"{'myDpHeaderBtnDisabled': prevViewDisabled}\"></button>\n  </div>\n  <div class=\"myDpMonthYearText\">\n    <button type=\"button\" class=\"myDpHeaderBtn myDpMonthBtn\" *ngIf=\"!selectYear\" (click)=\"opts.monthSelector && onMonthViewBtnClicked($event)\" tabindex=\"{{opts.monthSelector ? '0':'-1'}}\" [ngClass]=\"{'myDpMonthLabel': opts.monthSelector, 'myDpHeaderLabelBtnNotEdit': !opts.monthSelector}\">{{visibleMonth.monthTxt}}</button>\n    <button type=\"button\" class=\"myDpHeaderBtn myDpYearBtn\" (click)=\"opts.yearSelector && onYearViewBtnClicked($event)\" tabindex=\"{{opts.yearSelector ? '0':'-1'}}\" [ngClass]=\"{'myDpYearLabel': opts.yearSelector, 'myDpHeaderLabelBtnNotEdit': !opts.yearSelector}\">{{!selectYear ? visibleMonth.year : yearsDuration}}</button>\n  </div>\n  <div class=\"myDpNextBtn\">\n    <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelNextMonth\" class=\"myDpHeaderBtn myDpIcon myDpIconRightArrow myDpHeaderBtnEnabled\" (click)=\"onNextNavigateBtnClicked($event)\" tabindex=\"{{!nextViewDisabled ? '0':'-1'}}\" [disabled]=\"nextViewDisabled\" [ngClass]=\"{'myDpHeaderBtnDisabled': nextViewDisabled}\"></button>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
SelectionBarComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW15ZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NlbGVjdGlvbi1iYXIvc2VsZWN0aW9uLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsaUJBQWlCLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBR2xILE9BQU8sRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFDLE1BQU0sMkJBQTJCLENBQUE7QUFPaEosTUFBTSxPQUFPLHFCQUFxQjtJQWNoQztRQUxVLDJCQUFzQixHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3RFLDJCQUFzQixHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3RFLHdCQUFtQixHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ25FLHVCQUFrQixHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO0lBRTVELENBQUM7Ozs7O0lBRWpCLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQztTQUMzRDtRQUNELElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxZQUFZLENBQUM7U0FDekQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQztTQUNyRDtRQUNELElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxZQUFZLENBQUM7U0FDbEU7UUFDRCxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsWUFBWSxDQUFDO1NBQ2xFO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx3QkFBd0IsQ0FBQyxLQUFVO1FBQ2pDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUYsQ0FBQzs7Ozs7SUFFRCx3QkFBd0IsQ0FBQyxLQUFVO1FBQ2pDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUYsQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxLQUFVO1FBQzlCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxLQUFVO1FBQzdCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQzs7O1lBL0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QiwyL0NBQTZDO2dCQUM3QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7Ozs7bUJBRUUsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7K0JBQ0wsS0FBSztxQ0FFTCxNQUFNO3FDQUNOLE1BQU07a0NBQ04sTUFBTTtpQ0FDTixNQUFNOzs7O0lBWFAscUNBQTBCOztJQUMxQiw4Q0FBK0I7O0lBQy9CLDZDQUFnQzs7SUFDaEMsNENBQThCOztJQUM5QiwyQ0FBNkI7O0lBQzdCLGlEQUFtQzs7SUFDbkMsaURBQW1DOztJQUVuQyx1REFBZ0Y7O0lBQ2hGLHVEQUFnRjs7SUFDaEYsb0RBQTZFOztJQUM3RSxtREFBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBTaW1wbGVDaGFuZ2VzfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtJTXlNb250aH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvbXktbW9udGguaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeU9wdGlvbnN9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL215LW9wdGlvbnMuaW50ZXJmYWNlXCI7XG5pbXBvcnQge09QVFMsIFlFQVJTX0RVUkFUSU9OLCBWSVNJQkxFX01PTlRILCBTRUxFQ1RfTU9OVEgsIFNFTEVDVF9ZRUFSLCBQUkVWX1ZJRVdfRElTQUJMRUQsIE5FWFRfVklFV19ESVNBQkxFRH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9jb25zdGFudHNcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGliLXNlbGVjdGlvbi1iYXJcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9zZWxlY3Rpb24tYmFyLmNvbXBvbmVudC5odG1sXCIsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgb3B0czogSU15T3B0aW9ucztcbiAgQElucHV0KCkgeWVhcnNEdXJhdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSB2aXNpYmxlTW9udGg6IElNeU1vbnRoO1xuICBASW5wdXQoKSBzZWxlY3RNb250aDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2VsZWN0WWVhcjogYm9vbGVhbjtcbiAgQElucHV0KCkgcHJldlZpZXdEaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbmV4dFZpZXdEaXNhYmxlZDogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgcHJldk5hdmlnYXRlQnRuQ2xpY2tlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgbmV4dE5hdmlnYXRlQnRuQ2xpY2tlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgbW9udGhWaWV3QnRuQ2xpY2tlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgeWVhclZpZXdCdG5DbGlja2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoT1BUUykpIHtcbiAgICAgIHRoaXMub3B0cyA9IGNoYW5nZXNbT1BUU10uY3VycmVudFZhbHVlO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShZRUFSU19EVVJBVElPTikpIHtcbiAgICAgIHRoaXMueWVhcnNEdXJhdGlvbiA9IGNoYW5nZXNbWUVBUlNfRFVSQVRJT05dLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoVklTSUJMRV9NT05USCkpIHtcbiAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0gY2hhbmdlc1tWSVNJQkxFX01PTlRIXS5jdXJyZW50VmFsdWU7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KFNFTEVDVF9NT05USCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0TW9udGggPSBjaGFuZ2VzW1NFTEVDVF9NT05USF0uY3VycmVudFZhbHVlO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShTRUxFQ1RfWUVBUikpIHtcbiAgICAgIHRoaXMuc2VsZWN0WWVhciA9IGNoYW5nZXNbU0VMRUNUX1lFQVJdLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoUFJFVl9WSUVXX0RJU0FCTEVEKSkge1xuICAgICAgdGhpcy5wcmV2Vmlld0Rpc2FibGVkID0gY2hhbmdlc1tQUkVWX1ZJRVdfRElTQUJMRURdLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoTkVYVF9WSUVXX0RJU0FCTEVEKSkge1xuICAgICAgdGhpcy5uZXh0Vmlld0Rpc2FibGVkID0gY2hhbmdlc1tORVhUX1ZJRVdfRElTQUJMRURdLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBvblByZXZOYXZpZ2F0ZUJ0bkNsaWNrZWQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMub3B0cy5ydGwgPyB0aGlzLm5leHROYXZpZ2F0ZUJ0bkNsaWNrZWQuZW1pdCgpIDogdGhpcy5wcmV2TmF2aWdhdGVCdG5DbGlja2VkLmVtaXQoKTtcbiAgfVxuXG4gIG9uTmV4dE5hdmlnYXRlQnRuQ2xpY2tlZChldmVudDogYW55KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5vcHRzLnJ0bCA/IHRoaXMucHJldk5hdmlnYXRlQnRuQ2xpY2tlZC5lbWl0KCkgOiB0aGlzLm5leHROYXZpZ2F0ZUJ0bkNsaWNrZWQuZW1pdCgpO1xuICB9XG5cbiAgb25Nb250aFZpZXdCdG5DbGlja2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm1vbnRoVmlld0J0bkNsaWNrZWQuZW1pdCgpO1xuICB9XG5cbiAgb25ZZWFyVmlld0J0bkNsaWNrZWQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMueWVhclZpZXdCdG5DbGlja2VkLmVtaXQoKTtcbiAgfVxufVxuIl19