<template>
    <div class="films">
        <Swiper cName="swipe">
            <div 
                class="swiper-slide"
                v-for="(banner,index) in banners"
                :key="banner.bannerId"
                v-swiper="{
                    current:index,
                    length:banners.length,
                    swipe:'swipe'
                }"
            >
                <img :src="banner.imgUrl" alt="">
            </div>
        </Swiper>
        <div>
            正在热映
        </div>
        <!--路由容器-->
        <router-view></router-view>
    </div>
</template>
<script>
//引入Swiper组件
import Swiper from "@/components/Swiper"
import axios from "axios"
import {instance,instance2} from "@/utils/http"
import {mapState} from "vuex"
// import Swip from "swiper"
export default {
    components:{
        Swiper  //注册组件Swiper
    },
    data(){
        return {
            banners:[]
        }
    },
    computed:{
        ...mapState("city",["cityId"])
    },
    created(){
        //请求数据
        instance.get(`/gateway?type=2&cityId=${this.cityId}&k=3419992`,{
            headers:{
                'X-Host': 'mall.cfg.common-banner'
            }
        }).then(res=>{
            this.banners = res.data.data
            //必须要等到页面中出现了swiper-slide结构后，我们才能进行实例化的操作
            // this.$nextTick(()=>{
            //     new Swip(".swiper-container")
            // })
        })


        //要请求 http://47.96.0.211:3000/api/goods/home数据
        /* instance2.get("/api/goods/home").then(res=>{
            console.log("/goods/home的数据",res)
        }).catch(err=>{
            console.log("err",err)
        }) */

    }
}
</script>
<style lang="scss" scoped>
    .swiper-slide{
        img{
            width:100%
        }
    }
</style>
