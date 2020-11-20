<template>
  <div class="skill_list">
    <div class="box-shadow">
      <h3 class="skill_name">100%还原静态设计稿的能力</h3>
      <p class="skill_course_tip">
        通过选择合适的html结构和恰当的css还原设计稿
      </p>
      <ul class="skill_course_box">
        <li class="skill_course">vscode</li>
        <li class="skill_course">html+css快速入门</li>
        <li class="skill_course">less</li>
        <li class="skill_course" @click="$router.push('/course/'+1)">git+github</li>
      </ul>
    </div>
    <div class="box-shadow">
      <h3 class="skill_name">100%还原静态设计稿的能力</h3>
      <p class="skill_course_tip">
        通过选择合适的html结构和恰当的css还原设计稿
      </p>
      <ul class="skill_course_box">
        <li class="skill_course">vscode</li>
        <li class="skill_course">html+css快速入门</li>
        <li class="skill_course">less</li>
        <li class="skill_course" @click="$router.push('/course/'+1)">git+github</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  setup () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.skill_list{
  display:flex;
  flex-direction: column;
  .skill_name{
    font-weight: 200;
  }
  .skill_course{
    cursor: pointer;
    margin-right:20px;
    display: inline-block;
    padding:5px ;
    border-radius: 3px;
    border: 1px solid #ccc;
  }
}
</style>
