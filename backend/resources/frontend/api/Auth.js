import axios from 'axios';


class Auth {
  constructor(token = null) {
    this.token = token;
  }

  login(token) {
    localStorage.setItem('token', token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  logout() {
    localStorage.removeItem('token');
    axios.defaults.headers.common.Authorization = '';
  }

  check() {
    let token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  }

}

export default new Auth();
