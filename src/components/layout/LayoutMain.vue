<template>
  <div>
    <!--头部-->
    <LayoutHeader>
    </LayoutHeader>
    <!--主体-->
    <!--左侧菜单-->
    <LayoutMenu>
    </LayoutMenu>
    <LayoutBody>
    </LayoutBody>
  </div>

</template>

<script>
  import LayoutHeader from "./LayoutHeader";
  import LayoutMenu from "./LayoutMenu";
  import LayoutBody from "./LayoutBody";

  export default {
    name: "LayoutMain",
    components: {LayoutBody, LayoutMenu, LayoutHeader},
    created() {
    },
    mounted() {
      this.$store.dispatch('initUser');
      this.$store.dispatch('initMenu');
      // this.$store.dispatch('handlerRoutes');
    },
    methods: {}
  }
</script>
