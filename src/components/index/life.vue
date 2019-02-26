<template>
  <div class="m-life">
    <el-row>
      <el-col :span="24">
        <ul class="nav">
          <li>
            <router-link class="takeout" to="/">美团外卖</router-link>
          </li>
          <li>
            <router-link to="/">猫眼电影</router-link>
          </li>
          <li>
            <router-link to="/">美团酒店</router-link>
          </li>
          <li>
            <router-link class="apartment" to="/">民宿／公寓</router-link>
          </li>
          <li>
            <router-link class="business" to="/">商家入驻</router-link>
          </li>
          <li>
            <router-link to="/">美团公益</router-link>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="14">
        <slider/>
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-login">
          <h4>
            <img src="https://s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt>
          </h4>
          <p class="m-life-login-name">Hi！你好</p>
            <el-button round v-if="!$store.state.userName">注册</el-button>
            <el-button round v-if="!$store.state.userName">立即登陆</el-button>
          <span>{{$store.state.userName}}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="m-life-hotel"></div>
      </el-col>
      <el-col :span="7">
        <div class="m-life-music"></div>
      </el-col>
      <el-col :span="4">
        <div class="m-life-coop"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt>
          <p>美团APP手机版</p>
          <p class="last-p">
            <span>1元起</span>
            <em>吃喝玩乐</em>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Slider from "@/components/index/slider";
export default {
  components: {
    Slider
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/life.scss";
</style>