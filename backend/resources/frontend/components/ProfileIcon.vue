<template>
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" data-target="#userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <i class="fa fa-user"></i>
    <span class="hidden-sm-down">Profile</span>
  </a>

  <div class="dropdown-menu dropdown-ins dropdown-menu-right" id="userDropdown" aria-labelledby="userDropdown">
    <a class="dropdown-item" @click="logout">Log Out</a>

    <router-link class="dropdown-item" :to="{ name: 'account', params: {} }">
      My account
    </router-link>
  </div>

</li>
</template>

<script>
import Auth from '@/api/Auth';

export default {

  methods: {
    async logout() {
      await Auth.logout();
      this.$router.push('/');
    }
  }
}
</script>
