import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from "axios"
loadFonts()

var app =createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
axios.defaults.withCredentials = true          //axios 에 인증, 쿠키 유지하도록 설정
app.config.globalProperties.$axios = axios     //vue 전역에서 $axios 사용할 수 있게 설정
  
  
app.mount('#app')
