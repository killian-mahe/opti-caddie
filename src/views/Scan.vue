<template>
  <div class="Scan">
      <img src="../assets/logo_leclerc.svg" class=" object-scale-down h-24 w-auto mr-auto ml-2 pt-2">
      Scan
        <router-link to="/login">
                <SimpleButton name="Retour" class="w-48 inline-block ml-auto text-xl" style></SimpleButton> 
        </router-link>
  </div>
</template>

<script>
import SimpleButton from "../components/SimpleButton.vue"
export default {
  name: 'Scan',
  components: {
      SimpleButton
  }
}
</script>
