// import concat from "gulp-concat";

export const user = () => {
   return app.gulp.src(app.path.src.user, { sourcemaps: true })
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: "JS",
            message: "Error: <%= error.message %>"
         })
      ))
      // .pipe(concat('user.js'))
      .pipe(app.gulp.dest(app.path.build.user))
      .pipe(app.plugins.browsersync.stream());
}