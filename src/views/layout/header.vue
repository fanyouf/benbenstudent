<template>
  <header class="head">
    <div class="wid1226">
      <div class="headerAreaMain">
        <div class="logo">
          犇犇学院
        </div>
        <nav>
          <router-link to="/">首页</router-link> &nbsp;
          <router-link to="/subject/1">前端</router-link> &nbsp;
          <router-link to="/subject/2">python</router-link> &nbsp;
        </nav>
        <div class="login">
          <div class="headPic" @click="$router.push('/m')">
            <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/J6PDzUeeaCPERlic63wheuwWaYbqlwteRJEYk5PmDQ7RaBcxoN5IlbC0FGQoCMjwI6WNm3pWbL98rlGeZuLWAYQ/132" alt="">
            </div>
          </div>
      </div>
    </div>
  </header>
</template>

<style lang="less">
.head {
  background-color: #FFFFFF;
  box-shadow: 0 1px 4px 0 rgba(238, 238, 238, 0.5);
}

.headerAreaMain {
  height: 80px;
  display: flex;
  align-items: center;
  .logo {margin-right:2em;}
  .login{
      margin-left:auto;
  }
  .headPic {
    position: relative;
    float: right;
    width: 46px;
    height: 46px;
    border-radius: 23px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      border-radius: 23px;
    }
  }
}

</style>
