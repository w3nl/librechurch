// Example of the store.
const state = {
    domains: [
        {
            domain: {
                name: 'way2web.nl',
                option: 'transfer',
                transferCode: 'jDa89AdSe'
            },
            hosting: {
                option: 1,
                alias: ['way2web.com', 'way2web.eu']
            }
        },
        {
            domain: {
                name: 'way2web.com',
                option: 'new',
                nameServers: ['ns0.realhosting.nl', 'ns1.realhosting.nl', 'ns2.realhosting.nl']
            },
            ssl: {
                option: 2
            }
        },
        {
            domain: {
                name: 'way2web.eu',
                option: 'new',
                whois: [
                    {
                        type: 'registrant',
                        name: 'xyz',
                        enail: 'me@example.com'
                    }
                ]
            }
        }
    ]
};

const getters = {
    domains: state => {
        return state.domains;
    }
};

const actions = {
    /**
     * Not tested!
     *
     * @param {object} commit
     * @param {string} domainName
     */
    addDomain({ commit }, domainName) {
        commit('addDomain', domainName);
    },
    /**
     * Not tested!
     *
     * @param {object} commit
     * @param {object} options
     */
    addHosting({ commit }, options) {
        commit('addHosting', options);
    }
};

const mutations = {
    /**
     * Not tested!
     *
     * @param {object} state
     * @param {string} domainName
     */
    addDomain(state, domainName) {
        state.domains.push(domainName);
    },
    /**
     * Not tested!
     *
     * @param {object} state
     * @param {object} options
     */
    addHosting(state, options) {
        state.domains.find(domain => domain.domain.name == options.domainName).hosting = options.hosting;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
