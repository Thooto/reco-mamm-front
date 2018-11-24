<template>
    <section class="container">
        <b-field label="Administrateur" :type="username.type" :message="username.message">
            <b-input v-model="username.value"></b-input>
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
            username: {value: undefined, type: '', message: '', wrong: false},
            password: {value: undefined, type: '', message: '', wrong: false},
        };
    },
    methods: {
        login() {
            if (this.username.value && this.password.value) {
                Axios.post(this.$store.state.url + '/login', {
                    username: this.username.value,
                    password: this.password.value
                })
                .then((response) => {
                    localStorage.setItem('token', response.data);
                    this.$store.commit('login');
                    this.$router.push("/admin");
                })
                .catch(err => {
                    this.username.wrong = err.response.data == "Admin not found";
                    this.password.wrong = err.response.data == "Wrong password";
                });
            } else {
                if (!this.username.value) this.username.value = '';
                if (!this.password.value) this.password.value = '';
            }
        }
    },
    watch: {
        'username.value': function(value) {
            if (value == '') {
                this.username.type = 'is-warning';
                this.username.message = 'Veuillez spécifier un nom d\'administrateur';
                this.username.wrong = false;
            } else {
                this.username.type = '';
                this.username.message = '';
                this.username.wrong = false;
            };
        },
        'username.wrong': function(value) {
            if (value) {
                this.username.type = 'is-danger';
                this.username.message = 'Cet administrateur n\'existe pas';
            }
        },
        'password.value': function(value) {
            if (value == '') {
                this.password.type = 'is-warning';
                this.password.message = 'Veuillez spécifier un mot de passe';
                this.password.wrong = false;
            } else {
                this.password.type = '';
                this.password.message = '';
                this.password.wrong = false;
            };
        },
        'password.wrong': function(value) {
            if (value) {
                this.password.type = 'is-danger';
                this.password.message = 'Ce mot de passe ne correspond pas';
            }
        }
    }
};
</script>