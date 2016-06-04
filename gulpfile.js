var gulp=require('gulp'),
	minifyCSS=require('gulp-minify-css'),
	concat=require('gulp-concat'),
	rename=require('gulp-rename');

// task
gulp.task('minifyCSS',function () {
	gulp.src(['src/main.css','src/iconfont.css','src/reset.css'])
		.pipe(concat('style.css'))
		.pipe(minifyCSS())
		.pipe(rename({
			suffix:'.min'
		}))
		.pipe(gulp.dest('dist'));
})
gulp.task('watch', function () {
    gulp.watch(['src/css/*.css'], ['minifyCSS']);
});
gulp.task('default', ['minifyCSS', 'watch']);
