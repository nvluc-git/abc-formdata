<template>
  <addTodo @addTodo="addTodo" />
  <div v-show="errAdd" class="p-5 text-warning text-center fs-1">
    khong de trong title
  </div>
  <div class="shadow rounded p-2">
    <div class="d-flex justify-content-between align-items-center text-center">
      <div class="col">#</div>
      <div class="col">id</div>
      <div class="col">title</div>
      <div class="col">completed</div>
      <div class="col">actions</div>
    </div>
    <div>
      <todoItem
        v-for="(todo, index) in todos"
        :key="index"
        :todoProps="todo"
        @item-completed="markCompleted"
        @delete-item="deleteTodo"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import todoItem from "../my-exam/todo-item.vue";
import addTodo from "../my-exam/add-todo.vue";
// import { v4 as uuidv4 } from "uuid";
import axios from "axios";
export default {
  name: "todos-page",
  components: { todoItem, addTodo },
  setup() {
    const todos = ref([]);
    const errAdd = ref(false);
    const getAll = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        todos.value = res.data;
      } catch (error) {
        console.log(error);
      }
    };
    getAll();

    const markCompleted = (id) => {
      todos.value = todos.value.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    };
    const deleteTodo = async (id) => {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        todos.value = todos.value.filter((todo) => todo.id !== id);
      } catch (error) {
        console.log(error);
      }
    };
    const addTodo = async (newItem) => {
      const res = await axios.post(
        `https://jsonplaceholder.typicode.com/todos/`,
        newItem
      );
      if (res.data.title == "") {
        errAdd.value = true;
        return;
      } else {
        todos.value.push(res.data);
        errAdd.value = false;
        return;
      }
    };

    return {
      todos,
      markCompleted,
      deleteTodo,
      addTodo,
      errAdd,
    };
  },
};
</script>

<style></style>
