<template>
  <div class="home wid1226">
    <div class="slider">
      <img width="1226" src="https://www.it666.com/files/system/block_picture_1583498610.png?version=8.8.4" alt="">
    </div>
    <BoxTitle>课程列表</BoxTitle>
    <div class="flex course">
      <div class="box item5" @click.prevent="$router.push('/course/1')"
      v-for="course in list"
      :key="course.id">
        <img src="https://img1.mukewang.com/szimg/5f8821c308935e5406000338-360-202.jpg"/>
        <h4 class="title">{{course.name}}</h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  data () {
    return {
      list: [
        { id: 1, name: 'html5+css3入门' },
        { id: 2, name: 'html5+css3项目实践' },
        { id: 3, name: 'css3专题' },
        { id: 4, name: 'javascript入门' },
        { id: 5, name: 'es6精讲' },
        { id: 6, name: 'css预处理器与css框架' },
        { id: 7, name: 'ajax与jquery' },
        { id: 8, name: 'js流行框架' },
        { id: 9, name: 'bootstrap项目实践' },
        { id: 10, name: 'git与github&gitee' },
        { id: 11, name: 'nodejs入门' },
        { id: 12, name: 'vue2.0入门' },
        { id: 13, name: 'vue2全家桶' },
        { id: 14, name: 'vue原理' },
        { id: 15, name: 'ts' },
        { id: 16, name: 'nuxt' }
      ]
    }
  }
})
</script>
