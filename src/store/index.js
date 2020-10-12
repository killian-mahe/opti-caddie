import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: {
     apple : {
       id : 0,
       label : "Pomme"
      },
      biscuit : {
        id : 1,
        label : "Biscuit"
      },
      beef : {
        id : 2,
        label : "Bœuf"
      }
    },
    shopping_list : [
      {
        name : "Vacances",
        id : 2,
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
        username : 'killian-mahe',
        password : 'azertyuiop',
        shopping_list : [2, 3]
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
