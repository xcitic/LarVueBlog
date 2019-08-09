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
    authenticated: false,
    new: {
      title: '',
      content: '',
    },
    isAdmin: false,
    users: [],
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
      state.authenticated = true;
    },

    logout(state) {
      state.user = null;
      state.authenticated = false;
    },

    setUser(state, userInfo) {
      state.user = userInfo;
      if (userInfo) {
        state.authenticated = true;
      }
    },

    setAuth(state, userInfo) {
      if (userInfo.name) {
        state.authenticated = true;
      } else {
        state.authenticated = false;
      }
    },

    setNewPost(state, post) {
      state.posts = [post, ...state.posts];
    },

    setAdmin(state, status) {
      state.isAdmin = status;
    },

    setAllUsers(state, users) {
      state.users = users;
    },

    setAllComments(state, comments) {
      state.comments = comments;
    },

    removePost(state, index) {
      state.posts.splice(index,1);
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
        commit('setAuth', result);
      },

    async register({commit}, payload) {
      try {
        let result = await API.register(payload);
        commit('login', result);
        commit('setAuth');
      } catch (err) {
        commit('error', err);
      }
    },

    async createComment({commit}, payload) {
      let comment = await API.createComment(payload);
      commit('setComment', comment);
    },

    async getUser({commit}) {
      try {
        let userInfo = await API.getUser()
        commit('setUser', userInfo);
      } catch (err) {
        commit('error', err.message);
      }
    },

    async checkUser({commit}) {
      let userInfo = await Auth.authFill();
      commit('setUser', userInfo);
    },

    async setAuth({commit}) {
      commit('setAuth');
    },

    async createPost({commit}, payload) {
      let newPost = await API.createPost(payload);
      commit('setNewPost', newPost);
    },

    async getAllComments({commit}) {
      try {
        let comments = await API.getAllComments();
        commit('setAllComments', comments);
      } catch (err) {
        commit('error', err.message);
      }
    },

    async getAllUsers({commit}) {
      try {
        let users = await API.getAllUsers();
        commit('setAllUsers', users);
      } catch (err) {
        commit('error', err.message);
      }
    },

    async deletePost({commit}, id) {
      try {
        await API.deletePost(id);
      } catch (err) {
        commit('error', err.message);
      }
    },

    async updatePost({commit}, payload) {
      try {
        let result = await API.updatePost(payload);
        commit('success', result);
      } catch (err) {
        commit('error', err);
      }
    }

  }
});
