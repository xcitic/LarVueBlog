import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

/* Axios Config */
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.baseURL = process.env.MIX_APP_URL;


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

    addComment(state, comment) {
      state.comments = [...state.comments, comment];
    },

    login(state, user) {
      state.user = user;
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

    async login({commit}, payload) {
      let result = await axios.post('/api/login', payload);
      commit('login', result.data);
      },

    async register({commit}, payload) {
      let result = await axios.post('/api/register', payload);
      commit('login', result.data);
    },

    async createComment({commit}, payload) {
      let comment = await axios.post(`/api/comment/${payload.postId}/create`, payload);
      commit('addComment', comment);
    }, 



  }
});
