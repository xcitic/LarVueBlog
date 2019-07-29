import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],

    comments: [
      {username: 'User1', text: 'This is the comment 1', image: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg', createdAt: '2 days ago'},
      {username: 'User2', text: 'This is the comment 2', image: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg', createdAt: '4 days ago'},
    ],

    status: '',
    error: null,

  },
  mutations: {
    getPosts(state, data) {
      state.status = 'successfully fetched posts';
      state.posts = [...state.posts, ...data];
    },

    error(state, err) {
      state.error = err;
    }
  },
  actions: {

    async getPosts({commit}) {
      axios.get('/api/posts')
        .then(({data}) => {
          commit('getPosts', data);
        })
        .catch((err) => {
          commit('error', err)
        })
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
    }


  }
})
