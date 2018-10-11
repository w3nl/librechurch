<template>
    <div>
        <div class="u-margin-bottom"></div>
        <div class="layout layout--center">
            <div 
                v-if="product"
                class="layout__item u-3/5-desk-large"
            >
                <div class="product">
                    <div v-if="product.serviceitem">
                        <h1>{{ product.serviceitem.header.title }}</h1>
                        <div
                            v-for="(data, index) in product.serviceitem.data"
                            :key="index"
                        >
                            <h2>{{ data.title }}</h2>
                            <p
                                v-if="data.raw_slide && product.serviceitem.header.plugin == 'songs'"
                                class="note__pre"
                            >{{ data.raw_slide }}</p>
                            <p
                                v-if="data.raw_slide && product.serviceitem.header.plugin == 'custom'"
                                class="note__pre"
                            >{{ data.raw_slide }}</p>
                            <img
                                v-if="product.serviceitem.header.plugin == 'images'"
                                :src="'/img/' + data"
                            />
                        </div>
                    </div>
                </div>
                <div class="wizard__footer">
                    <div
                        v-if="serviceId > 1"
                        class="button-gray-submit"
                    >
                        <router-link :to="{ name: 'service.detail', params: { serviceId: serviceId - 1 } }">
                            <button type="button" class="btn btn--ghost-gray btn--back">previous</button>
                        </router-link>
                    </div>
                    <div
                        v-if="serviceId + 1 < products.length"
                        class="button-blue-submit"
                    >
                        <router-link :to="{ name: 'service.detail', params: { serviceId: serviceId + 1 } }">
                            <button type="button" class="btn btn--ghost btn--submit">next</button>
                        </router-link>
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
