<template>
  <div id="app">

    <HelpPopUp v-show="showPopUp" @exit="showPopUp = false"></HelpPopUp>

    <div v-if="displayNavBar" class="w-24 h-full float-left">
      <NavBar @display-help="showPopUp = true"></NavBar>
    </div>

    <div
      class="h-full"
      :class="{
        'ml-24': displayNavBar,
      }"
    >
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import { mapState, mapActions } from "vuex";
import HelpPopUp from "./components/HelpPopUp";

export default {
  name: "app",
  components: {
    NavBar: NavBar,
    HelpPopUp: HelpPopUp,
  },

  data() {
    return {
      showPopUp: false,
    };
  },

  computed: {
    ...mapState(["session", "users"]),

    displayNavBar: function () {
      return !["Login", "Scan", "Identifiants"].includes(this.$route.name);
    },
  },
  methods: {
    ...mapActions(["updateLoggedUser", "updateSelectedList"]),
  },
};
</script>>

<style lang="scss">
html {
  background-color: #2a2a2e;
}

#app {
  width: 1368px;
  height: 912px;
  margin: auto;
  background-color: white;
  user-select: none;
}
</style>
