<template>
  <div class="geo relative h-full w-full">

    <main class="w-full h-full relative">
      <img class="h-full w-full" src="/navigation.png" alt="navigation_background">
        <ProductInfo
          v-for="point in points" 
          :key='point.x + ";" + point.y'
          :position="point"
          :product="getProduct(session.shopping_list.products[point.product].id)"></ProductInfo>
    </main>

    <!-- Bottom -->
    <footer class="absolute inset-x-0 bottom-0 p-3 flex justify-between items-end">
      <TimeTable :basket="shoppingListTotal(session.shopping_list.id)" :time="session.shopping_list.time"></TimeTable>
      <div class="w-1/4">
        <ProductCard v-for="product in nextProducts" :key="product.id" :product="getProduct(product.id)" class="my-2"></ProductCard>
      </div>
    </footer>
  </div>
</template>

<script>
import TimeTable from '../components/Geo/TimeTable.vue';
import ProductCard from '../components/Geo/ProductCard.vue';
import ProductInfo from '../components/Geo/ProductInfo.vue';
import feather from 'feather-icons';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Geo',
  components: {
      TimeTable, ProductCard, ProductInfo
  },
  data() {
    return {
      points: [
        {x: 480, y: 230, product: 0},
        {x: 860, y: 250, product: 1}
      ]
    }
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
  mounted() {
    feather.replace({fill: 'currentColor'});
  },
  methods: {
    getProduct: function(id) {
      return this.products.find(product => product.id === id);
    },
    onClickOutside: function(point) {
      point.display = false;
    }
  }
}
</script>
