import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import Auth from '@/api/Auth.js';

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

  getters: {
    getComments(state) {
      return state.comments;
    },

    getUser(state) {
      return state.user
    },

    getPosts(state) {
      return state.posts
    }
  },
  mutations: {
    setPosts(state, data) {
      state.posts = [...state.posts, ...data];
    },

    setPost(state, post) {
      state.post = post;
    },

    setComments(state, comments) {
      Vue.set(state, 'comments', comments);
    },

    setComment(state, comment) {
      let data = [comment, ...state.comments];
      Vue.set(state, 'comments', data);
    },

    login(state, userInfo) {
      state.user = userInfo;
      Auth.login(userInfo.token, userInfo);
    },

    logout(state) {
      state.user = null;
    },

    setUser(state, userInfo) {
      state.user = userInfo;
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
          commit('setPosts', data);
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
            commit('setPost', data.post);
            commit('setComments', data.comments);
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
      commit('setComment', comment.data);
    },

    async getUser({commit}) {
      let userInfo = await axios.get('/api/user');
      commit('setUser', userInfo.data);
    }

  }
});
