<template>
  <div class="container">
    <div v-if="categoryDisplayed" class="has-text-centered">
      <p>Étape {{category.index}} sur {{total}}</p>
      <p class="title is-4">{{category.name}}</p>
      <button class="button is-primary is-inverted is-outlined is-rounded" @click="next">
        <p>{{categoryButtonMessage}}</p>
        <b-icon icon="arrow-right"></b-icon>
      </button>
    </div>

    <div v-if="questionDisplayed" class="has-text-centered">
      <p>Étape {{category.index}} sur {{total}}</p>
      <p class="title is-5">{{category.name}}</p>

      <div class="progression">
        <progression :chart-data="data" :options="options"/>
        <p class="title is-5 progress">{{progression}}</p>
      </div>

      <p class="title is-4">{{question.name}}</p>
      <button
        :key="answer.index"
        v-for="answer in question.answers"
        class="button is-primary is-inverted is-outlined is-rounded has-margin"
        @click="response(answer.id)"
      >
        <p>{{answer.name}}</p>
      </button>
    </div>

    <div v-if="answerDisplayed" class="has-text-centered">
      <p class="title is-4">{{question.name}}</p>
      <p class="title is-6">{{answer.name}}</p>
      <p class="has-text-justified has-margin">{{answer.explanation}}</p>
      <button class="button is-primary is-inverted is-outlined is-rounded" @click="next">
        <p>Question suivante</p>
        <b-icon icon="arrow-right"></b-icon>
      </button>
    </div>
  </div>
</template>

<script>
import Progression from "./Progression";

import Axios from "axios";

export default {
  name: "Survey",
  components: { Progression },
  data() {
    const { form, current } = this.$store.state;
    const category = form[current.category - 1];
    const question = category.questions[current.question - 1];
    const answer = question.answers[current.answer - 1];

    return {
      form,
      total: form.length,
      category,
      question,
      answer,
      displayed: current.displayed,
      options: {
        responsive: true,
        cutoutPercentage: 96,
        legend: {
          display: false,
          labels: {
            fontFamily: "Quicksand"
          }
        },
        animation: false
      }
    };
  },
  methods: {
    next() {
      if (this.displayed == "category") {
        this.question = this.category.questions[0];
        this.$store.dispatch("setQuestion", this.question.index);
        this.displayed = "question";
        this.$store.dispatch("setDisplayed", this.displayed);
      } else {
        if (this.question.index < this.category.questions.length) {
          this.displayed = "question";
          this.$store.dispatch("setDisplayed", this.displayed);
          this.question = this.category.questions[this.question.index];
          this.$store.dispatch("setQuestion", this.question.index);
        } else {
          if (this.category.index < this.form.length) {
            this.category = this.form[this.category.index];
            this.displayed = "category";
            this.$store.dispatch("setDisplayed", this.displayed);
            this.$store.dispatch("setCategory", this.category.index);
          } else {
            const answers = this.$store.state.answers;
            Axios.post(this.$store.state.url + "/user/answer", { answers })
              .then(() => {
                console.log('Results pushed');
                this.$router.push({ name: "results" });
              })
              .catch(console.error);
          }
        }
      }
    },
    response(answerId) {
      this.answer = this.question.answers.find(answer => answer.id == answerId);
      this.$store.dispatch("setAnswer", this.answer.index);
      this.$store.dispatch("answer", answerId);
      if (this.answer.explanation) {
        this.displayed = "answer";
        this.$store.dispatch("setDisplayed", this.displayed);
      } else {
        this.next();
      }
    }
  },
  computed: {
    categoryButtonMessage() {
      return this.category.index == 0 ? "Commencer" : "Étape suivante";
    },
    categoryDisplayed() {
      return this.displayed == "category";
    },
    questionDisplayed() {
      return this.displayed == "question";
    },
    answerDisplayed() {
      return this.displayed == "answer";
    },
    progression() {
      return (
        Math.floor(
          ((this.question.index - 1) / this.category.questions.length) * 100
        ) + " %"
      );
    },
    data() {
      return {
        datasets: [
          {
            label: "",
            backgroundColor: ["#fff", "#fff4"],
            borderWidth: 0,
            data: [
              (this.question.index - 1) / this.category.questions.length,
              1 - (this.question.index - 1) / this.category.questions.length
            ]
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss">
.has-margin {
  margin: 5px;
}

.progression {
  max-width: 100px;
  margin: auto;
  margin-bottom: 15px;

  .progress {
    height: 40px;
    position: absolute;
    left: 0;
    margin-top: -60px;
    text-align: center;
    z-index: 10;
  }
}
</style>
