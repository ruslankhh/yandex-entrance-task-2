import gulp from 'gulp';
import babel from 'gulp-babel';
import rename from 'gulp-rename';

gulp.task('scripts', () => {
  return gulp.src('app/scripts/main.js')
    .pipe(babel())
    .pipe(rename({ basename: 'build' }))
    .pipe(gulp.dest('public/assets/scripts'));
});
