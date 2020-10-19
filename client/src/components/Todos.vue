<template>
  <div class="todosWrapper">
    <h2>Todos</h2>
    <ul class="list-group w-50">
      <li 
        v-for="todo in todos" 
        :key="todo.id"
        class="list-group-item"
      >
        <Todo :todo="todo" />
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
  components: {
    Todo,
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

<style scoped>
.todosWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
