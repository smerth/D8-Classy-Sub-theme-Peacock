// node-gyp@3.2.1 - npm complains this should be installed globally -g, so do that first!
// npm always complains about lodash being out of date... no idea how to resolve
var gulp = require('gulp');
var livereload = require('gulp-livereload');

// gulp-ugilfyjs deprecated, use gulp-uglify
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');


gulp.task('imagemin', function () {
    return gulp.src('./images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./images'));
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'));
});


// gulp.task('uglify', function() {
//   gulp.src('./lib/*.js')
//     .pipe(uglify('main.js'))
//     .pipe(gulp.dest('./js'))
// });

gulp.task('uglify', function() {
  return gulp.src('./lib/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
});



gulp.task('watch', function(){
    livereload.listen();

    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./lib/*.js', ['uglify']);
    gulp.watch(['./css/style.css', './**/*.twig', './js/*.js'], function (files){
        livereload.changed(files)
    });
});
