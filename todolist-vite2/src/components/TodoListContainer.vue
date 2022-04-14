<template>
 
</template>

<script>
import { ref,readonly,provide } from 'vue'
import { useStorage } from '../compositions/storage'
import TodoListNew from './TodoList.vue'
import TodoListMain from '../compositions/TodoListMain.vue'

export default {
    name: 'TodoListContainer',
    setup(){
        const todos = ref([])
        const  { loadTodos, saveTodos,Storage_id } = useStorage()

        provide('todos',readonly(todos))

        const initTodos = (init_todos) => {
            todos.value = init_todos
        }
        
        const addTodo = (todo,date) => {
            todos.value.push({
                id:Storage_id.value++,
                job:job,
                date:date,
                completed:false,
            })
            saveTodos(todos)
        }

        const removeTodo = (id) => {
            todos.value.splice(id,1)
            todos.value.forEach((todo,idx) =>{
                todo.id = idx
            })
            saveTodos(todos)
        }
        
        const completeTodo = (id) => {
            todos.value.find((todo) => todo.id == id).completed = true
            saveTodos(todos)
        }

        provide('addTodo', addTodo)
        provide('removeTod', removeTodo)
        provide('completeTodo',completeTodo)

        loadTodos(initTodos)

    },
    components: {
        TodoListNew,
        TodoListMain,
    },
}
</script>

<style>

</style>