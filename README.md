<h1 align="center">
  LarVueBlog
</h1>

<p align="center">
  <a href="https://github.com/laravel/laravel">
    <img src="https://img.shields.io/badge/Laravel-5.8-brightgreen.svg" alt="laravel">
  </a>
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.10-brightgreen.svg" alt="vue">
  </a>
  <a href="http://www.passportjs.org/">
    <img src="https://img.shields.io/badge/passport-7.3-brightgreen.svg" alt="passport">
  </a>
  <a href="https://github.com/xcitic/LarVueBlog/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>

[![HitCount](http://hits.dwyl.io/xcitic/LarVueBlog.svg)](http://hits.dwyl.io/xcitic/LarVueBlog)


<img src="https://github.com/xcitic/LarVueBlog/blob/master/documentation/LarVueBlogDemo-optimized.gif" width="100%" height="450" />


## Introduction

[LarVueBlog](https://github.com/xcitic/LarVueBlog) is a complete blog with authentication, dashboard, admin site and all the goodies of VueJS (vuex, vue-router etc.). </br>
The application uses [Laravel](https://laravel.com) as backend and [VueJS](https://github.com/vuejs/vue) as frontend.
Authorization is handled by [Passport](http://www.passportjs.org/) with JWT token.


- [Preview](https://larvueblog.samilazreg.com)


## Preparation

Project requirements are:
- [composer](https://getcomposer.org)
- [node](https://nodejs.org/)  
- [git](https://git-scm.com/).



## Setting up the project

```bash
# clone the project
git clone https://github.com/xcitic/LarVueBlog.git

# enter the project directory
cd LarVueBlog

# Make setup script executable
chmod +x setup.sh
# Run setup script
./setup.sh

##### PROJECT WILL RUN ON #####
      http://localhost:8000
```

## Features

### Application Features
- [Laravel](https://laravel.com) backend for DB queries, API and ORM.
- [Passport](http://www.passportjs.org/) for JWT authentication.
- [VueJS](https://vuejs.org/) reactive frontend.
- [VueRouter](https://router.vuejs.org/) for client side routing.
- [Vuex](https://vuex.vuejs.org/) for state management.
- [Vee-validate](https://baianat.github.io/vee-validate/) for frontend form validation .
- [Vue-flash-message](https://github.com/keen-on-design/vue-flash-message) for flash messaging.
- [Vue-js-modal](https://github.com/euvl/vue-js-modal#readme) for dynamic modals.
- [InterventionImage](http://image.intervention.io/) for image processing.

### Views
- Landing
- Post
- Login
- Register
- Dashboard
- Account
- PostCreate
- NotFound (404)


### Authentication
- Laravel Passport to handle JWT token issuing and checking.
- API Middleware to intercept and check JWT token.
- Client side Router authentication check on routes that require authentication.

### Build system
- Webpack with versioning thanks to [LaravelMix](https://laravel-mix.com/)



## License

[MIT](https://github.com/xcitic/LarVueBlog/blob/master/LICENSE)

Copyright (c) 2019 [Sami T. Lazreg](https://samilazreg.com)
