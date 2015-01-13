var gulp = require('gulp');

var browserify = require('browserify');
var livereload = require('gulp-livereload');
var reactify = require('reactify');
var rimraf = require('rimraf');
var source = require('vinyl-source-stream');

gulp.task('clean', function(cb) {
  rimraf('dist/', cb);
});

gulp.task('browserify', ['clean'], function() {
  var b = browserify();
  b.transform(reactify);
  b.add('./public/application.jsx');
  return b.bundle()
    .pipe(source('application.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy', ['clean'], function() {
  return gulp.src(['./public/index.html', './public/style.css'])
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['browserify', 'copy'], function() {
  return gulp.src('*').pipe(
    livereload());
});

gulp.task('watch', ['default'], function() {
  livereload.listen();
  gulp.watch('./public/**/*', ['default']);
});
