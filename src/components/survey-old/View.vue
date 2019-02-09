<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import Step from "./Step";
import Question from "./Question";
import Answer from "./Answer";

export default {
  name: "Survey",
  components: { Step, Question, Answer },
  data: () => ({
    current: "step",
    state: {
      category: 0,
      question: 0,
      answer: 0
    }
  }),
  methods: {
    next(following) {
      console.log(following);
      this.current = following;
      this.index[current]++;
      console.log(this.index);
    }
  }
};

// beforeMount() {
//   console.log("Getting form...");
//   Axios.get(this.$store.state.url + "/user/form").then(form => {
//     console.log('Form received');
//     console.log(form.data);
//   });
// },

// next() {
//   console.log("Next question");

//   Axios.post(this.$store.state.url + "/question", {
//     toto: "tata"
//   }).then(response => {
//     this.current = response.data.next;
//   });
// }
</script>