<template>
    <div
        :class="stateClasses"
        class="field"
    >
        <label
            v-if="label"
            :for="name"
            class="field__label"
        >
            {{ label }}
            <span v-if="required">*</span>
        </label>
        <input
            :name="name"
            :id="name"
            :value="newValue"
            v-bind="$attrs"

            type="text"
            class="field__input"

            @input="onInput"
        >
        <template v-if="error">
            <span class="field__message">{{ error }}</span>
        </template>
    </div>
</template>

<script>
export default {
    name: 'TextInput',
    props: {
        value: {
            type: [Number, String],
            default: null
        },
        label: {
            type: String,
            default: null,
            required: true
        },
        name: {
            type: String,
            default: '',
            required: true
        },
        required: {
            type: Boolean,
            default: false,
            required: false
        },
        error: {
            type: String,
            default: null
        }
    },
    /**
     * Add all the properties found in the data object to Vue’s reactivity system.
     *
     * @return {object}
     */
    data() {
        return {
            newValue: this.value
        };
    },
    computed: {
        /**
         * [stateClasses description]
         *
         * @return {object}
         */
        stateClasses() {
            return {
                'has-error': this.error
            };
        }
    },
    watch: {
        /**
         * When v-model is changed:
         *   1. Set internal value.
         *   2. If it's invalid, validate again.
         *
         * @param {string} value
         */
        value(value) {
            this.newValue = value;
        },

        /**
         * Update the v-model and validate again whenever
         * internal value is changed.
         *
         * @param {string} value
         */
        newValue(value) {
            this.$emit('input', value);
        }
    },
    methods: {
        /**
         * Input's 'input' event listener, 'nextTick' is used to prevent event firing
         * before ui update, helps when using masks (Cleavejs and potentially others).
         *
         * @param {object} event
         */
        onInput(event) {
            this.$nextTick(() => {
                this.newValue = event.target.value;
            });
        }
    }
};
</script>
