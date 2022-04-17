import { createApp } from 'vue'
import App from './App.vue'
// import Button from './Button.vue'
// import 'vite-plugin-vuedoc/style.css'
import LinUI from './libs/linUI/index'
import './libs/linUI/global.css'
const app = createApp(App)
app.use(LinUI)
// app.component('elButton', Button)

app.mount('#app')
