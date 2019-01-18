<template>
    <section id="app">
        <!-- <nav class="navbar is-fixed-top">
            <div class="navbar-brand">
                <router-link class="navbar-item" to="/">Reconstruction mammaire</router-link>

                <a role="button" class="navbar-burger burger" :class="{'is-active': isActive}" @click="toggleMenu()">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div class="navbar-menu" :class="{'is-active': isActive}">
                <div class="navbar-end">
                    <router-link class="navbar-item" to="/parcours" @click.native="closeMenu()">Commencer le parcours</router-link>
                    <router-link class="navbar-item" to="/a-propos" @click.native="closeMenu()">A propos</router-link>
                    <a class="navbar-item" v-if="logged" @click="logout()">Déconnexion</a>
                </div>
            </div>
        </nav> -->

        <router-view/>
    </section>
</template>



<script>
export default {
    name: 'App',
    data() {
        return {
            isActive: false,
        }
    },
    methods: {
        toggleMenu() {
            this.isActive = !this.isActive;
        },
        closeMenu() {
            this.isActive = false;
        },
        logout() {
            this.closeMenu();
            this.$store.commit('logout');
            this.$router.push('/');
        }
    },
    computed: {
        logged() { return this.$store.state.logged; }
    }
}
</script>



<style lang="scss">
// @import url("https://fonts.googleapis.com/css?family=Gloria+Hallelujah");

@import url('https://fonts.googleapis.com/css?family=Quicksand');

// @import url('https://fonts.googleapis.com/css?family=Caveat');

.navbar-brand {
    font-family: "Quicksand";
}

html {
    overflow: hidden !important;
}
</style>