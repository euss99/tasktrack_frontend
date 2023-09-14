import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import TaskList from "@/components/TaskList.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    alias: "/task",
    name: "task",
    component: TaskList,
  },
  {
    path: "/task/new",
    name: "new-task",
    component: () => import("@/components/TaskForm.vue"),
  },
  {
    path: "/task/:id",
    name: "detail-task",
    component: () => import("@/components/TaskDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
