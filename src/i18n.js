import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './trans/en/translation.json';
import ru from './trans/ru/translation.json';
import sp from './trans/sp/translation.json';

const resurses = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
  sp: {
    translation: sp,
  }
}
i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  resurses,
  lng:JSON.parse(localStorage.getItem('language')),   
    fallbackLng: 'ru',    
    interpolation: {
      escapeValue: false,
    },
})
export default i18n;