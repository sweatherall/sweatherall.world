var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var lessFiles = 'src/**/**/*.less';
var lessDest = 'build/css';

gulp.task('pug', function(){
  return gulp.src('src/**/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build/html'))
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

gulp.task('all', [ 'pug', 'less' ]);
