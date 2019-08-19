<template>
  <div class="container-fluid">
    <h1>Edit Blog Post</h1>
    <section class="section mt-2">
        <!-- First row -->
        <div class="row">
            <!-- First col -->
            <div class="col-lg-8">
                <!-- First card -->
                <div class="card mb-r">
                    <div class="card-block">
                        <div class="md-form mt-1 mb-0 ml-1">
                            <input v-model="post.title"
                            type="text"
                            id="title"
                            name="title"
                            class="form-control"
                            maxlength="100"
                            v-validate="{required: true, regex: /^[A-Za-z0-9.,!' -]*$/, min:6, max:255 }"
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
                            <textarea v-model="post.description" type="text"
                            id="description"
                            class="form-control"
                            maxlength="150"
                            rows="2"
                            v-validate="{required: true, regex: /^[A-Za-z0-9.,!' -]*$/, max:255 }"
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
                    <ckeditor :editor="editor" :config="editorConfig" tag-name="textarea" v-model="post.content"></ckeditor>
                </div>
                <!-- /.Second card -->

                <div class="card mb-r">
                    <div class="card-block">
                        <div class="md-form mt-1 mb-0 ml-1">
                          <input type="file" @change="processImage"  />
                        </div>
                    </div>
                </div>

                <div class="card mb-r" v-if="post.image">
                    <div class="card-block">
                      <img :src="newImage ? newImage : post.image ">
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
                        <div class="view primary-color text-center text-white">
                            <h5>Change Post</h5>
                        </div>
                        <!--/Card image-->
                        <!--Card content-->
                        <div class="card-block text-center">
                            <p><i class="fa fa-flag mr-1" aria-hidden="true"></i> Status: <strong>Draft</strong></p>
                            <p><i class="fa fa-calendar mr-1" aria-hidden="true"></i> Publish: <strong>Immediately</strong></p>
                            <div class="text-right">
                                <button class="btn btn-primary" @click="save">Update</button>
                                <button class="btn btn-secondary" @click="$emit('close')">Cancel</button>
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

  props: {
    post: Object
  },

  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        toolbar: ['heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote', 'insertTable', 'undo', 'redo']
      },
      newImage: '',
      submitted: false,
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
        this.newImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    async submit() {

    },


    async save() {
        // run validator
        this.$validator.validate().then(
          valid => {
          this.sumbitted = true;
          if (valid) {

            let payload = {
              'id': this.post.id,
              'title': this.post.title,
              'description': this.post.description,
              'content': this.post.content,
            }

            if (this.newImage) {
              let processedImage = this.newImage.replace(/^data:image\/(png|jpg|jpeg|JPEG);base64,/, "");
              payload.image = processedImage;
            }

            this.$store.dispatch('updatePost', payload)
            .then(() => {
              this.flash('Successfully Updated Post', 'success');
              this.$emit('close');
            }).catch((err) => {
              this.flash('Error: ' + err.message, 'error');
              this.submitted = false;
            })

          }
        })

      },

  }
}
</script>

<style  scoped>
</style>
