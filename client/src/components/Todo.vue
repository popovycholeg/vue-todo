<template>
  <div :class="{ completed: todo.completed }">
    <p @click="updateTodo(todo)">{{ todo.title }}</p>
    <button @click="deleteTodo(todo.id)">Delete</button>
  </div>
</template>
<script>
import { useStore } from "vuex";

export default {
  name: "Todo",
  props: ["todo"],
  setup() {
    const store = useStore();

    const deleteTodo = (id) => {
      store.dispatch("onDeleteTodo", id);
    };

    const updateTodo = (todo) => {
      const updatedTodo = {
        title: todo.title,
        id: todo.id,
        completed: !todo.completed,
      };
      store.dispatch("onUpdateTodo", updatedTodo);
    };

    return {
      deleteTodo,
      updateTodo
    };
  },
};
</script>
<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
