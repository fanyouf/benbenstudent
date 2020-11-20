<template>
  <div class="home wid1226">
    <div class="slider">
      <img width="1226" src="https://www.it666.com/files/system/block_picture_1583498610.png?version=8.8.4" alt="">
    </div>
    <BoxTitle>课程列表</BoxTitle>
    <div class="flex course">
      <div class="box item5" @click.prevent="$router.push('/course/'+course.id)"
      v-for="course in list"
      :key="course.id">
        <img src="https://img1.mukewang.com/szimg/5f8821c308935e5406000338-360-202.jpg"/>
        <h4 class="title">{{course.name}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'Home',
  data () {
    return {

    }
  },
  setup () {
    const res = reactive({
      list: [{ id: 1, name: 'test' }]
    })
    return { ...toRefs(res) }
  }
  // async created () {
  //   const res = await this.$http.get('courses')
  //   console.log(res)
  //   this.list = res.data.courses
  // }
})
</script>
