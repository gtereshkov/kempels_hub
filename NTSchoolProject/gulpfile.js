const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

gulp.task('css', function(){

	gulp.src('./src/precss/**/*.css')
		.pipe(sourcemaps.init())
		.pipe(autoprefixer({
            browsers: ['> 0.01%'],
            cascade: false
        }))
        .on('error', console.error.bind(console))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./src/css'))
		.pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['browserSync'], function(){
	gulp.watch('./src/precss/**/*.css', ['css'])
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    });
});