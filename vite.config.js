// import path from 'path'

// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import viteSvgIcons from 'vite-plugin-svg-icons'
// import { vueDocFiles } from 'vite-plugin-vuedoc'

// export default defineConfig({
//   'resolve.alias': {
//     '@': path.resolve(__dirname, 'src')
//   },
//   plugins: [
//     vue(),
//     viteSvgIcons({
//     // 配置路径在你的src里的svg存放文件
//       iconDirs: [path.resolve(__dirname, 'src/libs/linUi/assets/iconfont')],
//       symbolId: 'icon-[dir]-[name]'
//     }),
//     // vitePluginVuedoc(),
//     vue({
//       include: [...vueDocFiles]
//     })
//   ]
// })

import vue from '@vitejs/plugin-vue'
import { createPlugin, vueDocFiles } from 'vite-plugin-vuedoc'

const config = {
  plugins: [
    createPlugin({
      highlight: {
        theme: 'one-light'
      }
    }),
    vue({
      include: [...vueDocFiles]
    })
  ]
}

export default config
