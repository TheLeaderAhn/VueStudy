<template>
  <div style="position: absolute; bottom: 150px; left:40%;">
    <div
      v-for="t in toasts.data"
      :key="t.id"
      class="toast show text-white bg-danger"
      role="alert"
    >
      <div class="toast-header">
        <img
          src="../assets/logo.png"
          class="rounded me-2"
          alt="ajy"
          width="15"
          height="15"
        />
        <strong class="me-auto">비정상적인 접근 입니다.</strong>
        <button type="button" class="btn-close" @click="onClose(t.id)"></button>
      </div>
      <div class="toast-body">{{ t.message }}</div>
    </div>
  </div>
</template>

<script>
import { inject, watch, reactive, onMounted } from 'vue'
export default {
  setup() {
    const toast = inject('toast', '')
    const toasts = reactive({
      data: [],
    })
    let id = 0

    watch(
      () => toast,
      (n, o) => {
        if (n.value.length > 0) {
          const new_id = id++
          toasts.data.unshift({
            id: new_id,
            message: n.value,
            start: new Date().getTime(),
          })
          toast.value = ''
        }
      },
      { deep: true }
    )

    const onClose = (close_id) => {
      toasts.data = toasts.data.filter((i) => i.id != close_id)
    }

    onMounted(() => {
      setInterval(() => {
        const now = new Date().getTime()
        toasts.data.forEach((i) => {
          if (now - i.start > 2000) {
            toasts.data = toasts.data.filter((j) => j.id != i.id)
          }
        })
      })
    })

    return {
      toasts,
      onClose,
    }
  },
}
</script>
