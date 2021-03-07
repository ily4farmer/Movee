const gulp = require('gulp'),
      svgSprite = require('gulp-svg-sprite');

module.exports = function svgBuild() {
    return gulp.src('app/**/*.svg')
        .pipe(svgSprite(
            {
                mode: {
                    stack: { 
                      sprite: "../icons.svg"
                    }
                }
            }
        ))
        .pipe(gulp.dest('dist/img'));

}