<template>
  <section class="container">
    <b-field label="Administrateur" :type="email.type" :message="email.message">
      <b-input v-model="email.value"></b-input>
    </b-field>

    <b-field label="Mot de passe" :type="password.type" :message="password.message">
      <b-input type="password" password-reveal v-model="password.value"></b-input>
    </b-field>

    <button class="button" @click="login">Se connecter</button>
  </section>
</template>

<script>
import Axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: { value: undefined, type: "", message: "", wrong: false },
      password: { value: undefined, type: "", message: "", wrong: false }
    };
  },
  methods: {
    login() {
      if (this.email.value && this.password.value) {
        Axios.post(this.$store.state.url + "/admin/login", {
          email: this.email.value,
          password: this.password.value
        })
          .then(response => {
            localStorage.setItem("token", response.data);
            this.$store.commit("login");
            this.$router.push("/admin");
          })
          .catch(err => {
            this.email.wrong = err.response.data == "Admin not found";
            this.password.wrong = err.response.data == "Wrong password";
          });
      } else {
        if (!this.email.value) this.email.value = "";
        if (!this.password.value) this.password.value = "";
      }
    }
  },
  watch: {
    "email.value": function(value) {
      if (value == "") {
        this.email.type = "is-warning";
        this.email.message = "Veuillez spécifier un nom d'administrateur";
        this.email.wrong = false;
      } else {
        this.email.type = "";
        this.email.message = "";
        this.email.wrong = false;
      }
    },
    "email.wrong": function(value) {
      if (value) {
        this.email.type = "is-danger";
        this.email.message = "Cet administrateur n'existe pas";
      }
    },
    "password.value": function(value) {
      if (value == "") {
        this.password.type = "is-warning";
        this.password.message = "Veuillez spécifier un mot de passe";
        this.password.wrong = false;
      } else {
        this.password.type = "";
        this.password.message = "";
        this.password.wrong = false;
      }
    },
    "password.wrong": function(value) {
      if (value) {
        this.password.type = "is-danger";
        this.password.message = "Ce mot de passe ne correspond pas";
      }
    }
  }
};
</script>