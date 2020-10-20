<template>
  <div class="inline-block">
    <h3 class="inline-block  pl-8 pt-2 text-2xl">{{ list.name }} <br> ~{{ list.time }}</h3> 
  </div>
</template>

<script>


  export default {
    name: 'List',
    props: {
        list : {
          type: Object,
          required: true
          },
    },
    data() {
      return {
          
        
        }
  },

 
}
</script>