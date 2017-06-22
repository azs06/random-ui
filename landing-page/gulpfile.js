const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function initBrowserSync(){
  browserSync.init({
    server: "./"
  });
}


gulp.task('styles', ()=>{
  let plugins = [
      autoprefixer({browsers: ['last 2 version']})
  ];
  return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
})

gulp.task('watch', ()=>{
  initBrowserSync();
  gulp.watch('./scss/*.scss', ['styles']);
  gulp.watch("./*.html").on('change', browserSync.reload);
})

gulp.task('default', ['styles']);
