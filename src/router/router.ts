import Dashboard from "@/views/dashboard/Dashboard.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
    meta: { layout: "DashboardLayout" },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
