<template>
  <form
    class="d-flex justify-content-start align-items-start col-4 rounded mb-4 shadow-sm"
    @submit="addItem"
  >
    <input
      type="text"
      class="form-control"
      id="titleTodo"
      placeholder="add new todo"
      v-model="title"
    />
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  name: "add-todo",

  setup(props, { emit }) {
    let title = ref("");

    const addItem = (event) => {
      event.preventDefault();

      const newItem = {
        title: title.value,
        completed: false,
      };

      emit("addTodo", newItem);
      title.value = "";
    };
    return { title, addItem };
  },
};
</script>

<style></style>
