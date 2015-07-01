/**
 * Created by klim on 3/14/15.
 */

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var watch = require('gulp-watch');
var jade = require('gulp-jade');
var include = require('gulp-include');
var autoprefixer = require('gulp-autoprefixer');

// Paths for tasks
var paths = {
    sass: './assets/sass/',
    scripts: './app/**/*.js',
    jade: [
        './app/module/**/*.jade',
        './public/*.jade'
    ],
    fonts: './bower_components/bootstrap-sass/assets/fonts/**/*'
};

// Styles task
gulp.task('styles', function() {
    return sass(paths.sass, {
        style: 'expanded',
        loadPath:[
            './bower_components/bootstrap-sass/assets/stylesheets/'
        ]})
        .on('error', function(err) {
            console.error('Error!', err.message);
        })
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./build/css/'));
});

// Scripts task
gulp.task("scripts", function() {
    return gulp.src('./app/**/*.js')
        .pipe(include({
            extensions: 'js'
        }))
        .pipe(gulp.dest("./build/js"));
});

// Fonts task
gulp.task('fonts', function() {
    return gulp.src(paths.fonts).pipe(gulp.dest('./build/fonts'));
});

// Templates (jade) task
gulp.task('templates', function() {
    return gulp.src(paths.jade)
        .pipe(jade())
        .pipe(gulp.dest('./build/'));
});

// Build task
gulp.task('build', ['styles', 'templates', 'fonts', 'scripts']);

// Watch task
gulp.task('watch', function() {
    gulp.watch(paths.sass, ['styles']);
    gulp.watch(paths.jade, ['templates']);
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.fonts, ['fonts']);
});
