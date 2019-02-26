<template>
  <div class="slide">
    <el-carousel>
      <el-carousel-item v-for="item in imgArr" :key="item.src">
        <img :src="item.src" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
    data() {
        return {
            imgArr: [
                {
                    url: 'https://hotel.meituan.com/beijing/',
                    src: 'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
                },
                {
                    url: 'https://hotel.meituan.com/beijing/',
                    src: 'https://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
                },
                {
                    url: 'https://hotel.meituan.com/beijing/',
                    src: 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
                }
            ]
        }
    }
};
</script>
<style scoped>


</style>