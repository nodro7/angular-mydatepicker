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
var NGX_DP_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return AngularMyDatePickerDirective; })),
    multi: true
};
/** @type {?} */
var NGX_DP_VALIDATORS = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return AngularMyDatePickerDirective; })),
    multi: true
};
var AngularMyDatePickerDirective = /** @class */ (function () {
    function AngularMyDatePickerDirective(localeService, utilService, vcRef, cfr, renderer, cdr, elem, config) {
        var _this = this;
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
        function () { });
        this.onTouchedCb = (/**
         * @return {?}
         */
        function () { });
        this.onClickWrapper = (/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) { return _this.onClick(evt); });
        this.onAnimateWrapper = (/**
         * @param {?} reason
         * @return {?}
         */
        function (reason) { return _this.animationEnd(reason); });
        this.opts = this.config.getDefaultConfig();
        this.parseOptions(this.opts);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.onKeyUp = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = this.utilService.getKeyCodeFromEvent(event);
        if (this.ignoreKeyPress(keyCode)) {
            return;
        }
        if (keyCode === KeyCode.esc) {
            this.closeSelector(CalToggle.CloseByEsc);
        }
        else {
            var _a = this.opts, dateRange = _a.dateRange, dateFormat = _a.dateFormat, monthLabels = _a.monthLabels, dateRangeDatesDelimiter = _a.dateRangeDatesDelimiter;
            /** @type {?} */
            var value = this.getHostValue();
            /** @type {?} */
            var dateModel = null;
            /** @type {?} */
            var valid = false;
            if (!dateRange) {
                /** @type {?} */
                var date = this.utilService.isDateValid(value, this.opts);
                valid = this.utilService.isInitializedDate(date);
                if (valid) {
                    dateModel = this.utilService.getDateModel(date, null, dateFormat, monthLabels, dateRangeDatesDelimiter);
                }
            }
            else {
                /** @type {?} */
                var range = this.utilService.isDateValidDateRange(value, this.opts);
                var begin = range.begin, end = range.end;
                valid = this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end);
                if (valid) {
                    dateModel = this.utilService.getDateModel(null, range, dateFormat, monthLabels, dateRangeDatesDelimiter);
                }
            }
            this.onChangeCb(dateModel);
            this.onTouchedCb();
            this.emitInputFieldChanged(value, valid);
        }
    };
    /**
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        var _a = this.opts, inputFieldValidation = _a.inputFieldValidation, dateRange = _a.dateRange, dateFormat = _a.dateFormat, monthLabels = _a.monthLabels, dateRangeDatesDelimiter = _a.dateRangeDatesDelimiter, closeSelectorOnDateSelect = _a.closeSelectorOnDateSelect;
        if (inputFieldValidation) {
            /** @type {?} */
            var value = this.getHostValue();
            /** @type {?} */
            var valid = false;
            if (!dateRange) {
                /** @type {?} */
                var date = this.utilService.isDateValid(value, this.opts);
                valid = this.utilService.isInitializedDate(date);
                if (valid && this.hostText !== value) {
                    // Valid date
                    /** @type {?} */
                    var dateModel = this.utilService.getDateModel(date, null, dateFormat, monthLabels, dateRangeDatesDelimiter);
                    this.emitDateChanged(dateModel);
                    this.updateModel(dateModel);
                    if (closeSelectorOnDateSelect) {
                        this.closeSelector(CalToggle.CloseByDateSel);
                    }
                }
            }
            else {
                /** @type {?} */
                var dateRange_1 = this.utilService.isDateValidDateRange(value, this.opts);
                var begin = dateRange_1.begin, end = dateRange_1.end;
                valid = this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end);
                if (valid && this.hostText !== value) {
                    // Valid date range
                    /** @type {?} */
                    var dateModel = this.utilService.getDateModel(null, dateRange_1, dateFormat, monthLabels, dateRangeDatesDelimiter);
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
    };
    /**
     * @private
     * @param {?} evt
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.onClick = /**
     * @private
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        if (this.opts.closeSelectorOnDocumentClick && !this.preventClose && evt.target && this.cRef !== null && this.elem.nativeElement !== evt.target && !this.cRef.location.nativeElement.contains(evt.target) && !this.disabled) {
            this.closeSelector(CalToggle.CloseByOutClick);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty(LOCALE)) {
            this.setLocaleOptions();
        }
        if (changes.hasOwnProperty(DEFAULT_MONTH)) {
            /** @type {?} */
            var dm = changes[DEFAULT_MONTH].currentValue;
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
    };
    /**
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.closeCalendar();
    };
    /**
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.setLocaleOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var opts = this.localeService.getLocaleOptions(this.locale);
        Object.keys(opts).forEach((/**
         * @param {?} k
         * @return {?}
         */
        function (k) {
            ((/** @type {?} */ (_this.opts)))[k] = opts[k];
        }));
    };
    /**
     * @param {?} opts
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.parseOptions = /**
     * @param {?} opts
     * @return {?}
     */
    function (opts) {
        var _this = this;
        if (opts !== undefined) {
            Object.keys(opts).forEach((/**
             * @param {?} k
             * @return {?}
             */
            function (k) {
                ((/** @type {?} */ (_this.opts)))[k] = opts[k];
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
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.disabled) {
            return;
        }
        var _a = this.opts, dateFormat = _a.dateFormat, monthLabels = _a.monthLabels, dateRangeDatesDelimiter = _a.dateRangeDatesDelimiter;
        if (!value) {
            this.setHostValue(EMPTY_STR);
            this.emitInputFieldChanged(EMPTY_STR, false);
            if (this.cRef !== null) {
                this.cRef.instance.resetDateValue();
            }
        }
        else if (!value.isRange && value.singleDate) {
            // single date
            var _b = value.singleDate, date = _b.date, jsDate = _b.jsDate;
            if (!date) {
                date = this.jsDateToMyDate(jsDate);
            }
            /** @type {?} */
            var formatted = this.utilService.formatDate(date, dateFormat, monthLabels);
            /** @type {?} */
            var valid = this.utilService.isInitializedDate(this.utilService.isDateValid(formatted, this.opts));
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
            var _c = value.dateRange, beginDate = _c.beginDate, beginJsDate = _c.beginJsDate, endDate = _c.endDate, endJsDate = _c.endJsDate;
            if (!beginDate || !endDate) {
                beginDate = this.jsDateToMyDate(beginJsDate);
                endDate = this.jsDateToMyDate(endJsDate);
            }
            /** @type {?} */
            var formatted = this.utilService.formatDate(beginDate, dateFormat, monthLabels) + dateRangeDatesDelimiter +
                this.utilService.formatDate(endDate, dateFormat, monthLabels);
            var _d = this.utilService.isDateValidDateRange(formatted, this.opts), begin = _d.begin, end = _d.end;
            /** @type {?} */
            var valid = this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end);
            if (valid) {
                this.setHostValue(formatted);
                this.emitInputFieldChanged(formatted, valid);
                if (this.cRef !== null) {
                    this.cRef.instance.setDateRangeValue(beginDate, endDate);
                }
            }
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCb = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCb = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.renderer.setProperty(this.elem.nativeElement, DISABLED, isDisabled);
        if (isDisabled) {
            this.closeCalendar();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        var value = this.getHostValue();
        if (value === null || value === EMPTY_STR) {
            return null;
        }
        if (!this.opts.dateRange) {
            /** @type {?} */
            var date = this.utilService.isDateValid(value, this.opts);
            if (!this.utilService.isInitializedDate(date)) {
                return { invalidDateFormat: true };
            }
        }
        else {
            var _a = this.utilService.isDateValidDateRange(value, this.opts), begin = _a.begin, end = _a.end;
            if (!this.utilService.isInitializedDate(begin) || !this.utilService.isInitializedDate(end)) {
                return { invalidDateFormat: true };
            }
        }
        return null;
    };
    /**
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.openCalendar = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
            function (dm, close) {
                _this.focusToInput();
                _this.emitDateChanged(dm);
                _this.emitInputFieldChanged(_this.utilService.getFormattedDate(dm), true);
                _this.updateModel(dm);
                if (close) {
                    _this.closeSelector(CalToggle.CloseByDateSel);
                }
            }), (/**
             * @param {?} cvc
             * @return {?}
             */
            function (cvc) {
                _this.emitCalendarChanged(cvc);
            }), (/**
             * @param {?} rds
             * @return {?}
             */
            function (rds) {
                _this.emitRangeDateSelection(rds);
            }), (/**
             * @return {?}
             */
            function () {
                _this.closeSelector(CalToggle.CloseByEsc);
            }));
            this.emitCalendarToggle(CalToggle.Open);
            if (!this.opts.inline) {
                document.addEventListener(CLICK, this.onClickWrapper);
            }
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.preventClose = false;
        }), PREVENT_CLOSE_TIMEOUT);
    };
    /**
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.closeCalendar = /**
     * @return {?}
     */
    function () {
        this.closeSelector(CalToggle.CloseByCalBtn);
    };
    /**
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.toggleCalendar = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        /** @type {?} */
        var isOpen = this.cRef === null;
        if (isOpen) {
            this.openCalendar();
        }
        else {
            this.closeSelector(CalToggle.CloseByCalBtn);
        }
        return isOpen;
    };
    /**
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.clearDate = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.isDateValid = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.getHostValue();
        if (value === null || value === EMPTY_STR) {
            return false;
        }
        if (!this.opts.dateRange) {
            /** @type {?} */
            var date = this.utilService.isDateValid(value, this.opts);
            if (this.utilService.isInitializedDate(date)) {
                this.emitInputFieldChanged(value, true);
                return true;
            }
        }
        else {
            var _a = this.utilService.isDateValidDateRange(value, this.opts), begin = _a.begin, end = _a.end;
            if (this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end)) {
                this.emitInputFieldChanged(value, true);
                return true;
            }
        }
        this.emitInputFieldChanged(value, false);
        return false;
    };
    /**
     * @private
     * @param {?} keyCode
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.ignoreKeyPress = /**
     * @private
     * @param {?} keyCode
     * @return {?}
     */
    function (keyCode) {
        return keyCode === KeyCode.leftArrow || keyCode === KeyCode.rightArrow || keyCode === KeyCode.upArrow || keyCode === KeyCode.downArrow || keyCode === KeyCode.tab || keyCode === KeyCode.shift;
    };
    /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.animationEnd = /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    function (reason) {
        if (this.cRef !== null) {
            this.cRef.instance.selectorEl.nativeElement.removeEventListener(ANIMATION_END, this.onAnimateWrapper);
            this.removeComponent();
            this.emitCalendarToggle(reason);
        }
    };
    /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.closeSelector = /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    function (reason) {
        var _a = this.opts, inline = _a.inline, calendarAnimation = _a.calendarAnimation;
        if (this.cRef !== null && !inline) {
            if (calendarAnimation.out !== CalAnimation.None) {
                var instance = this.cRef.instance;
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
    };
    /**
     * @private
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.removeComponent = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.vcRef !== null) {
            this.vcRef.remove(this.vcRef.indexOf(this.cRef.hostView));
            this.cRef = null;
        }
    };
    /**
     * @private
     * @param {?} model
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.updateModel = /**
     * @private
     * @param {?} model
     * @return {?}
     */
    function (model) {
        this.setHostValue(this.utilService.getFormattedDate(model));
        this.onChangeCb(model);
        this.onTouchedCb();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.setHostValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var divHostElement = this.opts.divHostElement;
        this.hostText = value;
        /** @type {?} */
        var valueType = !divHostElement.enabled ? VALUE : INNER_HTML;
        value = valueType === INNER_HTML && value === EMPTY_STR ? divHostElement.placeholder : value;
        this.renderer.setProperty(this.elem.nativeElement, valueType, value);
    };
    /**
     * @private
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.getHostValue = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this.elem.nativeElement, value = _a.value, innerHTML = _a.innerHTML;
        return !this.opts.divHostElement.enabled ? value : innerHTML;
    };
    /**
     * @private
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.focusToInput = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this.opts, focusInputOnDateSelect = _a.focusInputOnDateSelect, divHostElement = _a.divHostElement;
        if (focusInputOnDateSelect && !divHostElement.enabled) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.elem.nativeElement.focus();
            }));
        }
    };
    /**
     * @private
     * @param {?} dateModel
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.emitDateChanged = /**
     * @private
     * @param {?} dateModel
     * @return {?}
     */
    function (dateModel) {
        this.dateChanged.emit(dateModel);
    };
    /**
     * @private
     * @param {?} value
     * @param {?} valid
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.emitInputFieldChanged = /**
     * @private
     * @param {?} value
     * @param {?} valid
     * @return {?}
     */
    function (value, valid) {
        this.inputFieldChanged.emit({ value: value, dateFormat: this.opts.dateFormat, valid: valid });
    };
    /**
     * @private
     * @param {?} cvc
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.emitCalendarChanged = /**
     * @private
     * @param {?} cvc
     * @return {?}
     */
    function (cvc) {
        this.calendarViewChanged.emit(cvc);
    };
    /**
     * @private
     * @param {?} rds
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.emitRangeDateSelection = /**
     * @private
     * @param {?} rds
     * @return {?}
     */
    function (rds) {
        this.rangeDateSelection.emit(rds);
    };
    /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.emitCalendarToggle = /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    function (reason) {
        this.calendarToggle.emit(reason);
    };
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.jsDateToMyDate = /**
     * @private
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    };
    /**
     * @private
     * @param {?} elem
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.appendSelector = /**
     * @private
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        if (this.opts.appendSelectorToBody) {
            document.querySelector(BODY).appendChild(elem);
        }
    };
    /**
     * @private
     * @param {?} elem
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.getSelectorPosition = /**
     * @private
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        /** @type {?} */
        var top = 0;
        /** @type {?} */
        var left = 0;
        var _a = this.opts, appendSelectorToBody = _a.appendSelectorToBody, openSelectorTopOfInput = _a.openSelectorTopOfInput, selectorHeight = _a.selectorHeight, selectorWidth = _a.selectorWidth, showSelectorArrow = _a.showSelectorArrow, alignSelectorRight = _a.alignSelectorRight;
        if (appendSelectorToBody) {
            /** @type {?} */
            var b = document.body.getBoundingClientRect();
            /** @type {?} */
            var e = elem.getBoundingClientRect();
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
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    AngularMyDatePickerDirective.prototype.getSelectorDimension = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return Number(value.replace(PX, EMPTY_STR));
    };
    AngularMyDatePickerDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[angular-mydatepicker]",
                    exportAs: "angular-mydatepicker",
                    providers: [UtilService, LocaleService, DefaultConfigService, NGX_DP_VALUE_ACCESSOR, NGX_DP_VALIDATORS]
                },] }
    ];
    /** @nocollapse */
    AngularMyDatePickerDirective.ctorParameters = function () { return [
        { type: LocaleService },
        { type: UtilService },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: DefaultConfigService }
    ]; };
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
    return AngularMyDatePickerDirective;
}());
export { AngularMyDatePickerDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1teWRhdGVwaWNrZXIuaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW15ZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLW15ZGF0ZXBpY2tlci5pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQWdCLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQ2hHLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUE0QixZQUFZLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUF3QyxhQUFhLEVBQUUsaUJBQWlCLEVBQVksTUFBTSxnQkFBZ0IsQ0FBQztBQUNsSCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQVMzRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFDN0UsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDdkMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzlDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQ3pHLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVB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Y3RpdmUsIElucHV0LCBDb21wb25lbnRSZWYsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGZvcndhcmRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2wsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiwgVmFsaWRhdG9yfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7Q2FsZW5kYXJDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0lNeURhdGV9IGZyb20gXCIuL2ludGVyZmFjZXMvbXktZGF0ZS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15T3B0aW9uc30gZnJvbSBcIi4vaW50ZXJmYWNlcy9teS1vcHRpb25zLmludGVyZmFjZVwiO1xuaW1wb3J0IHtJTXlEYXRlTW9kZWx9IGZyb20gXCIuL2ludGVyZmFjZXMvbXktZGF0ZS1tb2RlbC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15RGF0ZVJhbmdlfSBmcm9tIFwiLi9pbnRlcmZhY2VzL215LWRhdGUtcmFuZ2UuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeVJhbmdlRGF0ZVNlbGVjdGlvbn0gZnJvbSBcIi4vaW50ZXJmYWNlcy9teS1yYW5nZS1kYXRlLXNlbGVjdGlvbi5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15Q2FsZW5kYXJWaWV3Q2hhbmdlZH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9teS1jYWxlbmRhci12aWV3LWNoYW5nZWQuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeUlucHV0RmllbGRDaGFuZ2VkfSBmcm9tIFwiLi9pbnRlcmZhY2VzL215LWlucHV0LWZpZWxkLWNoYW5nZWQuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0lNeVNlbGVjdG9yUG9zaXRpb259IGZyb20gXCIuL2ludGVyZmFjZXMvbXktc2VsZWN0b3ItcG9zLmludGVyZmFjZVwiO1xuaW1wb3J0IHtMb2NhbGVTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9hbmd1bGFyLW15ZGF0ZXBpY2tlci5sb2NhbGUuc2VydmljZVwiO1xuaW1wb3J0IHtVdGlsU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvYW5ndWxhci1teWRhdGVwaWNrZXIudXRpbC5zZXJ2aWNlXCI7XG5pbXBvcnQge0RlZmF1bHRDb25maWdTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9hbmd1bGFyLW15ZGF0ZXBpY2tlci5jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtDYWxUb2dnbGV9IGZyb20gXCIuL2VudW1zL2NhbC10b2dnbGUuZW51bVwiO1xuaW1wb3J0IHtZZWFyfSBmcm9tIFwiLi9lbnVtcy95ZWFyLmVudW1cIjtcbmltcG9ydCB7S2V5Q29kZX0gZnJvbSBcIi4vZW51bXMva2V5LWNvZGUuZW51bVwiO1xuaW1wb3J0IHtDYWxBbmltYXRpb259IGZyb20gXCIuL2VudW1zL2NhbC1hbmltYXRpb24uZW51bVwiO1xuaW1wb3J0IHtLRVlVUCwgQkxVUiwgRU1QVFlfU1RSLCBESVNBQkxFRCwgQ0xJQ0ssIEJPRFksIFZBTFVFLCBQUkVWRU5UX0NMT1NFX1RJTUVPVVQsIE9QVElPTlMsIERFRkFVTFRfTU9OVEgsIFxuICBMT0NBTEUsIE9CSkVDVCwgUFgsIElOTkVSX0hUTUwsIEFOSU1BVElPTl9FTkQsIEFOSU1BVElPTl9USU1FT1VUfSBmcm9tIFwiLi9jb25zdGFudHMvY29uc3RhbnRzXCI7XG5cblxuY29uc3QgTkdYX0RQX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQW5ndWxhck15RGF0ZVBpY2tlckRpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5jb25zdCBOR1hfRFBfVkFMSURBVE9SUyA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQW5ndWxhck15RGF0ZVBpY2tlckRpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiW2FuZ3VsYXItbXlkYXRlcGlja2VyXVwiLFxuICBleHBvcnRBczogXCJhbmd1bGFyLW15ZGF0ZXBpY2tlclwiLFxuICBwcm92aWRlcnM6IFtVdGlsU2VydmljZSwgTG9jYWxlU2VydmljZSwgRGVmYXVsdENvbmZpZ1NlcnZpY2UsIE5HWF9EUF9WQUxVRV9BQ0NFU1NPUiwgTkdYX0RQX1ZBTElEQVRPUlNdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJNeURhdGVQaWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IElNeU9wdGlvbnM7XG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nO1xuICBASW5wdXQoKSBkZWZhdWx0TW9udGg6IHN0cmluZztcblxuICBAT3V0cHV0KCkgZGF0ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxJTXlEYXRlTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcjxJTXlEYXRlTW9kZWw+KCk7XG4gIEBPdXRwdXQoKSBpbnB1dEZpZWxkQ2hhbmdlZDogRXZlbnRFbWl0dGVyPElNeUlucHV0RmllbGRDaGFuZ2VkPiA9IG5ldyBFdmVudEVtaXR0ZXI8SU15SW5wdXRGaWVsZENoYW5nZWQ+KCk7XG4gIEBPdXRwdXQoKSBjYWxlbmRhclZpZXdDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8SU15Q2FsZW5kYXJWaWV3Q2hhbmdlZD4gPSBuZXcgRXZlbnRFbWl0dGVyPElNeUNhbGVuZGFyVmlld0NoYW5nZWQ+KCk7XG4gIEBPdXRwdXQoKSBjYWxlbmRhclRvZ2dsZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHJhbmdlRGF0ZVNlbGVjdGlvbjogRXZlbnRFbWl0dGVyPElNeVJhbmdlRGF0ZVNlbGVjdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPElNeVJhbmdlRGF0ZVNlbGVjdGlvbj4oKTtcblxuICBwcml2YXRlIGNSZWY6IENvbXBvbmVudFJlZjxDYWxlbmRhckNvbXBvbmVudD4gPSBudWxsO1xuICBwcml2YXRlIGhvc3RUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICBwcml2YXRlIHByZXZlbnRDbG9zZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBvcHRzOiBJTXlPcHRpb25zO1xuXG4gIG9uQ2hhbmdlQ2I6IChfOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7IH07XG4gIG9uVG91Y2hlZENiOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYWxlU2VydmljZTogTG9jYWxlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB1dGlsU2VydmljZTogVXRpbFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGVsZW06IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgY29uZmlnOiBEZWZhdWx0Q29uZmlnU2VydmljZSkge1xuICAgIHRoaXMub3B0cyA9IHRoaXMuY29uZmlnLmdldERlZmF1bHRDb25maWcoKTtcbiAgICB0aGlzLnBhcnNlT3B0aW9ucyh0aGlzLm9wdHMpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcihLRVlVUCwgW1wiJGV2ZW50XCJdKSBvbktleVVwKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBrZXlDb2RlOiBudW1iZXIgPSB0aGlzLnV0aWxTZXJ2aWNlLmdldEtleUNvZGVGcm9tRXZlbnQoZXZlbnQpO1xuICAgIGlmICh0aGlzLmlnbm9yZUtleVByZXNzKGtleUNvZGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGlmIChrZXlDb2RlID09PSBLZXlDb2RlLmVzYykge1xuICAgICAgdGhpcy5jbG9zZVNlbGVjdG9yKENhbFRvZ2dsZS5DbG9zZUJ5RXNjKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCB7ZGF0ZVJhbmdlLCBkYXRlRm9ybWF0LCBtb250aExhYmVscywgZGF0ZVJhbmdlRGF0ZXNEZWxpbWl0ZXJ9ID0gdGhpcy5vcHRzO1xuICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IHRoaXMuZ2V0SG9zdFZhbHVlKCk7XG5cbiAgICAgIGxldCBkYXRlTW9kZWw6IElNeURhdGVNb2RlbCA9IG51bGw7XG4gICAgICBsZXQgdmFsaWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgIGlmICghZGF0ZVJhbmdlKSB7XG4gICAgICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGF0ZVZhbGlkKHZhbHVlLCB0aGlzLm9wdHMpO1xuICAgICAgICB2YWxpZCA9IHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoZGF0ZSk7XG4gICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgIGRhdGVNb2RlbCA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF0ZU1vZGVsKGRhdGUsIG51bGwsIGRhdGVGb3JtYXQsIG1vbnRoTGFiZWxzLCBkYXRlUmFuZ2VEYXRlc0RlbGltaXRlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCByYW5nZSA9IHRoaXMudXRpbFNlcnZpY2UuaXNEYXRlVmFsaWREYXRlUmFuZ2UodmFsdWUsIHRoaXMub3B0cyk7XG4gICAgICAgIGNvbnN0IHtiZWdpbiwgZW5kfSA9IHJhbmdlO1xuICAgICAgICB2YWxpZCA9IHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoYmVnaW4pICYmIHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoZW5kKTtcbiAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgZGF0ZU1vZGVsID0gdGhpcy51dGlsU2VydmljZS5nZXREYXRlTW9kZWwobnVsbCwgcmFuZ2UsIGRhdGVGb3JtYXQsIG1vbnRoTGFiZWxzLCBkYXRlUmFuZ2VEYXRlc0RlbGltaXRlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMub25DaGFuZ2VDYihkYXRlTW9kZWwpO1xuICAgICAgdGhpcy5vblRvdWNoZWRDYigpO1xuXG4gICAgICB0aGlzLmVtaXRJbnB1dEZpZWxkQ2hhbmdlZCh2YWx1ZSwgdmFsaWQpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoQkxVUikgb25CbHVyKCkge1xuICAgIGNvbnN0IHtpbnB1dEZpZWxkVmFsaWRhdGlvbiwgZGF0ZVJhbmdlLCBkYXRlRm9ybWF0LCBtb250aExhYmVscywgZGF0ZVJhbmdlRGF0ZXNEZWxpbWl0ZXIsIGNsb3NlU2VsZWN0b3JPbkRhdGVTZWxlY3R9ID0gdGhpcy5vcHRzO1xuXG4gICAgaWYgKGlucHV0RmllbGRWYWxpZGF0aW9uKSB7XG4gICAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gdGhpcy5nZXRIb3N0VmFsdWUoKTtcblxuICAgICAgbGV0IHZhbGlkOiBib29sZWFuID0gZmFsc2U7XG4gICAgICBpZiAoIWRhdGVSYW5nZSkge1xuICAgICAgICBjb25zdCBkYXRlOiBJTXlEYXRlID0gdGhpcy51dGlsU2VydmljZS5pc0RhdGVWYWxpZCh2YWx1ZSwgdGhpcy5vcHRzKTtcbiAgICAgICAgdmFsaWQgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzSW5pdGlhbGl6ZWREYXRlKGRhdGUpO1xuICAgICAgICBpZiAodmFsaWQgJiYgdGhpcy5ob3N0VGV4dCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAvLyBWYWxpZCBkYXRlXG4gICAgICAgICAgY29uc3QgZGF0ZU1vZGVsOiBJTXlEYXRlTW9kZWwgPSB0aGlzLnV0aWxTZXJ2aWNlLmdldERhdGVNb2RlbChkYXRlLCBudWxsLCBkYXRlRm9ybWF0LCBtb250aExhYmVscywgZGF0ZVJhbmdlRGF0ZXNEZWxpbWl0ZXIpO1xuICAgICAgICAgIHRoaXMuZW1pdERhdGVDaGFuZ2VkKGRhdGVNb2RlbCk7XG4gICAgICAgICAgdGhpcy51cGRhdGVNb2RlbChkYXRlTW9kZWwpO1xuICAgICAgICAgIGlmIChjbG9zZVNlbGVjdG9yT25EYXRlU2VsZWN0KSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlU2VsZWN0b3IoQ2FsVG9nZ2xlLkNsb3NlQnlEYXRlU2VsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBkYXRlUmFuZ2U6IElNeURhdGVSYW5nZSA9IHRoaXMudXRpbFNlcnZpY2UuaXNEYXRlVmFsaWREYXRlUmFuZ2UodmFsdWUsIHRoaXMub3B0cyk7XG4gICAgICAgIGNvbnN0IHtiZWdpbiwgZW5kfSA9IGRhdGVSYW5nZTtcbiAgICAgICAgdmFsaWQgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzSW5pdGlhbGl6ZWREYXRlKGJlZ2luKSAmJiB0aGlzLnV0aWxTZXJ2aWNlLmlzSW5pdGlhbGl6ZWREYXRlKGVuZCk7XG4gICAgICAgIGlmICh2YWxpZCAmJiB0aGlzLmhvc3RUZXh0ICE9PSB2YWx1ZSkge1xuICAgICAgICAgIC8vIFZhbGlkIGRhdGUgcmFuZ2VcbiAgICAgICAgICBjb25zdCBkYXRlTW9kZWw6IElNeURhdGVNb2RlbCA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF0ZU1vZGVsKG51bGwsIGRhdGVSYW5nZSwgZGF0ZUZvcm1hdCwgbW9udGhMYWJlbHMsIGRhdGVSYW5nZURhdGVzRGVsaW1pdGVyKTtcbiAgICAgICAgICB0aGlzLmVtaXREYXRlQ2hhbmdlZChkYXRlTW9kZWwpO1xuICAgICAgICAgIHRoaXMudXBkYXRlTW9kZWwoZGF0ZU1vZGVsKTtcbiAgICAgICAgICBpZiAoY2xvc2VTZWxlY3Rvck9uRGF0ZVNlbGVjdCkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZVNlbGVjdG9yKENhbFRvZ2dsZS5DbG9zZUJ5RGF0ZVNlbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghdmFsaWQgJiYgdGhpcy5ob3N0VGV4dCAhPT0gdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBFTVBUWV9TVFIpIHtcbiAgICAgICAgICB0aGlzLmNsZWFyRGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMub25DaGFuZ2VDYihudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3RUZXh0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5vblRvdWNoZWRDYigpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkNsaWNrV3JhcHBlciA9IChldnQ6IGFueSkgPT4gdGhpcy5vbkNsaWNrKGV2dCk7XG5cbiAgcHJpdmF0ZSBvbkNsaWNrKGV2dDogYW55KSB7XG4gICAgaWYgKHRoaXMub3B0cy5jbG9zZVNlbGVjdG9yT25Eb2N1bWVudENsaWNrICYmICF0aGlzLnByZXZlbnRDbG9zZSAmJiBldnQudGFyZ2V0ICYmIHRoaXMuY1JlZiAhPT0gbnVsbCAmJiB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCAhPT0gZXZ0LnRhcmdldCAmJiAhdGhpcy5jUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZ0LnRhcmdldCkgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VTZWxlY3RvcihDYWxUb2dnbGUuQ2xvc2VCeU91dENsaWNrKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KExPQ0FMRSkpIHtcbiAgICAgIHRoaXMuc2V0TG9jYWxlT3B0aW9ucygpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KERFRkFVTFRfTU9OVEgpKSB7XG4gICAgICBsZXQgZG06IGFueSA9IGNoYW5nZXNbREVGQVVMVF9NT05USF0uY3VycmVudFZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiBkbSA9PT0gT0JKRUNUKSB7XG4gICAgICAgIGRtID0gZG0uZGVmTW9udGg7XG4gICAgICB9XG4gICAgICB0aGlzLmRlZmF1bHRNb250aCA9IGRtO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KE9QVElPTlMpKSB7XG4gICAgICB0aGlzLnBhcnNlT3B0aW9ucyhjaGFuZ2VzW09QVElPTlNdLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY1JlZiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5jUmVmLmluc3RhbmNlLnJlZnJlc2hDb21wb25lbnQodGhpcy5vcHRzKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZUNhbGVuZGFyKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0TG9jYWxlT3B0aW9ucygpOiB2b2lkIHtcbiAgICBjb25zdCBvcHRzOiBJTXlPcHRpb25zID0gdGhpcy5sb2NhbGVTZXJ2aWNlLmdldExvY2FsZU9wdGlvbnModGhpcy5sb2NhbGUpO1xuICAgIE9iamVjdC5rZXlzKG9wdHMpLmZvckVhY2goKGspID0+IHtcbiAgICAgICg8SU15T3B0aW9ucz4gdGhpcy5vcHRzKVtrXSA9IG9wdHNba107XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcGFyc2VPcHRpb25zKG9wdHM6IElNeU9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAob3B0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBPYmplY3Qua2V5cyhvcHRzKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgICg8SU15T3B0aW9ucz4gdGhpcy5vcHRzKVtrXSA9IG9wdHNba107XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0cy5taW5ZZWFyIDwgWWVhci5taW4pIHtcbiAgICAgIHRoaXMub3B0cy5taW5ZZWFyID0gWWVhci5taW47XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdHMubWF4WWVhciA+IFllYXIubWF4KSB7XG4gICAgICB0aGlzLm9wdHMubWF4WWVhciA9IFllYXIubWF4O1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRzLm9wZW5TZWxlY3RvclRvcE9mSW5wdXQgfHwgdGhpcy5vcHRzLmlubGluZSkge1xuICAgICAgdGhpcy5vcHRzLnNob3dTZWxlY3RvckFycm93ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdHMuaW5saW5lKSB7XG4gICAgICB0aGlzLm9wZW5DYWxlbmRhcigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHtkYXRlRm9ybWF0LCBtb250aExhYmVscywgZGF0ZVJhbmdlRGF0ZXNEZWxpbWl0ZXJ9ID0gdGhpcy5vcHRzO1xuXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5zZXRIb3N0VmFsdWUoRU1QVFlfU1RSKTtcbiAgICAgIHRoaXMuZW1pdElucHV0RmllbGRDaGFuZ2VkKEVNUFRZX1NUUiwgZmFsc2UpO1xuXG4gICAgICBpZiAodGhpcy5jUmVmICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuY1JlZi5pbnN0YW5jZS5yZXNldERhdGVWYWx1ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICghdmFsdWUuaXNSYW5nZSAmJiB2YWx1ZS5zaW5nbGVEYXRlKSB7XG4gICAgICAvLyBzaW5nbGUgZGF0ZVxuICAgICAgbGV0IHtkYXRlLCBqc0RhdGV9ID0gdmFsdWUuc2luZ2xlRGF0ZTtcbiAgICAgIGlmICghZGF0ZSkge1xuICAgICAgICBkYXRlID0gdGhpcy5qc0RhdGVUb015RGF0ZShqc0RhdGUpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zdCBmb3JtYXR0ZWQ6IHN0cmluZyA9IHRoaXMudXRpbFNlcnZpY2UuZm9ybWF0RGF0ZShkYXRlLCBkYXRlRm9ybWF0LCBtb250aExhYmVscyk7XG4gICAgICBjb25zdCB2YWxpZDogYm9vbGVhbiA9IHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUodGhpcy51dGlsU2VydmljZS5pc0RhdGVWYWxpZChmb3JtYXR0ZWQsIHRoaXMub3B0cykpO1xuICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgIHRoaXMuc2V0SG9zdFZhbHVlKGZvcm1hdHRlZCk7XG4gICAgICAgIHRoaXMuZW1pdElucHV0RmllbGRDaGFuZ2VkKGZvcm1hdHRlZCwgdmFsaWQpO1xuXG4gICAgICAgIGlmICh0aGlzLmNSZWYgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmNSZWYuaW5zdGFuY2Uuc2V0RGF0ZVZhbHVlKGRhdGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlLmlzUmFuZ2UgJiYgdmFsdWUuZGF0ZVJhbmdlKSB7XG4gICAgICAvLyBkYXRlIHJhbmdlXG4gICAgICBsZXQge2JlZ2luRGF0ZSwgYmVnaW5Kc0RhdGUsIGVuZERhdGUsIGVuZEpzRGF0ZX0gPSB2YWx1ZS5kYXRlUmFuZ2U7XG4gICAgICBpZiAoIWJlZ2luRGF0ZSB8fCAhZW5kRGF0ZSkge1xuICAgICAgICBiZWdpbkRhdGUgPSB0aGlzLmpzRGF0ZVRvTXlEYXRlKGJlZ2luSnNEYXRlKTtcbiAgICAgICAgZW5kRGF0ZSA9IHRoaXMuanNEYXRlVG9NeURhdGUoZW5kSnNEYXRlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9ybWF0dGVkOiBzdHJpbmcgPVxuICAgICAgICB0aGlzLnV0aWxTZXJ2aWNlLmZvcm1hdERhdGUoYmVnaW5EYXRlLCBkYXRlRm9ybWF0LCBtb250aExhYmVscykgKyBkYXRlUmFuZ2VEYXRlc0RlbGltaXRlciArXG4gICAgICAgIHRoaXMudXRpbFNlcnZpY2UuZm9ybWF0RGF0ZShlbmREYXRlLCBkYXRlRm9ybWF0LCBtb250aExhYmVscyk7XG4gICAgICBjb25zdCB7YmVnaW4sIGVuZH0gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGF0ZVZhbGlkRGF0ZVJhbmdlKGZvcm1hdHRlZCwgdGhpcy5vcHRzKTtcbiAgICAgIGNvbnN0IHZhbGlkOiBib29sZWFuID0gdGhpcy51dGlsU2VydmljZS5pc0luaXRpYWxpemVkRGF0ZShiZWdpbikgJiYgdGhpcy51dGlsU2VydmljZS5pc0luaXRpYWxpemVkRGF0ZShlbmQpO1xuICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgIHRoaXMuc2V0SG9zdFZhbHVlKGZvcm1hdHRlZCk7XG4gICAgICAgIHRoaXMuZW1pdElucHV0RmllbGRDaGFuZ2VkKGZvcm1hdHRlZCwgdmFsaWQpO1xuXG4gICAgICAgIGlmICh0aGlzLmNSZWYgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmNSZWYuaW5zdGFuY2Uuc2V0RGF0ZVJhbmdlVmFsdWUoYmVnaW5EYXRlLCBlbmREYXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2IgPSBmbjtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWRDYiA9IGZuO1xuICB9XG5cbiAgcHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQsIERJU0FCTEVELCBpc0Rpc2FibGVkKTtcblxuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmNsb3NlQ2FsZW5kYXIoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogeyBbcDogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSB0aGlzLmdldEhvc3RWYWx1ZSgpO1xuXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBFTVBUWV9TVFIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5vcHRzLmRhdGVSYW5nZSkge1xuICAgICAgY29uc3QgZGF0ZTogSU15RGF0ZSA9IHRoaXMudXRpbFNlcnZpY2UuaXNEYXRlVmFsaWQodmFsdWUsIHRoaXMub3B0cyk7XG4gICAgICBpZiAoIXRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoZGF0ZSkpIHtcbiAgICAgICAgcmV0dXJuIHtpbnZhbGlkRGF0ZUZvcm1hdDogdHJ1ZX07XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc3Qge2JlZ2luLCBlbmR9ID0gdGhpcy51dGlsU2VydmljZS5pc0RhdGVWYWxpZERhdGVSYW5nZSh2YWx1ZSwgdGhpcy5vcHRzKTtcbiAgICAgIGlmICghdGhpcy51dGlsU2VydmljZS5pc0luaXRpYWxpemVkRGF0ZShiZWdpbikgfHwgIXRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoZW5kKSkge1xuICAgICAgICByZXR1cm4ge2ludmFsaWREYXRlRm9ybWF0OiB0cnVlfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgb3BlbkNhbGVuZGFyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJldmVudENsb3NlID0gdHJ1ZTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgaWYgKHRoaXMuY1JlZiA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5jUmVmID0gdGhpcy52Y1JlZi5jcmVhdGVDb21wb25lbnQodGhpcy5jZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoQ2FsZW5kYXJDb21wb25lbnQpKTtcbiAgICAgIHRoaXMuYXBwZW5kU2VsZWN0b3IodGhpcy5jUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgdGhpcy5jUmVmLmluc3RhbmNlLmluaXRpYWxpemVDb21wb25lbnQoXG4gICAgICAgIHRoaXMub3B0cyxcbiAgICAgICAgdGhpcy5kZWZhdWx0TW9udGgsXG4gICAgICAgIHRoaXMuZ2V0U2VsZWN0b3JQb3NpdGlvbih0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCksXG4gICAgICAgIHRoaXMuZ2V0SG9zdFZhbHVlKCksXG4gICAgICAgIChkbTogSU15RGF0ZU1vZGVsLCBjbG9zZTogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIHRoaXMuZm9jdXNUb0lucHV0KCk7XG4gICAgICAgICAgdGhpcy5lbWl0RGF0ZUNoYW5nZWQoZG0pO1xuICAgICAgICAgIHRoaXMuZW1pdElucHV0RmllbGRDaGFuZ2VkKHRoaXMudXRpbFNlcnZpY2UuZ2V0Rm9ybWF0dGVkRGF0ZShkbSksIHRydWUpO1xuICAgICAgICAgIHRoaXMudXBkYXRlTW9kZWwoZG0pO1xuICAgICAgICAgIGlmIChjbG9zZSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZVNlbGVjdG9yKENhbFRvZ2dsZS5DbG9zZUJ5RGF0ZVNlbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoY3ZjOiBJTXlDYWxlbmRhclZpZXdDaGFuZ2VkKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbWl0Q2FsZW5kYXJDaGFuZ2VkKGN2Yyk7XG4gICAgICAgIH0sXG4gICAgICAgIChyZHM6IElNeVJhbmdlRGF0ZVNlbGVjdGlvbikgPT4ge1xuICAgICAgICAgIHRoaXMuZW1pdFJhbmdlRGF0ZVNlbGVjdGlvbihyZHMpO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jbG9zZVNlbGVjdG9yKENhbFRvZ2dsZS5DbG9zZUJ5RXNjKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHRoaXMuZW1pdENhbGVuZGFyVG9nZ2xlKENhbFRvZ2dsZS5PcGVuKTtcblxuICAgICAgaWYgKCF0aGlzLm9wdHMuaW5saW5lKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoQ0xJQ0ssIHRoaXMub25DbGlja1dyYXBwZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucHJldmVudENsb3NlID0gZmFsc2U7XG4gICAgfSwgUFJFVkVOVF9DTE9TRV9USU1FT1VUKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZUNhbGVuZGFyKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VTZWxlY3RvcihDYWxUb2dnbGUuQ2xvc2VCeUNhbEJ0bik7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlQ2FsZW5kYXIoKTogYm9vbGVhbiB8IG51bGwge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaXNPcGVuOiBib29sZWFuID0gdGhpcy5jUmVmID09PSBudWxsO1xuXG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgdGhpcy5vcGVuQ2FsZW5kYXIoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlU2VsZWN0b3IoQ2FsVG9nZ2xlLkNsb3NlQnlDYWxCdG4pO1xuICAgIH1cbiAgICByZXR1cm4gaXNPcGVuO1xuICB9XG5cbiAgcHVibGljIGNsZWFyRGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldEhvc3RWYWx1ZShFTVBUWV9TVFIpO1xuICAgIHRoaXMuZW1pdERhdGVDaGFuZ2VkKHtcbiAgICAgIGlzUmFuZ2U6IHRoaXMub3B0cy5kYXRlUmFuZ2UsXG4gICAgICBzaW5nbGVEYXRlOiB7XG4gICAgICAgIGRhdGU6IHRoaXMudXRpbFNlcnZpY2UucmVzZXREYXRlKCksXG4gICAgICAgIGpzRGF0ZTogbnVsbCxcbiAgICAgICAgZm9ybWF0dGVkOiBFTVBUWV9TVFIsXG4gICAgICAgIGVwb2M6IDBcbiAgICAgIH0sXG4gICAgICBkYXRlUmFuZ2U6IHtcbiAgICAgICAgYmVnaW5EYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLnJlc2V0RGF0ZSgpLFxuICAgICAgICBiZWdpbkpzRGF0ZTogbnVsbCxcbiAgICAgICAgYmVnaW5FcG9jOiAwLFxuICAgICAgICBlbmREYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLnJlc2V0RGF0ZSgpLFxuICAgICAgICBlbmRKc0RhdGU6IG51bGwsXG4gICAgICAgIGVuZEVwb2M6IDAsXG4gICAgICAgIGZvcm1hdHRlZDogRU1QVFlfU1RSXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vbkNoYW5nZUNiKG51bGwpO1xuICAgIHRoaXMub25Ub3VjaGVkQ2IoKTtcbiAgICB0aGlzLmNsb3NlU2VsZWN0b3IoQ2FsVG9nZ2xlLkNsb3NlQnlDYWxCdG4pO1xuICB9XG5cbiAgcHVibGljIGlzRGF0ZVZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSB0aGlzLmdldEhvc3RWYWx1ZSgpO1xuXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBFTVBUWV9TVFIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3B0cy5kYXRlUmFuZ2UpIHtcbiAgICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGF0ZVZhbGlkKHZhbHVlLCB0aGlzLm9wdHMpO1xuICAgICAgaWYgKHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoZGF0ZSkpIHtcbiAgICAgICAgdGhpcy5lbWl0SW5wdXRGaWVsZENoYW5nZWQodmFsdWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCB7YmVnaW4sIGVuZH0gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGF0ZVZhbGlkRGF0ZVJhbmdlKHZhbHVlLCB0aGlzLm9wdHMpO1xuICAgICAgaWYgKHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoYmVnaW4pICYmIHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoZW5kKSkge1xuICAgICAgICB0aGlzLmVtaXRJbnB1dEZpZWxkQ2hhbmdlZCh2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0aGlzLmVtaXRJbnB1dEZpZWxkQ2hhbmdlZCh2YWx1ZSwgZmFsc2UpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgaWdub3JlS2V5UHJlc3Moa2V5Q29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGtleUNvZGUgPT09IEtleUNvZGUubGVmdEFycm93IHx8IGtleUNvZGUgPT09IEtleUNvZGUucmlnaHRBcnJvdyB8fCBrZXlDb2RlID09PSBLZXlDb2RlLnVwQXJyb3cgfHwga2V5Q29kZSA9PT0gS2V5Q29kZS5kb3duQXJyb3cgfHwga2V5Q29kZSA9PT0gS2V5Q29kZS50YWIgfHwga2V5Q29kZSA9PT0gS2V5Q29kZS5zaGlmdDtcbiAgfVxuXG4gIHByaXZhdGUgb25BbmltYXRlV3JhcHBlciA9IChyZWFzb246IG51bWJlcikgPT4gdGhpcy5hbmltYXRpb25FbmQocmVhc29uKTtcblxuICBwcml2YXRlIGFuaW1hdGlvbkVuZChyZWFzb246IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmNSZWYgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuY1JlZi5pbnN0YW5jZS5zZWxlY3RvckVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihBTklNQVRJT05fRU5ELCB0aGlzLm9uQW5pbWF0ZVdyYXBwZXIpO1xuICAgICAgdGhpcy5yZW1vdmVDb21wb25lbnQoKTtcbiAgICAgIHRoaXMuZW1pdENhbGVuZGFyVG9nZ2xlKHJlYXNvbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZVNlbGVjdG9yKHJlYXNvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qge2lubGluZSwgY2FsZW5kYXJBbmltYXRpb259ID0gdGhpcy5vcHRzO1xuICAgIFxuICAgIGlmICh0aGlzLmNSZWYgIT09IG51bGwgJiYgIWlubGluZSkge1xuICAgICAgaWYgKGNhbGVuZGFyQW5pbWF0aW9uLm91dCAhPT0gQ2FsQW5pbWF0aW9uLk5vbmUpIHtcbiAgICAgICAgY29uc3Qge2luc3RhbmNlfSA9IHRoaXMuY1JlZjtcbiAgICAgICAgaW5zdGFuY2Uuc2VsZWN0b3JFbC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoQU5JTUFUSU9OX0VORCwgdGhpcy5vbkFuaW1hdGVXcmFwcGVyLmJpbmQodGhpcywgcmVhc29uKSk7XG4gICAgICAgIGluc3RhbmNlLnNldENhbGVuZGFyQW5pbWF0aW9uKGNhbGVuZGFyQW5pbWF0aW9uLCBmYWxzZSk7XG5cbiAgICAgICAgLy8gSW4gY2FzZSB0aGUgYW5pbWF0aW9uZW5kIGV2ZW50IGlzIG5vdCBmaXJlZFxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMub25BbmltYXRlV3JhcHBlci5iaW5kKHRoaXMsIHJlYXNvbiksIEFOSU1BVElPTl9USU1FT1VUKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZUNvbXBvbmVudCgpO1xuICAgICAgICB0aGlzLmVtaXRDYWxlbmRhclRvZ2dsZShyZWFzb24pO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKENMSUNLLCB0aGlzLm9uQ2xpY2tXcmFwcGVyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUNvbXBvbmVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52Y1JlZiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy52Y1JlZi5yZW1vdmUodGhpcy52Y1JlZi5pbmRleE9mKHRoaXMuY1JlZi5ob3N0VmlldykpO1xuICAgICAgdGhpcy5jUmVmID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgXG4gIHByaXZhdGUgdXBkYXRlTW9kZWwobW9kZWw6IElNeURhdGVNb2RlbCk6IHZvaWQge1xuICAgIHRoaXMuc2V0SG9zdFZhbHVlKHRoaXMudXRpbFNlcnZpY2UuZ2V0Rm9ybWF0dGVkRGF0ZShtb2RlbCkpO1xuICAgIHRoaXMub25DaGFuZ2VDYihtb2RlbCk7XG4gICAgdGhpcy5vblRvdWNoZWRDYigpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRIb3N0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHtkaXZIb3N0RWxlbWVudH0gPSB0aGlzLm9wdHM7XG4gICAgdGhpcy5ob3N0VGV4dCA9IHZhbHVlO1xuICAgIGNvbnN0IHZhbHVlVHlwZTogc3RyaW5nID0gIWRpdkhvc3RFbGVtZW50LmVuYWJsZWQgPyBWQUxVRSA6IElOTkVSX0hUTUw7XG4gICAgdmFsdWUgPSB2YWx1ZVR5cGUgPT09IElOTkVSX0hUTUwgJiYgdmFsdWUgPT09IEVNUFRZX1NUUiA/IGRpdkhvc3RFbGVtZW50LnBsYWNlaG9sZGVyIDogdmFsdWU7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCwgdmFsdWVUeXBlLCB2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldEhvc3RWYWx1ZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHt2YWx1ZSwgaW5uZXJIVE1MfSA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50O1xuICAgIHJldHVybiAhdGhpcy5vcHRzLmRpdkhvc3RFbGVtZW50LmVuYWJsZWQgPyB2YWx1ZSA6IGlubmVySFRNTDtcbiAgfVxuXG4gIHByaXZhdGUgZm9jdXNUb0lucHV0KCk6IHZvaWQge1xuICAgIGNvbnN0IHtmb2N1c0lucHV0T25EYXRlU2VsZWN0LCBkaXZIb3N0RWxlbWVudH0gPSB0aGlzLm9wdHM7XG4gICAgaWYgKGZvY3VzSW5wdXRPbkRhdGVTZWxlY3QgJiYgIWRpdkhvc3RFbGVtZW50LmVuYWJsZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBlbWl0RGF0ZUNoYW5nZWQoZGF0ZU1vZGVsOiBJTXlEYXRlTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGVDaGFuZ2VkLmVtaXQoZGF0ZU1vZGVsKTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdElucHV0RmllbGRDaGFuZ2VkKHZhbHVlOiBzdHJpbmcsIHZhbGlkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dEZpZWxkQ2hhbmdlZC5lbWl0KHt2YWx1ZSwgZGF0ZUZvcm1hdDogdGhpcy5vcHRzLmRhdGVGb3JtYXQsIHZhbGlkfSk7XG4gIH1cblxuICBwcml2YXRlIGVtaXRDYWxlbmRhckNoYW5nZWQoY3ZjOiBJTXlDYWxlbmRhclZpZXdDaGFuZ2VkKSB7XG4gICAgdGhpcy5jYWxlbmRhclZpZXdDaGFuZ2VkLmVtaXQoY3ZjKTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdFJhbmdlRGF0ZVNlbGVjdGlvbihyZHM6IElNeVJhbmdlRGF0ZVNlbGVjdGlvbikge1xuICAgIHRoaXMucmFuZ2VEYXRlU2VsZWN0aW9uLmVtaXQocmRzKTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdENhbGVuZGFyVG9nZ2xlKHJlYXNvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KHJlYXNvbik7XG4gIH1cblxuICBwcml2YXRlIGpzRGF0ZVRvTXlEYXRlKGRhdGU6IERhdGUpOiBJTXlEYXRlIHtcbiAgICByZXR1cm4ge3llYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGg6IGRhdGUuZ2V0TW9udGgoKSArIDEsIGRheTogZGF0ZS5nZXREYXRlKCl9O1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBlbmRTZWxlY3RvcihlbGVtOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRzLmFwcGVuZFNlbGVjdG9yVG9Cb2R5KSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKEJPRFkpLmFwcGVuZENoaWxkKGVsZW0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VsZWN0b3JQb3NpdGlvbihlbGVtOiBhbnkpOiBJTXlTZWxlY3RvclBvc2l0aW9uIHtcbiAgICBsZXQgdG9wOiBudW1iZXIgPSAwO1xuICAgIGxldCBsZWZ0OiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3Qge2FwcGVuZFNlbGVjdG9yVG9Cb2R5LCBvcGVuU2VsZWN0b3JUb3BPZklucHV0LCBzZWxlY3RvckhlaWdodCwgc2VsZWN0b3JXaWR0aCwgc2hvd1NlbGVjdG9yQXJyb3csIGFsaWduU2VsZWN0b3JSaWdodH0gPSB0aGlzLm9wdHM7XG5cbiAgICBpZiAoYXBwZW5kU2VsZWN0b3JUb0JvZHkpIHtcbiAgICAgIGNvbnN0IGI6IGFueSA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBlOiBhbnkgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdG9wID0gZS50b3AgLSBiLnRvcDtcbiAgICAgIGxlZnQgPSBlLmxlZnQgLSBiLmxlZnQ7XG4gICAgfVxuXG4gICAgaWYgKG9wZW5TZWxlY3RvclRvcE9mSW5wdXQpIHtcbiAgICAgIHRvcCA9IHRvcCAtIHRoaXMuZ2V0U2VsZWN0b3JEaW1lbnNpb24oc2VsZWN0b3JIZWlnaHQpIC0gMjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0b3AgPSB0b3AgKyBlbGVtLm9mZnNldEhlaWdodCArIChzaG93U2VsZWN0b3JBcnJvdyA/IDEyIDogMik7XG4gICAgfVxuXG4gICAgaWYgKGFsaWduU2VsZWN0b3JSaWdodCkge1xuICAgICAgbGVmdCA9IGxlZnQgKyBlbGVtLm9mZnNldFdpZHRoIC0gdGhpcy5nZXRTZWxlY3RvckRpbWVuc2lvbihzZWxlY3RvcldpZHRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHt0b3A6IHRvcCArIFBYLCBsZWZ0OiBsZWZ0ICsgUFh9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZWxlY3RvckRpbWVuc2lvbih2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTnVtYmVyKHZhbHVlLnJlcGxhY2UoUFgsIEVNUFRZX1NUUikpO1xuICB9XG59XG4iXX0=