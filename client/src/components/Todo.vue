<template>
  <div class="todoWrapper" @click="updateTodo(todo)">
    <p class="text" :class="{ completed: todo.completed }">
      {{ todo.title }}
    </p>
    <button @click="deleteTodo(todo.id)" class="btn btn-danger">Delete</button>
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
      updateTodo,
    };
  },
};
</script>
<style scoped>
.completed {
  text-decoration: line-through;
}

.todoWrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.text {
  margin: 0;
}
</style>
