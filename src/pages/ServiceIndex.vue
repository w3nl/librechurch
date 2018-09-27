<template>
    <div>
        <div class="u-margin-bottom"></div>
        <div class="layout layout--center">
            <div class="layout__item u-3/5-desk-large">
                <ul
                    v-for="(product, index) in products"
                    :key="index"
                >
                    <li v-if="product.serviceitem">
                        <router-link :to="{ name: 'service.detail', params: { serviceId: index } }">
                            {{ product.serviceitem.header.title }}
                        </router-link>
                    </li>
                </ul>
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
    props: {},
    computed: {
        ...mapGetters({
            products: 'products/products'
        })
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
