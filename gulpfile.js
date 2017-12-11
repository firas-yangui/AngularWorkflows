var gulp = require('gulp'),
		gulpConcat = require('gulp-concat'),
		uglify = require('gulp-uglify');

gulp.task('default', function() {
	gulp.src('js/**/*.js')
		.pipe(gulpConcat('bundle.js'))
		.pipe(uglify())
		.pipe(gulp.dest('bin/js'));
});
