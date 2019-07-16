<template>
  <div>
    <NavBar />
    <main>
      <div class="container">
        <section class="section classic-blog-listing mt-1">

          <BlogPost
            v-for="post in posts"
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
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import BlogPost from '@/components/BlogPost.vue';

export default {
  name: 'home',
  components: {
    NavBar,
    BlogPost
  },

  data() {
    return {
      posts: [
        {title: 'post1', description: 'This is the description 1', image: 'https://mdbootstrap.com/img/Photos/Horizontal/Work/12-col/img%20%2821%29.jpg', createdAt: '2 days ago', votes: 1, commentsCount: 2, liked: true},
        {title: 'post2', description: 'This is the description 2', image: 'https://mdbootstrap.com/img/Photos/Horizontal/Work/12-col/img%20%2814%29.jpg', createdAt: '4 days ago', votes: 2, commentsCount: 4, liked: false},
        {title: 'post3', description: 'This is the description 3', image: 'https://mdbootstrap.com/img/Photos/Horizontal/Work/12-col/img%20%2837%29.jpg', createdAt: '6 days ago', votes: 33, commentsCount: 8, liked: true},
        {title: 'post4', description: 'This is the description 4', image: 'https://mdbootstrap.com/img/Photos/Horizontal/Work/12-col/img%20%2825%29.jpg', createdAt: '8 days ago', votes: 4, commentsCount: 1, liked: false}
      ]
    }
  }
}
</script>
