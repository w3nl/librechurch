export default {
    /**
     * Add all the properties found in the data object to Vue’s reactivity system.
     *
     * @return {object}
     */
    data() {
        return {
            loading: false
        };
    },
    /**
     * Show the loading progress bar when the component is crated.
     */
    created() {
        this.startLoading();
    },
    methods: {
        /**
         * Return if the page is loading.
         *
         * @return {bool}
         */
        isLoading() {
            return this.loading;
        },
        /**
         * Show the loading progress bar.
         */
        startLoading() {
            this.loading = true;
            this.$parent.$refs.topProgress.start();
        },
        /**
         * Finish the progress loading bar.
         */
        finishLoading() {
            this.$nextTick(() => {
                this.loading = false;
                this.$parent.$refs.topProgress.done();
            });
        }
    }
};
