import axios from 'axios';
import ApiMixin from '../mixins/api.js';

/**
 * Products service.
 *
 * TODO: create a base service, extend the base service.
 * https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Klasses/extends
 */
class ProductsService {
    /**
     * Setup the cache, get the cache from session storage.
     */
    constructor() {
        this.cache = [];

        if (sessionStorage.getItem('products-cache')) {
            this.cache = JSON.parse(sessionStorage.getItem('products-cache'));
        }
    }

    /**
     * Get and cache the order from the server.
     *
     * @param {bool} cache
     *
     * @return {Promise}
     */
    get(cache) {
        let component = this;

        if (this.cache.length) {
            return new Promise(this.checkCache.bind(component, cache));
        }

        return this.renew(false);
    }

    /**
     * Wait for the order in the cache.
     *
     * @param {bool}   cache
     * @param {object} resolve
     */
    checkCache(cache, resolve) {
        let component = this;

        let check = () => {
            if (component.cache.length) {
                resolve(component.cache);
            }
            setTimeout(check, 100);
        };

        check();

        this.renew(cache);
    }

    /**
     * Get the information, store in the cache.
     *
     * @param {bool} cache
     *
     * @return {Promise}
     */
    renew(cache) {
        let component = this;

        if (cache) {
            return;
        }

        return axios
            .get('/schedules/schedule.json')
            .then(response => {
                component.cache = response.data;

                sessionStorage.setItem('products-cache', JSON.stringify(component.cache));

                return component.cache;
            })
            .catch(error => ApiMixin.methods.handleError(error));
    }
}

export default ProductsService;
