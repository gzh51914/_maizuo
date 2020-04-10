<template>
  <div class="cinemaDetail" v-if="cinemaInfo">
    <m-title @back="handleBack">
    </m-title>
    <div class="detail">
      <div>{{cinemaInfo.name}}</div>
      <ul>
        <li v-for="(item, index) in cinemaInfo.services" :key="index">{{item.name}}</li>
        <li>></li>
      </ul>
      <div class="address">{{cinemaInfo.address}}</div>
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
                    loop: true,
                }  
            }"
        >
            <img :src="data.poster" alt="">
        </div>
      </Swiper>
      </div>
      
    </div>
  </div>
</template>

<script>
import {instance} from "@/utils/http"
import Swiper from "@/components/Swiper"
export default {
  props:["id"],
  data(){
    return{
      cinemaInfo:null,
      films:[],
    }
  },
  components:{
        Swiper,  
  },
  methods: {
      handleBack(){
            this.$router.back()
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
          this.films.push(res.data.data.films[0])
          this.films.push(res.data.data.films[0])
          this.films.push(res.data.data.films[0])
          this.films.push(res.data.data.films[0])
      })
  }
}
</script>

<style lang="scss" scoped>
.cinemaDetail{
  padding-top: .44rem;
  img{
    width:.9rem;
    height: 100%;
    // filter: blur(10px);
  }
  .swiper-films{
    width: 100%;
    height: 1.6rem;
    padding: .15rem 0;
    background: #ccc;
  }
}
</style>