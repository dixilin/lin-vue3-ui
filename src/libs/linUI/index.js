// import 'vite-plugin-svg-icons/register'
import SvgIcon from './components/icon/index.vue'
import Button from './components/button/index.vue'

export default {
  install: (app) => {
    app.component('SvgIcon', SvgIcon)
    app.component('LinButton', Button)
  }
}
