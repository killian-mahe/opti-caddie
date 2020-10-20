<template>
    <h3 class="inline-block  ml-8 my-2 text-2xl">{{ list.name }} <br> ~{{ duration }}</h3> 
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
  computed: {
      duration() {
          if (this.list.time >= 60) {

              let hour = Math.trunc(this.list.time/60);
              let min = this.list.time%60;

              return hour+"h"+min;
          }
          else{
              return this.list.time+" min";
          }
      }
  }

 
}
</script>