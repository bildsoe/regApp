var gulp = require('gulp');
var clean = require('gulp-clean');
var run = require('gulp-run');
var nodemon = require('gulp-nodemon');
var babel = require('gulp-babel');

gulp.task('default', ['transpiling'], function () {
  nodemon({ script: 'dist/app.js', ext: 'html js', ignore: ['ignored.js'] })
    .on('restart', function () {
      console.log('restarted!')
    })
});

gulp.task('transpiling',['copyHtml'], function () {
  return gulp.src('src/app.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('copyHtml', ['dependencies'], function () {
  return gulp.src('src/*.html').pipe(gulp.dest('dist/public'));		 
});

gulp.task('dependencies', ['js'], function () {
  gulp.src('bower_components/angular/angular.min.js').pipe(gulp.dest('dist/public/vendor/angular'));		 
  gulp.src('bower_components/angular/angular.min.js.map').pipe(gulp.dest('dist/public/vendor/angular'));		 
  gulp.src('bower_components/jquery/dist/jquery.js').pipe(gulp.dest('dist/public/vendor/jquery'));		 
  gulp.src('bower_components/jquery/dist/jquery.min.map').pipe(gulp.dest('dist/public/vendor/jquery'));		 
  
  gulp.src('bower_components/bootstrap/dist/**/*.*').pipe(gulp.dest('dist/public/vendor/bootstrap'));

  						
  gulp.src('bower_components/angular-formly/dist/**/*.*').pipe(gulp.dest('dist/public/vendor/angular-formly'));
  gulp.src('bower_components/angular-formly-templates-bootstrap/dist/**/*.*').pipe(gulp.dest('dist/public/vendor/angular-formly-templates-bootstrap'));
  gulp.src('bower_components/api-check/dist/*.*').pipe(gulp.dest('dist/public/vendor/api-check'));
});

gulp.task('js', ['clean'], function () {
  gulp.src('src/js/*.*').pipe(gulp.dest('dist/public/js'));
});

gulp.task('clean', function () {
  return gulp.src('dist/public/vendor', {read: false})
    .pipe(clean());
});
