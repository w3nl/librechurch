import Vue from 'vue';
import Vuex from 'vuex';
import domains from './modules/domains';
import products from './modules/products';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        domains,
        products
    },
    plugins: [
        createPersistedState({
            storage: window.sessionStorage
        })
    ]
});
