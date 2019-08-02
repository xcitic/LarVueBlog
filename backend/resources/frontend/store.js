import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import Auth from '@/api/Auth.js';
import API from '@/api/Endpoints.js';

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
      let result = await API.getPosts();
      commit('setPosts', result);
    },

    async getPost({commit}, id) {
      let result = await API.getPost(id);
      commit('setPost', result.post);
      commit('setComments', result.comments);
    },

    async login({commit}, payload) {
      let result = await API.login(payload);
      commit('login', result);
      },

    async register({commit}, payload) {
      let result = await API.register(payload);
      commit('login', result);
    },

    async createComment({commit}, payload) {
      let comment = await API.createComment(payload);
      commit('setComment', comment);
    },

    async getUser({commit}) {
      let userInfo = await API.getUser()
      commit('setUser', userInfo);
    }

  }
});
