var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');

gulp.task('css', function() {
    gulp.src('./css/style.css')
    .pipe(minifyCSS({keepSpecialComments: 0}))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', function() {
    gulp.watch('./css/style.css', ['css'])
});

gulp.task('default', ['watch']);
