<template>
    <div>
        <ul v-click-outside="hideSideNav" id="slide-out" class="side-nav fixed custom-scrollbar"
            style="transform: translateX(0px);">
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
  import ClickOutside from 'vue-click-outside';

  export default {
    name: 'SideNav',

    data() {
      return {
        isLoading: true,
      }
    },

    mounted() {
      // hack to make sure click-outside does not trigger early.
      setTimeout(() => {
        this.isLoading = false;
      }, 200);
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
