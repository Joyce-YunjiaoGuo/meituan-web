<template>
    <div class="m-hcity">
        <dl>
            <dt>{{title}}</dt>
            <dd v-for="(item, index) in cityList" :key="index" @click="changeCity(item)">{{item.name}}</dd>
        </dl>
    </div>
</template>
<script>
export default {
    props: ['title', 'city-list'],
    methods: {
        changeCity(item) {
            this.$store.dispatch("setPosition", item);
            this.$router.push({name: 'index'});
        }
    }

}
</script>
<style lang="scss">
    @import "@/assets/css/changecity/hot.scss"

</style>