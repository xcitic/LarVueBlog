<template>
<ul id="slide-out" class="side-nav fixed custom-scrollbar">
  <!-- Logo -->
  <li>
    <div class="user-box">
      <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" class="img-fluid rounded-circle">
      <p class="user text-center black-text">Jane Doe</p>
    </div>
  </li>
  <!--/. Logo -->
  <!-- Side navigation links -->
  <li>
    <ul class="collapsible collapsible-accordion">
      <li><a class="collapsible-header waves-effect arrow-r"><i class="fa fa-code"></i> Dashboards<i class="fa fa-angle-down rotate-icon"></i></a>
        <div class="collapsible-body">
          <ul>
            <li><a href="home.html" class="waves-effect">Dahboard v1</a>
            </li>
            <li><a href="home%20v2.html" class="waves-effect">Dahboard v2</a>
            </li>
            <li><a href="home%20v3.html" class="waves-effect">Dahboard v3</a>
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
  name: 'SideNav'
}
</script>

<style lang="css" scoped>
</style>
