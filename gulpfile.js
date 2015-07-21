var gulp = require('gulp');
var clean = require('gulp-clean');
var run = require('gulp-run');
var nodemon = require('gulp-nodemon');
var babel = require('gulp-babel');

var dependencies = function () {
  gulp.src('bower_components/angular/angular.min.js').pipe(gulp.dest('dist/public/vendor/angular'));     
  gulp.src('bower_components/angular/angular.min.js.map').pipe(gulp.dest('dist/public/vendor/angular'));     
  
  gulp.src('bower_components/angular-route/angular-route.min.js').pipe(gulp.dest('dist/public/vendor/angular-route'));
  gulp.src('bower_components/angular-route/angular-route.min.js.map').pipe(gulp.dest('dist/public/vendor/angular-route'));

  gulp.src('bower_components/angular-ui-grid/*.*').pipe(gulp.dest('dist/public/vendor/angular-ui-grid'));

  gulp.src('bower_components/jquery/dist/jquery.js').pipe(gulp.dest('dist/public/vendor/jquery'));     
  gulp.src('bower_components/jquery/dist/jquery.min.map').pipe(gulp.dest('dist/public/vendor/jquery'));    
  
  gulp.src('bower_components/bootstrap/dist/**/*.*').pipe(gulp.dest('dist/public/vendor/bootstrap'));
            
  gulp.src('bower_components/angular-formly/dist/**/*.*').pipe(gulp.dest('dist/public/vendor/angular-formly'));
  gulp.src('bower_components/angular-formly-templates-bootstrap/dist/**/*.*').pipe(gulp.dest('dist/public/vendor/angular-formly-templates-bootstrap'));
  gulp.src('bower_components/api-check/dist/*.*').pipe(gulp.dest('dist/public/vendor/api-check'));
};

var copyHtml = function () {
  gulp.src('src/*.html').pipe(gulp.dest('dist/public'));
  gulp.src('src/views/*.*').pipe(gulp.dest('dist/public/views'));    
};

var copyJs = function () {
  gulp.src('src/js/*.*').pipe(gulp.dest('dist/public/js'));
};

gulp.task('default', ['transpiling'], function () {
  nodemon({ script: 'dist/app.js', ext: 'html js', ignore: ['ignored.js'] })
    .on('restart', function () {
      copyHtml();
      copyJs();
      console.log('restarted!')
    })
});

gulp.task('transpiling',['copyHtml'], function () {
  return gulp.src('src/app.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

//TODO: Implement gulp-less on bootstrap

gulp.task('copyHtml', ['dependencies'], copyHtml);

gulp.task('dependencies', ['copyJs'], dependencies);

gulp.task('copyJs', ['clean'], copyJs);

gulp.task('clean', function () {
  return gulp.src('dist/public/vendor', {read: false})
    .pipe(clean());
});
