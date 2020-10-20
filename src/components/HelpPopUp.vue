<template>
  <div id="wrapper">
    <div id="popup">
      Blah blah très très l'explication de comment ça marche et tout, sisi tavu.

      <div id="popup-bottom" class="cursor-pointer" @click="callOperator()">
        <span class="text-lg mx-2">Appel vendeur</span>
        <div id="help-btn" class="cursor-pointer">
          <i data-feather="bell" class="w-12 h-12"></i>
        </div>
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
  /* @apply w-64; */
  width: 500px;
  height: 750px;
  @apply opacity-100;
  @apply z-20;
  @apply bg-white;
  @apply rounded-lg;
  @apply text-justify;
  @apply relative;
  @apply p-5;
}

#help-btn {
  @apply w-16;
  @apply h-16;
  @apply bg-red-700;
  @apply text-white;
  @apply rounded-full;
  @apply flex;

  justify-content: center;
  align-items: center;
}

#popup-bottom {
  @apply bg-red-500;
  @apply flex;
  @apply text-left;
  @apply h-20;
  @apply text-white;
  @apply rounded-full;

  @apply absolute;
  @apply inset-x-0;
  @apply bottom-0;

  justify-content: center;
  align-items: center;

  @apply m-5;
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

    callOperator: function () {
      alert("Normalement là, un vendeur accours de manière véloce.");
    },
  },

  mounted() {
    feather.replace();
  },
};
</script>