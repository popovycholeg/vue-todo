<template>
  <div>
    <h2>Todos</h2>
    <ul>
      <li :key="todo.id" v-for="todo in todos">
        <Todo v-bind:todo="todo" />
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
