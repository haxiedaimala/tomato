import { defineComponent, ref } from "vue";

// TSX 可以直接在导出时定义导出的文件名字，而Vue3导出时没有组件名，需要自己引入时取名字
export const App = defineComponent({
  setup() {
    const count = ref(0)
    const onClick = () => {
      count.value += 1
    }
    return () => (
      <>
        <button onClick={onClick}>+1</button>
        <div>{count.value}</div>
      </>
    )
  }
})

