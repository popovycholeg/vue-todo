import { createWebHistory, createRouter } from "vue-router";
import TodosPage from "../pages/TodosPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: TodosPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
