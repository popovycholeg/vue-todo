<template>
  <div id="app">
    <h1>Todo Vue app</h1>
    <AddTodo :todos="todos" v-on:add-todo="addTodo" />
    <Todos
      :todos="todos"
      v-on:mark-comleted="markCompleted"
      v-on:delete-todo="deleteTodo"
    />
  </div>
</template>

<script>
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

export default {
  name: "App",
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Go workout",
          completed: true,
        },
        {
          id: 2,
          title: "Do laundry",
          completed: false,
        },
        {
          id: 3,
          title: "Cook food",
          completed: false,
        },
        {
          id: 4,
          title: "Clean up room",
          completed: false,
        },
        {
          i: 5,
          title: "Finish work",
          completed: false,
        },
      ],
    };
  },
  components: { AddTodo, Todos },
  methods: {
    addTodo(newTodoObj) {
      this.todos = [...this.todos, newTodoObj];
    },
    markCompleted(id) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else return todo;
      });
      console.log(id);
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
