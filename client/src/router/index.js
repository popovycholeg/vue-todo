import { createWebHistory, createRouter } from "vue-router";
import TodosPage from "../pages/TodosPage.vue";
import LoginPage from "../pages/LoginPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: TodosPage,
  },
  {
    path: "/todos",
    name: "Home",
    component: TodosPage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
