import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {DebugElement, Component, ViewChild} from '@angular/core';
import {AngularMyDatePickerModule} from '../angular-mydatepicker.module';
import {AngularMyDatePickerDirective} from '../angular-mydatepicker.input';
import {IMyOptions} from '../interfaces/my-options.interface';
import {IMyDateModel} from '../interfaces/my-date-model.interface';

let comp: AngularMyDatepickerTestComponent;
let fixture: ComponentFixture<AngularMyDatepickerTestComponent>;
let de: DebugElement;
let el: HTMLElement;

function getDefaultDateString(date: Date): string {
  return date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
}

function getElement(id: string): any {
  return document.body.querySelector(id);
}

function getElements(id: string): any {
  return document.body.querySelectorAll(id);
}

@Component({
  template: '<input style="width: 400px;" class="myDateInput" type="{{inputType}}" id="myDateInput" name="mydate" [(ngModel)]="model" angular-mydatepicker #dp="angular-mydatepicker" />'
})
class AngularMyDatepickerTestComponent {
  @ViewChild('dp') vcDp: AngularMyDatePickerDirective;

  inputType: string = 'text';
  model: IMyDateModel = null;

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

  setDefaultMonth(defMonth: string): void {
    this.vcDp.defaultMonth = defMonth;
  }

  setInputType(type: string): void {
    this.inputType = type;
  }

  initDateModel(model: IMyDateModel): void {
    this.model = model;
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

  it('init date model', () => {
    let opts: IMyOptions = {
      dateRange: false,
      dateFormat: 'd.m.yyyy'
    };

    comp.parseOptions(opts);

    fixture.detectChanges();
    comp.initDateModel({isRange: false, singleDate: {date: { year: 2019, month: 5, day: 21 }}});

    // TODO: validate

    fixture.detectChanges();
    comp.initDateModel(null);

    // TODO: validate

    opts.dateRange = true;

    fixture.detectChanges();
    comp.initDateModel({isRange: true, dateRange: {beginDate: {year: 2019, month: 5, day: 24}, endDate: {year: 2019, month: 6, day: 10}}});

    // TODO: validate
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
});
