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

export default {
  name: 'home',
  components: {
    BlogPost
  },

  mounted() {
    this.getPosts();
  },

  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },

  data() {
    return {

    }
  },

  methods: {
    getPosts() {
      this.$store.dispatch('getPosts');
    },

  }
}
</script>
