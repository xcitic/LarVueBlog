import axios from 'axios';


class Auth {
  constructor(token = null, user = null) {
    this.token = token;
    this.user = user;
  }

  login(token, user) {
    localStorage.setItem('token', token);
    // localStorage.setItem('user')
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  logout() {
    localStorage.removeItem('token');
    axios.defaults.headers.common.Authorization = '';
  }

}

export default new Auth();
