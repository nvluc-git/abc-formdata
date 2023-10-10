import { defineStore } from "pinia";

export const usePostStore = defineStore("postStore", {
  state: () => ({
    posts: [
      {
        id: 1,
        title: "first task",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img: "https://loremflickr.com/320/240/dog",
      },
      {
        id: 2,
        title: "second task",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img: "https://loremflickr.com/320/240/dog",
      },
      {
        id: 3,
        title: "third task",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img: "https://loremflickr.com/320/240/dog",
      },
      {
        id: 4,
        title: "four task",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img: "https://loremflickr.com/320/240/dog",
      },
      {
        id: 5,
        title: "five task",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img: "https://loremflickr.com/320/240/dog",
      },
    ],
  }),

  getters: {},

  actions: {
    // addTask(post) {
    //   this.tasks.push(post);
    // },
  },
});
