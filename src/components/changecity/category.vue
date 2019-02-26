<template>
  <div>
    <dl class="m-categroy">
      <dt>按拼音首字母选择:</dt>
      <dd v-for="item in alph" :key="item">
        <a href="'#city${item}'">{{item}}</a>
      </dd>
    </dl>
    <dl class="m-categroy-section" v-for="(item, index) in newCities" :key="index">
      <dt>{{index}}</dt>
      <dd v-for="city in item" :key="city.id" @click="changeCity(city)">
          <span>{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>
<script>
import api from '@/api/index.js';
export default {
  data() {
    return {
      alph: "abcdefghijklmnopqstuvwxyz".split(""),
      newCities: {}
    };
  },
  created() {
      api.getCityList().then(res => {
        var obj = {};
        res.data.data.forEach(ele => {
          if(!obj[ele.firstChar.toUpperCase()]) {
              obj[ele.firstChar.toUpperCase()] = [];
          }
          obj[ele.firstChar.toUpperCase()].push(ele);
        })
        this.newCities = obj;
    })
    
  },
  methods: {
    changeCity(city) {
      this.$store.dispatch('setPosition', city);
      this.$router.push({name: 'index'})
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>