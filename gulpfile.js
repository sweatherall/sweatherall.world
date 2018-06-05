var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var coffee = require('gulp-coffee');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var lessFiles = 'src/**/**/*.less';
var lessDest = 'build/css';

var pugFiles = 'src/**/**/*.pug';
var pugDest = 'build/html';

var coffeeFiles = 'src/**/**/*.coffee';
var coffeeDest = 'build/js';

gulp.task('index', function(){
  return gulp.src('src/components/home/home.pug')
    .pipe(pug())
    .pipe(rename('index.html'))
    .pipe(gulp.dest('.'))
});

gulp.task('pug', function(){
  return gulp.src(pugFiles)
    .pipe(pug())
    .pipe(gulp.dest(pugDest))
});

gulp.task('less', function(){
  return gulp.src(lessFiles)
    .pipe(less())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(lessDest))
    .pipe(rename('styles.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(lessDest))
});

gulp.task('coffee', function(){
  return gulp.src(coffeeFiles, { sourcemaps: true })
    .pipe(coffee())
    .pipe(concat('main.js'))
    .pipe(gulp.dest(coffeeDest))
    .pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(coffeeDest))
});

gulp.task('all', gulp.series( gulp.parallel('pug', 'less', 'coffee'), 'index' ));
