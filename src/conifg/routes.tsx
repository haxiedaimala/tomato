import { RouteRecordRaw } from "vue-router";
import { Bar } from "../views/Bar";
import { Foo } from "../views/Foo";
import { Welcome } from "../views/Welcome";
import { First } from "../components/welcome/First";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Fourth } from "../components/welcome/Fourth";

// 当输入没有提示的时候，可以标注一下类型，实现更好的编程提示
export const routes: RouteRecordRaw[] = [
  { path: '/', component: Foo },
  { path: '/bar', component: Bar },
  {
    path: '/welcome', component: Welcome, children: [
      { path: '1', component: First },
      { path: '2', component: Second },
      { path: '3', component: Third },
      { path: '4', component: Fourth },
    ]
  }
]