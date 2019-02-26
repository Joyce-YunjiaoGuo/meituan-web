<template>
  <div>
    <span>按省份选择:</span>
    <m-select
      title="省份"
       chooseClass="province"
      :value="province"
      :list="provinceList"
      :content-active="ProvinceActive"
      @change-city="showProChooseContent"
      @change="changeProvince"
    />
    <m-select
      title="城市"
      chooseClass="city"
      :value="city"
      :list="cityList"
      :content-active="CityActive"
      @change-city="showCityChooseContent"
      @change="changeCity"
      :disabled="disabledCity"
    />
    <span>直接搜索：</span>

    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in list" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>
<script>
import MSelect from "@/components/changecity/select";
import api from "@/api/index.js";
export default {
  components: {
    MSelect
  },
  data() {
    return {
      province: '省份',
      city: '城市',
      ProvinceActive: false,
      CityActive: false,
      provinceList: [],
      cityList: [],
      searchWord: '',
      list: [
        "阿拉善盟",
        "鞍山",
        "安庆",
        "安阳",
        "阿坝",
        "安顺",
        "阿里",
        "安康",
        "阿克苏",
        "阿勒泰",
        "中国澳门",
        "安吉",
        "安丘",
        "安岳"
      ],
      loading: false,
      disabledCity: true
    };
  },
  created() {
    api.getProvinceList().then((res) => {
     if (res.data.status == 'success') {
        // console.log()
        this.provinceList = res.data.data.map((item) => {
          item.name = item.provinceName;
          return item;
        });
      }
    })
  },
  methods: {
    showProChooseContent(flag) {
      this.ProvinceActive = flag;
      if (flag) {
        this.CityActive = false;
      }
    },
    showCityChooseContent(flag) {
      this.CityActive = flag;
      if (flag) {
        this.ProvinceActive = false;
      }
    },
    changeProvince(item) {
        this.province = item.name;
        this.cityList = item.cityInfoList;
        this.disabledCity = false;
    },
    changeCity(item) {
        this.city = item.name;
        this.$store.dispatch('setPosition', item);
        this.$router.push({name: 'index'})
    },
    remoteMethod(query) {
       // 请求后端接口
    }
  }
};
</script>
<style scoped>
</style>