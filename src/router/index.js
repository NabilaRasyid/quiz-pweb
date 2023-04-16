import { createWebHistory, createRouter } from "vue-router";
import halaman from "../views/halaman.vue";
import info from "../views/info.vue";
import portofolio from "../views/portofolio.vue"

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
    {
        path: "/portofolio",
        name: "portofolio",
        component: portofolio,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;