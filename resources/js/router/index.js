import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import(/* webpackChunkName: "Home" */ '../views/home.vue'),
    },
    {
        path: "/weather-report",
        name: "weatherReport",
        component: () => import(/* webpackChunkName: "ProductCategories" */ '../services/weather-app/index.vue'),
    },
    {
        path: "/users",
        name: "UserCRUD",
        component: () => import(/* webpackChunkName: "ProductCategories" */ '../services/user-crud/index.vue'),
    },
    {
        path: "/404",
        name: "PageNotExist",
        component: () => import(/* webpackChunkName: "ErrorPage" */ '../views/Error.vue'),
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
