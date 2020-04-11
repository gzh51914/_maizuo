<template>
  <div class="nowplaying">
    <ul>
      <router-link
        v-for="data in datalist"
        :key="data.filmId"
        :to="{
                    name:'detail',
                    params:{id:data.filmId},
                }"
        tag="li"
      >
        <img :src="data.poster" alt />
        <div class="info">
          <h4 class="name">
            {{data.name}}
            <span class="item"> {{data.filmType.name}}</span>
          </h4>

          <p>
            观众评分：
            <span class="grade">{{data.grade}}</span>
          </p>
          <p class="actors">主演：{{data.actors | actorFilter}}</p>
          <span class="address">{{data.nation}} | {{data.runtime}}</span>
        </div>
        <span class="Tickets">购票</span>
      </router-link>
    </ul>
   
  </div>
</template>

<script>
import { instance } from "@/utils/http";
import { mapState } from "vuex";
export default {
  data() {
    return {
      datalist: []
    };
  },
  computed: {
    ...mapState("city", ["cityId"])
  },
  methods: {
    toDetail(id) {}
  },
  created() {
    instance
      .get(
        `/gateway?cityId=${this.cityId}&pageNum=1&pageSize=10&type=1&k=8000539`,
        {
          headers: {
            "X-Host": "mall.film-ticket.film.list"
          }
        }
      )
      .then(res => {
        this.datalist = res.data.data.films;
      });
  }
};
</script>

<style lang="scss" scoped>
li {
  overflow: hidden;
  padding: 15px;
  position: relative;
  img {
    float: left;
    width: 0.66rem;
    height: 0.92rem;
    border-radius: 0.05rem;
  }
  .info {
    height: 0.78rem;
    width: 2.28rem;
    margin: 0.08rem;
    float: left;
  }
  .grade {
    color: orange;
  }
  .name {
    font-size: 0.16rem;
    height: .2rem;
    line-height: .2rem;
    .item {
      height: 0.16rem;
      width: 0.14rem;
      line-height: .16rem;
      display: inline-block;
      font-size: .1rem;
      background-color: gray;
      color: white;
      text-align: center;
    
    }
  }
  .address {
    margin: 4px 0 0 0;
  }
  .actors {
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .Tickets {
    height: 0.25rem;
    width: 0.5rem;
    display: block;
    border: 0.01rem solid #ff5f16;
    z-index: 100;
    position: absolute;
    top: 38px;
    right: 18px;
    text-align: center;
    border-radius: 0.02rem;
    color: #ff5f16;
  }
}

</style>
