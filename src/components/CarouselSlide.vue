<template>
    <transition :name="config.direction" mode="in-out">
      <div v-show="config.visibleSlide === slide.id" class="carousel-slide">
          <slot><p  class="inline-block text-3xl mr-12" >-50% sur le produit {{ slide.label }} : {{ slide.price/2 }}€ !</p><img :src="imgLink" class="inline-block w-48 h-48"/></slot>
      </div>
      
    </transition>
    
</template>


<script>
export default {
    name: "CarouselSlide",
    props: {
          slide : {
          type: Object,
          required: true
          },
          config: {
          type: Object,
          required: true
          },
          },

    data() {
        return {

        }
    },
    computed: {
      imgLink : function() {
          return "/img/products/"+this.slide.img;
      }
  },
}
</script>

<style>

.carousel-slide{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom : 0;
}

.left-enter-active {
    animation: leftInAnimation 0.4s ease-in-out
}

.left-leave-active{
    animation: leftOutAnimation 0.4s ease-in-out;
}

@keyframes leftInAnimation{
    from {transform : translateX(100%);}
    to   {transform : translateX(0);}
}

@keyframes leftOutAnimation{
    from {transform : translateX(0);}
    to   {transform : translateX(-100%);}
}

.right-enter-active {
    animation: rightInAnimation 0.4s ease-in-out
}

.right-leave-active{
    animation: rightOutAnimation 0.4s ease-in-out;
}

@keyframes rightInAnimation{
    from {transform : translateX(-100%);}
    to   {transform : translateX(0);}
}

@keyframes rightOutAnimation{
    from {transform : translateX(0);}
    to   {transform : translateX(+100%);}
}

</style>
