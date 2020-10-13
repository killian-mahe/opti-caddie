<template>
  <div id="popup-wrapper" @click="close()">
    <div id="popup">C'est très l'aide</div>
  </div>
</template>

<style>
#popup-wrapper {
  width: inherit;
  height: inherit;
  @apply fixed;
  @apply z-10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

#popup {
  @apply w-64;
  @apply h-64;
  @apply opacity-100;
  @apply z-20;
  @apply bg-white;
  @apply rounded-lg;
  @apply p-6;
}
</style>

<script>
export default {
  name: "HelpPopUp",

  methods: {
    close: function () {
      this.$emit("exit");
    },
  },
};
</script>