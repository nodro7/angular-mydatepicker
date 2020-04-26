import {Component, OnInit, Renderer2, ViewChild, ChangeDetectorRef} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {IAngularMyDpOptions, IMyDateModel, AngularMyDatePickerDirective} from '../../../projects/angular-mydatepicker/src/public-api';

@Component({
  selector: 'date-picker-reactive-forms',
  templateUrl: './date-picker-reactive-forms.html',
  styleUrls: ['./date-picker-reactive-forms.css']
})
export class DatePickerReactiveForms implements OnInit {
  public myDatePickerOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd.mm.yyyy'
  };

  public disabled: boolean = false;

  public myForm: FormGroup;

  @ViewChild('dp') myDp: AngularMyDatePickerDirective;

  constructor(private formBuilder: FormBuilder, private renderer: Renderer2, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    console.log('onInit(): SampleDatePickerReacticeForms');
    let d: Date = new Date();
    d.setDate(d.getDate() + 2);
    let model: IMyDateModel = {isRange: false, singleDate: {jsDate: d}, dateRange: null};

    this.myForm = this.formBuilder.group({
      myDate: [
        model,
        Validators.required
      ]   // this example is initialized to specific date
    });
  }

  onSubmitReactiveForms(): void {
    console.log('Value: ',
      this.myForm.controls['myDate'].value,
      ' - Valid: ', this.myForm.controls['myDate'].valid,
      ' - Dirty: ', this.myForm.controls['myDate'].dirty,
      ' - Touched: ', this.myForm.controls['myDate'].touched
    );
  }
  
  toggleCalendar(): void {
    this.cdr.detectChanges();
    this.myDp.toggleCalendar();
  }

  setTodayDate(): void {
    // Set today using the setValue function
    let date: Date = new Date();
    let model: IMyDateModel = {isRange: false, singleDate: {jsDate: date}, dateRange: null};

    this.myForm.setValue({myDate: model});
  }

  resetTomorrowDate(): void {
    // Reset date picker to specific date (tomorrow)
    let date: Date = new Date();
    date.setDate(date.getDate() + 1);
    let model: IMyDateModel = {isRange: false, singleDate: {jsDate: date}, dateRange: null};
    this.myForm.reset({myDate: model});
  }

  clearDate(): void {
    // Clear the date using the setValue function
    this.myForm.setValue({myDate: null});
  }

  disable(): void {
    this.disabled = !this.disabled;
    if (this.disabled) {
      this.myForm.get('myDate').disable();
    } else {
      this.myForm.get('myDate').enable();
    }
  }
}
