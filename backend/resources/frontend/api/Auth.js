import axios from 'axios';
import store from '@/store.js';
import API from '@/api/Endpoints.js';

// window.axios = axios;
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// window.axios.defaults.baseURL = process.env.MIX_APP_URL;

class Auth {
  constructor(token = null, user = null) {
    this.token = token;
    this.user = user;
  }

  login(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    store.commit('logout');
    axios.defaults.headers.common.Authorization = '';
  }

  check() {
    let token = localStorage.getItem('token');
    if (token) {
      return true;
    }
      this.logout();
      return false;
  }

  async authFill() {
    let user = await JSON.parse(localStorage.getItem('user'));
    return user;
  }



  async isAdmin() {
    let userInfo = await API.getUser();
    if(userInfo.role === "admin") {
      return true;
    }
    return false;
  }

}

export default new Auth();
