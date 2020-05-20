import { InjectionToken } from '@angular/core';
import { LocalizationLanguage } from './localization.language';

export const DI_NS_DEFAULT_LANGUAGE = new InjectionToken<LocalizationLanguage>('DI_NS_DEFAULT_LANGUAGE', {
   providedIn: 'root',
   factory: () => LocalizationLanguage.EN
});

export const DI_NS_USES_LOCALIZATION = new InjectionToken<boolean>('DI_NS_USES_LOCALIZATION');
