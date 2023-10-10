import { createRouter, createWebHistory } from "vue-router";
import adminRouter from "./admin.js";
import publicRouter from "./public.js";

const routes = [...adminRouter,...publicRouter]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
