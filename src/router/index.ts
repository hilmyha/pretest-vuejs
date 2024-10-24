import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import UserView from "../views/UserView.vue";
import SingleUserView from "../views/SingleUserView.vue";
import ProductView from "../views/ProductView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/users",
      name: "users",
      component: UserView,
    },
    {
      path: "/user/:id",
      name: "user",
      props: true,
      component: SingleUserView,
    },
    {
      path: "/products",
      name: "products",
      component: ProductView,
    },
  ],
});

export default router;
