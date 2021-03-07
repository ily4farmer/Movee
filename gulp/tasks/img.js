const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');


module.exports = function styles() {
    return gulp.src('app/img/**/*.{gif,png,jpg,webp}')
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 4,
            svgoPlugins: [
                {
                    removeViewBox: false
                }
            ]
        }))
        .pipe(gulp.dest('dist/img'))
        // .pipe(webp(
        //     {
        //         quality: 70
        //     })
        // )
        .pipe(gulp.dest('dist/img'))
}