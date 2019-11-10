import Vue from 'vue';
import VueRouter from 'vue-router';
import Start from '../views/Start.vue';
import Slide1 from '../views/slide/One.vue';
import Slide2 from '../views/slide/Two.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'start',
        component: Start
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/slide/1',
        name: 'Slide1',
        component: Slide1
    },
    {
        path: '/slide/2',
        name: 'Slide2',
        component: Slide2
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
