<template>
  <div class="notes">
    <box-title>常见错误</box-title>
    <collapse-plane title="xxxx">
      <h3>xxxxx1111</h3>
    </collapse-plane>

    <collapse-plane title="另一个问题">
      <h3>xxxxx</h3>
      <div>
        答案这
        </div>
    </collapse-plane>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'comment',
  props: {
    content: {
      type: String,
      default: '错误'
    }
  }
})
</script>
