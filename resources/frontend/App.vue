<template>
    <div id="app">
        <div class="col-md-12">
            <div class="offset-md-4">
                <flash-message style="position:fixed; z-index:9998; top:0;" class="text-center"></flash-message>
            </div>
        </div>

        <NavBar/>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';

  export default {
    components: {
      NavBar
    },

    mounted() {
      return this.$store.dispatch('checkUser');
    }
  };

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    .content {
        padding: 65px;
    }


    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
