<template>
  <div>
    <h2>Todos</h2>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <Todo
          :todo="todo"
          @mark-comleted="$emit('mark-comleted', todo.id)"
          @delete-todo="$emit('delete-todo', todo.id)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Todo from "./Todo";
export default {
  name: "Todos",
  components: {
    Todo,
  },
  props: {
    todos: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>
<style scoped></style>
