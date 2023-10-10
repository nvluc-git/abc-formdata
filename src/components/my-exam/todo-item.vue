<template>
  <div
    class="d-flex justify-content-between align-items-center text-center mt-3 mb-3"
  >
    <div class="col">
      <input
        type="checkbox"
        :checked="todoProps.completed"
        @change="checkCompleted"
      />
    </div>
    <div class="col" :class="todoProps.completed ? 'is-completed' : ''">
      {{ todoProps.id }}
    </div>
    <div class="col" :class="todoProps.completed ? 'is-completed' : ''">
      {{ todoProps.title }}
    </div>
    <div class="col">{{ todoProps.completed }}</div>
    <div
      class="col d-flex justify-content-around align-items-center text-center"
    >
      <button class="btn btn-sm btn-outline-success" @click="checkCompleted">
        done
      </button>

      <button class="btn btn-sm btn-outline-danger" @click="deleteItem">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-item",
  props: ["todoProps", "indexProps"],
  setup(props, { emit }) {
    const checkCompleted = () => {
      emit("item-completed", props.todoProps.id);
    };
    const deleteItem = () => {
      emit("delete-item", props.todoProps.id);
    };

    return { checkCompleted, deleteItem };
  },
};
</script>

<style scoped>
.is-completed {
  text-decoration: line-through;
}
</style>
