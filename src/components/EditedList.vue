<template>
  <div class="edited-list">
    <router-link to="/show_list">
      <div id="return-btn">
        Retour <i data-feather="corner-down-left" class="h-12 w-12"></i>
      </div>
    </router-link>
    <div id="product-in-list">
      <div
        class="h-8 bg-white p-1 m-2 rounded cursor-pointer"
        v-for="item in listProducts.products"
        :key="item.id"
        @click="$emit('update-list', { product_id: item.id, amount: -1 })"
      >
        <span class="float-left">{{ products[item.id].label }}</span>
        <span class="float-right"
          >{{ products[item.id].price }} € x {{ item.quantity }}
        </span>
      </div>
    </div>
    <div id="total">
      <span>
        Total : {{ shoppingListTotal(listProducts.id).toFixed(2) }} €
      </span>
    </div>
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
    @apply text-5xl;

    display: flex;
    align-items: center;
    justify-content: center;
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
    @apply w-full;
    @apply bg-gray-700;
    @apply text-white;
    @apply text-4xl;

    height: 10%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

<script>
import { mapGetters, mapState } from "vuex";
import feather from "feather-icons";

export default {
  name: "EditedList",
  components: {},

  computed: {
    ...mapState(["products", "session", "shopping_lists"]),
    ...mapGetters(["shoppingListTotal"]),

    listProducts: function () {
      if (this.session.shopping_list.products) {
        let list_id = this.$route.params.list_id;
        let list = this.shopping_lists.find(
          (shop_list) => shop_list.id == list_id
        );

        list.products = list.products.filter(
          (product) => product.quantity >= 1
        );

        return list;
      }
      return [];
    },
  },

  mounted() {
    feather.replace();
  },
};
</script>
