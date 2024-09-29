import {Directive, Input, ComponentRef, ElementRef, ViewContainerRef, Renderer2, ChangeDetectorRef, 
  forwardRef, EventEmitter, Output, SimpleChanges, OnChanges, HostListener, OnDestroy} from "@angular/core";
import {AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator} from "@angular/forms";
import {CalendarComponent} from "./components/calendar/calendar.component";
import {IMyDate} from "./interfaces/my-date.interface";
import {IMyOptions} from "./interfaces/my-options.interface";
import {IMyDateModel} from "./interfaces/my-date-model.interface";
import {IMyDateRange} from "./interfaces/my-date-range.interface";
import {IMyRangeDateSelection} from "./interfaces/my-range-date-selection.interface";
import {IMyCalendarViewChanged} from "./interfaces/my-calendar-view-changed.interface";
import {IMyInputFieldChanged} from "./interfaces/my-input-field-changed.interface";
import {IMySelectorPosition} from "./interfaces/my-selector-pos.interface";
import {IMyValidateOptions} from "./interfaces/my-validate-options.interface";
import {IMyDefaultMonth} from "./interfaces/my-default-month.interface";
import {LocaleService} from "./services/angular-mydatepicker.locale.service";
import {UtilService} from "./services/angular-mydatepicker.util.service";
import {DefaultConfigService} from "./services/angular-mydatepicker.config.service";
import {CalToggle} from "./enums/cal-toggle.enum";
import {Year} from "./enums/year.enum";
import {KeyCode} from "./enums/key-code.enum";
import {CalAnimation} from "./enums/cal-animation.enum";
import {HeaderAction} from "./enums/header-action.enum";
import {ActiveView} from "./enums/active-view.enum";
import {KEYUP, BLUR, EMPTY_STR, DISABLED, CLICK, BODY, VALUE, PREVENT_CLOSE_TIMEOUT, OPTIONS, DEFAULT_MONTH, 
  LOCALE, OBJECT, PX, INNER_HTML, ANIMATION_END, ANIMATION_TIMEOUT} from "./constants/constants";

const NGX_DP_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AngularMyDatePickerDirective),
  multi: true
};

const NGX_DP_VALIDATORS = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => AngularMyDatePickerDirective),
  multi: true
};

@Directive({
  selector: "[angular-mydatepicker]",
  exportAs: "angular-mydatepicker",
  providers: [UtilService, LocaleService, DefaultConfigService, NGX_DP_VALUE_ACCESSOR, NGX_DP_VALIDATORS]
})
export class AngularMyDatePickerDirective implements OnChanges, OnDestroy, ControlValueAccessor, Validator {
  @Input() options: IMyOptions;
  @Input() locale: string;
  @Input() defaultMonth: IMyDefaultMonth = {defMonth: EMPTY_STR, overrideSelection: false};

  @Output() dateChanged: EventEmitter<IMyDateModel> = new EventEmitter<IMyDateModel>();
  @Output() inputFieldChanged: EventEmitter<IMyInputFieldChanged> = new EventEmitter<IMyInputFieldChanged>();
  @Output() calendarViewChanged: EventEmitter<IMyCalendarViewChanged> = new EventEmitter<IMyCalendarViewChanged>();
  @Output() calendarToggle: EventEmitter<number> = new EventEmitter<number>();
  @Output() rangeDateSelection: EventEmitter<IMyRangeDateSelection> = new EventEmitter<IMyRangeDateSelection>();
  @Output() viewActivated: EventEmitter<ActiveView> = new EventEmitter<ActiveView>();

  private cRef: ComponentRef<CalendarComponent> = null;
  private hostText: string = EMPTY_STR;
  private preventClose: boolean = false;
  private disabled = false;
  private selectedValue: any = null;

  private opts: IMyOptions;

  onChangeCb: (_: any) => void = () => { };
  onTouchedCb: () => void = () => { };

  constructor(private localeService: LocaleService,
              private utilService: UtilService,
              private vcRef: ViewContainerRef,
              private renderer: Renderer2,
              private cdr: ChangeDetectorRef,
              private elem: ElementRef,
              private config: DefaultConfigService) {
    this.opts = this.config.getDefaultConfig();
    this.parseOptions(this.opts);
  }

  @HostListener(KEYUP, ["$event"]) onKeyUp(event: any) {
    const keyCode: number = this.utilService.getKeyCodeFromEvent(event);
    if (this.ignoreKeyPress(keyCode)) {
      return;
    }
    
    if (keyCode === KeyCode.esc) {
      this.closeSelector(CalToggle.CloseByEsc);
    }
    else {
      const {dateRange, dateFormat, monthLabels, dateRangeDatesDelimiter} = this.opts;
      const value: string = this.getHostValue();

      let dateModel: IMyDateModel = null;
      let valid: boolean = false;
      let validateOpts: IMyValidateOptions = null;
      if (!dateRange) {
        validateOpts = {validateDisabledDates: true, selectedValue: this.utilService.getSelectedValue(this.selectedValue, false)};
        const date: IMyDate = this.utilService.isDateValid(value, this.opts, validateOpts);
        valid = this.utilService.isInitializedDate(date);
        if (valid) {
          dateModel = this.utilService.getDateModel(date, null, dateFormat, monthLabels, dateRangeDatesDelimiter);
        }
      }
      else {
        validateOpts = {validateDisabledDates: true, selectedValue: this.utilService.getSelectedValue(this.selectedValue, true)};
        const range = this.utilService.isDateValidDateRange(value, this.opts, validateOpts);
        const {begin, end} = range;
        valid = this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end);
        if (valid) {
          dateModel = this.utilService.getDateModel(null, range, dateFormat, monthLabels, dateRangeDatesDelimiter);
        }
      }

      this.onChangeCb(dateModel);
      this.emitInputFieldChanged(value, valid);
    }
  }

  @HostListener(BLUR) onBlur() {
    const {inputFieldValidation, dateRange, dateFormat, monthLabels, dateRangeDatesDelimiter, closeSelectorOnDateSelect} = this.opts;

    if (inputFieldValidation) {
      const value: string = this.getHostValue();

      let valid: boolean = false;
      let validateOpts: IMyValidateOptions = null;
      if (!dateRange) {
        validateOpts = {validateDisabledDates: true, selectedValue: this.utilService.getSelectedValue(this.selectedValue, false)};
        const date: IMyDate = this.utilService.isDateValid(value, this.opts, validateOpts);
        valid = this.utilService.isInitializedDate(date);
        if (valid && this.hostText !== value) {
          // Valid date
          const dateModel: IMyDateModel = this.utilService.getDateModel(date, null, dateFormat, monthLabels, dateRangeDatesDelimiter);
          this.emitDateChanged(dateModel);
          this.updateModel(dateModel);
          if (closeSelectorOnDateSelect) {
            this.closeSelector(CalToggle.CloseByDateSel);
          }
        }
      }
      else {
        validateOpts = {validateDisabledDates: true, selectedValue: this.utilService.getSelectedValue(this.selectedValue, true)};
        const dateRange: IMyDateRange = this.utilService.isDateValidDateRange(value, this.opts, validateOpts);
        const {begin, end} = dateRange;
        valid = this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end);
        if (valid && this.hostText !== value) {
          // Valid date range
          const dateModel: IMyDateModel = this.utilService.getDateModel(null, dateRange, dateFormat, monthLabels, dateRangeDatesDelimiter);
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

  private onClickWrapper = (event: any) => this.onClick(event);

  private onClick(event: any) {
    if (this.opts.closeSelectorOnDocumentClick && !this.preventClose && event.target && this.cRef 
        && this.elem.nativeElement !== event.target && !this.cRef.location.nativeElement.contains(event.target) 
        && !this.disabled) {
      this.closeSelector(CalToggle.CloseByOutClick);
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty(LOCALE)) {
      this.setLocaleOptions();
    }

    if (changes.hasOwnProperty(DEFAULT_MONTH)) {
      let dm: any = changes[DEFAULT_MONTH].currentValue;
      if (typeof dm === OBJECT) {
        if (!dm.overrideSelection) {
          dm.overrideSelection = false;
        }
      }
      else {
        dm = {defMonth: dm, overrideSelection: false};
      }
      
      this.defaultMonth = dm;
    }

    if (changes.hasOwnProperty(OPTIONS)) {
      this.parseOptions(changes[OPTIONS].currentValue);
    }

    if (this.cRef) {
      this.cRef.instance.refreshComponent(this.opts, this.defaultMonth, this.selectedValue, this.getHostValue());
    }
  }

  public ngOnDestroy(): void {
    this.closeCalendar();
  }

  public setLocaleOptions(): void {
    const opts: IMyOptions = this.localeService.getLocaleOptions(this.locale);
    Object.keys(opts).forEach((k) => {
      (<IMyOptions> this.opts)[k] = opts[k];
    });
  }

  public parseOptions(opts: IMyOptions): void {
    if (opts) {
      Object.keys(opts).forEach((k) => {
        (<IMyOptions> this.opts)[k] = opts[k];
      });
    }

    const {minYear, maxYear, openSelectorTopOfInput, inline} = this.opts;

    if (minYear < Year.min) {
      this.opts.minYear = Year.min;
    }

    if (maxYear > Year.max) {
      this.opts.maxYear = Year.max;
    }

    if (openSelectorTopOfInput || inline) {
      this.opts.showSelectorArrow = false;
    }

    if (inline) {
      this.openCalendar();
    }
  }

  public writeValue(value: any): void {
    if (this.disabled) {
      return;
    }

    let validateOpts: IMyValidateOptions = null;
    const {dateFormat, monthLabels, dateRangeDatesDelimiter, inline} = this.opts;

    if (!value) {
      this.setHostValue(EMPTY_STR);
      this.emitInputFieldChanged(EMPTY_STR, false);

      if (this.cRef) {
        this.cRef.instance.resetDateValue();
      }
    }
    else if (!value.isRange && value.singleDate) {
      // single date
      let {date, jsDate} = value.singleDate;
      if (!date) {
        date = this.utilService.jsDateToMyDate(jsDate);
      }
      
      const formatted: string = this.utilService.formatDate(date, dateFormat, monthLabels);

      validateOpts = {validateDisabledDates: false, selectedValue: this.utilService.getSelectedValue(this.selectedValue, false)};
      const valid: boolean = this.utilService.isInitializedDate(this.utilService.isDateValid(formatted, this.opts, validateOpts));
      if (valid) {
        this.setHostValue(formatted);
        this.emitInputFieldChanged(formatted, valid);
        this.setSelectedValue(this.utilService.getDateModel(date, null, dateFormat, monthLabels, dateRangeDatesDelimiter));

        if (this.cRef) {
          this.cRef.instance.refreshComponent(this.opts, this.defaultMonth, this.selectedValue, this.getHostValue());
        }
      }
    }
    else if (value.isRange && value.dateRange) {
      // date range
      let {beginDate, beginJsDate, endDate, endJsDate} = value.dateRange;
      if (!beginDate || !endDate) {
        beginDate = this.utilService.jsDateToMyDate(beginJsDate);
        endDate = this.utilService.jsDateToMyDate(endJsDate);
      }

      const formatted: string = this.utilService.formatDate(beginDate, dateFormat, monthLabels) + dateRangeDatesDelimiter +
        this.utilService.formatDate(endDate, dateFormat, monthLabels);
      validateOpts = {validateDisabledDates: false, selectedValue: this.utilService.getSelectedValue(this.selectedValue, true)};
      const {begin, end} = this.utilService.isDateValidDateRange(formatted, this.opts, validateOpts);
      const valid: boolean = this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end);
      if (valid) {
        this.setHostValue(formatted);
        this.emitInputFieldChanged(formatted, valid);

        const dateRange: IMyDateRange = {begin: beginDate, end: endDate};
        this.setSelectedValue(this.utilService.getDateModel(null, dateRange, dateFormat, monthLabels, dateRangeDatesDelimiter));

        if (this.cRef) {
          this.cRef.instance.refreshComponent(this.opts, this.defaultMonth, this.selectedValue, this.getHostValue());
        }
      }
    }
  }

  public registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.renderer.setProperty(this.elem.nativeElement, DISABLED, isDisabled);

    if (isDisabled) {
      this.closeCalendar();
    }
  }

  public validate(c: AbstractControl): { [p: string]: any } {
    const value: string = this.getHostValue();

    if (value === null || value === EMPTY_STR) {
      return null;
    }

    let validateOpts: IMyValidateOptions = null;
    if (!this.opts.dateRange) {
      validateOpts = {validateDisabledDates: true, selectedValue: this.utilService.getSelectedValue(this.selectedValue, false)};
      const date: IMyDate = this.utilService.isDateValid(value, this.opts, validateOpts);
      if (!this.utilService.isInitializedDate(date)) {
        return {invalidDateFormat: true};
      }
    }
    else {
      validateOpts = {validateDisabledDates: true, selectedValue: this.utilService.getSelectedValue(this.selectedValue, true)};
      const {begin, end} = this.utilService.isDateValidDateRange(value, this.opts, validateOpts);
      if (!this.utilService.isInitializedDate(begin) || !this.utilService.isInitializedDate(end)) {
        return {invalidDateFormat: true};
      }
    }
    return null;
  }

  public openCalendar(): void {
    if (this.disabled) {
      return;
    }
    this.preventClose = true;
    this.cdr.detectChanges();
    if (this.cRef === null) {
      this.cRef = this.vcRef.createComponent(CalendarComponent);
      this.appendSelector(this.cRef.location.nativeElement);
      this.cRef.instance.initializeComponent(
        this.opts,
        this.defaultMonth,
        this.selectedValue,
        this.getHostValue(),
        this.getSelectorPosition(this.elem.nativeElement),
        (dm: IMyDateModel, close: boolean) => {
          this.focusToInput();
          this.emitDateChanged(dm);
          this.emitInputFieldChanged(this.utilService.getFormattedDate(dm), true);
          this.updateModel(dm);
          if (close) {
            this.closeSelector(CalToggle.CloseByDateSel);
          }
        },
        (cvc: IMyCalendarViewChanged) => {
          this.emitCalendarChanged(cvc);
        },
        (rds: IMyRangeDateSelection) => {
          this.emitRangeDateSelection(rds);
        },
        (va: ActiveView) => {
          this.emitViewActivated(va);
        },
        () => {
          this.closeSelector(CalToggle.CloseByEsc);
        }
      );
      this.emitCalendarToggle(CalToggle.Open);

      if (!this.opts.inline) {
        document.addEventListener(CLICK, this.onClickWrapper);
      }
    }
    setTimeout(() => {
      this.preventClose = false;
    }, PREVENT_CLOSE_TIMEOUT);
  }

  public closeCalendar(): void {
    this.closeSelector(CalToggle.CloseByCalBtn);
  }

  public toggleCalendar(): boolean | null {
    if (this.disabled) {
      return;
    }

    const isOpen: boolean = this.cRef === null;

    if (isOpen) {
      this.openCalendar();
    }
    else {
      this.closeSelector(CalToggle.CloseByCalBtn);
    }
    return isOpen;
  }

  public clearDate(): void {
    if (this.disabled) {
      return;
    }

    const {inline} = this.opts;

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

    if (this.cRef) {
      this.cRef.instance.clearDate();
    }

    if (!inline) {
      this.closeSelector(CalToggle.CloseByCalBtn);
    }
  }

  public isDateValid(): boolean {
    const value: string = this.getHostValue();

    if (value === null || value === EMPTY_STR) {
      return false;
    }

    let validateOpts: IMyValidateOptions = null;
    if (!this.opts.dateRange) {
      validateOpts = {validateDisabledDates: true, selectedValue: this.utilService.getSelectedValue(this.selectedValue, false)};
      const date: IMyDate = this.utilService.isDateValid(value, this.opts, validateOpts);
      if (this.utilService.isInitializedDate(date)) {
        this.emitInputFieldChanged(value, true);
        return true;
      }
    }
    else {
      validateOpts = {validateDisabledDates: true, selectedValue: this.utilService.getSelectedValue(this.selectedValue, true)};
      const {begin, end} = this.utilService.isDateValidDateRange(value, this.opts, validateOpts);
      if (this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end)) {
        this.emitInputFieldChanged(value, true);
        return true;
      }
    }
    
    this.emitInputFieldChanged(value, false);
    return false;
  }

  public headerAction(headerAction: HeaderAction): void {
    if (this.cRef) {
      this.cRef.instance.headerAction(headerAction);
    }
  }

  public setHostValue(value: string): void {
    const {divHostElement} = this.opts;
    this.hostText = value;
    const valueType: string = !divHostElement.enabled ? VALUE : INNER_HTML;
    value = valueType === INNER_HTML && value === EMPTY_STR ? divHostElement.placeholder : value;
    this.renderer.setProperty(this.elem.nativeElement, valueType, value);
  }

  private ignoreKeyPress(keyCode: number): boolean {
    return keyCode === KeyCode.leftArrow || keyCode === KeyCode.rightArrow || keyCode === KeyCode.upArrow || keyCode === KeyCode.downArrow || keyCode === KeyCode.tab || keyCode === KeyCode.shift;
  }

  private onAnimateWrapper = (reason: number) => this.animationEnd(reason);

  private animationEnd(reason: number): void {
    if (this.cRef) {
      this.cRef.instance.selectorEl.nativeElement.removeEventListener(ANIMATION_END, this.onAnimateWrapper);
      this.removeComponent();
      this.emitCalendarToggle(reason);
    }
  }

  private closeSelector(reason: number): void {
    const {inline, calendarAnimation} = this.opts;
    
    if (this.cRef && !inline) {
      if (calendarAnimation.out !== CalAnimation.None) {
        const {instance} = this.cRef;
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

  private removeComponent(): void {
    if (this.vcRef !== null) {
      this.vcRef.remove(this.vcRef.indexOf(this.cRef.hostView));
      this.cRef = null;
    }
  }
  
  private updateModel(model: IMyDateModel): void {
    this.setHostValue(this.utilService.getFormattedDate(model));
    this.onChangeCb(model);
    this.onTouchedCb();
  }

  private getHostValue(): string {
    const {value, innerHTML} = this.elem.nativeElement;
    return !this.opts.divHostElement.enabled ? value : innerHTML;
  }

  private focusToInput(): void {
    const {focusInputOnDateSelect, divHostElement} = this.opts;
    if (focusInputOnDateSelect && !divHostElement.enabled) {
      setTimeout(() => {
        this.elem.nativeElement.focus();
      });
    }
  }

  private emitDateChanged(dateModel: IMyDateModel): void {
    this.dateChanged.emit(dateModel);
    this.setSelectedValue(dateModel);
  }

  private setSelectedValue(dateModel: IMyDateModel): void {
    const {isRange, dateRange, singleDate} = dateModel;
    this.selectedValue = isRange ? dateRange : singleDate;
  }

  private emitInputFieldChanged(value: string, valid: boolean): void {
    this.inputFieldChanged.emit({value, dateFormat: this.opts.dateFormat, valid});
  }

  private emitCalendarChanged(cvc: IMyCalendarViewChanged): void {
    this.calendarViewChanged.emit(cvc);
  }

  private emitRangeDateSelection(rds: IMyRangeDateSelection): void {
    this.rangeDateSelection.emit(rds);
  }

  private emitViewActivated(va: ActiveView): void {
    this.viewActivated.emit(va);
  }

  private emitCalendarToggle(reason: number): void {
    this.calendarToggle.emit(reason);
  }

  private appendSelector(elem: any): void {
    if (this.opts.appendSelectorToBody) {
      document.querySelector(BODY).appendChild(elem);
    }
  }

  private getSelectorPosition(elem: any): IMySelectorPosition {
    let top: number = 0;
    let left: number = 0;

    const {appendSelectorToBody, openSelectorTopOfInput, selectorHeight, selectorWidth, showSelectorArrow, alignSelectorRight} = this.opts;

    if (appendSelectorToBody) {
      const b: any = document.body.getBoundingClientRect();
      const e: any = elem.getBoundingClientRect();
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
    return {top: top + PX, left: left + PX};
  }

  private getSelectorDimension(value: string): number {
    return Number(value.replace(PX, EMPTY_STR));
  }
}
