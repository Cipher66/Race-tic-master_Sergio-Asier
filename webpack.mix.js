var mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    processCssUrls :false
});

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
    .sass('resources/assets/sass/estiloshome.scss', 'public/css')
    .sass('resources/assets/sass/estilosemail.scss', 'public/css')
    .sass('resources/assets/sass/estilosadmin.scss', 'public/css')
    .sass('resources/assets/sass/cuerpohome.scss', 'public/css')
    .sass('resources/assets/sass/footerhome.scss', 'public/css')
    .sass('resources/assets/sass/menuadmin.scss', 'public/css');

