import Vue from 'vue';

import Router from 'vue-router';
import Meta from 'vue-meta';

import ServiceIndex from './pages/ServiceIndex.vue';
import ServiceItem from './pages/ServiceItem.vue';
import ErrorNotFound from './pages/ErrorNotFound.vue';
import ErrorUnauthorized from './pages/ErrorUnauthorized.vue';
import ErrorInternalServer from './pages/ErrorInternalServer.vue';

Vue.use(Router);
Vue.use(Meta);

let router = new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            name: 'home',
            component: ServiceIndex
        },
        {
            path: '/service/:serviceId',
            name: 'service.detail',
            component: ServiceItem,
            props: route => ({
                serviceId: Number(route.params.serviceId)
            })
        },
        {
            path: '/403',
            name: 'error.403',
            component: ErrorUnauthorized
        },
        {
            path: '/404',
            name: 'error.404',
            component: ErrorNotFound
        },
        {
            path: '/500',
            name: 'error.500',
            component: ErrorInternalServer
        },
        {
            path: '*',
            redirect: { name: 'error.404' }
        }
    ]
});

export default router;
