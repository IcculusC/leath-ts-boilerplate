var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('typescript', function() {
  return gulp.src('./src/ts/main.ts')
    .pipe(ts({
      outDir: './src/js',
      module: 'commonjs',
      target: 'ES5'
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['typescript'], function() {
  return gulp.watch(['./src/**/*.ts'], ['typescript']);
});
