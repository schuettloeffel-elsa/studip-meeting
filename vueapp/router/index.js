import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            name: "admin",
            path: "/admin",
            component: () => import("@/views/Admin")
        },
        {
            name: "lobby",
            path: "/lobby",
            component: () => import("@/views/Lobby")
        },
        {
            name: "course",
            path: "/",
            component: () => import("@/views/Course"),
        }
    ]
});
