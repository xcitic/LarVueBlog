// Views
import Home from '@/views/Home.vue';
import Post from '@/views/Post.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';

// Authenticated Views
import DashboardLayout from '@/layouts/Dashboard.vue';
import Dashboard from '@/views/Dashboard.vue';
import Account from '@/views/Account.vue';

// Admin views
import PostCreate from '@/views/PostCreate.vue';

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
    component: Login,
    meta: { guest: true }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { guest: true }
  },
  {
    path: '/dashboard/',
    component: DashboardLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '', name: 'dashboard', component: Dashboard,
      },
      {
        path: 'account', name: 'account', component: Account,
      },
      {
        path: 'post', name: 'postCreate', component: PostCreate, meta: { requiresAdmin: true },
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: NotFound,
  }
];

export default routes();
