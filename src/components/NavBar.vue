<template>
  <div id="nav" class="relative h-full w-full shadow-2xl">
    <div class="absolute inset-x-0 top-0">
      <!-- Top Leclerc Icon -->
      <img src="@/assets/logo_leclerc.svg" class="w-full p-2" />

      <!-- Top Buttons -->
      <router-link
        v-for="elem in top_elems"
        :key="elem.text"
        :to="elem.path"
        class="block py-4"
        id="selection_button"
      >
        <i :data-feather="elem.icon" class="h-12 w-12 mx-auto"></i
      ></router-link>
    </div>

    <!-- Bottom Buttons -->
    <div class="absolute inset-x-0 bottom-0">
      <div
        v-for="elem in bot_elems"
        :key="elem.text"
        class="block py-4 cursor-pointer"
        @click="elem.action"
      >
        <i :data-feather="elem.icon" class="h-12 w-12 mx-auto"></i>
      </div>
    </div>
  </div>
</template>

<style>
#nav {
  background-color: #f2f2f2;
}

#selection_button.router-link-active {
  @apply border-solid;
  @apply border-l-8;
  @apply border-leclercBlue;
  @apply stroke-current;
  @apply text-leclercBlue;
  @apply pr-2;
  background-color: #ccd7e7;
}
</style>

<script>
import feather from "feather-icons";
export default {
  name: "NavBar",
  components: {},

  data() {
    return {
      top_elems: [
        {
          text: "Navigation",
          icon: "map-pin",
          path: "/geo",
        },
        {
          text: "Edition de liste",
          icon: "file-text",
          path: "/show_list",
        },
      ],

      bot_elems: [
        {
          text: "Zoom +",
          icon: "zoom-in",
          action: "",
        },
        {
          text: "Zoom -",
          icon: "zoom-out",
          action: "",
        },
        {
          text: "Aide",
          icon: "help-circle",
          action: this.displayHelp,
        },
      ],
    };
  },

  mounted() {
    feather.replace();
  },

  methods: {
    displayHelp: function () {
      this.$emit("display-help");
    },
  },
};
</script>