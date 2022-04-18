<template>
  <nav-bar />
  <!-- 알림 영역 -->
  <div id="notification" />
  <router-view></router-view>
</template>

<script>
import NavBar from '/@components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  },
}
</script>
