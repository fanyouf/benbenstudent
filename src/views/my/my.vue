<template>
  <div class="my">
    <div class="menu">
      <router-link class="menu-item" to="/m/profile">个人中心</router-link>
      <router-link class="menu-item" to="/m/collect">收藏</router-link>
      <router-link class="menu-item" to="/m/collect">收藏</router-link>
      <router-link class="menu-item" to="/m/error">错题集</router-link>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.my {
  display: flex;
  .menu{
    background-color: #fff;
    width: 234px;
    box-sizing: border-box;
    padding: 20px 48px;
    .menu-item{
      color:#14191e;
      display: block;
      padding: 6px 0;
      &:hover, &.router-link-active {
        color:#ff6700;
      }
    }
  }
  .main {
    flex: 1 1 auto;
    background-color: #fff;
    margin-left:1em;
  }
}
</style>
