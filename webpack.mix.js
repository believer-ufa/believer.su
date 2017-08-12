let mix = require('laravel-mix');

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

const envOptions = {
    modules: false,
    targets: {
        browsers: ['> 2%'],
        uglify: true
    }
}

mix.webpackConfig({
    module: {
        rules: [ {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        [ 'env', envOptions ],
                    ],
                    plugins: [
                        [ "transform-object-rest-spread", { useBuiltIns: true } ]
                    ],
                }
            }
        } ]
    }
})

mix
    .js('resources/assets/js/app/index.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
