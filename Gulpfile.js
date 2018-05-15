const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const htmlmin = require('gulp-htmlmin')
const minifyInline = require('gulp-minify-inline')

gulp.task('build', function () {
	const outputConfigs = {
		src: './styles/main.scss',
		prefix: 'chanto.',
		basename: 'biomatic'
	}
	generateCSS(outputConfigs)
})

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

function generateCSS({ src = '', prefix = '', basename = '' }) {
	gulp
		.src(src)
		.pipe(sass({
			includePaths: ['node_modules'],
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer({ browsers: ['last 2 versions'] }))
		.pipe(
			rename({
				basename,
				prefix,
				suffix: '.min',
				extname: '.css'
			})
		)
		.pipe(gulp.dest('./static/css'))
}