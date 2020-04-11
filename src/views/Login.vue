<template>
    <div class="login">
        <!-- <form @submit.prevent="login">
            <input type="text" v-model="username">
            <input type="text" v-model="password">
             <button type="submit">登录</button>
        </form> -->
        <div>
            <van-swipe class="my-swipe" initial-swipe='2' indicator-color="white">
                <van-swipe-item @click="$router.push('/')">1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
            </van-swipe>
        </div>
      <form @submit.prevent="login">
        <van-field v-model="username" label="用户:" placeholder=" 蔡伟超"/>
        <van-field v-model="password" type="password" label="密码：" placeholder=" 12345678" />
        <van-button type="primary">登录</van-button>
    </form>
    </div>
</template>

<script>
import {instance2} from "@/utils/http"
import { Button,Field,Dialog,Swipe, SwipeItem} from "vant"
import Vue from 'vue';

Vue.use(Button).use(Field).use(Swipe).use(SwipeItem)
export default {
    data(){
        return {
            username:"",
            password:"",
        }
    },
    methods:{
        login(){
            if(!this.username.trim() || !this.password.trim()){
                // alert("用户名或则密码不能为空！")
                Dialog({
                    message:"用户名或则密码不能为空！",
                    closeOnClickOverlay:true
                })
                return;
            }
            instance2.post("/api/login",{
                username:this.username,
                password:this.password
            }).then(res=>{
                console.log(res);
                localStorage.setItem('token',res.token)
                // 跳转到用户页面
                this.$router.replace("/Center")
                
            }).catch(err=>{
                // alert(err)
                 Dialog({
                    message:err,
                    closeOnClickOverlay:true
                })
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.login{
        padding: 10px;
        margin-top:1.46rem;
        button{
            width:100%;
            margin-top:10px;
        }
    }

    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }
</style>
