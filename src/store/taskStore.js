import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "first task", isFav: true },
      { id: 2, title: "second task", isFav: false },
      { id: 3, title: "third task", isFav: true },
      { id: 4, title: "four task", isFav: false },
      { id: 5, title: "five task", isFav: true },
    ],
    name: "Pinia - State management ",
    errAdd: false,
  }),

  getters: {
    favs() {
      return this.tasks.filter((t) => t.isFav);
    },
    favCount() {
      return this.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p;
      }, 0);
    },
    totalCount: (state) => {
      return state.tasks.length;
    },
  },

  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
  },
});
