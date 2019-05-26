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

    const locales: Array<string> = new Array('en', 'fr', 'ja', 'fi', 'es', 'hu', 'sv', 'nl', 'ru', 'uk', 'no', 'tr', 'pt-br', 'de', 'it', 'it-ch', 'pl', 'my', 'sk', 'sl', 'zh-cn', 'he', 'ro', 'ca', 'id', 'en-au', 'am-et', 'cs', 'el', 'kk', 'th', 'ko-kr', 'da', 'lt', 'vi', 'bn', 'bg', 'hr', 'ar', 'is', 'de-ch', 'fr-ch', 'tw', 'lv', 'et');

    for (const locale of locales) {
      let l = service.getLocaleOptions(locale);
      expect(l).not.toBe(null);
      expect(l.hasOwnProperty('dayLabels')).toBe(true);
      expect(l.hasOwnProperty('monthLabels')).toBe(true);
    }
  });
});
