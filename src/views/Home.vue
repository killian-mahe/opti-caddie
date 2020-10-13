<template>
  <div class="home">
    <h1 class="pl-58 text-center font-bold pb-32">Mes listes</h1>
    <div class="ml-64 mr-24 bg-gray-300 h-20">
       <h3 class="inline-block pr-64">Vacances </h3> 
       <SimpleButton name="Editer" class="w-24 inline-block float-right" style></SimpleButton> 
    </div>
  </div>
</template>

<script>
import SimpleButton from "../components/SimpleButton.vue"

export default {

  name: 'Home',
  components: {
    SimpleButton
  },
}
</script>
