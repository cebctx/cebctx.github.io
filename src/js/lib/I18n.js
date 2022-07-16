import available_locales from '../config/available_locales';
import locale_en from '../config/translations/en';

const translations = {
  en: locale_en
};

export default class I18n {
  static locale = 'en';

  static setLocale = (localeToUse) => {
    if (!available_locales.includes(localeToUse)) {
      throw new Error(`Locale "${localeToUse}" is not valid`);
    }
    this.locale = localeToUse;
  }

  static translate = (key, locale) => {
    const localeToUse = locale || 'en';
    return translations?.[localeToUse]?.[key] || translations.en[key] || key;
  }

  static t = (key, locale) => {
    return this.translate(key, locale);
  }
}
