<template>
  <div class="container">

      <!--Blog-->
      <div class="row mt-1">
          <!--Main listing-->
          <div class="col-md-12">

              <!--Section: Post-->
              <section class="section section-blog-fw">

                  <!--First row-->
                  <div class="row">

                      <div class="col-md-12">

                          <!--Featured image-->
                          <img :src="post.image">

                          <!--Post data-->
                          <div class="jumbotron">
                              <h2>{{post.description}}</h2>
                              <p>Published {{post.published}}</p>

                              <!--Social shares-->
                              <div class="social-counters">

                                  <!--Views-->
                                  <a class="btn btn-tw">
                                      <i class="fa fa-eye left"></i>
                                      <span class="hidden-md-down">Views</span>
                                  </a>
                                  <span class="counter">{{post.views}}</span>

                                  <!--Likes+-->
                                  <!-- <a class="btn btn-gplus">
                                      <i class="fa fa-heart left"></i>
                                      <span class="hidden-md-down">Likes</span>
                                  </a>
                                  <span class="counter">{{post.likes}}</span> -->

                                  <!--Comments-->
                                  <a class="btn btn-mdb">
                                      <i class="fa fa-comments-o left"></i>
                                      <span class="hidden-md-down">Comments</span>
                                  </a>
                                  <span class="counter">{{ commentsCount }}</span>

                              </div>
                              <!--/.Social shares-->

                          </div>
                          <!--/Post data-->

                          <!--Post text-->
                          <div class="post-text text-center my-5">
                            <div v-html="post.content"></div>
                          </div>
                          <!--/Post text-->

                            <hr class="between-sections">

                          <div class="text-center">
                              <h3 class="h3-responsive">Do you want to share?</h3>
                              <!--Facebook-->
                              <a href="" target="_blank" class="btn-floating btn-small btn-fb"><i class="fa fa-facebook"> </i></a>
                              <!--Twitter-->
                              <a href="" target="_blank" class="btn-floating btn-small btn-tw"><i class="fa fa-twitter"> </i></a>
                              <!--Google +-->
                              <a href="" target="_blank" class="btn-floating btn-small btn-gplus"><i class="fa fa-google-plus"> </i></a>
                          </div>
                      </div>

                  </div>
                  <!--/First row-->

              </section>
              <!--/.Section: Post-->


              <hr class="between-sections">

              <section class="mb-1">

                <h1 class="section-heading mb-1">Leave a comment</h1>
                <!-- If user is logged in ? display comment form : display login button -->
                  <CommentForm
                    v-if="authenticated && user"
                    :userImage="userImage"
                    :postId="post.id"
                  />

                  <div v-else>
                    <router-link class="btn btn-primary" :to="{ name: 'login', params: {} }">Login</router-link>
                      or
                      <router-link class="btn btn-secondary" :to="{ name: 'register', params: {} }">Register</router-link>
                  </div>

              </section>
              <!--/Section: Leave a comment -->


              <!--Section: Comments list-->
              <section>
                  <!--Main wrapper-->
                  <div class="comments-list text-left">
                      <div class="section-heading">
                          <h3 class="mt-2 mb-3">Comments <span class="badge blue">{{ commentsCount }}</span></h3>
                      </div>

                      <Comment
                        v-for="(comment, index) in comments"
                        :key="index"
                        :username="comment.user_info.name"
                        :text="comment.text"
                        :image="comment.user_info.image"
                        :createdAt="comment.published"
                        :profile="comment.user_info.profile_link"
                      />

                  </div>
                  <!--/.Main wrapper-->
              </section>
              <!--/Section: Comments list-->

          </div>
          <!--/.Main listing-->

      </div>
      <!--/.Blog-->

  </div>
</template>

<script>
import { mapState } from 'vuex';
import Auth from '@/api/Auth.js';
import Comment from '@/components/Comment.vue';
import CommentForm from '@/components/CommentForm.vue';

  export default {
    name: 'Post',

    components: {
      Comment,
      CommentForm
    },

    data() {
      return {
      }
    },

    computed: {
      ...mapState({
        post: state => state.post,
        comments: state => state.comments,
        user: state => state.user
      }),

      userIsLoggedIn() {
        return true;
      },

      commentsCount() {
        return this.comments.length;
      },

      authenticated() {
        return Auth.check();
      },

      userImage() {
        return this.user.image;
      }
    },

    mounted() {
      let id = this.$route.params.id;
      this.$store.dispatch('getPost', id);
      this.$store.dispatch('viewedPost', id);
    },

  }

</script>
