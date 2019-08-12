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

<style lang="css" scoped>
.card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.5);
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-signin .card-body {
  padding: 2rem;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: .1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group input {
  height: auto;
  border-radius: 2rem;
}

.form-label-group>input,
.form-label-group>label {
  padding: var(--input-padding-y) var(--input-padding-x);
}

.form-label-group>label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown)~label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}

.btn-google {
  color: white;
  background-color: #ea4335;
}

.btn-facebook {
  color: white;
  background-color: #3b5998;
}
</style>
