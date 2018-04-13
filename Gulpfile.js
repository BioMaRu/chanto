const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')

gulp.task('build', function() {
  const outputConfigs = {
    src: './styles/main.scss',
    prefix: 'chanto.',
    basename: 'biomatic'
  }
  generateCSS(outputConfigs)
})

function generateCSS({ src = '', prefix = '', basename = '' }) {
  gulp
    .src(src)
    .pipe(sass({
      includePaths: ['node_modules'],
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
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