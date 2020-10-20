<template>
  <div class="geo relative h-full w-full">

    <main class="w-full h-full">
      <img class="h-full w-full" src="/navigation.png" alt="navigation_background">
    </main>

    <!-- Bottom -->
    <footer class="absolute inset-x-0 bottom-0 p-3 flex justify-between items-end">
      <TimeTable :basket="shoppingListTotal" :time="session.shopping_list.time"></TimeTable>
      <div class="w-1/4">
        <ProductCard v-for="product in nextProducts" :key="product.id" :product="getProduct(product.id)" class="my-2"></ProductCard>
      </div>
    </footer>
  </div>
</template>

<script>
import TimeTable from '../components/Geo/TimeTable.vue';
import ProductCard from '../components/Geo/ProductCard.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Geo',
  components: {
      TimeTable, ProductCard
  },
  computed: {
    ...mapState(['products', 'session']),
    ...mapGetters(['shoppingListTotal']),
    nextProducts: function() {
      if (this.session.shopping_list.products)
      {
        return this.session.shopping_list.products.slice(0, 3);
      }
      return [];
    },
  },
  methods: {
    getProduct: function(id) {
      return this.products.find(product => product.id === id);
    }
  }
}
</script>
