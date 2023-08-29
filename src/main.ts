import { createApp } from 'vue'
import './style.css'
import {App} from './App'  //tsx 导出时定义了名字，因此引入的时候需要根据名字引入，并且编辑器会有提示
import { Foo } from './views/Foo'
import { Bar } from './views/Bar'
import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
  { path: '/', component: Foo },
  { path: '/bar', component: Bar },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

const app = createApp(App)
app.use(router)
app.mount('#app')
