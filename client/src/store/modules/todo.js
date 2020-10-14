export default {
  state: {
    todos: [],
  },
  mutations: {
    STATE_SET_TODOS(state, payload) {
      state = payload;
    },
    STATE_ADD_TODO(state, tdo) {
      state.todos.push(tdo);
    },
    STATE_REMOVE_TODO(state, index) {
      state.splice(index, 1);
    },
  },
  actions: {
    SET_TODOS(contex, payload) {
      contex.commit(contex, payload);
    },
    ADD_TODO(context, tdo) {
      context.commit("STATE_ADD_TODO", tdo);
    },
    REMOVE_TODO(context, index) {
      context.commit("STATE_REMOVE_TODO", index);
    },
  },
  getters: {
    todos: (state) => state.todos,
  },
};
