var gulp = require('gulp'),
	tap = require('gulp-tap'),
	del = require('del'),
	runSequence = require('run-sequence')


gulp.task('css', function() {
	return gulp.src('css/**/*.css')
		.pipe(gulp.dest('dist/css'))
})

gulp.task('js', function() {
	return gulp.src('js/**/*.js')
		.pipe(gulp.dest('dist/js'))
})

gulp.task('html', function() {
	return gulp.src('index.html')
		.pipe(gulp.dest('dist'))
})

gulp.task('build', function () {
	del.sync('dist');
	runSequence(['html', 'js', 'css'])
});


