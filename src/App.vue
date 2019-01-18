<template>
  <section>
    <router-view/>

    <footer class="footer">
      <div class="container">
        <p>
          <strong>Reconstruction mammaire.</strong>
          Petite phrase concernant les licences etc. On peut aussi rajouter des liens utiles, des pages de contact etc.
        </p>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: "App"
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Quicksand");

$family-primary: "Quicksand";

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
