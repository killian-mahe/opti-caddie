<template>
  <div class="TimeTable w-64 h-24 p-2 bg-time-table flex flex-col justify-around text-xl rounded-md shadow-md">
      <div class="flex justify-between">
          <span class="font-medium">Temps restant</span>
          <span>{{remainingTime}}</span>
      </div>
      <div class="flex justify-between">
          <span class="font-medium">Panier</span>
          <span>{{basket}} €</span>
      </div>
  </div>
</template>

<script>

export default {

  name: 'TimeTable',
  props: {
      basket : {
          type: Number,
          required: true,
          default: 0
      },
      time: {
          type: Number,
          required: true,
          default: 0
      }
  },
  computed: {
      remainingTime() {
          if (this.time >= 60) {

              let hour = Math.trunc(this.time/60);
              let min = this.time%60;

              return hour+"h"+min;
          }
          else{
              return this.time+" min";
          }
      }
  }
}
</script>

<style lang="css">
    .bg-time-table {
        background-color: #f2f2f2;
    }
</style>
