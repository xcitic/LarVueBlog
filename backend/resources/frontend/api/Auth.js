import axios from 'axios';
import store from '@/store.js';

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
    } else {
      this.logout();
      return false;
    }
  }

}

export default new Auth();
