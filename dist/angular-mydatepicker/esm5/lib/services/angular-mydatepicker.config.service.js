/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Year } from "../enums/year.enum";
import { DefaultView } from "../enums/default-view.enum";
import { CalAnimation } from "../enums/cal-animation.enum";
var DefaultConfigService = /** @class */ (function () {
    function DefaultConfigService() {
        this.defaultConfig = {
            dateRange: false,
            inline: false,
            dayLabels: { su: "Sun", mo: "Mon", tu: "Tue", we: "Wed", th: "Thu", fr: "Fri", sa: "Sat" },
            monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec" },
            dateFormat: "yyyy-mm-dd",
            defaultView: DefaultView.Date,
            firstDayOfWeek: "mo",
            satHighlight: false,
            sunHighlight: true,
            highlightDates: [],
            markCurrentDay: true,
            markCurrentMonth: true,
            markCurrentYear: true,
            monthSelector: true,
            yearSelector: true,
            disableHeaderButtons: true,
            showWeekNumbers: false,
            selectorHeight: "232px",
            selectorWidth: "252px",
            disableUntil: { year: 0, month: 0, day: 0 },
            disableSince: { year: 0, month: 0, day: 0 },
            disableDates: [],
            disableDateRanges: [],
            disableWeekends: false,
            disableWeekdays: [],
            enableDates: [],
            markDates: [],
            markWeekends: { marked: false, color: "" },
            alignSelectorRight: false,
            openSelectorTopOfInput: false,
            closeSelectorOnDateSelect: true,
            closeSelectorOnDocumentClick: true,
            minYear: Year.min,
            maxYear: Year.max,
            showSelectorArrow: true,
            appendSelectorToBody: false,
            focusInputOnDateSelect: true,
            moveFocusByArrowKeys: true,
            dateRangeDatesDelimiter: " - ",
            inputFieldValidation: true,
            showMonthNumber: true,
            calendarAnimation: { in: CalAnimation.None, out: CalAnimation.None },
            rtl: false,
            stylesData: { selector: "", styles: "" },
            divHostElement: { enabled: false, placeholder: "" },
            ariaLabelPrevMonth: "Previous Month",
            ariaLabelNextMonth: "Next Month"
        };
    }
    /**
     * @return {?}
     */
    DefaultConfigService.prototype.getDefaultConfig = /**
     * @return {?}
     */
    function () {
        return this.defaultConfig;
    };
    DefaultConfigService.decorators = [
        { type: Injectable }
    ];
    return DefaultConfigService;
}());
export { DefaultConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DefaultConfigService.prototype.defaultConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1teWRhdGVwaWNrZXIuY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW15ZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hbmd1bGFyLW15ZGF0ZXBpY2tlci5jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUV6RDtJQUFBO1FBRVUsa0JBQWEsR0FBZTtZQUNsQyxTQUFTLEVBQUUsS0FBSztZQUNoQixNQUFNLEVBQUUsS0FBSztZQUNiLFNBQVMsRUFBRSxFQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUM7WUFDeEYsV0FBVyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUM7WUFDeEksVUFBVSxFQUFFLFlBQVk7WUFDeEIsV0FBVyxFQUFFLFdBQVcsQ0FBQyxJQUFJO1lBQzdCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFlBQVksRUFBRyxJQUFJO1lBQ25CLGNBQWMsRUFBRSxFQUFFO1lBQ2xCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsZUFBZSxFQUFFLElBQUk7WUFDckIsYUFBYSxFQUFFLElBQUk7WUFDbkIsWUFBWSxFQUFFLElBQUk7WUFDbEIsb0JBQW9CLEVBQUUsSUFBSTtZQUMxQixlQUFlLEVBQUUsS0FBSztZQUN0QixjQUFjLEVBQUUsT0FBTztZQUN2QixhQUFhLEVBQUUsT0FBTztZQUN0QixZQUFZLEVBQUUsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQztZQUN6QyxZQUFZLEVBQUUsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQztZQUN6QyxZQUFZLEVBQUUsRUFBRTtZQUNoQixpQkFBaUIsRUFBRSxFQUFFO1lBQ3JCLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFdBQVcsRUFBRSxFQUFFO1lBQ2YsU0FBUyxFQUFFLEVBQUU7WUFDYixZQUFZLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUM7WUFDeEMsa0JBQWtCLEVBQUUsS0FBSztZQUN6QixzQkFBc0IsRUFBRSxLQUFLO1lBQzdCLHlCQUF5QixFQUFFLElBQUk7WUFDL0IsNEJBQTRCLEVBQUUsSUFBSTtZQUNsQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2pCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsb0JBQW9CLEVBQUUsS0FBSztZQUMzQixzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLG9CQUFvQixFQUFFLElBQUk7WUFDMUIsdUJBQXVCLEVBQUUsS0FBSztZQUM5QixvQkFBb0IsRUFBRSxJQUFJO1lBQzFCLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLGlCQUFpQixFQUFFLEVBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxJQUFJLEVBQUM7WUFDbEUsR0FBRyxFQUFFLEtBQUs7WUFDVixVQUFVLEVBQUUsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUM7WUFDdEMsY0FBYyxFQUFFLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFDO1lBQ2pELGtCQUFrQixFQUFFLGdCQUFnQjtZQUNwQyxrQkFBa0IsRUFBRSxZQUFZO1NBQ2pDLENBQUM7SUFLSixDQUFDOzs7O0lBSFEsK0NBQWdCOzs7SUFBdkI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7Z0JBdERGLFVBQVU7O0lBdURYLDJCQUFDO0NBQUEsQUF2REQsSUF1REM7U0F0RFksb0JBQW9COzs7Ozs7SUFDL0IsNkNBZ0RFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtJTXlPcHRpb25zfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9teS1vcHRpb25zLmludGVyZmFjZVwiO1xuaW1wb3J0IHtZZWFyfSBmcm9tIFwiLi4vZW51bXMveWVhci5lbnVtXCI7XG5pbXBvcnQge0RlZmF1bHRWaWV3fSBmcm9tIFwiLi4vZW51bXMvZGVmYXVsdC12aWV3LmVudW1cIjtcbmltcG9ydCB7Q2FsQW5pbWF0aW9ufSBmcm9tIFwiLi4vZW51bXMvY2FsLWFuaW1hdGlvbi5lbnVtXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZWZhdWx0Q29uZmlnU2VydmljZSB7XG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZzogSU15T3B0aW9ucyA9IHtcbiAgICBkYXRlUmFuZ2U6IGZhbHNlLFxuICAgIGlubGluZTogZmFsc2UsXG4gICAgZGF5TGFiZWxzOiB7c3U6IFwiU3VuXCIsIG1vOiBcIk1vblwiLCB0dTogXCJUdWVcIiwgd2U6IFwiV2VkXCIsIHRoOiBcIlRodVwiLCBmcjogXCJGcmlcIiwgc2E6IFwiU2F0XCJ9LFxuICAgIG1vbnRoTGFiZWxzOiB7MTogXCJKYW5cIiwgMjogXCJGZWJcIiwgMzogXCJNYXJcIiwgNDogXCJBcHJcIiwgNTogXCJNYXlcIiwgNjogXCJKdW5cIiwgNzogXCJKdWxcIiwgODogXCJBdWdcIiwgOTogXCJTZXBcIiwgMTA6IFwiT2N0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZWNcIn0sXG4gICAgZGF0ZUZvcm1hdDogXCJ5eXl5LW1tLWRkXCIsXG4gICAgZGVmYXVsdFZpZXc6IERlZmF1bHRWaWV3LkRhdGUsXG4gICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcbiAgICBzYXRIaWdobGlnaHQ6IGZhbHNlLFxuICAgIHN1bkhpZ2hsaWdodDogIHRydWUsXG4gICAgaGlnaGxpZ2h0RGF0ZXM6IFtdLFxuICAgIG1hcmtDdXJyZW50RGF5OiB0cnVlLFxuICAgIG1hcmtDdXJyZW50TW9udGg6IHRydWUsXG4gICAgbWFya0N1cnJlbnRZZWFyOiB0cnVlLFxuICAgIG1vbnRoU2VsZWN0b3I6IHRydWUsXG4gICAgeWVhclNlbGVjdG9yOiB0cnVlLFxuICAgIGRpc2FibGVIZWFkZXJCdXR0b25zOiB0cnVlLFxuICAgIHNob3dXZWVrTnVtYmVyczogZmFsc2UsXG4gICAgc2VsZWN0b3JIZWlnaHQ6IFwiMjMycHhcIixcbiAgICBzZWxlY3RvcldpZHRoOiBcIjI1MnB4XCIsXG4gICAgZGlzYWJsZVVudGlsOiB7eWVhcjogMCwgbW9udGg6IDAsIGRheTogMH0sXG4gICAgZGlzYWJsZVNpbmNlOiB7eWVhcjogMCwgbW9udGg6IDAsIGRheTogMH0sXG4gICAgZGlzYWJsZURhdGVzOiBbXSxcbiAgICBkaXNhYmxlRGF0ZVJhbmdlczogW10sXG4gICAgZGlzYWJsZVdlZWtlbmRzOiBmYWxzZSxcbiAgICBkaXNhYmxlV2Vla2RheXM6IFtdLFxuICAgIGVuYWJsZURhdGVzOiBbXSxcbiAgICBtYXJrRGF0ZXM6IFtdLFxuICAgIG1hcmtXZWVrZW5kczoge21hcmtlZDogZmFsc2UsIGNvbG9yOiBcIlwifSxcbiAgICBhbGlnblNlbGVjdG9yUmlnaHQ6IGZhbHNlLFxuICAgIG9wZW5TZWxlY3RvclRvcE9mSW5wdXQ6IGZhbHNlLFxuICAgIGNsb3NlU2VsZWN0b3JPbkRhdGVTZWxlY3Q6IHRydWUsXG4gICAgY2xvc2VTZWxlY3Rvck9uRG9jdW1lbnRDbGljazogdHJ1ZSxcbiAgICBtaW5ZZWFyOiBZZWFyLm1pbixcbiAgICBtYXhZZWFyOiBZZWFyLm1heCxcbiAgICBzaG93U2VsZWN0b3JBcnJvdzogdHJ1ZSxcbiAgICBhcHBlbmRTZWxlY3RvclRvQm9keTogZmFsc2UsXG4gICAgZm9jdXNJbnB1dE9uRGF0ZVNlbGVjdDogdHJ1ZSxcbiAgICBtb3ZlRm9jdXNCeUFycm93S2V5czogdHJ1ZSxcbiAgICBkYXRlUmFuZ2VEYXRlc0RlbGltaXRlcjogXCIgLSBcIixcbiAgICBpbnB1dEZpZWxkVmFsaWRhdGlvbjogdHJ1ZSxcbiAgICBzaG93TW9udGhOdW1iZXI6IHRydWUsXG4gICAgY2FsZW5kYXJBbmltYXRpb246IHtpbjogQ2FsQW5pbWF0aW9uLk5vbmUsIG91dDogQ2FsQW5pbWF0aW9uLk5vbmV9LFxuICAgIHJ0bDogZmFsc2UsXG4gICAgc3R5bGVzRGF0YToge3NlbGVjdG9yOiBcIlwiLCBzdHlsZXM6IFwiXCJ9LFxuICAgIGRpdkhvc3RFbGVtZW50OiB7ZW5hYmxlZDogZmFsc2UsIHBsYWNlaG9sZGVyOiBcIlwifSxcbiAgICBhcmlhTGFiZWxQcmV2TW9udGg6IFwiUHJldmlvdXMgTW9udGhcIixcbiAgICBhcmlhTGFiZWxOZXh0TW9udGg6IFwiTmV4dCBNb250aFwiXG4gIH07XG5cbiAgcHVibGljIGdldERlZmF1bHRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdENvbmZpZztcbiAgfVxufVxuIl19