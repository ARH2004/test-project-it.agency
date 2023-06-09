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
      const foundItem = state.arrCart.find((el) => el.id === item.id);
      if (foundItem) {
        if (!foundItem.initialPrice) {
          foundItem.initialPrice = foundItem.price;
        }
        foundItem.price = foundItem.price + foundItem.initialPrice;
        foundItem.count = foundItem.count + 1;
        return foundItem;
      } else {
        return null;
      }
    },
    findItemTocardMinus(state, item) {
      const foundItem = state.arrCart.find((el) => el.id === item.id);
      if (foundItem) {
        if (!foundItem.initialPrice) {
          foundItem.initialPrice = foundItem.price;
        }
        foundItem.price = foundItem.price - foundItem.initialPrice;
        foundItem.count = foundItem.count - 1;
        return foundItem;
      } else {
        return null;
      }
    },
    delItemInArr(state, item) {
			const index = state.arrCart.findIndex((el) => el.id === item.id);
      if (index !== -1) {
        state.arrCart.splice(index, 1);
      }
		},
  },
  actions: {},
  // modules: {
  // }
});
