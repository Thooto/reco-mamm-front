<template>
  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <router-link class="navbar-item has-text-weight-bold" to="/">reconstruct</router-link>

            <a
              role="button"
              class="navbar-burger burger"
              :class="{'is-active': isActive}"
              @click="toggleMenu()"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div class="navbar-menu" :class="{'is-active': isActive}">
            <div class="navbar-end">
              <router-link class="navbar-item" to="/parcours" @click.native="closeMenu()">
                <b-icon icon="arrow-right-circle-outline"></b-icon>
                <p class="has-text-weight-bold">Commencer le parcours</p>
              </router-link>
              <router-link class="navbar-item" to="/a-propos" @click.native="closeMenu()">
                <b-icon icon="help-circle-outline"></b-icon>
                <p class="has-text-weight-bold">A propos</p>
              </router-link>
              <a class="navbar-item" v-if="logged" @click="logout()">Déconnexion</a>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="hero-body">
      <div class="container">
        <div class="has-text-centered">
          <h1 class="title">Des questions pour vous aider</h1>
        </div>
        <div class="has-text-left">
          <h2 class="subtitle">Ici une phrase d'introduction pour découvrir le site internet,</h2>
        </div>
        <div class="has-text-right">
          <h2 class="subtitle">Une seconde pour expliquer ce qu'on y fera,</h2>
        </div>
        <div class="has-text-centered">
          <h2 class="subtitle">Une dernière pour proposer de démarrer l'expérience.</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isActive: false
    };
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
      this.$store.commit("logout");
      this.$router.push("/");
    }
  },
  computed: {
    logged() {
      return this.$store.state.logged;
    }
  }
};
</script>

<style lang="scss">
.hero {
  background: linear-gradient(red, blue);
}
</style>
