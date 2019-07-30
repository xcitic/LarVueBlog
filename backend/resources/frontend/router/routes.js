// Views
import Home from '@/views/Home.vue';
import Post from '@/views/Post.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';

// Authenticated Views
import Dashboard from '@/views/Dashboard.vue';

// Catch 404
import NotFound from '@/views/NotFound.vue';


const routes = () => [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '*',
    name: '404',
    component: NotFound,
  }
];

export default routes();
