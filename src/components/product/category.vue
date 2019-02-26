<template>
  <div>
    <dl class="classic">
      <dt>{{type}}</dt>
      <dt>全部</dt>
      <dd v-for="item in list" :key="item.type" class="m-product-select">
          
          <dl class="tab">
            <dt>{{item.title}} <i class="el-icon-caret-bottom"></i></dt>
           
            <dd>
              <h3>{{item.title}}</h3>
              <span v-for="i in item.subList" :key="i.name">{{i.name}}</span>
              
            </dd>
          </dl>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: ["type", "list"],
  data() {
    return {
    };
  }
};
</script>
<style scoped>
</style>