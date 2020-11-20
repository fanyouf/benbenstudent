<template>
  <div class="course-page">
    <nav>
      <router-link to="/">主页</router-link> >
      <router-link to="/subject/1">技能树</router-link> >
      javascrtip入门
    </nav>
    <BoxTitle>课程介绍</BoxTitle>
    <div>
      <div class="course-description course-wrap">
        {{couDesc}}
      </div>
      <BoxTitle>章节</BoxTitle>
      <div class="course-chapters">
        <div class="chapter course-wrap">
          <!-- 章节小节 -->
          <ul class="video">
            <li class="video-item"
            v-for="video in videos"
            :key="video.id">
              <router-link class="video-title" :to="'/video/'+ video.id">{{video.vidName}}</router-link>
              <div>当前学习进度80%</div>
              <course-process></course-process>
              <router-link :to="'/note/' + video.id"><i class="iconfont icon-doc"></i>3003字</router-link>
              <router-link :to="'/task/' + video.id"><i class="iconfont icon-task"></i>5题</router-link>
            </li>
            <!-- <li class="video-item">
              <span class="video-title">1-1 搭建 Egg.js 的开发环境 (05:54)</span>

              <div>完成度80%</div>
              <i class="iconfont icon-doc" title="讲义"></i>
              <i class="iconfont icon-play" @click.prevent="$router.push('/video/1')" title="视频"></i>
              <i class="iconfont icon-task" title="测试"></i>
            </li> -->

          </ul>
          <!-- 章节小节 end -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import useCourse from './useCourse'
export default defineComponent({
  name: 'Course',
  data () {
    return {}
  },
  setup () {
    const { couDesc, videos } = useCourse()
    return { couDesc, videos }
  }
})
</script>

<style lang="less" scoped>
.course-wrap {
  margin-bottom: 8px;
  padding: 24px 32px 32px;
  background: #fff;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.05);
  border-radius: 3px;
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
      padding-right:1em;
      display: flex;
      align-items: center;
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
