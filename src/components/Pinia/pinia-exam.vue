<template>
  <div class="bg-body-tertiary rounded shadow-sm p-5">
    <div class="text-center fs-1">{{ taskStore.name }}</div>
    <div>
      <addTask />
    </div>
    <div>
      <button @click="filter = 'all'" class="btn btn-primary btn-sm">
        All task
      </button>
      <button @click="filter = 'favs'" class="btn btn-primary btn-sm ms-2">
        favs task
      </button>
    </div>
    <!-- tasks list -->
    <div class="mt-5" v-if="filter === 'all'">
      <div>your have {{ taskStore.totalCount }} tasks left to do</div>
      <div v-for="(task, index) in taskStore.tasks" :key="index">
        <taskDetail :task="task" />
      </div>
    </div>
    <!--  -->
    <div class="mt-5" v-if="filter === 'favs'">
      <div>your have {{ taskStore.favCount }} favs left to do</div>

      <div v-for="(task, index) in taskStore.favs" :key="index">
        <taskDetail :task="task" />
      </div>
    </div>
  </div>
</template>

<script>
import taskDetail from "./task-detail.vue";
import { useTaskStore } from "../../store/taskStore";
import addTask from "./add-task.vue";
import { ref } from "vue";

export default {
  name: "pinia-exam",
  components: {
    taskDetail,
    addTask,
  },
  setup() {
    const taskStore = useTaskStore();
    const filter = ref("all");

    return { taskStore, filter };
  },
};
</script>

<style></style>
