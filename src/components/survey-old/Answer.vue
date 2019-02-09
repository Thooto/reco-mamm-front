<template>
  <section class="container has-text-centered">
    <p>Etape {{number}} sur {{total}}</p>
    <p class="title">{{name}}</p>
    <p>Vous avez votre réponse !</p>
  </section>
</template>

<script>
export default {
  name: "Answer",
  data: () => ({
    number: 1,
    total: 6,
    name: "Votre profil général"
  }),
  methods: {
    next() {
      this.$emit("next");
    }
  }
};
</script>

<style lang="scss">
</style>
