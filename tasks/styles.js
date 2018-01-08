import gulp from 'gulp';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';

gulp.task('styles', () => {
  return gulp.src('app/styles/main.pcss')
    .pipe(postcss())
    .pipe(rename({ basename: 'styles', extname: '.css' }))
    .pipe(gulp.dest('public/assets/styles'));
});
