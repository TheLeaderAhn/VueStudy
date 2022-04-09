<template>
  <HelloWorld msg="한권으로끝내는 vue3"/>
  <Component>
    <template v-slot="slotProps"> ✔️ {{ slotProps.item }} </template>
  </Component>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Component from './components/Component.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    Component,
    
  },
  data() {
    return {
      msg: '초기 메시지',
      msg2: '초기 메시지',
    }
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
