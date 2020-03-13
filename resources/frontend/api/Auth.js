import axios from 'axios';
import store from '@/store.js';
import API from '@/api/Endpoints.js';


class Auth {
  constructor(token = null, user = null) {
    this.token = token;
    this.user = user;
  }

  login(token, user) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
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
    if (userInfo.role === "admin") {
      return true;
    }
    return false;
  }

}

export default new Auth();
