<template>
<ul id="slide-out" class="side-nav fixed custom-scrollbar">
  <!-- Logo -->
  <li>
    <div class="user-box" v-if="user">
      <img :src="user ? user.image : ''" class="img-fluid rounded-circle">
      <p class="user text-center black-text">{{user.name}}</p>
    </div>
  </li>
  <!--/. Logo -->
  <!-- Side navigation links -->
  <li>
    <ul class="collapsible collapsible-accordion">
      <li><a class="collapsible-header waves-effect arrow-r"><i class="fa fa-code"></i> Dashboard<i class="fa fa-angle-down rotate-icon"></i></a>
        <div id="dashboard" class="collapsible-body">
          <ul>
            <li><a href="home.html" class="waves-effect">Dahboard v1</a>
            </li>
          </ul>
        </div>
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
    }
  }

}
</script>

<style lang="css" scoped>
</style>
