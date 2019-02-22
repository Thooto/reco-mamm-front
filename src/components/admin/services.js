import Axios from 'axios';
import store from '@/store';

const headers = {
  Authorization: "Bearer " + localStorage.getItem("token")
}

export default {
  createCategory(category) {
    return Axios.post(store.state.url + "/admin/category", { category }, { headers });
  },

  renameCategory(category) {
    return Axios.patch(store.state.url + "/admin/category", { category }, { headers });
  },

  removeCategory(index) {
    return Axios.delete(store.state.url + '/admin/category/' + index, { headers });
  },

  createQuestion(question) {
    return Axios.post(store.state.url + "/admin/question", { question }, { headers });
  },

  moveCategory(id, orientation) {
    return Axios.patch(
      store.state.url + "/admin/category/order", { id, orientation }, { headers });
  },

  createQuestion(question, category) {
    return Axios.post(this.$store.state.url + "/admin/question", { question, category }, { headers });
  }
};