<template>
  <div class="col-lg-12 col-md-12 mt-2 mb-2">

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

                                    <input type="text"
                                            v-model="user.name"
                                            class="form-control validate"
                                            autocomplete="name"
                                            placeholder="Name"
                                            name="name"
                                            autofocus
                                            v-validate="'required|alpha_spaces|min:4|max:50'"
                                      />
                                      <span v-if="submitted && errors.has('name')">
                                          <p class="red-text"> {{ errors.first('name') }} </p>
                                      </span>
                                      <label :class="user.name ? 'active' : ''" for="name">Name</label>
                                  </div>
                              </div>
                              <!--Second column-->
                              <div class="col-md-6">
                                  <div class="md-form">
                                    <input type="email"
                                           v-model="user.email"
                                           class="form-control validate"
                                           autocomplete="email"
                                           placeholder="Email address"
                                           name="email"
                                           v-validate="'required|email|max:50'"
                                      />
                                      <span v-if="submitted && errors.has('email')">
                                          <p class="red-text"> {{ errors.first('email') }} </p>
                                      </span>
                                      <label :class="user.email ? 'active' : ''" for="email">Email</label>
                                  </div>
                              </div>
                          </div>
                          <!--/.First row-->
                          <!--First row-->
                          <div class="row" v-if="changePassword">
                              <!--First column-->
                              <div class="col-md-4">
                                  <div class="md-form">
                                    <input type="password"
                                           v-model="cur_password"
                                           class="form-control"
                                           autocomplete="old-password"
                                           placeholder="Enter current password"
                                           name="cur_password"
                                           ref="cur_password"
                                           v-validate="'required|max:50'"
                                           data-vv-as="Old Password"
                                      />
                                      <span v-if="submitted && errors.has('cur_password')">
                                          <p class="red-text"> {{ errors.first('cur_password') }} </p>
                                      </span>
                                  </div>
                              </div>
                              <div class="col-md-4">
                                  <div class="md-form">
                                    <input type="password"
                                           v-model="new_password"
                                           class="form-control"
                                           autocomplete="new-password"
                                           placeholder="Enter New Password"
                                           name="new_password"
                                           ref="new_password"
                                           v-validate="'required|max:50'"
                                           data-vv-as="New Password"
                                      />
                                      <span v-if="submitted && errors.has('new_password')">
                                          <p class="red-text"> {{ errors.first('new_password') }} </p>
                                      </span>
                                  </div>
                              </div>
                              <!--Second column-->
                              <div class="col-md-4">
                                  <div class="md-form">
                                    <input type="password"
                                           v-model="new_password_confirmation"
                                           class="form-control"
                                           autocomplete="new-password"
                                           placeholder="Repeat New Password"
                                           name="new_password_confirmation"
                                           v-validate="'required|confirmed:new_password'"
                                           data-vv-as="Password Confirmation"
                                      />
                                      <span v-if="submitted && errors.has('new_password_confirmation')">
                                          <p class="red-text"> {{ errors.first('new_password_confirmation') }} </p>
                                      </span>
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                            <div class="col-md-12 text-center">
                                <button class="btn btn-secondary waves-light" @click.prevent="showPassword">Change Password</button><br>
                                <button class="btn btn-primary waves-light" @click.prevent="submit">Update Account</button><br>
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
  props: {
    user: Object
  },


  data() {
    return {
      cur_password: '',
      new_password: '',
      new_password_confirmation: '',
      submitted: false,
      changePassword: false,
    }
  },

  methods: {

    showPassword() {
      return this.changePassword = !this.changePassword;
    },

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

    async saveImage(image) {
      let processedImage = await image.replace(/^data:image\/(png|jpg|jpeg|JPEG);base64,/, "")

      let payload = {
        'image': processedImage,
      }
      this.$store.dispatch('updatePicture', payload)
      .then(() => {
        this.flash('Successfully updated picture', 'success');
      }).catch(() => {
        this.flash('Error updating picture', 'error');
      })
    },

    async submit() {
      if(this.cur_password && this.new_password && (this.new_password === this.new_password_confirmation) ) {
        await this.savePassword()
      }
      this.saveInfo()
    },

    async saveInfo() {
      this.$validator.validate().then(
        valid => {
          this.submitted = true;
          if(valid) {
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
          }
        }
      )
    },


    async savePassword() {
      this.$validator.validate().then(
        valid => {
          if(valid) {
            let payload = {
              old_password: this.cur_password,
              new_password: this.new_password,
              new_password_confirmation: this.new_password_confirmation,
            }
              this.$store.dispatch('updatePassword', payload)
                .then(() => {
                this.flash('Success updating password', 'success');
              }).catch((err) => {
                this.flash('Error updating password: ' + err.message, 'error');
              })
          }
        }
      )
    },
  }
}
</script>

<style scoped>
</style>
