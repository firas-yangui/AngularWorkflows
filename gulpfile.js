var gulp = require('gulp'),
		$ = require('gulp-load-plugins')();

var scripts = ['js/**/*.js']
gulp.task('scripts', function() {
	gulp.src(scripts)
		.pipe($.babel({
			presets: ['es2015']
		 }))
		.pipe($.ngAnnotate())
		.pipe($.sourcemaps.init())
		.pipe($.concat('bundle.js'))
		.pipe($.uglify())
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest('bin/js'));
});

gulp.task('default', ['scripts'], function() {
	gulp.watch(scripts, ['scripts'])
});
