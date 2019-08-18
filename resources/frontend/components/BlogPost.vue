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
              <img :src="data.image" class="img-fluid">
              <router-link :to="{ name: 'post', params: {link: postLink, id: data.id} }">
                  <div class="mask waves-effect waves-light"></div>
              </router-link>
          </div>

          <!--Excerpt-->
          <!-- <a href="" class="cyan-text"><h5 class="text-center pt-2"><i class="fa fa-laptop"></i>Startups</h5></a> -->

          <h2 class="text-center mt-1 mb-2">{{data.title}}</h2>

          <p>{{data.description}}</p>

          <div class="text-center">
            <router-link :to="{ name: 'post', params: {link: postLink, id: data.id} }">
              <a class="btn btn-primary btn-rounded waves-effect waves-light">Read more</a>
            </router-link>
          </div>

          <!--Post data-->
          <div class="mt-1">
            <h6 class="mb-1">
              <a class="blue-text">
                <i class="fa fa-comments-o"></i> {{commentsCount}}
              </a>
              <a class="blue-text ml-4">
                <i class="fa fa-eye"></i> {{data.views}}
              </a>
            </h6>

            <h6>Posted: {{data.published}}
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
    data: Object,
  },

  data() {
    return {
      liked: false,
    }
  },

  computed: {
    postLink() {
      return this.data.title.replace(/\s+/g, '-').toLowerCase();
    },
    commentsCount() {
      return this.data.comments.length;
    }
  }
}
</script>
