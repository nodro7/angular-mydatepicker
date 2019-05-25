import { TestBed } from '@angular/core/testing';

import { LocaleService } from '../services/angular-mydatepicker.locale.service';

describe('LocaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LocaleService
    ]
  }));

  it('should be created', () => {
    const service: LocaleService = TestBed.get(LocaleService);
    expect(service).toBeTruthy();
  });

  it('get locale', () => {
    const service: LocaleService = TestBed.get(LocaleService);
    expect(service).toBeTruthy();

    let locale = service.getLocaleOptions('ja');
    expect(locale).not.toBe(null);
  });
});
