<template>
  <div class="course-page">
    <BoxTitle>课程介绍</BoxTitle>
    <div>
      <div class="course-description course-wrap">
        简介：本课程使用目前最主流的MySQL8进行教学，主要学习操作数据库的SQL语句语法：DDL，DML以及DQL分组，分页，范围，排序等条件查询的使用以及Navicat连接工具的操作、数据库的主键，唯一，非空约束等
      </div>
      <BoxTitle>章节</BoxTitle>
      <div class="course-chapters">
        <div class="chapter course-wrap">
          <!-- 章节小节 -->
          <ul class="video">
            <li class="video-item">
              <span class="video-title">1-1 搭建 Egg.js 的开发环境 (05:54)</span>

              <div>80%</div>
              <i class="iconfont icon-doc" title="讲义"></i>
              <i class="iconfont icon-play" @click.prevent="$router.push('/video/1')" title="视频"></i>
              <i class="iconfont icon-task" title="测试"></i>
            </li>
            <li class="video-item">
              <span class="video-title">1-1 搭建 Egg.js 的开发环境 (05:54)</span>

              <div>完成度80%</div>
              <i class="iconfont icon-doc" title="讲义"></i>
              <i class="iconfont icon-play" @click.prevent="$router.push('/video/1')" title="视频"></i>
              <i class="iconfont icon-task" title="测试"></i>
            </li>

          </ul>
          <!-- 章节小节 end -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Course',
  components: {}
})
</script>

<style lang="less" scoped>
.course-wrap {
    margin-bottom: 8px;
    padding: 24px 32px 32px;
    background: #fff;
    box-shadow: 0 8px 16px 0 rgba(7,17,27,.1);
    border-radius: 12px;
}
.course-chapters .chapter h3 {
    color: #1c1f21;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
}
.course-chapters .chapter .chapter-description {
    margin-top: 2px;
    font-size: 12px;
    color: #545c63;
    line-height: 18px;
}
.course-chapters .chapter .video {
    padding-top: 16px;
    .video-item{
      display: flex;
      .video-title{
        margin-right: auto;
      }
      .iconfont{margin:0 1em; cursor: pointer;}
    }
}
.course-chapters .chapter .video li {
    position: relative;
    padding-left: 12px;
    height: 48px;
    line-height: 48px;
    list-style: none;
}
.course-chapters .chapter .video li a {
    color: #1c1f21;
    display: block;
    overflow: hidden;
    word-break: break-all;
}
.course-chapters .chapter .video li:hover {
    background: rgba(242,13,13,.05);
    border-radius: 4px;
    color: #f20d0d;
}

.course-chapters .chapter .video li a:hover {
    color: #f20d0d;
}
</style>
