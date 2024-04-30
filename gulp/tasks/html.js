import fileInclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";


const validImg = true;

export const html = () => {
   return app.gulp.src(app.path.src.html)
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>"
         }
         )
      ))
      .pipe(fileInclude())
      .pipe(webpHtmlNosvg()) //2nd
      .pipe(app.plugins.replace(/@img\//g, 'assets/img/')) //1st
      // .pipe(app.plugins.replace(/@css\//g, 'assets/css/')) //1st
      // .pipe(app.plugins.replace(/@js\//g, 'assets/js/')) //1st
      .pipe(app.plugins.replace(/@svg\//g, 'assets/img/icons/')) //1st
      .pipe(
         versionNumber({
            'value': '%DT%',
            'append': {
               'key': '_version',
               'cover': 0,
               'to': [
                  'css',
                  'js',
               ]
            },
            'output': {
               'file': 'gulp/version.json'
            }
         })
      )
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browsersync.stream());
}