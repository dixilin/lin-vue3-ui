import DefaultTheme from 'vitepress/theme'
import LinButton from '../../../src/libs/linUI/components/button/index.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('LinButton', LinButton)
  }
}