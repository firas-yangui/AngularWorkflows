var gulp = require('gulp'),
		$ = require('gulp-load-plugins')();

gulp.task('default', function() {
	gulp.src('js/**/*.js')
		.pipe($.ngAnnotate())
		.pipe($.concat('bundle.js'))
		.pipe($.uglify())
		.pipe(gulp.dest('bin/js'));
});
