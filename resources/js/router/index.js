import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import('../views/home.vue'),
    },
    {
        path: "/weather-report",
        name: "weatherReport",
        component: () => import('../services/weather-app/index.vue'),
    },
    {
        path: "/users",
        name: "UserCRUD",
        component: () => import('../services/user-crud/index.vue'),
    },
    {
        path: "/create-user",
        name: "CreateUser",
        component: () => import('../services/user-crud/create.vue'),
    },
    {
        path: "/404",
        name: "PageNotExist",
        component: () => import('../views/Error.vue'),
    },
    {
        path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
        redirect: "/404",
    }
];

const router = createRouter({
    routes: routes,
    scrollBehavior: function (to, _from, savedPosition) {
        return window.scrollTo(0, 0);
    },
    history: createWebHistory('/'),
})

export default router;
