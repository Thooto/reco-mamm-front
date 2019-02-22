<template>
  <div class="container">
    <add-category @add="addCategory"/>

    <transition-group name="categories" tag="div">
      <category
        :category="category"
        :key="category.id"
        v-for="(category, index) in categories"
        @remove="removeCategory(index)"
        @move="moveCategory(index, ...arguments)"
      />
    </transition-group>
  </div>
</template>

<script>
import AddCategory from "./AddCategory";

import Category from "./Category";

import services from "./services";

import Axios from "axios";

export default {
  name: "Alternative",

  components: { AddCategory, Category },

  data() {
    return {
      categories: this.$store.state.form
    };
  },

  methods: {
    removeCategory(index) {
      services
        .removeCategory(index)
        .then(() => {
          this.categories.splice(index, 1);
        })
        .catch(({ response }) => {
          this.$snackbar.open({
            message: "Une erreur est survenue, veuillez réessayer.",
            type: "is-danger"
          });
        });
    },

    addCategory(category) {
      services
        .createCategory(category)
        .then(({ data }) => {

          this.categories.push(data.category);
        })
        .catch(({ response }) => {
          console.log(response.data);
          if (response.data.includes("name cannot be null")) {
            this.category.message = "Veuillez spécifier un nom";
          } else {
            this.category.message = "Cette catégorie existe déjà";
          }
        });
    },

    async moveCategory(index, orientation) {
      try {
        const category = this.categories[index];

        if (orientation == "down") {
          if (index < this.categories.length - 1) {
            await services.moveCategory(category.id, orientation);
            this.categories.splice(index, 1);
            this.categories.splice(index + 1, 0, category);
          }
        } else {
          if (index > 0) {
            await services.moveCategory(category.id, orientation);
            this.categories.splice(index, 1);
            this.categories.splice(index - 1, 0, category);
          }
        }
      } catch (error) {
        this.$snackbar.open({
          message: "Une erreur est survenue, veuillez réessayer.",
          type: "is-danger"
        });
      }
    }
  },

  watch: {
    "category.name"() {
      this.category.message = null;
    }
  }
};
</script>

<style lang="scss">
.categories-move {
  transition: transform 0.35s;
}
</style>
