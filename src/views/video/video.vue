<template>
  <div class="video container">
    <div>
      <img class="video-content" src="./video.jpg" />
    </div>

    <div class="course-subnav js-course-subnav">
      <ul class="clearfix">
        <li @click="currentTab='note'" :class="{'current': currentTab==='note'}">讲义</li>
        <li @click="currentTab='comment'" :class="{'current': currentTab==='comment'}">常见问题</li>
        <li @click="currentTab='task'" :class="{'current': currentTab==='task'}">课堂检测</li>
        <li @click="currentTab='source'" :class="{'current': currentTab==='source'}">资料</li>
      </ul>
    </div>
    <div>
      <component v-bind:is="currentTabComponent" :video="video"></component>
    </div>
  </div>
</template>

<script>
import TabNote from '@/components/note.vue'
import TabTask from '@/views/task/task.vue'
import TabComment from '@/components/comment.vue'
import TabSource from '@/components/source.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Course',
  data () {
    return {
      video: {},
      currentTab: 'note',
      tabs: ['note', 'task', 'comment', 'source']
    }
  },
  async created () {
    const res = await this.$http.get('video/' + this.$route.params.id)
    console.log(res)
    this.video = res.data.video
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  },
  components: {
    TabNote,
    TabTask,
    TabComment,
    TabSource
  }
})
</script>

<style lang="less">
.video-content{
  width: 100%;
}
.course-subnav {
    width: 100%;
    height: 68px;
    background: #fff;
    box-shadow: 0 4px 8px 0 rgba(28,31,33,.1);
}
.course-subnav ul {
    width: 1152px;
    margin: 0 auto;
    padding: 12px 16px;
}
.course-subnav li.current {
    color: #f20d0d;
}
.course-subnav li {
    position: relative;
    float: left;
    margin-right: 96px;
    font-size: 16px;
    color: #545c63;
    line-height: 40px;
    cursor: pointer;
    font-weight: 700;
}
.course-subnav li.current::before {
    display: block;
}
.course-subnav li::before {
    display: none;
    content: " ";
    position: absolute;
    width: 20px;
    height: 3px;
    background: red;
    bottom: 0;
    margin-left: -10px;
    left: 50%;
    border-radius: 2px;
}
</style>
