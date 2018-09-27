<template>
    <div>
        <TopProgress ref="topProgress"/>

        <div class="container">
            <AppNotifications/>
        </div>
        <div class="clearfix">
            <div class="app">
                <div role="presentation" class="app-navbar | navbar navbar-sidebar | u-display--none-portable">
                    <div class="navbar-header">
                        <a href="#" class="navbar-brand">
                            <img alt="Vue logo" src="./assets/logo.png" id="logo" class="logo">
                        </a>
                    </div>

                    <span role="separator" class="divider | u-margin-top-auto"></span>
                </div>

                <main class="app-main">
                    <div class="container-fluid | u-margin-bottom">
                        <router-view/>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import { vueTopprogress as TopProgress } from 'vue-top-progress';
import AppNotifications from './components/AppNotifications.vue';

export default {
    components: {
        TopProgress,
        AppNotifications
    },
    metaInfo: {
        titleTemplate: '%s - LibreChurch'
    }
};
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
