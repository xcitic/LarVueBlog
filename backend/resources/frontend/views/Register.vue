<template>
<div class="container">
  <div class="row">

    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
      <RegisterForm />
    </div>

  </div>
</div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue';

export default {
  name: 'Register',
  components: {
    RegisterForm,
  },
};
</script>
