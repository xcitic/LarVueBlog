<template>
    <!--Leave a reply form-->
    <div class="reply-form">

        <!--Third row-->
        <div class="row">
            <!--Image column-->
            <div class="col-sm-2 col-12">
                <img :src="userImage"/>
            </div>
            <!--/.Image column-->

            <!--Content column-->
            <div class="col-sm-10 col-12">
                <div class="md-form">
                <textarea
                    type="text"
                    id="message"
                    class="md-textarea"
                    v-model.trim="message"
                    v-validate="{required: true, regex: /^[A-Za-z0-9.,!' -]*$/, max:255 }"
                    name="message"
                    maxlength="255"
                />
                    <label for="message">Your message</label>
                    <span v-if="submitted && errors.has('message')">
                  <p class="red-text"> {{ errors.first('message') }} </p>
                </span>
                </div>

            </div>

            <div class="text-center">
                <button class="btn btn-primary" @click.prevent="submit" :disabled="processing">
                <span v-if="processing" class="justify-content-center">
                  <icons :icon="['fas', 'spinner']" class="fa-spinner-small"/>
                </span>
                    <span v-else>
                  Submit
                </span>
                </button>
            </div>
            <!--/.Content column-->

        </div>
        <!--/.Third row-->
    </div>
    <!--/.Leave a reply form-->
</template>

<script>
  export default {
    props: [
      'userImage'
    ],

    data() {
      return {
        message: '',
        submitted: false,
        processing: false,
      }
    },

    methods: {
      async submit() {
        this.submitted = true;
        this.$validator.validate().then(
          valid => {
            if (valid) {
              this.processing = true;
              let payload = {
                message: this.message,
                postId: this.$store.state.post.id
              };
              this.$store.dispatch('createComment', payload)
                .then(() => {
                  this.flash('Your comment has been created :)', 'success');
                  this.processing = false;
                })
                .catch(() => {
                  this.flash('Your comment was rejected. Please avoid profanity', 'error');
                  this.processing = false;
                })
              this.reset();

            }
          })
      },

      reset() {
        this.submitted = false;
        this.message = '';
      }


    }
  }
</script>
