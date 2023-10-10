<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="new task" v-model="newTask" />
    <button>add</button>
  </form>
  <div v-show="taskStore.errAdd">mlmlmlmlm</div>
</template>

<script>
import { useTaskStore } from "../../store/taskStore";
import { ref } from "vue";
export default {
  name: "add-task",
  setup() {
    const taskStore = useTaskStore();
    const newTask = ref("");
    console.log(taskStore.errAdd);
    const handleSubmit = () => {
      if (newTask.value.length > 0) {
        taskStore.addTask({
          title: newTask.value,
          isFav: false,
          id: Math.floor(Math.random() * 100),
        });
        taskStore.errAdd = false;
        newTask.value = "";
      } else {
        taskStore.errAdd = true;
      }
    };
    return {
      taskStore,
      newTask,
      handleSubmit,
    };
  },
};
</script>

<style></style>
