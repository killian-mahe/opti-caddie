<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/list_edit">List edit</router-link> |
      <router-link to="/geo">Geo</router-link>
      <router-link to="/scan">Scan</router-link>
    </div> -->

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
  mounted() {
    this.updateLoggedUser(0);
    this.updateSelectedList(this.session.user.user_lists[0]);
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
}
</style>
