import Vue from 'vue';
import VueRouter from 'vue-router';
import Start from '../views/Start.vue';
import End from '../views/End.vue';
import Slide1 from '../views/slide/One.vue';
import Slide2 from '../views/slide/Two.vue';
import Slide3 from '../views/slide/Three.vue';
import Slide4 from '../views/slide/Four.vue';
import Slide5 from '../views/slide/Five.vue';
import Slide6 from '../views/slide/Six.vue';
import Slide7 from '../views/slide/Seven.vue';
import Slide8 from '../views/slide/Eight.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'start',
        component: Start
    },
    {
        path: '/end',
        name: 'end',
        component: End
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
    },
    {
        path: '/slide/5',
        name: 'Slide5',
        component: Slide5
    },
    {
        path: '/slide/6',
        name: 'Slide6',
        component: Slide6
    },
    {
        path: '/slide/7',
        name: 'Slide7',
        component: Slide7
    },
    {
        path: '/slide/8',
        name: 'Slide8',
        component: Slide8
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
