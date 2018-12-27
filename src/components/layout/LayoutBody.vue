<template>
  <div id="index-body" :class="{'index-body-menu':isCollapse}">
    <el-tabs v-model="currentTab" type="card" @tab-remove="removeTab" @tab-click="selectTab">
      <el-tab-pane
        v-for="item in tabList"
        :key="item.name"
        :label="item.title"
        :name="item.name"
        :closable="item.closable"
      >
        <!--<iframe :key="item.name" v-once :src="item.link" frameborder="0"></iframe>-->
        <transition name="fade" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import eventVue from './../../eventVue'
  import {mapGetters} from 'vuex'
  import router from "../../router";

  const Home = resolve => require(['../HelloWorld'], resolve);
  export default {
    data() {
      return {
        currentTab: '首页',
        tabList: [{
          title: '首页',
          name: '首页',
          link: 'https://www.baidu.com/',
          closable: false
        }]
      }
    },
    comments: Home,
    created() {
      eventVue.$on("selectMenu", (selectMenu) => {
        this.addTab(selectMenu);
      })

      if (this.$router.currentRoute.path != '/index') {
        this.addTab(this.$router.currentRoute);
      }
    },
    computed: {
      ...mapGetters(['isCollapse', 'headMenus'])
    },
    watch: {
      $route() {
        if (this.$router.currentRoute.path != '/index') {
          this.addTab(this.$router.currentRoute);
        }else {
          this.currentTab= '首页'
        }
      }
    },
    methods: {
      addTab(target) {
        for (var i = 0, len = this.tabList.length; i < len; i++) {
          if (target.name == this.tabList[i].name) {
            this.currentTab = target.name;
            return;
          }
        }

        let component = resolve => require(['../HelloWorld'], resolve)

        this.tabList.push({
          title: target.name,
          name: target.name,
          closable: true
        });

        this.currentTab = target.name;
      },
      removeTab(target) {
        let tabs = this.tabList;
        let activeName = this.currentTab;
        if (activeName === target) {
          tabs.forEach((tab, index) => {
            if (tab.name === target) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.currentTab = activeName;
        this.tabList = tabs.filter(tab => tab.name !== target);
      },
      selectTab(target) {
        this.$router.push({name: target.name});
        eventVue.$emit("selectBar", target.name);
      },
    }
  }
</script>

<style lang="scss" scoped>

  #index-body {
    margin-left: 200px;
    width: 100%;
    position: fixed;
    transition: margin 0.2s linear 0.01s;
    height: 100%;
    .el-tabs {
      height: 100%;
      .el-tab-pane {
        height: calc(100% - 110px);
      }
    }
    .el-tabs__content {
      width: 100%;
      height: 100%;
    }
  }

  .index-body-menu {
    margin-left: 64px;
  }

  iframe {
    height: 100%;
    width: calc(100% - 200px);
  }
</style>
