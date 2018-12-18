<template>
  <div>
    <!--头部-->
    <LayoutHeader>
    </LayoutHeader>

    <!--主体-->
    <div class="index-container">
      <!--左侧菜单-->
      <LayoutMenu>
      </LayoutMenu>

      <!--内容主体-->
      <LayoutBody>
      </LayoutBody>

    </div>
  </div>

</template>

<script>
  import LayoutHeader from "./LayoutHeader";
  import LayoutMenu from "./LayoutMenu";
  import LayoutBody from "./LayoutBody";

  export default {
    name: "LayoutMain",
    components: {LayoutBody, LayoutMenu, LayoutHeader}
  }
</script>

<style lang="scss" scoped>

</style>
