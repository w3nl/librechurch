<template>
    <div class="container">
        <h1 class="alpha | u-text-color-primary u-text-center">internal-server-error.heading</h1>
        <p
            class="u-text-center"
        >
            internal-server-error.description
        </p>
    </div>
</template>

<script>
import pageMixin from '../mixins/page.js';

export default {
    mixins: [pageMixin],
    /**
     * Called after the instance has been mounted.
     */
    mounted() {
        this.finishLoading();
    }
};
</script>
