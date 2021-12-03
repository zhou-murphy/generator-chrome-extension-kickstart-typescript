import gulp from 'gulp'
import del from 'del'
import args from './lib/args.js'

gulp.task('clean', () => {
  return del(`dist/${args.vendor}/**/*`)
})
