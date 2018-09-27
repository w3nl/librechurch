<template>
    <div>
        <div class="u-margin-bottom"></div>
        <div class="layout layout--center">
            <div class="layout__item u-3/5-desk-large">
                <div class="wizard__footer">
                    <div v-if="product.serviceitem">
                        <h1>{{ product.serviceitem.header.title }}</h1>
                        <div
                            v-for="(data, index) in product.serviceitem.data"
                            :key="index"
                        >
                            <h2>{{ data.title }}</h2>
                            {{ data.raw_slide }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import pageMixin from '../mixins/page.js';

export default {
    components: {
    },
    mixins: [pageMixin],
    props: {
        serviceId: null
    },
    computed: {
        ...mapGetters({
            products: 'products/products',
            getProduct: 'products/product'
        }),

        /**
         * The product.
         *
         * @return {object}
         */
        product() {
            return this.getProduct(this.serviceId);
        }
    },
    /**
     * Called after the instance has been mounted.
     */
    mounted() {
        this.getProducts().then(this.finishLoading);
    },

    methods: {
        ...mapActions({
            getProducts: 'products/get'
        })
    }
};
</script>
