<template>
  <div class="container">
    <div class="row">

        <div class="col-md-12 mb-1 mt-2">
            <!-- Tabs -->
            <!-- Nav tabs -->

            <div class="tabs-wrapper ">
                <ul class="text-center nav classic-tabs tabs-primary primary-color" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link waves-light active waves-effect waves-light" data-toggle="tab" href="#posts" role="tab">Posts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link waves-light waves-effect waves-light" data-toggle="tab" href="#comments" role="tab">Comments</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link waves-light waves-effect waves-light" data-toggle="tab" href="#users" role="tab">Users</a>
                    </li>

                </ul>

            </div>
            <!-- Tab panels -->
            <div class="tab-content card">
                <!--Panel 1-->
                <div class="tab-pane fade show active" id="posts" role="tabpanel">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Title</th>
                                    <th>Comments</th>
                                    <th>Views</th>
                                    <th>Likes</th>
                                    <th>Published</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr v-for="(post, index) in posts" :key="post.id">

                                    <th scope="row">{{post.id}}</th>
                                    <td>{{post.title}}</td>
                                    <td>{{post.comments.length}}</td>
                                    <td>{{post.views}}</td>
                                    <td>{{post.likes}}</td>
                                    <td>{{post.published}}</td>
                                    <td>
                                      <a @click="editPost(post.id)" class="blue-text" data-toggle="tooltip" data-placement="top" title="" data-original-title="See Message"><i class="fa fa-pencil"></i></a>
                                      <a @click="deletePost(index, post.id)" class="red-text" data-toggle="tooltip" data-placement="top" title="Delete" data-original-title="Remove"><i class="fa fa-times"></i></a>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <!--/.Panel 1-->
                <!--Panel 2-->
                <div class="tab-pane fade" id="comments" role="tabpanel">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Posted at</th>
                                    <th>Text</th>
                                    <th>User</th>
                                    <th>Blog Post</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(comment, index) in comments" :key="comment.id">
                                    <th scope="row">{{comment.id}}</th>
                                    <td>{{comment.created_at}}</td>
                                    <td>{{comment.text}}</td>
                                    <td>{{comment.user_id}}</td>
                                    <td>{{comment.blog_post_id}}</td>
                                    <td>
                                        <a @click="editComment(comment.id)" class="blue-text" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                        <a @click="deleteComment(index, comment.id)" class="red-text" data-toggle="tooltip" data-placement="top" title="" data-original-title="Remove"><i class="fa fa-times"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!--/.Panel 2-->
                <div class="tab-pane fade" id="users" role="tabpanel">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Registered</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, index) in users" :key="user.id">
                                    <th scope="row">{{user.id}}</th>
                                    <td>{{user.name}}</td>
                                    <td>{{user.email}}</td>
                                    <td>{{user.role}}</td>
                                    <td>{{user.created_at}}</td>
                                    <td>
                                        <a @click="editUser(user.id)" class="blue-text" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                        <a @click="deleteUser(index, user.id)" class="red-text" data-toggle="tooltip" data-placement="top" title="" data-original-title="Remove"><i class="fa fa-times"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- /.Tabs -->
        </div>
    </div>

  </div>
</template>

<script>
import editPost from '@/components/Dashboard/modals/editPost.vue';
import editComment from '@/components/Dashboard/modals/editComment.vue';
import editUser from '@/components/Dashboard/modals/editUser.vue';

export default {

  mounted() {
    this.getPosts();
    this.getComments();
    this.getUsers();
  },

  computed: {
    posts() {
      return this.$store.state.posts;
    },

    comments() {
      return this.$store.state.comments;
    },

    users() {
      return this.$store.state.users;
    }

  },

  methods: {
    getPosts() {
       this.$store.dispatch('getPosts');
    },

    getComments() {
      this.$store.dispatch('getAllComments');
    },

    getUsers() {
      this.$store.dispatch('getAllUsers');
    },

    editPost(id) {
      let data = this.posts.find(post => post.id === id);
      this.$modal.show(editPost, {
        post: data
      }, {
        height: 'auto',
        width: '80%',
        adaptive: true,
        overlayTransition: 'fade',
        scrollable: true,
        reset: true,
      });
    },

    async deletePost(index, id) {
      try {
        await this.$store.dispatch('deletePost', id)
        .then((value) => {
          this.flash(`Deleted Post with id: ${id}`, 'success');
          this.$store.commit('removePost', index);
        })
      } catch (err) {
        this.flash('Error deleting post: ' + err.message, 'error');
      }

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

    editUser(id) {
      let user = this.users.find(user => user.id === id);
      this.$modal.show(editUser, {
        user: user
      }, {
        height: 'auto',
        width: '80%',
        adaptive: true,
        overlayTransition: 'fade',
        scrollable: true,
        reset: true,
      })
    },

    async deleteUser(index, id) {
      try {
        let name = this.users.find(user => user.id === id).name;
        await this.$store.dispatch('deleteUser', id);
        this.flash(`Deleted user with name: ${name}`, 'success');
        this.$store.commit('removeUser', index);
      } catch (err) {
        this.flash('Error deleting user: ' + err.message, 'error');
      }
    },


  }
}
</script>

<style scoped>
</style>
