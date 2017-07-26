var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	cache = require('gulp-cache'),
	livereload = require('gulp-livereload'),
	minifycss = require('gulp-clean-css'),
	connect = require('gulp-connect'),
	lr = require('tiny-lr'),
	server = lr();

// Server - listed on localhost:8080
gulp.task('webserver', function() {
  connect.server();
});

// gulp.task('styles', function() {
//   return gulp.src('styles/styles.scss')
// 	.pipe(sass({ style: 'expanded' }))
// 	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
// 	.pipe(gulp.dest('css'))
// 	.pipe(notify({ message: 'Styles task complete' }));
// });

// Concatenate & Minify JS
gulp.task('scripts', function() {
	return gulp.src('javascript/*.js')
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(rename('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

//Minify CSS
gulp.task('min-css', function() {
	return gulp.src('stylesheet/*.css')
	.pipe(concat('styles.css'))
	.pipe(gulp.dest('dist/stylesheet'))
	.pipe(rename('styles.min.css'))
	.pipe(minifycss())
	.pipe(gulp.dest('dist/stylesheet'))
});

// Images
gulp.task('images', function() {
  return gulp.src('assets/**')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: 'Images task complete' }));
});

// Watch
gulp.task('watch', function() {

  gulp.start('images');
  gulp.start('scripts');
  gulp.start('min-css');
  gulp.start('webserver');

  // Watch .scss files
  //gulp.watch('sass/**/*.scss', ['styles']);

  //Watch css files
  gulp.watch('stylesheet/*.css', ['min-css']);

  // Watch .js files
  gulp.watch('javascript/*.js', ['scripts']);

  // Watch image files
  gulp.watch('assets/**', ['images']);

  // Create LiveReload server
  var server = livereload();

});

gulp.task('default', function(){

})

gulp.task('default', ['webserver', 'scripts', 'min-css', 'images', 'watch']);