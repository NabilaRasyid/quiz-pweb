import { createWebHistory, createRouter } from "vue-router";
import halaman from "@/views/halaman.vue";
import info from "@/views/info.vue";

const routes = [
    {
        path: "/halaman",
        name: "halaman",
        component: halaman,
    },
    {
        path: "/info",
        name: "info",
        component: info,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;