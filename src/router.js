import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        }
    ]
});

export default router;

