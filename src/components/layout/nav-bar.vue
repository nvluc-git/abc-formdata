<template>
  <div class="bg-body-tertiary text-dark rounded p-3 shadow-sm mb-4">
    <div
      class="container d-flex justify-content-start align-items-center gap-4"
    >
      <router-link to="/" class="navLink" active-class="active"
        >Home</router-link
      >
      <router-link to="/Pinia" class="navLink" active-class="active"
        >Pinia</router-link
      >
      <router-link to="/myExam" class="navLink" active-class="active"
        >my-exam</router-link
      >
      <router-link to="/posts" class="navLink" active-class="active"
        >Post</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
};
</script>

<style scoped>
.navLink {
  text-decoration: none;
  color: black;
  font-size: 1.2em;
  padding: 3px 8px;
  border-radius: 5px;
  transition: all 0.5s;
}
.navLink:hover {
  color: black;
  background: #d8d9da;
}
.active {
  background-color: #d8d9da;
}
</style>
