<template>
    <div class="col-md-12">

        <modals-container height="auto"/>

        <AdminList v-if="isAdmin"/>

        <Comments v-else/>

    </div>
</template>

<script>
  import AdminList from '@/components/Dashboard/AdminList.vue';
  import Comments from '@/components/Dashboard/Comments.vue';

  export default {

    components: {
      AdminList,
      Comments
    },

    computed: {
      isAdmin() {
        return this.$store.state.isAdmin;
      },

    }
  }
</script>

<style scoped>
</style>
