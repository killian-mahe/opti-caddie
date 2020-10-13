<template>
<div class="bg-product-card w-1/4 flex justify-around rounded-md shadow-xl items-center">
    <!-- IMG -->
    <img :src="imgLink" class="object-cover h-16 w-16 rounded-full" :alt="product.label+'_img'">
    
    <!-- Product info -->
    <div class="flex flex-col w-1/3">
        <span class="text-xl font-medium">{{ product.label }}</span>
        <span class="text-base">Fruits</span>
    </div>

    <!-- Price -->
    <div class="text-2xl">{{ product.price }}€</div>
</div>
</template>

<script>

export default {

  name: 'ProductCard',
  props: {
      product : {
          type: Object,
          required: true
      }
  },
  computed: {
      imgLink : function() {
          return "/img/products/"+this.product.img;
      }
  },
  mounted() {
  }
}
</script>

<style>
    .bg-product-card {
        background-color: #f2f2f2;
    }
</style>
