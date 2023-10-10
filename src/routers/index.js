import { createRouter, createWebHistory } from "vue-router";
import { homePage } from "./homePage";
import { testPinia } from "./testPinia";
import { myExam } from "./myExam";
import { posts } from "./post";
const routes = [...homePage, ...testPinia, ...myExam, ...posts];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
