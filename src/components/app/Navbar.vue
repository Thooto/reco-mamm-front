<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item has-text-weight-bold has-text-right border-right" to="/">ma<br>reconstruction<br>mammaire</router-link>

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
            <p>{{started}}</p>
          </router-link>
          <router-link class="navbar-item" to="/a-propos" @click.native="closeMenu()">
            <b-icon icon="help-circle-outline"></b-icon>
            <p>A propos</p>
          </router-link>
          <a class="navbar-item" v-if="logged" @click="logout()">Déconnexion</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
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
    },
    started() {
      return this.$store.state.started
        ? "Mettre en pause"
        : "Commencer le parcours";
    }
  }
};
</script>
