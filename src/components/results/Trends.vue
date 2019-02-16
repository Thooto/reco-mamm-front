<template>
  <div class="container">
    <b-field>
      <b-select placeholder="Sélectionnez une question" rounded v-model="selectedQuestionId">
        <optgroup :key="category.id" v-for="category in form" :label="category.name">
          <option
            v-for="question in category.questions"
            :value="question.id"
            :key="question.id"
          >{{question.name}}</option>
        </optgroup>
      </b-select>
    </b-field>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  data() {
    return {
      form: this.$store.state.form,
      selectedQuestionId: null
    };
  },
  methods: {
    getTrend() {
      console.log(this.selectedQuestionId);
    }
  },
  watch: {
    selectedQuestionId() {
      Axios.get(
        this.$store.state.url + `/user/results/${this.selectedQuestionId}`
      ).then(({ data }) => {
        console.log(data);
      });
    }
  }
};
</script>
