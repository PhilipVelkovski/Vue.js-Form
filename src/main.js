import { createApp } from 'vue'
import App from './App.vue'
import FormTitle from "./components/FormTitle";
const app = createApp(App);
app.component('FormTitle',FormTitle);
app.mount('#app');

