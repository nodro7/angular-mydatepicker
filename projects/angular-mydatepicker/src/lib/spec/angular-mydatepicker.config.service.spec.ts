import { TestBed } from '@angular/core/testing';

import { DefaultConfigService } from '../services/angular-mydatepicker.config.service';

describe('DefaultConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DefaultConfigService
    ]
  }));

  it('should be created', () => {
    const service: DefaultConfigService = TestBed.get(DefaultConfigService);
    expect(service).toBeTruthy();
  });

  it('get default config', () => {
    const service: DefaultConfigService = TestBed.get(DefaultConfigService);
    expect(service).toBeTruthy();

    let config = service.getDefaultConfig();
    expect(config).not.toBe(null);
  });
});
