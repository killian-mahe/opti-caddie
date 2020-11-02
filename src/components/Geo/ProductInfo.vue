<template>
<div class="absolute" :style="'left:'+position.x+'px;top:'+position.y+'px;'" v-click-outside="() => display = false">
    <span class="text-leclercOrange absolute origin-center" @click="() => display = true">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>
    </span>
    <div class="bg-product-card py-2 px-2 flex justify-around rounded-md shadow-lg items-center transform translate-x-5 translate-y-5" v-show="display">
        <!-- IMG -->
        <img :src="imgLink" class="object-cover h-10 w-10 rounded-full border-leclercBlue border-2" :alt="product.label+'_img'">
        
        <!-- Product info -->
        <div class="ml-2 text-xl font-medium">{{ product.label }}</div>
    </div>
</div>
</template>

<script>
import vClickOutside from 'v-click-outside';

export default {

  name: 'ProductInfo',
  directives: {
      clickOutside: vClickOutside.directive
  },
  props: {
      product : {
          type: Object,
          required: true
      },
      position : {
          type: Object,
          required: true
      }
  },
  data() {
      return {
          display: false
      }
  },
  computed: {
      imgLink : function() {
          return "/img/products/"+this.product.img;
      }
  },
}
</script>

<style>
    .bg-product-card {
        background-color: #f2f2f2;
    }
</style>
