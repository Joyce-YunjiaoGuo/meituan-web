<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="https://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="input" placeholder="请输入内容" @focus="onFocus" @blur="onBlur" @input="inputSearchWords"></el-input>
          <dl class="hotPlace" v-if="isFocusing">
            <dt>热门搜索</dt>
            <div>
              <dd v-for="item in hotPlaceList" :key="item">
                <router-link :to="{name: 'product', params: {name : item}}">{{item}}</router-link>
              </dd>
            </div>
          </dl>
          <dl class="searchList" v-if="isSearching">
            <dd v-for="(item, index) in searchList" :key="index">
              <router-link :to="{name: 'product', params: {name : item}}">{{item}}</router-link>
            </dd>
          </dl>
          <el-button type="primary" icon="el-icon-search"></el-button>
        </div>
        <p class="suggest">
          <router-link :to="{name: 'product', params: {name : item}}" v-for="item in suggestList" :key="item">{{item}}</router-link>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  created() {
    api.getSearchHotWords().then(res => {
      this.hotPlaceList = res.data.data;
      this.suggestList = res.data.data;
    });
  },
  computed: {
    isSearching() {
      return this.focus && this.input;
    },
    isFocusing() {
      return this.focus && !this.input;
    }
  },
  data() {
    return {
      input: "",
      focus: false,
      hotPlaceList: [],
      searchList: [],
      suggestList: []
    };
  },
  methods: {
    inputSearchWords() {
      const val = this.input;
      api.getSearchWords().then(res => {
        this.searchList = res.data.data.list.filter(item => {
          return item.indexOf(val) > -1;
        })
      })
    },
    onFocus() {
      this.focus = true;
    },
    onBlur() {
      let self = this;
      setTimeout(() => {
        self.focus = false;
      }, 200);
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>