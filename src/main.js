import Vue from 'vue';

import './bootstrap.js';

import App from './App.vue';
import router from './router';
import store from './store/index.js';
import StorageControl from './store/storageControl.js';
import eventBus from './event-bus.js';
import './registerServiceWorker';

import './styles/main.scss';

let app;

router.beforeEach((to, from, next) => {
    eventBus.$emit('clearNotification');
    next();
});

Vue.config.productionTip = false;

/**
 * Initialize Vue.
 */
app = new Vue({
    router,
    store,
    data: {
        version: 0.1
    },
    render: h => h(App)
}).$mount('#app');

StorageControl.check(app.version);
