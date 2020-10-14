<template>
  <div id="app">
    <h1>Todo Vue app</h1>
    <AddTodo :todos="todos" @add-todo="addTodo" />
    <Todos
      :todos="todos"
      @mark-comleted="markCompleted"
      @delete-todo="deleteTodo"
    />
  </div>
</template>

<script>
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  name: "App",
  components: {
    AddTodo,
    Todos,
  },
  setup() {
    const store = useStore();
    const todos = computed(() => store.state.todos);
    onMounted(() => {
      store.dispatch("onFetchTodos");
    });

    return {
      todos,
    };
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
