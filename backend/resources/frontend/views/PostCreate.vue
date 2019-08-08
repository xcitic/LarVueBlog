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
                            <input v-model="title" type="text" id="title" class="form-control" />
                            <label for="title" class="">Post title</label>
                        </div>
                    </div>
                </div>
                <!-- /.First card -->

                <div class="card mb-r">
                    <div class="card-block">
                        <div class="md-form mt-1 mb-0 ml-1">
                            <textarea v-model="description" type="text" id="description" class="form-control" value="Short Dec"></textarea>
                        </div>
                    </div>
                </div>

                <!-- Second card -->
                <div class="card mb-r">
                    <ckeditor :editor="editor" v-model="content"></ckeditor>
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
                        <div class="view primary-color">
                            <h5>Publish</h5>
                        </div>
                        <!--/Card image-->
                        <!--Card content-->
                        <div class="card-block">
                            <p><i class="fa fa-flag mr-1" aria-hidden="true"></i> Status: <strong>Draft</strong></p>
                            <p><i class="fa fa-calendar mr-1" aria-hidden="true"></i> Publish: <strong>Immediately</strong></p>
                            <div class="text-right">
                                <button class="btn-flat waves-effect" @click="reset">Discard</button>
                                <button class="btn btn-primary" @click="save">Publish</button>
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
      let payload = {
        'title': this.title,
        'description': this.description,
        'content': this.content,
        'image': this.image,
      }

      this.$store.dispatch('createPost', payload)
      .then(() => {
        this.flash('Successfully created new post', 'success');
        this.$router.push('/dashboard');
      }).catch((err) => {
        this.flash('Error: ' + err.message, 'error');
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
