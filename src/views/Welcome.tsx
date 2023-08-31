import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export const Welcome = defineComponent({
  setup() {
    return () => (
      <div>
        <header>header</header>
        <main><RouterView/></main>
        <footer>footer</footer>
      </div>
    )
  }
})