<template>
  <div class="category">
    <div class="horizontal spaced">
      <div class="horizontal grow">
        <button class="button" @click="open">{{openMessage}}</button>
        <div class="horizontal grow">
          <input class="input" :class="editable" v-model="category.name" :disabled="!editing">
        </div>
      </div>

      <div class="horizontal">
        <div class="horizontal" v-if="editing">
          <button class="button" @click="remove">Supprimer</button>
        </div>
        <button class="button" @click="edit">{{editMessage}}</button>
        <button class="button" @click="descend">Descendre</button>
        <button class="button" @click="ascend">Monter</button>
      </div>
    </div>

    <div class="questions" v-if="opened">
      <add-question @add="addQuestion"/>
      <question :question="question" :key="question.index" v-for="question in category.questions"/>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

import Question from "./Question";
import AddQuestion from "./AddQuestion";
import services from './services';

export default {
  name: "category",

  props: ["category"],

  components: { Question, AddQuestion },

  data() {
    return {
      opened: false,
      editing: false
    };
  },

  methods: {
    remove() {
      this.$emit("remove");
    },

    open() {
      this.opened = !this.opened;
    },

    addQuestion(question) {
      services.addQuestion(question, this.$props.category)
      .then(() => {
        console.log('Succes');
      })
      .catch(() => {
        this.$snackbar.open('Une erreur est survenue, veuillez réessayer');
      })
    },

    async edit() {
      try {
        if (this.editing) {
          await Axios.patch(
            this.$store.state.url + "/admin/category",
            {
              category: this.$props.category
            },
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
              }
            }
          );
        }

        this.editing = !this.editing;
      } catch (error) {
        this.$snackbar.open({
          message: "Cette catégorie existe déjà.",
          type: "is-danger"
        });
      }
    },

    ascend() {
      this.$emit("move", "up");
    },

    descend() {
      this.$emit("move", "down");
    }
  },

  computed: {
    openMessage() {
      return this.opened ? "Fermer" : "Dérouler";
    },

    editMessage() {
      return this.editing ? "Valider" : "Éditer";
    },

    editable() {
      return this.editing ? "" : "locked";
    }
  }
};
</script>

<style lang="scss">
.category {
  border: 1px solid white;
  border-radius: 5px;

  margin-bottom: 5px;
  padding: 5px;

  background: rgba(255, 255, 255, 0.9);
  color: black;

  .horizontal {
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
  }

  .grow {
    flex-grow: 1;
  }

  .spaced {
    justify-content: space-between;
  }

  .questions {
    border: 1px solid lightgray;
    background-color: white;

    border-radius: 5px;

    margin-top: 5px;
    padding: 5px;
  }

  .button {
    height: auto;
    margin-right: 5px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 0.75rem;
    border-radius: 5px;
    background: white;
    border-color: lightgray;
  }

  input {
    width: 100%;
    margin-right: 5px;
    padding: none;

    border-radius: 5px;
  }

  .locked {
    border: none;
    background: none;
    outline: none;
    box-shadow: none;
  }
}
</style>
