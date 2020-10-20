<template>
  <div class="inline-block">
    <h3 class="inline-block  pl-8 pt-2 text-2xl">{{ list.name }} <br> ~{{ duration }}</h3> 
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