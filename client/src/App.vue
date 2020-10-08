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
import axios from "axios";
import store from "./store";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("my-module");

export default {
  name: "App",
  components: { AddTodo, Todos },
  store,
  data() {
    return {
      todos: [],
      error: null,
    };
  },
  computed: {
    ...mapState({ todos1: (state) => state.todos }),
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:1337/todos");
      this.todos = response.data;
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    markCompleted(id) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else return todo;
      });
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    },
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
