const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

// scss -> css
function style() {
    // where is sass?
    return gulp.src("./scss/**/*.scss")
        // pass through sass compiler (convert to css)
            .pipe(sass())
        // saving compiled css
            .pipe(gulp.dest("./css"))
        // sync changes to browser
            .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./scss/**/*.scss", style); // run style
    gulp.watch("./**/*.html").on("change", browserSync.reload);
    gulp.watch("./js/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;