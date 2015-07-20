var gulp = require('gulp');
var clean = require('gulp-clean');
var babel = require('gulp-babel');

gulp.task('default', ['transpiling']);

gulp.task('transpiling',['copyHtml'], function () {
  return gulp.src('src/app.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('copyHtml', ['dependencies'], function () {
  return gulp.src('src/*.html').pipe(gulp.dest('dist/public'));		 
});

gulp.task('dependencies', ['clean'], function () {
  gulp.src('bower_components/angular/angular.min.js').pipe(gulp.dest('dist/public/vendor/angular'));		 
  gulp.src('bower_components/angular/angular.min.js.map').pipe(gulp.dest('dist/public/vendor/angular'));		 
  gulp.src('bower_components/jquery/dist/jquery.js').pipe(gulp.dest('dist/public/vendor/jquery'));		 
  gulp.src('bower_components/jquery/dist/jquery.min.map').pipe(gulp.dest('dist/public/vendor/jquery'));		 
  gulp.src('bower_components/bootstrap/dist/**/*.*').pipe(gulp.dest('dist/public/vendor/bootstrap'));
});

gulp.task('clean', function () {
  return gulp.src('dist/public/vendor', {read: false})
    .pipe(clean());
});
