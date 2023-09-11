import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from './Welcome.module.scss'

export const Welcome = defineComponent({
  setup() {
    return () => (
      //父容器使用css module
      <div class={s.wrapper}>  
        <header>header</header>
        <main><RouterView/></main>
        <footer>footer</footer>
      </div>
    )
  }
})