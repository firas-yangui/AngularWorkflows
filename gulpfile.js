var gulp = require('gulp'),
		$ = require('gulp-load-plugins')();

gulp.task('default', function() {
	gulp.src('js/**/*.js')
		.pipe($.ngAnnotate())
		.pipe($.sourcemaps.init())
		.pipe($.concat('bundle.js'))
		.pipe($.uglify())
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest('bin/js'));
});
