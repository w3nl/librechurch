export default {
    /**
     * Add all the properties found in the data object to Vue’s reactivity system.
     *
     * @return {object}
     */
    data() {
        return {
            pagination: {}
        };
    },
    /**
     * Runs code after an instance is created.
     */
    created() {
        this.setDefaultPagination();
    },
    methods: {
        /**
         * Sets the given url as the base url and target url.
         *
         * @param {string} url
         */
        setInitialUrl(url) {
            this.pagination.baseUrl = url;

            this.setTargetUrl(url);
        },

        /**
         * Sets the given url as the target url.
         *
         * The currentPageUrl is used as the target url.
         * Laravel does not return the current url, therefor the only way to know it, is if we maintain it ourselves.
         *
         * @param {string} url
         */
        setTargetUrl(url) {
            this.pagination.currentPageUrl = url;
        },

        /**
         * Retrieves the previous page url.
         *
         * @return {string}
         */
        getPreviousPageUrl() {
            return this.pagination.previousPageUrl;
        },

        /**
         * Retrieves the next page url.
         *
         * @return {string}
         */
        getNextPageUrl() {
            return this.pagination.nextPageUrl;
        },

        /**
         * Retrieves the target url.
         *
         * The currentPageUrl is used as the target url.
         * Laravel does not return the current url, therefor the only way to know it, is if we maintain it ourselves.
         *
         * @return {string}
         */
        getTargetUrl() {
            return this.pagination.currentPageUrl;
        },

        /**
         * Determine if we have a previous page.
         *
         * @return {boolean}
         */
        hasPreviousPage() {
            let url = this.getPreviousPageUrl();

            return url !== null && url != '';
        },

        /**
         * Determine if we have a next page.
         *
         * @return {boolean}
         */
        hasNextPage() {
            let url = this.getNextPageUrl();

            return url !== null && url != '';
        },

        /**
         * Builds a pagination object from a Laravel paginated data result and set it in the vue instance.
         *
         * @param {object} data
         */
        setPaginationFromData(data) {
            this.pagination = {
                total: data.meta.total,
                totalPages: data.meta.last_page,
                currentPage: data.meta.current_page,
                baseUrl: this.pagination.baseUrl,
                currentPageUrl: this.pagination.currentPageUrl,
                previousPageUrl: data.links.prev,
                nextPageUrl: data.links.next
            };
        },

        /**
         * Sets the default pagination object in the Vue instance.
         */
        setDefaultPagination() {
            this.pagination = {
                total: 0,
                totalPages: 1,
                currentPage: 1,
                baseUrl: null,
                currentPageUrl: null,
                previousPageUrl: null,
                nextPageUrl: null
            };
        }
    }
};
