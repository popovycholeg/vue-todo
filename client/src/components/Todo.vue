<template>
  <div :class="{ completed: todo.completed }">
    <p @click="markComplete">{{ todo.title }}</p>
    <button @click="$emit('delete-todo', todo.id)">Delete</button>
  </div>
</template>
<script>
export default {
  name: "Todo",
  props: ["todo"],
  methods: {
    markComplete() {
      this.$emit("mark-comleted", this.todo.id);
    },
  },
};
</script>
<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
