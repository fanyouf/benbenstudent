<template>
  <div class="process">
    <div :style="{width: process+'%'}" class="inner"></div>
  </div>
</template>

<script>
export default {
  props: {
    process: {
      type: Number,
      default: 40
    }
  }
}
</script>
<style lang="less" scoped>
.process{
  width: 200px;
  height:5px;
  border:1px solid #ccc;
}
.inner {
  background-color: #ccc;
  height:5px;
}
</style>
