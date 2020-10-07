<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/list_edit">List edit</router-link> |
      <router-link to="/geo">Geo</router-link>
    </div>

    <div class="w-24 h-full float-left">
      <NavBar></NavBar>
    </div>

    <div class="ml-24 h-full">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "app",
  components: {
    NavBar: NavBar,
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
