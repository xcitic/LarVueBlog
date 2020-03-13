<template>
    <div class="row">
        <!--Image column-->
        <div class="col-sm-2 col-12">
            <img :src="image">
        </div>
        <!--/.Image column-->
        <!--Content column-->
        <div class="col-sm-10 col-12">
            <a><h3 class="user-name">{{username}}</h3></a>
            <div class="card-data">
                <ul>
                    <li class="comment-date"><i class="fa fa-clock-o"></i> {{createdAt}}</li>
                </ul>
            </div>
            <p class="comment-text">
                {{text}}
            </p>
        </div>
        <!--/.Content column-->
    </div>
</template>

<script>
  export default {
    name: 'Comment',
    props: {
      username: String,
      text: String,
      image: String,
      createdAt: String
    }
  }
</script>
