const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass')(require('sass')); // Explicitly set sass compiler
const browserSync = require('browser-sync').create();

function initBrowserSync(){
  browserSync.init({
    server: "./"
  });
}


// Define styles task
function styles() {
  let plugins = [
      autoprefixer({overrideBrowserslist: ['last 2 version']}) // Changed 'browsers' to 'overrideBrowserslist'
  ];
  return gulp.src('./scss/*.scss')
        .pipe(sass().on('error', sass.logError)) // Added error logging for sass
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
}

// Define watch task
function watchFiles() {
  initBrowserSync();
  gulp.watch('./scss/*.scss', styles); // Use function reference
  gulp.watch("./*.html").on('change', browserSync.reload);
}

// Register tasks
gulp.task('styles', styles);
gulp.task('watch', watchFiles);
gulp.task('default', gulp.series(styles)); // Use gulp.series
