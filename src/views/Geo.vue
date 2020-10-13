<template>
  <div class="geo relative h-full w-full">

    <main class="w-full h-full">
      <img class="h-full w-full" src="/navigation.png" alt="navigation_background">
    </main>

    <!-- Bottom -->
    <footer class="absolute inset-x-0 bottom-0 p-3">
      <TimeTable :basket="50" :time="59"></TimeTable>
    </footer>
  </div>
</template>

<script>
import TimeTable from '../components/TimeTable.vue'

export default {
  name: 'Geo',
  components: {
      TimeTable
  }
}
</script>
