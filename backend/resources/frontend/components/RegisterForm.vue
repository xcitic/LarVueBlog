<template>
<div class="card card-signin my-5 elevation-10">
  <div class="card-body">
    <h5 class="card-title text-center">Register</h5>
    <div class="form-signin">
      <form>
        <div class="form-control-group">
          <input type="text"
                  v-model="input.name"
                  class="form-control"
                  autocomplete="name"
                  placeholder="Name"
                  name="name"
                  autofocus
                  v-validate="'required|alpha_spaces|min:4|max:50'"
                  maxlength="50"
            />
            <span v-if="submitted && errors.has('name')">
                <p class="red-text"> {{ errors.first('name') }} </p>
            </span>
        </div>

        <div class="form-control-group my-4">
          <input type="email"
                 v-model="input.email"
                 class="form-control"
                 autocomplete="username"
                 placeholder="Email address"
                 name="email"
                 v-validate="'required|email|max:50'"
                 maxlength="50"
            />
            <span v-if="submitted && errors.has('email')">
                <p class="red-text"> {{ errors.first('email') }} </p>
            </span>
        </div>

        <div class="form-control-group my-4">
          <input type="password"
                 v-model="input.password"
                 class="form-control"
                 autocomplete="new-password"
                 placeholder="Password"
                 name="password"
                 ref="password"
                 v-validate="'required|max:50'"
                 maxlength="50"
            />
            <span v-if="submitted && errors.has('password')">
                <p class="red-text"> {{ errors.first('password') }} </p>
            </span>
        </div>

        <div class="form-control-group my-4">
          <input type="password"
                 v-model="input.password_confirmation"
                 class="form-control"
                 autocomplete="new-password"
                 placeholder="Repeat Password"
                 name="password_confirmation"
                 v-validate="'required|confirmed:password'"
                 data-vv-as="password"
                 maxlength="50"
            />
            <span v-if="submitted && errors.has('password_confirmation')">
                <p class="red-text"> {{ errors.first('password_confirmation') }} </p>
            </span>
        </div>

        <button class="btn btn-lg btn-primary btn-block text-uppercase"
                @click.prevent="submit"
                type="submit">
                Register
        </button>
        <hr class="my-4">
      </form>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: 'RegisterForm',

  data() {
    return {
      input: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
      submitted: false,
    };
  },

  methods: {
    async submit() {

      this.$validator.validate().then(
        valid => {
          this.submitted = true;
          if(valid) {
            let payload = this.input;
            this.$store.dispatch('register', payload)
              .then(() => {
                this.auth();
              })
              .catch(() => {
                this.flash('Could not register user', 'error');
                this.submitted = false;
              })
          }
        })
    },

    auth() {
      if(this.$store.state.user) {
        this.flash('Successfully registered user.', 'success');
        this.$router.push('/dashboard');
      }
      else {
        this.flash('Could not register user', 'error');
        this.submitted = false;
        }
      },
  }

};
</script>
