import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    post: {},
    comments: [],
    status: '',
    error: null,
    user: null,

  },
  mutations: {
    getPosts(state, data) {
      state.posts = [...state.posts, ...data];
    },

    getPost(state, post) {
      state.post = post;
    },

    getComments(state, comments) {
      state.comments = [...comments];
    },

    error(state, err) {
      state.error = err;
    },

    success(state, info) {
      state.status = info;
    },
  },
  actions: {

    async getPosts({commit}) {
      axios.get('/api/posts')
        .then(({data}) => {
          let info = 'successfully fetched posts';
          commit('getPosts', data);
          commit('success', info);
        })
        .catch((err) => {
          commit('error', err)
        })
    },

    async getPost({commit}, id) {
      axios.get(`/api/post/${id}`)
          .then(({data}) => {
            let info = `successfully fetched post with id: ${id}`;
            commit('success', info)
            commit('getPost', data.post);
            commit('getComments', data.comments);
          })
          .catch((err) => {
            commit('error', err);
          });
    },

    login(payload) {
      axios.post('/api/login', payload)
        .then(({response}) => {
          console.log(response)
        })
    },

    register(payload) {
      axios.post('/api/register', payload)
        .then(({response}) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    },



  }
})
