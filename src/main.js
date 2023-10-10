import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./routers";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import "primevue/resources/themes/lara-light-indigo/theme.css";

const app = createApp(App);
app.use(PrimeVue);
app.use(createPinia()); // Create the root store
app.use(router);

app.mount("#app");
