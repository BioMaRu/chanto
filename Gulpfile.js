const gulp = require('gulp')
const sass = require('gulp-sass')
const htmlmin = require('gulp-htmlmin')
const minifyInline = require('gulp-minify-inline')
const purgecss = require('gulp-purgecss')
const rev = require('gulp-rev')
const collect = require('gulp-rev-collector')

const sassOption = {
	outputStyle: 'compressed',
	includePaths: 'node_modules'
}

gulp.task('build-dev', () => gulp
	.src(['./styles/main.scss'])
	.pipe(sass(sassOption).on('error', sass.logError))
	.pipe(gulp.dest('./static/css'))
)

gulp.task('build-prod', () => gulp
	.src(['./styles/main.scss'])
	.pipe(sass(sassOption).on('error', sass.logError))
	.pipe(purgecss({ content: ['layouts/**/*.html', 'content/**/*.md'] }))
	.pipe(gulp.dest('./static/css'))
	.pipe(rev())
	.pipe(gulp.dest('./static/css'))
	.pipe(rev.manifest())
	.pipe(gulp.dest('rev'))
)

gulp.task('minify', function () {
	gulp.src(['./public/**/*.html'])
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true,
			minifyCSS: true,
			minifyJS: true
		}))
		.pipe(minifyInline())
		.pipe(gulp.dest('./public'))
});

gulp.task('collect', function () {
	return gulp.src(['rev/**/*.json', './public/**/*.html'])
		.pipe(collect({
			replaceReved: true,
		}))
		.pipe(gulp.dest('./public'))
});
