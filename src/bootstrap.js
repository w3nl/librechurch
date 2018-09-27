import 'es6-promise/auto';

import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import Way2Forms from './plugins/way2forms';

import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

/**
 * Plugins
 */
Vue.use(VueScrollTo);
Vue.use(Way2Forms);

/**
 * Check if the .env file has a Sentry public dsn key and if the current environment is live.
 * When both are true Initialize Raven
 */
/* eslint-disable */
if (process.env.SENTRY_DSN_PUBLIC && process.env.APP_ENV == 'live') {
    Raven.config(process.env.SENTRY_DSN_PUBLIC, {
        environment: 'live'
    })
        .addPlugin(RavenVue, Vue)
        .install();
}
/* eslint-enable */
