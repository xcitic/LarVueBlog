#!/bin/bash

php artisan optimize:clear
php artisan migrate:refresh
php artisan passport:install --force
php artisan db:seed
