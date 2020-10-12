import Vuex from "vuex";
import axios from "axios";

const BASE_URL = "http://localhost:1337";

export const ACTION_TYPES = {
  fetchTodos: "fetchTodos",
  addTodo: "addTodo",
  deleteTodo: "deleteTodo",
  updateTodo: "updateTodo",
};

export default Vuex.createStore({
  state: {
    todos: [],
  },
  mutations: {
    [ACTION_TYPES.fetchTodos]: (state, todos) => (state.todos = todos),
    [ACTION_TYPES.addTodo]: (state, todo) => state.todos.unshift(todo),
    [ACTION_TYPES.deleteTodo]: (state, id) =>
      (state.todos = state.todos.filter((todo) => todo.id !== id)),
    [ACTION_TYPES.updateTodo]: (state, updatedTodo) => {
      const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
      if (!index) return;
      state.todos.splice(index, 1, updatedTodo);
    },
  },
  actions: {
    onFetchTodos: async ({ commit }) => {
      const response = await axios.get(`${BASE_URL}/todos`);
      commit(ACTION_TYPES.fetchTodos, response.data);
    },
    onAddTodo: async ({ commit }, title) => {
      const response = await axios.post(`${BASE_URL}/todos`, {
        title,
        completed: false,
      });
      console.log(response);
      commit(ACTION_TYPES.addTodo, response.data);
    },
  },
});
