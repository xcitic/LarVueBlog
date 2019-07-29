<template>
  <div>
      <div class="container">
        <section class="section classic-blog-listing mt-1">

          <BlogPost
            v-for="(post, index) in posts"
            :key="index"
            :title="post.title"
            :data="post"
           />

        </section>
    </div>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue';
import { mapState } from 'vuex';

export default {
  name: 'home',
  components: {
    BlogPost
  },

  mounted() {
    this.getPosts();
  },

  computed: mapState({
    posts: state => state.posts
  }),

  data() {
    return {

    }
  },

  methods: {
    getPosts() {
      this.$store.dispatch('getPosts');
    }
  }
}
</script>
