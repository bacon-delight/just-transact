import { createWebHistory, createRouter } from "vue-router";
import Content from "./components/Content.vue";
import Transactions from "./components/Transactions.vue";
import Success from "./components/Success.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Content,
	},
	{
		path: "/transactions",
		name: "Transactions",
		component: Transactions,
	},
	{
		path: "/success",
		name: "Success",
		component: Success,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
