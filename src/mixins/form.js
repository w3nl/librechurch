export default {
    methods: {
        /**
         * Scroll to the first error
         */
        scrollToFirstError() {
            let firstError = this.$el.querySelector('.has-error');

            if (!firstError) {
                return;
            }

            this.$scrollTo(firstError);
        }
    }
};
