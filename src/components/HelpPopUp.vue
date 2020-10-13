<template>
  <div id="wrapper">
    <div id="popup">
      Démerde toi, on est pas tes parents
      <div id="help-btn" class="cursor-pointer">
        <i data-feather="bell" class="w-12 h-12"></i>
      </div>
    </div>

    <div id="backdrop" @click="close()" class="cursor-pointer"></div>
  </div>
</template>

<style>
#backdrop {
  @apply bg-black;
  @apply bg-opacity-75;
  @apply w-full;
  @apply h-full;
  @apply absolute;
}

#wrapper {
  width: inherit;
  height: inherit;
  @apply absolute;
  @apply z-10;
  @apply flex;
  justify-content: center;
  align-items: center;
}

#popup {
  @apply w-64;
  @apply h-64;
  @apply opacity-100;
  @apply z-20;
  @apply bg-white;
  @apply rounded-lg;
  @apply p-6;
  @apply text-justify;
  @apply relative;
}

#help-btn {
  @apply w-16;
  @apply h-16;
  @apply bg-red-700;
  @apply text-white;
  @apply rounded-full;
  @apply flex;
  @apply absolute;
  @apply inset-x-0;
  @apply bottom-0;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import feather from "feather-icons";

export default {
  name: "HelpPopUp",

  methods: {
    close: function () {
      this.$emit("exit");
    },
  },

  mounted() {
    feather.replace();
  },
};
</script>