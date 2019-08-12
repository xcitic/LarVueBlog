<template>
  <div class="container">
    <h1>Create New Blog Post</h1>
    <section class="section mt-2">
        <!-- First row -->
        <div class="row">
            <!-- First col -->
            <div class="col-lg-8">
                <!-- First card -->
                <div class="card mb-r">
                    <div class="card-block">
                        <div class="md-form mt-1 mb-0 ml-1">
                          <input
                          v-model="title"
                          type="text"
                          id="title"
                          class="form-control"
                          maxlength="100"
                          v-validate="{required: true, regex: /^[A-Za-z0-9.,!' -]*$/, max:255 }
                          name="title"
                          />
                          <label for="title" :class="post.title ? 'active' : ''" class="">Post title</label>
                          <span v-if="submitted && errors.has('title')">
                            <p class="red-text"> {{ errors.first('title') }} </p>
                          </span>
                        </div>
                    </div>
                </div>
                <!-- /.First card -->

                <div class="card mb-r">
                    <div class="card-block">
                        <div class="md-form mt-1 mb-0 ml-1">
                          <textarea
                            v-model="description"
                            type="text"
                            id="description"
                            class="form-control"
                            maxlength="150"
                            rows="2"
                            v-validate="{required: true, regex: /^[A-Za-z0-9.,!' -]*$/, max:255 }
                            name="description"
                            ></textarea>
                          <label for="description" :class="post.description ? 'active' : ''" class="ml-1">Short Description</label>

                          <span v-if="submitted && errors.has('description')">
                            <p class="red-text"> {{ errors.first('description') }} </p>
                          </span>

                        </div>
                    </div>
                </div>

                <!-- Second card -->
                <div class="card mb-r">
                    <ckeditor :editor="editor" :config="editorConfig" tag-name="textarea" v-model="content"></ckeditor>
                </div>
                <!-- /.Second card -->

                <div class="card mb-r">
                    <div class="card-block">
                        <div class="md-form mt-1 mb-0 ml-1">
                          <input type="file" @change="processImage"  />
                        </div>
                    </div>
                </div>

                <div class="card mb-r" v-if="image">
                    <div class="card-block">
                      <img :src="image" alt="">
                    </div>
                </div>

            </div>
            <!-- /.First col -->
            <!-- Second col -->
            <div class="col-lg-4">
                <!-- First card -->
                <div class="card card-cascade narrower mb-r">
                    <div class="admin-panel info-admin-panel">
                        <!--Card image-->
                        <div class="view primary-color text-white">
                            <h5>Publish</h5>
                        </div>
                        <!--/Card image-->
                        <!--Card content-->
                        <div class="card-block">
                            <p><i class="fa fa-flag mr-1" aria-hidden="true"></i> Status: <strong>Draft</strong></p>
                            <p><i class="fa fa-calendar mr-1" aria-hidden="true"></i> Publish: <strong>Immediately</strong></p>
                            <div class="text-right">
                              <button class="btn btn-primary" @click="save">Publish</button>
                              <button class="btn btn-secondary waves-effect" @click="reset">Reset</button>
                            </div>
                        </div>
                        <!--/.Card content-->
                    </div>
                </div>
                <!-- /.First card -->
            </div>
            <!-- /.Second col -->
        </div>
        <!-- /.First row -->
    </section>
  </div>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default {
  components: {
    ckeditor: CKEditor.component
  },

  data() {
    return {
      title: '',
      description: '',
      content: '',
      image: '',
      editor: ClassicEditor,
      editorConfig: {
        toolbar: ['heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote', 'insertTable', 'undo', 'redo']
      },
    }
  },

  methods: {
    processImage(e) {
      let files = e.target.files || e.dataTransfer.files;
      if(!files.length) {
        return;
      }
      this.createImage(files[0]);
    },

    createImage(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },


    save() {

      this.$validator.validate().then(valid => {
        this.submitted = true;
        if (valid) {
          let processedImage = this.image.replace(/^data:image\/(png|jpg|jpeg|JPEG);base64,/, "")
          let payload = {
            'title': this.title,
            'description': this.description,
            'content': this.content,
            'image': processedImage
          }

          this.$store.dispatch('createPost', payload)
          .then(() => {
            this.flash('Successfully created new post', 'success');
            this.$router.push({ name: 'dashboard' });
          }).catch((err) => {
            this.flash('Error: ' + err.message, 'error');
            this.submitted = false;
          })
        }
      })


    },

    reset() {
      this.title = '';
      this.description = '';
      this.content = '';
      this.image = '';
    },


  }
}
</script>

<style  scoped>
</style>
