<template>
  <div
    class="row mb-4 wow fadeIn"
    data-wow-delay="0.1s"
    style="visibility: visible; animation-delay: 0.1s; animation-name: fadeIn;"
  >

        <!--First column-->
        <div class="col-md-12">

            <!--Image-->
            <div class="view overlay hm-white-slight hm-zoom">
                <img :src="image" class="img-fluid">
                <a href="#!">
                    <div class="mask waves-effect waves-light"></div>
                </a>
            </div>

            <!--Excerpt-->
            <!-- <a href="" class="cyan-text"><h5 class="text-center pt-2"><i class="fa fa-laptop"></i>Startups</h5></a> -->

            <h2 class="text-center mt-1 mb-2">{{title}}</h2>

            <p>{{description}}</p>

            <div class="text-center">
              <a class="btn btn-primary btn-rounded waves-effect waves-light">Read more</a>
            </div>

            <!--Post data-->
            <div class="mt-1">
              <h6 class="mb-1">
                <a href="#!" class="blue-text">
                  <i class="fa fa-comments-o"></i> {{commentsCount}}
                </a>
                <a class="red-text ml-4">
                  <i class="fa fa-heart red-text" :class="liked ? 'red-text' : 'grey-text'"></i> {{commentsCount}}
                </a>
              </h6>

              <h6>Posted: {{createdAt}}
              </h6>
            </div>
        </div>
        <!--First column-->
    </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    title: String,
    description: String,
    image: String,
    createdAt: String,
    commentsCount: Number,
    votes: Number,
    liked: Boolean
  },
}
</script>

<style lang="css" scoped>
</style>
