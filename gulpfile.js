var fs = require("fs");
var browserify = require("browserify");
var babelify = require('babelify');
var gulp = require('gulp');

gulp.task('modules', function() {
    browserify("./script.js")
      .transform("babelify", {presets: ["es2015", "stage-1"]})
      .bundle()
      .pipe(fs.createWriteStream("bundle.js"));
});

gulp.task("watch", function(){
    gulp.watch('./src/**/*.js', ['modules'])
});

gulp.task('default', ['modules', 'watch'])