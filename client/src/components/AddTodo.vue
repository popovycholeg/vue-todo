<template>
  <div>
    <form @submit="addTodo">
      <input v-model="title" type="text" name="title" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "AddTodo",
  props: {
    todos: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodoObj = {
        id: this.todos.length + 1,
        title: this.title,
        completed: false,
      };
      this.$emit("add-todo", newTodoObj);
      this.title = "";
    },
  },
};
</script>
<style scoped></style>
