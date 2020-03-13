<template>
    <div >
        <ul v-click-outside="hideSideNav" id="slide-out" class="side-nav fixed custom-scrollbar" style="transform: translateX(0px);">
            <!-- Logo -->
            <li>
                <div class="user-box" v-if="user">
                    <img :src="user.image" class="img-fluid rounded-circle">
                    <p class="user text-center black-text">{{user.name}}</p>
                </div>
            </li>
            <!--/. Logo -->
            <!-- Side navigation links -->
            <li>
                <ul class="collapsible collapsible-accordion">
                    <li>
                        <router-link :to="{name: 'dashboard'}" class="collapsible-header waves-effect arrow-r">
                            <i class="fa fa-code"></i> Dashboard
                        </router-link>
                    </li>
                    <li v-if="isAdmin">
                        <router-link :to="{name: 'postCreate'}" class="collapsible-header waves-effect arrow-r">
                            <i class="fa fa-envelope"></i> Create Post
                        </router-link>
                    </li>
                </ul>
            </li>

        </ul>
    </div>
    <!--/. Sidebar navigation -->
</template>

<script>
  import Auth from '@/api/Auth.js';
  import ClickOutside from 'vue-click-outside';

  export default {
    name: 'SideNav',

    data() {
      return {
        isLoading: false,
      }
    },

    mounted() {
      this.isLoading = true;
      this.checkAdmin();
    },

    computed: {
      user() {
        return this.$store.state.user;
      },

      isAdmin() {
        return this.$store.state.isAdmin;
      },

    },

    methods: {

      async checkAdmin() {
        let response = await Auth.isAdmin();
        if (response === true) {
          this.$store.commit('setAdmin', true);
          return this.isLoading = false;
        }
        this.$store.commit('setAdmin', false);
        return this.isLoading = false;
      },

      hideSideNav() {
        if (!this.isLoading) {
          this.$store.dispatch('hideSideNav');
        }
      }

    },

    directives: {
      ClickOutside
    }


  }
</script>
