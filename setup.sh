#!/bin/bash
## Quick setup script for setting up the app after getting it from github.
## Author: Sami
## License: MIT


echo '######## Welcome #########'
read -p 'Are you serving this from a server? (y/n)' server

# Setup project dependencies
composer install
yarn install

# Setting up env variables. Default PDO is Sqlite
cp .env.example .env

# generate application salt
php artisan key:generate
# Build production app.js
yarn run prod
# setup database file sqlite
touch database/database.sqlite
php artisan migrate
# Setup passport keys
php artisan passport:install
# Seed with dummy data
php artisan db:seed

# Setup permissions
if ["$server" == 'y']; then
  # Get current user
  declare user=$(id -u -n)
  sudo chown -R $user:www-data storage/{app,framework,logs} bootstrap/cache
  sudo chown -R www-data:www-data public/images
else
  echo 'Setup complete'
  echo 'Starting dev server'
  php artisan serve --port 8000
fi
