<template>
  <div class="Scan">
    <img
      src="../assets/logo_leclerc.svg"
      class="object-scale-down inline-flex h-24 w-auto mr-auto ml-2 pt-2"
    />
    <router-link to="/login">
      <SimpleButton
        name="Retour"
        class="w-48 inline-block mr-4 mt-4 text-xl float-right"
        style
      ></SimpleButton>
    </router-link>
  </div>
</template>

<script>
import SimpleButton from "../components/SimpleButton.vue";
export default {
  name: "Scan",
  components: {
    SimpleButton,
  },
};
</script>
