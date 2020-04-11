<template>
  <div class="films">
     <div class="city-fixed" @click="handleChangePage('/City')">{{cityName}}<i class="iconfont icon-moreunfold" style="font-size:10px"></i></div>
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
        <img :src="banner.imgUrl" alt />
      </div>
    </Swiper>
    <div class="tabs-bar-wrapper">
              <span  @click="hot">正在热映</span>
              <span @click="show">即将上映</span>
    </div>
     
    <!--路由容器-->
    <router-view></router-view>
    <div class="no-more">- 无更多电影 -</div>
  </div>
</template>
<script>
//引入Swiper组件
import Swiper from "@/components/Swiper";
import axios from "axios";
import {instance,instance2} from "@/utils/http";
import Vue from 'vue'
import BScroll from 'better-scroll'
import { mapState ,mapMutations} from "vuex";
// import Swip from "swiper"
export default {
  components: {
    Swiper //注册组件Swiper
  },
  data() {
    return {
      banners: []
      
    };
  },
  computed: {
    ...mapState("city", ["cityId","cityName"])
  },
  methods:{
       ...mapMutations("cinema",["setCinemaList"]),
         //跳转页面
         hot(){
             this.$router.push({path:'/films/Nowplaying'})
         },
         show(){
             this.$router.push({path:'/films/Comingsoon'})
         },
          handleChangePage(path){
            if(path=="/City"){
               this.setCinemaList([])
            }
            this.$router.push(path)
        },
       
         
     },
  created() {
    //请求数据
    instance
      .get(`/gateway?type=2&cityId=${this.cityId}&k=3419992`, {
        headers: {
          "X-Host": "mall.cfg.common-banner"
        }
      })
      .then(res => {
        this.banners = res.data.data;
      });
    
  }
};
</script>
<style lang="scss" scoped>
.swiper-slide {
  position: relative;
  img {
    width: 100%;
  }
}
.tabs-bar-wrapper{
  height: 0.49rem;
  width: 100%;
  line-height: 0.49rem;
  font-size: 0.16rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
}
.no-more {
  height: 59px;
  background-color: #ededed;
  color: #bdc0c5;
  font-size: 13px;
  text-align: center;
  margin: auto;
  line-height: 59px;
}
.city-fixed{
  height: .3rem;
  width: .5rem;
  line-height: .3rem;
  background-color:rgba(0,0,0,.2);
  z-index: 111;
  position: absolute;
  top:18px;
  left:7px;
  color: #ededed;
  text-align: center;
  border-radius: 15px;
}
</style>