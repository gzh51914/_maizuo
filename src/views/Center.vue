<template>
    <div class="center">
         <div class="center-view">
           <div class="avator">
       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAAQlBMVEXt7e3v7+/r6+v7+/v9/f309PT8/Pzq6ur////+/v729vbu7u7x8fH5+fnz8/P6+vr4+Pjs7Ozy8vL19fXw8PD39/c1tMDaAAAD/0lEQVR42u2a6ZKkKhCFARFZFBf0/V91eubebhGxSjKTmIoJz88uw/4kMw9LwtijR48ePXr06NGjR48ePfpH5XrfBrttNrTLevnUGkZljBpaXgGht6PUscxoF5d5rtkfGVZaBj8YnZNRNvnk6fi7pWNYpzzD96As+6O8SX8eqIIx6neS39/M1flHEo71PcQfEH9FoTU+Lm4z+qaa9YJCG2yeLlLfl5nUxS/IsGyaSBj/OCc9WC0iNzMBUVvbOzaL+ctO203dxoBHpT9RDAvrjmLLcA9DgSmSCjHt3OU0t3dKyUAjcny58aK7kvCmFgY/RsTO3SvNtlJQDsknefdO/I2/jCCKwyTZsO692OviDhCKNn7DJLo7EtMrDIib8zjl2u6u2hfTDWQwRhDFK44ess6KI9KV6CouE2QwoqRvRBGGaOhCEqJKzdQI/1oXGyNHm6tilqtbxZGDwc+GGRmKytg7p6KI8sym/ySd7cxy4rA0FJF/mvm9M5xMZTYkFP3+Bp/8g+zqQqWB8RQUkY0bcacKTsUkDAEFM1fG9bO+GXonBOt/NnHjtYlJKMWyv+M42uFnqvwpziGfyTN2Xv3SnujD8eX/10jIfLfsLsYNvOaKpuslhxFy468SjAU3sf7eo+2pkRjon6BsWZdIZz+G3hfs5Zp+YhekDGf39k3jT39U2H3BnuVbB9cWTUrIzWKLwIhKFoaxJ3mPwOixOboXikNguB1jQc5rDIERlYpnuLWGQGAIbMWafwljxmLIz8iND6mU8TN8Y6B2UY5cAtLMKdqBMML1DFsghZ3aoqgyikKBHgCaq9VXgRbk6cqhYgcwxoA7UEhOp2e8hxoHxPAaXbIt8kQhWRMb2LQS79qgqXE4A/QgjGg8DbxvEKW5gWRHvKMHb9qOpywWgBGfb3gERvweXkzBCY7r0yTNnn29NlBJ1uizmuYkUDoUhpM056KB4RQ0xSmxYlgpTXBm7tEYx/4WrINA0RC3GttPQeZnpocA6S6ZnoIibbUV99qo7mwsafuzqPM4MiqdXl3Qh6WjyHDc7kpTUjCW7Tb/16MXQlz36BtGK3/7AslhLBwxRuaywHttjF5uLIQwnlWRLQqMWlklrfdvtJjAKsrfzJDJsbqa7lz76itDMH5rOEJtCvVXi+S7aO9eZzI1w+IKKmWth1FyA03yWhRlNtpUqtmhdF77CArghREC26o/w8JuaVLbmAVRUNtYgF4NJbWxFn5FVdLZGGwd+r36obKPBUNBtjhHUhDZWI+lILGxFU9BsJlepaZQi6PgNBTaLCgKpYmEsTFHRoFZBTm66/4YGyOlANvYqIkFsrFBk2v6CAqAjU26igptbKtDUWhjVtfS1WbuF/MY5z0qnakpAAAAAElFTkSuQmCC"   class="avator-icon">
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
    //进入Center之前
    /* beforeRouteEnter(to,from,next){
        console.log("Center---beforeRouteEnter...",this)
        next()
    }, */

    //从Center离开的时候
    /* beforeRouteLeave(to,from,next){
        console.log("Center-beforeRouteLeave",this)
        next()
    } */



    /* beforeRouteEnter(to,from,next){
        if(localStorage.getItem("token")){//说明用户已经登录了
            next()
        }else{
            next("/login") //如果用户没有登录直接跳转到登录界面进行用户登录
        }
    } */

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
