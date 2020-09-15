<template>
  <input type="text" v-model="newTodo" />
</template>
<script>
export default {
  name: "AddTodo",
  props: {
    msg: String,
  },
};
</script>
