import axios from 'axios';

const authToken = localStorage.getItem('token');
const csrfToken = document.head.querySelector('meta[name="csrf-token"]');


const endpoint = axios.create({
  baseURL: 'http://localhost:8000/api',
  json: true,
  headers:
    {
      'Authorization': 'Bearer ' + authToken,
      'x-requested-with': 'XMLHttpRequest',
      'x-csrf-token': csrfToken.content
    },
});

export default {

  async apiCall (method, resource, data) {
    return endpoint({
      method,
      url: resource,
      data,
    })
    .then(res => {
      return res.data
    })
    .catch(err => {
      return err.message
    })
  },

  getPosts() {
    return this.apiCall('get', '/posts');
  },

  getPost(id) {
    return this.apiCall('get', `/post/${id}`);
  },

  login(payload) {
    return this.apiCall('post', '/login', payload);
  },

  register(payload) {
    return this.apiCall('post', '/register', payload);
  },

  createComment(payload) {
    return this.apiCall('post', `/comment/${payload.postId}/create`, payload);
  },

  getUser() {
    return this.apiCall('get', '/user');
  }
}
