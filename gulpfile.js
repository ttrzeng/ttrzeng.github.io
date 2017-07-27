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
	clean = require('gulp-clean'),
	server = lr();

// Server - listed on localhost:8080
gulp.task('webserver', function() {
  connect.server();
});

//Path sources
var SOURCEPATHS = {
	root: 'src/index.html',
	views: 'src/views/*.html',
	stylesheet: 'src/stylesheet/*.css',
	javascript: 'src/javascript/*.js',
	images: 'src/assets/**',
	blogposts: 'src/blogposts/*.html'
}

var APPPATH = {
	root: 'app',
	css: 'app/css',
	js: 'app/js',
	images: 'app/images',
	views: 'app/views',
	blogposts: 'app/blogposts'
}

// gulp.task('sass', function() {
//   return gulp.src('styles/styles.scss')
// 	.pipe(sass({ style: 'expanded' }))
// 	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
// 	.pipe(gulp.dest('app/scss'))
// 	.pipe(notify({ message: 'Styles task complete' }));
// });

// Concatenate & Minify JS
gulp.task('scripts', function() {
	return gulp.src(SOURCEPATHS.javascript)
		.pipe(concat('main.js'))
		.pipe(gulp.dest(APPPATH.js))
		.pipe(rename('main.min.js'))
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
    .pipe(gulp.dest(APPPATH.images));
});


//Browser Sync
gulp.task('serve', ['webserver', 'scripts', 'min-css', 'images', 'copy', 'copy-root', 'blogposts', 'clean-html'], function(){
	browserSync.init([APPPATH.css + '/*.css', APPPATH.views + '/*.html', APPPATH.root, APPPATH.js + '/*.js', APPPATH.images + '/**'], {
		server: {
			baseDir: APPPATH.root
		}
	})
})

gulp.task('clean-html', function() {
	return gulp.src(APPPATH.views + '/*.html', {read: false, force: true})
		.pipe(clean())
});

//Copy view folder
gulp.task('copy', ['clean-html'], function() {
	gulp.src(SOURCEPATHS.views)
	.pipe(gulp.dest(APPPATH.views))
});

//Copy index.html
gulp.task('copy-root', function() {
	gulp.src(SOURCEPATHS.root)
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

  //Watch for view changes
  gulp.watch(SOURCEPATHS.root, ['copy-root']);
  gulp.watch(SOURCEPATHS.views, ['copy']);

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