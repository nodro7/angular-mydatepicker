# angular-mydatepicker

**Angular datepicker and date range picker**

[![npm](https://img.shields.io/npm/v/angular-mydatepicker.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/angular-mydatepicker)
[![npm](https://img.shields.io/npm/dm/angular-mydatepicker.svg)](https://www.npmjs.com/package/angular-mydatepicker)

## Browser support (tested)

| Chrome | Firefox | Edge | IE11 | Safari | iOS Safari |
| :------------- | :------------- | :----| :---------- | :----| :---------- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## Description

Highly configurable Angular datepicker and date range picker. No dependencies to other libraries.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8. The library is tested with Angular version 7.2.0.

Source code of the datepicker is in the [projects/angular-mydatepicker/src](https://github.com/kekeh/angular-mydatepicker/tree/master/projects/angular-mydatepicker/src) folder.

Online demo is [here](http://kekeh.github.io/angular-mydatepicker)

## Installation

To install this component to an external project, follow the procedure:

1. __npm install angular-mydatepicker --save__

2. Add __AngularMyDatePickerModule__ import to your __@NgModule__ as follows
    ```ts
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { AngularMyDatePickerModule } from 'angular-mydatepicker';
    
    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule, ReactiveFormsModule, FormsModule, AngularMyDatePickerModule.forRoot()
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```
    
## Usage

Use one of the following two options. The examples below use the [bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/) and the [font-awesome](https://fontawesome.com/), but you can use datepicker also without them.

### 1. ngModel binding

In this option the ngModel binding is used.

To use __ngModel__ define the application class as follows:

```ts
import {IAngularMyDpOptions, IMyDateModel} from 'angular-mydatepicker';
// other imports are here...

export class MyTestApp {
  private myOptions: IAngularMyDpOptions = {
    dateRange: false,      // If false = date picker, if true = date range picker
    dateFormat: 'dd.mm.yyyy'
    // other options are here...
  };

  private model: IMyDateModel = null;

  constructor() { }

  // optional date changed callback
  onDateChanged(event: IMyDateModel): void {
    // date selected
  }
}
```

If you are using bootstrap 4 add the following snippet inside your template:
* example adds __bootstrap__ input group and __font-awesome__ icons
```html
<div class="input-group">
  <input class="form-control" placeholder="Select a date" angular-mydatepicker name="mydate"
         [(ngModel)]="model" [options]="myOptions" #dp="angular-mydatepicker" (dateChanged)="onDateChanged($event)"/>
  <div class="input-group-append">
    <button type="button" class="btn btn-secondary" (click)="dp.clearDate()">
      <i class="fa fa-close"></i>
    </button>
  </div>
  <div class="input-group-append">
    <button type="button" class="btn btn-secondary" (click)="dp.toggleCalendar()">
      <i class="fa fa-calendar-o"></i>
    </button>
  </div>
</div>
```

There are two ways to set an initial date to the model.

  * Initialize with the __IMyDate__ object:
  ```ts
  // Initialized to specific date (05.05.2019)
  model: IMyDateModel = {isRange: false, singleDate: {date: { year: 2019, month: 5, day: 5 }}};
  ```

  * Initialize with the __javascript date__ object:
  ```ts
  // Initialized to today
  model: IMyDateModel = {isRange: false, singleDate: {jsDate: new Date()}};
  ```
  
### 2. Reactive forms

In this option the value accessor of reactive forms is used. [Here](https://github.com/kekeh/angular-mydatepicker/tree/master/example/app/date-picker-reactive-forms)
is an example application. It shows how to use the __formControlName__.

To use __reactive forms__ define the application class as follows:

```ts
import {IAngularMyDpOptions, IMyDateModel} from 'angular-mydatepicker';
// other imports are here...

export class MyTestApp implements OnInit {

  myOptions: IAngularMyDpOptions = {
    dateRange: false,      // If false = date picker, if true = date range picker
    dateFormat: 'dd.mm.yyyy'
    // other options...
  };

  private myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Initialize to today date
    let model: IMyDateModel = {isRange: false, singleDate: {jsDate: new Date()}, dateRange: null};
    this.myForm = this.formBuilder.group({
      myDate: [model, Validators.required]
      // other controls are here...
    });
  }

  setDate(): void {
    // Set today date using the patchValue function
    let model: IMyDateModel = {isRange: false, singleDate: {jsDate: new Date()}, dateRange: null};
    this.myForm.patchValue({myDate: model);
  }

  clearDate(): void {
    // Clear the date using the patchValue function
    this.myForm.patchValue({myDate: null});
  }
}
```

Add the following snippet inside your template:
* example adds __bootstrap__ input group and __font-awesome__ icons
```html
<form [formGroup]="myForm" (ngSubmit)="onSubmit()" novalidate>
    <div class="input-group">
        <input class="form-control" placeholder="Select a date" angular-mydatepicker name="myDate" 
          formControlName="myDate"[options]="myOptions" #dp="angular-mydatepicker"/>
        <div class="input-group-append">
          <button type="button" class="btn btn-secondary" (click)="dp.clearDate()">
            <i class="fa fa-close"></i>
          </button>
        </div>
        <div class="input-group-append">
          <button type="button" class="btn btn-secondary" (click)="dp.toggleCalendar()">
            <i class="fa fa-calendar-o"></i>
          </button>
        </div>
    </div>

    <div class="btnGroup">
        <button class="button" type="submit" [disabled]="myForm.controls.myDate.errors">Submit</button>
        <p class="error" *ngIf="myForm.controls.myDate.errors">Date is required!</p>
    </div>
</form>
```

## Attributes

### options attribute

Value of the __options__ attribute is a type of [IAngularMyDpOptions](https://github.com/kekeh/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-options.interface.ts). It can contain the following properties.

| Option         | Default        | Type | Description |
| :------------- | :------------- | :----| :---------- |
| __dateRange__   | false | boolean | Date picker mode (date picker or date range picker). |
| __inline__   | false | boolean | Normal mode or inline mode. If __inline__ mode set the input box __type__ attribute to __hidden__ and this option to __true__. [Here](https://github.com/kekeh/angular-mydatepicker/blob/master/example/app/date-picker-inline/date-picker-inline.html#L10) is an example.|
| __dayLabels__     | {su: 'Sun', mo: 'Mon', tu: 'Tue', we: 'Wed', th: 'Thu', fr: 'Fri', sa: 'Sat'} | [IMyDayLabels](https://github.com/kekeh/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-day-labels.interface.ts) | Day labels visible on the selector. |
| __monthLabels__   | { 1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec' } | [IMyMonthLabels](https://github.com/kekeh/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-month-labels.interface.ts) | Month labels visible on the selector. |
| __dateFormat__    | yyyy-mm-dd | string |  Date format on the selection area and the callback. For example: d.m.yyyy, dd.mm.yyyy, yyyy-m-d, yyyy-mm-dd, d mmm yyyy, dd mmm yyyy (d = Day not leading zero, dd = Day with leading zero, m = Month not leading zero, mm = Month with leading zero, mmm = Month as a text, yyyy = Year four digit) |
| __firstDayOfWeek__   | mo | string | First day of week on calendar. One of the following: mo, tu, we, th, fr, sa, su |
| __sunHighlight__   | true | boolean | Sunday red colored on calendar. |
| __satHighlight__   | false | boolean | Saturday red colored on calendar. |
| __highlightDates__   | no default value | Array<[IMyDate](https://github.com/kekeh/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-date.interface.ts)> | Dates red colored on calendar. Value of year or month can be zero. If it is zero it affects all years/months. For example: [{year: 2019, month: 11, day: 14}, {year: 2019, month: 1, day: 15}] |
| __markCurrentDay__   | true | boolean | Is current day (today) marked (underline) on calendar. |
| __markCurrentMonth__   | true | boolean | Is current month marked (underline) on calendar. Can be used if __monthSelector = true__. |
| __markCurrentYear__   | true | boolean | Is current year marked (underline) on calendar. Can be used if __yearSelector = true__. |
| __monthSelector__  | true | boolean | If __true__ and if month label is selected opens a selector of months. |
| __yearSelector__  | true | boolean | If __true__ and if year label is selected opens a selector of years. |
| __disableHeaderButtons__   | true | boolean | Prevent to change the calendar view with header buttons if previous or next month are fully disabled by the __disableUntil__ or the __disableSince__ options. |
| __showWeekNumbers__   | false | boolean | Are week numbers visible or not on calendar. Can be used if __firstDayOfWeek = mo__. |
| __selectorHeight__   | 232px | string | Selector height in pixels. |
| __selectorWidth__   | 252px | string | Selector width in pixels. |
| __disableUntil__   | no default value | [IMyDate](https://github.com/kekeh/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-date.interface.ts) | Disable dates backward starting from the given date. For example: {year: 2019, month: 6, day: 26}. To reset the existing __disableUntil__ value set: {year: 0, month: 0, day: 0} |
| __disableSince__   | no default value | [IMyDate](https://github.com/kekeh/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-date.interface.ts) | Disable dates forward starting from the given date. For example: {year: 2019, month: 7, day: 22}. To reset the existing __disableSince__ value set: {year: 0, month: 0, day: 0} |
| __disableDates__   | no default value | Array<[IMyDate](https://github.com/kekeh/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-date.interface.ts)> | Disable single dates one by one. Array of disabled dates. For example: [{year: 2019, month: 11, day: 14}, {year: 2019, month: 1, day: 15}]. Value of year or month can be zero. If it is zero it affects all years/months. For example disable first day of every month: [{year: 0, month: 0, day: 1}]. To reset existing __disableDates__ value set empty array to it. |
| __disableDateRanges__   | no default value | Array<[IMyDateRange](https://github.com/kekeh/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-date-range.interface.ts)> | Disable date ranges. For example: [{begin: {year: 2019, month: 11, day: 14}, end: {year: 2019, month: 11, day: 20}}]. To reset existing value of __disableDateRanges__ set empty array to it. |
| __disableWeekends__   | false | boolean | Disable weekends. (Saturday and Sunday). |
| __disableWeekdays__   | no default value | Array< string > | Disable weekdays. Array of weekdays to disable. Weekdays are same strings as the __firstDayOfWeek__ option. For example: ['tu', 'we'] which disables Tuesdays and Wednesdays. |
| __enableDates__   | no default value | Array<[IMyDate](https://github.com/kekeh/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-date.interface.ts)> | Enable single dates one by one if the date is disabled. For example if you disable the date range and want to enable some dates in range. Array of enabled days. For example: [{year: 2019, month: 11, day: 14}, {year: 2019, month: 1, day: 15}]. Value of year or month can be zero. If it is zero it affects all years/months. For example enable first day of every month: [{year: 0, month: 0, day: 1}]. To reset existing __enableDates__ value set empty array to it. |
| __markDates__   | no default value | Array<[IMyMarkedDates](https://github.com/kekeh/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-marked-dates.interface.ts)> | Mark dates for different colors. For example: [{dates: [{year: 2019, month: 11, day: 14}, {year: 2019, month: 12, day: 16}], color: '#004198'}, {dates: [{year: 2018, month: 10, day: 1}, {year: 2018, month: 11, day: 4}], color: 'green'}]. Value of year or month can be zero. If it is zero it affects all years/months. To reset existing value of __markDates__ set empty array to it. |
| __markWeekends__   | no default value | [IMyMarkedDate](https://github.com/kekeh/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-marked-date.interface.ts) | Mark weekends (Saturday and Sunday). For example: {marked: true, color: 'red'}. Value of color can be any CSS color code. To reset existing value of __markWeekends__ set: {marked: false, color: ''} |
| __alignSelectorRight__   | false | boolean | Align selector right. |
| __openSelectorTopOfInput__   | false | boolean | Open selector top of input field. |
| __closeSelectorOnDateSelect__ | true | boolean | Is selector closed or not on a date select. |
| __closeSelectorOnDocumentClick__ | true | boolean | Is selector closed or not on a document click. |
| __minYear__   | 1000 | number | Minimum allowed year in calendar. Cannot be less than 1000. |
| __maxYear__   | 9999 | number | Maximum allowed year in calendar. Cannot be more than 9999. |
| __showSelectorArrow__   | true | boolean | Is selector (calendar) arrow shown or not. |
| __appendSelectorToBody__   | false | boolean | Is selector (calendar) appended to body element or not. |
| __focusInputOnDateSelect__   | true | boolean | Is the input box focused after a date select. |
| __moveFocusByArrowKeys__   | true | boolean | Is focus moved or not on the calendar by arrow keys. |
| __dateRangeDatesDelimiter__   | " - " | string | The delimiter of dates in a date range. |
| __inputFieldValidation__   | true | boolean | Input field validation enabled or not after __blur__ event of input field. |
| __ariaLabelPrevMonth__   | Previous Month | string | Aria label text of previous month button. |
| __ariaLabelNextMonth__   | Next Month | string | Aria label text of next month button. |

### locale attribute

An ISO 639-1 language code can be provided as shorthand for the following options (dayLabels, monthLabels, dateFormat, firstDayOfWeek and sunHighlight).
Currently supported languages: __en__, __fr__, __fr-ch__, __ja__, __fi__, __es__, __hu__, __sv__, __nl__, __ru__, __uk__, __no__, __tr__,
__pt-br__, __de__, __de-ch__, __it__, __it-ch__, __pl__, __my__, __sk__, __sl__, __zh-cn__, __he__, __ro__, __ca__, __id__, __en-au__, __am-et__, __cs__, __el__, __kk__,
__th__, __ko-kr__, __da__, __lt__, __vi__, __bn__, __bg__, __hr__, __ar__,  __is__, __tw__, __lv__ and __et__.

The __locale__ options can be overridden by __options__ attribute.

* new locale data can be added to [this](https://github.com/kekeh/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/services/angular-mydatepicker.locale.service.ts)
file. If you want to add a new locale create a pull request.

### defaultMonth attribute

Visible month/year when calendar is opened:
* If date is already selected => calendar opens to the month and year of the selected date
  * In date range mode => calendar opens to the month and year of the selected begin date
* If the __defaultMonth__ is set => calendar opens to the month and year specified in the the ___defaultMonth_ attribute
* If none of above => calendar opens to the month and year of current date

Value of the __defaultMonth__ attribute can be:
  * [IMyDefaultMonth](https://github.com/kekeh/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-default-month.interface.ts) object. The value of __defMonth__ property can be a string which contain year number and month number separated by delimiter. The delimiter can be any special character. For example: __08-2016__ or __08/2016__.
  * a string which contain year number and month number separated by delimiter. The delimiter can be any special character. For example: __08-2016__ or __08/2016__.

## Functions

You can can call functions of the directive. Define local variable to input field like below:
```html
<input angular-mydatepicker name="mydate" [(ngModel)]="model" [options]="myOptions" #dp="angular-mydatepicker"/>
```
The __#dp="angular-mydatepicker"__ defines the local variable named __dp__. You can use it to call functions of the directive
for example __(click)="dp.openCalendar()"__.

### openCalendar function

Opens the calendar. For example:
```html
<button type="button" (click)="dp.openCalendar()">Open</button>
```

### closeCalendar function

Closes the calendar. For example:
```html
<button type="button" (click)="dp.closeCalendar()">Close</button>
```

### toggleCalendar function

Closes the calendar if it is open and opens the calendar if it is closed. For example:
```html
<button type="button" (click)="dp.toggleCalendar()">Toggle</button>
```

### clearDate function

Clears the date from the input box and model. For example:
```html
<button type="button" (click)="dp.clearDate()">Clear</button>
```

### isDateValid function

Returns true if the date in the input box is valid. Otherwise it returns false. This function also calls the __inputFieldChanged__ callback.
```html
<input angular-mydatepicker [(ngModel)]="model" [options]="myDatePickerOptions" #dp="angular-mydatepicker"/>
```

```ts
@ViewChild('dp') mdpd: AngularMyDatePickerDirective;

checkDateValidity(): void {
    let valid: boolean = this.mdpd.isDateValid();
    console.log('Valid date in the input box: ', valid);
}
```

## Callbacks

### dateChanged callback
  * called when a __single date__ or __date range__ is selected, cleared or input field typing is valid
  * event parameter:
    * __event.isRange__: __true__ if a date range is selected, __false__ if a single date is selected
    * __event.singleDate__: event data if __isRange__ is __false__, if __isRange__ is __true__ this property is __null__
      * __date__: IMyDate object for example: { day: 22, month: 11, year: 2019 }
      * __jsDate__: Javascript Date object
      * __formatted__: Date string in the same format as the __dateFormat__ option is. For example '2016-11-22'
      * __epoc__: Epoc time stamp. For example: 1479765600
    * __event.dateRange__: event data if __isRange__ is __true__, if __isRange__ is __false__ this property is __null__
      * __beginDate__: IMyDate object for example: { day: 22, month: 11, year: 2019 }
      * __beginJsDate__: Javascript Date object
      * __beginEpoc__: Epoc time stamp for example: 1479765600
      * __endDate__: IMyDate object for example: { day: 22, month: 11, year: 2019 }
      * __endJsDate__: Javascript Date object
      * __endEpoc__: Epoc time stamp. For example: 1479765600
      * __formatted__: Date range string. The date is in the same format as the __dateFormat__ option is. For example '2019-11-22 - 2019-11-24'
  
  * Type of event parameter is [IMyDateModel](https://github.com/kekeh/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-date-model.interface.ts)

  * Example of the __dateChanged__ callback:
  ```html
  <input angular-mydatepicker [(ngModel)]="model" [options]="myDatePickerOptions" #dp="angular-mydatepicker" (dateChanged)="onDateChanged($event)"/>
  ```
  
  ```js
  onDateChanged(event: IMyDateModel) {
    console.log('onDateChanged(): ', event);
  }
  ```

### inputFieldChanged callback
  * called when the value change in the input field, date or date range is selected or date is cleared.
  * event parameter:
    * __event.value__: Value of the input field. For example: '2018-11-22'
    * __event.dateFormat__: Date format. For example 'yyyy-mm-dd'
    * __event.valid__: Boolean value indicating is the value of input field valid or not. For example: true
  * Type of event parameter is [IMyInputFieldChanged](https://github.com/kekeh/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-input-field-changed.interface.ts)

  * Example of the input field changed callback:
  ```html
  <input angular-mydatepicker [(ngModel)]="model" [options]="myDatePickerOptions" #dp="angular-mydatepicker" (inputFieldChanged)="onInputFieldChanged($event)"/>
  ```
  
  ```js
  onInputFieldChanged(event: IMyInputFieldChanged) {
    console.log('onInputFieldChanged(): Value: ', event);
  }
  ```

### calendarViewChanged callback
  * called when the calendar view change
  * event parameter:
    * __event.year__: Year number in calendar. For example: 2016
    * __event.month__: Month number in calendar. For example: 11
    * __event.first__: First day of selected month and year. Type of [IMyWeekday](https://github.com/kekeh/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-weekday.interface.ts). For example: {number: 1, weekday: "tu"}
    * __event.last__: Last day of selected month and year. Type of [IMyWeekday](https://github.com/kekeh/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-weekday.interface.ts). For example: {number: 30, weekday: "we"}
  * event parameter type is [IMyCalendarViewChanged](https://github.com/kekeh/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-calendar-view-changed.interface.ts)
  * values of the weekday property are same as values of the __firstDayOfWeek__ option

  * Example of the calendar view changed callback:
  ```html
  <input angular-mydatepicker [(ngModel)]="model" [options]="myDatePickerOptions" #dp="angular-mydatepicker" (calendarViewChanged)="onCalendarViewChanged($event)"/>
  ```
  
  ```js
  onCalendarViewChanged(event: IMyCalendarViewChanged) {
    console.log('onCalendarViewChanged(): Year: ', event);
  }
  ```

### calendarToggle callback
  * called when the calendar is opened or closed
    * __event__: number from 1 to 4 indicating the reason of the event
      * __1__ = calendar opened
      * __2__ = calendar closed by date select
      * __3__ = calendar closed by calendar button
      * __4__ = calendar closed by outside click (document click)
      * __5__ = calendar closed by ESC key

  * Example of the calendar toggle callback:
  ```html
   <input angular-mydatepicker [(ngModel)]="model" [options]="myDatePickerOptions" #dp="angular-mydatepicker" (calendarToggle)="onCalendarToggle($event)"/>
  ```
  
  ```js
  onCalendarToggle(event: number): void {
      console.log('onCalendarClosed(): Reason: ', event);
  }
  ```
### rangeDateSelection callback
  * called in date range mode when a date is selected
    * event parameter:
      * __event.isBegin__: Is begin date. __true__ if begin date, __false__ if end date
      * __event.date__: Selected date (IMyDate)
      * __event.dateFormat__: Date format given in options. For example 'yyyy-mm-dd'
      * __event.formatted__: Selected date (format based on __dateFormat__ option). For example '2019-05-10'
      * __event.epoc__: Epoc time stamp. For example: 1557435600

  * Example of the range date selection callback:
  ```html
   <input angular-mydatepicker [(ngModel)]="model" [options]="myDatePickerOptions" #dp="angular-mydatepicker" (rangeDateSelection)="onDateRangeSelection($event)"/>
  ```
  
  ```js
  onDateRangeSelection(event: IMyRangeDateSelection): void {
    console.log('onDateRangeSelection(): event: ', event);
  }
  ```
  
## Development of this component

* At first fork and clone this repo:
  1. __git clone https://github.com/kekeh/angular-mydatepicker.git__
  2. __cd angular-mydatepicker__

* Install tools (version >= 7.3.8):
  1. __npm install --g @angular/cli__

* Install dependencies:
  1. __npm install__
  
* Run sample application:
  1. __ng serve__
  2. Navigate to __http://localhost:4200__
  
* Build datepicker library:
  1. __npm run build-lib__ (dist/angular-mydatepicker folder will be created under the root folder)

* Build a local npm installation package:
  1. __npm run build-lib__
  2. __cd dist/angular-mydatepicker__
  3. __npm pack__
    * local installation package is created to the __dist/angular-mydatepicker__ folder. For example: __angular-mydatepicker-0.0.1.tgz__

* Install local npm package to your project:
  1. __npm install path_to_dist/angular-mydatepicker-0.0.1.tgz__

## Demo
Online demo is [here](http://kekeh.github.io/angular-mydatepicker)

## License
* License: [MIT](https://github.com/kekeh/angular-mydatepicker/blob/master/LICENSE)

## Author
* Author: kekeh

## Keywords
* datepicker
* date range picker
* Angular
