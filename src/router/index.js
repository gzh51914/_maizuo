import Vue from 'vue'
import VueRouter from 'vue-router'

//这行代码如果注释掉，this上面都不存在$router与$route的api了
Vue.use(VueRouter)  

//引入Films组件
import Films from "@/views/Films"
// import Cinema from "@/views/Cinema"
import Center from "@/views/Center"
import Nowplaying from "@/views/films/Nowplaying"
import Comingsoon from "@/views/films/Comingsoon"
import Error from "@/views/Error"
import Detail from "@/views/Detail"


const routes = [
  {
    path:"/films",
    component:Films,
    //进行二级路由的配置
    children:[
      {
        path:"/films/nowplaying",
        component:Nowplaying,
      },
      {
        path:"/films/comingsoon",
        component:Comingsoon
      },
      {
        path:"",
        redirect:"/films/nowplaying"  //进行一级路由内部的重定向操作  /films ==> /films/nowplaying
      }
    ]
  },
  // {
  //   path:"/films/Nowplaying",
  //   component:Nowplaying
  // },
  {   
    path:"/cinema",
      component:()=>import(/* webpackChunkName:'cinema' */"@/views/Cinema")   //webpack的代码分割？
    // component: resolve => require(['@/views/Cinema'], resolve)
  },
  {
    path:"/cinema/search",
    component:()=>import("@/views/Search")
  },
  {
    path:"/city",
    component:()=>import("@/views/City")
  },
  {
    path:"/center",
    component:Center,
    // beforeEnter(to,from,next){
    //   console.log("进入Center了哦....")
    //   next()
    // }
  },
  {
    name:"detail",
    path:"/detail/:id",
    component:Detail,
    props:true
  },
  {
    name:"cinemaDetail",
    path:"/cinemaDetail/:id",
    component:()=>import("@/views/CinemaDetail"),
    props:true
  },
  {
    path:"/login",
    component:()=>import("@/views/Login")
  },
  {
    path:"/",
    redirect:'/films'  //重定向  / ==> /films ===> /fimls/nowplaying
  },
  {
    path:"*",
    component:Error   //前面的路由都没有匹配上的话，就需要显示Error页面了
  }
]

const router = new VueRouter({
  mode:"history",//默认采用hash模式
  routes
})

//全局路由守卫
//全局路由的前置守卫
//to:Route  即将要进入的目标
//from:Route 当前导航正要离开的路由
/* router.beforeEach((to,from,next)=>{
  if(from.path==="/cinema"){
    console.log("从影院这边过来的哦...")
  }
  next() //一定需要调用next
}) */


//全局的后置路由守卫
/* router.afterEach((to,from)=>{
  if(to.path === "/center"){
    console.log("进入center了哦...")
  }
}) */



//判断每次路由切换的时候，是否有token令牌
router.beforeEach((to,from,next)=>{
  if(to.path === "/center"){
    if(localStorage.getItem("token")){//说明用户已经登录了
      next()
    }else{
      next("/login") //如果用户没有登录直接跳转到登录界面进行用户登录
    }
  }else{
    next()
  }
})




export default router
