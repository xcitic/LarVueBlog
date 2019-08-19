<template>
  <!--Leave a reply form-->
  <div class="reply-form mt-4 ml-2">

      <!--Third row-->
      <div class="row">

          <!--Content column-->
          <div class="col-sm-10 col-12">
              <div class="md-form">
                  <textarea
                  type="text"
                  id="message"
                  class="md-textarea"
                  v-model.trim="comment.text"
                  v-validate="{required: true, regex: /^[A-Za-z0-9.,!' -]*$/, max:255 }"
                  name="message"
                  />
                  <label :class="comment.text ? 'active' : ''" for="message">The message</label>
                  <span v-if="submitted && errors.has('message')">
                    <p class="red-text"> {{ errors.first('message') }} </p>
                  </span>
              </div>

          </div>

          <div class="text-center">
              <button @click.prevent="submit" class="btn btn-primary">Update</button>
              <button @click.prevent="$emit('close')" class="btn btn-secondary">Cancle</button>
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
    comment: Object
  },

  data() {
    return {
      submitted: false,
    }
  },


  methods: {
    async submit() {
      this.submitted = true;
      this.$validator.validate().then(
        valid => {
          if (valid) {
            let payload = {
              id: this.comment.id,
              text: this.comment.text
            };
            console.log(payload)
            this.$store.dispatch('updateComment', payload)
              .then(() => {
                this.flash(`The comment with id: ${payload.postId}`, 'success');
                this.$emit('close');
              })
              .catch(() => {
                this.flash('Your comment was rejected. Please avoid profanity', 'error');
              })
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
