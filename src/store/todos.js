export default  {
  namespace: true,
  state: {
    todo: []
  },
  actions: {
    create ({commit}, task) {
      commit('create', task)
    }
  },
  mutations: {
    create (state, task) {
      state.todo.push(task)
    }
  },
  getters: {
    get (state) {
      return state.todo
    }
  }
}