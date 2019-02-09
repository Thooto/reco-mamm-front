<template>
    <b-collapse class="card">
        <div slot="trigger" slot-scope="props" class="card-header">
            <p class="card-header-title">
                {{ id + ' ' + name }}
            </p>
            <a class="card-header-icon">
                <b-icon
                    :icon="props.open ? 'menu-down' : 'menu-up'">
                </b-icon>
            </a>
        </div>
        <div class="card-content">
            <div class="content">
                <p :key="answer.id" v-for="answer in answers">{{answer.name}}</p>
            </div>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
        </footer>
    </b-collapse>
</template>

<script>
import Axios from 'axios';

export default {
    name: 'Question',
    props: {
        name: String,
        id: Number
    },
    data() {
        return {
            answers: []
        }
    },
    mounted() {
        Axios.get(this.$store.state.url + '/answers?questionId=' + this.id)
            .then((response) => {
                this.answers = response.data;
            })
            // .catch((err) => console.log(err));
    }
}
</script>
