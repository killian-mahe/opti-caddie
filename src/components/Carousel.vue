<template>
  <div class="carousel w-full">
      <slot></slot>

      <button @click="$emit('next')" class="next deco"><i data-feather="chevron-right" class="h-16 w-12 "> </i></button>
      <button @click="$emit('prev')" class="prev deco"><i data-feather="chevron-left"  class="h-16 w-12  "> </i></button>
  </div>
</template>

<script>

  export default {
    name: 'Carousel',
    data() {
      return {
          
        
        }
  },
   
}
</script>

<style >
.carousel{
    position: relative;
    height: 275px;
    overflow: hidden;
}

.deco{
    position: absolute;
 

    top: calc(50% - 30px);
    background-color: rgba(0,0,0,0.8);
    border: none;
    color: #FFF;
}

button:focus, button:hover{
    outline: none;
    cursor: pointer;
}

.next{
    right:0;
}

.prev{
    left: 0;
}
</style>