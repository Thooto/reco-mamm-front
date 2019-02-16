<template>
  <section>
    <div class="hero is-primary is-fullheight">
      <span class="bg-img-wrapper z-bottom"/>
      <div class="hero-head">
        <navbar/>
      </div>

      <div class="hero-body">
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
      this.$store.dispatch('reset');
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
  position: absolute;
  top: -30px;
  left: -30px;
  right: -30px;
  bottom: -30px;
  
  overflow: hidden;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: blur(20px);
  border: 1px solid red;
  background-image: url('assets/background.png');
  background-position: center;
  background-size: cover;
}

.z-bottom {
  z-index: -1;
}
</style>
