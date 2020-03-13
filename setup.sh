#!/bin/bash
## Quick setup script for setting up the app after getting it from github.
## Author: Sami
## License: MIT


echo '######## Welcome #########'
read -p 'Are you serving this from a server? (y/n)' server

## Check if user has yarn or npm installed (prefer yarn)
declare yarn=$(which yarn)
declare npm=$(which npm)
declare packagemanager

if [[ -n $yarn ]]; then
  packagemanager=yarn
elif [[ -n $npm ]]; then
  packagemanager=npm
else
  echo 'You need NPM or Yarn installed. Exiting'
  exit 1
fi

# Setup project dependencies
composer install
$packagemanager install

# Setting up env variables. Default PDO is Sqlite
cp .env.example .env

# generate application salt
php artisan key:generate
# Build production app.js
yarn run dev
# setup database file sqlite
touch database/database.sqlite
php artisan migrate
# Setup passport keys
php artisan passport:install
# Seed with dummy data
php artisan db:seed

# Dump autoload
composer dump-autoload

# Optimize routing cache
php artisan optimize

# Setup image folder
mkdir -p public/images/users

# Setup permissions
if [ "$server" == "y" ]; then
  # Get current user
  declare user=$(id -u -n)
  sudo chown -R $user:www-data storage/{app,framework,logs} bootstrap/cache
  sudo chown -R www-data:www-data public/images
  echo 'Server setup complete'
  echo 'Point Nginx or Apache to serve from /public'
else
  echo 'Setup complete'
  echo 'Starting dev server'
  php artisan serve --port 8000
fi
