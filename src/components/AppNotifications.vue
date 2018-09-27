<template>
    <div class="notification-center">
        <BaseAlert
            v-for="(notification, index) in notifications"
            :index="index"
            :key="index"
            :type="notification.type"
            :message="notification.message"
            :removable="true"
            @remove="remove(index)"
        />
    </div>
</template>

<script>
import eventBus from '../event-bus.js';
import BaseAlert from './atoms/BaseAlert.vue';

export default {
    components: {
        BaseAlert
    },
    /**
     * Add all the properties found in the data object to Vue’s reactivity system.
     *
     * @return {object}
     */
    data() {
        return {
            notifications: []
        };
    },
    /**
     * Runs code after an instance is created.
     */
    created() {
        eventBus.$on('notification', this.add);
        eventBus.$on('clearNotification', this.clear);
    },
    methods: {
        /**
         * Add a new notification to the notification array.
         *
         * @param {object} notification
         */
        add(notification) {
            this.notifications.unshift(notification);
        },

        /**
         * Remove a notification from the notification array.
         *
         * @param {object} index
         */
        remove(index) {
            this.notifications.splice(index, 1);
        },

        /**
         * Remove a notification from the notification array.
         */
        clear() {
            this.notifications = [];
        }
    }
};
</script>
