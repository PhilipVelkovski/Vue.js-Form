import { createWebHistory, createRouter } from 'vue-router';
import Patientform from "./components/Patientform.vue";
import Summary from "./components/Summary.vue";
const routes = [
	{
		path: '/Patientform',
		component: Patientform,
	},
    {
		path: "/Summary",
		component: Summary,
       
		name:'Summary'

	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;