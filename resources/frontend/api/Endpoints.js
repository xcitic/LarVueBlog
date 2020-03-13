import axios from 'axios';


let authToken = localStorage.getItem('token');
const csrfToken = document.head.querySelector('meta[name="csrf-token"]');
const url = process.env.MIX_API_URL;

const endpoint = axios.create({
  baseURL: url,
  json: true,
  headers:
    {
      'Authorization': 'Bearer ' + authToken,
      'x-requested-with': 'XMLHttpRequest',
      'x-csrf-token': csrfToken.content
    },
});

export default {

  async apiCall(method, resource, data) {
    return endpoint({
      method,
      url: resource,
      data,
    })
      .then(res => {
        return res.data
      })
      .catch(err => {
        throw new Error(err.message);
      })
  },

  getPosts() {
    return this.apiCall('get', '/posts');
  },

  getToken() {
    return authToken;
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
  },

  createPost(payload) {
    return this.apiCall('post', '/post/create', payload);
  },

  getAllComments() {
    return this.apiCall('get', '/comments/all');
  },

  getAllUsers() {
    return this.apiCall('get', '/users/all');
  },

  deletePost(id) {
    return this.apiCall('post', `/post/${id}/delete`, id);
  },

  updatePost(payload) {
    return this.apiCall('post', `/post/${payload.id}/update`, payload);
  },

  deleteComment(id) {
    return this.apiCall('post', `/comment/${id}/delete`, id);
  },

  updateComment(payload) {
    return this.apiCall('post', `/comment/${payload.id}/update`, payload);
  },

  deleteUser(id) {
    let parsedId = Number(id);
    return this.apiCall('post', `/user/${parsedId}/delete`, parsedId);
  },

  updatePicture(image) {
    return this.apiCall('post', '/user/update/picture', image);
  },

  updateAccount(payload) {
    return this.apiCall('post', `/user/update`, payload);
  },

  updatePassword(payload) {
    return this.apiCall('post', '/user/update/password', payload);
  },

  getMyComments() {
    return this.apiCall('get', '/user/comments');
  },

  viewedPost(id) {
    return this.apiCall('post', `/stats/post/${id}`, id);
  }


}
