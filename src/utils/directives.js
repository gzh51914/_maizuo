import Vue from "vue"
import Swiper from "swiper"
Vue.directive("swiper",{
    inserted(el,binding,vnode){
        //代表最后一个元素插入完毕了，再进进行一次实例化操作就可以了
        if(binding.value.current === binding.value.length-1){
            new Swiper("."+binding.value.swipe,{ //默认swiper执行3次，因为插入了3个swiper-slide的真实dom
                ...binding.value.free,
                // pagination:{
                //     el:".swiper-pagination"
                // }
            })
        }
    }
})
Vue.directive("title",{
    inserted(ele,binding,vnode){
        ele.style.display = "none"
        
        window.onscroll=function(){
            
            if(document.documentElement.scrollTop>binding.value){
                ele.style.display="block"     
            }else{
                ele.style.display="none"
            }
        }
    },
    unbind(){
        window.onscroll=null
    }
})