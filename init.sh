#!/usr/bin/env bash

php -r "copy('.env.example', '.env');"
php artisan key:generate
php artisan ide-helper:meta
