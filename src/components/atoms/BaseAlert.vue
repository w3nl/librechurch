<template>
    <transition name="fade">
        <div
            :class="getTypeClass"

            class="alert"
            role="alert"
        >
            <button
                v-if="removable"

                type="button"
                class="close"
                aria-label="Close"

                @click.prevent="$emit('remove')"
            >
                <span aria-hidden="true">&times;</span>
            </button>

            {{ message }}
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        removable: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: null
        },
        message: {
            type: String,
            default: null
        }
    },
    computed: {
        /**
         * Retrieve the alert class based on the notification type.
         *
         * @return {string}
         */
        getTypeClass() {
            let errorClass = this.type;

            if (errorClass === 'error') {
                errorClass = 'danger';
            }

            return 'alert-' + errorClass;
        }
    }
};
</script>
