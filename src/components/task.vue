<template>
  <div class="tasks">
    <box-title>课程检测</box-title>
    <div class="task" v-for="task in taskes" :key="task">
        <tsc :stc="task"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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
  }
})
</script>

<style lang="less" scoped>
.task{
  margin: 5px 0px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(7,17,27,.1);
  border-radius: 12px;
}
</style>
