import gulp from 'gulp';

gulp.task('static', () => {
  return gulp.src('app/static/**/*')
    .pipe(gulp.dest('public/assets'));
});
