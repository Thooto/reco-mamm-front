<template>
  <section class="container has-text-centered">
    <p>Etape {{number}} sur {{total}}</p>
    <p class="title">{{name}}</p>
    <a @click="next()" class="button is-primary is-inverted is-outlined is-rounded">
      <p>{{message}}</p>
      <b-icon icon="arrow-right"></b-icon>
    </a>
  </section>
</template>

<script>
export default {
  name: "Step",
  props: ['state'],
  data() {
    return {
      index: this.state,
      total: this.$store.state.form.length,
      name: this.name
    };
  },
  methods: {
    next() { this.$emit("next", "question") }
  },
  computed: {
    number() {
      return this.index.category + 1;
    },
    message() {
      return this.index.category == 0 ? "Commencer" : "Aller aux questions";
    }
  }
};
</script>

<style lang="scss">
</style>
