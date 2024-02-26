import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import engTranslation from 'locale/en/translation.json';
import uaTranslation from 'locale/ua/translation.json';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        debug: false,
        resources: {
            en: {
                translation: engTranslation
            },
            ua: {
                translation: uaTranslation
            }
        }
    });

export default i18next.t;
