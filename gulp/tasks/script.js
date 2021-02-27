const gulp = require('gulp');
const webpack = require('webpack');
const uglify = require('gulp-uglify-es').default;
const webpackStream = require('webpack-stream');
const webpackConfig = require('../../webpack.config.js');

module.exports = function script() {
    return gulp.src('app/js/script.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
}