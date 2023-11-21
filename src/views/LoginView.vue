<script setup lang="ts">

import {ref} from "vue";
import axios from "axios";
import router from "@/router";
const domain ='https://volcano621.fun/';
const username = ref("");
const psw = ref("");
async function handleLogin(){
  const data = {
    username,
    psw
  }
  const res = await axios.post(domain+"/api/user",data);
  const token = res.data.token;
  if(token){
    localStorage.setItem("token",token);
    alert("登录成功！");
    router.push("/list");
  }
  else{
    alert("无权限！");
  }
}

</script>

<template>
  <div class="main">
    <div class="center">
      <div class="content">
        <div class="title">登录</div>
        <el-input class="username" type="text" placeholder="请输入用户名" v-model="username"></el-input>
        <el-input class="psw" type="password" placeholder="请输入密码" v-model="psw" show-password></el-input>
        <el-button type="primary" @click="handleLogin" >提交</el-button>
      </div>
    
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .main {
    width: 100vw;
    height: 100vh;
    display: flex;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
    >.center{
      background-color: white;
      height: 355px;
      width: 347px;
      display: flex;
      justify-content: center;
      box-shadow: 0 0 16px 6px rgba(0,0,0,0.5);

      >.content{
        width: 70%;
        display: grid;
        place-items: center;
        >.title{
          font-size: 20px;
          margin-top: 30px;
        }

      }
      
    }
  }
</style>
