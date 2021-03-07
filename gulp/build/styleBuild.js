const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    clean = require('gulp-clean-css'),
    shorthand = require('gulp-shorthand'),
    rename = require('gulp-rename'),
    webpcss = require('gulp-webpcss');


module.exports = function styleBuild() {
    return gulp.src('app/sass/style.sass')
        .pipe(sass())
        .pipe(shorthand())
        // .pipe(webpcss())
        .pipe(autoprefixer(
            {   
                overrideBrowserslist:  ['last 10 versions'],
                cascade: false,
                grid: true
            }
        ))
        .pipe(clean(
            {
                debug: true,
                compatibility: '*'
            }, details => {
                console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
            }
        ))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))
}