<template>
  <div>
    <SideNav />

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
  mounted() {
      this.$store.dispatch('getUser');
  }

}
</script>

<style lang="css" scoped>
</style>
