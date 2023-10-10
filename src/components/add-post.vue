<template>
  <div class="shadow rounded p-5 mb-5">
    <div class="text-center fs-1 text-primary mb-5">Add a new article</div>
    <div class="mt-5 mb-5 border border-danger rounded">
      <div v-if="message" :class="` ${error ? 'loi' : 'thanhcong'}`">
        <div class="text-info">{{ message }}</div>
      </div>
    </div>
    <form @submit.prevent="sendFile" enctype="multipart/form-data">
      <div class="mb-3">
        <label for="formFile" class="form-label">Image file</label>
        <input
          id="formFile"
          class="form-control"
          type="file"
          ref="file"
          @change="selectFile"
        />
      </div>
      <button type="submit" class="btn btn-primary">Get values</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "add-post",
  data() {
    return {
      file: "",
      message: "",
      error: false,
    };
  },
  methods: {
    selectFile() {
      const file = this.$refs.file.files[0];
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      if (allowedTypes.includes(file.type)) {
        this.file = file;
        this.error = false;
        this.message = "";
      } else {
        this.error = true;
        this.message = "Only images are allowed";
      }
    },
    async sendFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      try {
        await axios.post("/upload", formData);
        this.message = "file has been uploaded";
        this.file = "";
        this.error = false;
      } catch (error) {
        this.message = error.response.data.error;
        this.error = true;
      }
    },
  },
};
</script>

<style></style>
