const gulp = require('gulp'),
      svgSprite = require('gulp-svg-sprite');

module.exports = function svg() {
    return gulp.src('app/**/*.svg')
        .pipe(svgSprite(
            {
                mode: {
                    stack: { // Activate the «css» mode
                      sprite: "buld/img"
                    }
                }
            }
        ))
        .pipe(gulp.dest('build/img'));

}