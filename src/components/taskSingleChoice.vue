<template>
  <div>
    <div class="subject" v-html="stc.subject"></div>

    <ul>
      <li v-for="sym in list" :key="sym" class="item">
        <div class="ans">
          <input type="radio" :name="'o'+stc.id" v-model="yourAns" />{{sym}}
        </div>
        <div class="content" v-html="stc[sym]"></div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Task',
  props: {
    stc: {
      type: Object
    }
  },
  data () {
    return {
      list: ['A', 'B', 'C', 'D'],
      yourAns: ''
    }
  }
})
</script>

<style lang="less" scoped>
.item {
  display: flex;
  margin: 1em 0;
  .ans{
    width: 3em;
  }
}
</style>
