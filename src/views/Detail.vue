<template>
    <div class="detail" v-if="filmInfo">
        <!-- <div class="detailtitle" v-title="100">
            <i class="iconfont icon-back" @click="back"></i>
            <span>少年的你</span>
        </div> -->
        <m-title v-title="50" @back="handleBack">
            {{filmInfo.name}}
        </m-title>
         
       <img :src="filmInfo.poster" alt="" >
      
         
        <div class="filmInfo-con">
            <h4 class="film-title">{{filmInfo.name}} {{filmInfo.filmType.name}}</h4> 
            <p>{{filmInfo.category}}</p>
            <p>{{filmInfo.premiereAt | dateFilter}} 上映</p>
            <p>{{filmInfo.nation}} | {{filmInfo.runtime}}分钟</p>
            <p class="grade">{{filmInfo.grade}}</p>
            <p :class="{synopsis:isActive}">{{filmInfo.synopsis}}</p>
            <i @click="isActive=!isActive" class="iconfont" :class="isActive?'icon-moreunfold':'icon-less'"></i>
        </div>
        <h4 class="title_actors">演职人员</h4>
        <Swiper v-if="filmInfo.actors" class="actors">
            <div
                v-for="(data,index) in filmInfo.actors"
                :key="data.name"
                class="swiper-slide"
                 v-swiper="{
                    current:index,
                    length:filmInfo.actors.length,
                    swipe:'actors',
                    free:{
                        slidesPerView: 4,
                        spaceBetween: 10,
                        freeMode: true
                    }  
                }"
            >
                <img :src="data.avatarAddress" alt="" class="target-img">
            
                <span class="actors-name" >{{data.name}}</span>
                <span class="actors-role">{{data.role}}</span>
           
                
            </div>
        </Swiper>
           <div v-else class="uoactions">暂无演职人员</div>
           <div class="photos-bar">
         <h4 @click="isPhotoShow=true" class="photos-title-bar">剧照</h4>
     <span class="photos-to-all">全部({{filmInfo.photos.length}})
       <i class="iconfont">&#xe6a7;</i>
       </span>
     </div>
         <Swiper v-if="filmInfo.photos" cName="photos">
            <div
                v-for="(data,index) in filmInfo.photos"
                :key="data"
                class="swiper-slide"
                @click="previewImg(index)"
                v-swiper="{
                    current:index,
                    length:filmInfo.photos.length,
                    swipe:'photos',
                    free:{
                        slidesPerView: 2.4,
                        spaceBetween: 10,
                        freeMode: true
                    }   
                }"
            >
                <div>
                    <img :src="data" alt="" >
                </div>
               
            </div>
        </Swiper>
         <div v-else class="empty-text">暂无剧照</div>

        <Photo v-show="isPhotoShow" :list="filmInfo.photos" @event="previewImg"> 
            <m-title  @back="handlePhoto">
                剧照 ({{filmInfo.photos && filmInfo.photos.length}})
            </m-title>
        </Photo>
    </div>
</template>

<script>
import {instance} from "@/utils/http"
import Swiper from "@/components/Swiper"
import Photo from "./detail/Photo"
// import Title from "@/components/Title"
import Vue from 'vue';
import { ImagePreview} from 'vant';
Vue.use(ImagePreview);


export default {
    props:["id"],
    data(){
        return{
            filmInfo:null,
            isActive:true,
            isPhotoShow:false
        }
    },

    components:{
        Swiper,
        Photo
        
    },
  
    methods: {
        previewImg(index){
            ImagePreview({
                images:this.filmInfo.photos,
                closeable: true,
                startPosition:index,
                closeIconPosition:"top-left"
            });
        },
        handlePhoto(){
            this.isPhotoShow=false
        },
        handleBack(){
            this.$router.back()
        }
    },
    created(){
        instance.get(`/gateway?filmId=${this.id}&k=6261057`,{
            headers:{
                'X-Host': 'mall.film-ticket.film.info'
            }
        }).then(res=>{
            console.log(res.data.data.film);
            
            this.filmInfo=res.data.data.film;
        })
    }
}
</script>

<style lang="scss" scoped>
     img{
        width:100%;
       
    }
    
    .filmInfo-con{
        padding:.12rem .15rem .15rem;
        position: relative;
        .film-title{
            color: #191a1b;
            font-size: 18px;
        }
        .grade{
            position: absolute;
            right:20px;
            top:20px;
            color: #ffb232;
            font-size: 20px;
        }
        i{
            position: absolute;
            left:50%;
            transform: translateX(-50%);
        }
        .synopsis{
            height: 40px;
            overflow: hidden;transition: height 1s;
        }
        .a{
            min-height: 40px;;
        }
    }
    .photos{
        margin-bottom: 100px;
    }
    
    .title_actors{
        width: 3.75rem;
        height: 0.525rem;
        padding: 15px;
        background: #ffffff;
        color: #191a1b;
      
    }
    .uoactions{
        width: 3.75rem;
        height: 1.4rem;
        background: #ffffff;
      
        font-size: 14px;
    color: #bdc0c5;
    margin: auto;
    text-align: center;
    line-height: 1.4rem;
    }
    .photos-title-bar{
width: 3.75rem;
height: 0.62rem;
  padding: 15px;
  background: #ffffff;
  color: #2c3e50;
  float: left;
    }
    
    .empty-text{
        width: 3.75rem;
        height: 1.15rem;
        background: #ffffff;
         margin: auto;
    text-align: center;
    line-height: 1.15rem;
    }
    .actors {
     .target-img{
         width:0.86rem;
         height: 1.19rem;
     }
    }
   
    .actors-name{
     width: 0.85rem;
      height: 0.28rem;
      margin-top: 8px;
     text-align: center;
     display: block;
    color: #191a1b;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    
    }
      .actors-role{
    width: 0.85rem;
    height: 0.18rem;
    color: #797d82;
    text-align: center;
    display: block;

       }
       .photos-bar{
           width: 3.75rem;
           height: 0.62rem;
           background: pink;
           

           .photos-to-all{
        float: right;
        margin-top: -44px;
        margin-right: 10px;
        font-size: 13px;
         color: #797d82;
    }
       }
       
</style>
