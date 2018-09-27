import DomainsService from '../../services/domains.js';

const state = {
    domainName: null,
    domains: [],
    domainsService: null
};

const getters = {
    domains: state => {
        return state.domains;
    }
};

const actions = {
    /**
     * Get domains.
     *
     * @param {object} commit, state
     * @param {string} domainName
     *
     * @return {promise}
     */
    check({ commit, state }, domainName) {
        if (!state.domainsService || !state.domainsService.checkDomain) {
            state.domainsService = new DomainsService();
        }

        commit('set', []);

        return state.domainsService
            .checkDomain(domainName)
            .then(data => {
                commit('set', data);
            })
            .catch(error => Promise.reject(error));
    }
};

const mutations = {
    /**
     * Replace the current product groups object with a new object.
     *
     * @param {object} state
     * @param {array} domain
     */
    set(state, domain) {
        state.domains.push(domain);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
