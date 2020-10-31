import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 0,
        label: "Pomme",
        price: 3,
        img: 'pomme.png',
        category: "Fruits"
      },
      {
        id: 1,
        label: "Biscuit",
        price: 1.2,
        img: 'biscuits.png',
        category: "Biscuits"
      },
      {
        id: 2,
        label: "Bœuf",
        price: 11.25,
        img: 'beef.png',
        category: "Boucherie"
      },
      {
        id: 3,
        label: "Oeufs x6",
        price: 1.2,
        img: 'eggs.png',
        category: "Frais"
      },
      {
        id: 4,
        label: "Lait x6",
        price: 5.4,
        img: 'milk.png',
        category: "Frais"
      },
      {
        id: 5,
        label: "Pâtes 500g",
        price: 1.24,
        img: 'pasta.png',
        category: "Frais"
      },
      {
        id: 6,
        label: "Oignon",
        price: 1.24,
        img: 'onion.png',
        category: "Légumes"
      },
      {
        id: 7,
        label: "Dentifrice",
        price: 2.84,
        img: 'toothpaste.png',
        category: "Hygiène"
      },
      {
        id: 8,
        label: "Saucisson",
        price: 2.84,
        img: 'sausage.png',
        category: "Boucherie"
      }
    ],
    productsInPromo: [
      { img: 'beef.png', label: "Bœuf", id: 0, price: 11.25 }, { img: 'biscuits.png', label: "Biscuit", id: 1, price: 1.2 }
    ],
    shopping_lists: [
      {
        name: "Vacances",
        id: 2,
        time: 25,
        products: [
          {
            id: 1,
            quantity: 2
          },
          {
            id: 2,
            quantity: 3
          }
        ]
      },
      {
        name: "Week-end",
        id: 3,
        time: 35,
        products: [
          {
            id: 0,
            quantity: 1
          },
          {
            id: 2,
            quantity: 3
          }
        ]
      }
    ],
    users: [
      {
        id: 0,
        username: 'killian-mahe',
        password: 'azertyuiop',
        user_lists: [2, 3]
      },
      {
        id: 1,
        username: 'yolo',
        password: 'qwertyuiop',
        user_lists: [2]
      }
    ],
    session: {
      user: {

      },
      shopping_list: {

      }
    }
  },
  mutations: {
    CHANGE_CONNECTED_USER(state, user_id) {
      state.session.user = state.users.find(user => user.id === Number(user_id));
    },
    CHANGE_SELECT_SHOPPING_LIST(state, list_id) {
      if (state.session.user.user_lists.includes(list_id)) {
        state.session.shopping_list = state.shopping_lists.find(list => list.id === Number(list_id));
      } else {
        console.error("Shopping list not owned by the user");
      }
    },

    CHANGE_ITEM_IN_LIST(state, payload) {
      let list = state.shopping_lists.find(list => list.id === Number(payload.list_id));

      if (list) {
        let productInList = list.products.find(product => product.id === payload.product_id);

        if (productInList) {
          productInList.quantity += payload.amount;

        } else {

          if (state.products.find(product => product.id === Number(payload.product_id)))
            list.products.push({ id: payload.product_id, quantity: payload.amount });
          else
            console.error("Unknown product !");
        }
      } else {
        console.error("Unknown list !");
      }

      // Ouais c'est crade mais ça fix un truc
      list.products = list.products.filter(product => product.quantity > 0);
    },
    CREATE_SHOPPING_LIST(state, id) {
      if (!state.shopping_lists.map(list => list.id).includes(id))
      {
        let shopping_list = {
          name: "Sans nom",
          id: id,
          time: 0,
          products: []
        };

        state.shopping_lists.push(shopping_list);
        state.session.user.user_lists.push(id);
      }
    },
    UPDATE_LIST_NAME(state, { list_id, list_name }) {
      state.shopping_lists.forEach(list => {
        if (list.id == list_id) {
          list.name = list_name;
        }
      });
      if (state.session.shopping_list && state.session.shopping_list.id == list_id) {
        state.session.shopping_list.name = list_name;
      }
    }
  },
  actions: {
    updateLoggedUser({ commit }, user_id) {
      commit('CHANGE_CONNECTED_USER', user_id);
    },
    updateSelectedList({ commit }, list_id) {
      commit('CHANGE_SELECT_SHOPPING_LIST', list_id);
    },
    updateItemQuantityInList({ commit }, payload) {
      commit('CHANGE_ITEM_IN_LIST', payload);
    },
    createShoppingList({ commit }, list_id) {
      commit('CREATE_SHOPPING_LIST', list_id);
    },
    updateListName({ commit }, payload) {
      commit('UPDATE_LIST_NAME', payload);
    }
  },
  getters: {
    shoppingListTotal: (state) => (id) => {
      let shopping_list = state.shopping_lists.find(list => list.id == id);

      return shopping_list.products.reduce((accumulator, product) => {
        return accumulator + state.products.find(p => p.id === product.id).price * product.quantity;
      }, 0);
    },
    isLoggedIn: function (state) {
      if (typeof state.session.user.id !== 'undefined') return true;
      return false;
    },
    nextShoppingListId: (state) => {
      let ids = state.shopping_lists.map(list => list.id);
      return Math.max(...ids) + 1;
    }
  },
  modules: {
  }
})
