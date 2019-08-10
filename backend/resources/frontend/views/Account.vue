<template>
      <!-- First row -->
      <div class="col-lg-12 col-md-12 mt-2">

      <div class="row">
          <!-- First column -->
          <div class="col-lg-3 offset-lg-2 offset-md-0 col-md-4">

              <!-- Card -->
              <div class="card contact-card">
                  <div class="admin-panel info-admin-panel">
                      <!-- Card title -->
                      <div class="view primary-color">
                          <h5>Edit Photo</h5>
                      </div>
                      <!-- /.Card title -->

                      <!-- Card content -->
                      <div class="card-block text-center">
                          <img v-if="user.image" :src="user.image" alt="User Photo" class="rounded-circle contact-avatar my-2 mx-auto">
                            <input class="btn btn-primary" type="file" @change="processImage"/>
                      </div>
                      <!-- /.Card content -->
                  </div>
              </div>
              <!-- /.Card -->
          </div>
          <!-- /.First column -->
          <!-- Second column -->
          <div class="col-lg-7 col-md-8">
              <!--Card-->
              <div class="card">
                  <div class="admin-panel info-admin-panel">
                      <!--Card image-->
                      <div class="view primary-color">
                          <h5>Edit Account</h5>
                      </div>
                      <!--/Card image-->
                      <!--Card content-->
                      <div class="card-block mr-2 ml-2 mt-2">
                          <!-- Edit Form -->
                          <form>
                              <!--First row-->
                              <div class="row">
                                  <!--First column-->
                                  <div class="col-md-6">
                                      <div class="md-form">
                                          <input type="text" id="name" class="form-control validate" v-model="user.name">
                                          <label :class="user.name ? 'active' : ''" for="name">Name</label>
                                      </div>
                                  </div>
                                  <!--Second column-->
                                  <div class="col-md-6">
                                      <div class="md-form">
                                          <input type="text" id="email" class="form-control validate" v-model="user.email">
                                          <label :class="user.email ? 'active' : ''" for="email">Email</label>
                                      </div>
                                  </div>
                              </div>
                              <!--/.First row-->
                              <!--First row-->
                              <div class="row">
                                  <!--First column-->
                                  <div class="col-md-6">
                                      <div class="md-form">
                                          <input type="password" id="password" class="form-control validate">
                                          <label for="password">Password</label>
                                      </div>
                                  </div>
                                  <!--Second column-->
                                  <div class="col-md-6">
                                      <div class="md-form">
                                          <input type="password" id="confirm_password" class="form-control validate">
                                          <label for="confirm_password">Confirm Password</label>
                                      </div>
                                  </div>
                              </div>
                              <!--/.First row-->
                              <!--Second row-->
                              <!-- Fourth row -->
                              <div class="row">
                                  <div class="col-md-12 text-center">
                                      <button class="btn btn-primary waves-light" @click.prevent="saveInfo">Update Account</button><br>
                                  </div>
                              </div>
                              <!-- /.Fourth row -->
                          </form>
                          <!-- Edit Form -->
                      </div>
                      <!--/.Card content-->
                  </div>
              </div>
              <!--/.Card-->
          </div>
          <!-- /.Second column -->
      </div>
      <!-- /.First row -->
  </div>
</template>

<script>
export default {
  components: {
  },

  computed: {
    user() {
      return this.$store.state.user;
    }
  },

  methods: {

  async processImage(e) {
      let files = e.target.files || e.dataTransfer.files;
      if(!files.length) {
        return;
      }
      this.createImage(files[0]);
    },

    createImage(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        let image = e.target.result;
        this.user.image = image
        this.saveImage(image);
      };
      reader.readAsDataURL(file)
    },

    saveImage(image) {
      let payload = {
        'image': image,
      }
      this.$store.dispatch('updatePicture', payload)
      .then(() => {
        this.flash('Successfully updated picture', 'success');
      }).catch(() => {
        this.flash('Error updating picture', 'error');
      })
    },

    saveInfo() {
      let payload = {
        name: this.user.name,
        email: this.user.email
      }
      this.$store.dispatch('updateAccount', payload)
      .then(() => {
        this.flash('Successfully updated your account.', 'success');
        // this.$router.push('/dashboard');
      }).catch((err) => {
        this.flash('Error: ' + err.message, 'error');
      })
    },


  }
}
</script>

<style>
  .contact-avatar {
    width: 175px !important;
    height: 175px !important;
  }
</style>
