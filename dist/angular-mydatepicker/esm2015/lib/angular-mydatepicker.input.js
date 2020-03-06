/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, ViewContainerRef, Renderer2, ChangeDetectorRef, ComponentFactoryResolver, forwardRef, EventEmitter, Output, HostListener } from "@angular/core";
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from "@angular/forms";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { LocaleService } from "./services/angular-mydatepicker.locale.service";
import { UtilService } from "./services/angular-mydatepicker.util.service";
import { DefaultConfigService } from "./services/angular-mydatepicker.config.service";
import { CalToggle } from "./enums/cal-toggle.enum";
import { Year } from "./enums/year.enum";
import { KeyCode } from "./enums/key-code.enum";
import { CalAnimation } from "./enums/cal-animation.enum";
import { KEYUP, BLUR, EMPTY_STR, DISABLED, CLICK, BODY, VALUE, PREVENT_CLOSE_TIMEOUT, OPTIONS, DEFAULT_MONTH, LOCALE, OBJECT, PX, INNER_HTML, ANIMATION_END, ANIMATION_TIMEOUT } from "./constants/constants";
/** @type {?} */
const NGX_DP_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => AngularMyDatePickerDirective)),
    multi: true
};
/** @type {?} */
const NGX_DP_VALIDATORS = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => AngularMyDatePickerDirective)),
    multi: true
};
export class AngularMyDatePickerDirective {
    /**
     * @param {?} localeService
     * @param {?} utilService
     * @param {?} vcRef
     * @param {?} cfr
     * @param {?} renderer
     * @param {?} cdr
     * @param {?} elem
     * @param {?} config
     */
    constructor(localeService, utilService, vcRef, cfr, renderer, cdr, elem, config) {
        this.localeService = localeService;
        this.utilService = utilService;
        this.vcRef = vcRef;
        this.cfr = cfr;
        this.renderer = renderer;
        this.cdr = cdr;
        this.elem = elem;
        this.config = config;
        this.dateChanged = new EventEmitter();
        this.inputFieldChanged = new EventEmitter();
        this.calendarViewChanged = new EventEmitter();
        this.calendarToggle = new EventEmitter();
        this.rangeDateSelection = new EventEmitter();
        this.cRef = null;
        this.hostText = "";
        this.preventClose = false;
        this.disabled = false;
        this.onChangeCb = (/**
         * @return {?}
         */
        () => { });
        this.onTouchedCb = (/**
         * @return {?}
         */
        () => { });
        this.onClickWrapper = (/**
         * @param {?} evt
         * @return {?}
         */
        (evt) => this.onClick(evt));
        this.onAnimateWrapper = (/**
         * @param {?} reason
         * @return {?}
         */
        (reason) => this.animationEnd(reason));
        this.opts = this.config.getDefaultConfig();
        this.parseOptions(this.opts);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyUp(event) {
        /** @type {?} */
        const keyCode = this.utilService.getKeyCodeFromEvent(event);
        if (this.ignoreKeyPress(keyCode)) {
            return;
        }
        if (keyCode === KeyCode.esc) {
            this.closeSelector(CalToggle.CloseByEsc);
        }
        else {
            const { dateRange, dateFormat, monthLabels, dateRangeDatesDelimiter } = this.opts;
            /** @type {?} */
            const value = this.getHostValue();
            /** @type {?} */
            let dateModel = null;
            /** @type {?} */
            let valid = false;
            if (!dateRange) {
                /** @type {?} */
                const date = this.utilService.isDateValid(value, this.opts);
                valid = this.utilService.isInitializedDate(date);
                if (valid) {
                    dateModel = this.utilService.getDateModel(date, null, dateFormat, monthLabels, dateRangeDatesDelimiter);
                }
            }
            else {
                /** @type {?} */
                const range = this.utilService.isDateValidDateRange(value, this.opts);
                const { begin, end } = range;
                valid = this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end);
                if (valid) {
                    dateModel = this.utilService.getDateModel(null, range, dateFormat, monthLabels, dateRangeDatesDelimiter);
                }
            }
            this.onChangeCb(dateModel);
            this.onTouchedCb();
            this.emitInputFieldChanged(value, valid);
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        const { inputFieldValidation, dateRange, dateFormat, monthLabels, dateRangeDatesDelimiter, closeSelectorOnDateSelect } = this.opts;
        if (inputFieldValidation) {
            /** @type {?} */
            const value = this.getHostValue();
            /** @type {?} */
            let valid = false;
            if (!dateRange) {
                /** @type {?} */
                const date = this.utilService.isDateValid(value, this.opts);
                valid = this.utilService.isInitializedDate(date);
                if (valid && this.hostText !== value) {
                    // Valid date
                    /** @type {?} */
                    const dateModel = this.utilService.getDateModel(date, null, dateFormat, monthLabels, dateRangeDatesDelimiter);
                    this.emitDateChanged(dateModel);
                    this.updateModel(dateModel);
                    if (closeSelectorOnDateSelect) {
                        this.closeSelector(CalToggle.CloseByDateSel);
                    }
                }
            }
            else {
                /** @type {?} */
                const dateRange = this.utilService.isDateValidDateRange(value, this.opts);
                const { begin, end } = dateRange;
                valid = this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end);
                if (valid && this.hostText !== value) {
                    // Valid date range
                    /** @type {?} */
                    const dateModel = this.utilService.getDateModel(null, dateRange, dateFormat, monthLabels, dateRangeDatesDelimiter);
                    this.emitDateChanged(dateModel);
                    this.updateModel(dateModel);
                    if (closeSelectorOnDateSelect) {
                        this.closeSelector(CalToggle.CloseByDateSel);
                    }
                }
            }
            if (!valid && this.hostText !== value) {
                if (value === EMPTY_STR) {
                    this.clearDate();
                }
                else {
                    this.onChangeCb(null);
                }
            }
            this.hostText = value;
        }
        this.onTouchedCb();
    }
    /**
     * @private
     * @param {?} evt
     * @return {?}
     */
    onClick(evt) {
        if (this.opts.closeSelectorOnDocumentClick && !this.preventClose && evt.target && this.cRef !== null && this.elem.nativeElement !== evt.target && !this.cRef.location.nativeElement.contains(evt.target) && !this.disabled) {
            this.closeSelector(CalToggle.CloseByOutClick);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty(LOCALE)) {
            this.setLocaleOptions();
        }
        if (changes.hasOwnProperty(DEFAULT_MONTH)) {
            /** @type {?} */
            let dm = changes[DEFAULT_MONTH].currentValue;
            if (typeof dm === OBJECT) {
                dm = dm.defMonth;
            }
            this.defaultMonth = dm;
        }
        if (changes.hasOwnProperty(OPTIONS)) {
            this.parseOptions(changes[OPTIONS].currentValue);
        }
        if (this.cRef !== null) {
            this.cRef.instance.refreshComponent(this.opts);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.closeCalendar();
    }
    /**
     * @return {?}
     */
    setLocaleOptions() {
        /** @type {?} */
        const opts = this.localeService.getLocaleOptions(this.locale);
        Object.keys(opts).forEach((/**
         * @param {?} k
         * @return {?}
         */
        (k) => {
            ((/** @type {?} */ (this.opts)))[k] = opts[k];
        }));
    }
    /**
     * @param {?} opts
     * @return {?}
     */
    parseOptions(opts) {
        if (opts !== undefined) {
            Object.keys(opts).forEach((/**
             * @param {?} k
             * @return {?}
             */
            (k) => {
                ((/** @type {?} */ (this.opts)))[k] = opts[k];
            }));
        }
        if (this.opts.minYear < Year.min) {
            this.opts.minYear = Year.min;
        }
        if (this.opts.maxYear > Year.max) {
            this.opts.maxYear = Year.max;
        }
        if (this.opts.openSelectorTopOfInput || this.opts.inline) {
            this.opts.showSelectorArrow = false;
        }
        if (this.opts.inline) {
            this.openCalendar();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this.disabled) {
            return;
        }
        const { dateFormat, monthLabels, dateRangeDatesDelimiter } = this.opts;
        if (!value) {
            this.setHostValue(EMPTY_STR);
            this.emitInputFieldChanged(EMPTY_STR, false);
            if (this.cRef !== null) {
                this.cRef.instance.resetDateValue();
            }
        }
        else if (!value.isRange && value.singleDate) {
            // single date
            let { date, jsDate } = value.singleDate;
            if (!date) {
                date = this.jsDateToMyDate(jsDate);
            }
            /** @type {?} */
            const formatted = this.utilService.formatDate(date, dateFormat, monthLabels);
            /** @type {?} */
            const valid = this.utilService.isInitializedDate(this.utilService.isDateValid(formatted, this.opts));
            if (valid) {
                this.setHostValue(formatted);
                this.emitInputFieldChanged(formatted, valid);
                if (this.cRef !== null) {
                    this.cRef.instance.setDateValue(date);
                }
            }
        }
        else if (value.isRange && value.dateRange) {
            // date range
            let { beginDate, beginJsDate, endDate, endJsDate } = value.dateRange;
            if (!beginDate || !endDate) {
                beginDate = this.jsDateToMyDate(beginJsDate);
                endDate = this.jsDateToMyDate(endJsDate);
            }
            /** @type {?} */
            const formatted = this.utilService.formatDate(beginDate, dateFormat, monthLabels) + dateRangeDatesDelimiter +
                this.utilService.formatDate(endDate, dateFormat, monthLabels);
            const { begin, end } = this.utilService.isDateValidDateRange(formatted, this.opts);
            /** @type {?} */
            const valid = this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end);
            if (valid) {
                this.setHostValue(formatted);
                this.emitInputFieldChanged(formatted, valid);
                if (this.cRef !== null) {
                    this.cRef.instance.setDateRangeValue(beginDate, endDate);
                }
            }
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCb = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCb = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.renderer.setProperty(this.elem.nativeElement, DISABLED, isDisabled);
        if (isDisabled) {
            this.closeCalendar();
        }
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        /** @type {?} */
        const value = this.getHostValue();
        if (value === null || value === EMPTY_STR) {
            return null;
        }
        if (!this.opts.dateRange) {
            /** @type {?} */
            const date = this.utilService.isDateValid(value, this.opts);
            if (!this.utilService.isInitializedDate(date)) {
                return { invalidDateFormat: true };
            }
        }
        else {
            const { begin, end } = this.utilService.isDateValidDateRange(value, this.opts);
            if (!this.utilService.isInitializedDate(begin) || !this.utilService.isInitializedDate(end)) {
                return { invalidDateFormat: true };
            }
        }
        return null;
    }
    /**
     * @return {?}
     */
    openCalendar() {
        if (this.disabled) {
            return;
        }
        this.preventClose = true;
        this.cdr.detectChanges();
        if (this.cRef === null) {
            this.cRef = this.vcRef.createComponent(this.cfr.resolveComponentFactory(CalendarComponent));
            this.appendSelector(this.cRef.location.nativeElement);
            this.cRef.instance.initializeComponent(this.opts, this.defaultMonth, this.getSelectorPosition(this.elem.nativeElement), this.getHostValue(), (/**
             * @param {?} dm
             * @param {?} close
             * @return {?}
             */
            (dm, close) => {
                this.focusToInput();
                this.emitDateChanged(dm);
                this.emitInputFieldChanged(this.utilService.getFormattedDate(dm), true);
                this.updateModel(dm);
                if (close) {
                    this.closeSelector(CalToggle.CloseByDateSel);
                }
            }), (/**
             * @param {?} cvc
             * @return {?}
             */
            (cvc) => {
                this.emitCalendarChanged(cvc);
            }), (/**
             * @param {?} rds
             * @return {?}
             */
            (rds) => {
                this.emitRangeDateSelection(rds);
            }), (/**
             * @return {?}
             */
            () => {
                this.closeSelector(CalToggle.CloseByEsc);
            }));
            this.emitCalendarToggle(CalToggle.Open);
            if (!this.opts.inline) {
                document.addEventListener(CLICK, this.onClickWrapper);
            }
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.preventClose = false;
        }), PREVENT_CLOSE_TIMEOUT);
    }
    /**
     * @return {?}
     */
    closeCalendar() {
        this.closeSelector(CalToggle.CloseByCalBtn);
    }
    /**
     * @return {?}
     */
    toggleCalendar() {
        if (this.disabled) {
            return;
        }
        /** @type {?} */
        const isOpen = this.cRef === null;
        if (isOpen) {
            this.openCalendar();
        }
        else {
            this.closeSelector(CalToggle.CloseByCalBtn);
        }
        return isOpen;
    }
    /**
     * @return {?}
     */
    clearDate() {
        if (this.disabled) {
            return;
        }
        this.setHostValue(EMPTY_STR);
        this.emitDateChanged({
            isRange: this.opts.dateRange,
            singleDate: {
                date: this.utilService.resetDate(),
                jsDate: null,
                formatted: EMPTY_STR,
                epoc: 0
            },
            dateRange: {
                beginDate: this.utilService.resetDate(),
                beginJsDate: null,
                beginEpoc: 0,
                endDate: this.utilService.resetDate(),
                endJsDate: null,
                endEpoc: 0,
                formatted: EMPTY_STR
            }
        });
        this.onChangeCb(null);
        this.onTouchedCb();
        this.closeSelector(CalToggle.CloseByCalBtn);
    }
    /**
     * @return {?}
     */
    isDateValid() {
        /** @type {?} */
        const value = this.getHostValue();
        if (value === null || value === EMPTY_STR) {
            return false;
        }
        if (!this.opts.dateRange) {
            /** @type {?} */
            const date = this.utilService.isDateValid(value, this.opts);
            if (this.utilService.isInitializedDate(date)) {
                this.emitInputFieldChanged(value, true);
                return true;
            }
        }
        else {
            const { begin, end } = this.utilService.isDateValidDateRange(value, this.opts);
            if (this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end)) {
                this.emitInputFieldChanged(value, true);
                return true;
            }
        }
        this.emitInputFieldChanged(value, false);
        return false;
    }
    /**
     * @private
     * @param {?} keyCode
     * @return {?}
     */
    ignoreKeyPress(keyCode) {
        return keyCode === KeyCode.leftArrow || keyCode === KeyCode.rightArrow || keyCode === KeyCode.upArrow || keyCode === KeyCode.downArrow || keyCode === KeyCode.tab || keyCode === KeyCode.shift;
    }
    /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    animationEnd(reason) {
        if (this.cRef !== null) {
            this.cRef.instance.selectorEl.nativeElement.removeEventListener(ANIMATION_END, this.onAnimateWrapper);
            this.removeComponent();
            this.emitCalendarToggle(reason);
        }
    }
    /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    closeSelector(reason) {
        const { inline, calendarAnimation } = this.opts;
        if (this.cRef !== null && !inline) {
            if (calendarAnimation.out !== CalAnimation.None) {
                const { instance } = this.cRef;
                instance.selectorEl.nativeElement.addEventListener(ANIMATION_END, this.onAnimateWrapper.bind(this, reason));
                instance.setCalendarAnimation(calendarAnimation, false);
                // In case the animationend event is not fired
                setTimeout(this.onAnimateWrapper.bind(this, reason), ANIMATION_TIMEOUT);
            }
            else {
                this.removeComponent();
                this.emitCalendarToggle(reason);
            }
            document.removeEventListener(CLICK, this.onClickWrapper);
        }
    }
    /**
     * @private
     * @return {?}
     */
    removeComponent() {
        if (this.vcRef !== null) {
            this.vcRef.remove(this.vcRef.indexOf(this.cRef.hostView));
            this.cRef = null;
        }
    }
    /**
     * @private
     * @param {?} model
     * @return {?}
     */
    updateModel(model) {
        this.setHostValue(this.utilService.getFormattedDate(model));
        this.onChangeCb(model);
        this.onTouchedCb();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    setHostValue(value) {
        const { divHostElement } = this.opts;
        this.hostText = value;
        /** @type {?} */
        const valueType = !divHostElement.enabled ? VALUE : INNER_HTML;
        value = valueType === INNER_HTML && value === EMPTY_STR ? divHostElement.placeholder : value;
        this.renderer.setProperty(this.elem.nativeElement, valueType, value);
    }
    /**
     * @private
     * @return {?}
     */
    getHostValue() {
        const { value, innerHTML } = this.elem.nativeElement;
        return !this.opts.divHostElement.enabled ? value : innerHTML;
    }
    /**
     * @private
     * @return {?}
     */
    focusToInput() {
        const { focusInputOnDateSelect, divHostElement } = this.opts;
        if (focusInputOnDateSelect && !divHostElement.enabled) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.elem.nativeElement.focus();
            }));
        }
    }
    /**
     * @private
     * @param {?} dateModel
     * @return {?}
     */
    emitDateChanged(dateModel) {
        this.dateChanged.emit(dateModel);
    }
    /**
     * @private
     * @param {?} value
     * @param {?} valid
     * @return {?}
     */
    emitInputFieldChanged(value, valid) {
        this.inputFieldChanged.emit({ value, dateFormat: this.opts.dateFormat, valid });
    }
    /**
     * @private
     * @param {?} cvc
     * @return {?}
     */
    emitCalendarChanged(cvc) {
        this.calendarViewChanged.emit(cvc);
    }
    /**
     * @private
     * @param {?} rds
     * @return {?}
     */
    emitRangeDateSelection(rds) {
        this.rangeDateSelection.emit(rds);
    }
    /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    emitCalendarToggle(reason) {
        this.calendarToggle.emit(reason);
    }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    jsDateToMyDate(date) {
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    }
    /**
     * @private
     * @param {?} elem
     * @return {?}
     */
    appendSelector(elem) {
        if (this.opts.appendSelectorToBody) {
            document.querySelector(BODY).appendChild(elem);
        }
    }
    /**
     * @private
     * @param {?} elem
     * @return {?}
     */
    getSelectorPosition(elem) {
        /** @type {?} */
        let top = 0;
        /** @type {?} */
        let left = 0;
        const { appendSelectorToBody, openSelectorTopOfInput, selectorHeight, selectorWidth, showSelectorArrow, alignSelectorRight } = this.opts;
        if (appendSelectorToBody) {
            /** @type {?} */
            const b = document.body.getBoundingClientRect();
            /** @type {?} */
            const e = elem.getBoundingClientRect();
            top = e.top - b.top;
            left = e.left - b.left;
        }
        if (openSelectorTopOfInput) {
            top = top - this.getSelectorDimension(selectorHeight) - 2;
        }
        else {
            top = top + elem.offsetHeight + (showSelectorArrow ? 12 : 2);
        }
        if (alignSelectorRight) {
            left = left + elem.offsetWidth - this.getSelectorDimension(selectorWidth);
        }
        return { top: top + PX, left: left + PX };
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    getSelectorDimension(value) {
        return Number(value.replace(PX, EMPTY_STR));
    }
}
AngularMyDatePickerDirective.decorators = [
    { type: Directive, args: [{
                selector: "[angular-mydatepicker]",
                exportAs: "angular-mydatepicker",
                providers: [UtilService, LocaleService, DefaultConfigService, NGX_DP_VALUE_ACCESSOR, NGX_DP_VALIDATORS]
            },] }
];
/** @nocollapse */
AngularMyDatePickerDirective.ctorParameters = () => [
    { type: LocaleService },
    { type: UtilService },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: DefaultConfigService }
];
AngularMyDatePickerDirective.propDecorators = {
    options: [{ type: Input }],
    locale: [{ type: Input }],
    defaultMonth: [{ type: Input }],
    dateChanged: [{ type: Output }],
    inputFieldChanged: [{ type: Output }],
    calendarViewChanged: [{ type: Output }],
    calendarToggle: [{ type: Output }],
    rangeDateSelection: [{ type: Output }],
    onKeyUp: [{ type: HostListener, args: [KEYUP, ["$event"],] }],
    onBlur: [{ type: HostListener, args: [BLUR,] }]
};
if (false) {
    /** @type {?} */
    AngularMyDatePickerDirective.prototype.options;
    /** @type {?} */
    AngularMyDatePickerDirective.prototype.locale;
    /** @type {?} */
    AngularMyDatePickerDirective.prototype.defaultMonth;
    /** @type {?} */
    AngularMyDatePickerDirective.prototype.dateChanged;
    /** @type {?} */
    AngularMyDatePickerDirective.prototype.inputFieldChanged;
    /** @type {?} */
    AngularMyDatePickerDirective.prototype.calendarViewChanged;
    /** @type {?} */
    AngularMyDatePickerDirective.prototype.calendarToggle;
    /** @type {?} */
    AngularMyDatePickerDirective.prototype.rangeDateSelection;
    /**
     * @type {?}
     * @private
     */
    AngularMyDatePickerDirective.prototype.cRef;
    /**
     * @type {?}
     * @private
     */
    AngularMyDatePickerDirective.prototype.hostText;
    /**
     * @type {?}
     * @private
     */
    AngularMyDatePickerDirective.prototype.preventClose;
    /**
     * @type {?}
     * @private
     */
    AngularMyDatePickerDirective.prototype.disabled;
    /**
     * @type {?}
     * @private
     */
    AngularMyDatePickerDirective.prototype.opts;
    /** @type {?} */
    AngularMyDatePickerDirective.prototype.onChangeCb;
    /** @type {?} */
    AngularMyDatePickerDirective.prototype.onTouchedCb;
    /**
     * @type {?}
     * @private
     */
    AngularMyDatePickerDirective.prototype.onClickWrapper;
    /**
     * @type {?}
     * @private
     */
    AngularMyDatePickerDirective.prototype.onAnimateWrapper;
    /**
     * @type {?}
     * @private
     */
    AngularMyDatePickerDirective.prototype.localeService;
    /**
     * @type {?}
     * @private
     */
    AngularMyDatePickerDirective.prototype.utilService;
    /**
     * @type {?}
     * @private
     */
    AngularMyDatePickerDirective.prototype.vcRef;
    /**
     * @type {?}
     * @private
     */
    AngularMyDatePickerDirective.prototype.cfr;
    /**
     * @type {?}
     * @private
     */
    AngularMyDatePickerDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    AngularMyDatePickerDirective.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    AngularMyDatePickerDirective.prototype.elem;
    /**
     * @type {?}
     * @private
     */
    AngularMyDatePickerDirective.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1teWRhdGVwaWNrZXIuaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW15ZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLW15ZGF0ZXBpY2tlci5pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQWdCLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQ2hHLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUE0QixZQUFZLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUF3QyxhQUFhLEVBQUUsaUJBQWlCLEVBQVksTUFBTSxnQkFBZ0IsQ0FBQztBQUNsSCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQVMzRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFDN0UsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDdkMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzlDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQ3pHLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVB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ZWYsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGZvcndhcmRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2wsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiwgVmFsaWRhdG9yfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7Q2FsZW5kYXJDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0lNeURhdGV9IGZyb20gXCIuL2ludGVyZmFjZXMvbXktZGF0ZS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15T3B0aW9uc30gZnJvbSBcIi4vaW50ZXJmYWNlcy9teS1vcHRpb25zLmludGVyZmFjZVwiO1xuaW1wb3J0IHtJTXlEYXRlTW9kZWx9IGZyb20gXCIuL2ludGVyZmFjZXMvbXktZGF0ZS1tb2RlbC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15RGF0ZVJhbmdlfSBmcm9tIFwiLi9pbnRlcmZhY2VzL215LWRhdGUtcmFuZ2UuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeVJhbmdlRGF0ZVNlbGVjdGlvbn0gZnJvbSBcIi4vaW50ZXJmYWNlcy9teS1yYW5nZS1kYXRlLXNlbGVjdGlvbi5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15Q2FsZW5kYXJWaWV3Q2hhbmdlZH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9teS1jYWxlbmRhci12aWV3LWNoYW5nZWQuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeUlucHV0RmllbGRDaGFuZ2VkfSBmcm9tIFwiLi9pbnRlcmZhY2VzL215LWlucHV0LWZpZWxkLWNoYW5nZWQuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeVNlbGVjdG9yUG9zaXRpb259IGZyb20gXCIuL2ludGVyZmFjZXMvbXktc2VsZWN0b3ItcG9zLmludGVyZmFjZVwiO1xuaW1wb3J0IHtMb2NhbGVTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9hbmd1bGFyLW15ZGF0ZXBpY2tlci5sb2NhbGUuc2VydmljZVwiO1xuaW1wb3J0IHtVdGlsU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvYW5ndWxhci1teWRhdGVwaWNrZXIudXRpbC5zZXJ2aWNlXCI7XG5pbXBvcnQge0RlZmF1bHRDb25maWdTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9hbmd1bGFyLW15ZGF0ZXBpY2tlci5jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtDYWxUb2dnbGV9IGZyb20gXCIuL2VudW1zL2NhbC10b2dnbGUuZW51bVwiO1xuaW1wb3J0IHtZZWFyfSBmcm9tIFwiLi9lbnVtcy95ZWFyLmVudW1cIjtcbmltcG9ydCB7S2V5Q29kZX0gZnJvbSBcIi4vZW51bXMva2V5LWNvZGUuZW51bVwiO1xuaW1wb3J0IHtDYWxBbmltYXRpb259IGZyb20gXCIuL2VudW1zL2NhbC1hbmltYXRpb24uZW51bVwiO1xuaW1wb3J0IHtLRVlVUCwgQkxVUiwgRU1QVFlfU1RSLCBESVNBQkxFRCwgQ0xJQ0ssIEJPRFksIFZBTFVFLCBQUkVWRU5UX0NMT1NFX1RJTUVPVVQsIE9QVElPTlMsIERFRkFVTFRfTU9OVEgsIFxuICBMT0NBTEUsIE9CSkVDVCwgUFgsIElOTkVSX0hUTUwsIEFOSU1BVElPTl9FTkQsIEFOSU1BVElPTl9USU1FT1VUfSBmcm9tIFwiLi9jb25zdGFudHMvY29uc3RhbnRzXCI7XG5cblxuY29uc3QgTkdYX0RQX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQW5ndWxhck15RGF0ZVBpY2tlckRpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5jb25zdCBOR1hfRFBfVkFMSURBVE9SUyA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQW5ndWxhck15RGF0ZVBpY2tlckRpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiW2FuZ3VsYXItbXlkYXRlcGlja2VyXVwiLFxuICBleHBvcnRBczogXCJhbmd1bGFyLW15ZGF0ZXBpY2tlclwiLFxuICBwcm92aWRlcnM6IFtVdGlsU2VydmljZSwgTG9jYWxlU2VydmljZSwgRGVmYXVsdENvbmZpZ1NlcnZpY2UsIE5HWF9EUF9WQUxVRV9BQ0NFU1NPUiwgTkdYX0RQX1ZBTElEQVRPUlNdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJNeURhdGVQaWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IElNeU9wdGlvbnM7XG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nO1xuICBASW5wdXQoKSBkZWZhdWx0TW9udGg6IHN0cmluZztcblxuICBAT3V0cHV0KCkgZGF0ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxJTXlEYXRlTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcjxJTXlEYXRlTW9kZWw+KCk7XG4gIEBPdXRwdXQoKSBpbnB1dEZpZWxkQ2hhbmdlZDogRXZlbnRFbWl0dGVyPElNeUlucHV0RmllbGRDaGFuZ2VkPiA9IG5ldyBFdmVudEVtaXR0ZXI8SU15SW5wdXRGaWVsZENoYW5nZWQ+KCk7XG4gIEBPdXRwdXQoKSBjYWxlbmRhclZpZXdDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8SU15Q2FsZW5kYXJWaWV3Q2hhbmdlZD4gPSBuZXcgRXZlbnRFbWl0dGVyPElNeUNhbGVuZGFyVmlld0NoYW5nZWQ+KCk7XG4gIEBPdXRwdXQoKSBjYWxlbmRhclRvZ2dsZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHJhbmdlRGF0ZVNlbGVjdGlvbjogRXZlbnRFbWl0dGVyPElNeVJhbmdlRGF0ZVNlbGVjdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPElNeVJhbmdlRGF0ZVNlbGVjdGlvbj4oKTtcblxuICBwcml2YXRlIGNSZWY6IENvbXBvbmVudFJlZjxDYWxlbmRhckNvbXBvbmVudD4gPSBudWxsO1xuICBwcml2YXRlIGhvc3RUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICBwcml2YXRlIHByZXZlbnRDbG9zZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBvcHRzOiBJTXlPcHRpb25zO1xuXG4gIG9uQ2hhbmdlQ2I6IChfOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7IH07XG4gIG9uVG91Y2hlZENiOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYWxlU2VydmljZTogTG9jYWxlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB1dGlsU2VydmljZTogVXRpbFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGVsZW06IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgY29uZmlnOiBEZWZhdWx0Q29uZmlnU2VydmljZSkge1xuICAgIHRoaXMub3B0cyA9IHRoaXMuY29uZmlnLmdldERlZmF1bHRDb25maWcoKTtcbiAgICB0aGlzLnBhcnNlT3B0aW9ucyh0aGlzLm9wdHMpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcihLRVlVUCwgW1wiJGV2ZW50XCJdKSBvbktleVVwKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBrZXlDb2RlOiBudW1iZXIgPSB0aGlzLnV0aWxTZXJ2aWNlLmdldEtleUNvZGVGcm9tRXZlbnQoZXZlbnQpO1xuICAgIGlmICh0aGlzLmlnbm9yZUtleVByZXNzKGtleUNvZGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGlmIChrZXlDb2RlID09PSBLZXlDb2RlLmVzYykge1xuICAgICAgdGhpcy5jbG9zZVNlbGVjdG9yKENhbFRvZ2dsZS5DbG9zZUJ5RXNjKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCB7ZGF0ZVJhbmdlLCBkYXRlRm9ybWF0LCBtb250aExhYmVscywgZGF0ZVJhbmdlRGF0ZXNEZWxpbWl0ZXJ9ID0gdGhpcy5vcHRzO1xuICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IHRoaXMuZ2V0SG9zdFZhbHVlKCk7XG5cbiAgICAgIGxldCBkYXRlTW9kZWw6IElNeURhdGVNb2RlbCA9IG51bGw7XG4gICAgICBsZXQgdmFsaWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgIGlmICghZGF0ZVJhbmdlKSB7XG4gICAgICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGF0ZVZhbGlkKHZhbHVlLCB0aGlzLm9wdHMpO1xuICAgICAgICB2YWxpZCA9IHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoZGF0ZSk7XG4gICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgIGRhdGVNb2RlbCA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF0ZU1vZGVsKGRhdGUsIG51bGwsIGRhdGVGb3JtYXQsIG1vbnRoTGFiZWxzLCBkYXRlUmFuZ2VEYXRlc0RlbGltaXRlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCByYW5nZSA9IHRoaXMudXRpbFNlcnZpY2UuaXNEYXRlVmFsaWREYXRlUmFuZ2UodmFsdWUsIHRoaXMub3B0cyk7XG4gICAgICAgIGNvbnN0IHtiZWdpbiwgZW5kfSA9IHJhbmdlO1xuICAgICAgICB2YWxpZCA9IHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoYmVnaW4pICYmIHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoZW5kKTtcbiAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgZGF0ZU1vZGVsID0gdGhpcy51dGlsU2VydmljZS5nZXREYXRlTW9kZWwobnVsbCwgcmFuZ2UsIGRhdGVGb3JtYXQsIG1vbnRoTGFiZWxzLCBkYXRlUmFuZ2VEYXRlc0RlbGltaXRlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMub25DaGFuZ2VDYihkYXRlTW9kZWwpO1xuICAgICAgdGhpcy5vblRvdWNoZWRDYigpO1xuXG4gICAgICB0aGlzLmVtaXRJbnB1dEZpZWxkQ2hhbmdlZCh2YWx1ZSwgdmFsaWQpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoQkxVUikgb25CbHVyKCkge1xuICAgIGNvbnN0IHtpbnB1dEZpZWxkVmFsaWRhdGlvbiwgZGF0ZVJhbmdlLCBkYXRlRm9ybWF0LCBtb250aExhYmVscywgZGF0ZVJhbmdlRGF0ZXNEZWxpbWl0ZXIsIGNsb3NlU2VsZWN0b3JPbkRhdGVTZWxlY3R9ID0gdGhpcy5vcHRzO1xuXG4gICAgaWYgKGlucHV0RmllbGRWYWxpZGF0aW9uKSB7XG4gICAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gdGhpcy5nZXRIb3N0VmFsdWUoKTtcblxuICAgICAgbGV0IHZhbGlkOiBib29sZWFuID0gZmFsc2U7XG4gICAgICBpZiAoIWRhdGVSYW5nZSkge1xuICAgICAgICBjb25zdCBkYXRlOiBJTXlEYXRlID0gdGhpcy51dGlsU2VydmljZS5pc0RhdGVWYWxpZCh2YWx1ZSwgdGhpcy5vcHRzKTtcbiAgICAgICAgdmFsaWQgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzSW5pdGlhbGl6ZWREYXRlKGRhdGUpO1xuICAgICAgICBpZiAodmFsaWQgJiYgdGhpcy5ob3N0VGV4dCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAvLyBWYWxpZCBkYXRlXG4gICAgICAgICAgY29uc3QgZGF0ZU1vZGVsOiBJTXlEYXRlTW9kZWwgPSB0aGlzLnV0aWxTZXJ2aWNlLmdldERhdGVNb2RlbChkYXRlLCBudWxsLCBkYXRlRm9ybWF0LCBtb250aExhYmVscywgZGF0ZVJhbmdlRGF0ZXNEZWxpbWl0ZXIpO1xuICAgICAgICAgIHRoaXMuZW1pdERhdGVDaGFuZ2VkKGRhdGVNb2RlbCk7XG4gICAgICAgICAgdGhpcy51cGRhdGVNb2RlbChkYXRlTW9kZWwpO1xuICAgICAgICAgIGlmIChjbG9zZVNlbGVjdG9yT25EYXRlU2VsZWN0KSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlU2VsZWN0b3IoQ2FsVG9nZ2xlLkNsb3NlQnlEYXRlU2VsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBkYXRlUmFuZ2U6IElNeURhdGVSYW5nZSA9IHRoaXMudXRpbFNlcnZpY2UuaXNEYXRlVmFsaWREYXRlUmFuZ2UodmFsdWUsIHRoaXMub3B0cyk7XG4gICAgICAgIGNvbnN0IHtiZWdpbiwgZW5kfSA9IGRhdGVSYW5nZTtcbiAgICAgICAgdmFsaWQgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzSW5pdGlhbGl6ZWREYXRlKGJlZ2luKSAmJiB0aGlzLnV0aWxTZXJ2aWNlLmlzSW5pdGlhbGl6ZWREYXRlKGVuZCk7XG4gICAgICAgIGlmICh2YWxpZCAmJiB0aGlzLmhvc3RUZXh0ICE9PSB2YWx1ZSkge1xuICAgICAgICAgIC8vIFZhbGlkIGRhdGUgcmFuZ2VcbiAgICAgICAgICBjb25zdCBkYXRlTW9kZWw6IElNeURhdGVNb2RlbCA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF0ZU1vZGVsKG51bGwsIGRhdGVSYW5nZSwgZGF0ZUZvcm1hdCwgbW9udGhMYWJlbHMsIGRhdGVSYW5nZURhdGVzRGVsaW1pdGVyKTtcbiAgICAgICAgICB0aGlzLmVtaXREYXRlQ2hhbmdlZChkYXRlTW9kZWwpO1xuICAgICAgICAgIHRoaXMudXBkYXRlTW9kZWwoZGF0ZU1vZGVsKTtcbiAgICAgICAgICBpZiAoY2xvc2VTZWxlY3Rvck9uRGF0ZVNlbGVjdCkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZVNlbGVjdG9yKENhbFRvZ2dsZS5DbG9zZUJ5RGF0ZVNlbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghdmFsaWQgJiYgdGhpcy5ob3N0VGV4dCAhPT0gdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBFTVBUWV9TVFIpIHtcbiAgICAgICAgICB0aGlzLmNsZWFyRGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMub25DaGFuZ2VDYihudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3RUZXh0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5vblRvdWNoZWRDYigpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkNsaWNrV3JhcHBlciA9IChldnQ6IGFueSkgPT4gdGhpcy5vbkNsaWNrKGV2dCk7XG5cbiAgcHJpdmF0ZSBvbkNsaWNrKGV2dDogYW55KSB7XG4gICAgaWYgKHRoaXMub3B0cy5jbG9zZVNlbGVjdG9yT25Eb2N1bWVudENsaWNrICYmICF0aGlzLnByZXZlbnRDbG9zZSAmJiBldnQudGFyZ2V0ICYmIHRoaXMuY1JlZiAhPT0gbnVsbCAmJiB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCAhPT0gZXZ0LnRhcmdldCAmJiAhdGhpcy5jUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZ0LnRhcmdldCkgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VTZWxlY3RvcihDYWxUb2dnbGUuQ2xvc2VCeU91dENsaWNrKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KExPQ0FMRSkpIHtcbiAgICAgIHRoaXMuc2V0TG9jYWxlT3B0aW9ucygpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KERFRkFVTFRfTU9OVEgpKSB7XG4gICAgICBsZXQgZG06IGFueSA9IGNoYW5nZXNbREVGQVVMVF9NT05USF0uY3VycmVudFZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiBkbSA9PT0gT0JKRUNUKSB7XG4gICAgICAgIGRtID0gZG0uZGVmTW9udGg7XG4gICAgICB9XG4gICAgICB0aGlzLmRlZmF1bHRNb250aCA9IGRtO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KE9QVElPTlMpKSB7XG4gICAgICB0aGlzLnBhcnNlT3B0aW9ucyhjaGFuZ2VzW09QVElPTlNdLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY1JlZiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5jUmVmLmluc3RhbmNlLnJlZnJlc2hDb21wb25lbnQodGhpcy5vcHRzKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZUNhbGVuZGFyKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0TG9jYWxlT3B0aW9ucygpOiB2b2lkIHtcbiAgICBjb25zdCBvcHRzOiBJTXlPcHRpb25zID0gdGhpcy5sb2NhbGVTZXJ2aWNlLmdldExvY2FsZU9wdGlvbnModGhpcy5sb2NhbGUpO1xuICAgIE9iamVjdC5rZXlzKG9wdHMpLmZvckVhY2goKGspID0+IHtcbiAgICAgICg8SU15T3B0aW9ucz4gdGhpcy5vcHRzKVtrXSA9IG9wdHNba107XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcGFyc2VPcHRpb25zKG9wdHM6IElNeU9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAob3B0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBPYmplY3Qua2V5cyhvcHRzKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgICg8SU15T3B0aW9ucz4gdGhpcy5vcHRzKVtrXSA9IG9wdHNba107XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0cy5taW5ZZWFyIDwgWWVhci5taW4pIHtcbiAgICAgIHRoaXMub3B0cy5taW5ZZWFyID0gWWVhci5taW47XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdHMubWF4WWVhciA+IFllYXIubWF4KSB7XG4gICAgICB0aGlzLm9wdHMubWF4WWVhciA9IFllYXIubWF4O1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRzLm9wZW5TZWxlY3RvclRvcE9mSW5wdXQgfHwgdGhpcy5vcHRzLmlubGluZSkge1xuICAgICAgdGhpcy5vcHRzLnNob3dTZWxlY3RvckFycm93ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdHMuaW5saW5lKSB7XG4gICAgICB0aGlzLm9wZW5DYWxlbmRhcigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHtkYXRlRm9ybWF0LCBtb250aExhYmVscywgZGF0ZVJhbmdlRGF0ZXNEZWxpbWl0ZXJ9ID0gdGhpcy5vcHRzO1xuXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5zZXRIb3N0VmFsdWUoRU1QVFlfU1RSKTtcbiAgICAgIHRoaXMuZW1pdElucHV0RmllbGRDaGFuZ2VkKEVNUFRZX1NUUiwgZmFsc2UpO1xuXG4gICAgICBpZiAodGhpcy5jUmVmICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuY1JlZi5pbnN0YW5jZS5yZXNldERhdGVWYWx1ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICghdmFsdWUuaXNSYW5nZSAmJiB2YWx1ZS5zaW5nbGVEYXRlKSB7XG4gICAgICAvLyBzaW5nbGUgZGF0ZVxuICAgICAgbGV0IHtkYXRlLCBqc0RhdGV9ID0gdmFsdWUuc2luZ2xlRGF0ZTtcbiAgICAgIGlmICghZGF0ZSkge1xuICAgICAgICBkYXRlID0gdGhpcy5qc0RhdGVUb015RGF0ZShqc0RhdGUpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zdCBmb3JtYXR0ZWQ6IHN0cmluZyA9IHRoaXMudXRpbFNlcnZpY2UuZm9ybWF0RGF0ZShkYXRlLCBkYXRlRm9ybWF0LCBtb250aExhYmVscyk7XG4gICAgICBjb25zdCB2YWxpZDogYm9vbGVhbiA9IHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUodGhpcy51dGlsU2VydmljZS5pc0RhdGVWYWxpZChmb3JtYXR0ZWQsIHRoaXMub3B0cykpO1xuICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgIHRoaXMuc2V0SG9zdFZhbHVlKGZvcm1hdHRlZCk7XG4gICAgICAgIHRoaXMuZW1pdElucHV0RmllbGRDaGFuZ2VkKGZvcm1hdHRlZCwgdmFsaWQpO1xuXG4gICAgICAgIGlmICh0aGlzLmNSZWYgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmNSZWYuaW5zdGFuY2Uuc2V0RGF0ZVZhbHVlKGRhdGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlLmlzUmFuZ2UgJiYgdmFsdWUuZGF0ZVJhbmdlKSB7XG4gICAgICAvLyBkYXRlIHJhbmdlXG4gICAgICBsZXQge2JlZ2luRGF0ZSwgYmVnaW5Kc0RhdGUsIGVuZERhdGUsIGVuZEpzRGF0ZX0gPSB2YWx1ZS5kYXRlUmFuZ2U7XG4gICAgICBpZiAoIWJlZ2luRGF0ZSB8fCAhZW5kRGF0ZSkge1xuICAgICAgICBiZWdpbkRhdGUgPSB0aGlzLmpzRGF0ZVRvTXlEYXRlKGJlZ2luSnNEYXRlKTtcbiAgICAgICAgZW5kRGF0ZSA9IHRoaXMuanNEYXRlVG9NeURhdGUoZW5kSnNEYXRlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9ybWF0dGVkOiBzdHJpbmcgPVxuICAgICAgICB0aGlzLnV0aWxTZXJ2aWNlLmZvcm1hdERhdGUoYmVnaW5EYXRlLCBkYXRlRm9ybWF0LCBtb250aExhYmVscykgKyBkYXRlUmFuZ2VEYXRlc0RlbGltaXRlciArXG4gICAgICAgIHRoaXMudXRpbFNlcnZpY2UuZm9ybWF0RGF0ZShlbmREYXRlLCBkYXRlRm9ybWF0LCBtb250aExhYmVscyk7XG4gICAgICBjb25zdCB7YmVnaW4sIGVuZH0gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGF0ZVZhbGlkRGF0ZVJhbmdlKGZvcm1hdHRlZCwgdGhpcy5vcHRzKTtcbiAgICAgIGNvbnN0IHZhbGlkOiBib29sZWFuID0gdGhpcy51dGlsU2VydmljZS5pc0luaXRpYWxpemVkRGF0ZShiZWdpbikgJiYgdGhpcy51dGlsU2VydmljZS5pc0luaXRpYWxpemVkRGF0ZShlbmQpO1xuICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgIHRoaXMuc2V0SG9zdFZhbHVlKGZvcm1hdHRlZCk7XG4gICAgICAgIHRoaXMuZW1pdElucHV0RmllbGRDaGFuZ2VkKGZvcm1hdHRlZCwgdmFsaWQpO1xuXG4gICAgICAgIGlmICh0aGlzLmNSZWYgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmNSZWYuaW5zdGFuY2Uuc2V0RGF0ZVJhbmdlVmFsdWUoYmVnaW5EYXRlLCBlbmREYXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2IgPSBmbjtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWRDYiA9IGZuO1xuICB9XG5cbiAgcHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQsIERJU0FCTEVELCBpc0Rpc2FibGVkKTtcblxuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmNsb3NlQ2FsZW5kYXIoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogeyBbcDogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSB0aGlzLmdldEhvc3RWYWx1ZSgpO1xuXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBFTVBUWV9TVFIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5vcHRzLmRhdGVSYW5nZSkge1xuICAgICAgY29uc3QgZGF0ZTogSU15RGF0ZSA9IHRoaXMudXRpbFNlcnZpY2UuaXNEYXRlVmFsaWQodmFsdWUsIHRoaXMub3B0cyk7XG4gICAgICBpZiAoIXRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoZGF0ZSkpIHtcbiAgICAgICAgcmV0dXJuIHtpbnZhbGlkRGF0ZUZvcm1hdDogdHJ1ZX07XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc3Qge2JlZ2luLCBlbmR9ID0gdGhpcy51dGlsU2VydmljZS5pc0RhdGVWYWxpZERhdGVSYW5nZSh2YWx1ZSwgdGhpcy5vcHRzKTtcbiAgICAgIGlmICghdGhpcy51dGlsU2VydmljZS5pc0luaXRpYWxpemVkRGF0ZShiZWdpbikgfHwgIXRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoZW5kKSkge1xuICAgICAgICByZXR1cm4ge2ludmFsaWREYXRlRm9ybWF0OiB0cnVlfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgb3BlbkNhbGVuZGFyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJldmVudENsb3NlID0gdHJ1ZTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgaWYgKHRoaXMuY1JlZiA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5jUmVmID0gdGhpcy52Y1JlZi5jcmVhdGVDb21wb25lbnQodGhpcy5jZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoQ2FsZW5kYXJDb21wb25lbnQpKTtcbiAgICAgIHRoaXMuYXBwZW5kU2VsZWN0b3IodGhpcy5jUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgdGhpcy5jUmVmLmluc3RhbmNlLmluaXRpYWxpemVDb21wb25lbnQoXG4gICAgICAgIHRoaXMub3B0cyxcbiAgICAgICAgdGhpcy5kZWZhdWx0TW9udGgsXG4gICAgICAgIHRoaXMuZ2V0U2VsZWN0b3JQb3NpdGlvbih0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCksXG4gICAgICAgIHRoaXMuZ2V0SG9zdFZhbHVlKCksXG4gICAgICAgIChkbTogSU15RGF0ZU1vZGVsLCBjbG9zZTogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIHRoaXMuZm9jdXNUb0lucHV0KCk7XG4gICAgICAgICAgdGhpcy5lbWl0RGF0ZUNoYW5nZWQoZG0pO1xuICAgICAgICAgIHRoaXMuZW1pdElucHV0RmllbGRDaGFuZ2VkKHRoaXMudXRpbFNlcnZpY2UuZ2V0Rm9ybWF0dGVkRGF0ZShkbSksIHRydWUpO1xuICAgICAgICAgIHRoaXMudXBkYXRlTW9kZWwoZG0pO1xuICAgICAgICAgIGlmIChjbG9zZSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZVNlbGVjdG9yKENhbFRvZ2dsZS5DbG9zZUJ5RGF0ZVNlbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoY3ZjOiBJTXlDYWxlbmRhclZpZXdDaGFuZ2VkKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbWl0Q2FsZW5kYXJDaGFuZ2VkKGN2Yyk7XG4gICAgICAgIH0sXG4gICAgICAgIChyZHM6IElNeVJhbmdlRGF0ZVNlbGVjdGlvbikgPT4ge1xuICAgICAgICAgIHRoaXMuZW1pdFJhbmdlRGF0ZVNlbGVjdGlvbihyZHMpO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jbG9zZVNlbGVjdG9yKENhbFRvZ2dsZS5DbG9zZUJ5RXNjKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHRoaXMuZW1pdENhbGVuZGFyVG9nZ2xlKENhbFRvZ2dsZS5PcGVuKTtcblxuICAgICAgaWYgKCF0aGlzLm9wdHMuaW5saW5lKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoQ0xJQ0ssIHRoaXMub25DbGlja1dyYXBwZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucHJldmVudENsb3NlID0gZmFsc2U7XG4gICAgfSwgUFJFVkVOVF9DTE9TRV9USU1FT1VUKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZUNhbGVuZGFyKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VTZWxlY3RvcihDYWxUb2dnbGUuQ2xvc2VCeUNhbEJ0bik7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlQ2FsZW5kYXIoKTogYm9vbGVhbiB8IG51bGwge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaXNPcGVuOiBib29sZWFuID0gdGhpcy5jUmVmID09PSBudWxsO1xuXG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgdGhpcy5vcGVuQ2FsZW5kYXIoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlU2VsZWN0b3IoQ2FsVG9nZ2xlLkNsb3NlQnlDYWxCdG4pO1xuICAgIH1cbiAgICByZXR1cm4gaXNPcGVuO1xuICB9XG5cbiAgcHVibGljIGNsZWFyRGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldEhvc3RWYWx1ZShFTVBUWV9TVFIpO1xuICAgIHRoaXMuZW1pdERhdGVDaGFuZ2VkKHtcbiAgICAgIGlzUmFuZ2U6IHRoaXMub3B0cy5kYXRlUmFuZ2UsXG4gICAgICBzaW5nbGVEYXRlOiB7XG4gICAgICAgIGRhdGU6IHRoaXMudXRpbFNlcnZpY2UucmVzZXREYXRlKCksXG4gICAgICAgIGpzRGF0ZTogbnVsbCxcbiAgICAgICAgZm9ybWF0dGVkOiBFTVBUWV9TVFIsXG4gICAgICAgIGVwb2M6IDBcbiAgICAgIH0sXG4gICAgICBkYXRlUmFuZ2U6IHtcbiAgICAgICAgYmVnaW5EYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLnJlc2V0RGF0ZSgpLFxuICAgICAgICBiZWdpbkpzRGF0ZTogbnVsbCxcbiAgICAgICAgYmVnaW5FcG9jOiAwLFxuICAgICAgICBlbmREYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLnJlc2V0RGF0ZSgpLFxuICAgICAgICBlbmRKc0RhdGU6IG51bGwsXG4gICAgICAgIGVuZEVwb2M6IDAsXG4gICAgICAgIGZvcm1hdHRlZDogRU1QVFlfU1RSXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vbkNoYW5nZUNiKG51bGwpO1xuICAgIHRoaXMub25Ub3VjaGVkQ2IoKTtcbiAgICB0aGlzLmNsb3NlU2VsZWN0b3IoQ2FsVG9nZ2xlLkNsb3NlQnlDYWxCdG4pO1xuICB9XG5cbiAgcHVibGljIGlzRGF0ZVZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSB0aGlzLmdldEhvc3RWYWx1ZSgpO1xuXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBFTVBUWV9TVFIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3B0cy5kYXRlUmFuZ2UpIHtcbiAgICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGF0ZVZhbGlkKHZhbHVlLCB0aGlzLm9wdHMpO1xuICAgICAgaWYgKHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoZGF0ZSkpIHtcbiAgICAgICAgdGhpcy5lbWl0SW5wdXRGaWVsZENoYW5nZWQodmFsdWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCB7YmVnaW4sIGVuZH0gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGF0ZVZhbGlkRGF0ZVJhbmdlKHZhbHVlLCB0aGlzLm9wdHMpO1xuICAgICAgaWYgKHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoYmVnaW4pICYmIHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoZW5kKSkge1xuICAgICAgICB0aGlzLmVtaXRJbnB1dEZpZWxkQ2hhbmdlZCh2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0aGlzLmVtaXRJbnB1dEZpZWxkQ2hhbmdlZCh2YWx1ZSwgZmFsc2UpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgaWdub3JlS2V5UHJlc3Moa2V5Q29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGtleUNvZGUgPT09IEtleUNvZGUubGVmdEFycm93IHx8IGtleUNvZGUgPT09IEtleUNvZGUucmlnaHRBcnJvdyB8fCBrZXlDb2RlID09PSBLZXlDb2RlLnVwQXJyb3cgfHwga2V5Q29kZSA9PT0gS2V5Q29kZS5kb3duQXJyb3cgfHwga2V5Q29kZSA9PT0gS2V5Q29kZS50YWIgfHwga2V5Q29kZSA9PT0gS2V5Q29kZS5zaGlmdDtcbiAgfVxuXG4gIHByaXZhdGUgb25BbmltYXRlV3JhcHBlciA9IChyZWFzb246IG51bWJlcikgPT4gdGhpcy5hbmltYXRpb25FbmQocmVhc29uKTtcblxuICBwcml2YXRlIGFuaW1hdGlvbkVuZChyZWFzb246IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmNSZWYgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuY1JlZi5pbnN0YW5jZS5zZWxlY3RvckVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihBTklNQVRJT05fRU5ELCB0aGlzLm9uQW5pbWF0ZVdyYXBwZXIpO1xuICAgICAgdGhpcy5yZW1vdmVDb21wb25lbnQoKTtcbiAgICAgIHRoaXMuZW1pdENhbGVuZGFyVG9nZ2xlKHJlYXNvbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZVNlbGVjdG9yKHJlYXNvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qge2lubGluZSwgY2FsZW5kYXJBbmltYXRpb259ID0gdGhpcy5vcHRzO1xuICAgIFxuICAgIGlmICh0aGlzLmNSZWYgIT09IG51bGwgJiYgIWlubGluZSkge1xuICAgICAgaWYgKGNhbGVuZGFyQW5pbWF0aW9uLm91dCAhPT0gQ2FsQW5pbWF0aW9uLk5vbmUpIHtcbiAgICAgICAgY29uc3Qge2luc3RhbmNlfSA9IHRoaXMuY1JlZjtcbiAgICAgICAgaW5zdGFuY2Uuc2VsZWN0b3JFbC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoQU5JTUFUSU9OX0VORCwgdGhpcy5vbkFuaW1hdGVXcmFwcGVyLmJpbmQodGhpcywgcmVhc29uKSk7XG4gICAgICAgIGluc3RhbmNlLnNldENhbGVuZGFyQW5pbWF0aW9uKGNhbGVuZGFyQW5pbWF0aW9uLCBmYWxzZSk7XG5cbiAgICAgICAgLy8gSW4gY2FzZSB0aGUgYW5pbWF0aW9uZW5kIGV2ZW50IGlzIG5vdCBmaXJlZFxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMub25BbmltYXRlV3JhcHBlci5iaW5kKHRoaXMsIHJlYXNvbiksIEFOSU1BVElPTl9USU1FT1VUKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZUNvbXBvbmVudCgpO1xuICAgICAgICB0aGlzLmVtaXRDYWxlbmRhclRvZ2dsZShyZWFzb24pO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKENMSUNLLCB0aGlzLm9uQ2xpY2tXcmFwcGVyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUNvbXBvbmVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52Y1JlZiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy52Y1JlZi5yZW1vdmUodGhpcy52Y1JlZi5pbmRleE9mKHRoaXMuY1JlZi5ob3N0VmlldykpO1xuICAgICAgdGhpcy5jUmVmID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgXG4gIHByaXZhdGUgdXBkYXRlTW9kZWwobW9kZWw6IElNeURhdGVNb2RlbCk6IHZvaWQge1xuICAgIHRoaXMuc2V0SG9zdFZhbHVlKHRoaXMudXRpbFNlcnZpY2UuZ2V0Rm9ybWF0dGVkRGF0ZShtb2RlbCkpO1xuICAgIHRoaXMub25DaGFuZ2VDYihtb2RlbCk7XG4gICAgdGhpcy5vblRvdWNoZWRDYigpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRIb3N0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHtkaXZIb3N0RWxlbWVudH0gPSB0aGlzLm9wdHM7XG4gICAgdGhpcy5ob3N0VGV4dCA9IHZhbHVlO1xuICAgIGNvbnN0IHZhbHVlVHlwZTogc3RyaW5nID0gIWRpdkhvc3RFbGVtZW50LmVuYWJsZWQgPyBWQUxVRSA6IElOTkVSX0hUTUw7XG4gICAgdmFsdWUgPSB2YWx1ZVR5cGUgPT09IElOTkVSX0hUTUwgJiYgdmFsdWUgPT09IEVNUFRZX1NUUiA/IGRpdkhvc3RFbGVtZW50LnBsYWNlaG9sZGVyIDogdmFsdWU7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCwgdmFsdWVUeXBlLCB2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldEhvc3RWYWx1ZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHt2YWx1ZSwgaW5uZXJIVE1MfSA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50O1xuICAgIHJldHVybiAhdGhpcy5vcHRzLmRpdkhvc3RFbGVtZW50LmVuYWJsZWQgPyB2YWx1ZSA6IGlubmVySFRNTDtcbiAgfVxuXG4gIHByaXZhdGUgZm9jdXNUb0lucHV0KCk6IHZvaWQge1xuICAgIGNvbnN0IHtmb2N1c0lucHV0T25EYXRlU2VsZWN0LCBkaXZIb3N0RWxlbWVudH0gPSB0aGlzLm9wdHM7XG4gICAgaWYgKGZvY3VzSW5wdXRPbkRhdGVTZWxlY3QgJiYgIWRpdkhvc3RFbGVtZW50LmVuYWJsZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBlbWl0RGF0ZUNoYW5nZWQoZGF0ZU1vZGVsOiBJTXlEYXRlTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGVDaGFuZ2VkLmVtaXQoZGF0ZU1vZGVsKTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdElucHV0RmllbGRDaGFuZ2VkKHZhbHVlOiBzdHJpbmcsIHZhbGlkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dEZpZWxkQ2hhbmdlZC5lbWl0KHt2YWx1ZSwgZGF0ZUZvcm1hdDogdGhpcy5vcHRzLmRhdGVGb3JtYXQsIHZhbGlkfSk7XG4gIH1cblxuICBwcml2YXRlIGVtaXRDYWxlbmRhckNoYW5nZWQoY3ZjOiBJTXlDYWxlbmRhclZpZXdDaGFuZ2VkKSB7XG4gICAgdGhpcy5jYWxlbmRhclZpZXdDaGFuZ2VkLmVtaXQoY3ZjKTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdFJhbmdlRGF0ZVNlbGVjdGlvbihyZHM6IElNeVJhbmdlRGF0ZVNlbGVjdGlvbikge1xuICAgIHRoaXMucmFuZ2VEYXRlU2VsZWN0aW9uLmVtaXQocmRzKTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdENhbGVuZGFyVG9nZ2xlKHJlYXNvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KHJlYXNvbik7XG4gIH1cblxuICBwcml2YXRlIGpzRGF0ZVRvTXlEYXRlKGRhdGU6IERhdGUpOiBJTXlEYXRlIHtcbiAgICByZXR1cm4ge3llYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGg6IGRhdGUuZ2V0TW9udGgoKSArIDEsIGRheTogZGF0ZS5nZXREYXRlKCl9O1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBlbmRTZWxlY3RvcihlbGVtOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRzLmFwcGVuZFNlbGVjdG9yVG9Cb2R5KSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKEJPRFkpLmFwcGVuZENoaWxkKGVsZW0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VsZWN0b3JQb3NpdGlvbihlbGVtOiBhbnkpOiBJTXlTZWxlY3RvclBvc2l0aW9uIHtcbiAgICBsZXQgdG9wOiBudW1iZXIgPSAwO1xuICAgIGxldCBsZWZ0OiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3Qge2FwcGVuZFNlbGVjdG9yVG9Cb2R5LCBvcGVuU2VsZWN0b3JUb3BPZklucHV0LCBzZWxlY3RvckhlaWdodCwgc2VsZWN0b3JXaWR0aCwgc2hvd1NlbGVjdG9yQXJyb3csIGFsaWduU2VsZWN0b3JSaWdodH0gPSB0aGlzLm9wdHM7XG5cbiAgICBpZiAoYXBwZW5kU2VsZWN0b3JUb0JvZHkpIHtcbiAgICAgIGNvbnN0IGI6IGFueSA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBlOiBhbnkgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdG9wID0gZS50b3AgLSBiLnRvcDtcbiAgICAgIGxlZnQgPSBlLmxlZnQgLSBiLmxlZnQ7XG4gICAgfVxuXG4gICAgaWYgKG9wZW5TZWxlY3RvclRvcE9mSW5wdXQpIHtcbiAgICAgIHRvcCA9IHRvcCAtIHRoaXMuZ2V0U2VsZWN0b3JEaW1lbnNpb24oc2VsZWN0b3JIZWlnaHQpIC0gMjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0b3AgPSB0b3AgKyBlbGVtLm9mZnNldEhlaWdodCArIChzaG93U2VsZWN0b3JBcnJvdyA/IDEyIDogMik7XG4gICAgfVxuXG4gICAgaWYgKGFsaWduU2VsZWN0b3JSaWdodCkge1xuICAgICAgbGVmdCA9IGxlZnQgKyBlbGVtLm9mZnNldFdpZHRoIC0gdGhpcy5nZXRTZWxlY3RvckRpbWVuc2lvbihzZWxlY3RvcldpZHRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHt0b3A6IHRvcCArIFBYLCBsZWZ0OiBsZWZ0ICsgUFh9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZWxlY3RvckRpbWVuc2lvbih2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTnVtYmVyKHZhbHVlLnJlcGxhY2UoUFgsIEVNUFRZX1NUUikpO1xuICB9XG59XG4iXX0=