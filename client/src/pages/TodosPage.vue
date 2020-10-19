<template>
  <div id="app">
    <h1>Todo Vue app</h1>
    <AddTodo />
    <Todos />
  </div>
</template>

<script>
import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";

export default {
  name: "TodosPage",
  components: {
    AddTodo,
    Todos,
  },
};
</script>
