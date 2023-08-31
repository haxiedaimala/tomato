import { createApp } from 'vue'
import './style.css'
import {App} from './App'  //tsx 导出时定义了名字，因此引入的时候需要根据名字引入，并且编辑器会有提示
import {createRouter} from 'vue-router'
import { routes } from './conifg/routes'
import { history } from './shared/history'


const router = createRouter({
  history,
  routes, 
})

const app = createApp(App)
app.use(router)
app.mount('#app')
