<template>
  <div class="container">
    <headerPage />
    <todosPage />
  </div>
</template>

<script>
import headerPage from "../components/my-exam/header-page.vue";
import todosPage from "../components/my-exam/todos-page.vue";

export default {
  name: "my-exam",
  components: {
    headerPage,
    todosPage,
  },
};
</script>

<style></style>
