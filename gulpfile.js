const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const rename = require("gulp-rename");
const cssmin = require("cssmin");

gulp.task("browser-sync", function() {
  browserSync.init({
    server: {
      baseDir: "./src"
    }
  });
  gulp.watch("./src/*.html").on("change", browserSync.reload);
});
