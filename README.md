<h1 align="center">angular-mydatepicker</h1>

<h2 align="center">Angular datepicker and date range picker</h2>

<p align="center">
  <a href="https://nodro7.github.io/angular-mydatepicker/">
  https://nodro7.github.io/angular-mydatepicker/
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@nodro7/angular-mydatepicker">
    <img src="https://img.shields.io/npm/v/@nodro7/angular-mydatepicker?logo=npm&logoColor=green&style=for-the-badge" alt="NPM Package" />
  </a>&nbsp;

  <a href="https://www.npmjs.com/package/@nodro7/angular-mydatepicker">
    <img src="https://img.shields.io/npm/dm/@nodro7/angular-mydatepicker?logo=npm&style=for-the-badge" alt="NPM Downloads" />
  </a>&nbsp;

  <a href="https://app.codecov.io/gh/nodro7/angular-mydatepicker">
    <img src="https://img.shields.io/codecov/c/gh/nodro7/angular-mydatepicker?logo=codecov&style=for-the-badge" alt="Codecov Coverage" />
  </a>&nbsp;

  <a href="https://github.com/nodro7/angular-mydatepicker/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/nodro7/angular-mydatepicker/npm-publish.yml?logo=github&style=for-the-badge" alt="Build Status" />
  </a>&nbsp;

  <a href="https://github.com/nodro7/angular-mydatepicker/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/nodro7/angular-mydatepicker?&style=for-the-badge" alt="License" />
  </a>
</p>

---

**Note:** This repository was originally forked from `kekeh/angular-mydatepicker` but the original repository had not been maintained for a year and was then deleted without any notice :confused:. Hence this detached fork.

This updated version uses `"compilationMode": "partial"` for use in Ivy-enabled applications.

If you need a version compatible with an older (View Engine) Angular application, the original package can be found [here.](https://www.npmjs.com/package/angular-mydatepicker)

---
## Install

```console
npm install @nodro7/angular-mydatepicker
```
---

## Changelog

CHANGELOG.md has been deprecated, for recent changes see [GitHub releases](https://github.com/nodro7/angular-mydatepicker/releases).

---

## Browser support (tested)

| Chrome | Firefox | Edge | IE11 | Safari | iOS Safari |
| :------------- | :------------- | :----| :---------- | :----| :---------- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

---

## Description

Highly configurable Angular datepicker and date range picker.

Basic idea to create this library was to make it as configurable as possible. The library is implemented as a directive. It is done this way, because then there is more choices to configure it.

### Main features

* no dependencies to other libraries
* currently localized to 47 [languages](https://github.com/nodro7/angular-mydatepicker#locale-attribute)
* datepicker
* date range picker
* popup mode
* inline mode
* supports keyboard
* supports RTL
* animation of calendar (open/close)
* awesome configuration possibilities
  * easily set styles to the component which are in line with your page theme
    * calendar
    * input box and input box controls
  * 50 [options](https://github.com/nodro7/angular-mydatepicker#options-attribute)
    * change value of any option dynamically
* well tested
  * coverage [report](https://codecov.io/gh/nodro7/angular-mydatepicker)
  * most of the code is from existing libraries which are widely used

## Installation

To install this component to an external project, follow the procedure:

1. `npm install @nodro7/angular-mydatepicker`

2. Add `AngularMyDatePickerModule` import to your `@NgModule` as follows:

    ```ts
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { AngularMyDatePickerModule } from '@nodro7/angular-mydatepicker';

    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        AngularMyDatePickerModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```

## Usage

Use one of the following two options.

### 1. ngModel binding

In this option the **ngModel** binding is used.

* [ngModel example application](https://github.com/nodro7/angular-mydatepicker/tree/master/example/app/date-picker-ngmodel)

There are two ways to initialize date or date range to the model.

* single date mode
* date range mode

### 2. Reactive forms

In this option the value accessor of reactive forms is used.

* [reactive example application](https://github.com/nodro7/angular-mydatepicker/tree/master/example/app/date-picker-reactive-forms)

## Attributes

### options attribute

The `options` attribute is a type of [IAngularMyDpOptions](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-options.interface.ts). It has the following optional properties.

| Option         | Default        | Type | Description |
| :------------- | :------------- | :----| :---------- |
| **dateRange**   | false | boolean | Date picker mode (date picker or date range picker). |
| **inline**   | false | boolean | Normal mode or inline mode. If **inline** mode is used, set the input box **type** attribute to **hidden** and this option to **true**. [Here](https://github.com/nodro7/angular-mydatepicker/blob/master/example/app/date-picker-inline/date-picker-inline.html#L10) is an example.|
| **dayLabels**     | {su: 'Sun', mo: 'Mon', tu: 'Tue', we: 'Wed', th: 'Thu', fr: 'Fri', sa: 'Sat'} | [IMyDayLabels](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-day-labels.interface.ts) | Day labels visible on the selector. |
| **monthLabels**   | { 1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec' } | [IMyMonthLabels](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-month-labels.interface.ts) | Month labels visible on the selector. |
| **dateFormat**    | yyyy-mm-dd | string |  Date format on the selection area and the callback. For example: **d.m.yyyy**, **dd.mm.yyyy**, **yyyy-m-d**, **yyyy-mm-dd**, **d mmm yyyy**, **dd mmm yyyy**, **d## of mmm yyyy** (d = Day not leading zero, dd = Day with leading zero, d## = Ordinal dates for example 3rd, m = Month not leading zero, mm = Month with leading zero, mmm = Month as a text, yyyy = Year four digit) |
| **defaultView**    | date | [DefaultView](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/enums/default-view.enum.ts) | Calendar opens to this view (date, month or year).|
| **firstDayOfWeek**   | mo | string | First day of week on calendar. One of the following: **mo, tu, we, th, fr, sa, su** |
| **sunHighlight**   | true | boolean | Sunday red colored on calendar. |
| **satHighlight**   | false | boolean | Saturday red colored on calendar. |
| **highlightDates**   | no default value | Array<[IMyDate](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-date.interface.ts)> | Dates red colored on calendar. Value of year or month can be zero. If it is zero it affects all years/months. For example: **[{year: 2019, month: 11, day: 14}, {year: 2019, month: 1, day: 15}]** |
| **markCurrentDay**   | true | boolean | Is current day (today) marked (underline) on calendar. |
| **markCurrentMonth**   | true | boolean | Is current month marked (underline) on calendar. Can be used if **monthSelector = true**. |
| **markCurrentYear**   | true | boolean | Is current year marked (underline) on calendar. Can be used if **yearSelector = true**. |
| **monthSelector**  | true | boolean | If **true** and if month label is selected opens a selector of months. |
| **yearSelector**  | true | boolean | If **true** and if year label is selected opens a selector of years. |
| **disableHeaderButtons**   | true | boolean | Prevent to change the calendar view with header buttons if previous or next month are fully disabled by the **disableUntil** or the **disableSince** options. |
| **showWeekNumbers**   | false | boolean | Are week numbers visible or not on calendar. Can be used if **firstDayOfWeek = mo**. |
| **selectorHeight**   | 266px | string | Selector height. |
| **selectorWidth**   | 266px | string | Selector width. |
| **disableUntil**   | no default value | [IMyDate](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-date.interface.ts) | Disable dates backward starting from the given date. For example: **{year: 2019, month: 6, day: 26}**. To reset the existing **disableUntil** value set: **{year: 0, month: 0, day: 0}** |
| **disableSince**   | no default value | [IMyDate](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-date.interface.ts) | Disable dates forward starting from the given date. For example: **{year: 2019, month: 7, day: 22}**. To reset the existing **disableSince** value set: **{year: 0, month: 0, day: 0}** |
| **disableDates**   | no default value | Array<[IMyDate](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-date.interface.ts)> <br/> or <br/> Array<[IMyDisabledDates](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-disabled-dates.interface.ts)> | Disable dates one by one. Array of disabled dates. For example: **[{year: 2019, month: 11, day: 14}, {year: 2019, month: 1, day: 15}]**. Or it is possible to disable dates by setting own style to **td** element. For example: **[{dates: [{year: 2020, month: 5, day: 19}, {year: 2020, month: 5, day: 20}], styleClass: 'yoga'}]**. Value of **styleClass** is name of CSS selector. The definition of the CSS selector have to be added to the **stylesData** option. For example it is possible add a CSS **background-color** to definition of this selector.<br/><br/>Value of year or month can be zero. If it is zero it affects all years/months. For example disable first day of every month: **[{year: 0, month: 0, day: 1}]**. To reset existing **disableDates** value set empty array to it. |
| **disableDateRanges**   | no default value | Array<[IMyDateRange](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-date-range.interface.ts)> | Disable date ranges. For example: **[{begin: {year: 2019, month: 11, day: 14}, end: {year: 2019, month: 11, day: 20}}]**. To reset existing value of **disableDateRanges** set empty array to it. |
| **disableWeekends**   | false | boolean | Disable weekends. (Saturday and Sunday). |
| **disableWeekdays**   | no default value | Array< string > | Disable weekdays. Array of weekdays to disable. Weekdays are same strings as the **firstDayOfWeek** option. For example: **['tu', 'we']** which disables Tuesdays and Wednesdays. |
| **enableDates**   | no default value | Array<[IMyDate](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-date.interface.ts)> | Enable single dates one by one if the date is disabled. For example if you disable the date range and want to enable some dates in range. Array of enabled days. For example: **[{year: 2019, month: 11, day: 14}, {year: 2019, month: 1, day: 15}]**. Value of year or month can be zero. If it is zero it affects all years/months. For example enable first day of every month: **[{year: 0, month: 0, day: 1}]**. To reset existing **enableDates** value set empty array to it. |
| **markDates**   | no default value | Array<[IMyMarkedDates](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-marked-dates.interface.ts)> | Mark dates for different colors or styles. For example: **[{dates: [{year: 2019, month: 11, day: 14}, {year: 2019, month: 12, day: 16}], color: '#004198', styleClass: 'karateDates'}, {dates: [{year: 2018, month: 10, day: 1}, {year: 2018, month: 11, day: 4}], color: 'green', styleClass: 'yogaDates'}]**. The **color** property is optional. If it is given it adds a triangle to the upper left corner of the date. The **styleClass** is optional. If it is given it changes the style of the **td** element of the date. Value of the **styleClass** is a CSS selector name. The definition of the CSS selector have to be added to the **stylesData** option. For example it is possible add a CSS **background-color** to definition of this selector. Both **color** and **styleClass** can be used at the same time.<br/><br/>Value of year or month can be zero. If it is zero it affects all years/months. To reset existing value of **markDates** set empty array to it. |
| **markWeekends**   | no default value | [IMyMarkedDate](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-marked-date.interface.ts) | Mark weekends (Saturday and Sunday). For example: **{marked: true, color: 'red'}**. Value of color can be any CSS color code. To reset existing value of **markWeekends** set: **{marked: false, color: ''}** |
| **alignSelectorRight**   | false | boolean | Align selector right. |
| **openSelectorTopOfInput**   | false | boolean | Open selector top of input field. |
| **closeSelectorOnDateSelect** | true | boolean | Is selector closed or not on a date select. |
| **closeSelectorOnDocumentClick** | true | boolean | Is selector closed or not on a document click. |
| **minYear**   | 1000 | number | Minimum allowed year in calendar. Cannot be less than **1000**. |
| **maxYear**   | 9999 | number | Maximum allowed year in calendar. Cannot be more than **9999**. |
| **showSelectorArrow**   | true | boolean | Is selector (calendar) arrow shown or not. |
| **appendSelectorToBody**   | false | boolean | Is selector (calendar) appended to body element or not. |
| **focusInputOnDateSelect**   | true | boolean | Is the input box focused after a date select. |
| **moveFocusByArrowKeys**   | true | boolean | Is focus moved or not on the calendar by arrow keys. |
| **dateRangeDatesDelimiter**   | " - " | string | The delimiter of dates in a date range. |
| **inputFieldValidation**   | true | boolean | Input field validation enabled or not after **blur** event of input field. |
| **showMonthNumber**   | true | boolean | Is month number shown or not on the month view. |
| **todayTxt**   | empty string | string | Today footer text. This value comes also from locale [Locales](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/services/angular-mydatepicker.locale.service.ts): If there is locale it is not necessary to add this property. Also the **showFooterToday** option have to be **true** in order to use this option. If you want to add only today date to the footer put empty string to the value of this option.|
| **showFooterToday**   | false | boolean | Is today footer shown or not. |
| **calendarAnimation**   | no default value | [IMyCalendarAnimation](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-calendar-animation.interface.ts) | The type of open (**in**) and close (**out**) animation of calendar. One of the following ([CalAnimation](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/enums/cal-animation.enum.ts)) value: **None**, **Fade**, **ScaleTop**, **ScaleCenter**, **Rotate**,  **FlipDiagonal** or **Own**. Try animations [here](https://nodro7.github.io/angular-mydatepicker/).|
| **viewChangeAnimation**   | true | boolean | Is view change animation enabled or not. |
| **rtl**   | false | boolean | Is RTL enabled or not. Try RTL [here](https://nodro7.github.io/angular-mydatepicker/). |
| **stylesData**   | no default value | [IMyStyles](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-styles.interface.ts) | Overridden styles of the datepicker. See also [chapter](https://github.com/nodro7/angular-mydatepicker#override-styles-of-component) below. |
| **divHostElement**   | no default value | [IMyDivHostElement](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-div-host-element.interface.ts) | Div as a host element. In case of non-editable date field enable this option and put a **angular-mydatepicker** directive inside a **div** element. Placeholder text is an additional property of this option. Functionality is limited if this option is enabled. It is also possible to use input box and set it to **disabled** to archieve non-editable date field. |
| **ariaLabelPrevMonth**   | Previous Month | string | Aria label text of previous month button. |
| **ariaLabelNextMonth**   | Next Month | string | Aria label text of next month button. |

### locale attribute

An **ISO 639-1** language code can be provided as shorthand for the following options (**dayLabels**, **monthLabels**, **dateFormat**, **firstDayOfWeek**, **sunHighlight** and **todayTxt**).
Currently supported languages are:

| Language code | Description |
| :------------- | :------------- |
| **en**   | English |
| **fr**   | French |
| **fr-ch** | French - Switzerland |
| **ja** | Japanese |
| **fi** | Finnish |
| **es** | Spanish |
| **hu** | Hungarian |
| **sv** | Swedish |
| **nl** | Dutch |
| **ru** | Russian |
| **uk** | Ukrainian |
| **uz** | Uzbek |
| **no** | Norwegian |
| **tr** | Turkish |
| **pt-br** | Portuguese - Brazil |
| **de** | German |
| **de-ch** | German - Switzerland |
| **it** | Italian |
| **it-ch** | Italian - Switzerland |
| **pl** | Polish |
| **my** | Burmese |
| **sk** | Slovak |
| **sl** | Slovenian |
| **zh-cn** | Chinese - China |
| **he** | Hebrew |
| **ro** | Romanian - Romania |
| **ca** | Catalan |
| **id** | Indonesian |
| **en-au** | English - Australia |
| **en-gb** | English - British |
| **am-et** | Amharic |
| **cs** | Czech |
| **el** | Greek |
| **kk** | Kazakh |
| **th** | Thai |
| **ko-kr** | Korean |
| **da** | Danish |
| **lt** | Lithuanian |
| **vi** | Vietnamese |
| **bn** | Bengali |
| **bg** | Bulgarian |
| **hr** | Croatian |
| **ar** | Arabic |
| **is** | Icelandic |
| **tw** | Chinese - Taiwan |
| **lv** | Latvian |
| **et** | Estonian |

The **locale** options can be overridden by **options** attribute.

* a new locale data will be added to [this](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/services/angular-mydatepicker.locale.service.ts)
file. If you want to add a new locale create a pull request.

Try locales [here](https://nodro7.github.io/angular-mydatepicker/).

### defaultMonth attribute

Visible month/year when calendar is opened:

* If date is already selected => calendar opens to the month and the year of the selected date
  * In date range mode => calendar opens to the month and the year of the selected begin date
  * If an **overrideSelection** property is set to **true** in the [IMyDefaultMonth](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-default-month.interface.ts) the calendar opens to the month and the year specified in the the **defaultMonth** attribute even the date is selected.
* If the **defaultMonth** is set => calendar opens to the month and the year specified in the the **defaultMonth** attribute
* If none of above => calendar opens to the month and the year of current date

Value of the **defaultMonth** attribute can be:

* [IMyDefaultMonth](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-default-month.interface.ts) object. The value of **defMonth** property can be a string which contain year number and month number separated by delimiter. The delimiter can be any special character. For example: **08-2019** or **08/2019**.
* a string which contain year number and month number separated by delimiter. The delimiter can be any special character. For example: **08-2019** or **08/2019**.

## Functions

You can can call functions of the directive. Define a local variable to the input field as follows:

```html
<input angular-mydatepicker name="mydate" [(ngModel)]="model"
    [options]="myOptions" #dp="angular-mydatepicker"/>
```

The **#dp="angular-mydatepicker"** defines the local variable named **dp**. You can use it to call functions of the directive
for example **(click)="dp.openCalendar()"**.

### openCalendar function

Opens the calendar.

### closeCalendar function

Closes the calendar.

### toggleCalendar function

Closes the calendar if it is open and opens the calendar if it is closed. Returns **true** if the operation was open the calendar, otherwise returns **false**.

### clearDate function

Clears the date or date range from the input box and model.

### isDateValid function

Returns **true** if the date or date range in the input box is valid. Otherwise it returns **false**. This function also calls the **inputFieldChanged** callback.

### headerAction function

Header button (previous, month, year or next) action. Calling this function has same behaviour as clicking of the header button. Function has one parameter [HeaderAction](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/enums/header-action.enum.ts).

### setHostValue function

Sets host (input box) value.

## Callbacks

### dateChanged callback

* called when a **single date** or **date range** is selected, cleared or input field typing is valid
* event parameter:
  * **event.isRange**: **true** if a date range is selected, **false** if a single date is selected
  * **event.singleDate**: event data if **isRange** is **false**, if **isRange** is **true** this property is **null**
    * **date**: [IMyDate](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-date.interface.ts) object for example: { year: 2019, month: 9, day: 7 }
    * **jsDate**: Javascript Date object
    * **formatted**: Date as a string in the same format as the **dateFormat** option is. For example '2016-11-22'
    * **epoc**: Epoc time stamp. For example: 1479765600
  * **event.dateRange**: event data if **isRange** is **true**, if **isRange** is **false** this property is **null**
    * **beginDate**: [IMyDate](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-date.interface.ts) object for example: { year: 2019, month: 11, day: 7 }
    * **beginJsDate**: Javascript Date object
    * **beginEpoc**: Epoc time stamp for example: 1479765600
    * **endDate**: [IMyDate](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-date.interface.ts) object for example: { year: 2019, month: 11, day: 9 }
    * **endJsDate**: Javascript Date object
    * **endEpoc**: Epoc time stamp. For example: 1479765600
    * **formatted**: Date range as a string. The date is in the same format as the **dateFormat** option is. For example '2019-11-22 - 2019-11-24'

* Type of event parameter is [IMyDateModel](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-date-model.interface.ts)

### inputFieldChanged callback

* called when the value change in the input field, date or date range is selected or date is cleared.
* event parameter:
  * **event.value**: Value of the input field. For example: '2018-11-22'
  * **event.dateFormat**: Date format. For example 'yyyy-mm-dd'
  * **event.valid**: Boolean value indicating is the value of input field valid or not. For example: true
* Type of event parameter is [IMyInputFieldChanged](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-input-field-changed.interface.ts)

### calendarViewChanged callback

* called when the calendar view is changed. The date selection view activated or month/year changed on the date selection view.
* event parameter:
  * **event.year**: Year number in calendar. For example: 2018
  * **event.month**: Month number in calendar. For example: 11
  * **event.first**: First day of selected month and year. Type of [IMyWeekday](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-weekday.interface.ts). For example: {number: 1, weekday: "tu"}
  * **event.last**: Last day of selected month and year. Type of [IMyWeekday](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-weekday.interface.ts). For example: {number: 30, weekday: "we"}
* event parameter type is [IMyCalendarViewChanged](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-calendar-view-changed.interface.ts)
* values of the weekday property are same as values of the **firstDayOfWeek** option

### calendarToggle callback

* called when the calendar is opened or closed
  * **event**: number from **1** to **5** indicating the reason of the event
    * **1** = calendar opened
    * **2** = calendar closed by date select
    * **3** = calendar closed by calendar button
    * **4** = calendar closed by outside click (document click)
    * **5** = calendar closed by ESC key

### rangeDateSelection callback

* called in a date range mode when a date is selected
  * event parameter:
    * **event.isBegin**: Is begin date. **true** if begin date, **false** if end date
    * **event.date**: Selected date as an [IMyDate](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/interfaces/my-date.interface.ts) object
    * **event.dateFormat**: Date format given in options. For example 'yyyy-mm-dd'
    * **event.formatted**: Selected date as a string (format based on **dateFormat** option). For example '2019-05-10'
    * **event.epoc**: Epoc time stamp. For example: 1557435600

### viewActivated callback

* called when the calendar view (date, month or year) change
  * **event**: View number as an enum value [ActiveView](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/enums/active-view.enum.ts)
    * **1** = date view
    * **2** = month view
    * **3** = year view

## Override styles of component

It is possible to override styles of the datepicker. Each datepicker can define unique styles in case of multiple datepickers on the same page.
It is possible override any of [these](https://github.com/nodro7/angular-mydatepicker/blob/master/projects/angular-mydatepicker/src/lib/css/angular-mydatepicker.style.css) styles.

## Development of this component

In order the following commands work you need a **git client** and **npm**.

* At first fork and clone this repo:
  1. __git clone <https://github.com/nodro7/angular-mydatepicker.git>__
  2. **cd angular-mydatepicker**

* Install dependencies:
  1. **npm install**

* Run sample application:
  1. **ng serve**
  2. Navigate to __<http://localhost:4200>__

* Run tests:
  1. Tests: **npm run test-lib**
     * the **test-output** folder is created under the root folder and it contains a coverage report

* Build datepicker library:
  1. **npm run build-lib**
     * the **dist/angular-mydatepicker** folder is created under the root folder

* Build a local npm installation package:
  1. **npm run build-lib**
  2. **cd dist/angular-mydatepicker**
  3. **npm pack**
  * local installation package is created to the **dist/angular-mydatepicker** folder. For example: **angular-mydatepicker-0.0.1.tgz**

* Install local **npm** package to your project:
  1. **npm install path_to_folder/angular-mydatepicker-0.0.1.tgz**

## License

* [MIT](https://github.com/nodro7/angular-mydatepicker/blob/master/LICENSE)

## Original Author

* [kekeh](https://github.com/kekeh)
