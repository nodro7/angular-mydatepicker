import { TestBed } from '@angular/core/testing';

import { DefaultConfigService } from '../services/angular-mydatepicker.config.service';

describe('DefaultConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefaultConfigService = TestBed.get(DefaultConfigService);
    expect(service).toBeTruthy();
  });
});
