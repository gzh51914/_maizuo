import {instance} from '@/utils/http'
const module={
  namespaced:true,
  state:{
    cinemaList:[]
  },
  getters:{
    topDataList(state){
      return state.cinemaList.slice(0,5)
    }
  },
  actions:{
    getCinemaActions(store,id){
      instance.get(`/gateway?cityId=${id}&ticketFlag=1&k=212490`,{
        headers:{
            'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res=>{
        store.commit("setCinemaList",res.data.data.cinemas)
      })
    }
  },
  mutations:{
    setCinemaList(state,data){
      state.cinemaList=data
    }
  }
}
export default module