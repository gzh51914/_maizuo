<template>
    <div class="cinema">
        <div class="title">
            <div class="left" @click="handleChangePage('/City')">{{cityName}}</div>
            <div>影院</div>
            <div class="right" @click="handleChangePage('/cinema/search')"><i class="iconfont icon-search"></i></div>
        </div>
        <div class="select">
            <div 
                class="left" 
                @click="isAreaShow=!isAreaShow"
                :class="isAreaShow?'active':''"
            >
                {{current}}
            </div>
            <div>订票</div>
            <div class="right">最近去过</div>
        </div>

        <div class="area" v-show="isAreaShow">
            <ul>
                <li 
                    v-for="data in areaList" 
                    :key="data"
                    @click="handleArea(data)"
                    :class="{active:current===data}"
                >
                    {{data}}
                </li>
            </ul>
        </div>
        <div class="content" :style="{overflow:'hidden',height:scrollHeight}">
            <ul>
                <CinemaItem
                    v-for="data in computedDatalist"
                    :key="data.cinemaId"
                    :data="data"
                    @click.native="clickme(data.cinemaId)"
                ></CinemaItem>
            </ul>
        </div>
    </div>
</template>

<script>
import {instance} from '@/utils/http'
import CinemaItem from "./Cinema/CinemaItem"
import {mapState,mapActions,mapMutations} from "vuex"
import BScroll from 'better-scroll'
import Vue from 'vue'
import {Toast} from 'vant'
Vue.use(Toast)

export default {
    components:{
        CinemaItem
    },
    data() {
        return {
            isAreaShow:false,
            current:'全城',
            scrollHeight:0
        }
    },
    methods: {
         ...mapActions("cinema",["getCinemaActions"]),
         ...mapMutations("cinema",["setCinemaList"]),
        handleArea(data){
            this.current=data
            this.isAreaShow=false
        },
        handleChangePage(path){
            if(path=="/City"){
               this.setCinemaList([])
            }
            this.$router.push(path)
        },
        clickme(id){
            this.$router.push("/cinemaDetail/"+id)
        }
    },
    created() {
        const toast = Toast.loading({
            message: '加载中...',
            duration:0,
            overlay:true    
        });
        if(this.cinemaList.length > 0 ){
            // console.log("直接使用缓存vuex的数据...")
             toast.clear()
        }else{
            this.getCinemaActions(this.cityId).then(res=>{
                toast.clear()
            })
        }
    },
    computed: {
        ...mapState("cinema",["cinemaList"]),
        ...mapState("city",["cityName","cityId"]),
        areaList(){
            // console.log(this.cinemaList);
           return ['全城',...new Set(this.cinemaList.map(item=>item.districtName))]
        },
        computedDatalist(){
            if(this.current==='全城')
                return  this.cinemaList
            return this.cinemaList.filter(item=>item.districtName===this.current)
        }
    },
    mounted() {
        this.scrollHeight=document.documentElement.clientHeight-80-50+'px'
        let scroll = new BScroll('.content',{
            scrollbar: {
                fade: true,
            },
            click:true,//允许被触发点击事件
        })
    },
}
</script>

<style lang="scss" scoped>
    .active{
        border:1px solid orange!important;
        color:orange;
    }
    .title{
        display: flex;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        background: #fff;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        border-bottom: 1px solid #f5f5f5;
        z-index:10;
        div{
            flex:1;
            text-align: center;
        }
        .left{
            text-align: left
        }
        .right{
            text-align: right
        }
    }
    .select{
        position: fixed;
        top: 40px;
        height: 40px;
        line-height: 40px;
        background: #fff;
        width: 100%;
        display: flex;
        border-bottom: 1px solid #f5f5f5;
        z-index:10;
        div{
            flex:1;
            text-align: center;
        }
    }
    .area{
        position: fixed;
        top: 80px;
        left: 0px;
        width: 100%;
        z-index: 10;
        background: #fff;
        ul{
            display: flex;  
            flex-wrap: wrap;
            li{
                width:22%;
                padding: 5px;
                border:1px solid #f4f4f4;
                text-align: center;
                margin:5px;
            }
        }
    }
    .content{
        position: relative;
        top: 80px;
        li{
            padding:.15rem;
            border-bottom: 1px solid #f5f5f5;
        }
    }
</style>
