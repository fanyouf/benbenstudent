<template>
  <div class="collapse">
    <div class="title"
      @click="toggle">
      {{$attrs.title}}
      <span class="arrow" :class="{unfolder: isCollapse}">
        </span>
    </div>
    <div class="con" v-show="isCollapse">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    const isCollapse = ref(false)
    function toggle () {
      console.log(isCollapse)
      isCollapse.value = !isCollapse.value
    }
    return { isCollapse, toggle }
  }
}
</script>

<style scoped lang="less">
.collapse {
  background-color: #fbfbfb;
}
div.title {
    display: block;
    padding-left: 48px;
    margin-top: 0;
    line-height: 70px;
    background-color: #fff;
    cursor: pointer;
    font-size: 16px;
    color: #212121;
    border-bottom: 1px solid #efeded;
    &:hover {
      color: #ff6700;
      .arrow {
        color: #ff6700;

      }
    }
}
div.title .arrow{
    float: right;
    width: 10px;
    height: 10px;
    margin: 26px 28px 0 0;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    color: #757575;
    font-size: 14px;
    &.unfolder {
      transform: rotate(225deg);
    }
}
.con {
    padding: 32px 48px;
    margin: 0;
    line-height: 24px;
    overflow: hidden;
}
</style>
