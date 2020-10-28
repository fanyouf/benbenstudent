<template>
  <div>
    <my-header></my-header>
    <div class="wid1226">
      <router-view></router-view>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyHeader from './header.vue'
import MyFooter from './footer.vue'
export default defineComponent({
  name: 'Home',
  components: {
    MyHeader,
    MyFooter
  }
})
</script>
