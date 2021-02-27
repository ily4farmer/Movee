const gulp = require('gulp'),
      woff = require('gulp-ttf2woff'),
      woff2 = require('gulp-ttf2woff2'),
      fonter = require('gulp-fonter');
    

module.exports = function styles() {
    gulp.src('app/fonts/*')
        .pipe(fonter({
            subset: [66,67,68, 69, 70, 71],
            formats: ['woff', 'ttf']
        }))
        .pipe(woff())
        .pipe(gulp.dest('dist/fonts'))
    return gulp.src('app/fonts/*')
        .pipe(woff2())
        .pipe(gulp.dest('dist/fonts'))
}