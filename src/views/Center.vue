<template>
    <div class="center">
        这里是用户中心...
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

<style>

</style>
