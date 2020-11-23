<template>
  <div>
    <div class="subject" v-html="stc.subject"></div>

    <ul>
      <li v-for="sym in list" :key="sym" class="item">
        <div class="ans radio-box">
          <input type="radio" :id="'o'+stc.id+sym" :value="sym" :name="'o'+stc.id" v-model="yourAns" />
          <label :for="'o'+stc.id+sym"></label>
          {{sym}}
        </div>
        <div @click="hSelect(sym)"  class="content" v-html="stc[sym]"></div>
      </li>
    </ul>
  </div>
</template>

<script>
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
  },
  methods: {
    hSelect (sym) {
      console.log(sym)
      this.yourAns = sym
    }
  }
})
</script>

<style lang="less" scoped>
@size: 14px;
.item {
  display: flex;
  margin: 1em 0;
  .ans{
    width: 3em;
  }
}

.radio-box {
  position: relative;
  display: inline-block;
  margin-right: 12px;
}
.radio-box input {
  vertical-align: middle;
  margin-top: -2px;
  margin-bottom: 1px;
  /* 前面三行代码是为了让radio单选按钮与文字对齐 */
  width: @size;
  height: @size;
  appearance: none;/*清楚默认样式*/
  -webkit-appearance: none;
  opacity: 0;
  outline: none;
  /* 注意不能设置为display:none*/
  }
.radio-box label {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  /*注意层级关系，如果不把label层级设为最低，会遮挡住input而不能单选*/
  width: @size;
  height: @size;
  border: 1px solid #3582E9;
  border-radius: 100%;
}
.radio-box input:checked+label {
  background: #3582E9;
}
.radio-box input:checked+label::after {
  content: "";
  position: absolute;
  left: 6px;
  top: -2px;
  width: 5px;
  height: 12px;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  transform: rotate(45deg);
}
</style>
