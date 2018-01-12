import gulp from 'gulp';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';

gulp.task('styles', () => {
  return gulp.src('app/styles/main.post.css')
    .pipe(postcss())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('public/assets/styles'));
});
