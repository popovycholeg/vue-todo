<template>
<div id="app">
  <h1>Todo Vue app</h1>
  <AddTodo />
  <Todos />
</div>
</template>

<script>
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

export default {
  name: "App",
  components: {
    AddTodo,
    Todos,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
