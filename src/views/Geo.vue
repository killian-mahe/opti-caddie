<template>
  <div class="geo relative h-full w-full">

    <main class="w-full h-full">
      <img class="h-full w-full" src="/navigation.png" alt="navigation_background">
    </main>

    <!-- Bottom -->
    <footer class="absolute inset-x-0 bottom-0 p-3 flex justify-between">
      <TimeTable :basket="50" :time="session.shopping_list.time"></TimeTable>
      <div>
        <ProductCard v-for="product in nextProducts" :key="product.id" :product="products.apple"></ProductCard>
      </div>
    </footer>
  </div>
</template>

<script>
import TimeTable from '../components/TimeTable.vue';
import ProductCard from '../components/ProductCard.vue';
import { mapState } from 'vuex';

export default {
  name: 'Geo',
  components: {
      TimeTable, ProductCard
  },
  computed: {
    ...mapState(['products', 'session']),
    nextProducts: function() {
      if (this.session.shopping_list.products)
      {
        return this.session.shopping_list.products.slice(0, 3);
      }
      return [];
    }
  }
}
</script>
