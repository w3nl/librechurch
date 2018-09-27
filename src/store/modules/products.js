import ProductsService from '../../services/products.js';

const state = {
    products: [],
    productsService: null
};

const getters = {
    product: state => id => {
        return state.products[id];
    },
    products: state => {
        return state.products;
    },
    extensions: state => {
        return state.products.filter(product => product.type == 'extension');
    }
};

const actions = {
    /**
     * Get products.
     *
     * @param {object} commit, state
     *
     * @return {promise}
     */
    get({ commit, state }) {
        if (!state.productsService || !state.productsService.get) {
            state.productsService = new ProductsService();
        }

        commit('set', []);

        return state.productsService
            .get()
            .then(data => {
                commit('set', data);
            })
            .catch(error => Promise.reject(error));
    },
    /**
     * Get all the products.
     *
     * @param {object} commit, state
     *
     * @return {Promise}
     */
    prefetch({ state }) {
        if (!state.productsService || !state.productsService.get) {
            state.productsService = new ProductsService();
        }

        return state.productsService.get(true);
    }
};

const mutations = {
    /**
     * Replace the current product groups object with a new object.
     *
     * @param {object} state
     * @param {array} products
     */
    set(state, products) {
        state.products = products;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
