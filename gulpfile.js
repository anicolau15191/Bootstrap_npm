const gulp = require('gulp');
const {series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function buildStyles(){
    return gulp.src("./scss/**/*.scss")
    .pipe(sass(/*{outputStyle: 'compressed'}*/).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
}

function copy(){
    return gulp.src('node_modules/bootstrap/dist/js/*')
        .pipe(gulp.dest('js'));
}

exports.compile=buildStyles;
exports.copy=copy;
exports.build=series(buildStyles,copy);