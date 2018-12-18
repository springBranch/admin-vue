<template>
  <header class="index-header">
    <div class="index-header-logo">
      logo
    </div>
    <div>
      title
    </div>
  </header>
</template>

<script>
  export default {
    name: "LayoutHeader"
  }
</script>

<style lang="scss" scoped>
  .index-header {
    height: 50px;
    width: 100%;
    /*border: 1px red solid;*/
    background-color: red;
    .index-header-logo {
      width: 180px;
      height: 100%;
      float: left;
    }
    .index-header-bar {
      float: left;
      width: 88%;
      height: 100%;
    }
  }
</style>
