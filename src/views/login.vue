<template>
  <div class="login container">
    <div class="box">
      <div>
        <input type="text" />
      </div>
      <div>
        <input type="password" />
      </div>
      <div>
        <button>login</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Login'
})
</script>

<style lang="less" scoped>
  .container {
    display: flex;
    .box{
      width: 30em;
      height:20em;
      margin:auto;
    }
  }
</style>
