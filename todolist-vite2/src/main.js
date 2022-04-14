import { createApp } from 'vue'
import App from './App.vue'

//bootstrap 사용
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.esm.min.js'

const app = createApp(App)
// 출력형태 2020-02-06T13:39:45.148Z
app.provide('today', new Date().toISOString().split('T')[0])
app.mount('#app')
 