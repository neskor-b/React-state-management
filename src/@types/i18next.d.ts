import engTranslation from 'locale/en/translation.json';

declare module 'i18next' {
    interface CustomTypeOptions {
      defaultNS: 'en';
      resources: {
        en: typeof engTranslation;
      };
    }
  }