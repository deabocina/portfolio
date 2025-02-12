import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import hr from "../locales/hr.json";
import de from "../locales/de.json";
import fr from "../locales/fr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hr: { translation: hr },
    de: { translation: de },
    fr: { translation: fr },
  },
  lng: "en",
  fallbackLng: "en",
});

export default i18n;
