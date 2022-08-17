const fs = require('fs');
var mix = require('laravel-mix');

mix.js('src/app.js', 'dist').setPublicPath('dist');
