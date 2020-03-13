<template>
    <div>
        <SideNav v-if="showSideNav"/>

        <div class="container-fluid">
            <router-view/>
        </div>

    </div>
</template>

<script>
  import Auth from '@/api/Auth.js';
  import SideNav from '@/components/Dashboard/SideNav.vue';


  export default {
    components: {
      SideNav,
    },

    mounted() {
      this.$store.commit('isLoading');
      this.checkAdmin();
    },

    computed: {
      showSideNav() {
        return this.$store.state.showSideNav;
      }
    },

    methods: {
      async checkAdmin() {
        let response = await Auth.isAdmin();
        if (response === true) {
          this.$store.commit('setAdmin', true);
          return this.$store.commit('notLoading');
        }
        this.$store.commit('setAdmin', false);
        return this.$store.commit('notLoading');
      },
    }

  }
</script>

<style>
</style>
