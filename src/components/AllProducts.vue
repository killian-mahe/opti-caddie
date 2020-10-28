<template>
  <div class="all-products">
    <div id="search-section" class="shadow-2xl">
      <input
        v-model="search_query"
        placeholder="Chercher un produit"
        class="text-3xl shadow appearance-none border w-6/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <transition-group name="list" tag="product" id="products">
      <div
        id="product"
        v-for="product in displayableproducts"
        :key="product.id"
        @click="$emit('update-list', { product_id: product.id, amount: 1 })"
      >
        <div class="bg-white w-1/2 rounded p-2">
          <img
            :src="product_img(product.id)"
            class="m-auto object-cover h-32 w-32"
          />
          <div class="m-auto">{{ product.label }}</div>
          <div class="m-auto">{{ product.price }}€</div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AllProducts",
  components: {},

  data() {
    return {
      search_query: "",
    };
  },

  computed: {
    ...mapState(["products"]),

    displayableproducts() {
      return this.products.filter(
        (product) =>
          product.label.toLowerCase().search(this.search_query.toLowerCase()) !=
          -1
      );
    },
  },

  methods: {
    product_img(id) {
      return "/img/products/" + this.products[id].img;
    },
  },
};
</script>

<style scoped lang="scss">
.all-products {
  @apply w-full;
  @apply h-full;

  #search-section {
    @apply bg-green-500;
    height: 30%;
    @apply w-full;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  #products {
    @apply bg-gray-400;
    height: 70%;
    @apply w-full;

    overflow: scroll;
    overflow-x: hidden;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    cursor: pointer;

    #product {
      width: 50%;
      height: 35%;
      display: flex;
      justify-content: center;
      align-items: center;

      transition: all 0.2s;
    }
  }
}

.list-enter,
.list-leave-to {
  opacity: 0;
}
</style>