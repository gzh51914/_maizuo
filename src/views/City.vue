<template>
  <div class="city">
    <van-index-bar :index-list="indexList">
            <div
                v-for="(data,index) in dataList"
                :key="index"
            >
                <van-index-anchor :index="data.index" />
                <van-cell @click="handleClick(item)" :key="index" v-for="(item,index) in data.list"  :title="item.name" />
            </div>
        </van-index-bar>
  </div>
</template>
<script>
import Vue from 'vue'
import {IndexBar, IndexAnchor,Cell} from 'vant'
import {mapMutations} from 'vuex'
Vue.use(IndexBar).use(IndexAnchor).use(Cell)

import {instance} from '@/utils/http'
export default {
  data(){
    return {
      dataList:[],
      indexList:[]
    }
  },
  created() {
     instance("/gateway?k=6077446",{
          headers:{
              'X-Host': 'mall.film-ticket.city.list'
          }
      }).then(res=>{
        this.dataFilter(res.data.data.cities)
      })
  },
  methods: {
    ...mapMutations("city",["setCityName","setCityId"]),
    ...mapMutations("tabbar",["show","hide"]),
    handleClick(item){
      this.setCityName(item.name)
      this.setCityId(item.cityId)
      // this.$router.push("/cinema")
      this.$router.back()
    },
    dataFilter(cities){
        let letterArr = []
        for(var i=65;i<91;i++){
            letterArr.push(String.fromCharCode(i))
        }
        // console.log("letterArr",letterArr)

        //filtr 遍历26个字母，跟cities数据.pinyin.首字母.大写 进行过滤
        var cityArr = []
        for(var j=0;j<letterArr.length;j++){
            let tempArr = cities.filter(item=>item.pinyin.substring(0,1).toUpperCase() === letterArr[j])
            if(tempArr.length>0){ //如果cities里面pinyin里面有大写字母
                cityArr.push({
                    index:letterArr[j],
                    list:tempArr  
                })
                //设置右侧自定义索引里面push22个英文字母
                this.indexList.push(letterArr[j])
            }
        }
        //给左侧遍历的数据赋值
        this.dataList = cityArr
    }
  },
   mounted() {
    this.hide()
  },
  destroyed() {
    this.show()
  }
  
}
</script>

<style lang="scss" scoped>
  
</style>