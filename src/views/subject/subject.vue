<template>
  <div>
    <div>
      <box-card>
        课程介绍
        <template v-slot:content>
          <div class="box-shadow">这里是内容</div>
        </template>
      </box-card>
    </div>
    <div>
      <box-card>
        技能树
        <template v-slot:content>
          <skill-list></skill-list>
        </template>
      </box-card>
    </div>
  </div>
</template>

<style lang="less" scoped>
.wrap {
    width: 1156px;
    margin: 0 auto;
}
</style>
