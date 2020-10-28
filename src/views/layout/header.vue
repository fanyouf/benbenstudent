<template>
  <div class="headerWarp">
    <div class="headerArea headerBgColorHide">
      <div class="headerAreaMain">
        <div class="logo">
          犇犇学院
        </div>
        <div class="employment-tabs employment-tabs-active">
          <a class="employment-tab-item employment-tab-list-active" href="/">首页
            <div class="employment-tabs-list-show"></div>
          </a>
          <a class="employment-tab-item" href="/subject/1">
            前端
            <div class="employment-tabs-list-show"></div>
          </a>
          <a class="employment-tab-item" href="/subject/2">
            python
            <div class="employment-tabs-list-show"></div>
          </a>
        </div>
        <div class="login">
          <div class="mySubject">我的课程</div>
          <div class="loginLine"></div>
          <div class="navHeadFloat" @click="$router.push('/m')">
            <div class="headPic">
              <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/J6PDzUeeaCPERlic63wheuwWaYbqlwteRJEYk5PmDQ7RaBcxoN5IlbC0FGQoCMjwI6WNm3pWbL98rlGeZuLWAYQ/132" alt="">

              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.headerWarp {
    position: relative;
    z-index: 999;
    height: 80px;

  .headerArea {
    width: 100%;
    height: 80px;
    min-width: 1190px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    .headerAreaMain {
      width: 1190px;
      height: 80px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      position: relative;
      .employment-tabs {
        display: flex;
        margin-left: 20px;
        height: 40px;
      }
    }
  }
}
.headerArea .headerAreaMain .logo {
    width: 117px;
    height: 47px;
    cursor: pointer;
}
.headerArea .headerAreaMain .logo img {
    width: 100%;
    height: 100%;
}
.headerArea .headerAreaMain .employment-tabs .employment-tab-list-active {
    color: #333;
    font-weight: 500;
    position: relative;
}
.headerArea .headerAreaMain .employment-tabs .employment-tab-item {
    padding: 0 20px;
    font-size: 16px;
    font-weight: 400;
    color: #333;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    position: relative;
}
.headerArea .headerAreaMain .employment-tabs .employment-tab-item .employment-tabs-list-show {
    position: absolute;
    display: none;
    width: 20px;
    height: 4px;
    background: #00acec;
    border-radius: 3px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    bottom: 3px;
}
.headerArea .headerAreaMain .login {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #666;
    font-size: 14px;
    line-height: 40px;
    position: absolute;
    right: 0;
}
.headerArea .headerAreaMain .login .loginLine {
    width: 2px;
    height: 14px;
    background: #eee;
    border-radius: 1px;
    margin: 0 15px;
}

.headPic {
    position: relative;
    float: right;
    width: 46px;
    height: 46px;
    border-radius: 23px;
}
.headPic img {
    width: 100%;
    height: 100%;
    border-radius: 23px;
}
</style>
