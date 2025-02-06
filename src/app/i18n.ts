import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "../langs/ru.json";
import ro from "../langs/ro.json";

const resources = {
  ru: { translation: ru },
  ro: { translation: ro },
};

i18n.use(initReactI18next).init({ resources, lng: localStorage.getItem("lang") || "ro", interpolation: { escapeValue: false } });

export default i18n;
