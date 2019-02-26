<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu/>
      </el-col>
      <el-col :span="19">
        <m-life/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :titleType="typeList[0]"/>
        <container :titleType="typeList[1]"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import MMenu from "@/components/index/menu";
import MLife from "@/components/index/life";
import Container from "@/components/index/container";

export default {
  components: {
    MMenu,
    MLife,
    Container
  },
  data() {
    return {
      updatePositon: true,
      typeList: [
        {
          eng: "istyle",
          text: "有格调",
          label: [
            {
              eng: "all",
              text: "全部"
            },
            {
              eng: "food",
              text: "约会聚餐"
            },
            {
              eng: "spa",
              text: "丽人SPA"
            },
            {
              eng: "movie",
              text: "电影演出"
            },
            {
              eng: "travel",
              text: "品质出游"
            }
          ]
        },
        {
          eng: "discount",
          text: "很优惠",
          label: [
            {
              eng: "all",
              text: "全部"
            },
            {
              eng: "food",
              text: "美食"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>