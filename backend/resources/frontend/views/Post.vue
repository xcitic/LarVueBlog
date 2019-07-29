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
                          <img src="https://mdbootstrap.com/img/Photos/Horizontal/City/12-col/img%20(49).jpg">

                          <!--Post data-->
                          <div class="jumbotron">
                              <h2>Six amazing months in Los Angeles</h2>
                              <p>Written by <a href="#!" class="black-text">Martha Barnett</a> on 25/08/2016</p>

                              <!--Social shares-->
                              <div class="social-counters">

                                  <!--Facebook-->
                                  <a class="btn btn-fb">
                                      <i class="fa fa-facebook left"></i>
                                      <span class="hidden-md-down ">Facebook</span>
                                  </a>
                                  <span class="counter">98</span>

                                  <!--Twitter-->
                                  <a class="btn btn-tw">
                                      <i class="fa fa-twitter left"></i>
                                      <span class="hidden-md-down">Twitter</span>
                                  </a>
                                  <span class="counter">75</span>

                                  <!--Google+-->
                                  <a class="btn btn-gplus">
                                      <i class="fa fa-google-plus left"></i>
                                      <span class="hidden-md-down">Google+</span>
                                  </a>
                                  <span class="counter">87</span>

                                  <!--Comments-->
                                  <a class="btn btn-mdb">
                                      <i class="fa fa-comments-o left"></i>
                                      <span class="hidden-md-down">Comments</span>
                                  </a>
                                  <span class="counter">{{ comments.length }}</span>

                              </div>
                              <!--/.Social shares-->

                          </div>
                          <!--/Post data-->

                          <!--Post text-->
                          <div class="post-text">
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

                              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad autem vel eum iure reprehenderit qui in ea minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                          </div>
                          <!--/Post text-->

                          <hr>

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
                    v-if="userIsLoggedIn"
                  />

                  <div v-else>
                    <a class="btn btn-primary">Login</a>
                      or
                    <a class="btn btn-secondary">Register</a>
                  </div>

              </section>
              <!--/Section: Leave a comment -->


              <!--Section: Comments list-->
              <section>
                  <!--Main wrapper-->
                  <div class="comments-list text-left">
                      <div class="section-heading">
                          <h3 class="mt-2 mb-3">Comments <span class="badge blue">{{ comments.length }}</span></h3>
                      </div>

                      <Comment
                        v-for="comment in comments"
                        :key="comment.id"
                        :username="comment.username"
                        :text="comment.text"
                        :image="comment.image"
                        :createdAt="comment.createdAt"
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
import {mapState} from 'vuex';
import Comment from '@/components/Comment.vue';
import CommentForm from '@/components/CommentForm.vue';

  export default {
    name: 'Post',

    components: {
      Comment,
      CommentForm
    },

    computed: {
      ...mapState({
      comments: state => state.comments
      }),

      userIsLoggedIn() {
        return true
      },
    },

    mounted() {

        console.log(this.$router.id);

    }

  }

</script>
