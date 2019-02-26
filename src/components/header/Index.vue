<template>
    <div class="m-header">
        <el-row>
            <top-bar />
        </el-row>
        <el-row>
            <search-bar />
        </el-row>
        
    </div>

</template>
<script>
import TopBar from '@/components/header/TopBar'
import SearchBar from '@/components/header/SearchBar'
export default {
    components: {
        TopBar,
        SearchBar
    }

}
</script>
<style lang="scss">
     @import '@/assets/css/public/header/index.scss'

</style>