<template>
  <section>
    <div class="hero is-primary is-fullheight">
      <div class="bg-img-wrapper">
        <span class="bg-img"/>
      </div>
      <div class="hero-head">
        <navbar/>
      </div>

      <div class="hero-body" :style="centered">
        <!-- <transition name="fade"> -->
        <router-view/>
        <!-- </transition> -->
      </div>
    </div>

    <footer class="footer">
      <div class="container">
        <p>
          <strong>ma reconstruction mammaire.</strong>
          Petite phrase concernant les licences etc. On peut aussi rajouter des liens utiles, des pages de contact etc.
        </p>
        <button @click="reset" class="button is-rounded">Effacer mes résultats</button>
      </div>
    </footer>
  </section>
</template>

<script>
import Navbar from "@/components/app/Navbar";

export default {
  name: "App",
  components: { Navbar },
  methods: {
    reset() {
      this.$store.dispatch("reset");
    }
  },
  computed: {
    centered() {
      return this.$route.name == "home" ? "" : "align-items: flex-start";
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Quicksand");

$family-primary: "Quicksand";

@import "~bulma";
@import "~buefy/src/scss/buefy";

.hero {
  &.is-primary {
    background: none;
  }
}

.bg-img-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  z-index: -1;
}

.bg-img {
  width: 100%;
  height: 100%;
  
  filter: blur(20px);
  background-image: url("assets/background.png");
  background-position: center;
  background-size: cover;

  transform: scale(1.1);
}
</style>