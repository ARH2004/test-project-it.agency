import { createStore } from "vuex";

export default createStore({
  state: {
    arrCart: [],
  },
  getters: {
    isCarts: (state) => {
      return state.arrCart;
    },
  },
  mutations: {
    addItemToCart(state, item) {
      state.arrCart.push(item);
    },
    findItemTocardPlus(state, item) {
      console.log(item);
      const arrTrue = state.arrCart?.filter((el) => {
        if (el.id === item.id) {
          return (el.count += 1);
        }
      });
      return arrTrue;
    },
    findItemTocardMinus(state, item) {
      console.log(item);
      const arrTrue = state.arrCart?.filter((el) => {
        if (el.id === item.id) {
          return (el.count -= 1);
        }
      });
      return arrTrue;
    },
  },
  actions: {},
  // modules: {
  // }
}); 
