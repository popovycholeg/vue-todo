import Vuex from "vuex";
import axios from "axios";

const BASE_URL = "http://localhost:1337";

const ACTION_TYPES = {
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
  },
  actions: {
    onFetchTodos: async ({ commit }) => {
      const response = await axios.get(`${BASE_URL}/todos`);
      commit(ACTION_TYPES.fetchTodos, response.data);
    },
  },
});
