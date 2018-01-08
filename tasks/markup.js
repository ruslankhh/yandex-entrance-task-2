import gulp from 'gulp';
import posthtml from 'gulp-posthtml';

gulp.task('markup', () => {
  return gulp.src('app/pages/**/*.html')
    .pipe(posthtml())
    .pipe(gulp.dest('public'));
});
