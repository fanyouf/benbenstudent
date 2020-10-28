import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/index.less'

const app = createApp(App)
const requireComponent = require.context(
  // 其组件目录的相对路径
  './components/ui',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /[A-Z]\w+\.(vue|js)$/
)
console.log('requireComponent', requireComponent.keys())

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)
  const name = fileName.replace('.vue', '').replace('./', '')
  console.log(fileName, name)
  // 全局注册组件
  app.component(
    name,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})
app.use(store).use(router).mount('#app')
