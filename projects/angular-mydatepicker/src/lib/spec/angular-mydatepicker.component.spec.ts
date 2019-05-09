import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMyDatePickerComponent } from '../angular-mydatepicker.component';

describe('AngularMyDatePickerComponent', () => {
  let component: AngularMyDatePickerComponent;
  let fixture: ComponentFixture<AngularMyDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMyDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMyDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
