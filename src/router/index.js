import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
let r=require.context('../components',true,/\.routes\.js/)
//r.keys()返回匹配到的文件的相对路径的数组，相对于components子目录的相对路径
//r(item).default:当前文件的模块
let arr=[]
r.keys().forEach(item=>{
  arr=arr.concat(r(item).default)
})
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  ...arr
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
