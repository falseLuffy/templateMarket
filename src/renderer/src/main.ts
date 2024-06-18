import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import installI18n from './plugins/i18n'
import './assets/css/icon.css'
const app = createApp(App)

installElementPlus(app)
installI18n(app)

app.use(store).use(router).mount('#app')
