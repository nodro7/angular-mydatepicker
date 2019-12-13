import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {Component, DebugElement, ViewChild} from '@angular/core';
import {AngularMyDatePickerModule} from '../angular-mydatepicker.module';
import {AngularMyDatePickerDirective} from '../angular-mydatepicker.input';
import {IAngularMyDpOptions, IMyOptions} from '../interfaces/my-options.interface';
import {IMyDateModel} from '../interfaces/my-date-model.interface';
import {DefaultView} from '../enums/default-view.enum';
import {CalAnimation} from '../enums/cal-animation.enum';

let comp: AngularMyDatepickerTestComponent;
let fixture: ComponentFixture<AngularMyDatepickerTestComponent>;
let de: DebugElement;
let el: HTMLElement;

function getElement(id: string): any {
  return document.body.querySelector(id);
}

function getElements(id: string): any {
  return document.body.querySelectorAll(id);
}

@Component({
  template: '<input style="width: 400px;" class="myDateInput" type="{{inputType}}" id="myDateInput" [options]="options" name="mydate" angular-mydatepicker #dp="angular-mydatepicker" />'
})
class AngularMyDatepickerTestComponent {
  @ViewChild('dp') vcDp: AngularMyDatePickerDirective;

  inputType: string = 'text';

  options: IAngularMyDpOptions = {};

  openCalendar(): void {
    this.vcDp.openCalendar();
  }

  closeCalendar(): void {
    this.vcDp.closeCalendar();
  }

  toggleCalendar(): void {
    this.vcDp.toggleCalendar();
  }

  clearDate(): void {
    this.vcDp.clearDate();
  }

  parseOptions(opts: IMyOptions): void {
    this.vcDp.parseOptions(opts);
  }

  setLocale(locale: string): void {
    this.vcDp.locale = locale;
    this.vcDp.setLocaleOptions();
  }

  setDefaultMonth(defMonth: string): void {
    this.vcDp.defaultMonth = defMonth;
  }

  setInputType(type: string): void {
    this.inputType = type;
  }

  initDateModel(model: IMyDateModel): void {
    this.vcDp.writeValue(model);
  }

  isDateValid(): boolean {
    return this.vcDp.isDateValid();
  }
}

describe('AngularMyDatePickerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AngularMyDatepickerTestComponent],
      imports: [FormsModule, AngularMyDatePickerModule],
      providers: []
    });
    fixture = TestBed.createComponent(AngularMyDatepickerTestComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('.myDateInput'));
    el = de.nativeElement;
  }));

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('init date model',() => {
    let opts: IMyOptions = {
      dateRange: false,
      dateFormat: 'd.m.yyyy'
    };

    comp.parseOptions(opts);

    comp.openCalendar();

    fixture.detectChanges();
    comp.initDateModel({isRange: false, singleDate: {date: { year: 2019, month: 5, day: 21 }}});

    fixture.detectChanges();
    let selection = getElement('.myDateInput');
    expect(selection.value).toBe('21.5.2019');


    fixture.detectChanges();
    comp.initDateModel({isRange: false, singleDate: {jsDate: new Date(2019, 5, 22)}});

    fixture.detectChanges();
    selection = getElement('.myDateInput');
    expect(selection.value).toBe('22.6.2019');


    fixture.detectChanges();
    comp.initDateModel(null);

    fixture.detectChanges();
    selection = getElement('.myDateInput');
    expect(selection.value).toBe('');


    opts.dateRange = true;
    comp.parseOptions(opts);

    fixture.detectChanges();
    comp.initDateModel({isRange: true, dateRange: {beginDate: {year: 2019, month: 5, day: 24}, endDate: {year: 2019, month: 6, day: 10}}});

    fixture.detectChanges();
    selection = getElement('.myDateInput');
    expect(selection.value).toBe('24.5.2019 - 10.6.2019');


    fixture.detectChanges();
    let begin = new Date(2019, 9, 12);
    let end = new Date(2019, 9, 14);
    comp.initDateModel({isRange: true, dateRange: {beginJsDate: begin, endJsDate: end}});

    fixture.detectChanges();
    selection = getElement('.myDateInput');
    expect(selection.value).toBe('12.10.2019 - 14.10.2019');


    fixture.detectChanges();
    comp.initDateModel(null);

    fixture.detectChanges();
    selection = getElement('.myDateInput');
    expect(selection.value).toBe('');

    comp.closeCalendar();
  });

  it('validate date selection on calendar',() => {
    let opts: IMyOptions = {
      dateRange: false,
      dateFormat: 'dd.mm.yyyy',
      showMonthNumber: false
    };

    comp.parseOptions(opts);

    fixture.detectChanges();
    comp.initDateModel({isRange: false, singleDate: {date: {year: 2020, month: 8, day: 24}}});

    fixture.detectChanges();
    let selection = getElement('.myDateInput');
    expect(selection.value).toBe('24.08.2020');

    comp.openCalendar();

    fixture.detectChanges();
    let selector = getElement('.myDpSelector');
    expect(selector).not.toBe(null);

    fixture.detectChanges();
    let monthlabel = getElement('.myDpMonthYearText .myDpMonthBtn');
    expect(monthlabel).not.toBe(null);
    expect(monthlabel.textContent).toBe('Aug');

    fixture.detectChanges();
    let yearlabel = getElement('.myDpMonthYearText .myDpYearBtn');
    expect(yearlabel).not.toBe(null);
    expect(yearlabel.textContent).toBe('2020');

    fixture.detectChanges();
    let selecteddate = getElement('.myDpSelectedDay');
    expect(selecteddate).not.toBe(null);
    expect(selecteddate.textContent).toBe('24');

    fixture.detectChanges();
    monthlabel.click();

    fixture.detectChanges();
    let selectedmonth = getElement('.myDpSelectedMonth');
    expect(selectedmonth).not.toBe(null);
    expect(selectedmonth.textContent).toBe('Aug');

    fixture.detectChanges();
    yearlabel.click();

    fixture.detectChanges();
    let selectedyear = getElement('.myDpSelectedYear');
    expect(selectedyear).not.toBe(null);
    expect(selectedyear.textContent).toBe('2020');

    comp.closeCalendar();
  });

  it('validate date range selection on calendar',() => {
    let opts: IMyOptions = {
      dateRange: true,
      dateFormat: 'dd.mm.yyyy',
      showMonthNumber: false
    };

    comp.parseOptions(opts);

    fixture.detectChanges();
    comp.initDateModel({isRange: true, dateRange: {beginDate: {year: 2021, month: 9, day: 14}, endDate: {year: 2021, month: 9, day: 19}}});

    fixture.detectChanges();
    let selection = getElement('.myDateInput');
    expect(selection.value).toBe('14.09.2021 - 19.09.2021');

    comp.openCalendar();

    fixture.detectChanges();
    let selector = getElement('.myDpSelector');
    expect(selector).not.toBe(null);

    fixture.detectChanges();
    let monthlabel = getElement('.myDpMonthYearText .myDpMonthBtn');
    expect(monthlabel).not.toBe(null);
    expect(monthlabel.textContent).toBe('Sep');

    fixture.detectChanges();
    let yearlabel = getElement('.myDpMonthYearText .myDpYearBtn');
    expect(yearlabel).not.toBe(null);
    expect(yearlabel.textContent).toBe('2021');

    fixture.detectChanges();
    let selecteddates = getElements('.myDpSelectedDay');
    expect(selecteddates).not.toBe(null);
    expect(selecteddates.length).toBe(2);
    expect(selecteddates[0].textContent).toBe('14');
    expect(selecteddates[1].textContent).toBe('19');

    fixture.detectChanges();
    let selectedrange = getElements('.myDpRangeColor');
    expect(selectedrange).not.toBe(null);
    expect(selectedrange.length).toBe(6);

    fixture.detectChanges();
    monthlabel.click();

    fixture.detectChanges();
    let selectedmonth = getElement('.myDpSelectedMonth');
    expect(selectedmonth).not.toBe(null);
    expect(selectedmonth.textContent).toBe('Sep');

    fixture.detectChanges();
    yearlabel.click();

    fixture.detectChanges();
    let selectedyear = getElement('.myDpSelectedYear');
    expect(selectedyear).not.toBe(null);
    expect(selectedyear.textContent).toBe('2021');

    comp.closeCalendar();
  });

  it('test open/close/toggle calendar functions', () => {
    comp.openCalendar();
    fixture.detectChanges();
    let selector = getElement('.myDpSelector');
    expect(selector).not.toBe(null);

    comp.closeCalendar();
    fixture.detectChanges();
    selector = getElement('.myDpSelector');
    expect(selector).toBe(null);

    comp.toggleCalendar();
    fixture.detectChanges();
    selector = getElement('.myDpSelector');
    expect(selector).not.toBe(null);

    comp.toggleCalendar();
    fixture.detectChanges();
    selector = getElement('.myDpSelector');
    expect(selector).toBe(null);
  });

  it('select and clear date', () => {
    comp.setDefaultMonth('2019/05');
    comp.openCalendar();
    fixture.detectChanges();
    let date = getElement('.d_0_0');
    expect(date).not.toBe(null);

    fixture.detectChanges();
    date.click();
    let selector = getElement('.myDpSelector');
    expect(selector).toBe(null);

    fixture.detectChanges();
    let selection = getElement('.myDateInput');
    expect(selection.value).toBe('2019-04-29');

    comp.clearDate();
    fixture.detectChanges();
    selection = getElement('.myDateInput');
    expect(selection.value).toBe('');
  });

  it('select previous month', () => {
    let opts: IMyOptions = {
      monthLabels: {1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12"}
    };

    comp.parseOptions(opts);
    comp.setDefaultMonth('2016/12');

    comp.openCalendar();

    let prevmonth = getElement('.myDpPrevBtn .myDpHeaderBtn');
    expect(prevmonth).not.toBe(null);

    for(let i = 12; i > 0; i--) {
      fixture.detectChanges();

      let monthlabel = getElement('.myDpMonthYearText .myDpMonthBtn');
      expect(monthlabel).not.toBe(null);
      expect(monthlabel.textContent).toBe(String(i));

      prevmonth.click();
    }

    comp.closeCalendar();
  });

  it('select next month', () => {
    let opts: IMyOptions = {
      monthLabels: {1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12"}
    };

    comp.parseOptions(opts);
    comp.setDefaultMonth('2016/01');

    comp.openCalendar();

    let nextmonth = getElement('.myDpNextBtn .myDpHeaderBtn');
    expect(nextmonth).not.toBe(null);

    for(let i = 1; i <= 12; i++) {
      fixture.detectChanges();

      let monthlabel = getElement('.myDpMonthYearText .myDpMonthBtn');
      expect(monthlabel).not.toBe(null);
      expect(monthlabel.textContent).toBe(String(i));

      nextmonth.click();
    }
    comp.closeCalendar();
  });

  it('select previous month year change', () => {
    comp.setDefaultMonth('2016/01');

    comp.openCalendar();

    fixture.detectChanges();
    let prevmonth = getElement('.myDpPrevBtn .myDpHeaderBtn');
    expect(prevmonth).not.toBe(null);

    prevmonth.click();

    fixture.detectChanges();
    let monthlabel = getElement('.myDpMonthYearText .myDpMonthBtn');
    expect(monthlabel).not.toBe(null);
    expect(monthlabel.textContent).toBe('Dec');

    fixture.detectChanges();
    let yearlabel = getElement('.myDpMonthYearText .myDpYearBtn');
    expect(yearlabel).not.toBe(null);
    expect(yearlabel.textContent).toBe('2015');

    comp.closeCalendar();
  });

  it('select next month year change', () => {
    comp.setDefaultMonth('2016/12');

    comp.openCalendar();

    fixture.detectChanges();
    let nextmonth = getElement('.myDpNextBtn .myDpHeaderBtn');
    expect(nextmonth).not.toBe(null);

    nextmonth.click();

    fixture.detectChanges();
    let monthlabel = getElement('.myDpMonthYearText .myDpMonthBtn');
    expect(monthlabel).not.toBe(null);
    expect(monthlabel.textContent).toBe('Jan');

    fixture.detectChanges();
    let yearlabel = getElement('.myDpMonthYearText .myDpYearBtn');
    expect(yearlabel).not.toBe(null);
    expect(yearlabel.textContent).toBe('2017');

    comp.closeCalendar();
  });

  it('edit date in input box', () => {
    let opts: IMyOptions = {
      dateRange: false,
      dateFormat: 'dd mmm yyyy'
    };

    comp.parseOptions(opts);

    fixture.detectChanges();
    let selection = getElement('.myDateInput');

    selection.value = '12 Feb 2017';
    selection.dispatchEvent(new Event('blur'));

    fixture.detectChanges();
    selection = getElement('.myDateInput');
    expect(selection.value).toBe('12 Feb 2017');


    opts.dateRange = true;

    comp.parseOptions(opts);

    fixture.detectChanges();
    selection = getElement('.myDateInput');

    selection.value = '12 Feb 2017 - 13 Feb 2017';
    selection.dispatchEvent(new Event('blur'));

    fixture.detectChanges();
    selection = getElement('.myDateInput');
    expect(selection.value).toBe('12 Feb 2017 - 13 Feb 2017');
  });

  it('isDateValid() call', () => {
    let opts: IMyOptions = {
      dateRange: false,
      dateFormat: 'dd mmm yyyy'
    };

    comp.parseOptions(opts);

    fixture.detectChanges();
    let selection = getElement('.myDateInput');

    selection.value = '12 Feb 2017';
    selection.dispatchEvent(new Event('blur'));

    let valid = comp.isDateValid();
    expect(valid).not.toBe(null);
    expect(valid).toBe(true);

    selection.value = '';
    selection.dispatchEvent(new Event('blur'));

    valid = comp.isDateValid();
    expect(valid).not.toBe(null);
    expect(valid).toBe(false);
  });

  it('test calendar year 2016 month one by one - next month button', () => {
    comp.setDefaultMonth('2016/01');

    comp.openCalendar();

    fixture.detectChanges();
    let nextmonth = getElement('.myDpNextBtn .myDpHeaderBtn');
    expect(nextmonth).not.toBe(null);

    fixture.detectChanges();
    let monthlabel = getElement('.myDpMonthYearText .myDpMonthBtn');
    expect(monthlabel).not.toBe(null);
    expect(monthlabel.textContent.trim()).toBe('Jan');

    fixture.detectChanges();
    let yearlabel = getElement('.myDpMonthYearText .myDpYearBtn');
    expect(yearlabel).not.toBe(null);
    expect(yearlabel.textContent.trim()).toBe('2016');

    let beginDate: Array<string> = ['28', '1', '29', '28', '25', '30', '27', '1', '29', '26', '31', '28'];
    let endDate: Array<string> = ['7', '13', '10', '8', '5', '10', '7', '11', '9', '6', '11', '8'];

    for(let i = 0; i < 12; i++) {
      fixture.detectChanges();
      let currmonth = getElements('.myDpDaycell');
      expect(currmonth).not.toBe(null);
      expect(currmonth.length).toBe(42);

      expect(currmonth[0]).not.toBe(null);
      expect(currmonth[0].textContent.trim()).toBe(beginDate[i]);

      expect(currmonth[41]).not.toBe(null);
      expect(currmonth[41].textContent.trim()).toBe(endDate[i]);

      nextmonth.click();
    }

    comp.closeCalendar();
  });

  it('test calendar year 2016 month one by one - previous month button', () => {
    comp.setDefaultMonth('2016/12');

    comp.openCalendar();

    fixture.detectChanges();
    let prevmonth = getElement('.myDpPrevBtn .myDpHeaderBtn');
    expect(prevmonth).not.toBe(null);

    fixture.detectChanges();
    let monthlabel = getElement('.myDpMonthYearText .myDpMonthBtn');
    expect(monthlabel).not.toBe(null);
    expect(monthlabel.textContent.trim()).toBe('Dec');

    fixture.detectChanges();
    let yearlabel = getElement('.myDpMonthYearText .myDpYearBtn');
    expect(yearlabel).not.toBe(null);
    expect(yearlabel.textContent.trim()).toBe('2016');

    let beginDate: Array<string> = ['28', '1', '29', '28', '25', '30', '27', '1', '29', '26', '31', '28'];
    let endDate: Array<string> = ['7', '13', '10', '8', '5', '10', '7', '11', '9', '6', '11', '8'];

    for(let i = 11; i > 0; i--) {
      fixture.detectChanges();
      let currmonth = getElements('.myDpDaycell');
      expect(currmonth).not.toBe(null);
      expect(currmonth.length).toBe(42);

      expect(currmonth[0]).not.toBe(null);
      expect(currmonth[0].textContent.trim()).toBe(beginDate[i]);

      expect(currmonth[41]).not.toBe(null);
      expect(currmonth[41].textContent.trim()).toBe(endDate[i]);

      prevmonth.click();
    }

    comp.closeCalendar();
  });

  it('day view move focus', () => {
    comp.setDefaultMonth('2019/07');

    let opts: IMyOptions = {
      dateFormat: 'dd.mm.yyyy'
    };

    comp.parseOptions(opts);

    comp.openCalendar();

    const arrowEvent = new KeyboardEvent('keydown',{
      'key': 'ArrowRight'
    });

    fixture.detectChanges();
    let daycell = getElement('.d_0_0');
    expect(daycell).not.toBe(null);

    daycell.dispatchEvent(arrowEvent);

    expect(document.activeElement.id).toBe('d_0_1');

    fixture.detectChanges();
    daycell = getElement('.d_0_1');
    expect(daycell).not.toBe(null);

    const enterEvent = new KeyboardEvent('keydown',{
      'key': 'Enter'
    });

    daycell.dispatchEvent(enterEvent);

    fixture.detectChanges();
    let input = getElement('.myDateInput');
    expect(input.value).toBe('02.07.2019');

    comp.closeCalendar();
  });

  it('month view move focus', () => {
    comp.setDefaultMonth('2019/07');

    let opts: IMyOptions = {
      dateFormat: 'dd.mm.yyyy'
    };

    comp.parseOptions(opts);

    comp.openCalendar();

    fixture.detectChanges();
    let monthbtn = getElement('.myDpMonthBtn');
    expect(monthbtn).not.toBe(null);
    monthbtn.click();

    const arrowEvent = new KeyboardEvent('keydown',{
      'key': 'ArrowRight'
    });

    fixture.detectChanges();
    let monthcell = getElement('.m_0_0');
    expect(monthcell).not.toBe(null);

    monthcell.dispatchEvent(arrowEvent);

    expect(document.activeElement.id).toBe('m_0_1');

    const enterEvent = new KeyboardEvent('keydown',{
      'key': 'Enter'
    });

    fixture.detectChanges();
    monthcell = getElement('.m_0_1');
    expect(monthcell).not.toBe(null);

    monthcell.dispatchEvent(enterEvent);

    fixture.detectChanges();
    let daycell = getElement('.d_0_0');
    expect(daycell).not.toBe(null);
    daycell.click();

    fixture.detectChanges();
    let input = getElement('.myDateInput');
    expect(input).not.toBe(null);
    expect(input.value).toBe('28.01.2019');

    comp.closeCalendar();
  });

  it('year view move focus', () => {
    comp.setDefaultMonth('2019/07');

    let opts: IMyOptions = {
      dateFormat: 'dd.mm.yyyy'
    };

    comp.parseOptions(opts);

    comp.openCalendar();

    fixture.detectChanges();
    let yearbtn = getElement('.myDpYearBtn');
    expect(yearbtn).not.toBe(null);
    yearbtn.click();

    const arrowEvent = new KeyboardEvent('keydown',{
      'key': 'ArrowRight'
    });

    fixture.detectChanges();
    let yearcell = getElement('.y_0_0');
    expect(yearcell).not.toBe(null);

    yearcell.dispatchEvent(arrowEvent);

    expect(document.activeElement.id).toBe('y_0_1');

    const enterEvent = new KeyboardEvent('keydown',{
      'key': 'Enter'
    });

    fixture.detectChanges();
    yearcell = getElement('.y_0_1');
    expect(yearcell).not.toBe(null);

    yearcell.dispatchEvent(enterEvent);

    fixture.detectChanges();
    let daycell = getElement('.d_0_0');
    expect(daycell).not.toBe(null);
    daycell.click();

    fixture.detectChanges();
    let input = getElement('.myDateInput');
    expect(input).not.toBe(null);
    expect(input.value).toBe('30.06.2008');

    comp.closeCalendar();
  });

  it('input keyup event', () => {
    comp.setDefaultMonth('2019/07');

    let opts: IMyOptions = {
      dateRange: false
    };

    comp.parseOptions(opts);

    fixture.detectChanges();
    let input = getElement('.myDateInput');
    expect(input).not.toBe(null);

    input.click();

    const keyupEvent1 = new KeyboardEvent('keyup',{
      'key': '1'
    });

    input.dispatchEvent(keyupEvent1);

    opts.dateRange = true;

    comp.parseOptions(opts);

    input.dispatchEvent(keyupEvent1);

    const keyupEventEsc = new KeyboardEvent('keyup',{
      'key': 'Escape'
    });

    input.dispatchEvent(keyupEventEsc);

    const keyupEventIgnore = new KeyboardEvent('keyup',{
      'key': 'Tab'
    });

    input.dispatchEvent(keyupEventIgnore);
  });

  it('day view cell mouse enter and leave', () => {
    comp.setDefaultMonth('2019/07');

    let opts: IMyOptions = {
      dateRange: true,
      dateFormat: 'dd.mm.yyyy'
    };

    comp.parseOptions(opts);

    comp.openCalendar();

    fixture.detectChanges();
    let daycell = getElement('.d_0_0');
    expect(daycell).not.toBe(null);

    daycell.click();

    fixture.detectChanges();
    daycell = getElement('.d_0_1');
    expect(daycell).not.toBe(null);
    expect(window.getComputedStyle(daycell).backgroundColor).toBe('rgb(255, 255, 255)');

    fixture.detectChanges();
    daycell = getElement('.d_0_2');
    expect(daycell).not.toBe(null);

    const mouseEnterEvent = new MouseEvent('mouseenter');
    daycell.dispatchEvent(mouseEnterEvent);

    fixture.detectChanges();
    daycell = getElement('.d_0_1');
    expect(daycell).not.toBe(null);
    expect(window.getComputedStyle(daycell).backgroundColor).toBe('rgb(219, 234, 255)');

    fixture.detectChanges();
    daycell = getElement('.d_0_2');
    expect(daycell).not.toBe(null);

    const mouseLeaveEvent = new MouseEvent('mouseleave');
    daycell.dispatchEvent(mouseLeaveEvent);


    fixture.detectChanges();
    daycell = getElement('.d_0_1');
    expect(daycell).not.toBe(null);
    expect(window.getComputedStyle(daycell).backgroundColor).toBe('rgb(255, 255, 255)');

    comp.closeCalendar();
  });



  // options
  it('options - dateRange (true/false)', () => {
    let options: IMyOptions = {
      dateRange: true,
      dateFormat: 'dd.mm.yyyy'
    };

    comp.setDefaultMonth('2019/05');
    comp.parseOptions(options);


    comp.openCalendar();
    fixture.detectChanges();
    let date = getElement('.d_0_0');
    expect(date).not.toBe(null);

    fixture.detectChanges();
    date.click();


    fixture.detectChanges();
    date = getElement('.d_0_1');
    expect(date).not.toBe(null);

    fixture.detectChanges();
    date.click();

    fixture.detectChanges();
    let input = getElement('.myDateInput');
    expect(input.value).toBe('29.04.2019 - 30.04.2019');

    comp.clearDate();


    options.dateRange = false;
    comp.parseOptions(options);

    comp.closeCalendar();

    comp.openCalendar();
    fixture.detectChanges();
    date = getElement('.d_0_0');
    expect(date).not.toBe(null);

    fixture.detectChanges();
    date.click();

    fixture.detectChanges();
    input = getElement('.myDateInput');
    expect(input.value).toBe('29.04.2019');
  });

  it('options - inline', () => {
    let options: IMyOptions = {
      inline: true,
      dateFormat: 'dd.mm.yyyy'
    };

    comp.setInputType('hidden');
    comp.parseOptions(options);

    fixture.detectChanges();
    let selector = getElement('.myDpSelector');
    expect(selector).not.toBe(null);

    let date = getElement('.d_0_0');
    expect(date).not.toBe(null);

    comp.setInputType('text');
  });

  it('options - dayLabels', () => {
    let options: IMyOptions = {dayLabels:  {su: '1', mo: '2', tu: '3', we: '4', th: '5', fr: '6', sa: '7'}, firstDayOfWeek: 'su'};

    comp.setDefaultMonth('2019/05');
    comp.parseOptions(options);

    comp.openCalendar();

    fixture.detectChanges();
    let ths = getElements('.myDpWeekDayTitle');
    expect(ths.length).toBe(7);

    for(let i = 0; i < ths.length; i++) {
      let el = ths[i];
      expect(parseInt(el.textContent.trim())).toBe(i + 1);
    }

    comp.closeCalendar();
  });

  it('options - monthLabels', () => {
    let opts: IMyOptions = {
      monthLabels: {1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12"}
    };

    comp.parseOptions(opts);
    comp.setDefaultMonth('2019/01');

    comp.openCalendar();

    let nextmonth = getElement('.myDpNextBtn .myDpHeaderBtn');
    expect(nextmonth).not.toBe(null);

    for(let i = 1; i <= 12; i++) {
      fixture.detectChanges();

      let monthlabel = getElement('.myDpMonthYearText .myDpMonthBtn');
      expect(monthlabel).not.toBe(null);
      expect(monthlabel.textContent).toBe(String(i));

      nextmonth.click();
    }

    comp.closeCalendar();
  });

  it('options - dateFormat', () => {
    // default
    comp.setDefaultMonth('2016/01');
    comp.openCalendar();

    fixture.detectChanges();
    let currmonth = getElements('.myDpDaycell');
    expect(currmonth).not.toBe(null);
    expect(currmonth.length).toBe(42);

    currmonth[5].click();

    fixture.detectChanges();
    let selection = getElement('.myDateInput');
    expect(selection.value).toBe('2016-01-02');

    comp.closeCalendar();


    // dd.mm.yyyy
    let opts: IMyOptions = {
      dateFormat: 'dd.mm.yyyy'
    };

    comp.parseOptions(opts);

    comp.openCalendar();

    fixture.detectChanges();
    currmonth = getElements('.myDpDaycell');
    expect(currmonth).not.toBe(null);
    expect(currmonth.length).toBe(42);

    currmonth[4].click();

    fixture.detectChanges();
    selection = getElement('.myDateInput');
    expect(selection.value).toBe('01.01.2016');

    comp.closeCalendar();


    // dd mmm yyyy
    opts.dateFormat = 'dd mmm yyyy';
    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    currmonth = getElements('.myDpDaycell');
    expect(currmonth).not.toBe(null);
    expect(currmonth.length).toBe(42);

    currmonth[4].click();

    fixture.detectChanges();
    selection = getElement('.myDateInput');
    expect(selection.value).toBe('01 Jan 2016');

    comp.closeCalendar();
  });


  it('options - defaultView', () => {
    // default
    comp.setDefaultMonth('2019/06');

    let opts: IMyOptions = {
      defaultView: DefaultView.Month
    };

    comp.parseOptions(opts);

    comp.openCalendar();

    fixture.detectChanges();

    let date = getElements('.myDpDaycell');
    expect(date).not.toBe(null);
    expect(date.length).toBe(0);

    let month = getElements('.myDpMonthcell');
    expect(month).not.toBe(null);
    expect(month.length).toBe(12);

    let year = getElements('.myDpYearcell');
    expect(year).not.toBe(null);
    expect(year.length).toBe(0);

    comp.closeCalendar();

    opts.defaultView = DefaultView.Year;

    comp.parseOptions(opts);

    comp.openCalendar();

    fixture.detectChanges();

    date = getElements('.myDpDaycell');
    expect(date).not.toBe(null);
    expect(date.length).toBe(0);

    month = getElements('.myDpMonthcell');
    expect(month).not.toBe(null);
    expect(month.length).toBe(0);

    year = getElements('.myDpYearcell');
    expect(year).not.toBe(null);
    expect(year.length).toBe(25);

    comp.closeCalendar();

    opts.defaultView = DefaultView.Date;

    comp.parseOptions(opts);

    comp.openCalendar();

    fixture.detectChanges();

    date = getElements('.myDpDaycell');
    expect(date).not.toBe(null);
    expect(date.length).toBe(42);

    month = getElements('.myDpMonthcell');
    expect(month).not.toBe(null);
    expect(month.length).toBe(0);

    year = getElements('.myDpYearcell');
    expect(year).not.toBe(null);
    expect(year.length).toBe(0);

    comp.closeCalendar();
  });

  it('options - firstDayOfWeek', () => {
    comp.setDefaultMonth('2019/01');
    comp.openCalendar();

    fixture.detectChanges();
    let first = getElement('.myDpWeekDayTitle:first-child');
    expect(first).not.toBe(null);
    expect(first.textContent).toBe('Mon');

    let last = getElement('.myDpWeekDayTitle:last-child');
    expect(last).not.toBe(null);
    expect(last.textContent).toBe('Sun');

    comp.closeCalendar();


    let opts: IMyOptions = {
      firstDayOfWeek: 'su'
    };

    comp.parseOptions(opts);

    comp.openCalendar();

    fixture.detectChanges();
    first = getElement('.myDpWeekDayTitle:first-child');
    expect(first).not.toBe(null);
    expect(first.textContent).toBe('Sun');

    last = getElement('.myDpWeekDayTitle:last-child');
    expect(last).not.toBe(null);
    expect(last.textContent).toBe('Sat');

    comp.closeCalendar();


    opts.firstDayOfWeek = 'we';

    comp.parseOptions(opts);

    comp.openCalendar();

    fixture.detectChanges();
    first = getElement('.myDpWeekDayTitle:first-child');
    expect(first).not.toBe(null);
    expect(first.textContent).toBe('Wed');

    last = getElement('.myDpWeekDayTitle:last-child');
    expect(last).not.toBe(null);
    expect(last.textContent).toBe('Tue');

    comp.closeCalendar();
  });

  it('options - sunHighlight', () => {
    comp.setDefaultMonth('2019/01');

    let opts: IMyOptions = {
      sunHighlight: true
    };

    comp.parseOptions(opts);

    comp.openCalendar();

    fixture.detectChanges();
    let highlight = getElements('.myDpHighlight');
    expect(highlight).not.toBe(null);
    expect(highlight.length).toBe(6);

    comp.closeCalendar();


    opts.sunHighlight = false;

    comp.parseOptions(opts);

    comp.openCalendar();

    fixture.detectChanges();
    highlight = getElements('.myDpHighlight');
    expect(highlight.length).toBe(0);

    comp.closeCalendar();
  });

  it('options - satHighlight', () => {
    comp.setDefaultMonth('2019/01');

    let opts: IMyOptions = {
      sunHighlight: false,
      satHighlight: true
    };

    comp.parseOptions(opts);

    comp.openCalendar();

    fixture.detectChanges();
    let highlight = getElements('.myDpHighlight');
    expect(highlight).not.toBe(null);
    expect(highlight.length).toBe(6);

    comp.closeCalendar();


    opts.satHighlight = false;

    comp.parseOptions(opts);

    comp.openCalendar();

    fixture.detectChanges();
    highlight = getElements('.myDpHighlight');
    expect(highlight.length).toBe(0);

    comp.closeCalendar();
  });

  it('options - highlightDates', () => {
    comp.setDefaultMonth('2019/01');

    let opts: IMyOptions = {
      sunHighlight: false,
      satHighlight: false,
      highlightDates: [{year: 2019, month: 1, day: 10}, {year: 2019, month: 1, day: 12}, {year: 2019, month: 1, day: 13}]
    };

    comp.parseOptions(opts);

    comp.openCalendar();

    fixture.detectChanges();
    let highlight = getElements('.myDpHighlight');
    expect(highlight).not.toBe(null);
    expect(highlight.length).toBe(3);

    comp.closeCalendar();


    opts.highlightDates = [];

    comp.parseOptions(opts);

    comp.openCalendar();

    fixture.detectChanges();
    highlight = getElements('.myDpHighlight');
    expect(highlight.length).toBe(0);

    comp.closeCalendar();
  });

  it('options - markCurrentDay', () => {
    let opts: IMyOptions = {
      markCurrentDay: true
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let markcurrday = getElement('.myDpMarkCurrDay');
    expect(markcurrday).not.toBe(null);

    comp.closeCalendar();


    opts.markCurrentDay = false;

    comp.parseOptions(opts);

    comp.openCalendar();

    fixture.detectChanges();
    markcurrday = getElement('.myDpMarkCurrDay');
    expect(markcurrday).toBe(null);

    comp.closeCalendar();
  });

  it('options - markCurrentMonth', () => {
    let opts: IMyOptions = {
      markCurrentMonth: true
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let monthlabel = getElement('.myDpMonthYearText .myDpMonthBtn');
    monthlabel.click();

    fixture.detectChanges();
    let markcurrmonth = getElement('.myDpMarkCurrMonth');
    expect(markcurrmonth).not.toBe(null);

    comp.closeCalendar();
  });

  it('options - markCurrentYear', () => {
    let opts: IMyOptions = {
      markCurrentYear: true
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let yearlabel = getElement('.myDpMonthYearText .myDpYearBtn');
    yearlabel.click();

    fixture.detectChanges();
    let markcurryear = getElement('.myDpMarkCurrYear');
    expect(markcurryear).not.toBe(null);

    comp.closeCalendar();
  });

  it('options - monthSelector', () => {
    comp.setDefaultMonth('2019/05');

    let opts: IMyOptions = {
      monthSelector: true,
      showMonthNumber: false
    };

    comp.parseOptions(opts);

    comp.openCalendar();

    fixture.detectChanges();
    let montlabel = getElement('.myDpMonthYearText .myDpMonthBtn');
    expect(montlabel).not.toBe(null);
    montlabel.click();

    fixture.detectChanges();
    let monthtable = getElement('.myDpMonthTable');
    expect(monthtable).not.toBe(null);

    fixture.detectChanges();
    let monthcell = getElements('.myDpMonthcell');
    expect(monthcell).not.toBe(null);
    expect(monthcell.length).toBe(12);

    fixture.detectChanges();
    expect(monthcell[0].textContent.trim()).toBe('Jan');

    fixture.detectChanges();
    expect(monthcell[11].textContent.trim()).toBe('Dec');

    fixture.detectChanges();
    let selectedmonth = getElement('.myDpSelectedMonth');
    expect(selectedmonth).not.toBe(null);
    expect(selectedmonth.textContent.trim()).toBe('May');
    selectedmonth.click();

    fixture.detectChanges();
    monthtable = getElement('.myDpMonthTable');
    expect(monthtable).toBe(null);

    comp.closeCalendar();
  });

  it('options - yearSelector', () => {
    comp.setDefaultMonth('2019/05');

    let opts: IMyOptions = {
      yearSelector: true
    };

    comp.parseOptions(opts);

    comp.openCalendar();

    fixture.detectChanges();
    let yearlabel = getElement('.myDpMonthYearText .myDpYearBtn');
    expect(yearlabel).not.toBe(null);
    yearlabel.click();

    fixture.detectChanges();
    let yeartable = getElement('.myDpYearTable');
    expect(yeartable).not.toBe(null);

    fixture.detectChanges();
    let yearcell = getElements('.myDpYearcell');
    expect(yearcell).not.toBe(null);
    expect(yearcell.length).toBe(25);

    fixture.detectChanges();
    expect(yearcell[0].textContent.trim()).toBe('2007');

    fixture.detectChanges();
    expect(yearcell[24].textContent.trim()).toBe('2031');

    fixture.detectChanges();
    let selectedyear = getElement('.myDpSelectedYear');
    expect(selectedyear).not.toBe(null);
    expect(selectedyear.textContent.trim()).toBe('2019');

    selectedyear.click();

    fixture.detectChanges();
    yeartable = getElement('.myDpYearTable');
    expect(yeartable).toBe(null);

    comp.closeCalendar();
  });

  it('options - disableHeaderButtons', () => {
    comp.setDefaultMonth('2016/05');

    let opts: IMyOptions = {
      disableHeaderButtons: true,
      disableUntil: {year: 2016, month: 4, day: 10}
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let montlabel = getElement('.myDpMonthYearText .myDpMonthBtn');
    expect(montlabel).not.toBe(null);
    expect(montlabel.textContent).toBe('May');

    fixture.detectChanges();
    let prevmonth = getElement('.myDpPrevBtn .myDpHeaderBtn');
    expect(prevmonth).not.toBe(null);
    prevmonth.click();

    fixture.detectChanges();
    montlabel = getElement('.myDpMonthYearText .myDpMonthBtn');
    expect(montlabel).not.toBe(null);
    expect(montlabel.textContent).toBe('Apr');

    fixture.detectChanges();
    let headerbtndisabled = getElements('.myDpHeaderBtnDisabled');
    expect(headerbtndisabled).not.toBe(null);
    expect(headerbtndisabled.length).toBe(1);

    prevmonth.click();

    fixture.detectChanges();
    montlabel = getElement('.myDpMonthYearText .myDpMonthBtn');
    expect(montlabel).not.toBe(null);
    expect(montlabel.textContent).toBe('Apr');

    comp.closeCalendar();


    opts.disableSince = {year: 2016, month: 6, day: 10};
    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    montlabel = getElement('.myDpMonthYearText .myDpMonthBtn');
    expect(montlabel).not.toBe(null);
    expect(montlabel.textContent).toBe('May');

    fixture.detectChanges();
    let nextmonth = getElement('.myDpNextBtn .myDpHeaderBtn');
    expect(nextmonth).not.toBe(null);
    nextmonth.click();

    fixture.detectChanges();
    montlabel = getElement('.myDpMonthYearText .myDpMonthBtn');
    expect(montlabel).not.toBe(null);
    expect(montlabel.textContent).toBe('Jun');

    fixture.detectChanges();
    headerbtndisabled = getElements('.myDpHeaderBtnDisabled');
    expect(headerbtndisabled).not.toBe(null);
    expect(headerbtndisabled.length).toBe(1);

    prevmonth.click();

    fixture.detectChanges();
    montlabel = getElement('.myDpMonthYearText .myDpMonthBtn');
    expect(montlabel).not.toBe(null);
    expect(montlabel.textContent).toBe('Jun');

    comp.closeCalendar();
  });

  it('options - showWeekNmbers', () => {
    comp.setDefaultMonth('2019/05');

    let opts: IMyOptions = {
      showWeekNumbers: true
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let weekdaytitleweeknbr = getElement('.myDpWeekDayTitleWeekNbr');
    expect(weekdaytitleweeknbr).not.toBe(null);

    fixture.detectChanges();
    let daycellweeknbr = getElements('.myDpDaycellWeekNbr');
    expect(daycellweeknbr.length).toBe(6);

    expect(daycellweeknbr[0].textContent.trim()).toBe('18');
    expect(daycellweeknbr[1].textContent.trim()).toBe('19');
    expect(daycellweeknbr[2].textContent.trim()).toBe('20');
    expect(daycellweeknbr[3].textContent.trim()).toBe('21');
    expect(daycellweeknbr[4].textContent.trim()).toBe('22');
    expect(daycellweeknbr[5].textContent.trim()).toBe('23');

    fixture.detectChanges();
    let nextmonth = getElement('.myDpNextBtn .myDpHeaderBtn');
    expect(nextmonth).not.toBe(null);
    nextmonth.click();

    fixture.detectChanges();
    daycellweeknbr = getElements('.myDpDaycellWeekNbr');
    expect(daycellweeknbr.length).toBe(6);

    expect(daycellweeknbr[0].textContent.trim()).toBe('22');
    expect(daycellweeknbr[1].textContent.trim()).toBe('23');
    expect(daycellweeknbr[2].textContent.trim()).toBe('24');
    expect(daycellweeknbr[3].textContent.trim()).toBe('25');
    expect(daycellweeknbr[4].textContent.trim()).toBe('26');
    expect(daycellweeknbr[5].textContent.trim()).toBe('27');

    comp.closeCalendar();

    comp.setDefaultMonth('2017/01');

    comp.openCalendar();

    fixture.detectChanges();
    daycellweeknbr = getElements('.myDpDaycellWeekNbr');
    expect(daycellweeknbr.length).toBe(6);

    expect(daycellweeknbr[0].textContent.trim()).toBe('52');
    expect(daycellweeknbr[1].textContent.trim()).toBe('1');
    expect(daycellweeknbr[2].textContent.trim()).toBe('2');
    expect(daycellweeknbr[3].textContent.trim()).toBe('3');
    expect(daycellweeknbr[4].textContent.trim()).toBe('4');
    expect(daycellweeknbr[5].textContent.trim()).toBe('5');

    comp.closeCalendar();
  });

  it('options - selectorHeight', () => {
    comp.setDefaultMonth('2019/05');

    let opts: IMyOptions = {
      selectorHeight: '333px'
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let selector = getElement('.myDpSelector');
    expect(selector).not.toBe(null);
    expect(selector.style['height']).toBe('333px');

    comp.closeCalendar();
  });

  it('options - selectorWidth', () => {
    comp.setDefaultMonth('2019/05');

    let opts: IMyOptions = {
      selectorWidth: '333px'
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let selector = getElement('.myDpSelector');
    expect(selector).not.toBe(null);
    expect(selector.style['width']).toBe('333px');

    comp.closeCalendar();
  });

  it('options - disableUntil', () => {
    comp.setDefaultMonth('2017/01');
    let opts: IMyOptions = {
      disableUntil: {year: 2017, month: 1, day: 26},
      disableHeaderButtons: false
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let disabled = getElements('.myDpDisabled');
    expect(disabled).not.toBe(null);
    expect(disabled.length).toBe(32);

    fixture.detectChanges();
    let prevmonth = getElement('.myDpPrevBtn .myDpHeaderBtn');
    expect(prevmonth).not.toBe(null);

    prevmonth.click();

    fixture.detectChanges();
    disabled = getElements('.myDpDisabled');
    expect(disabled).not.toBe(null);
    expect(disabled.length).toBe(42);

    comp.closeCalendar();
  });

  it('options - disableSince', () => {
    comp.setDefaultMonth('2017/01');
    let opts: IMyOptions = {
      disableSince: {year: 2017, month: 1, day: 12},
      disableHeaderButtons: false
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let disabled = getElements('.myDpDisabled');
    expect(disabled).not.toBe(null);
    expect(disabled.length).toBe(25);

    fixture.detectChanges();
    let nextmonth = getElement('.myDpNextBtn .myDpHeaderBtn');
    expect(nextmonth).not.toBe(null);

    nextmonth.click();

    fixture.detectChanges();
    disabled = getElements('.myDpDisabled');
    expect(disabled).not.toBe(null);
    expect(disabled.length).toBe(42);

    comp.closeCalendar();
  });

  it('options - disableDates', () => {
    comp.setDefaultMonth('2017/01');
    let opts: IMyOptions = {
      disableDates: [{year: 2017, month: 1, day: 12}, {year: 2017, month: 1, day: 14}]
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let disabled = getElements('.myDpDisabled');
    expect(disabled).not.toBe(null);
    expect(disabled.length).toBe(2);

    fixture.detectChanges();
    let daycell = getElements('.myDpDaycell');
    expect(daycell).not.toBe(null);
    expect(daycell.length).toBe(42);

    daycell[17].click();

    fixture.detectChanges();
    let selector = getElement('.myDpSelector');
    expect(selector).not.toBe(null);

    fixture.detectChanges();
    let selection = getElement('.myDateInput');
    expect(selection.value).toBe('');

    daycell[18].click();

    fixture.detectChanges();
    selector = getElement('.myDpSelector');
    expect(selector).toBe(null);

    fixture.detectChanges();
    selection = getElement('.myDateInput');
    expect(selection.value).toBe('2017-01-13');

    comp.closeCalendar();
  });

  it('options - disableDateRanges', () => {
    comp.setDefaultMonth('2019/10');
    let opts: IMyOptions = {
      disableDateRanges: [
        {begin: {year: 2019, month: 10, day: 5}, end: {year: 2019, month: 10, day: 7}},
        {begin: {year: 2019, month: 10, day: 10}, end: {year: 2019, month: 10, day: 12}}
      ]
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let disabled = getElements('.myDpDisabled');
    expect(disabled).not.toBe(null);
    expect(disabled.length).toBe(6);

    expect(disabled[0].textContent.trim()).toBe('5');
    expect(disabled[1].textContent.trim()).toBe('6');
    expect(disabled[2].textContent.trim()).toBe('7');

    expect(disabled[3].textContent.trim()).toBe('10');
    expect(disabled[4].textContent.trim()).toBe('11');
    expect(disabled[5].textContent.trim()).toBe('12');

    comp.closeCalendar();
  });

  it('options - disableWeekends', () => {
    comp.setDefaultMonth('2019/10');
    let opts: IMyOptions = {
      firstDayOfWeek: 'mo',
      disableWeekends: true
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let disabled = getElements('.myDpDisabled');
    expect(disabled).not.toBe(null);
    expect(disabled.length).toBe(12);

    let firstDisabled = disabled[0];
    expect(firstDisabled.textContent.trim()).toBe('5');

    let secondDisabled = disabled[1];
    expect(secondDisabled.textContent.trim()).toBe('6');


    let thirdDisabled = disabled[2];
    expect(thirdDisabled.textContent.trim()).toBe('12');

    let fourthDisabled = disabled[3];
    expect(fourthDisabled.textContent.trim()).toBe('13');


    let lastDisabled = disabled[disabled.length - 1];
    expect(lastDisabled.textContent.trim()).toBe('10');

    comp.closeCalendar();
  });

  it('options - disableWeekdays', () => {
    comp.setDefaultMonth('2018/3');
    let opts: IMyOptions = {
      firstDayOfWeek: 'su',
      disableWeekdays: ['mo']
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let disabled = getElements('.myDpDisabled');
    expect(disabled).not.toBe(null);
    expect(disabled.length).toBe(6);

    let firstDisabled = disabled[0];
    expect(firstDisabled.textContent.trim()).toBe('26');

    let secondDisabled = disabled[1];
    expect(secondDisabled.textContent.trim()).toBe('5');


    let thirdDisabled = disabled[2];
    expect(thirdDisabled.textContent.trim()).toBe('12');

    let fourthDisabled = disabled[3];
    expect(fourthDisabled.textContent.trim()).toBe('19');


    let lastDisabled = disabled[4];
    expect(lastDisabled.textContent.trim()).toBe('26');

    comp.closeCalendar();
  });

  it('options - enableDates', () => {
    comp.setDefaultMonth('2017/01');
    let opts: IMyOptions = {
      disableUntil: {year: 2017, month: 1, day: 31},
      enableDates: [{year: 2017, month: 1, day: 14}, {year: 2017, month: 1, day: 15}],
      dateFormat: 'yyyy-mm-dd'
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let disabled = getElements('.myDpDisabled');
    expect(disabled).not.toBe(null);
    expect(disabled.length).toBe(35);

    fixture.detectChanges();
    let daycell = getElements('.myDpDaycell');
    expect(daycell).not.toBe(null);
    expect(daycell.length).toBe(42);

    daycell[19].click();

    fixture.detectChanges();
    let selection = getElement('.myDateInput');
    expect(selection.value).toBe('2017-01-14');

    comp.closeCalendar();
  });

  it('options - markDates', () => {
    comp.setDefaultMonth('2017/01');
    let opts: IMyOptions = {
      markDates: [{dates: [{year: 2017, month: 1, day: 14}, {year: 2017, month: 1, day: 15}], color: 'red'}]
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let markdate = getElements('.myDpMarkDate');
    expect(markdate).not.toBe(null);
    expect(markdate.length).toBe(2);
    expect(markdate[0].style['border-top']).toBe('8px solid red');

    comp.closeCalendar();

    opts.markDates = [];

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    markdate = getElements('.myDpMarkDate');
    expect(markdate).not.toBe(null);
    expect(markdate.length).toBe(0);

    comp.closeCalendar();
  });

  it('options - markWeekends', () => {
    comp.setDefaultMonth('2017/01');
    let opts: IMyOptions = {
      markWeekends: {marked: true, color: 'blue'}
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let markdate = getElements('.myDpMarkDate');
    expect(markdate).not.toBe(null);
    expect(markdate.length).toBe(12);
    expect(markdate[0].style['border-top']).toBe('8px solid blue');

    comp.closeCalendar();

    opts.markWeekends = {marked: false, color: ''};

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    markdate = getElements('.myDpMarkDate');
    expect(markdate).not.toBe(null);
    expect(markdate.length).toBe(0);

    comp.closeCalendar();
  });

  it('options - alignSelectorRight', () => {
    comp.setDefaultMonth('2020/02');
    let opts: IMyOptions = {
      alignSelectorRight: true
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let selector = getElement('.myDpSelector');
    expect(selector).not.toBe(null);
    let posSelector = selector.getBoundingClientRect();

    fixture.detectChanges();
    let input = getElement('.myDateInput');
    expect(input).not.toBe(null);
    let posInput = input.getBoundingClientRect();

    expect(posSelector.right).toBe(posInput.width);

    comp.closeCalendar();
  });

  it('options - openSelectorTopOfInput', () => {
    comp.setDefaultMonth('2020/02');
    let opts: IMyOptions = {
      openSelectorTopOfInput: true,
      appendSelectorToBody: true
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let selector = getElement('.myDpSelector');
    expect(selector).not.toBe(null);
    let posSelector = selector.getBoundingClientRect();
    //expect(posSelector.bottom).toBe(0);

    comp.closeCalendar();
  });

  it('options - closeSelectorOnDateSelect', () => {
    comp.setDefaultMonth('2020/05');
    let opts: IMyOptions = {
      closeSelectorOnDateSelect: false
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let daycell = getElements('.myDpDaycell');
    expect(daycell).not.toBe(null);
    expect(daycell.length).toBe(42);

    daycell[0].click();

    fixture.detectChanges();
    let selector = getElement('.myDpSelector');
    expect(selector).not.toBe(null);

    comp.closeCalendar();

    opts.closeSelectorOnDateSelect = true;

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    daycell = getElements('.myDpDaycell');
    expect(daycell).not.toBe(null);
    expect(daycell.length).toBe(42);

    daycell[0].click();

    fixture.detectChanges();
    selector = getElement('.myDpSelector');
    expect(selector).toBe(null);

    comp.closeCalendar();
  });

  it('options - minYear', () => {
    comp.setDefaultMonth('2018/01');
    let opts: IMyOptions = {
      minYear: 2018
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let prevmonth = getElement('.myDpPrevBtn .myDpHeaderBtn');
    expect(prevmonth).not.toBe(null);

    prevmonth.click();

    fixture.detectChanges();
    let yearlabel = getElement('.myDpMonthYearText .myDpYearBtn');
    expect(yearlabel).not.toBe(null);
    expect(yearlabel.textContent).toBe('2018');

    prevmonth.click();

    fixture.detectChanges();
    yearlabel = getElement('.myDpMonthYearText .myDpYearBtn');
    expect(yearlabel).not.toBe(null);
    expect(yearlabel.textContent).toBe('2018');

    comp.closeCalendar();

    opts.minYear = 2017;

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    prevmonth = getElement('.myDpPrevBtn .myDpHeaderBtn');
    expect(prevmonth).not.toBe(null);

    prevmonth.click();

    fixture.detectChanges();
    yearlabel = getElement('.myDpMonthYearText .myDpYearBtn');
    expect(yearlabel).not.toBe(null);
    expect(yearlabel.textContent).toBe('2017');

    comp.closeCalendar();
  });

  it('options - maxYear', () => {
    comp.setDefaultMonth('2019/12');
    let opts: IMyOptions = {
      maxYear: 2019
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let nextmonth = getElement('.myDpNextBtn .myDpHeaderBtn');
    expect(nextmonth).not.toBe(null);

    nextmonth.click();

    fixture.detectChanges();
    let yearlabel = getElement('.myDpMonthYearText .myDpYearBtn');
    expect(yearlabel).not.toBe(null);
    expect(yearlabel.textContent).toBe('2019');

    nextmonth.click();

    fixture.detectChanges();
    yearlabel = getElement('.myDpMonthYearText .myDpYearBtn');
    expect(yearlabel).not.toBe(null);
    expect(yearlabel.textContent).toBe('2019');

    comp.closeCalendar();

    opts.maxYear = 2020;

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    nextmonth = getElement('.myDpNextBtn .myDpHeaderBtn');
    expect(nextmonth).not.toBe(null);

    nextmonth.click();

    fixture.detectChanges();
    yearlabel = getElement('.myDpMonthYearText .myDpYearBtn');
    expect(yearlabel).not.toBe(null);
    expect(yearlabel.textContent).toBe('2020');

    comp.closeCalendar();
  });

  it('options - showSelectorArrow', () => {
    comp.setDefaultMonth('2019/12');
    let opts: IMyOptions = {
      showSelectorArrow: false
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let selector = getElement('.myDpSelector');
    expect(selector).not.toBe(null);

    fixture.detectChanges();
    let selectorarrow = getElement('.myDpSelectorArrow');
    expect(selectorarrow).toBe(null);

    comp.closeCalendar();

    opts.showSelectorArrow = true;

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    selector = getElement('.myDpSelector');
    expect(selector).not.toBe(null);

    fixture.detectChanges();
    selectorarrow = getElement('.myDpSelectorArrow');
    expect(selectorarrow).not.toBe(null);

    comp.closeCalendar();
  });

  it('options - appendSelectorToBody', () => {
    comp.setDefaultMonth('2019/12');
    let opts: IMyOptions = {
      appendSelectorToBody: true
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let selector = getElement('.myDpSelector');
    expect(selector).not.toBe(null);

    fixture.detectChanges();
    let rootElem = getElement('lib-angular-mydatepicker-calendar');
    expect(rootElem).not.toBe(null);

    let body = rootElem.parentElement.nodeName;
    expect(body.toLowerCase).not.toBe('body');

    comp.closeCalendar();
  });

  it('options - dateRangeDatesDelimiter', () => {
    comp.setDefaultMonth('2019/05');
    let opts: IMyOptions = {
      dateRange: true,
      dateRangeDatesDelimiter: ' * ',
      dateFormat: 'dd.mm.yyyy'
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let selector = getElement('.myDpSelector');
    expect(selector).not.toBe(null);

    comp.openCalendar();
    fixture.detectChanges();
    let date = getElement('.d_0_0');
    expect(date).not.toBe(null);

    fixture.detectChanges();
    date.click();


    fixture.detectChanges();
    date = getElement('.d_0_1');
    expect(date).not.toBe(null);

    fixture.detectChanges();
    date.click();

    fixture.detectChanges();
    let input = getElement('.myDateInput');
    expect(input.value).toBe('29.04.2019 * 30.04.2019');
  });

  it('options - showMonthNumber', () => {
    comp.setDefaultMonth('2019/12');
    let opts: IMyOptions = {
      dateRange: false,
      dateFormat: 'dd.mm.yyyy',
      showMonthNumber: true
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let selector = getElement('.myDpSelector');
    expect(selector).not.toBe(null);

    comp.openCalendar();
    fixture.detectChanges();
    let monthBtn = getElement('.myDpMonthBtn');
    expect(monthBtn).not.toBe(null);

    fixture.detectChanges();
    monthBtn.click();

    fixture.detectChanges();
    let monthsNbrs = getElements('.myDpMonthNbr');
    expect(monthsNbrs).not.toBe(null);
    expect(monthsNbrs.length).toBe(12);
    expect(monthsNbrs[0].textContent.trim()).toBe('1');
    expect(monthsNbrs[3].textContent.trim()).toBe('4');
    expect(monthsNbrs[6].textContent.trim()).toBe('7');
    expect(monthsNbrs[9].textContent.trim()).toBe('10');
    expect(monthsNbrs[11].textContent.trim()).toBe('12');

    fixture.detectChanges();
    let prevMonth = getElement('.myDpIconLeftArrow');
    expect(prevMonth).not.toBe(null);

    fixture.detectChanges();
    prevMonth.click();

    fixture.detectChanges();
    monthsNbrs = getElements('.myDpMonthNbr');
    expect(monthsNbrs).not.toBe(null);
    expect(monthsNbrs.length).toBe(12);
    expect(monthsNbrs[0].textContent.trim()).toBe('1');
    expect(monthsNbrs[3].textContent.trim()).toBe('4');
    expect(monthsNbrs[6].textContent.trim()).toBe('7');
    expect(monthsNbrs[9].textContent.trim()).toBe('10');
    expect(monthsNbrs[11].textContent.trim()).toBe('12');

    comp.closeCalendar();

    opts.showMonthNumber = false;

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    selector = getElement('.myDpSelector');
    expect(selector).not.toBe(null);

    comp.openCalendar();
    fixture.detectChanges();
    monthBtn = getElement('.myDpMonthBtn');
    expect(monthBtn).not.toBe(null);

    fixture.detectChanges();
    monthBtn.click();

    fixture.detectChanges();
    monthsNbrs = getElement('.myDpMonthNbr');
    expect(monthsNbrs).toBe(null);

    comp.closeCalendar();
  });

  it('options - calendarAnimation', () => {
    comp.setDefaultMonth('2019/11');
    let opts: IMyOptions = {
      dateRange: false,
      dateFormat: 'dd.mm.yyyy',
      calendarAnimation: {in: CalAnimation.ScaleTop, out: CalAnimation.Rotate}
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let animationElem = getElement('.myDpAnimationScaleTopIn');
    expect(animationElem).not.toBe(null);

    fixture.detectChanges();
    let date = getElement('.d_0_0');
    expect(date).not.toBe(null);

    fixture.detectChanges();
    date.click();

    fixture.detectChanges();
    animationElem = getElement('.myDpAnimationRotateOut');
    expect(animationElem).not.toBe(null);

    fixture.detectChanges();
    let input = getElement('.myDateInput');
    expect(input.value).toBe('28.10.2019');
  });

  it('options - stylesData', () => {
    comp.setDefaultMonth('2019/10');
    let opts: IMyOptions = {
      stylesData: {selector: '', styles: ''}
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let selector = getElement('.myDpSelector');
    expect(selector).not.toBe(null);

    fixture.detectChanges();
    let leftarrow = getElement('.myDpIconLeftArrow');
    expect(leftarrow).not.toBe(null);
    expect(window.getComputedStyle(leftarrow).color).toBe('rgb(34, 34, 34)');

    fixture.detectChanges();
    let rightarrow = getElement('.myDpIconRightArrow');
    expect(rightarrow).not.toBe(null);
    expect(window.getComputedStyle(rightarrow).color).toBe('rgb(34, 34, 34)');

    comp.closeCalendar();

    opts.stylesData =
      {
        selector: 'dp1',
        styles: `
        .dp1 .myDpIconLeftArrow {
          color: red;
        }
        .dp1 .myDpIconRightArrow {
          color: blue;
        }  
      `
      };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    selector = getElement('.myDpSelector');
    expect(selector).not.toBe(null);

    fixture.detectChanges();
    leftarrow = getElement('.myDpIconLeftArrow');
    expect(leftarrow).not.toBe(null);
    expect(window.getComputedStyle(leftarrow).color).toBe('rgb(255, 0, 0)');

    fixture.detectChanges();
    rightarrow = getElement('.myDpIconRightArrow');
    expect(rightarrow).not.toBe(null);
    expect(window.getComputedStyle(rightarrow).color).toBe('rgb(0, 0, 255)');

    comp.closeCalendar();
  });

  it('options - ariaLabelPrevMonth', () => {
    comp.setDefaultMonth('2019/10');
    let opts: IMyOptions = {
      ariaLabelPrevMonth: 'aria-label prev month'
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let prevmonth = getElement('.myDpPrevBtn .myDpHeaderBtn');
    expect(prevmonth).not.toBe(null);
    expect(prevmonth.attributes['aria-label'].textContent).toBe(opts.ariaLabelPrevMonth);

    comp.closeCalendar();
  });

  it('options - ariaLabelNextMonth', () => {
    comp.setDefaultMonth('2019/10');
    let opts: IMyOptions = {
      ariaLabelNextMonth: 'aria-label next month'
    };

    comp.parseOptions(opts);
    comp.openCalendar();

    fixture.detectChanges();
    let nextmonth = getElement('.myDpNextBtn .myDpHeaderBtn');
    expect(nextmonth).not.toBe(null);
    expect(nextmonth.attributes['aria-label'].textContent).toBe(opts.ariaLabelNextMonth);

    comp.closeCalendar();
  });

  it('locale attribute', () => {
    comp.setLocale('ja');
    comp.setDefaultMonth('2019/05');

    comp.openCalendar();

    fixture.detectChanges();
    let selector = getElement('.myDpSelector');
    expect(selector).not.toBe(null);

    fixture.detectChanges();
    let titles = getElements('.myDpWeekDayTitle');
    expect(titles).not.toBe(null);
    expect(titles.length).toBe(7);

    expect(titles[0].textContent.trim()).toBe('月');
    expect(titles[6].textContent.trim()).toBe('日');

    fixture.detectChanges();
    let highlight = getElements('.myDpHighlight');
    expect(highlight).not.toBe(null);
    expect(highlight.length).toBe(0);

    fixture.detectChanges();
    let monthlabel = getElement('.myDpMonthYearText .myDpMonthBtn');
    expect(monthlabel).not.toBe(null);

    monthlabel.click();

    fixture.detectChanges();
    let monthvalue = getElements('.myDpMonthValue');
    expect(monthvalue).not.toBe(null);
    expect(monthvalue.length).toBe(12);

    expect(monthvalue[0].textContent.trim()).toBe('１月');
    expect(monthvalue[11].textContent.trim()).toBe('１２月');

    fixture.detectChanges();
    let firstcell = getElement('.m_0_0');
    expect(firstcell).not.toBe(null);
    firstcell.click();

    fixture.detectChanges();
    firstcell = getElement('.d_0_0');
    expect(firstcell).not.toBe(null);
    firstcell.click();

    fixture.detectChanges();
    let input = getElement('.myDateInput');
    expect(input.value).toBe('2018.12.31');
  });

  it('defaultMonth attribute', () => {
    comp.setDefaultMonth('2016/02');
    comp.openCalendar();

    fixture.detectChanges();
    let monthlabel = getElement('.myDpMonthYearText .myDpMonthBtn');
    expect(monthlabel).not.toBe(null);
    expect(monthlabel.textContent.trim()).toBe('Feb');

    fixture.detectChanges();
    let yearlabel = getElement('.myDpMonthYearText .myDpYearBtn');
    expect(yearlabel).not.toBe(null);
    expect(yearlabel.textContent.trim()).toBe('2016');

    comp.closeCalendar();


    comp.setDefaultMonth('2019/08');
    comp.openCalendar();

    fixture.detectChanges();
    monthlabel = getElement('.myDpMonthYearText .myDpMonthBtn');
    expect(monthlabel).not.toBe(null);
    expect(monthlabel.textContent.trim()).toBe('Aug');

    fixture.detectChanges();
    yearlabel = getElement('.myDpMonthYearText .myDpYearBtn');
    expect(yearlabel).not.toBe(null);
    expect(yearlabel.textContent.trim()).toBe('2019');

    comp.closeCalendar();
  });
});
