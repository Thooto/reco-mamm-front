<template>
  <div class="add-category">
    <form class="add-category-form" @submit="add">
      <input
        type="text"
        class="add-category-input"
        placeholder="Ajouter une catégorie ..."
        v-model="category.name"
      >
      <button type="submit" class="add-category-button">
        <i class="mdi mdi-plus-circle-outline mdi-24px"></i>
      </button>
    </form>
    <div class="add-category-alert-message" :class="categoryAlert">
      {{message}}
      <i
        class="mdi mdi-alert-circle-outline add-category-alert-icon mdi-24px"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "add-category",

  data() {
    return {
      category: {
        name: null
      },
      message: null
    }
  },

  methods: {
    add(event) {
      event.preventDefault();
      this.$emit("add", this.category);
    }
  },

  computed: {
    categoryAlert() {
      return this.message ? "" : "add-category-alert-hidden";
    }
  }
};
</script>

<style lang="scss">
.add-category {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 5px;
}

.add-category-form {
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  padding-left: 12px;
  padding-right: 5px;

  border: 1px solid white;
  border-radius: 18px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  transition: .15s ease-in-out;
}

.add-category-input {
  flex-grow: 1;
  background: none;
  border: none;
  color: white;

  outline: none;

  &::placeholder {
    color: white;
  }

  margin: 0;
  padding: 0;

  font-size: 1rem;
}

.add-category-alert-icon {
  color: #fd3860;

  margin: 0;
  margin-left: 3px;
  padding: 0;
}

.add-category-alert-message {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: #fd3860;

  margin-right: 6px;
}

.add-category-alert-hidden {
  display: none;
}

.add-category-button {
  background: none;
  border: none;
  outline: none;
  color: white;

  // display: flex;
  // justify-content: center;
  // align-items: center;

  margin: 0;
  padding: 0;

  :hover {
    cursor: pointer;
  }
}
</style>

