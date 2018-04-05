const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const less = require('gulp-less');

gulp.task('css', function(){

	gulp.src('./src/precss/styles.less')
		.pipe(sourcemaps.init())
        .pipe(less())/*
		.pipe(autoprefixer({
            browsers: ['> 0.01%'],
            cascade: false
        }))
        .on('error', console.error.bind(console))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))*/
		.pipe(gulp.dest('./src/css'))
		.pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['browserSync'], function(){
	gulp.watch('./src/precss/**/*.less', ['css'])
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    });
});