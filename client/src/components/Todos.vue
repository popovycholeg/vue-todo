<template>
  <div>
    <h2>Todos</h2>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <Todo
          :todo="todo"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Todo from "./Todo";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  name: "Todos",
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
   components: {
    Todo,
  },
};
</script>
<style scoped></style>
