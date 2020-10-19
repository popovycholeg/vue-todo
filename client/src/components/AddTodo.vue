<template>
  <div>
    <form
      class="mb-3 mt-3 w-100 form"
      @submit="addNewTodo"
    >
      <div class="input-group w-50 inputWrapper">
        <input
          v-model="title"
          type="text"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <button class="btn btn-primary" type="submit">
            Add todo
          </button>
        </div>
      </div>
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
.form{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
