import Vue from 'vue';
import Vuex from 'vuex';

import Auth from '@/api/Auth.js';
import API from '@/api/Endpoints.js';

Vue.use(Vuex);

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
    loading: true
  },

  getters: {
    getComments(state) {
      return state.comments;
    },

    user(state) {
      return state.user
    },

    getPosts(state) {
      return state.posts
    },

    loading(state) {
      return state.loading
    },


  },
  mutations: {
    setPosts(state, data) {
      state.posts = [...state.posts, ...data];
    },

    setPost(state, post) {
      state.post = post;
    },

    setComments(state, comments) {
      state.comments = comments;
    },

    setComment(state, comment) {
      let data = [comment, ...state.comments];
      state.comments = data;
    },

    login(state, userInfo) {
      state.user = userInfo;
      state.authenticated = true;
    },

    logout(state) {
      state.user = null;
      state.authenticated = false;
      state.isAdmin = false;
    },

    setUser(state, userInfo) {
      state.user = userInfo;
      localStorage.setItem('user', JSON.stringify(userInfo));
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

    removeComment(state, index) {
      state.comments.splice(index,1);
    },

    removeUser(state, index) {
      state.users.splice(index,1);
    },

    notLoading(state) {
      state.loading = false;
    },

    isLoading(state) {
      state.loading = true;
    },

    increaseViews(state, id) {
      state.post.views++;
      let post = state.posts.find(post => { return post.id === id})
      if(post){
        post.views++;
      }
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
        let result = await API.login(payload)
        commit('login', result);
        commit('setUser', result)
        Auth.login(result.token, result)
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
        throw err;
      }
    },

    async updatePost({commit}, payload) {
      try {
        let result = await API.updatePost(payload);
        commit('success', result);
      } catch (err) {
        commit('error', err);
        throw err;
      }
    },

    async deleteComment({commit}, id) {
      try {
        await API.deleteComment(id);
      } catch (err) {
        commit('error', err.message);
        throw err;
      }
    },

    async updateComment({commit}, payload) {
      try {
        let result = await API.updateComment(payload);
        commit('success', result);
      } catch (err) {
        commit('error', err.message);
        throw err
      }
    },

    async deleteUser({commit}, id) {
      try {
        let result = await API.deleteUser(id);
        commit('success', result);
      } catch (err) {
        commit('error', err.message);
        throw err;
      }
    },

    async updatePicture({commit, dispatch}, image) {
      try {
        let result = await API.updatePicture(image);
        commit('success', result);
        dispatch('getUser');
      } catch (err) {
        commit('error', err.message);
        throw err;
      }
    },

    async updateAccount({commit, dispatch}, payload) {
      try {
        let result = await API.updateAccount(payload);
        console.log(result)
        commit('success', result);
        dispatch('getUser');
      } catch (err) {
        commit('error', err.message);
        throw err;
      }
    },

    async updatePassword({commit}, payload) {
      try {
        let result = await API.updatePassword(payload);
        commit('success', result);
      } catch (err) {
        commit('error', err.message);
        throw err;
      }
    },

    async getMyComments({commit}) {
      try {
        let result = await API.getMyComments();
        commit('setComments', result);
      } catch (err) {
        commit('error', err.message);
      }
    },

    async viewedPost({commit}, id) {
      API.viewedPost(id)
      .then(() => {
        commit('increaseViews', id);
      })
    }

  }
});
