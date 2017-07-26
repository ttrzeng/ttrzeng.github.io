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
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	server = lr();

// Server - listed on localhost:8080
gulp.task('webserver', function() {
  connect.server();
});

//Path sources
var SOURCEPATHS = {
	html: '*.html',
	stylesheet: 'stylesheet/*.css',
	javascript: 'javascript/*.js',
	images: 'assets/**',
	blogposts: 'blogposts/*.html'
}

var APPPATH = {
	root: 'dist',
	css: 'dist/css',
	js: 'dist/js',
	images: 'dist/images',
	blogposts: 'dist/blogposts'
}

// gulp.task('sass', function() {
//   return gulp.src('styles/styles.scss')
// 	.pipe(sass({ style: 'expanded' }))
// 	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
// 	.pipe(gulp.dest('dist/scss'))
// 	.pipe(notify({ message: 'Styles task complete' }));
// });

// Concatenate & Minify JS
gulp.task('scripts', function() {
	return gulp.src(SOURCEPATHS.javascript)
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest(APPPATH.js))
		.pipe(rename('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(APPPATH.js));
});

//Minify CSS
gulp.task('min-css', function() {
	return gulp.src(SOURCEPATHS.stylesheet)
	.pipe(concat('styles.css'))
	.pipe(gulp.dest(APPPATH.css))
	.pipe(rename('styles.min.css'))
	.pipe(minifycss())
	.pipe(gulp.dest(APPPATH.css))
});

// Images
gulp.task('images', function() {
  return gulp.src(SOURCEPATHS.images)
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest(APPPATH.images))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('serve', ['webserver', 'scripts', 'min-css', 'images', 'copy', 'blogposts'], function(){
	browserSync.init([APPPATH.css + '/*.css', APPPATH.root + '/*.html', APPPATH.js + '/*.js', APPPATH.images + '/**'], {
		server: {
			baseDir: APPPATH.root
		}
	})
})

//Copy
gulp.task('copy', function() {
	gulp.src(SOURCEPATHS.html)
	.pipe(gulp.dest(APPPATH.root))
});

//Copy blogposts
gulp.task('blogposts', function() {
	gulp.src(SOURCEPATHS.blogposts)
	.pipe(gulp.dest(APPPATH.blogposts))
});

// Watch
gulp.task('watch', ['serve'], function() {

  // Watch .scss files
  //gulp.watch('sass/**/*.scss', ['styles']);

  //Watch HTML
  gulp.watch(SOURCEPATHS.html, ['copy']);

  //Watch blogposts
  gulp.watch(SOURCEPATHS.blogposts, ['copy']);

  //Watch css files
  gulp.watch(SOURCEPATHS.stylesheet, ['min-css']);

  // Watch .js files
  gulp.watch(SOURCEPATHS.javascript, ['scripts']);

  // Watch image files
  gulp.watch(SOURCEPATHS.images, ['images']);

  // Create LiveReload server
  var server = livereload();

});

gulp.task('default', ['watch']);