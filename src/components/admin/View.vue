<template>
    <section class="container">
        <div class="block">
            <b-switch v-model="openOnFocus">
                Open dropdown on focus
            </b-switch>
            <b-switch v-model="keepFirst">
                Keep-first <small>(will always have first option pre-selected)</small>
            </b-switch>
        </div>
        <p class="content"><b>Selected:</b> {{ selected }}</p>
        <b-field label="Find a name">
            <b-autocomplete
                v-model="name"
                placeholder="e.g. Anne"
                :keep-first="keepFirst"
                :open-on-focus="openOnFocus"
                :data="filteredDataObj"
                field="user.first_name"
                @select="option => selected = option">
            </b-autocomplete>
        </b-field>
    </section>
</template>

<script>
import Question from './Question';
import Axios from 'axios';

export default {
    name: 'Admin',
    components: { Question },
    data() {
        return {
            categories: [],
            categoryId: '',
            questions: []
        }
    },
    mounted() {
        this.loading = true;
        Axios.get(this.$store.state.url + '/categories')
            .then((response) => {
                this.categories = response.data;
            })
            .catch((err) => this.openSnackbar(err));
    },
    methods: {
        openSnackbar(err) {
            this.$snackbar.open({
                duration: 3000,
                message: err.message,
                type: 'is-danger',
                position: 'is-bottom-right',
                actionText: 'Effacer',
                queue: false
            });
        }
    },
    watch: {
        categoryId: function(value) {
            Axios.get(this.$store.state.url + '/questions?categoryId=' + value)
            .then((response) => {
                this.questions = response.data;
            })
            .catch((err) => this.openSnackbar(err));
        }
    }
}
</script>
