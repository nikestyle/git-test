import webpack from "webpack-stream"

export const vue = () => {
   return app.gulp.src(app.path.src.vue, { sourcemaps: true })
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: "JS",
            message: "Error: <%= error.message %>"
         })
      ))
      .pipe(webpack({
         mode: 'production',
         output: {
            filename: 'main.min.js',
         }
      }))

      .pipe(app.gulp.dest(app.path.build.vue))
      .pipe(app.plugins.browsersync.stream());
}