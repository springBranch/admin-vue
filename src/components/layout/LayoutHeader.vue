<template>
  <div class="index-header">
    <div class="index-header-logo">
      <!--{{userInfo.roleName}}-->
      <img :src="headImg"/>
      <div class="index-user">{{userInfo.roleName}}</div>
    </div>
    <div class="index-header-left">
      <el-menu :default-active="currentHeadMenu"
               class="el-menu-demo"
               mode="horizontal"
               @select="handleSelect"
               background-color="#0485ff"
               text-color="#fff"
               active-text-color="#ffd04b">
        <el-menu-item v-for="item in headMenus" :index="item.name||''" :key='item.name'>{{item.name}}</el-menu-item>
      </el-menu>
    </div>
    <!--<div class="index-header-right">-->
    <!--{{userInfo.roleName}}-->
    <!--</div>-->
  </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex'
  import headImg from '@/assets/head-img.jpg'

  export default {
    data() {
      return {
        headImg: headImg,
      };
    },
    methods: {
      handleSelect(key) {
        this.$store.commit('changeHeadMenu', key);
      }
    },
    computed: {
      ...mapGetters(['userInfo', 'headMenus', 'currentHeadMenu'])
    },
    mounted() {

    },
  }
</script>

<style lang="scss" scoped>
  .index-header {
    height: 50px;
    width: 100%;
    .index-header-logo {
      width: 200px;
      height: 100%;
      float: left;
      background-color: #0080FF;
    }
    .index-header-bar {
      float: left;
      width: 88%;
      height: 100%;
    }
    .index-header-left {
      width: calc(100% - 200px);
      float: left;
    }
    .index-header-right {
      width: 200px;
      float: left;
      height: 100%;
    }
    .index-user{
      line-height: 50px;
      float: left;
      margin-left: 20px;
      font-weight: bold;
      color: white;
    }
    img{
      width: 40px;
      height: 40px;
      border-radius: 40px;
      margin-top: 5px;
      margin-left: 30px;
      float: left;
    }
  }

  img{
    width: 40px;
    height: 40px;
    border-radius: 40px;
    margin-top: 5px;
    margin-left: 30px;
  }

  .el-menu-item {
    height: 50px;
    line-height: 50px;
  }
</style>
