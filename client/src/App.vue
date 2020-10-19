<template>
<div id="app">
  <TodosPage />
</div>
</template>

<script>
import TodosPage from "./routes/TodosPage";

export default {
  name: "App",
  components: {
    TodosPage,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
