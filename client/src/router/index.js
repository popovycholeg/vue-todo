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

router.beforeEach((to, from, next) => {
  if (to.path !== "/login" && localStorage.getItem("token") == null) {
    next("/login");
  } else {
    next();
  }
});

export default router;
