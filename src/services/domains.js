import axios from 'axios';
import ApiMixin from '../mixins/api.js';

/**
 * Domains service.
 */
class DomainsService {
    /**
     * Setup the cache, get the cache from session storage.
     */
    constructor() {
        this.cache = {};

        if (sessionStorage.getItem('domains-cache')) {
            this.cache = JSON.parse(sessionStorage.getItem('domains-cache'));
        }
    }

    /**
     * Get and cache the order from the server.
     *
     * @param {string} domainName
     *
     * @return {Promise}
     */
    checkDomain(domainName) {
        let component = this;

        if (this.cache[domainName] && this.cache[domainName].length) {
            return new Promise(this.checkCache.bind(component, domainName));
        }

        return this.renew(false);
    }

    /**
     * Wait for the order in the cache.
     *
     * @param {string} domainName
     * @param {object} resolve
     */
    checkCache(domainName, resolve) {
        let component = this;

        let cacheWatch = () => {
            if (this.cache[domainName] && component.cache[domainName].length) {
                resolve(component.cache[domainName]);
            }
            setTimeout(cacheWatch, 100);
        };

        cacheWatch();

        this.renew(domainName);
    }

    /**
     * Get the information, store in the cache.
     *
     * @param {string} domainName
     *
     * @return {Promise}
     */
    renew(domainName) {
        let component = this;

        if (!domainName) {
            return;
        }

        return axios
            .get('/example')
            .then(response => {
                component.cache[domainName] = response.data;

                sessionStorage.setItem('domains-cache', JSON.stringify(component.cache[domainName]));

                return component.cache[domainName];
            })
            .catch(error => ApiMixin.methods.handleError(error));
    }
}

export default DomainsService;
