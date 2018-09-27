import eventBus from '../event-bus.js';

let errors = {
    /**
     * Triggers forbidden notification event.
     */
    forbidden() {
        eventBus.$emit('notification', {
            type: 'error',
            message: 'message.error.forbidden'
        });
    },
    /**
     * Triggers not-found notification event.
     */
    notFound() {
        eventBus.$emit('notification', {
            type: 'error',
            message: 'message.error.not-found'
        });
    },
    /**
     * Triggers failed validation notification event.
     */
    unprocessableEntity() {
        eventBus.$emit('notification', {
            type: 'warning',
            message: 'message.error.validation'
        });
    },
    /**
     * Triggers server error notification event.
     */
    serverError() {
        eventBus.$emit('notification', {
            type: 'error',
            message: 'message.error.general'
        });
    }
};

export default {
    methods: {
        /**
         * Transforms an object or an array of objects to a class via a model and returns it as an object or an array
         * with objects.
         *
         * @param {(array|object)} data
         * @param {object} Model
         *
         * @return {(array|object)}
         */
        dataToModel(data, Model) {
            if (Array.isArray(data)) {
                return data.map(function(item) {
                    return new Model(item);
                });
            }

            return new Model(data);
        },
        /**
         * Depending on the response status call a function to handle the response.
         *
         * @param {object} error
         */
        handleError(error) {
            switch (error.response.status) {
                case 403:
                    errors.forbidden();
                    break;
                case 404:
                    errors.notFound();
                    break;
                case 422:
                    errors.unprocessableEntity();
                    break;
                default:
                    errors.serverError();
            }
        }
    }
};
