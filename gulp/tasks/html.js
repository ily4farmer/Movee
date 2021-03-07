const gulp = require('gulp'),
      include = require('gulp-file-include'),
      formatHtml = require('gulp-format-html');

module.exports = function html() {
    return gulp.src('app/index.html')
        .pipe(include())
        .pipe(formatHtml())
        .pipe(gulp.dest('dist'))
}