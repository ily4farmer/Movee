const gulp = require('gulp'),
	  styles = require('./gulp/tasks/style'),
	  browserSync = require('browser-sync').create(),
	  html = require('./gulp/tasks/html'),
	  script = require('./gulp/tasks/script'),
	  img = require('./gulp/tasks/img'),
	  fonts = require('./gulp/tasks/fonts'),
	  svg = require('./gulp/tasks/svgSprite'),
	  clean = require('./gulp/tasks/del');

function browsersync() {
	browserSync.init({
		server: {
            baseDir: "dist/"
        }
	});
}

function watching() {
	gulp.watch(["app/sass/**/*.sass"], styles);
	gulp.watch(["app/sass/**/*.sass"]).on('change', browserSync.reload);
	gulp.watch(["app/**/*.html"], html);
	gulp.watch(["app/**/*.html"]).on('change', browserSync.reload);
	gulp.watch(["app/**/*.js"], script);
	gulp.watch(["app/**/*.js"]).on('change', browserSync.reload);
	gulp.watch(["app/img/*.{gif,png,jpg,svg,webp}"], img);
	gulp.watch(["app/fonts/*"], fonts);
}


const task = gulp.parallel(styles, html, script, img, fonts);
const dev = gulp.series(clean, task);

const build = gulp.parallel(browsersync, watching);


exports.default = gulp.parallel(dev, build);