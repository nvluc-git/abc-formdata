<template>
  <div class="">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import navBar from "./components/layout/nav-bar.vue";
export default {
  name: "App",
  components: { navBar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
