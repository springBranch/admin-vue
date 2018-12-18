<template>
  <div class="index-body">123123</div>
</template>

<script>
  export default {
    name: "LayoutBody"
  }
</script>

<style scoped>
  .index-body {
    float: left;
    width: calc(100% - 180px);
    background-color: green;
    /*position: fixed;*/
    transition: margin 0.2s linear 0.01s;
    margin-left: 180px;
  }
</style>
