<template>
  <div :class="['choose-wrap', disabled?'disbaled-wrap':'']" v-document-click="documentClick" @click="showContent">
    <div :class="['choose', chooseClass+'-choose']">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content': true, 'active': contentActive}">
          <h2>{{title}}</h2>
          <div class="wrapper">
              <div class="col" v-for="(item, index) in renderList" :key="index">
                  <span class="mt-item" v-for="city in item" :key="city.name" @click="changeValue(city)">{{city.name}}</span>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    created() {
        if(this.chooseClass == 'city') {
             console.log(this.disabled);
        }
       
    },
    computed: {
        renderList() {
            const col = Math.ceil(this.list.length /12);
            let resultArr = [];
            for(var i=0; i< col; i++) {
                resultArr.push(this.list.slice(i*12, i*12 + 12))
            }
            return resultArr;
        }
    },
    
    props: ['title','list', 'content-active', 'disabled', "value", "chooseClass"],
    methods: {
        showContent(e) {
            if (this.disabled) {
                return false;
            }
            e.stopPropagation();
            this.$emit('change-city', true);
        },
        documentClick() {
            this.$emit('change-city', false);
        },
        changeValue(item) {
            this.$emit('change', item);
        }
    }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>