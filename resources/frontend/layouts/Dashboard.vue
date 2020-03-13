<template>
    <div>
            <SideNav v-if="showSideNav"/>

        <div class="container-fluid">
            <router-view/>
        </div>

    </div>
</template>

<script>
  import SideNav from '@/components/Dashboard/SideNav.vue';


  export default {
    components: {
      SideNav,
    },

    computed: {
      showSideNav() {
        return this.$store.state.showSideNav;
      }
    },



  }
</script>

<style>
</style>
