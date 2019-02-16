import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        url: 'http://localhost:3000/api',
        logged: false,
        current: {
            category: localStorage.category || 1,
            question: localStorage.question || 1,
            answer: localStorage.answer || 1,
            displayed: localStorage.displayed || 'category'
        },
        answers: localStorage.answers.split(',') || []
    },
    getters: {
        start(state) {
            return state.current.category == 1 && state.current.question == 1;
        }
    },
    mutations: {
        login(state) {
            state.logged = true;
        },
        logout(state) {
            state.logged = false;
        },
        populateForm(state, form) {
            state.form = form;
        },
        answer(state, answerId) {
            state.answers.push(answerId);
            localStorage.answers = state.answers;

        },
        setCategory(state, index) {
            state.current.category = index;
            localStorage.category = index;
        },
        setQuestion(state, index) {
            state.current.question = index;
            localStorage.question = index;
        },
        setAnswer(state, index) {
            state.current.answer = index;
            localStorage.answer = index;
        },
        setDisplayed(state, displayed) {
            state.current.displayed = displayed;
            localStorage.displayed = displayed;
        },
        reset(state) {
            localStorage.answers = [];
            state.answers = [];

            state.current = {
                category: 1,
                question: 1,
                answer: 1,
                displayed: 'category'
            };

            localStorage.current = state.current;
        }
    },
    actions: {
        populateForm(context, form) {
            context.commit('populateForm', form);
        },
        answer(context, answerId) {
            context.commit('answer', answerId);
        },
        setCategory(context, index) {
            context.commit('setCategory', index);
        },
        setQuestion(context, index) {
            context.commit('setQuestion', index);
        },
        setAnswer(context, index) {
            context.commit('setAnswer', index);
        },
        setDisplayed(context, displayed) {
            context.commit('setDisplayed', displayed);
        },
        reset(context) {
            context.commit('reset');
        }
    }
});