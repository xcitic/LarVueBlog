<template>
  <nav class="navbar fixed-top navbar-toggleable-md navbar-dark scrolling-navbar double-nav top-nav-collapse">
            <!-- SideNav slide-out button -->
            <div class="float-left">
                <a href="#" data-activates="slide-out" class="button-collapse"><i class="fa fa-bars"></i></a>
            </div>
            <!-- Breadcrumb-->
            <div class="breadcrumb-dn mr-auto">
              <router-link :to="{ name: 'home'}"><p>LarVueBlog</p></router-link>
            </div>

              <ProfileIcon v-if="authenticated" />

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
import Auth from '@/api/Auth.js';
import ProfileIcon from '@/components/ProfileIcon';

export default {
  name: 'NavBar',

  components: {
    ProfileIcon
  },

  computed: {
    authenticated() {
      return Auth.check();
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


</style>
