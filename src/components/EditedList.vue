<template>
  <div class="edited-list">
    <router-link to="/show_list">
      <div id="return-btn">[[ RETOUR ]]</div>
    </router-link>
    <div id="product-in-list">
      <div
        class="h-8 bg-white p-1 m-2 rounded"
        v-for="item in listProducts"
        :key="item.id"
      >
        <span class="float-left">{{ products[item.id].label }}</span>
        <span class="float-right"
          >{{ products[item.id].price }} € x {{ item.quantity }}
        </span>
      </div>
    </div>
    <div id="total">Total : {{ shoppingListTotal }} €</div>
  </div>
</template>

<style scoped lang="scss">
.edited-list {
  @apply h-full;
  @apply w-full;

  #return-btn {
    height: 15%;
    @apply w-full;
    @apply bg-gray-700;
    @apply text-white;
  }

  #product-in-list {
    height: 75%;
    @apply w-full;
    @apply bg-gray-500;

    overflow: scroll;
    overflow-x: hidden;

    #product {
      @apply bg-gray-300;
    }
  }

  #total {
    height: 10%;
    @apply w-full;
    @apply bg-gray-700;
    @apply text-white;
    @apply text-center;
  }
}
</style>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "EditList",
  components: {},

  computed: {
    ...mapState(["products", "session"]),
    ...mapGetters(["shoppingListTotal"]),

    listProducts: function () {
      if (this.session.shopping_list.products) {
        return this.session.shopping_list.products;
      }
      return [];
    },
  },
};
</script>
