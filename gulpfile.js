var gulp = require('gulp'),
		$ = require('gulp-load-plugins')(),
		//stylish = require('jshint-stylish'),
		karma = require('karma'),
		args = require('yargs').argv;

var prod = args.prod;

var scripts = ['js/**/*.js','!js/spec/*.js'];
var karmaFiles = ['node_modules/angular/angular.js',
									'node_modules/jquery/dist/jquery.min.js',
									'node_modules/angular-route/angular-route.js',
									'node_modules/angular-mocks/angular-mocks.js',
									'node_modules/bootstrap/dist/js/bootstrap.min.js'
								];
var specs = 'js/spec/*.js';
var bundle = 'bin/js/**/*.js';

gulp.task('scripts', function() {
	gulp.src(scripts)
		.pipe($.babel({
			presets: ['es2015']
		 }))
		.pipe($.ngAnnotate())
		.pipe(!prod ? $.sourcemaps.init() : $.util.noop())
		.pipe($.concat('bundle.js'))
		.pipe($.uglify())
		.pipe(!prod ? $.sourcemaps.write() : $.util.noop())
		.pipe(gulp.dest('bin/js'));
});

gulp.task('default', ['test'], function() {
	gulp.watch(scripts, ['test'])
});

gulp.task('test', ['scripts'], function(done) {

	var preprocessors = {};
	preprocessors[bundle] = ['coverage'];

	var files = [specs, bundle];
	files = karmaFiles.concat(files);

	new karma.Server({
		configFile: __dirname + '/karma.conf.js',
		files: files,
		preprocessors: preprocessors,
		singleRun: true
	}, function() {
		done();
	}).start();
});
