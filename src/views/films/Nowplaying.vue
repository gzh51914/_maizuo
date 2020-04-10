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
            <img :src="data.poster" alt="">
                <h4>{{data.name}}</h4>
                <p>观众评分：{{data.grade}}</p>
                <p class="actors">主演：{{data.actors | actorFilter}}</p>
            </router-link>
        </ul>
    </div>
</template>

<script>
import {instance} from "@/utils/http"
import {mapState} from "vuex"
export default {
    data(){
        return {
            datalist:[]
        } 
    },
    computed: {
        ...mapState("city",["cityId"])
    },
    methods:{    
        toDetail(id){
            //组件的$router上面提供了很多的跳转方法，把这些跳转的方式称之为编程式导航。
            // this.$router.push("/center")
            // this.$router.push(`/detail/${id}`)
        }
    },
    created() {
        instance.get(`/gateway?cityId=${this.cityId}&pageNum=1&pageSize=10&type=1&k=8000539`,{
            headers:{
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res=>{
            this.datalist=res.data.data.films
        })
    },
}
</script>

<style lang="scss" scoped>
 li{
        overflow: hidden;
        padding:5px;
        img{
            float:left;
            width:1rem;
        }
        .actors{
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
</style>
