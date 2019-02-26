<template>
    <div class="m-menu">
        <dl class="nav">
            <dt>全部分类</dt>
            <dd v-for="item in menuList" :key="item.title" @mouseenter="onMouseEnterNav(item)" @mouseleave="onMouseLeaveNav">
                <i :class="item.type"></i>
                <span>{{item.name}}</span>
                <span class="arrow"></span>
            </dd>
        </dl>
        <div v-if="curDetail" class="detail" @mouseenter="onMouseEnterDetail" @mouseleave="onMouseLeaveDetail"> 
            <div  v-for="item in curDetail" :key="item.title">
                <h4>{{item.title}}</h4>
                <span v-for="v in item.items" :key="v">
                    <router-link to="/">{{v}}</router-link>
                </span>  
            </div>
        </div>
    </div>

</template>
<script>
import api from '@/api/index.js';
export default {
    created() {
        api.getMenuNav().then(res => {
            this.menuList = res.data.data;
        })
    },
    data() {
        return {
            menuList: [],
            curDetail: null
        }
    },
    methods: {
        onMouseEnterNav(item) {
            this.curDetail = item.items;
        },
        onMouseLeaveNav() {
            let self = this;
            this.timer = setTimeout(()=> {
                self.curDetail = null;
            }, 1000)
        },
        onMouseEnterDetail() {
            clearTimeout(this.timer);
        },
        onMouseLeaveDetail() {
            this.curDetail =null;
        }
    }

}
</script>
<style scoped>


</style>