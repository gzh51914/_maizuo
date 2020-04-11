<template>
    <div class="center">
       <div class="center-view">
           <div class="avator">
       <img src="./../assets/1.png"   class="avator-icon">
      <div class="nick-name">立即登录</div>
           </div>
           <ul class="my-order-tab">
           <li><i class="iconfont">&#xe724;</i>
           <span>电影订单</span>
        </li>
             <li><i class="iconfont" >&#xe6c4;</i>
           <span>商品订单</span>
        </li>
       </ul>
      <div class="margin-set my-card">
          <i class="iconfont">&#xe724;</i>
          <span>卖座劵  </span>
              <i class="iconfont">&#xe6a7;</i>
            
      </div>
 <div class="margin-set my-card">
     <i class="iconfont">&#xe744;</i>
      <span>组合红包</span>
      <i class="iconfont">&#xe6a7;</i>
 </div>
  <div class="margin-set my-balace">
       <i class="iconfont">&#xe758;</i>
        <span>余额</span>
        <i class="iconfont">&#xe6a7;</i>
  </div>
   <div class="margin-set systen-set">
        <i class="iconfont">&#xe6a8;</i>
        <span>设置</span>
         <i class="iconfont">&#xe6a7;</i>
   </div>
       </div>
       
    </div>
</template>

<script>

export default {
    // 进入Center之前
    // beforeRouteEnter(to,from,next){
    //     console.log("Center---beforeRouteEnter...",this)
    //     next()
    // }, 

    // 从Center离开的时候
    // beforeRouteLeave(to,from,next){
    //     console.log("Center-beforeRouteLeave",this)
    //     next()
    // } ,



    //  beforeRouteEnter(to,from,next){
    //     if(localStorage.getItem("token")){//说明用户已经登录了
    //         next()
    //     }else{
    //         next("/login") //如果用户没有登录直接跳转到登录界面进行用户登录
    //     }
    // } 

}
</script>

<style lang="scss" scoped>
.center-view{
    width: 3.75rem;
    height: 4.85rem;
    background: #ffffff;


.avator{
    width: 3.75rem;
    height: 1.7rem;
    background: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png);
  padding: 64px 0px 0px 100px;

  color: #ffffff;
  background-size: cover;
   display: flex;

img{
   width: 0.63rem;
    height: 0.63rem;
    border-radius: 35px;
   margin-right:20px ;
    border: 2px solid #fff;
    margin: 6px 20px 0px -64px;
   }
   .nick-name{
       width: 0.64rem;
       height: 0.24rem;
     margin-top: 23px;
     font-size: 16px;

   }

}  
.my-order-tab{
    width: 3.75rem;
    height: 0.79rem;
    background: #fff;
    margin-bottom: 10px;
    display: flex;
text-align: center;
    font-size: 14px;
    align-items: center;
   margin-bottom: 10px;

li{

//    margin-left: 70px;
   flex: 1;
   display: flex;
     flex-direction: column;
    span{
        margin-top: 10px;
            color: #797d82;
    }
  
}
}
.margin-set{
    width: 3.75rem;
    height: 0.49rem;
    border-bottom: 1px solid #ededed;
 padding-top: 10px;
 padding-left: 10px;


  span{
      width: 3.04rem;
      height: 0.22rem;
padding-left: 10px;
text-align: center;
font-size: 15px;
    color: #191a1b;
    margin-right: 255px;
    flex: 1;
// background: yellowgreen;
  }
}



}
</style>
