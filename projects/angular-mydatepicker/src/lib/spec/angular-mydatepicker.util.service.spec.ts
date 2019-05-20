import { TestBed } from '@angular/core/testing';

import { UtilService } from '../services/angular-mydatepicker.util.service';

describe('UtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UtilService
    ]
  }));

  it('should be created', () => {
    const service: UtilService = TestBed.get(UtilService);
    expect(service).toBeTruthy();
  });
});

