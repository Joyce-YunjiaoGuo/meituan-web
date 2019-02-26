<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location position"></i>
      <span class="m-user">{{$store.state.position.name}}</span>
      <router-link class="changeCity" :to="{name: 'changecity'}">切换城市</router-link>[
      <a class="city" href="#" v-for="item in $store.state.position.nearCity" :key="item.id"> {{item.name}}</a>]
    </div>
    <div class="m-user" v-if="!$store.state.userName">
      <router-link class="login" to="/login">立即登陆</router-link>
      <router-link class="register" to="/register">注册</router-link>
    </div>
  </div>
</template>
<script>

export default {
 
};
</script>
