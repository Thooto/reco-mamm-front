<template>
  <div class="wrapper">
    <img src="../../assets/pills_left.svg" class="pills-left">
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
              <p>Commencer</p>
              <b-icon icon="arrow-right"></b-icon>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <img class="is-pulled-right pills-right" src="../../assets/pills_right.svg">
  </div>
</template>

<script>
export default {
  name: "Home"
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
  max-width: 800px;
}

.has-spacing {
  margin-top: 50px;
  margin-bottom: 50px;
}

.pills-left {
  margin-left: -100px;
}

.pills-right {
  margin-right: -100px;
}
</style>
