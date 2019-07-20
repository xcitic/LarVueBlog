import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [
      {title: 'post1', description: 'This is the description 1', image: 'https://mdbootstrap.com/img/Photos/Horizontal/Work/12-col/img%20%2821%29.jpg', createdAt: '2 days ago', votes: 1, commentsCount: 2, liked: true},
      {title: 'post2', description: 'This is the description 2', image: 'https://mdbootstrap.com/img/Photos/Horizontal/Work/12-col/img%20%2814%29.jpg', createdAt: '4 days ago', votes: 2, commentsCount: 4, liked: false},
      {title: 'post3', description: 'This is the description 3', image: 'https://mdbootstrap.com/img/Photos/Horizontal/Work/12-col/img%20%2837%29.jpg', createdAt: '6 days ago', votes: 33, commentsCount: 8, liked: true},
      {title: 'post4', description: 'This is the description 4', image: 'https://mdbootstrap.com/img/Photos/Horizontal/Work/12-col/img%20%2825%29.jpg', createdAt: '8 days ago', votes: 4, commentsCount: 1, liked: false}
    ],

    comments: [
      {username: 'User1', text: 'This is the comment 1', image: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg', createdAt: '2 days ago'},
      {username: 'User2', text: 'This is the comment 2', image: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg', createdAt: '4 days ago'},
    ],

    status: '',

  },
  mutations: {

  },
  actions: {
    login({state, commit}, payload) {
      axios.post('localhost:8000/api/login', payload)
        .then(({response}) => {

        })
    },

    register({state, commit}, payload) {
    }


  }
})
