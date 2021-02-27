const gulp = require('gulp');
const include = require('gulp-file-include');
const webphtml = require('gulp-webp-html'),
      formatHtml = require('gulp-format-html'),
      htmlmin = require('gulp-htmlmin'),
      gulpReplace = require('gulp-replace')

module.exports = function html() {
    return gulp.src('app/index.html')
        .pipe(include())
        // htmlmin удаляет все комментарии, gulpReplace убирает все пустые строчки
        // .pipe(htmlmin(
        //     {
        //       removeComments: true
        //     }
        //   ))
        // .pipe(gulpReplace(/^\s*\n/mg, ''))
        .pipe(webphtml())
        .pipe(formatHtml())
        .pipe(gulp.dest('dist'))
}