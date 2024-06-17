import { createI18n } from 'vue-i18n'
import localeZH from 'element-plus/es/locale/lang/zh-cn'
import localeEN from 'element-plus/es/locale/lang/en'
import messages from '../utils/i18n'

const i18n = createI18n({
  locale: getStorageLanguage() || getLocalLanguage() || localeZH.name,
  fallbackLocale: localeEN.name,
  messages
})

export default function (app) {
  app.use(i18n)
}

export function getStorageLanguage() {
  return localStorage.getItem('local') || ''
}

function getLocalLanguage() {
  return navigator.language.toLocaleLowerCase()
}
