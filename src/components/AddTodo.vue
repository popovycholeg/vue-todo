<template>
  <input type="text" v-model="newTodo" id="addTodo" />
  <label for="addTodo" class="addTodo">Add todo</label>
</template>

<script>
export default {
  name: "AddTodo",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
.addTodo {
  margin-left: 10px;
}
</style>
