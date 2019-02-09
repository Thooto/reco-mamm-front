<template>
  <section class="container has-text-centered">
    <p>Etape {{number}} sur {{total}}</p>
    <p class="title">{{name}}</p>
    <p>Progression {{progression}}</p>
  </section>
</template>

<script>
export default {
  name: "Question",
  data: () => ({
    number: 1,
    total: 6,
    name: "Votre profil général",
    progression: 25,
    question: "Combien d'enfants avez-vous ?",
    detail: "Un petit détail pour la question",
    answers: ["Oui", "Non"]
  }),
  methods: {
    next: () => {
      this.$emit("next");
    }
  }
};
</script>

<style lang="scss">
</style>
