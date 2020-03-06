/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Year } from "../enums/year.enum";
import { DefaultView } from "../enums/default-view.enum";
import { CalAnimation } from "../enums/cal-animation.enum";
export class DefaultConfigService {
    constructor() {
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
    getDefaultConfig() {
        return this.defaultConfig;
    }
}
DefaultConfigService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DefaultConfigService.prototype.defaultConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1teWRhdGVwaWNrZXIuY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW15ZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hbmd1bGFyLW15ZGF0ZXBpY2tlci5jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUd6RCxNQUFNLE9BQU8sb0JBQW9CO0lBRGpDO1FBRVUsa0JBQWEsR0FBZTtZQUNsQyxTQUFTLEVBQUUsS0FBSztZQUNoQixNQUFNLEVBQUUsS0FBSztZQUNiLFNBQVMsRUFBRSxFQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUM7WUFDeEYsV0FBVyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUM7WUFDeEksVUFBVSxFQUFFLFlBQVk7WUFDeEIsV0FBVyxFQUFFLFdBQVcsQ0FBQyxJQUFJO1lBQzdCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFlBQVksRUFBRyxJQUFJO1lBQ25CLGNBQWMsRUFBRSxFQUFFO1lBQ2xCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsZUFBZSxFQUFFLElBQUk7WUFDckIsYUFBYSxFQUFFLElBQUk7WUFDbkIsWUFBWSxFQUFFLElBQUk7WUFDbEIsb0JBQW9CLEVBQUUsSUFBSTtZQUMxQixlQUFlLEVBQUUsS0FBSztZQUN0QixjQUFjLEVBQUUsT0FBTztZQUN2QixhQUFhLEVBQUUsT0FBTztZQUN0QixZQUFZLEVBQUUsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQztZQUN6QyxZQUFZLEVBQUUsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQztZQUN6QyxZQUFZLEVBQUUsRUFBRTtZQUNoQixpQkFBaUIsRUFBRSxFQUFFO1lBQ3JCLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFdBQVcsRUFBRSxFQUFFO1lBQ2YsU0FBUyxFQUFFLEVBQUU7WUFDYixZQUFZLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUM7WUFDeEMsa0JBQWtCLEVBQUUsS0FBSztZQUN6QixzQkFBc0IsRUFBRSxLQUFLO1lBQzdCLHlCQUF5QixFQUFFLElBQUk7WUFDL0IsNEJBQTRCLEVBQUUsSUFBSTtZQUNsQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2pCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsb0JBQW9CLEVBQUUsS0FBSztZQUMzQixzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLG9CQUFvQixFQUFFLElBQUk7WUFDMUIsdUJBQXVCLEVBQUUsS0FBSztZQUM5QixvQkFBb0IsRUFBRSxJQUFJO1lBQzFCLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLGlCQUFpQixFQUFFLEVBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxJQUFJLEVBQUM7WUFDbEUsR0FBRyxFQUFFLEtBQUs7WUFDVixVQUFVLEVBQUUsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUM7WUFDdEMsY0FBYyxFQUFFLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFDO1lBQ2pELGtCQUFrQixFQUFFLGdCQUFnQjtZQUNwQyxrQkFBa0IsRUFBRSxZQUFZO1NBQ2pDLENBQUM7SUFLSixDQUFDOzs7O0lBSFEsZ0JBQWdCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7WUF0REYsVUFBVTs7Ozs7OztJQUVULDZDQWdERSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SU15T3B0aW9uc30gZnJvbSBcIi4uL2ludGVyZmFjZXMvbXktb3B0aW9ucy5pbnRlcmZhY2VcIjtcbmltcG9ydCB7WWVhcn0gZnJvbSBcIi4uL2VudW1zL3llYXIuZW51bVwiO1xuaW1wb3J0IHtEZWZhdWx0Vmlld30gZnJvbSBcIi4uL2VudW1zL2RlZmF1bHQtdmlldy5lbnVtXCI7XG5pbXBvcnQge0NhbEFuaW1hdGlvbn0gZnJvbSBcIi4uL2VudW1zL2NhbC1hbmltYXRpb24uZW51bVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVmYXVsdENvbmZpZ1NlcnZpY2Uge1xuICBwcml2YXRlIGRlZmF1bHRDb25maWc6IElNeU9wdGlvbnMgPSB7XG4gICAgZGF0ZVJhbmdlOiBmYWxzZSxcbiAgICBpbmxpbmU6IGZhbHNlLFxuICAgIGRheUxhYmVsczoge3N1OiBcIlN1blwiLCBtbzogXCJNb25cIiwgdHU6IFwiVHVlXCIsIHdlOiBcIldlZFwiLCB0aDogXCJUaHVcIiwgZnI6IFwiRnJpXCIsIHNhOiBcIlNhdFwifSxcbiAgICBtb250aExhYmVsczogezE6IFwiSmFuXCIsIDI6IFwiRmViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiQXByXCIsIDU6IFwiTWF5XCIsIDY6IFwiSnVuXCIsIDc6IFwiSnVsXCIsIDg6IFwiQXVnXCIsIDk6IFwiU2VwXCIsIDEwOiBcIk9jdFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGVjXCJ9LFxuICAgIGRhdGVGb3JtYXQ6IFwieXl5eS1tbS1kZFwiLFxuICAgIGRlZmF1bHRWaWV3OiBEZWZhdWx0Vmlldy5EYXRlLFxuICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXG4gICAgc2F0SGlnaGxpZ2h0OiBmYWxzZSxcbiAgICBzdW5IaWdobGlnaHQ6ICB0cnVlLFxuICAgIGhpZ2hsaWdodERhdGVzOiBbXSxcbiAgICBtYXJrQ3VycmVudERheTogdHJ1ZSxcbiAgICBtYXJrQ3VycmVudE1vbnRoOiB0cnVlLFxuICAgIG1hcmtDdXJyZW50WWVhcjogdHJ1ZSxcbiAgICBtb250aFNlbGVjdG9yOiB0cnVlLFxuICAgIHllYXJTZWxlY3RvcjogdHJ1ZSxcbiAgICBkaXNhYmxlSGVhZGVyQnV0dG9uczogdHJ1ZSxcbiAgICBzaG93V2Vla051bWJlcnM6IGZhbHNlLFxuICAgIHNlbGVjdG9ySGVpZ2h0OiBcIjIzMnB4XCIsXG4gICAgc2VsZWN0b3JXaWR0aDogXCIyNTJweFwiLFxuICAgIGRpc2FibGVVbnRpbDoge3llYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDB9LFxuICAgIGRpc2FibGVTaW5jZToge3llYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDB9LFxuICAgIGRpc2FibGVEYXRlczogW10sXG4gICAgZGlzYWJsZURhdGVSYW5nZXM6IFtdLFxuICAgIGRpc2FibGVXZWVrZW5kczogZmFsc2UsXG4gICAgZGlzYWJsZVdlZWtkYXlzOiBbXSxcbiAgICBlbmFibGVEYXRlczogW10sXG4gICAgbWFya0RhdGVzOiBbXSxcbiAgICBtYXJrV2Vla2VuZHM6IHttYXJrZWQ6IGZhbHNlLCBjb2xvcjogXCJcIn0sXG4gICAgYWxpZ25TZWxlY3RvclJpZ2h0OiBmYWxzZSxcbiAgICBvcGVuU2VsZWN0b3JUb3BPZklucHV0OiBmYWxzZSxcbiAgICBjbG9zZVNlbGVjdG9yT25EYXRlU2VsZWN0OiB0cnVlLFxuICAgIGNsb3NlU2VsZWN0b3JPbkRvY3VtZW50Q2xpY2s6IHRydWUsXG4gICAgbWluWWVhcjogWWVhci5taW4sXG4gICAgbWF4WWVhcjogWWVhci5tYXgsXG4gICAgc2hvd1NlbGVjdG9yQXJyb3c6IHRydWUsXG4gICAgYXBwZW5kU2VsZWN0b3JUb0JvZHk6IGZhbHNlLFxuICAgIGZvY3VzSW5wdXRPbkRhdGVTZWxlY3Q6IHRydWUsXG4gICAgbW92ZUZvY3VzQnlBcnJvd0tleXM6IHRydWUsXG4gICAgZGF0ZVJhbmdlRGF0ZXNEZWxpbWl0ZXI6IFwiIC0gXCIsXG4gICAgaW5wdXRGaWVsZFZhbGlkYXRpb246IHRydWUsXG4gICAgc2hvd01vbnRoTnVtYmVyOiB0cnVlLFxuICAgIGNhbGVuZGFyQW5pbWF0aW9uOiB7aW46IENhbEFuaW1hdGlvbi5Ob25lLCBvdXQ6IENhbEFuaW1hdGlvbi5Ob25lfSxcbiAgICBydGw6IGZhbHNlLFxuICAgIHN0eWxlc0RhdGE6IHtzZWxlY3RvcjogXCJcIiwgc3R5bGVzOiBcIlwifSxcbiAgICBkaXZIb3N0RWxlbWVudDoge2VuYWJsZWQ6IGZhbHNlLCBwbGFjZWhvbGRlcjogXCJcIn0sXG4gICAgYXJpYUxhYmVsUHJldk1vbnRoOiBcIlByZXZpb3VzIE1vbnRoXCIsXG4gICAgYXJpYUxhYmVsTmV4dE1vbnRoOiBcIk5leHQgTW9udGhcIlxuICB9O1xuXG4gIHB1YmxpYyBnZXREZWZhdWx0Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRDb25maWc7XG4gIH1cbn1cbiJdfQ==