import { TestBed } from '@angular/core/testing';
import { DEFAULT_LOCALE } from '../constants/constants';
import { IMyOptions } from '../interfaces/my-options.interface';

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

  it('should return the specified supported locale when found', () => {
    const service: LocaleService = TestBed.inject(LocaleService);
    const locales: Array<string> = ['en', 'fr', 'ja', 'fi', 'es', 'hu', 'sv', 'nl', 'nl-BE', 'ru', 'uk', 'no', 'tr', 'pt-br', 'de', 'it', 'it-ch', 'pl', 'my', 'sk', 'sl', 'zh-cn', 'he', 'ro', 'ca', 'id', 'en-au', 'am-et', 'cs', 'el', 'kk', 'th', 'ko-kr', 'da', 'lt', 'vi', 'bn', 'bg', 'hr', 'ar', 'is', 'de-ch', 'fr-ch', 'tw', 'lv', 'et'];

    for (const locale of locales) {
      const result: IMyOptions = service.getLocaleOptions(locale);
      expect(result).toEqual(service['locales'][locale.toLowerCase()]);
    }
  });

  it('should return the default locale when supplied locale is not supported', () => {
    const service: LocaleService = TestBed.inject(LocaleService);
    const result: IMyOptions = service.getLocaleOptions('unknown-locale');
    expect(result).toEqual(service['locales'][DEFAULT_LOCALE]);
  });

  it('should return the default locale when no locale is specified', () => {
    const service: LocaleService = TestBed.inject(LocaleService);
    const result: IMyOptions = service.getLocaleOptions();
    expect(result).toEqual(service['locales'][DEFAULT_LOCALE]);
  });

  it('should support uppercase region subtags', () => {
    const service: LocaleService = TestBed.inject(LocaleService);
    const result: IMyOptions = service.getLocaleOptions('nl-BE');
    expect(result).toEqual(service['locales']['nl-be']);
  });
});
