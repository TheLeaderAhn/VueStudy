/* eslint-disable vue/require-v-for-key */
<template>
  <ul style="list-style-type: none">
    <li v-for="item in items" :key="item">
      <slot :item="item"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HelloWorld',

  data(){
    return{
      items:[1,2,3,],
    }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
