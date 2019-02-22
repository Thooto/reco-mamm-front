<template>
  <div class="wrapper">
    <!-- <div class="pills-wrapper"> -->
      <img src="../../assets/pills_left.svg" class="pills pills-left">
    <!-- </div> -->
    <div class="container">
      <div class="has-padding">
        <div class="has-max-width">
          <div class="has-text-centered has-spacing">
            <p class="title">Des questions pour vous guider.</p>
          </div>
          <div class="has-text-left has-spacing">
            <p class="subtitle">Ici une phrase d'introduction pour décrire ce site internet,</p>
          </div>
          <div class="has-text-right has-spacing">
            <p class="subtitle">une seconde pour expliquer ce qu'on y fera,</p>
          </div>
          <div class="has-text-centered has-spacing">
            <p class="subtitle">une dernière pour proposer de démarrer l'expérience.</p>
            <router-link
              to="/parcours"
              class="button is-primary is-inverted is-outlined is-rounded"
            >
              <p>{{message}}</p>
              <b-icon icon="arrow-right"></b-icon>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="pills-wrapper"> -->
      <img class="pills pills-right is-pulled-right" src="../../assets/pills_right.svg">
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    message() {
      const start = this.$store.getters.start;

      return start ? "Commencer" : "Reprendre";
    }
  }
};
</script>

<style lang="scss">

.wrapper {
  width: 100%;
}

.has-padding {
  display: flex;
  justify-content: center;
}

.has-max-width {
  width: 100%;
}

.has-spacing {
  margin-top: 30px;
  margin-bottom: 30px;
}

.pills-wrapper {
  overflow: hidden;
  flex-grow: 1;
}
.pills-left {
  margin-left: -50px;
}

.pills-right {
  margin-right: -50px;
}
</style>
