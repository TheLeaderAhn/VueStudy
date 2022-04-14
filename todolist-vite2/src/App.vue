<template>
  <header>
    <hgroup class="my-5">
      <h1>나의할일</h1>
      <em>{{ today }}</em>
    </hgroup>
  </header>
  <todo-list-container />
</template>

<script>
import { inject}  from 'vue'
import TodoListContainer from './components/TodoListContainer.vue'

export default {
  name: 'App',
  
  setup(){
    const today = inject('today')
    return {today}
  },


  components: { TodoListContainer },
}
</script>
<style scope>
hgroup {
  text-align: center;
  font-family: "Arial Bold";
}
hgroup h1 {
  font-weight:bolder;
}
</style>
