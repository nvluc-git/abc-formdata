<template>
  <div
    class="shadow mb-3 p-3 rounded bg-body d-flex justify-content-between align-items-center"
  >
    <div class="d-flex justify-content-center align-items-center gap-4">
      <div>{{ task.id }}</div>
      <div>{{ task.title }}</div>
      <div>{{ task.status }}</div>
    </div>
    <div class="d-flex justify-content-start align-items-center gap-2">
      <button class="btn btn-sm btn-danger">Delete</button>
      <button class="btn btn-sm btn-primary">Like</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "task-detail",
  props: ["task"],
};
</script>

<style></style>
