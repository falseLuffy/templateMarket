import ElementPlus, { dayjs } from 'element-plus'
import 'element-plus/dist/index.css'
import localeZH from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconVue from '@element-plus/icons-vue'


dayjs.locale('zh-cn')
export default (app) => {
  app.use(ElementPlus, { locale: localeZH, size: 'default' })
  for (const [key, commponent] of Object.entries(ElementPlusIconVue)) {
    app.component(key, commponent)
  }
}
