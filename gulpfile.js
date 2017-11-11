var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var lessFiles = 'src/**/*.less';
var lessDest = 'build/css';

gulp.task('html', function(){
  return gulp.src('src/*/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build/html'))
});

gulp.task('css', function(){
  return gulp.src(lessFiles)
    .pipe(less())
    .pipe(concat('styles.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(lessDest))
});

gulp.task('default', [ 'html', 'css' ]);
