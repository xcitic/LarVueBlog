<template>
<nav class="navbar fixed-top navbar-dark scrolling-navbar double-nav">
  <!-- SideNav slide-out button -->
  <div class="float-left mr-4" v-if="dashboard || accountPage">
      <a @click.prevent="toggleSideNav" class="button-collapse"><i class="fa fa-bars"></i></a>
  </div>
  <!-- Logo and Mainpage route -->
  <div class="breadcrumb-dn mr-auto">
    <router-link :to="{ name: 'landing'}"><p>LarVueBlog</p></router-link>
  </div>

  <ul class="nav navbar-nav nav-flex-icons ml-auto" v-if="authenticated">

      <li class="nav-item" v-if="homepage == false">
        <router-link class="nav-link" :to="{ name: 'landing' }">
           <i class="fa fa-comments-o"></i> <span class="hidden-sm-down">Go To Blog</span>
          </router-link>
      </li>

      <li class="nav-item" v-if="!dashboard">
        <router-link class="nav-link" :to="{ name: 'dashboard' }">
           <i class="fa fa-tachometer"></i> <span class="hidden-sm-down">Dashboard</span>
          </router-link>
      </li>

      <ProfileIcon />
  </ul>


  <ul class="nav navbar-nav nav-flex-icons ml-auto" v-else>
      <li class="nav-item text-white">
        <router-link :to="{ name: 'login' }">Login</router-link>
      </li>

      <li class="nav-item">
        <router-link :to="{ name: 'register' }">Register</router-link>
      </li>
  </ul>

</nav>
</template>

<script>
import ProfileIcon from '@/components/ProfileIcon';

export default {
  name: 'NavBar',

  components: {
    ProfileIcon
  },

  computed: {
    authenticated() {
      return this.$store.state.authenticated;
    },

    dashboard() {
      return this.$route.name === "dashboard";
    },

    homepage() {
      return this.$route.name === "landing";
    },

    blogpage() {
      return this.$route.name === "post";
    },

    accountPage() {
      return this.$route.name === "account";
    }

  },

  methods: {
    toggleSideNav() {
      this.$store.dispatch('toggleSideNav');
    }
  }
}
</script>

<style>
.navbar {
  margin-bottom: 55px;
}
.nav-item {
  margin-right: 2rem;
}

.hidden {
  visibility: hidden;
}

</style>
