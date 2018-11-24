<template>
    <section class="hero is-primary is-bold is-fullheight">
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
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
                </div>
            </nav>
        </div>

        <!-- Hero content: will be in the middle -->
        <div class="hero-body">
            <div class="container has-text-centered">
            <h1 class="title">
                Votre reconstruction mammaire
            </h1>
            <h2 class="subtitle">
                Soyez accompagnée pour mieux vous comprendre
            </h2>
            </div>
        </div>

        <!-- Hero footer: will stick at the bottom -->
        <!-- <div class="hero-foot">
            <nav class="tabs">
            <div class="container">
                <ul>
                <li class="is-active"><a>Overview</a></li>
                <li><a>Modifiers</a></li>
                <li><a>Grid</a></li>
                <li><a>Elements</a></li>
                <li><a>Components</a></li>
                <li><a>Layout</a></li>
                </ul>
            </div>
            </nav>
        </div> -->
    </section>
    <!-- <section>
        <section class="hero is-medium is-primary is-bold">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">Votre reconstruction mammaire</h1>
                    <h2 class="subtitle">Soyez accompagnée pour mieux vous comprendre</h2>
                </div>
            </div>
        </section>
        <section class="hero is-medium">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">Construisez votre profil</h1>
                    <h2 class="subtitle">Orientez-vous vers la meilleure solution</h2>
                </div>
            </div>
        </section>
    </section> -->
</template>

<script>
export default {
    name: 'Home',
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


