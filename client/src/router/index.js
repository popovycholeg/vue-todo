import { createWebHistory, createRouter } from "vue-router";
import TodosPage from "../pages/TodosPage.vue";
import LoginPage from "../pages/LoginPage.vue";

const routes = [
  // TODO: fix default route
  // {
  //   path: "/",
  //   name: "Home",
  //   component: TodosPage,
  // },
  {
    path: "/todos",
    name: "Todos",
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
