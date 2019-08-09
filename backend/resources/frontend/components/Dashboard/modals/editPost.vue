<template>
  <div class="container-fluid">
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
                            <input v-model="post.title" type="text" id="title"  class="form-control" />
                            <label for="title" :class="post.title ? 'active' : ''" class="">Post title</label>
                        </div>
                    </div>
                </div>
                <!-- /.First card -->

                <div class="card mb-r">
                    <div class="card-block">
                        <div class="md-form mt-1 mb-0 ml-1">
                            <textarea v-model="post.description" type="text" id="description" :class="post.description ? 'active' : ''" class="form-control" value="Short Dec"></textarea>
                        </div>
                    </div>
                </div>

                <!-- Second card -->
                <div class="card mb-r">
                    <ckeditor :editor="editor" v-model="post.content"></ckeditor>
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
                      <img :src="post.image">
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
                            <h5>Change Post</h5>
                        </div>
                        <!--/Card image-->
                        <!--Card content-->
                        <div class="card-block">
                            <p><i class="fa fa-flag mr-1" aria-hidden="true"></i> Status: <strong>Draft</strong></p>
                            <p><i class="fa fa-calendar mr-1" aria-hidden="true"></i> Publish: <strong>Immediately</strong></p>
                            <div class="text-right">
                                <button class="btn-flat waves-effect" @click="$emit('close')">Cancel</button>
                                <button class="btn btn-primary" @click="save">Update</button>
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
        this.post.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },


    save() {
      let payload = {
        'id': this.post.id,
        'title': this.post.title,
        'description': this.post.description,
        'content': this.post.content,
        'image': this.post.image,
      }

      this.$store.dispatch('updatePost', payload)
      .then(() => {
        this.flash('Successfully Updated Post', 'success');
        this.$emit('close');
      }).catch((err) => {
        this.flash('Error: ' + err.message, 'error');
      })

    },


  }
}
</script>

<style  scoped>
</style>
