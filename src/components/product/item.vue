<template>
  <div>
    <dl class="s-item">
      <dt>
        <img :src="item.image" alt>
      </dt>
      <dd>
        <h3>{{item.title}}</h3>
        <p>
          <el-rate v-model="item.score"></el-rate>
          <span v-if="item.score >4.5">很好</span>
          <span v-else-if="item.score > 4">好</span>
          <span v-else-if="item.score > 3.5">一般</span>
          <span v-else>太差了</span>
          <span>{{item.score}}分</span>
          <span class="s-item-comment-total">{{item.commentNum}}人评分</span>
        </p>
        <p>
            <span>
                <span v-for="(t, i) in item.tab" :key="i">{{t + (i == item.tab.length-1 ? '' : '|')}}</span>
            </span>
            <span>{{item.address}}</span>
            <span class="s-address">
                <i class="el-icon-location"></i>
                查看地图
            </span>
        </p>
        <p>
            <span>人均{{item.avgPrice}}元</span>
        </p>
        <ul class="deal-items">
            <li class="items" v-for="i in item.dealItems" :key="i.title">
                <p class="deal-title">{{i.title}}</p>
                <p>
                    <span class="deal-price">{{i.price}}</span>
                    <span class="deal-old-price">{{i.counterPrice}}</span>
                    <span class="deal-sales">{{i.saleNum}}</span>
                </p>
            </li>
        </ul>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
    props: ['item']
};
</script>
<style lang="scss">
</style>