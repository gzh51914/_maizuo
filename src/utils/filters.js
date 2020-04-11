import Vue from "vue"
import moment from "moment"
//主演人员过滤器
Vue.filter("actorFilter",(val)=>{
  if(val){
     return val.map(item=>item.name).join(" ")
  }else{
     return "暂无主演"
  }
})

//时间moment过滤器
Vue.filter("dateFilter",(val,option="/")=>{
  return moment(val*1000).format("YYYY"+option+"MM"+option+"DD")
})