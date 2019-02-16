<template>
  <div class="container has-text-centered">
    <p class="title is-4">Questionnaire terminé !</p>
    <nav class="level">
      <router-link class="level-item" to="/resultats">
        <p>Résumé</p>
      </router-link>
      <router-link class="level-item" to="/resultats/tendances">
        <p>Tendances</p>
      </router-link>
      <router-link class="level-item" to="/resultats/telecharger">
        <p>Télécharger</p>
      </router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Results"
};
</script>

<style lang="scss">
</style>
