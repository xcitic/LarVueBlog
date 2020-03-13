<template>
    <div>
        <div class="container">
            <div v-if="loading" class="justify-content-center">
                <icons :icon="['fas', 'spinner']" class="fa-spinner"/>
            </div>

            <section class="section classic-blog-listing mt-1" v-else>

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
    name: 'landing',
    components: {
      BlogPost
    },

    beforeMount() {
      this.getPosts();
    },

    computed: {
      posts() {
        return this.$store.state.posts;
      },

      loading() {
        return this.$store.state.loading;
      }

    },

    methods: {
      async getPosts() {
        await this.$store.dispatch('getPosts');
        this.$store.commit('notLoading');
      },

    }
  }
</script>

<style>
    @keyframes spinner {
        to {
            transform: rotate(360deg);
        }
    }

    .fa-spinner {
        font-size: 50px;
        animation: spinner 1s linear infinite;
    }
</style>
