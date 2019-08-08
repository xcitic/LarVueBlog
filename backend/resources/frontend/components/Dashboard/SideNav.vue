<template>
<ul id="slide-out" class="side-nav fixed custom-scrollbar">
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
      <li><router-link :to="{name: 'dashboard'}" class="collapsible-header waves-effect arrow-r"><i class="fa fa-code"></i> Dashboard</router-link>
      </li>
      <li v-if="isAdmin">
        <router-link :to="{name: 'postCreate'}" class="collapsible-header waves-effect arrow-r"><i class="fa fa-envelope"></i> Create Post</router-link>
      </li>
    </ul>
  </li>

</ul>

<!--/. Sidebar navigation -->
</template>

<script>
export default {
  name: 'SideNav',

  computed: {
    user() {
      return this.$store.state.user;
    },

    isAdmin() {
      return true;
    },
  },

  methods: {


  }


}
</script>

<style lang="css" scoped>
</style>
