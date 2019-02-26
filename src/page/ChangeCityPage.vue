<template>
    <div class="page-changeCity">
        <el-row>
            <province />
        </el-row>
        <el-row>
            <city title="热门城市:" :city-list="hotCityList"    />
        </el-row>
        <el-row>
            <city title="最近访问:" :city-list=" recentCityList"    />
        </el-row>
        <el-row>
            <category />
        </el-row>
    </div>

</template>
<script>
import Province from '@/components/changecity/province'
import City from '@/components/changecity/city'
import Category from '@/components/changecity/category'
import api from '@/api/index.js'
export default {
    created() {
        api.getHotCityList().then(res => {
            this.hotCityList = res.data.data;
        }) 
         api.getRecentCityList().then(res => {
            this.recentCityList = res.data.data;
        }) 
    },
    components: {
        Province,
        City,
        Category
    },
    data() {
        return {

            hotCityList: [],
            recentCityList: []
        }
    }

}
</script>
<style lang="scss">
    @import '@/assets/css/changecity/iselect.scss';

</style>