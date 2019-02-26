<template>
  <div class="page-login">
    <header class="login-header">
      <a class="logo" href="http://www.meituan.com">美团网</a>
    </header>
    <div class="login-panel">
      <div class="banner">
        <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt>
      </div>
      <div class="form">
        <div class="tips" v-if="error">
            <i class="el-icon-warning"/>{{error}}
        </div>
        <span class="signup-guide">账号登陆</span>
        <el-input placeholder="手机/用户名/邮箱" prefix-icon="profile" v-model="userName"></el-input>
        <el-input type="password" placeholder="密码" prefix-icon="password" v-model="password"></el-input>
        <span class="foot">
          <a href="#">忘记密码？</a>
        </span>
        <el-button type="primary" class="btn-login" @click="submitForm">登陆</el-button>
        <p class="signup-guide">
          <span>还没有账号？</span>
          <router-link :to="{name: 'register'}">免费注册</router-link>
        </p>

        <div class="oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="oauth">
            <a
              class="oauth__link"
              href="#"
            ></a>
            <a
              class="oauth__link oauth__link--weibo"
              href="#"
              
            ></a>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <ul>
        <li>
          <a href="#">关于美团</a>
        </li>
        <li>
          <a href="#">加入我们</a>
        </li>
        <li>
          <a href="#">商家入驻</a>
        </li>
        <li>
          <a href="#">帮助中心</a>
        </li>
        <li>
          <a href="#">美团手机版</a>
        </li>
      </ul>
      <p>©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </footer>
  </div>
</template>
<script>
import api from '@/api/index.js';
export default {
  data() {
    return {
      userName: "",
      password: "",
      error: ''
    };
  },
  methods: {
      submitForm() {
          api.submitLoginForm({
              params: {
                  userName: this.userName,
                  password: this.password
              }
          }).then(res => {
              console.log(res);
              if(res.data.status == 'success') {
                  this.$store.commit('setUserName', this.userName);
                  this.$router.push({name: 'index'});
              }else {
                  this.error = res.data.msg;
              }
          })
      }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>