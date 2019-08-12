<template>
  <div class="container">

  <section class="section">
      <!-- First row -->
      <div class="row">
          <!-- First col -->
          <div class="col-lg-8">
              <!-- First card -->
              <div class="card mb-r">
                  <div class="card-block">
                      <div class="md-form mt-1 mb-0">
                          <input
                            v-model="title"
                            type="text"
                            id="title"
                            class="form-control"
                            maxlength="100"
                            v-validate="{required: true, regex: /^[A-Za-z0-9.,!' -]*$/, max:255 }
                            name="title"
                            />
                          <label for="title" class="">Post title</label>
                          <span v-if="submitted && errors.has('title')">
                            <p class="red-text"> {{ errors.first('title') }} </p>
                          </span>
                      </div>
                  </div>
              </div>
              <!-- /.First card -->

              <!-- Second card -->
              <div class="card mb-r">
                  <Editor v-model="content"></Editor>
              </div>
              <!-- /.Second card -->

              <!-- Third Card -->
              <div class="card mb-r">
                  <div class="card-block">
                      <div class="md-form mb-0">
                          <textarea type="text" id="form7" class="md-textarea"></textarea>
                          <label for="form7">Custom CSS Code</label>
                      </div>
                  </div>
              </div>
              <!-- /.Third Card -->
          </div>
          <!-- /.First col -->
          <!-- Second col -->
          <div class="col-lg-4">
              <!-- First card -->
              <div class="card card-cascade narrower mb-r">
                  <div class="admin-panel info-admin-panel">
                      <!--Card image-->
                      <div class="view primary-color">
                          <h5>Publish</h5>
                      </div>
                      <!--/Card image-->
                      <!--Card content-->
                      <div class="card-block">
                          <p><i class="fa fa-flag mr-1" aria-hidden="true"></i> Status: <strong>Draft</strong></p>
                          <p><i class="fa fa-eye mr-1" aria-hidden="true"></i> Visibility <strong>Public</strong></p>
                          <p><i class="fa fa-archive mr-1 mr-1" aria-hidden="true"></i> Revisions: <strong>2</strong></p>
                          <p><i class="fa fa-calendar mr-1" aria-hidden="true"></i> Publish: <strong>Immediately</strong></p>
                          <div class="text-right">
                              <button class="btn-flat waves-effect">Discard</button>
                              <button class="btn btn-primary">Publish</button>
                          </div>
                      </div>
                      <!--/.Card content-->
                  </div>
              </div>
              <!-- /.First card -->
              <!-- Second card -->
              <div class="card card-cascade narrower mb-r">
                  <div class="admin-panel info-admin-panel">
                      <!--Card image-->
                      <div class="view primary-color">
                          <h5>Categories</h5>
                      </div>
                      <!--/Card image-->
                      <!--Card content-->
                      <div class="card-block">
                          <fieldset class="form-group">
                              <input type="checkbox" id="color-1">
                              <label for="color-1">Material Design</label>
                          </fieldset>
                          <fieldset class="form-group">
                              <input type="checkbox" id="color-2">
                              <label for="color-2">Tutorials</label>
                          </fieldset>
                          <fieldset class="form-group">
                              <input type="checkbox" id="color-3">
                              <label for="color-3">Marketing Automation</label>
                          </fieldset>
                          <fieldset class="form-group">
                              <input type="checkbox" id="color-4">
                              <label for="color-4">Design Resources</label>
                          </fieldset>
                          <fieldset class="form-group">
                              <input type="checkbox" id="color-5">
                              <label for="color-5">Random Stories</label>
                          </fieldset>
                      </div>
                      <!--/.Card content-->
                  </div>
              </div>
              <!-- /.Second card -->
          </div>
          <!-- /.Second col -->
      </div>
      <!-- /.First row -->
  </section>

</div>

</template>

<script>
import Editor from '@tinymce/tinymce-vue';


export default {
  components: {
    Editor
  },

  computed: {
    content() {
      return this.$store.state.new.content;
    },

    title() {
      return this.$store.state.new.title;
    }
  },

  // date() {
  //   return {
  //     content: '',
  //     title: ''
  //   }
  // }
}
</script>

<style scoped>
</style>
