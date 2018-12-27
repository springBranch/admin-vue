<!--suppress ALL -->
<template>
  <div class="index-menu" :class="{'index-menu-min':isCollapse}">
    <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
    <!--<el-radio-button :label="false">展开</el-radio-button>-->
    <!--<el-radio-button :label="true">收起</el-radio-button>-->
    <!--</el-radio-group>-->
    <el-menu :default-active="activeMenu" @select="selectMenu" class="el-menu-vertical"
             background-color="#36435f"
             text-color="#fff"
             active-text-color="#ffd04b"
             ref="elmenu"
             :collapse="isCollapse">
      <el-submenu :index="menus.name" v-for="menus in leftMenus" v-if="menus.children">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{menus.name}}</span>
        </template>
        <el-menu-item v-for="chiMenu in menus.children" :index="chiMenu.name">{{chiMenu.name}}</el-menu-item>
      </el-submenu>
      <el-menu-item :index="menus.name" v-else>
        <i class="el-icon-menu"></i>
        <span slot="title">{{menus.name}}</span>
      </el-menu-item>
    </el-menu>

    <div class="index-menu-switch" @click="closeMenu"></div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import eventVue from './../../eventVue'

  export default {
    data() {
      return {
        activeMenu: '首页',
        currMenu: {}
      };
    },
    computed: {
      ...mapGetters(['leftMenus', 'isCollapse'])
    },
    methods: {
      selectMenu(index,indexPath) {
        var linkPath = '';
        for (var i = 0, len = this.leftMenus.length; i < len; i++) {
          if (this.leftMenus[i].name == indexPath[0]) {
            this.currMenu = this.leftMenus[i];
            linkPath = this.currMenu.link;
            break;
          }
        }
        if (!this.currMenu.length && indexPath.length == 2) {
          for (var i = 0, len = this.currMenu.children.length; i < len; i++) {
            if (this.currMenu.children[i].name == indexPath[1]) {
              this.currMenu = this.currMenu.children[i];
              linkPath += '/' + this.currMenu.link;
              break;
            }
          }
        }
        this.$router.push({name: this.currMenu.name})
        eventVue.$emit("selectMenu", this.currMenu);
      },
      ...mapActions(['switchMenu']),
      closeMenu: function () {
        this.switchMenu();
      }
    },
    watch: {
      $route() {
        // this.$refs.elmenu.activeIndex = this.$route.name;
        this.activeMenu = this.$route.name
      }
    },
    mounted() {
      this.activeMenu = this.$route.name
    },
    created() {
      // eventVue.$on("selectBar", (selectBar) => {
        // console.log(selectBar)
        // this.$refs.elmenu.activeIndex = selectBar;
        // this.$refs.elmenu.initOpenedMenu();
      // })
    }
  }
</script>

<style lang="scss" scoped>
  .index-menu {
    height: calc(100% - 50px - 30px);
    position: fixed;
    z-index: 100;
    .el-menu {
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }
    .index-menu-min {
      width: 65px;
    }
  }

  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
  }

  .el-menu-vertical {

  }

  .index-menu-switch {
    height: 30px;
    background-color: #0080FF;
  }

</style>
