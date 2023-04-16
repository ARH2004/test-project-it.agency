import { createStore } from "vuex";

export default createStore({
  state: {
    arrCart: [],
  },
  getters: {
    isCarts: (state) => {
      return state.arrCart
    },
  },
  mutations: {
    addItemToCart(state, item) {
      state.arrCart.push(item);
    },
  },
  actions: {},
  // modules: {
  // }
}); 
