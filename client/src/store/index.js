import { createStore } from "vuex";
import todos from "./modules/todo";

export default createStore({
  modules: {
    todos,
  },
});
