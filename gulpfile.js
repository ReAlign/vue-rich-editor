const gulp = require('gulp');
const all = require('gulp-all');
const rename = require('gulp-rename');

gulp.task('copy-npm', () =>
    all(
        gulp
            .src(['./dist/*.js'])
            .pipe(gulp.dest('./npm-public/dist')),
        gulp
            .src('./package-npm.json')
            .pipe(rename({
                basename: 'package'
            }))
            .pipe(gulp.dest('./npm-public')),
        gulp.src(['./README.md', './releases.md']).pipe(gulp.dest('./npm-public'))
    )
);
