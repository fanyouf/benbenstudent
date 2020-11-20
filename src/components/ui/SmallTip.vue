<template>
  <div :style="{backgroundColor:bc}">
    <slot name="cotent"></slot>
  </div>
</template>

<script>
export default {
  props: {
    bc: {
      type: String,
      default: '#ccc'
    }
  },
  setup () {
    return {}
  }
}
</script>
