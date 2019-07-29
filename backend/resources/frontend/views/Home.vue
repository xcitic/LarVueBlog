<template>
  <div>
      <div class="container">
        <section class="section classic-blog-listing mt-1">

          <BlogPost
            v-for="post in posts"
            :key="post.id"
            :title="post.title"
            :description="post.description"
            :image="post.image"
            :text="post.text"
            :createdAt="post.createdAt"
            :votes="post.votes"
            :commentsCount="post.commentsCount"
            :liked="post.liked"
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
