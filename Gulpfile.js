const gulp = require('gulp')
const sass = require('gulp-sass')
const htmlmin = require('gulp-htmlmin')
const minifyInline = require('gulp-minify-inline')
const purgecss = require('gulp-purgecss')
const filenames = require('gulp-filenames')

const sassOption = {
	outputStyle: 'compressed',
	includePaths: 'node_modules'
}

gulp.task('build-dev', () => gulp
	.src('./styles/main.scss')
	.pipe(sass(sassOption).on('error', sass.logError))
	// .pipe(filenames('style'))
	.pipe(gulp.dest('./static/css'))
)

gulp.task('build-prod', () => gulp
	.src('./styles/main.scss')
	.pipe(sass(sassOption).on('error', sass.logError))
	.pipe(purgecss({ content: ['layouts/**/*.html'] }))
	// .pipe(filenames('style'))
	.pipe(gulp.dest('./static/css'))
)

gulp.task('minify', function () {
	gulp.src('./public/**/*.html')
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true,
			minifyCSS: true,
			minifyJS: true
		}))
		.pipe(minifyInline())
		.pipe(gulp.dest('./public'))
});
