<template>
  <div>
    <form @submit="addNewTodo">
      <input v-model="title" type="text" name="title" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "AddTodo",
  setup() {
    const store = useStore();
    const title = ref("");
    const addNewTodo = (e) => {
      e.preventDefault();
      store.dispatch("onAddTodo", {
        title: title.value,
      });
      title.value = "";
    };
    return {
      title,
      addNewTodo,
    };
  },
};
</script>
<style scoped></style>
