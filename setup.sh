#!/bin/bash
## Quick setup script for setting up the app after getting it from github.
## Author: Sami
## License: MIT

# Not complete

# Get current user
declare user=$(id -u -n)
echo $user

# Setup project dependencies
composer install
yarn install

# Build production app.js
yarn run prod

# Setup database
php artisan migrate
php artisan passport:install
php artisan db:seed

# Setup permissions
echo 'Is the website on a server? (y/n)'
read server

if [$server -eq 'y']; then
  sudo chmod -R $user:www-data storage/
else
  echo 'Complete'
fi
