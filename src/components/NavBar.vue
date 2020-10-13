<template>
  <div id="nav" class="relative h-full w-full shadow-2xl">
    <div class="absolute inset-x-0 top-0">
      <!-- Top Leclerc Icon -->
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Logo_E.Leclerc_Sans_le_texte.svg"
        class="w-full p-2"
      />

      <!-- Top Buttons -->
      <router-link
        v-for="elem in top_elems"
        :key="elem.id"
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
        :key="elem.id"
        class="block py-4 cursor-pointer"
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
          id: 0,
          text: "Navigation",
          icon: "map-pin",
          path: "/geo",
        },
        {
          id: 1,
          text: "Edition de liste",
          icon: "file-text",
          path: "/list_edit",
        },
      ],

      bot_elems: [
        {
          id: 0,
          text: "Zoom +",
          icon: "zoom-in",
        },
        {
          id: 1,
          text: "Zoom -",
          icon: "zoom-out",
        },
        {
          id: 2,
          text: "Aide",
          icon: "help-circle",
        },
      ],
    };
  },

  mounted() {
    feather.replace();
  },
};
</script>