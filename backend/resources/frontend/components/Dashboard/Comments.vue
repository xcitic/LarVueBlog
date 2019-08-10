<template>
  <div class="container">
    <div class="col-md-12 mb-1">
      <!-- Tabs -->
      <!-- Nav tabs -->
      <div class="tabs-wrapper">
          <ul class="nav classic-tabs tabs-primary primary-color" role="tablist">
              <li class="nav-item">
                  <a class="nav-link waves-light waves-effect waves-light active" data-toggle="tab" href="#comments" role="tab" aria-expanded="true">Comments</a>
              </li>
          </ul>
      </div>
      <!-- Tab panels -->
      <div class="tab-content card">
          <!--Panel 1-->
          <div class="tab-pane fade active show" id="comments" role="tabpanel" aria-expanded="true">
              <div class="table-responsive">
                  <table class="table">
                      <thead>
                          <tr>
                              <th>#</th>
                              <th>Comment</th>
                              <th>Posted At</th>
                              <th>Blog Post</th>
                              <th>Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="(comment, index) in comments" :key="comment.id">
                              <th scope="row">{{index + 1}}</th>
                              <td>{{comment.text}}</td>
                              <td>{{comment.published}}</td>
                              <td>
                                {{comment.post.title}}
                              </td>
                              <td>
                                  <a @click="editComment(comment.id)" class="blue-text" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                  <a @click="deleteComment(index, comment.id)" class="red-text" data-toggle="tooltip" data-placement="top" title="" data-original-title="Remove"><i class="fa fa-times"></i></a>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
          <!--/.Panel 1-->
      </div>
      <!-- /.Tabs -->
    </div>
    </div>
</template>

<script>
import editComment from '@/components/Dashboard/modals/editComment.vue';

export default {

  computed: {
    comments() {
      return this.$store.state.comments;
    },

  },

  mounted() {
    this.getComments();
  },

  methods: {
    getComments() {
      this.$store.dispatch('getMyComments');
    },


    editComment(id) {
      let data = this.comments.find(comment => comment.id === id);
      this.$modal.show(editComment, {
        comment: data
      }, {
        height: 'auto',
        width: '80%',
        adaptive: true,
        overlayTransition: 'fade',
        scrollable: true,
        reset: true,
      })
    },


    async deleteComment(index, id) {
      try {
        await this.$store.dispatch('deleteComment', id);
        this.flash(`Deleted comment with id: ${id}`, 'success');
        this.$store.commit('removeComment', index);
      } catch (err) {
          this.flash('Error deleting comment: ' + err.message, 'error');
      }
    },
  },

}
</script>

<style scoped>
</style>
