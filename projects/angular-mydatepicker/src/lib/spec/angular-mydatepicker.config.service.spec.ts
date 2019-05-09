import { TestBed } from '@angular/core/testing';

import { AngularMyDatePickerConfig } from '../services/angular-mydatepicker.config.service';

describe('AngularMyDatePickerConfig', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularMyDatePickerConfig = TestBed.get(AngularMyDatePickerConfig);
    expect(service).toBeTruthy();
  });
});
