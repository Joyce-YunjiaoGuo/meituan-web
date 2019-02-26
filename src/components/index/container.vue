<template>
  <div class="m-istyle">
    <dl :class="titleType.eng" >
      <dt>{{titleType.text}}</dt>
      <dd @mouseover="onMouseOver" :data-type="item.eng" :class="{'active': type == item.eng }" v-for="(item, index) in titleType.label" :key="index">{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li  v-for="(item, index) in list[type]" :key="index">
        <el-card shadow="never" :body-style="{ padding: '0px' }">
          <img :src="item.image" class="image">
          <ul>
            <li class="cbody">
              <div class="title" title="item.title">{{item.title}}</div>
              <div class="sub-title" title="item.title">{{item.subTitle}}</div>
              <div class="price-info">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
                <span>{{item.address}}</span>
              </div>
            </li>
          </ul>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '@/api/index.js';
export default {
    created() {
        api.getResultsByKeywords().then(res=> {
            this.list = res.data.data;
        })
    },
    props: ['titleType'],
    data() {
        return {
            type: 'all',
            list: {}
        }
    },
    methods: {
        onMouseOver(e) {
            this.type = e.target.dataset.type;
        }
    }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>