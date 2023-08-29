import { defineComponent } from "vue";
import { RouterView } from "vue-router";

// TSX 可以直接在导出时定义导出的文件名字，而Vue3导出时没有组件名，需要自己引入时取名字
export const App = defineComponent({
  setup() {
    return () => (
      <>
        <RouterView></RouterView>
      </>
    )
  }
})

