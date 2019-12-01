import {Directive, Input, ComponentRef, ElementRef, ViewContainerRef, Renderer2, ChangeDetectorRef, 
  ComponentFactoryResolver, forwardRef, EventEmitter, Output, SimpleChanges, OnChanges, HostListener, OnDestroy} from "@angular/core";
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
import {LocaleService} from "./services/angular-mydatepicker.locale.service";
import {UtilService} from "./services/angular-mydatepicker.util.service";
import {DefaultConfigService} from "./services/angular-mydatepicker.config.service";
import {CalToggle} from "./enums/cal-toggle.enum";
import {Year} from "./enums/year.enum";
import {KeyCode} from "./enums/key-code.enum";
import {CalAnimation} from "./enums/cal-animation.enum";
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
  @Input() defaultMonth: string;

  @Output() dateChanged: EventEmitter<IMyDateModel> = new EventEmitter<IMyDateModel>();
  @Output() inputFieldChanged: EventEmitter<IMyInputFieldChanged> = new EventEmitter<IMyInputFieldChanged>();
  @Output() calendarViewChanged: EventEmitter<IMyCalendarViewChanged> = new EventEmitter<IMyCalendarViewChanged>();
  @Output() calendarToggle: EventEmitter<number> = new EventEmitter<number>();
  @Output() rangeDateSelection: EventEmitter<IMyRangeDateSelection> = new EventEmitter<IMyRangeDateSelection>();

  private cRef: ComponentRef<CalendarComponent> = null;
  private hostText: string = "";
  private preventClose: boolean = false;
  private disabled = false;

  private opts: IMyOptions;

  onChangeCb: (_: any) => void = () => { };
  onTouchedCb: () => void = () => { };

  constructor(private localeService: LocaleService,
              private utilService: UtilService,
              private vcRef: ViewContainerRef,
              private cfr: ComponentFactoryResolver,
              private renderer: Renderer2,
              private cdr: ChangeDetectorRef,
              private elem: ElementRef,
              private config: DefaultConfigService) {
    this.opts = this.config.getDefaultConfig();
    this.parseOptions(this.opts);
  }

  @HostListener(KEYUP, ["$event"]) onKeyUp(event: KeyboardEvent) {
    const keyCode: number = this.utilService.getKeyCodeFromEvent(event);
    if (this.ignoreKeyPress(keyCode)) {
      return;
    }
    
    if (keyCode === KeyCode.esc) {
      this.closeSelector(CalToggle.CloseByEsc);
    }
    else {
      const value: string = this.getHostValue();

      let valid: boolean = false;
      if (!this.opts.dateRange) {
        const date: IMyDate = this.utilService.isDateValid(value, this.opts);
        valid = this.utilService.isInitializedDate(date);
      }
      else {
        const {begin, end} = this.utilService.isDateValidDateRange(value, this.opts);
        valid = this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end);
      }
      this.emitInputFieldChanged(value, valid);
    }
  }

  @HostListener(BLUR) onBlur() {
    const {inputFieldValidation, dateRange, dateFormat, monthLabels, dateRangeDatesDelimiter, closeSelectorOnDateSelect} = this.opts;

    if (inputFieldValidation) {
      const value: string = this.getHostValue();

      let valid: boolean = false;
      if (!dateRange) {
        const date: IMyDate = this.utilService.isDateValid(value, this.opts);
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
        const dateRange: IMyDateRange = this.utilService.isDateValidDateRange(value, this.opts);
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

  private onClickWrapper = (evt: MouseEvent) => this.onClick(evt);

  private onClick(evt: MouseEvent) {
    if (this.opts.closeSelectorOnDocumentClick && !this.preventClose && evt.target && this.cRef !== null && this.elem.nativeElement !== evt.target && !this.cRef.location.nativeElement.contains(evt.target) && !this.disabled) {
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
    if (opts !== undefined) {
      Object.keys(opts).forEach((k) => {
        (<IMyOptions> this.opts)[k] = opts[k];
      });
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

  public writeValue(value: any): void {
    if (this.disabled) {
      return;
    }

    const {dateFormat, monthLabels, dateRangeDatesDelimiter} = this.opts;

    if (!value) {
      this.setHostValue(EMPTY_STR);
      this.emitInputFieldChanged(EMPTY_STR, false);

      if (this.cRef !== null) {
        this.cRef.instance.resetDateValue();
      }
    }
    else if (value.isRange === false && value.singleDate) {
      // single date
      let {date, jsDate} = value.singleDate;
      if (jsDate) {
        date = this.jsDateToMyDate(jsDate);
      }
      const formatted: string = this.utilService.formatDate(date, dateFormat, monthLabels);
      const valid: boolean = this.utilService.isInitializedDate(this.utilService.isDateValid(formatted, this.opts));
      if (valid) {
        this.setHostValue(formatted);
        this.emitInputFieldChanged(formatted, valid);

        if (this.cRef !== null) {
          this.cRef.instance.setDateValue(date);
        }
      }
    }
    else if (value.isRange === true && value.dateRange) {
      // date range
      let {beginDate, beginJsDate, endDate, endJsDate} = value.dateRange;
      if (beginJsDate && endJsDate) {
        beginDate = this.jsDateToMyDate(beginJsDate);
        endDate = this.jsDateToMyDate(endJsDate);
      }

      if (beginDate && endDate) {
        const formatted: string =
          this.utilService.formatDate(beginDate, dateFormat, monthLabels) +
          dateRangeDatesDelimiter +
          this.utilService.formatDate(endDate, dateFormat, monthLabels);
        const {begin, end} = this.utilService.isDateValidDateRange(formatted, this.opts);
        const valid: boolean = this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end);
        if (valid) {
          this.setHostValue(formatted);
          this.emitInputFieldChanged(formatted, valid);

          if (this.cRef !== null) {
            this.cRef.instance.setDateRangeValue(beginDate, endDate);
          }
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
    const date: IMyDate = this.utilService.isDateValid(value, this.opts);
    if (!this.utilService.isInitializedDate(date)) {
      return {invalidDateFormat: true};
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
      this.cRef = this.vcRef.createComponent(this.cfr.resolveComponentFactory(CalendarComponent));
      this.appendSelector(this.cRef.location.nativeElement);
      this.cRef.instance.initializeComponent(
        this.opts,
        this.defaultMonth,
        this.getSelectorPosition(this.elem.nativeElement),
        this.getHostValue(),
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

  public isDateValid(): boolean {
    const value: string = this.getHostValue();

    if (value !== EMPTY_STR) {
      const date: IMyDate = this.utilService.isDateValid(value, this.opts);
      if (this.utilService.isInitializedDate(date)) {
        this.emitInputFieldChanged(value, true);
        return true;
      }
    }
    this.emitInputFieldChanged(value, false);
    return false;
  }

  private ignoreKeyPress(keyCode: number): boolean {
    return keyCode === KeyCode.leftArrow || keyCode === KeyCode.rightArrow || keyCode === KeyCode.upArrow || keyCode === KeyCode.downArrow || keyCode === KeyCode.tab || keyCode === KeyCode.shift;
  }

  private onAnimateWrapper = (reason: number) => this.animationEnd(reason);

  private animationEnd(reason: number): void {
    if (this.cRef !== null) {
      this.cRef.instance.selectorEl.nativeElement.removeEventListener(ANIMATION_END, this.onAnimateWrapper);
      this.removeComponent();
      this.emitCalendarToggle(reason);
    }
  }

  private closeSelector(reason: number): void {
    const {inline, calendarAnimation} = this.opts;
    
    if (this.cRef !== null && !inline) {
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

  private setHostValue(value: string): void {
    const {divHostElement} = this.opts;
    this.hostText = value;
    const valueType: string = !divHostElement.enabled ? VALUE : INNER_HTML;
    value = valueType === INNER_HTML && value === EMPTY_STR ? divHostElement.placeholder : value;
    this.renderer.setProperty(this.elem.nativeElement, valueType, value);
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
  }

  private emitInputFieldChanged(value: string, valid: boolean): void {
    this.inputFieldChanged.emit({value, dateFormat: this.opts.dateFormat, valid});
  }

  private emitCalendarChanged(cvc: IMyCalendarViewChanged) {
    this.calendarViewChanged.emit(cvc);
  }

  private emitRangeDateSelection(rds: IMyRangeDateSelection) {
    this.rangeDateSelection.emit(rds);
  }

  private emitCalendarToggle(reason: number): void {
    this.calendarToggle.emit(reason);
  }

  private jsDateToMyDate(date: Date): IMyDate {
    return {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()};
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
