<template>
  <section>
    <div class="hero is-primary is-fullheight has-bg-img">
      <div class="hero-head">
        <navbar/>
      </div>

      <div class="hero-body">
        <router-view/>
      </div>
    </div>

    <footer class="footer">
      <div class="container">
        <p>
          <strong>ma reconstruction mammaire.</strong>
          Petite phrase concernant les licences etc. On peut aussi rajouter des liens utiles, des pages de contact etc.
        </p>
      </div>
    </footer>
  </section>
</template>

<script>
import Navbar from "@/components/app/Navbar";

export default {
  name: "App",
  components: { Navbar }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Quicksand");

$family-primary: "Quicksand";

@import "~bulma";
@import "~buefy/src/scss/buefy";

.has-bg-img {
  background-image: url("assets/background.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
