import Vue from 'vue';
import VueRouter from 'vue-router';
import Start from '../views/Start.vue';
import Slide1 from '../views/slide/One.vue';
import Slide2 from '../views/slide/Two.vue';
import Slide3 from '../views/slide/Three.vue';
import Slide4 from '../views/slide/Four.vue';

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
    },
    {
        path: '/slide/3',
        name: 'Slide3',
        component: Slide3
    },
    {
        path: '/slide/4',
        name: 'Slide4',
        component: Slide4
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
