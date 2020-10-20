<template>
  <div class="inline-block">
    <h3 class="inline-block  pl-8 pt-2 text-2xl">{{ list.name }} <br> ~{{ list.time }}</h3> 
    <div class="inline-block float-right pr-8 pt-5">
    <SimpleButton name="Editer" class="w-48 inline-block float-right text-xl" style></SimpleButton> 
  </div>
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