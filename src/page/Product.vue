<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>北京美团</el-breadcrumb-item>
        <el-breadcrumb-item>北京火锅</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row>
      <el-col :span="19">
        <div class="m-product-categroy">
          <category :type="'分类'" :list="typeCategoryList"/>
          <category :type="'区域'" :list="areaCategoryList"/>
        </div>
        <div class="m-products-list">
            <ul>
              <li
                v-for="(item, index) in ranking"
                :key="index"
                :class="{'s-nav-active': index == 0 }"
              >{{item}}</li>
            </ul>
            <item :item="item" v-for="item in productList" :key="item.title"/>
          
        </div>
      </el-col>
      <el-col :span="5">map</el-col>
    </el-row>
  </div>
</template>
<script>
import Category from "@/components/product/category";
import Item from "@/components/product/item";
import api from "@/api/index.js"
export default {
  created() {
    api.getProductList().then(res => {
      this.productList = res.data.data;
    })
    api.getTypeCategoryList().then(res => {
      this.typeCategoryList = res.data.data;
    })
    api.getAreaCategoryList().then(res => {
    })
  },
  data() {
    return {
      productList: [],
      typeCategoryList: [],
      areaCategoryList: [{
        "title": "推荐商圈",
        "subList": [{
            "name": "望京",
            "id": 120000
        }, {
            "name": "昌平",
            "id": 12222
        }] 
    }, 
     {
        "title": "南岗区",
        "subList": [{
            "name": "中央大街",
            "id":123
        }, {
            "name" : "西客站",
            "id": 11
        }, {
            "name": "花园街",
            "id":222
        }, {
            "name": "通乡街/果园街",
            "id": 21
        }, {
            "name": "爱建社区",
            "id": 1
        }, {
            "name": "学府路",
            "id":34
        }]
     }],
      ranking: ["智能排序", "价格排序", "人气最高", "评价最高"]
    };
  },
  components: {
    Category,
    Item
  }
};
</script>
<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>