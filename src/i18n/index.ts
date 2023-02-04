//@ts-nocheck
import Gettext from "node-gettext";
import locales from "./translations/locales.json";
import { vsprintf } from "sprintf-js";
const languageKey = 'LANGUAGE'; 
const I18n = Symbol('i18n');
if(!window[I18n]) {
    window[I18n] = new Gettext();
    window[I18n].addTranslations("en", "messages", locales["en"]);
    window[I18n].addTranslations("zh", "messages", locales["zh-CN"]);
}
export function i18n(msgid: string, values = []) {
  const str = window[I18n].gettext(msgid);
  return values.length > 0 ? vsprintf(str, values) : str;
}
class I18nConfig {
  defaultLocale: string;
  constructor() {
    const defaultLang = localStorage.getItem(languageKey)||navigator.language;
    window[I18n].setLocale(defaultLang);
  }
  get locale() {
    return window[I18n].locale;
  }
  set locale(value) {
    window[I18n].setLocale(value);
    localStorage.setItem(languageKey,value);
    history.go(0);
  }
}
export const i18nConfig = new I18nConfig();
