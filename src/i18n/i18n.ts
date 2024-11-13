import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import en from "../../public/locales/en.json";
import ua from "../../public/locales/ua.json";
import de from "../../public/locales/de.json";
import ru from "../../public/locales/ru.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ua: { translation: ua },
    de: { translation: de },
    ru: { translation: ru },
  },
  lng: 'ua', // Init language
  fallbackLng: 'en', // Default language, if don't have translation
  interpolation: { escapeValue: false },
});

export default i18n;