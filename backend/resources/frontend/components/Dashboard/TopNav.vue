<template>
  <nav class="navbar fixed-top navbar-toggleable-md navbar-dark scrolling-navbar double-nav">

      <!-- SideNav slide-out button -->
      <div class="float-left">
          <a href="#" data-activates="slide-out" class="button-collapse"><i class="fa fa-bars"></i></a>

      </div>

      <!-- Breadcrumb-->
      <ol class="breadcrumb hidden-lg-down">
          <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
      </ol>

      <!--Navbar links-->
      <ul class="nav navbar-nav nav-flex-icons ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home' }">
               <i class="fa fa-comments-o"></i> <span class="hidden-sm-down">Go To Blog</span>
              </router-link>
          </li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-user"></i> <span class="hidden-sm-down">Profile</span>
              </a>
              <div class="dropdown-menu dropdown-ins dropdown-menu-right" aria-labelledby="userDropdown">
                  <a class="dropdown-item" href="#">Log Out</a>
                  <a class="dropdown-item" href="#">My Profile</a>
              </div>
          </li>
      </ul>
      <!--/Navbar links-->

  </nav>
  <!-- /.Navbar -->

</template>

<script>
export default {
  name: 'TopNav'
}
</script>

<style lang="css" scoped>
</style>
