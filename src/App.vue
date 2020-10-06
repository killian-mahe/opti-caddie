<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/list_edit">List edit</router-link> |
      <router-link to="/geo">Geo</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  html {
    background-color: #FAFAFA;
  }

  #app {
    width: 1368px;
    height: 912px;
    margin: auto;
    background-color: white;
  }

</style>
