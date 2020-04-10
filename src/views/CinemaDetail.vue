<template>
  <div class="cinemaDetail" v-if="cinemaInfo&&films.length>0">
    <m-title @back="handleBack">
    </m-title>
    <div class="content">
      <div class="title">{{cinemaInfo.name}}</div>
      <ul class="tag">
        <li v-for="(item, index) in cinemaInfo.services" :key="index">{{item.name}}</li>
        <li>></li>
      </ul>
      <div class="address">
        <img src="data:image/png;base64,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" alt="">
        <p>{{cinemaInfo.address}}</p>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA2CAMAAABdslGrAAACJVBMVEVHcEwhISEzMzMZHBwZMzMZGhsZGxsZGhsZGhv///8ZGxsbGxsfHx8kJCQaGh0bGxsZGhsZJiYqKioaGhwZHR0ZGhsZGhsZGxsZGhsaGh5VVVV/f38ZGhscHBwZGhsZGhsaGigZGhsZGhwZGhsZGhsaGh8ZGhsaGhsbGxsaGhsaGhsZHBwaGh0fHx8nJycZGhwZGxscHBwZGxsZGhscHBwbGxsZGxsaGhsaGhscHBwaGiAZGxsaGhsaGhwZHBwZGxsaGh4ZGhsZGhsZGhsZGxsZGhscHBwZGhsaGhwdHR0fHx8ZGhwZGxsZGhwkJCQaGiMZGhsZGhsbGxsdHR0ZGhsbGxsaGhsaGhsaGhsZGxscHBwbGxsZGxsZGhwZHx8ZGxsaGhseHh4aGh0cHBwbGxsZHh4bGxsaGhsZGhweHh4ZGxsZGxsZGhsZHh4ZGxsaGhseHh4cHBw/Pz8ZGhsfHx8ZGxsZGxsZGhsaGh0ZGxsZGhwcHBwaGhsaGhwbGxsZGhwZGhwZGxsZGhsZGhwZGxsaGhsiIiIZGhsZGhscHBwZHBwaGhwqKioZGhwZGhsaGh8ZIiIaGhseHh4ZGxsaGhwbGxsbGxsZGxsZGxsZGhsaGh8ZGhwaGh0ZGhsZGhsZGxsZGhwaGh0aGhwZHBwaGhwbGxsZGxsaGh0ZGxsbGxsfHx8eHh4ZGhsdHR0ZGhsbGxsZGhsZGhsZHR0ZGhsZGhwaGhwZGhuqFRxRAAAAtnRSTlMAFwVZCvqy/v0Bl2cQB2kl5RQGYT3M+NnKQwMC8iTq8BP7vfbtMO65QsOldk4gDceDPs75G16zkq4SJ52TiFtuTOfd5Kr3CfR/Iwi1oNoVHfPWcTS3L5u6nLtISWW/KHfrImg/SjNBxLQqlajUO8bXITUE6RiEje9Wiq029WpA45mx0qNvpBbByy1kYgyr5jkerxGMkS43eGbbMch78dWe0V+FbHxUgXJ5XCkZ4CvJOOj8RdOYkJ3guaYAAAJ3SURBVBgZvcEFcxNRAEbRr22S3dTd3XApLoVCi7u7u7u7u7u7u97fR5NNCkM2vGWY4Rz9m025DUH9jQHJmUC7Ennma7QIS5JXqT1o5c+EU/LoXDcgryg7qwZy5c04sJcEJR2Cy/KkzoYchSywsEfLiwAMk2MsNMqDtBqsMjmKYGSqzJbCV0U9goUyS4dvinoMLYkySofvisoeCoNltASS1eYe5MloGXxQm8oaWCqT1CrsCWqTDIdlNB9y1GaAhZ0hk5fQTz/1gd0yKYORYxTVqwOsktFkWKaInFIgSUaDYKAc6y2wO8nsBgyfoLDNwDx5cRdeyLEHugXlwXNYNEJhXYZDb3lQ3AzpcnSHC1fkwVMYX6Iw30EYG5SZrxZuyTHEglHy4BnUn5DjCdhzZZY2Ho7KUTIT6hfIrAhoL0flO/j0XmbHoSBNjuWlsKhORgk7oa8iPlZA/VSFrBjVOah4UoCzilheC5NeS4kzgHYJimct9LyoiOnlwLj+AUK2zlEcvh4wtJci3kwG9gErbbB2ZMvdpXIoHKEI30NCktU+E8jLkLsGP5zsqqjBpTCtWMrqA0zqLXcpQGF/RWX0W+NTSFM+0LGrXB2z4EiCYkzfCDTvlaszNhRMVAzfLMDfKSg3SVVQPlexdlUAsxPkpnM+WFcTFaPLBmBdqtzktgCFoxVjy3Yb9stVZQC4n1KsGB0gXXE05QMPhug3ddBzm+K5U0Cr+VP1q8RqGKj4xtysAKxhB4KKCnYEa7X+JOuan1a3X71V2OKZwBQZlJ0n5HNg3pc5KQE/MEhmp/vW8lNVd3mSllRtEWZVX5dnixfOmj1txpSJ+t9+AAZEC6aFGvT2AAAAAElFTkSuQmCC" alt="">
      </div>
      <div class="swiper-films">
        <Swiper cName="films">
          <div
              v-for="(data,index) in films"
              :key="index"
              class="swiper-slide"
              v-swiper="{
                  current:index,
                  length:films.length,
                  swipe:'films',
                  free:{
                      slidesPerView: 3,
                      spaceBetween: 30,
                      centeredSlides: true,
                      on: {
                        slideChangeTransitionStart: function(){
                          nowItem=this.activeIndex;
                        }
                      }
                  },
              }"
          >
              <img :src="data.poster" alt="">
          </div>
        </Swiper>
        <div id="jt">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUAgMAAACCKJcoAAAACVBMVEVHcEz////////mcEUwAAAAAnRSTlMAgJsrThgAAABLSURBVAgdBcEBDQAACAMg/GYDAxnB/mkEUAuBPgjMQOAagtpaBM0hGAbB0Qi11BIajjAwhIMmaqFWNHBigBEHtNQCtWmAywBMDqAfx4oGipkmrUEAAAAASUVORK5CYII=" alt="">
        </div>
        <div class="bg">
          <img :src="films[nowItem].poster" alt="">
        </div>
      </div>
      <div class="detail" @click="goToDetail(films[nowItem].filmId)">
        <div>
          <span>{{films[nowItem].name}}</span>
          <span>{{films[nowItem].grade}}</span>
          <span>分</span>
        </div>
        <div>{{films[nowItem].category}} | {{films[nowItem].runtime}}分钟 | {{films[nowItem].director}} | {{actors.join(" ")}}</div>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAMAAAD57OxYAAAAZlBMVEVHcEwZGhseHh4aGh8zMzMZGhsZGhwZGhsfHx8ZGhsbGxsZGhsZGxsZGxsZGxsZGxsbGxsaGhsaGh0aGh0ZGhwbGxsZGhweHh4ZGhsaGh0ZGxsZGxsZGxsZGhsZGxsZGxsaGhwZGhtuA7MxAAAAIXRSTlMA6iE5Bda99xD+OOWenXh6VddWV9BxviLpe7x5jeSBgI/e7hU0AAAAeUlEQVQY023PyRqCMAyFUSilA2VGnBX/939JN01QP7O6Z5ObFGt6FjoPuCjuEBeBvYKvRKGG8iQyZ5iCqPFwtKIxQqsre2BQdV8F7rfgoJh2WAe+yWghjjkPQJ/zHKHLufLg8jmmhDp8vGD+LH1BnKU6wU3vXdOm+Q34ngmHHMc+eAAAAABJRU5ErkJggg==" alt="">
      </div>
      <div class="showData">
        <ul>
          <li v-for="(item,index) in time" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="paipian">
        <img src="data:image/png;base64,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" alt="">
        <p>暂无场次</p>
      </div>
    </div>
  </div>
</template>

<script>
import {instance} from "@/utils/http"
import Swiper from "@/components/Swiper"
import {mapMutations} from "vuex"
export default {
  props:["id"],
  data(){
    return{
      cinemaInfo:null,  //该影院详细信息
      films:[], //该影院所有的影片
      nowItem:0 //当前选中的影片的索引
    }
  },
  computed: {
    actors(){   //提取演员名字信息
      if(this.films.length>0){
         return this.films[this.nowItem].actors.map(item=>{
          return item.name
        })
      }
     return ""
    },
    time(){ //提取上映日期
      if(this.films.length>0){
        return this.films[this.nowItem].showDate.map(item => this.getTime(item))
      }
     return []
    }
  },
  components:{
        Swiper,  
  },
  methods: {
    ...mapMutations("tabbar",["hide","show"]),
      handleBack(){
            this.$router.back()
            // console.log(this.nowItem);
      },
      getTime(time){  //将时间搓转换为具体日期格式
        let arr=["周日","周一","周二","周三","周四","周五","周六"]
        let timer=new Date(time*1000)
        return arr[timer.getDay()]+(timer.getMonth()+1)+"月"+timer.getDate()+"日"
      },
      goToDetail(id){
        this.$router.push("/detail/"+id)
      }
  },
  created(){
      instance.get(`/gateway/?cinemaId=${this.id}&k=115329`,{
          headers:{
              'X-Host': 'mall.film-ticket.cinema.info'
          }
      }).then(res=>{
          console.log(res.data.data.cinema);
          
          this.cinemaInfo=res.data.data.cinema;
      })
      instance.get(`/gateway/?cinemaId=${this.id}&k=1793937`,{
          headers:{
              'X-Host': 'mall.film-ticket.film.cinema-show-film'
          }
      }).then(res=>{
          console.log(res.data.data.films);
          this.films=res.data.data.films
      })
  },
  mounted() {
    this.hide()
  },
  destroyed() {
    this.show()
  },
}
</script>

<style lang="scss" scoped>
.cinemaDetail{
  text-align: center;
  padding-top: .44rem;
  .title{
    height: .44rem;
    font-size: .17rem;
    line-height: .44rem;
  }
  ul.tag{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .05rem 0 .15rem;
    li{
      padding: 0 .06rem;
      margin: 0 .025rem;
      font-size: .1rem;
      color: #ffb232;
      border: .001rem solid #ffb232;
      &:last-child{
        border: none;
      }
    }
  }
  .address{
    height: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: .14rem;
      height: .21rem;
      &:last-child{
        margin-left:.25rem;
      }
    }
    p{
      width: 2.77rem;
      height: .2rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 0 .12rem;
    }
  }
  .swiper-slide img{
    height: 1.3rem;
    display: inline-block;
  }
  .swiper-films{
    width: 100%;
    height: 1.60rem;
    padding: .15rem 0;
    position: relative;
    .films{
      position: relative;
    }
    .bg{
      width: 100%;
      height: 1.6rem;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      z-index: -1;
      img{
        width: 100%;
        filter: blur(50px);
      }
    }
  }
  #jt img{
    width: .2rem;
    height: .1rem;
    margin: .02rem auto;
  }
  .detail{
    height: .8rem;
    padding: .15rem 0;
    position: relative;
    border-bottom: .001rem solid #ccc;
    div:first-child{
      margin-bottom: .1rem;
      span:first-child{
        font-size: .15rem;
        color: #191a1b;
        padding-right: .1rem;
      }
      span:nth-child(2){
        color: #ffb232;
        font-size: .16rem;
        font-style: italic;
      }
      span:last-child{
        color: #ffb232;
        font-size: .1rem;
      }
    }
    div:last-of-type{
      padding: 0 .45rem;
      font-size: .13rem;
      color: #797d82;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    img{
      height: .08rem;
      width: .04rem;
      position: absolute;
      top: .36rem;
      right: .15rem;
    }
  }
  .showData{
    height: .5rem;
    align-items: center;
    ul{
    display: flex;

      li{
        height: .5rem;
        color: #ff5f16;
        margin: 0 .15rem;
        line-height: .5rem;
        border-bottom: .02rem solid #ff5f16;
      }
    }
  }
  .paipian{
    height: 1.8rem;
    padding-top: .4rem;
    img{
      width: .7rem;
      height: .7rem;
      margin: 0 auto;
    }
    p{
      margin-top: .11rem;
      text-align: center;
      font-size: .14rem;
      color: #bdc0c5;
    }
  }
}
</style>