<template>
  <div class="notes">
    <box-title>资料下载</box-title>
    <ul>
      <li>资料1 </li>
      <li>资料2 </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'lsource',
  props: {
    content: {
      type: String,
      default: '错误'
    }
  }
})
</script>
