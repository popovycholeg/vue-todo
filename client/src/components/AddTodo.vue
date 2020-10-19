<template>
  <div>
    <form @submit="addNewTodo">
      <input
        v-model="title"
        type="text"
        name="title"
        class="input-group-field"
      />
      <span class="input-group-button">
          <button @click="addTask" 
                  class="btn btn-primary"
                  type="submit"
          >
            <i class="fa fa-plus"></i> Add
          </button>
        </span>
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
      store.dispatch("onAddTodo", title.value);
      title.value = "";
    };
    return {
      title,
      addNewTodo,
    };
  },
};
</script>
<style scoped>

</style>
