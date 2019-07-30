<template>
  <!--Leave a reply form-->
  <div class="reply-form">

      <!--Third row-->
      <div class="row">
          <!--Image column-->
          <div class="col-sm-2 col-12">
              <img :src="image">
          </div>
          <!--/.Image column-->

          <!--Content column-->
          <div class="col-sm-10 col-12">
              <div class="md-form">
                  <textarea type="text" id="form8" class="md-textarea"></textarea>
                  <label for="form8">Your message</label>
              </div>

          </div>

          <div class="text-center">
              <button class="btn btn-primary">Submit</button>
          </div>
          <!--/.Content column-->

      </div>
      <!--/.Third row-->
  </div>
  <!--/.Leave a reply form-->

</template>

<script>
export default {
  props: {
    image: String,
  }
}
</script>

<style lang="css" scoped>
</style>
