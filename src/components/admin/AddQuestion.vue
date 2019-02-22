<template>
  <div class="add-question">
    <form class="add-question-form" @submit="addQuestion">
      <input
        type="text"
        class="add-question-input"
        placeholder="Ajouter une question ..."
        v-model="question.name"
      >
      <button type="submit" class="add-question-button">
        <i class="mdi mdi-plus-circle-outline mdi-24px"></i>
      </button>
    </form>
    <div class="add-question-alert-message" :class="categoryAlert">
      {{question.message}}
      <i
        class="mdi mdi-alert-circle-outline add-question-alert-icon mdi-24px"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "add-question",

  data() {
    return {
      question: {
        name: null,
      },
      message: null
    };
  },

  methods: {
    addQuestion(event) {
      event.preventDefault();
      this.$emit("add", this.question);
    }
  },

  computed: {
    categoryAlert() {
      return this.question.message ? "" : "add-question-alert-hidden";
    }
  }
};
</script>

<style lang="scss">
.add-question {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-end;
}

.add-question-form {
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  padding-left: 12px;
  padding-right: 5px;

  border: 1px solid black;
  border-radius: 18px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  transition: .15s ease-in-out;
}

.add-question-input {
  flex-grow: 1;
  background: none;
  border: none;
  color: black;

  outline: none;

  &::placeholder {
    color: black;
  }

  margin: 0;
  padding: 0;

  font-size: 1rem;
}

.add-question-alert-icon {
  color: #fd3860;

  margin: 0;
  margin-left: 3px;
  padding: 0;
}

.add-question-alert-message {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: #fd3860;

  margin-right: 6px;
}

.add-question-alert-hidden {
  display: none;
}

.add-question-button {
  background: none;
  border: none;
  outline: none;
  color: black;

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

