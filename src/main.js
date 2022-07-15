import { createApp } from 'vue'
import App from './App.vue'
import Summary from "./components/Summary";
import FormTitle from "./components/FormTitle";
import router from './router.js';


const app = createApp(App);

app.component('FormTitle',FormTitle);

app.component('Summary',Summary);


app.use(router)
app.mount('#app');

