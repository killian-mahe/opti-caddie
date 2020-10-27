import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
     {
       id : 0,
       label : "Pomme",
       price : 3,
       img : 'pomme.png',
       category: "Fruits"
      },
     {
        id : 1,
        label : "Biscuit",
        price : 1.2,
        img : 'biscuits.png',
        category: "Biscuits"
      },
     {
        id : 2,
        label : "Bœuf",
        price : 11.25,
        img : 'beef.png',
        category: "Boucherie"
      }
    ],
    productsInPromo: [
      {img : 'beef.png', label : "Bœuf", id : 0, price: 11.25}, {img : 'biscuits.png', label : "Biscuit", id : 1, price : 1.2}
    ],
    shopping_lists : [
      {
        name : "Vacances",
        id : 2,
        time: 25,
        products: [
          {
            id : 1,
            quantity : 2
          },
          {
            id : 2,
            quantity : 3
          }
        ]
      },
      {
        name : "Week-end",
        id : 3,
        time: 35,
        products: [
          {
            id : 0,
            quantity : 1
          },
          {
            id : 2,
            quantity : 3
          }
        ]
      }
    ],
    users : [
      {
        id : 0,
        username : 'killian-mahe',
        password : 'azertyuiop',
        user_lists : [2, 3]
      },
      {
        id : 1,
        username : 'yolo',
        password : 'qwertyuiop',
        user_lists : [2]
      }
    ],
    session : {
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

  },
  actions: {
    updateLoggedUser({ commit }, user_id) {
      commit('CHANGE_CONNECTED_USER', user_id);
    },
    updateSelectedList({ commit }, list_id) {
      commit('CHANGE_SELECT_SHOPPING_LIST', list_id);
    }
  },
  getters: {
    /*
    shoppingListTotal: function(state) {
      if (state.session.shopping_list.products) 
      {
        return state.session.shopping_list.products.reduce((accumulator, product) => {
          return accumulator + state.products.find(p => p.id === product.id).price*product.quantity;
        }, 0);
      }
      return 0;
    },
    */
    shoppingListTotal: (state) => (id) => {
      let shopping_list = state.shopping_lists.find(list => list.id == id);

      return shopping_list.products.reduce((accumulator, product) => {
        return accumulator + state.products.find(p => p.id === product.id).price*product.quantity;
      }, 0);
    },
    isLoggedIn: function(state) {
      if (typeof state.session.user.id !== 'undefined') return true;
      return false;
    }
  },
  modules: {
  }
})
