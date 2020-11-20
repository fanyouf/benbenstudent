<template>
  <div class="tasks">
    <box-title>课程检测</box-title>
    {{list.code}}
    <div class="task" v-for="task in taskes" :key="task">
        <tsc :stc="task"/>
    </div>

    <div>
      <button @click="hSubmit">提交</button>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent, ref } from 'vue'
import tsc from './taskSingleChoice.vue'
export default defineComponent({
  name: 'Task',
  props: {
    taskes: {
      type: Array,
      default: function () {
        return [
          { id: 1, type: 'single', subject: 'xxxx', A: '选项A', B: '选项B', C: '选项C', D: '选项D', ans: 'A' },
          { id: 2, type: 'single', subject: 'xxxx', A: '选项A', B: '选项B', C: '选项C', D: '选项D', ans: 'A' },
          { id: 3, type: 'single', subject: 'xxxx', A: '选项A', B: '选项B', C: '选项C', D: '选项D', ans: 'A' },
          { id: 4, type: 'single', subject: 'xxxx', A: '选项A', B: '选项B', C: '选项C', D: '选项D', ans: 'A' }
        ]
      }
    }
  },
  components: {
    tsc
  },
  setup () {
    const list = ref({})
    axios.get('https://api.apiopen.top/singlePoetry').then(res => {
      list.value = res.data
    })
    return { list }
  },
  methods: {
    hSubmit () {
      this.$router.push({ path: '/taskresult', params: { a: 1 } })
    }
  }
})
</script>

<style lang="less" scoped>
.task{
  margin: 5px 0px;
  padding: 20px;
  background: #fff;
  background: #fff;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.05);
  border-radius: 3px;
}
</style>
