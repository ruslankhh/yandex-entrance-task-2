import { reload } from 'browser-sync';
import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('watch', () => {
  gulp.watch(['.posthtmlrc', 'app/**/*.post.html'], () => {
    runSequence('markup', reload);
  });
  gulp.watch(['.babelrc', 'app/**/*.js'], () => {
    runSequence('scripts', reload);
  });
  gulp.watch(['app/static/**/*'], () => {
    runSequence('static', reload);
  });
  gulp.watch(['.postcssrc', 'app/**/*.post.css'], () => {
    runSequence('styles', reload);
  });
});
