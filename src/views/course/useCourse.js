import { reactive, toRefs } from 'vue'
export default function () {
  const res = reactive({
    couDesc: 'javascrtip入门',
    videos: [{ id: 1, vidName: '课程入口' }]

  })
  return { ...toRefs(res) }
}
