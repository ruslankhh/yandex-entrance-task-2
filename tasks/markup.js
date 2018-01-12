import gulp from 'gulp';
import posthtml from 'gulp-posthtml';
import rename from 'gulp-rename';

gulp.task('markup', () => {
  return gulp.src('app/pages/**/*.post.html')
    .pipe(posthtml())
    .pipe(rename(path => {
      path.basename = path.basename.replace('.post', '');
    }))
    .pipe(gulp.dest('public'));
});
