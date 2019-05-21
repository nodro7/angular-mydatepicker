import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {DebugElement, Component, ViewChild} from '@angular/core';
import {AngularMyDatePickerModule} from '../angular-mydatepicker.module';
import {AngularMyDatePickerDirective} from '../angular-mydatepicker.input';
import {IMyOptions} from '../interfaces/my-options.interface';

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
  template: '<input style="width: 400px;" class="myDateInput" id="myDateInput" angular-mydatepicker #dp="angular-mydatepicker" name="mydate"/>'
})
class AngularMyDatepickerTestComponent {
  @ViewChild('dp') vcDp: AngularMyDatePickerDirective;

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


});
