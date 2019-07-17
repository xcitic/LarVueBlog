<template>
  <div>
    <NavBar />
      <div class="container">
        <section class="section classic-blog-listing mt-1">

          <BlogPost
            v-for="post in posts"
            :key="post.title"
            :title="post.title"
            :description="post.description"
            :image="post.image"
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
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import BlogPost from '@/components/BlogPost.vue';
import { mapState } from 'vuex';

export default {
  name: 'home',
  components: {
    NavBar,
    BlogPost
  },

  computed: mapState({
    posts: state => state.posts
  }),

  data() {
    return {

    }
  }
}
</script>
